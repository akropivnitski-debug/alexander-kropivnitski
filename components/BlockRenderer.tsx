import type { Page } from '@/payload-types'

type LayoutBlock = NonNullable<Page['layout']>[number]

export function BlockRenderer({ blocks }: { blocks: LayoutBlock[] }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, i) => {
        const b = block as Record<string, unknown>
        switch (b.blockType) {
          // Blocks will be added here one by one
          default:
            return null
        }
      })}
    </>
  )
}
