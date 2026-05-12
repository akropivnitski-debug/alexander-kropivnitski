import type { Page } from '@/payload-types'
import { Hero } from '@/components/blocks/hero'
import { Companies } from '@/components/blocks/companies'

type LayoutBlock = NonNullable<Page['layout']>[number]

export function BlockRenderer({ blocks }: { blocks: LayoutBlock[] }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.blockType) {
          case 'hero':
            return <Hero key={block.id ?? i} data={block} />
          case 'companies':
            return <Companies key={block.id ?? i} data={block} />
          default:
            return null
        }
      })}
    </>
  )
}
