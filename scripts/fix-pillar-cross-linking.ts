// Fixes two related audit findings at once:
// 1. (cluster.md, Critical) Zero inbound links from the 5 core pillars to
//    any of the (now 31) blog posts -- fixed here for the 4 pillars that
//    have new posts targeting them (seo has none this round, left alone).
// 2. (technical.md, Medium) fractional-cmo's existing "Related Topics" block
//    links to 4 URLs (head-of-growth, head-of-marketing, director-of-growth,
//    director-of-digital-marketing) that now 308-redirect back to
//    /fractional-cmo itself -- replaced with direct, current links.
//
// fractional-cmo already has a cardGrid "Related Topics" block: edited in
// place (stale cards removed, new post cards added, valid cards kept).
// performance-marketing / marketing-technology / web-development have no
// such block yet: a new cardGrid is inserted before the trailing cta block.
//
// Run with: set -a && source .env.local && set +a && npx tsx scripts/fix-pillar-cross-linking.ts

import { getPayload } from 'payload'
import config from '../payload.config'
import { relatedTopicsBlock } from './lib/lexical-helpers'

async function main() {
  const payload = await getPayload({ config })

  // --- 1. fractional-cmo: fix existing cardGrid in place ---
  {
    const res = await payload.find({ collection: 'pages', where: { slug: { equals: 'fractional-cmo' } }, limit: 1 })
    const doc = res.docs[0]
    const layout = doc.layout as any[]
    const newCards = [
      { title: 'Performance Marketing', description: 'Paid acquisition services.', href: '/performance-marketing' },
      { title: 'Google Ads', description: 'Search advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Meta advertising.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising on Bing.', href: '/microsoft-ads' },
      { title: 'Fractional CMO vs. Full-Time', description: 'Real cost/outcome breakdown.', href: '/fractional-cmo-vs-full-time-cmo' },
      { title: '90-Day Fractional CMO Engagement', description: 'What actually happens, week by week.', href: '/fractional-cmo-90-day-engagement' },
      { title: 'Signs You Need a Fractional CMO', description: 'Diagnostic signals vs. an in-house hire.', href: '/signs-you-need-a-fractional-cmo' },
      { title: 'Fractional CMO Pricing by Stage', description: 'How fees scale from pre-seed to growth.', href: '/fractional-cmo-pricing-by-stage' },
    ]
    const newLayout = layout.map((block: any) => {
      if (block.blockType === 'cardGrid' && block.heading === 'Related Topics') {
        return { ...block, cards: newCards }
      }
      return block
    })
    await payload.update({ collection: 'pages', id: doc.id, data: { layout: newLayout, _status: 'published' } })
    console.log('✓ fractional-cmo: Related Topics updated (4 stale redirects removed, 4 new posts added)')
  }

  // --- 2. Pillars needing a brand-new Related Topics block ---
  const newBlockConfigs: { slug: string; cards: { title: string; description: string; href: string }[] }[] = [
    {
      slug: 'performance-marketing',
      cards: [
        { title: 'Performance Marketing Retainer Structure', description: 'Fee models, scope, and how to know it\'s working.', href: '/performance-marketing-retainer-structure' },
        { title: 'Marketing Mix Modeling', description: 'MMM with Google Meridian.', href: '/marketing-mix-modeling-google-meridian' },
        { title: 'GeoX & Multicell Testing', description: 'Beyond A/B testing for real incrementality.', href: '/geox-multicell-incrementality-testing' },
        { title: 'Paid Social Beyond Meta', description: 'TikTok, Snapchat, and Pinterest.', href: '/tiktok-snapchat-pinterest-paid-social' },
        { title: 'Incrementality Testing', description: 'Foundational causal measurement.', href: '/incrementality-testing' },
        { title: 'Fractional CMO', description: 'Part-time marketing leadership.', href: '/fractional-cmo' },
      ],
    },
    {
      slug: 'marketing-technology',
      cards: [
        { title: 'GA4, BigQuery, Looker Studio', description: 'Building a single source of truth.', href: '/ga4-bigquery-looker-studio-single-source-of-truth' },
        { title: 'Lead Routing & Scoring', description: 'A practical setup guide.', href: '/lead-routing-scoring-setup-guide' },
        { title: 'Marketing Technology Stack Guide', description: 'What to check first.', href: '/marketing-technology-stack-guide' },
        { title: 'BigQuery', description: 'Data warehousing.', href: '/bigquery' },
        { title: 'Google Analytics 4', description: 'Analytics implementation.', href: '/google-analytics-4' },
      ],
    },
    {
      slug: 'web-development',
      cards: [
        { title: 'Headless vs. Traditional CMS', description: 'Choosing the right foundation.', href: '/headless-vs-traditional-cms' },
        { title: 'Next.js', description: 'For marketing websites.', href: '/next-js' },
        { title: 'React', description: 'Component architecture.', href: '/react' },
        { title: 'What Makes a Website Convert', description: 'Conversion fundamentals.', href: '/what-makes-a-marketing-website-convert' },
      ],
    },
  ]

  for (const { slug, cards } of newBlockConfigs) {
    const res = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1 })
    const doc = res.docs[0]
    const layout = doc.layout as any[]

    const alreadyHas = layout.some((b: any) => b.blockType === 'cardGrid' && b.heading === 'Related Reading')
    if (alreadyHas) {
      console.log(`✓ ${slug}: Related Reading block already present, skipping`)
      continue
    }

    const newBlock = { ...relatedTopicsBlock(cards), heading: 'Related Reading' }
    const ctaIndex = layout.findIndex((b: any) => b.blockType === 'cta')
    const newLayout =
      ctaIndex === -1
        ? [...layout, newBlock]
        : [...layout.slice(0, ctaIndex), newBlock, ...layout.slice(ctaIndex)]

    await payload.update({ collection: 'pages', id: doc.id, data: { layout: newLayout, _status: 'published' } })
    console.log(`✓ ${slug}: added new "Related Reading" block with ${cards.length} cards`)
  }

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
