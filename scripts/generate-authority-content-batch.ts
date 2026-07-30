/**
 * Converts the 11 hand-written blog post drafts (from the audit's approved
 * "genuine blog content, not templated pages" growth direction) into Payload
 * PageDrafts and writes them as JSON to content/drafts/authority-content/.
 *
 * Deliberately does NOT use buildTopicPage()'s rigid What-It-Is/Why-It-
 * Matters/Key-Concepts/Practical-Experience template — these posts each have
 * their own natural section structure (a practical guide isn't shaped like
 * an explainer), so sections are built directly from each markdown file's
 * own ## headings via aboutSimpleBlock.
 *
 * Also deliberately gives each post its OWN topic-relevant related-cards
 * list (from each file's frontmatter suggested_internal_links, plus
 * sibling posts on adjacent topics) rather than one static block repeated
 * on every page — that exact pattern (every post linking to the same fixed
 * 4 posts regardless of topic) is a Critical finding in cluster.md.
 *
 * Source markdown: /Users/alexander/Claude/alexanderkropivnitski.com-audit/content-drafts/
 * Run with: npx tsx scripts/generate-authority-content-batch.ts
 * (no DB connection needed — this only writes JSON files)
 */

import fs from 'fs'
import path from 'path'
import {
  heroV3Block,
  aboutSimpleBlock,
  faqBlock,
  relatedTopicsBlock,
  ctaBlock,
  type PageDraft,
} from './lib/lexical-helpers'

const SOURCE_DIR = '/Users/alexander/Claude/alexanderkropivnitski.com-audit/content-drafts'
const OUT_DIR = path.resolve('content/drafts/authority-content')
fs.mkdirSync(OUT_DIR, { recursive: true })

interface ParsedPost {
  frontmatter: Record<string, any>
  title: string
  sections: { heading: string; content: string }[]
  faqItems: { question: string; answer: string }[]
  ctaHeading: string
  ctaDescription: string
}

function parseFrontmatter(raw: string): { frontmatter: Record<string, any>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error('No frontmatter found')
  const [, fmRaw, body] = match
  const frontmatter: Record<string, any> = {}
  let currentKey: string | null = null
  let currentList: string[] | null = null
  for (const line of fmRaw.split('\n')) {
    const listItemMatch = line.match(/^\s+-\s+(.+)$/)
    if (listItemMatch && currentKey && currentList) {
      currentList.push(listItemMatch[1].trim())
      continue
    }
    const kvMatch = line.match(/^(\w+):\s*(.*)$/)
    if (kvMatch) {
      const [, key, value] = kvMatch
      if (value.trim() === '') {
        currentKey = key
        currentList = []
        frontmatter[key] = currentList
      } else {
        currentKey = null
        currentList = null
        frontmatter[key] = value.trim().replace(/^"(.*)"$/, '$1')
      }
    }
  }
  return { frontmatter, body }
}

