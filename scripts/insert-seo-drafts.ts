/**
 * Insert SEO JSON drafts into Payload CMS as draft pages.
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx scripts/insert-seo-drafts.ts content/drafts/batch-0
 *
 * Each JSON file must contain: slug, pageType, meta, blocks (matching Payload block format).
 * Pages are created with _status: 'draft' — they will NOT be public until manually published.
 */

import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import config from '../payload.config'

interface DraftPage {
  slug: string
  title?: string
  pageType: string
  meta: { title: string; description: string }
  blocks: Record<string, unknown>[]
  wordCount?: number
  generatedAt?: string
}

async function main() {
  const batchDir = process.argv[2]
  if (!batchDir) {
    console.error('Usage: npx tsx scripts/insert-seo-drafts.ts <batch-directory>')
    console.error('Example: npx tsx scripts/insert-seo-drafts.ts content/drafts/batch-0')
    process.exit(1)
  }

  const absDir = path.resolve(batchDir)
  if (!fs.existsSync(absDir)) {
    console.error(`Directory not found: ${absDir}`)
    process.exit(1)
  }

  const files = fs.readdirSync(absDir).filter((f) => f.endsWith('.json'))
  if (files.length === 0) {
    console.error(`No JSON files found in ${absDir}`)
    process.exit(1)
  }

  console.log(`Found ${files.length} draft(s) in ${absDir}`)

  const payload = await getPayload({ config })

  let created = 0
  let skipped = 0

  for (const file of files) {
    const filePath = path.join(absDir, file)
    const raw = fs.readFileSync(filePath, 'utf-8')
    let draft: DraftPage

    try {
      draft = JSON.parse(raw)
    } catch {
      console.error(`  [SKIP] Invalid JSON: ${file}`)
      skipped++
      continue
    }

    if (!draft.slug || !draft.blocks || !draft.meta) {
      console.error(`  [SKIP] Missing required fields (slug, blocks, meta): ${file}`)
      skipped++
      continue
    }

    // Check if page already exists
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: draft.slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`  [SKIP] Page already exists: ${draft.slug}`)
      skipped++
      continue
    }

    try {
      await payload.create({
        collection: 'pages',
        draft: true,
        data: {
          title: draft.meta.title || draft.title || draft.slug,
          slug: draft.slug,
          pageType: draft.pageType as 'general' | 'pillar' | 'job_role' | 'job_role_location' | 'tool' | 'topic' | 'pillar_support',
          layout: draft.blocks as any,
          meta: {
            title: draft.meta.title,
            description: draft.meta.description,
          },
          _status: 'draft',
        },
      })
      console.log(`  [OK] Created draft: ${draft.slug}`)
      created++
    } catch (err) {
      console.error(`  [ERROR] Failed to create ${draft.slug}:`, err)
      skipped++
    }
  }

  console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`)
  process.exit(0)
}

main()
