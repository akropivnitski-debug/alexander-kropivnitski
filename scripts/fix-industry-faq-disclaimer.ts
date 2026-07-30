// Fixes the audit's Critical content finding: every "[service]-for-[industry]"
// page's FAQ answers "Do you have experience with [industry]?" with a
// templated line admitting "I bring general [service] expertise to this
// vertical" — the content itself disclaiming the vertical-specific
// experience the page exists to establish.
//
// Fix: remove that specific FAQ item from each page (rather than replace it
// with fabricated per-industry specifics I can't actually verify — inventing
// new unverifiable claims would repeat the exact problem being fixed here).
// The other FAQ items (pricing, timeline) are untouched.
//
// Run with: set -a && source .env.local && set +a && npx tsx scripts/fix-industry-faq-disclaimer.ts

import { getPayload } from 'payload'
import config from '../payload.config'

const SERVICES = ['seo', 'fractional-cmo', 'marketing-technology', 'performance-marketing', 'web-development']
const INDUSTRIES = [
  'appliance-repair', 'ecommerce', 'fintech', 'home-services', 'investment-banks',
  'manufacturing', 'professional-services', 'saas-startups', 'tour-operators', 'yacht-charter',
]

const SLUGS = SERVICES.flatMap((s) => INDUSTRIES.map((i) => `${s}-for-${i}`))

function isDisclaimerAnswer(answer: string): boolean {
  return answer.includes('I bring general') && answer.includes('expertise to this vertical')
}

async function main() {
  const payload = await getPayload({ config })

  let pagesChecked = 0
  let pagesFixed = 0
  let pagesNotFound = 0
  let pagesNoDisclaimer = 0

  for (const slug of SLUGS) {
    const res = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const doc = res.docs[0]
    pagesChecked++

    if (!doc) {
      console.log(`? ${slug}: not found`)
      pagesNotFound++
      continue
    }

    const layout = doc.layout as any[]
    let changed = false
    const newLayout = layout.map((block: any) => {
      if (block.blockType === 'faq') {
        const before = block.items.length
        const filteredItems = block.items.filter((item: any) => !isDisclaimerAnswer(item.answer))
        if (filteredItems.length < before) changed = true
        return { ...block, items: filteredItems }
      }
      return block
    })

    if (!changed) {
      pagesNoDisclaimer++
      continue
    }

    await payload.update({
      collection: 'pages',
      id: doc.id,
      data: { layout: newLayout, _status: 'published' },
    })
    pagesFixed++
    console.log(`✓ ${slug}: removed disclaimer FAQ item`)
  }

  console.log('')
  console.log(`Checked: ${pagesChecked} | Fixed: ${pagesFixed} | No disclaimer found: ${pagesNoDisclaimer} | Not found: ${pagesNotFound}`)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
