/**
 * Publish draft pages by slug list or batch directory.
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx scripts/publish-seo-batch.ts content/drafts/batch-0
 *
 * Reads slugs from JSON files in the batch directory and publishes matching draft pages.
 */

import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import config from '../payload.config'

async function main() {
  const batchDir = process.argv[2]
  if (!batchDir) {
    console.error('Usage: npx tsx scripts/publish-seo-batch.ts <batch-directory>')
    process.exit(1)
  }

  const absDir = path.resolve(batchDir)
  if (!fs.existsSync(absDir)) {
    console.error(`Directory not found: ${absDir}`)
    process.exit(1)
  }

  const files = fs.readdirSync(absDir).filter((f) => f.endsWith('.json'))
  const slugs = files.map((f) => {
    const raw = fs.readFileSync(path.join(absDir, f), 'utf-8')
    return JSON.parse(raw).slug as string
  }).filter(Boolean)

  console.log(`Publishing ${slugs.length} page(s)...`)

  const payload = await getPayload({ config })

  let published = 0
  let failed = 0

  for (const slug of slugs) {
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
      draft: true,
    })

    const page = result.docs[0]
    if (!page) {
      console.error(`  [NOT FOUND] ${slug}`)
      failed++
      continue
    }

    try {
      await payload.update({
        collection: 'pages',
        id: page.id,
        data: { _status: 'published' },
      })
      console.log(`  [PUBLISHED] ${slug}`)
      published++
    } catch (err) {
      console.error(`  [ERROR] ${slug}:`, err)
      failed++
    }
  }

  console.log(`\nDone. Published: ${published}, Failed: ${failed}`)
  process.exit(0)
}

main()
