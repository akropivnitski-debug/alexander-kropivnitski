# Project: Alexander Kropivnitski

## Stack
- **Next.js 16** (App Router, Turbopack, TypeScript)
- **Payload CMS v3** — block-based Pages collection is source of truth for page layout
- **Neon / Postgres** — via `@payloadcms/db-postgres`
- **Vercel** — auto-deploys on push to `main`

## Critical Rules

1. All git commits must use author `a.kropivnitski@digitalnexusstrategy.com` or Vercel rejects them.
2. Never modify `globals/Header.ts` or `globals/Footer.ts` structure without discussion — they are active site-wide globals.
3. `push: true` in `payload.config.ts` is gated behind `PAYLOAD_DB_PUSH=true` env var — never hardcode it.
4. `export const dynamic = 'force-dynamic'` on the homepage is intentional — do not remove without discussion.
5. Schema changes require `npx payload migrate` in production before deploying.
6. Always run `tsc --noEmit` before committing. Zero errors required.

## Key Files

| File | Purpose |
|------|---------|
| `payload.config.ts` | Payload config — collections, globals, DB adapter |
| `components/BlockRenderer.tsx` | Dispatches block types to React components |
| `app/(app)/page.tsx` | Homepage — queries Pages collection, renders blocks via `BlockRenderer` |
| `app/globals.css` | Global CSS — animation keyframes live here, not in components |
| `hooks/useInView.ts` | IntersectionObserver wrapper for scroll-reveal animations |
| `fields/imageField.ts` | CMS image field with upload/URL toggle |
| `lib/resolveImage.ts` | Single function for resolving imageField to a URL string — always use this |

## Animation Architecture

CSS-first approach:
- Scroll-reveal → `hooks/useInView.ts` + `.reveal` / `.in-view` classes in `globals.css`
- Hover effects → CSS `transition` + `:hover`
- Every animated JS element → `will-change: transform` or `will-change: opacity`
- Every section → `contain: layout style`
- Heavy below-fold blocks → `next/dynamic` in `BlockRenderer.tsx`

## CMS Architecture Decisions (do not re-debate)

| Decision | Rule |
|----------|------|
| Pages collection | Source of truth for all pages. |
| `imageField` | Always use `resolveImage()` — never access `upload.url` directly. |
| Block picker previews | `imageURL` / `imageAltText` are top-level `Block` properties, NOT under `admin`. |

## Adding a New Block

1. Create `blocks/MyBlock.ts` — define the Payload block schema
2. Register it in `collections/Pages.ts` under the `blocks` array of the `layout` field
3. Create `components/blocks/my-block.tsx` — the React component
4. Add a case to `components/BlockRenderer.tsx` mapping the block slug to the component
5. Run `npx payload generate:types` to regenerate `payload-types.ts`
6. Run `npx tsc --noEmit` — zero errors required
7. Run `npm run build` — must pass
8. **DB push** — required after ANY schema change (new blocks, new fields):
   ```bash
   set -a && source .env.local && set +a && PAYLOAD_DB_PUSH=true npx tsx scripts/db-push.mjs
   ```
   Without this step, CMS admin pages section will be empty and the site may error.
9. Commit and push to `main` — Vercel auto-deploys

## Payload v3 Gotchas

- `draft: false` in `payload.create()` does NOT publish in versioned collections. Always follow with `payload.update({ _status: 'published' })`.
- `hidden: true` on globals is `ServerOnlyGlobalAdminProperties` — it is stripped from `ClientConfig`. Hidden globals never appear in `useConfig()`.
- `useConfig()` returns `ClientConfig`; `useNav()` returns `{ navOpen, navRef, setNavOpen }`.
- `admin.components.Nav` accepts `{ path, exportName }` as a `RawPayloadComponent`.

## Critical: Server vs Client Component Rules

- **`lexicalToHtml`** (from `@payloadcms/richtext-lexical/html`) is **SERVER-ONLY**. It must NEVER be imported in `'use client'` components — this causes a runtime crash ("Something went wrong").
- **Pattern:** Convert rich text to HTML in `BlockRenderer.tsx` (server component) using `lexicalToHtml()`, then pass the resulting HTML string as a prop (e.g. `contentHtml`, `descriptionHtml`) to the block component.
- **Payload admin panel does NOT load project Tailwind CSS.** Custom admin components (e.g. `IconPicker`) must use inline `style={{}}` instead of Tailwind classes like `className="size-8"`.

