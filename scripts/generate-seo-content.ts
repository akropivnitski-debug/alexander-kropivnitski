/**
 * Generate SEO page JSON drafts from the xlsx spreadsheet.
 *
 * Usage:
 *   npx tsx scripts/generate-seo-content.ts --xlsx path/to/file.xlsx --batch 0 --slugs slug1,slug2,slug3
 *
 * This script:
 * 1. Reads the xlsx spreadsheet for page data (slug, meta, links, page type)
 * 2. For each specified slug, generates a JSON draft file with Payload block structure
 * 3. Saves to content/drafts/batch-{N}/{slug}.json
 *
 * Content generation is done externally (via AI/copywriting skill).
 * This script provides the structural scaffold — the block layout per template type,
 * with placeholder content that must be replaced with real copy.
 *
 * For actual content generation, use this script to create the skeleton,
 * then populate the content fields manually or via the copywriting workflow.
 */

import fs from 'fs'
import path from 'path'

// Template block structures per page type
const TEMPLATES: Record<string, string[]> = {
  job_role: ['heroV3', 'featureList', 'aboutSimple', 'processSteps', 'faq', 'featureList', 'cta'],
  job_role_location: ['heroV3', 'featureList', 'aboutSimple', 'faq', 'featureList', 'cta'],
  tool: ['heroV3', 'aboutSimple', 'featureList', 'aboutSimple', 'processSteps', 'faq', 'featureList', 'cta'],
  topic: ['heroV3', 'aboutSimple', 'aboutSimple', 'featureList', 'aboutSimple', 'faq', 'featureList', 'cta'],
  pillar_support: ['heroV3', 'aboutSimple', 'featureList', 'aboutSimple', 'processSteps', 'aboutSimple', 'faq', 'featureList', 'cta'],
}

function parseArgs(): { xlsxPath: string; batch: number; slugs: string[] } {
  const args = process.argv.slice(2)
  let xlsxPath = ''
  let batch = 0
  let slugs: string[] = []

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--xlsx' && args[i + 1]) xlsxPath = args[++i]
    else if (args[i] === '--batch' && args[i + 1]) batch = parseInt(args[++i], 10)
    else if (args[i] === '--slugs' && args[i + 1]) slugs = args[++i].split(',').map((s) => s.trim())
  }

  if (!xlsxPath || slugs.length === 0) {
    console.error('Usage: npx tsx scripts/generate-seo-content.ts --xlsx <file> --batch <N> --slugs <slug1,slug2,...>')
    process.exit(1)
  }

  return { xlsxPath, batch, slugs }
}

function createSkeletonDraft(row: Record<string, string>): object {
  const pageType = row.template_type || row.page_type || 'general'
  const template = TEMPLATES[pageType] || TEMPLATES.job_role

  const slug = row.slug
  const parentHub = row.parent_hub_slug || ''
  const siblingLinks = (row.sibling_links || '').split(',').map((s: string) => s.trim()).filter(Boolean)
  const toolLinks = (row.tool_links || '').split(',').map((s: string) => s.trim()).filter(Boolean)
  const topicLinks = (row.topic_links || '').split(',').map((s: string) => s.trim()).filter(Boolean)
  const relatedTopics = (row.related_topics_block || '').split(',').map((s: string) => s.trim()).filter(Boolean)

  return {
    slug,
    pageType,
    meta: {
      title: row.meta_title || row.seo_title || `[TODO: Meta title for ${slug}]`,
      description: row.meta_description || row.seo_description || `[TODO: Meta description for ${slug}]`,
    },
    blocks: template.map((blockType) => ({
      blockType,
      _placeholder: true,
      _note: `Replace with real content. Block type: ${blockType}`,
    })),
    internalLinks: {
      parent: parentHub,
      siblings: siblingLinks,
      tools: toolLinks,
      topics: topicLinks,
      relatedTopics,
    },
    linkCountTarget: row.link_count_target || '',
    wordCount: 0,
    generatedAt: new Date().toISOString(),
  }
}

async function main() {
  const { xlsxPath, batch, slugs } = parseArgs()

  // Dynamic import xlsx (must be installed: npm i xlsx)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  let XLSX: any
  try {
    XLSX = require('xlsx')
  } catch {
    console.error('xlsx package not found. Install it: npm i xlsx')
    process.exit(1)
  }

  const workbook = XLSX.readFile(path.resolve(xlsxPath))
  const sheetName = workbook.SheetNames[0]
  const rows: Record<string, string>[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])

  console.log(`Loaded ${rows.length} rows from ${sheetName}`)

  const outDir = path.resolve(`content/drafts/batch-${batch}`)
  fs.mkdirSync(outDir, { recursive: true })

  let generated = 0

  for (const slug of slugs) {
    const row = rows.find((r) => r.slug === slug)
    if (!row) {
      console.error(`  [NOT FOUND] Slug "${slug}" not in spreadsheet`)
      continue
    }

    const draft = createSkeletonDraft(row)
    const outPath = path.join(outDir, `${slug}.json`)
    fs.writeFileSync(outPath, JSON.stringify(draft, null, 2))
    console.log(`  [OK] Generated skeleton: ${outPath}`)
    generated++
  }

  console.log(`\nGenerated ${generated} skeleton draft(s) in ${outDir}`)
  console.log('Next: populate content fields with real copy, then run qa-seo-batch.ts')
}

main()
