// Fixes the duplicate-<h1> bug on the homepage: heroV2 is the real page
// heading, but a stacked heroV3 block below it also rendered <h1> by
// default. Requires the `isPageHeading` field on heroV3 (see
// blocks/HeroV3Block.ts) to already be pushed/migrated to the DB.
//
// Run with: set -a && source .env.local && set +a && npx tsx scripts/fix-homepage-h1.ts

import { getPayload } from 'payload'
import config from '../payload.config'

async function main() {
  const payload = await getPayload({ config })

  const res = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })
  const doc = res.docs[0]
  if (!doc) {
    console.log('✗ home page not found')
    process.exit(1)
  }

  const layout = doc.layout ?? []
  let changed = 0
  const newLayout = layout.map((block: any) => {
    if (block.blockType === 'heroV3' && block.isPageHeading !== false) {
      changed++
      return { ...block, isPageHeading: false }
    }
    return block
  })

  if (changed === 0) {
    console.log('✓ no heroV3 block needed changing (already correct, or none present)')
    process.exit(0)
  }

  await payload.update({
    collection: 'pages',
    id: doc.id,
    data: { layout: newLayout, _status: 'published' },
  })
  console.log(`✓ home: set isPageHeading=false on ${changed} heroV3 block(s)`)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
