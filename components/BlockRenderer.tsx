import dynamic from 'next/dynamic'
import type { Page } from '@/payload-types'
import { Hero } from '@/components/blocks/hero'
import { Companies } from '@/components/blocks/companies'
import { HeroV2 } from '@/components/blocks/hero-v2'
import { AboutMe } from '@/components/blocks/about-me'
import { getSpacingClass } from '@/fields/spacingFields'
import { lexicalToHtml } from '@/lib/lexicalToHtml'

// Dynamic imports for below-fold blocks
const Testimonials = dynamic(() => import('@/components/blocks/testimonials').then(m => ({ default: m.Testimonials })))
const WorldMap = dynamic(() => import('@/components/blocks/world-map').then(m => ({ default: m.WorldMap })))
const HeroV3 = dynamic(() => import('@/components/blocks/hero-v3').then(m => ({ default: m.HeroV3 })))
const HeroV4 = dynamic(() => import('@/components/blocks/hero-v4').then(m => ({ default: m.HeroV4 })))
const Cta = dynamic(() => import('@/components/blocks/cta').then(m => ({ default: m.Cta })))
const Projects = dynamic(() => import('@/components/blocks/projects').then(m => ({ default: m.Projects })))
const ProjectsV2 = dynamic(() => import('@/components/blocks/projects-v2').then(m => ({ default: m.ProjectsV2 })))
const AboutSimple = dynamic(() => import('@/components/blocks/about-simple').then(m => ({ default: m.AboutSimple })))
const ImageSlider = dynamic(() => import('@/components/blocks/image-slider').then(m => ({ default: m.ImageSlider })))
const HeroV5 = dynamic(() => import('@/components/blocks/hero-v5').then(m => ({ default: m.HeroV5 })))
const HeroV6 = dynamic(() => import('@/components/blocks/hero-v6').then(m => ({ default: m.HeroV6 })))
const Stats = dynamic(() => import('@/components/blocks/stats').then(m => ({ default: m.Stats })))
const Timeline = dynamic(() => import('@/components/blocks/timeline').then(m => ({ default: m.Timeline })))
const Faq = dynamic(() => import('@/components/blocks/faq').then(m => ({ default: m.Faq })))
const Pricing = dynamic(() => import('@/components/blocks/pricing').then(m => ({ default: m.Pricing })))
const ProcessSteps = dynamic(() => import('@/components/blocks/process-steps').then(m => ({ default: m.ProcessSteps })))
const FeatureList = dynamic(() => import('@/components/blocks/feature-list').then(m => ({ default: m.FeatureList })))
const Banner = dynamic(() => import('@/components/blocks/banner').then(m => ({ default: m.Banner })))
const ContactInfo = dynamic(() => import('@/components/blocks/contact-info').then(m => ({ default: m.ContactInfo })))
const ContentColumns = dynamic(() => import('@/components/blocks/content-columns').then(m => ({ default: m.ContentColumns })))
const Blockquote = dynamic(() => import('@/components/blocks/blockquote').then(m => ({ default: m.Blockquote })))
const BentoGrid = dynamic(() => import('@/components/blocks/bento-grid').then(m => ({ default: m.BentoGrid })))
const LogoMarquee = dynamic(() => import('@/components/blocks/logo-marquee').then(m => ({ default: m.LogoMarquee })))
const TabsContent = dynamic(() => import('@/components/blocks/tabs-content').then(m => ({ default: m.TabsContent })))
const SplitSection = dynamic(() => import('@/components/blocks/split-section').then(m => ({ default: m.SplitSection })))
const Checklist = dynamic(() => import('@/components/blocks/checklist').then(m => ({ default: m.Checklist })))
const CardGrid = dynamic(() => import('@/components/blocks/card-grid').then(m => ({ default: m.CardGrid })))
const VideoSection = dynamic(() => import('@/components/blocks/video-section').then(m => ({ default: m.VideoSection })))
const TextMarquee = dynamic(() => import('@/components/blocks/text-marquee').then(m => ({ default: m.TextMarquee })))
const IconGrid = dynamic(() => import('@/components/blocks/icon-grid').then(m => ({ default: m.IconGrid })))
const NumberCounter = dynamic(() => import('@/components/blocks/number-counter').then(m => ({ default: m.NumberCounter })))

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
    case 'bentoGrid':
      return <BentoGrid key={block.id ?? i} data={block} />
    case 'logoMarquee':
      return <LogoMarquee key={block.id ?? i} data={block} />
    case 'tabsContent':
      return <TabsContent key={block.id ?? i} data={block} tabsHtml={(block.tabs ?? []).map((tab: Record<string, unknown>) => lexicalToHtml(tab.content))} />
    case 'splitSection':
      return <SplitSection key={block.id ?? i} data={block} descriptionHtml={lexicalToHtml(block.description)} />
    case 'checklist':
      return <Checklist key={block.id ?? i} data={block} />
    case 'cardGrid':
      return <CardGrid key={block.id ?? i} data={block} />
    case 'videoSection':
      return <VideoSection key={block.id ?? i} data={block} />
    case 'textMarquee':
      return <TextMarquee key={block.id ?? i} data={block} />
    case 'iconGrid':
      return <IconGrid key={block.id ?? i} data={block} />
    case 'numberCounter':
      return <NumberCounter key={block.id ?? i} data={block} />
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
