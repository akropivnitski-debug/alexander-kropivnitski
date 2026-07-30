// Fixes a self-contradiction found in the SEO audit: /case-studies claims all
// entries are "real client website projects... not a single template reused
// with new colors," while one of the 7 listed cards links to
// /case-study-marketing-agency-template, which describes itself in its own
// body copy as "a full-component template built for a digital marketing
// agency." The card's own description already half-admits this ("Full-
// component template with partner badges...") but it was still listed
// alongside 6 genuinely named client projects under "Recent Work."
//
// Fix: (1) remove the template card from the case-studies index grid, so the
// remaining 6 cards are all genuine, named client work matching the index's
// own claim. (2) Relabel the template page itself away from "Case Study"
// framing — it still has real value as a design/template showcase, it's
// just mislabeled. Not deleting it: it's legitimate portfolio content, just
// needs honest positioning.
//
// Run with: set -a && source .env.local && set +a && npx tsx scripts/fix-case-study-template-contradiction.ts

import { getPayload } from 'payload'
import config from '../payload.config'

const TEMPLATE_SLUG = 'case-study-marketing-agency-template'
const INDEX_SLUG = 'case-studies'

async function main() {
  const payload = await getPayload({ config })

  // --- 1. Remove the template card from the case-studies index grid ---
  const indexRes = await payload.find({
    collection: 'pages',
    where: { slug: { equals: INDEX_SLUG } },
    limit: 1,
  })
  const indexDoc = indexRes.docs[0]
  if (!indexDoc) {
    console.error(`✗ ${INDEX_SLUG} page not found — aborting`)
    process.exit(1)
  }

  const layout = indexDoc.layout as any[]
  let cardRemoved = false
  const newLayout = layout.map((block: any) => {
    if (block.blockType === 'projectsV2') {
      const before = block.cards.length
      const filteredCards = block.cards.filter(
        (c: any) => !c.href?.includes(TEMPLATE_SLUG)
      )
      if (filteredCards.length < before) cardRemoved = true
      return { ...block, cards: filteredCards }
    }
    return block
  })

  if (cardRemoved) {
    await payload.update({
      collection: 'pages',
      id: indexDoc.id,
      data: { layout: newLayout, _status: 'published' },
    })
    console.log('✓ case-studies: removed template card from Recent Work grid')
  } else {
    console.log('✓ case-studies: template card already absent, no change needed')
  }

  // --- 2. Relabel the template page away from "Case Study" framing ---
  const templateRes = await payload.find({
    collection: 'pages',
    where: { slug: { equals: TEMPLATE_SLUG } },
    limit: 1,
  })
  const templateDoc = templateRes.docs[0]
  if (!templateDoc) {
    console.error(`✗ ${TEMPLATE_SLUG} page not found — aborting`)
    process.exit(1)
  }

  const newTitle = 'Digital Marketing Agency Website — Design Template Showcase | Alexander Kropivnitski'
  const newDescription =
    'A full-component website template built for a digital marketing agency, showcasing service grids, partner badges, and an offer-led hero — a design reference, not a client project.'

  const templateLayout = templateDoc.layout as any[]
  const newTemplateLayout = templateLayout.map((block: any) => {
    if (block.blockType === 'heroV5' && block.heading?.includes('Case Study')) {
      return { ...block, heading: 'Digital Marketing Agency Website — Design Template Showcase' }
    }
    return block
  })

  await payload.update({
    collection: 'pages',
    id: templateDoc.id,
    data: {
      layout: newTemplateLayout,
      meta: { ...(templateDoc.meta as any), title: newTitle, description: newDescription },
      _status: 'published',
    },
  })
  console.log('✓ case-study-marketing-agency-template: relabeled as a template showcase, not a case study')

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
