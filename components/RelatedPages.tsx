import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

const CORE_PAGES = ['seo', 'web-development', 'marketing-technology', 'performance-marketing', 'fractional-cmo']

// Industry/location spoke pages (e.g. seo-for-appliance-repair, seo-agency-paris) all
// share the same generic pageType, so grouping by pageType alone can't tell them apart —
// it just alphabetically picks whichever prefix sorts first, regardless of the page you're
// on. Cluster by the service slug prefix instead, which also lets a core service page
// (e.g. /seo) surface its own spokes.
function getClusterKey(slug: string): string | null {
  if (CORE_PAGES.includes(slug)) return slug
  for (const service of CORE_PAGES) {
    if (slug.startsWith(`${service}-for-`) || slug.startsWith(`${service}-agency-`)) {
      return service
    }
  }
  return null
}

export async function RelatedPages({ slug, pageType }: { slug: string; pageType?: string }) {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: {
      and: [
        { _status: { equals: 'published' } },
        { slug: { not_equals: slug } },
        { slug: { not_equals: 'home' } },
        { 'meta.noIndex': { not_equals: true } },
      ],
    },
    limit: 300,
    select: { slug: true, title: true, meta: true, pageType: true },
  })

  const docs = result.docs as Array<{
    slug: string
    title: string
    meta?: { title?: string | null } | null
    pageType?: string | null
  }>

  const clusterKey = getClusterKey(slug)
  const sameCluster = clusterKey
    ? docs.filter((d) => getClusterKey(d.slug) === clusterKey).sort((a, b) => a.slug.localeCompare(b.slug))
    : []
  const sameType = !clusterKey && pageType
    ? docs.filter((d) => d.pageType === pageType).sort((a, b) => a.slug.localeCompare(b.slug))
    : []

  const seen = new Set<string>()
  const picks: typeof docs = []

  for (const d of [...sameCluster, ...sameType]) {
    if (picks.length >= 4) break
    if (seen.has(d.slug)) continue
    seen.add(d.slug)
    picks.push(d)
  }

  for (const coreSlug of CORE_PAGES) {
    if (picks.length >= 6) break
    if (coreSlug === slug || seen.has(coreSlug)) continue
    const doc = docs.find((d) => d.slug === coreSlug)
    if (!doc) continue
    seen.add(coreSlug)
    picks.push(doc)
  }

  // Fill any remaining slots with GEO/SEO pillar content — broadly relevant "further
  // reading" for any commercial page once cluster-specific links are exhausted.
  if (picks.length < 6) {
    const pillars = docs
      .filter((d) => d.pageType === 'pillar_support')
      .sort((a, b) => a.slug.localeCompare(b.slug))
    for (const d of pillars) {
      if (picks.length >= 6) break
      if (seen.has(d.slug)) continue
      seen.add(d.slug)
      picks.push(d)
    }
  }

  if (picks.length === 0) return null

  return (
    <section className="w-full border-t border-foreground/10 bg-background px-8 py-12 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Explore More
        </h2>
        <div className="flex flex-wrap gap-3">
          {picks.map((d) => (
            <Link
              key={d.slug}
              href={`/${d.slug}`}
              className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              {d.meta?.title || d.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
