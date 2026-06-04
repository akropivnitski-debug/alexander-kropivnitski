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
import { Projects } from '@/components/blocks/projects'
import { ProjectsV2 } from '@/components/blocks/projects-v2'
import { AboutSimple } from '@/components/blocks/about-simple'
import { ImageSlider } from '@/components/blocks/image-slider'
import { HeroV5 } from '@/components/blocks/hero-v5'
import { HeroV6 } from '@/components/blocks/hero-v6'
import { Stats } from '@/components/blocks/stats'
import { Timeline } from '@/components/blocks/timeline'
import { Faq } from '@/components/blocks/faq'
import { Pricing } from '@/components/blocks/pricing'
import { ProcessSteps } from '@/components/blocks/process-steps'
import { FeatureList } from '@/components/blocks/feature-list'
import { Banner } from '@/components/blocks/banner'
import { ContactInfo } from '@/components/blocks/contact-info'
import { ContentColumns } from '@/components/blocks/content-columns'
import { Blockquote } from '@/components/blocks/blockquote'
import { getSpacingClass } from '@/fields/spacingFields'
import { lexicalToHtml } from '@/lib/lexicalToHtml'

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
      return <WorldMap key={block.id ?? i} data={block} descriptionHtml={lexicalToHtml(block.description)} />
    case 'heroV3':
      return <HeroV3 key={block.id ?? i} data={block} contentHtml={lexicalToHtml(block.content)} />
    case 'heroV4':
      return <HeroV4 key={block.id ?? i} data={block} contentHtml={lexicalToHtml(block.content)} />
    case 'cta':
      return <Cta key={block.id ?? i} data={block} />
    case 'projects':
      return <Projects key={block.id ?? i} data={block} />
    case 'projectsV2':
      return <ProjectsV2 key={block.id ?? i} data={block} />
    case 'aboutSimple':
      return <AboutSimple key={block.id ?? i} data={block} />
    case 'imageSlider':
      return <ImageSlider key={block.id ?? i} data={block} />
    case 'heroV5':
      return <HeroV5 key={block.id ?? i} data={block} contentHtml={lexicalToHtml(block.content)} />
    case 'heroV6':
      return <HeroV6 key={block.id ?? i} data={block} contentHtml={lexicalToHtml(block.content)} />
    case 'stats':
      return <Stats key={block.id ?? i} data={block} />
    case 'timeline':
      return <Timeline key={block.id ?? i} data={block} />
    case 'faq':
      return <Faq key={block.id ?? i} data={block} />
    case 'pricing':
      return <Pricing key={block.id ?? i} data={block} />
    case 'processSteps':
      return <ProcessSteps key={block.id ?? i} data={block} />
    case 'featureList':
      return <FeatureList key={block.id ?? i} data={block} />
    case 'banner':
      return <Banner key={block.id ?? i} data={block} />
    case 'contactInfo':
      return <ContactInfo key={block.id ?? i} data={block} />
    case 'contentColumns':
      return <ContentColumns key={block.id ?? i} data={block} columnsHtml={(block.columns ?? []).map((col: Record<string, unknown>) => lexicalToHtml(col.content))} />
    case 'blockquote':
      return <Blockquote key={block.id ?? i} data={block} />
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
