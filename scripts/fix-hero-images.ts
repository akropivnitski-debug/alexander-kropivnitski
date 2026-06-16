/**
 * Fix heroV3 blocks on all SEO pages to use Alexander's image.
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx scripts/fix-hero-images.ts
 */

import { getPayload } from 'payload'
import config from '../payload.config'

async function main() {
  const payload = await getPayload({ config })

  // Find the media record for AlexK front image
  const media = await payload.find({
    collection: 'media',
    where: { filename: { contains: 'AlexK' } },
    limit: 10,
  })

  console.log('Media matches:')
  for (const item of media.docs) {
    console.log(`  id=${item.id}  filename=${item.filename}`)
  }

  const alexImage = media.docs.find((m) => m.filename?.includes('AlexK'))
  if (!alexImage) {
    console.error('Could not find AlexK image in media collection')
    process.exit(1)
  }

  console.log(`\nUsing media id=${alexImage.id} (${alexImage.filename})`)

  // Find all pages with heroV3 blocks that have no image set
  const pages = await payload.find({
    collection: 'pages',
    limit: 100,
    draft: true, // include drafts
  })

  let updated = 0

  for (const page of pages.docs) {
    const layout = page.layout as any[]
    if (!layout || layout.length === 0) continue

    let needsUpdate = false

    for (const block of layout) {
      if (block.blockType === 'heroV3') {
        const img = block.image
        // Fix if image is missing, has no source, or has no upload set
        if (!img || (!img.upload && !img.url)) {
          block.image = {
            source: 'upload',
            upload: alexImage.id,
          }
          needsUpdate = true
        }
      }
    }

    if (needsUpdate) {
      try {
        await payload.update({
          collection: 'pages',
          id: page.id,
          draft: true,
          data: {
            layout,
          },
        })
        console.log(`  [OK] Updated: ${page.slug}`)
        updated++
      } catch (err) {
        console.error(`  [ERROR] Failed to update ${page.slug}:`, err)
      }
    }
  }

  console.log(`\nDone. Updated ${updated} pages.`)
  process.exit(0)
}

main()
