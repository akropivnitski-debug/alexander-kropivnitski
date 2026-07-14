export const dynamic = 'force-dynamic'

import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ALL_MERGED_SLUGS } from '@/lib/roleRedirects'

const PRIORITY_MAP: Record<string, number> = {
  pillar: 0.9,
  pillar_support: 0.8,
  tool: 0.8,
  topic: 0.7,
  job_role: 0.7,
  job_role_location: 0.6,
  general: 0.7,
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = (process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000').trim()

  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: {
      _status: { equals: 'published' },
      'meta.noIndex': { not_equals: true },
    },
    limit: 500,
    select: { slug: true, pageType: true, updatedAt: true },
  })

  return result.docs
    .filter((page) => !(page.slug in ALL_MERGED_SLUGS))
    .map((page) => {
    const isHome = page.slug === 'home'
    const pageType = (page as { pageType?: string }).pageType ?? 'general'

    return {
      url: `${base}/${isHome ? '' : page.slug}`,
      lastModified: page.updatedAt ? new Date(page.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: isHome ? 1 : (PRIORITY_MAP[pageType] ?? 0.7),
    }
  })
}
