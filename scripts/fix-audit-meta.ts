// Fixes from the SEO audit (2026-07-12) that need real DB access:
// - 4 pages with empty meta.title (falls back to bare site name, doubling
//   up with the layout's title template)
// - 5 pages missing meta.description entirely
// - /test-blocks (internal block-showcase page) flagged noIndex — it's a
//   real, intentional page, just not meant for public search
//
// Run with: set -a && source .env.local && set +a && npx tsx scripts/fix-audit-meta.ts

import { getPayload } from 'payload'
import config from '../payload.config'

const fixes: Record<string, { title?: string; description?: string; noIndex?: boolean }> = {
  seo: {
    title: 'SEO & GEO Expert',
    description:
      'SEO and GEO services that grow organic search and AI-search visibility together — built on 10+ years of experience across 25+ international markets.',
  },
  'marketing-technology': {
    title: 'Marketing Technology',
    description:
      'Marketing technology ecosystems that connect data, automate workflows, and enable smarter decisions — from tag management to data warehousing.',
  },
  'web-development': {
    title: 'Web Development',
    description:
      'Fast, modern web applications built with React, Next.js, and TypeScript — from marketing websites to complex full-stack platforms.',
  },
  'performance-marketing': {
    description:
      'Paid media programs built on $150M+ in managed ad spend across 25+ countries, generating $350M+ in gross market value at a consistent 400% ROAS.',
  },
  'test-blocks': {
    title: 'Block Showcase (Internal)',
    description: 'Internal preview page for testing CMS block components. Not intended for public search visibility.',
    noIndex: true,
  },
}

async function main() {
  const payload = await getPayload({ config })

  for (const [slug, fix] of Object.entries(fixes)) {
    const res = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const doc = res.docs[0]
    if (!doc) {
      console.log(`✗ ${slug}: not found, skipping`)
      continue
    }

    const meta = { ...(doc.meta ?? {}) }
    if (fix.title) meta.title = fix.title
    if (fix.description) meta.description = fix.description
    if (fix.noIndex !== undefined) meta.noIndex = fix.noIndex

    await payload.update({
      collection: 'pages',
      id: doc.id,
      data: { meta, _status: 'published' },
    })
    console.log(`✓ ${slug}: updated meta`, fix)
  }

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
