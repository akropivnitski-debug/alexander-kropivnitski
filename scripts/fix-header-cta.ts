// Fixes the dead "Get in Touch" nav CTA: Header global's ctaHref was left at
// the field's schema default ("#") and never wired to the real, working
// contact form (Forms collection, slug "email_to_alexander", recipient
// sne.988@gmail.com). FormPopupProvider already intercepts #form:<slug>
// links correctly — this just points the button at it, matching the same
// pattern already used elsewhere in the codebase (see lexical-helpers.ts).
//
// Run with: set -a && source .env.local && set +a && npx tsx scripts/fix-header-cta.ts

import { getPayload } from 'payload'
import config from '../payload.config'

const FORM_SLUG = 'email_to_alexander'

async function main() {
  const payload = await getPayload({ config })

  // Confirm the target form actually exists before pointing the CTA at it.
  const formRes = await payload.find({
    collection: 'forms',
    where: { slug: { equals: FORM_SLUG } },
    limit: 1,
  })
  if (formRes.docs.length === 0) {
    console.error(`✗ form with slug "${FORM_SLUG}" not found — aborting, not touching Header`)
    process.exit(1)
  }

  const header = await payload.findGlobal({ slug: 'header' })
  if (header.ctaHref === `#form:${FORM_SLUG}`) {
    console.log('✓ Header ctaHref already correct, no change needed')
    process.exit(0)
  }

  const before = header.ctaHref
  await payload.updateGlobal({
    slug: 'header',
    data: { ctaHref: `#form:${FORM_SLUG}` },
  })
  console.log(`✓ Header ctaHref: "${before}" -> "#form:${FORM_SLUG}"`)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