function parseBody(body: string): { title: string; sections: { heading: string; content: string }[] } {
  const lines = body.split('\n')
  let title = ''
  const sections: { heading: string; content: string }[] = []
  let currentHeading: string | null = null
  let currentContent: string[] = []

  for (const line of lines) {
    const h1 = line.match(/^# (.+)$/)
    const h2 = line.match(/^## (.+)$/)
    if (h1) {
      title = h1[1].trim()
      continue
    }
    if (h2) {
      if (currentHeading) sections.push({ heading: currentHeading, content: currentContent.join('\n').trim() })
      currentHeading = h2[1].trim()
      currentContent = []
      continue
    }
    if (currentHeading) currentContent.push(line)
  }
  if (currentHeading) sections.push({ heading: currentHeading, content: currentContent.join('\n').trim() })
  return { title, sections }
}

function parseFaqSection(content: string): { question: string; answer: string }[] {
  const items: { question: string; answer: string }[] = []
  const parts = content.split(/^### /m).filter(Boolean)
  for (const part of parts) {
    const lines = part.split('\n')
    const question = lines[0].trim()
    const answer = lines.slice(1).join('\n').trim()
    if (question && answer) items.push({ question, answer })
  }
  return items
}

function cleanParagraphs(content: string): string {
  // Collapse markdown bullet lists into plain paragraphs (parseContent
  // handles paragraphs + inline **bold**/[link](url), not list syntax) and
  // strip stray heading markers so it renders cleanly through aboutSimpleBlock.
  return content
    .split('\n\n')
    .map((p) => p.replace(/^-\s+/gm, '').replace(/\n/g, ' ').trim())
    .filter(Boolean)
    .join('\n\n')
}

function parsePost(filePath: string): ParsedPost {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { frontmatter, body } = parseFrontmatter(raw)
  const { title, sections } = parseBody(body)

  const faqSection = sections.find((s) => s.heading === 'FAQ')
  const faqItems = faqSection ? parseFaqSection(faqSection.content) : []

  // Last section before FAQ removal is the closing CTA (e.g. "Want this
  // structured for your account?" + [Get in Touch]).
  const nonFaqSections = sections.filter((s) => s.heading !== 'FAQ')
  const ctaSection = nonFaqSections[nonFaqSections.length - 1]
  const contentSections = nonFaqSections.slice(0, -1)

  return {
    frontmatter,
    title,
    sections: contentSections.map((s) => ({ heading: s.heading, content: cleanParagraphs(s.content) })),
    faqItems,
    ctaHeading: ctaSection?.heading ?? 'Want this applied to your situation?',
    ctaDescription: cleanParagraphs((ctaSection?.content ?? '').replace(/\[Get in Touch\]/, '')).slice(0, 300) ||
      'This is the general framework. Applying it to your specific situation means a real conversation, not a template.',
  }
}

// Topic-relevant related cards per post — deliberately NOT the same list
// twice, per the cluster.md finding this is meant to avoid repeating.
const RELATED_CARDS: Record<string, { title: string; description: string; href: string }[]> = {
  'performance-marketing-retainer-structure': [
    { title: 'Performance Marketing', description: 'Paid acquisition services.', href: '/performance-marketing' },
    { title: 'Incrementality Testing', description: 'Causal measurement.', href: '/incrementality-testing' },
    { title: 'Marketing Attribution', description: 'Attribution modeling.', href: '/marketing-attribution' },
    { title: 'GeoX & Multicell Testing', description: 'Beyond A/B testing.', href: '/geox-multicell-incrementality-testing' },
  ],
  'fractional-cmo-vs-full-time-cmo': [
    { title: 'Fractional CMO', description: 'Part-time marketing leadership.', href: '/fractional-cmo' },
    { title: 'How to Choose a Fractional CMO', description: 'Selection criteria.', href: '/how-to-choose-a-fractional-cmo' },
    { title: 'Signs You Need a Fractional CMO', description: 'Diagnostic signals.', href: '/signs-you-need-a-fractional-cmo' },
    { title: 'Fractional CMO Pricing by Stage', description: 'Cost by company stage.', href: '/fractional-cmo-pricing-by-stage' },
  ],
  'fractional-cmo-90-day-engagement': [
    { title: 'Fractional CMO', description: 'Part-time marketing leadership.', href: '/fractional-cmo' },
    { title: 'How to Choose a Fractional CMO', description: 'Selection criteria.', href: '/how-to-choose-a-fractional-cmo' },
    { title: 'Fractional CMO vs. Full-Time', description: 'Cost/outcome breakdown.', href: '/fractional-cmo-vs-full-time-cmo' },
    { title: 'Marketing Attribution', description: 'Measuring what happened.', href: '/marketing-attribution' },
  ],
  'marketing-mix-modeling-google-meridian': [
    { title: 'Performance Marketing', description: 'Paid acquisition services.', href: '/performance-marketing' },
    { title: 'Paid Media Attribution', description: 'Cookieless-world attribution.', href: '/paid-media-attribution-cookieless-world' },
    { title: 'GeoX & Multicell Testing', description: 'Beyond A/B testing.', href: '/geox-multicell-incrementality-testing' },
    { title: 'Incrementality Testing', description: 'Causal measurement.', href: '/incrementality-testing' },
  ],
  'geox-multicell-incrementality-testing': [
    { title: 'Performance Marketing', description: 'Paid acquisition services.', href: '/performance-marketing' },
    { title: 'Incrementality Testing', description: 'Causal measurement.', href: '/incrementality-testing' },
    { title: 'Marketing Mix Modeling', description: 'Modeling with Google Meridian.', href: '/marketing-mix-modeling-google-meridian' },
    { title: 'Marketing Attribution', description: 'Attribution modeling.', href: '/marketing-attribution' },
  ],
  'headless-vs-traditional-cms': [
    { title: 'Web Development', description: 'Marketing website builds.', href: '/web-development' },
    { title: 'Next.js', description: 'React framework for marketing sites.', href: '/next-js' },
    { title: 'React', description: 'Component architecture.', href: '/react' },
    { title: 'What Makes a Website Convert', description: 'Conversion fundamentals.', href: '/what-makes-a-marketing-website-convert' },
  ],
  'ga4-bigquery-looker-studio-single-source-of-truth': [
    { title: 'Marketing Technology', description: 'MarTech stack strategy.', href: '/marketing-technology' },
    { title: 'BigQuery', description: 'Data warehousing.', href: '/bigquery' },
    { title: 'Google Analytics 4', description: 'Analytics implementation.', href: '/google-analytics-4' },
    { title: 'Looker Studio', description: 'Dashboards and reporting.', href: '/looker-studio' },
  ],
  'lead-routing-scoring-setup-guide': [
    { title: 'Marketing Technology', description: 'MarTech stack strategy.', href: '/marketing-technology' },
    { title: 'Marketing Attribution', description: 'Attribution modeling.', href: '/marketing-attribution' },
    { title: 'Google Tag Manager', description: 'Tracking implementation.', href: '/google-tag-manager' },
    { title: 'GA4/BigQuery/Looker Studio', description: 'Single source of truth.', href: '/ga4-bigquery-looker-studio-single-source-of-truth' },
  ],
  'signs-you-need-a-fractional-cmo': [
    { title: 'Fractional CMO', description: 'Part-time marketing leadership.', href: '/fractional-cmo' },
    { title: 'Fractional CMO vs. Full-Time', description: 'Cost/outcome breakdown.', href: '/fractional-cmo-vs-full-time-cmo' },
    { title: '90-Day Fractional CMO Engagement', description: 'What actually happens.', href: '/fractional-cmo-90-day-engagement' },
    { title: 'Small Business CMO', description: 'CMO leadership for smaller teams.', href: '/small-business-cmo' },
  ],
  'fractional-cmo-pricing-by-stage': [
    { title: 'Fractional CMO', description: 'Part-time marketing leadership.', href: '/fractional-cmo' },
    { title: 'Fractional CMO vs. Full-Time', description: 'Cost/outcome breakdown.', href: '/fractional-cmo-vs-full-time-cmo' },
    { title: 'Signs You Need a Fractional CMO', description: 'Diagnostic signals.', href: '/signs-you-need-a-fractional-cmo' },
    { title: 'How to Choose a Fractional CMO', description: 'Selection criteria.', href: '/how-to-choose-a-fractional-cmo' },
  ],
  'tiktok-snapchat-pinterest-paid-social': [
    { title: 'Performance Marketing', description: 'Paid acquisition services.', href: '/performance-marketing' },
    { title: 'Meta Ads', description: 'Meta advertising baseline.', href: '/meta-ads' },
    { title: 'Performance Marketing Retainer', description: 'How retainers are structured.', href: '/performance-marketing-retainer-structure' },
    { title: 'GeoX & Multicell Testing', description: 'Testing discipline for new channels.', href: '/geox-multicell-incrementality-testing' },
  ],
}

function main() {
  const files = fs.readdirSync(SOURCE_DIR).filter((f) => /^\d\d-.*\.md$/.test(f))
  console.log(`Found ${files.length} source posts`)

  for (const file of files) {
    const filePath = path.join(SOURCE_DIR, file)
    const post = parsePost(filePath)
    const fm = post.frontmatter
    const slug = fm.slug
    const parentHub = (fm.target_pillar as string).replace(/^\//, '')

    const blocks: any[] = [
      heroV3Block(post.title, post.sections[0]?.content.split('\n\n')[0] ?? '', '#facc15'),
    ]
    for (const section of post.sections) {
      blocks.push(aboutSimpleBlock(section.heading, section.content))
    }
    if (post.faqItems.length > 0) blocks.push(faqBlock(post.faqItems))
    const related = RELATED_CARDS[slug]
    if (related) blocks.push(relatedTopicsBlock(related))
    blocks.push(ctaBlock(post.ctaHeading, post.ctaDescription))

    const draft: PageDraft = {
      slug,
      pageType: 'topic',
      meta: { title: fm.title, description: fm.meta_description },
      blocks,
      internalLinks: {
        parent: parentHub,
        siblings: (related ?? []).map((c) => c.href.replace(/^\//, '')),
        tools: [],
        topics: [],
        relatedTopics: [],
      },
      wordCount: post.sections.reduce((n, s) => n + s.content.split(/\s+/).length, 0),
      generatedAt: new Date().toISOString(),
    }

    const outPath = path.join(OUT_DIR, `${slug}.json`)
    fs.writeFileSync(outPath, JSON.stringify(draft, null, 2))
    console.log(`✓ ${slug} -> ${draft.blocks.length} blocks, ~${draft.wordCount} words`)
  }
}

main()