## Existing Blocks

| Block slug | Component | Notes |
|------------|-----------|-------|
| `hero` | `components/blocks/hero.tsx` | Original hero |
| `heroV2` | `components/blocks/hero-v2.tsx` | Name + photo hero |
| `heroV3` | `components/blocks/hero-v3.tsx` | Rich text hero — receives `contentHtml` prop |
| `heroV4` | `components/blocks/hero-v4.tsx` | Rich text hero variant — receives `contentHtml` prop |
| `companies` | `components/blocks/companies.tsx` | Logo marquee |
| `testimonials` | `components/blocks/testimonials.tsx` | Testimonial cards |
| `aboutMe` | `components/blocks/about-me.tsx` | About section |
| `aboutSimple` | `components/blocks/about-simple.tsx` | Simple heading + rich text (server component) |
| `worldMap` | `components/blocks/world-map.tsx` | Map + stats — receives `descriptionHtml` prop |
| `cta` | `components/blocks/cta.tsx` | Call to action |
| `projects` | `components/blocks/projects.tsx` | Project cards v1 |
| `projectsV2` | `components/blocks/projects-v2.tsx` | Feature cards with grid pattern + TextScramble button |
| `imageSlider` | `components/blocks/image-slider.tsx` | CSS-only infinite scroll gallery |
| `heroV5` | `components/blocks/hero-v5.tsx` | Image right, no circle — receives `contentHtml` prop |
| `heroV6` | `components/blocks/hero-v6.tsx` | Image left + logos — receives `contentHtml` prop |
| `stats` | `components/blocks/stats.tsx` | Stats grid with dividers |
| `timeline` | `components/blocks/timeline.tsx` | Vertical timeline with icons |
| `faq` | `components/blocks/faq.tsx` | Accordion FAQ (client component, useState) |
| `pricing` | `components/blocks/pricing.tsx` | Pricing tiers with feature lists |
| `processSteps` | `components/blocks/process-steps.tsx` | Numbered process/step cards |
| `featureList` | `components/blocks/feature-list.tsx` | Icon + title + description grid |
| `banner` | `components/blocks/banner.tsx` | Full-width strip, 3 variants (default/accent/subtle) |
| `contactInfo` | `components/blocks/contact-info.tsx` | Contact details + social links |
| `contentColumns` | `components/blocks/content-columns.tsx` | Rich text columns — receives `columnsHtml` prop |
| `blockquote` | `components/blocks/blockquote.tsx` | Large centered quote with attribution |

## Seed Scripts

| Script | Purpose |
|--------|---------|
| `scripts/seed-pages.ts` | Creates/updates SEO, Web Dev, Marketing Technology pages with full content |
| `scripts/seed-performance-marketing.ts` | Populates Performance Marketing page |
| `scripts/db-push.mjs` | Pushes DB schema changes (requires `PAYLOAD_DB_PUSH=true` + DB env vars) |

Run seed scripts with: `set -a && source .env.local && set +a && npx tsx scripts/<script>.ts`

## Pages Structure

| Page | Slug | Hero Block |
|------|------|------------|
| Home | `home` | heroV2 |
| Performance Marketing | `performance-marketing` | heroV3 |
| SEO | `seo` | heroV3 |
| Web Development | `web-development` | heroV3 |
| Marketing Technology | `marketing-technology` | heroV3 |

Header nav items are CMS-managed (stored in DB via `globals/Header.ts`).

## DB Array Field Naming

Payload auto-generates DB table names for array fields. Use `dbName` to keep them short and avoid Postgres identifier length limits:
```ts
{ name: 'cards', type: 'array', dbName: 'proj_v2_cards', fields: [...] }
{ name: 'images', type: 'array', dbName: 'img_slider_imgs', fields: [...] }
```

## Neon Postgres

- Free tier has connection limits — transient "remaining connection slots are reserved for SUPERUSER" errors can occur
- Connection string env vars: `DATABASE_URL` and `DATABASE_URL_UNPOOLED`
- Endpoint: ep-round-fire-aq1ysdrl (us-east-1)
