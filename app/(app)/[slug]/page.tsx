export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlockRenderer } from '@/components/BlockRenderer'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { resolveImage } from '@/lib/resolveImage'

type Props = { params: Promise<{ slug: string }> }

async function getPage(slug: string) {
  const payload = await getPayload({ config })
  const [siteSettings, header, footer, result] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings' }),
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
    payload.find({
      collection: 'pages',
      where: {
        and: [
          { slug: { equals: slug } },
          { _status: { equals: 'published' } },
        ],
      },
      limit: 1,
    }),
  ])
  return { page: result.docs[0] ?? null, siteSettings, header, footer }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { page, siteSettings } = await getPage(slug)
  if (!page) return {}

  const meta = page.meta
  const title       = meta?.title       || siteSettings.siteName        || 'Alexander Kropivnitski'
  const description = meta?.description || siteSettings.siteDescription || undefined
  const ogImageUrl  = resolveImage(meta?.ogImage) ?? resolveImage(siteSettings.defaultOgImage) ?? undefined
  const noIndex     = meta?.noIndex ?? false

  return {
    title,
    description,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: { canonical: `/${slug}` },
    openGraph: {
      type: 'website',
      title,
      siteName: siteSettings.siteName ?? 'Alexander Kropivnitski',
      ...(description ? { description }                   : {}),
      ...(ogImageUrl  ? { images: [{ url: ogImageUrl }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      ...(description                ? { description }                          : {}),
      ...(ogImageUrl                 ? { images: [ogImageUrl] }                 : {}),
      ...(siteSettings.twitterHandle ? { site: siteSettings.twitterHandle }     : {}),
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const { page, header, footer } = await getPage(slug)

  if (!page) notFound()

  return (
    <>
      <Header data={header} />
      <main className="bg-black relative min-h-screen w-full">
        <BlockRenderer blocks={page.layout ?? []} />
      </main>
      <Footer data={footer} />
    </>
  )
}
