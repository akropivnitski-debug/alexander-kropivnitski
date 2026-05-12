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
6. Restart the dev server

## Payload v3 Gotchas

- `draft: false` in `payload.create()` does NOT publish in versioned collections. Always follow with `payload.update({ _status: 'published' })`.
- `hidden: true` on globals is `ServerOnlyGlobalAdminProperties` — it is stripped from `ClientConfig`. Hidden globals never appear in `useConfig()`.
- `useConfig()` returns `ClientConfig`; `useNav()` returns `{ navOpen, navRef, setNavOpen }`.
- `admin.components.Nav` accepts `{ path, exportName }` as a `RawPayloadComponent`.
