import type { Page } from '@/payload-types'
import { Hero } from '@/components/blocks/hero'
import { Companies } from '@/components/blocks/companies'
import { Testimonials } from '@/components/blocks/testimonials'
import { AboutMe } from '@/components/blocks/about-me'
import { HeroV2 } from '@/components/blocks/hero-v2'
import { WorldMap } from '@/components/blocks/world-map'
import { HeroV3 } from '@/components/blocks/hero-v3'
import { HeroV4 } from '@/components/blocks/hero-v4'
import { Cta } from '@/components/blocks/cta'
import { getSpacingClass } from '@/fields/spacingFields'

type LayoutBlock = NonNullable<Page['layout']>[number]

function renderBlock(block: LayoutBlock, i: number) {
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
    case 'worldMap':
      return <WorldMap key={block.id ?? i} data={block} />
    case 'heroV3':
      return <HeroV3 key={block.id ?? i} data={block} />
    case 'heroV4':
      return <HeroV4 key={block.id ?? i} data={block} />
    case 'cta':
      return <Cta key={block.id ?? i} data={block} />
    default:
      return null
  }
}

export function BlockRenderer({ blocks }: { blocks: LayoutBlock[] }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, i) => {
        const spacing = getSpacingClass(
          (block as Record<string, unknown>).spacingTop as string | undefined,
          (block as Record<string, unknown>).spacingBottom as string | undefined,
        )
        if (spacing) {
          return (
            <div key={block.id ?? i} className={spacing}>
              {renderBlock(block, i)}
            </div>
          )
        }
        return renderBlock(block, i)
      })}
    </>
  )
}
