export const dynamic = 'force-dynamic'

import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = (process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000').trim()

  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: { _status: { equals: 'published' } },
    limit: 200,
    select: { slug: true, updatedAt: true },
  })

  return result.docs.map((page) => ({
    url: `${base}/${page.slug === 'home' ? '' : page.slug}`,
    lastModified: page.updatedAt ? new Date(page.updatedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: page.slug === 'home' ? 1 : 0.8,
  }))
}
