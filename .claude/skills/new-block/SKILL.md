---
name: new-block
description: Use when creating a new CMS block/section for the Payload CMS website. Prevents common failures (site crashes, empty CMS, type errors) by enforcing a strict build-verify-push pipeline.
---

# New Block Creation Skill

Strict pipeline for adding Payload CMS blocks to this project. Every step is mandatory. Do NOT skip steps or reorder them.

## Failure Patterns This Skill Prevents

| Failure | Root Cause | Prevention |
|---------|-----------|------------|
| Site shows "Something went wrong" | `lexicalToHtml` imported in `'use client'` component | Rule: NEVER import server-only modules in client components |
| CMS pages section empty | DB schema not pushed after adding block | Step 7: DB push is mandatory |
| Icons invisible in admin | Tailwind classes used in admin component | Rule: inline styles only in admin components |
| Type errors on deploy | Types not regenerated after schema change | Step 4: generate types |
| Build fails on Vercel | Build not tested locally | Step 6: local build required |

## Input

User provides one of:
- A 21st.dev component URL/code to adapt
- A description of the block they want
- A Figma design reference

## Pipeline

### Step 1: Analyze & Plan

Before writing ANY code:

1. Read the source component/design carefully
2. Determine if the block needs interactivity (`'use client'`) or can be a server component
3. **Decision tree for server vs client:**
   - Does it use `useState`, `useEffect`, `useRef`, event handlers, or browser APIs? → `'use client'`
   - Does it only render HTML/CSS with props? → Server component (NO `'use client'` directive)
   - Does it need rich text from Payload? → Server component OR client component that receives pre-rendered HTML as prop
4. If adapting from 21st.dev: strip `framer-motion` and replace with CSS animations in `globals.css`, unless the block is already a client component using `framer-motion` for simple fade/slide (acceptable)
5. Plan the Payload schema fields needed

### Step 2: Create Block Schema

Create `blocks/MyBlock.ts`:

```ts
import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const MyBlock: Block = {
  slug: 'myBlock',            // camelCase
  labels: { singular: 'My Block', plural: 'My Block Sections' },
  fields: [
    // ... fields here
    ...makeSpacingFields('none', 'none'),
  ],
}
```

**Rules:**
- Array fields MUST have `dbName` to avoid Postgres identifier length limits: `{ name: 'items', type: 'array', dbName: 'my_blk_items', fields: [...] }`
- Image fields: use `imageField('fieldName', 'Label')` from `@/fields/imageField`
- Rich text fields: use `type: 'richText'` — conversion happens in BlockRenderer, NOT in the component

### Step 3: Create Component

Create `components/blocks/my-block.tsx`:

**CRITICAL RULES:**
- **NEVER** import `lexicalToHtml` or anything from `@payloadcms/richtext-lexical` in this file
- If the block has rich text, the component receives pre-rendered HTML as a prop (e.g. `contentHtml: string`)
- Use `resolveImage()` from `@/lib/resolveImage` for any image fields — never access `.url` directly
- Admin components (if any) must use inline `style={{}}`, NOT Tailwind classes
- CSS animations go in `app/globals.css`, not in the component file

**Type pattern:**
```tsx
import type { Page } from '@/payload-types'

type MyBlockData = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'myBlock' }
>
```

### Step 4: Register Block

Do these three things:

1. **`collections/Pages.ts`** — import and add to the `blocks` array
2. **`components/BlockRenderer.tsx`** — import component, add `case` in switch
   - If block has rich text: convert here with `lexicalToHtml(block.fieldName)` and pass as prop
3. **Generate types:** `npx payload generate:types`

### Step 5: Type Check

```bash
npx tsc --noEmit
```

**MUST be zero errors.** If errors exist, fix them before proceeding. Do NOT skip this step.

### Step 6: Build Test

```bash
npm run build
```

**MUST pass.** Common failures at this stage:
- Server-only module imported in client component → move the import to BlockRenderer
- Missing type exports → regenerate types
- CSS syntax errors in globals.css → fix the CSS

### Step 7: DB Push

**MANDATORY. Without this, CMS will show empty pages section and site may crash.**

```bash
set -a && source .env.local && set +a && PAYLOAD_DB_PUSH=true npx tsx scripts/db-push.mjs
```

Must see "Schema push complete." If it says "No database connection string found", the env vars aren't loaded — check `.env.local` has `DATABASE_URL`.

### Step 8: Commit & Push

```bash
git add <specific files>
git -c user.email="a.kropivnitski@digitalnexusstrategy.com" \
    -c user.name="Alexander Kropivnitski" \
    commit -m "feat: add <BlockName> block

<one-line description>

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"

git push origin main
```

### Step 9: Verify

After push, confirm to user:
- Which files were created/modified
- That types, build, and DB push all passed
- The commit hash and that it was pushed to `main`
- Vercel will auto-deploy

## Post-Deploy Feedback Loop

If the user reports issues after deployment:
1. Diagnose the root cause
2. Fix the issue
3. **Update this skill** — add the new failure pattern to the table at the top and add a prevention rule to the relevant step
4. Re-run steps 5-8

This skill is a living document. Every deployment failure should make it better.
