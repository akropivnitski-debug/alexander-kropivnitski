import type { Page } from '@/payload-types'
import { Hero } from '@/components/blocks/hero'
import { Companies } from '@/components/blocks/companies'
import { Testimonials } from '@/components/blocks/testimonials'
import { AboutMe } from '@/components/blocks/about-me'
import { HeroV2 } from '@/components/blocks/hero-v2'

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
          case 'testimonials':
            return <Testimonials key={block.id ?? i} data={block} />
          case 'aboutMe':
            return <AboutMe key={block.id ?? i} data={block} />
          case 'heroV2':
            return <HeroV2 key={block.id ?? i} data={block} />
          default:
            return null
        }
      })}
    </>
  )
}
