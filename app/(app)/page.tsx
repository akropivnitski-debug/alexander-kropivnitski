export const revalidate = 60

import { cache } from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlockRenderer } from '@/components/BlockRenderer'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { resolveImage } from '@/lib/resolveImage'

const getHomeData = cache(async () => {
  const payload = await getPayload({ config })
  const [siteSettings, header, footer, result] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings' }),
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
    payload.find({
      collection: 'pages',
      where: {
        and: [
          { slug: { equals: 'home' } },
          { _status: { equals: 'published' } },
        ],
      },
      limit: 1,
    }),
  ])
  return { siteSettings, header, footer, page: result.docs[0] ?? null }
})

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings, page } = await getHomeData()
  const meta = page?.meta

  const title       = meta?.title       || siteSettings.siteName        || 'Alexander Kropivnitski'
  const description = meta?.description || siteSettings.siteDescription || undefined
  const ogImageUrl  = resolveImage(meta?.ogImage) ?? resolveImage(siteSettings.defaultOgImage) ?? undefined

  const noIndex = meta?.noIndex ?? false

  return {
    title,
    description,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      title,
      siteName: siteSettings.siteName ?? 'Alexander Kropivnitski',
      ...(description ? { description }                  : {}),
      ...(ogImageUrl  ? { images: [{ url: ogImageUrl }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      ...(description                    ? { description }              : {}),
      ...(ogImageUrl                     ? { images: [ogImageUrl] }     : {}),
      ...(siteSettings.twitterHandle     ? { site: siteSettings.twitterHandle } : {}),
    },
  }
}

export default async function Home() {
  const { header, footer, page } = await getHomeData()

  return (
    <>
      <Header data={header} />
      <main className="bg-background relative min-h-screen w-full">
        {page && <BlockRenderer blocks={page.layout ?? []} />}
      </main>
      <Footer data={footer} />
    </>
  );
}
