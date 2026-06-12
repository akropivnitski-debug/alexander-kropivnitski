import type { CollectionConfig } from 'payload'
import { imageField } from '@/fields/imageField'
import { HeroBlock } from '@/blocks/HeroBlock'
import { CompaniesBlock } from '@/blocks/CompaniesBlock'
import { TestimonialsBlock } from '@/blocks/TestimonialsBlock'
import { AboutMeBlock } from '@/blocks/AboutMeBlock'
import { HeroV2Block } from '@/blocks/HeroV2Block'
import { WorldMapBlock } from '@/blocks/WorldMapBlock'
import { HeroV3Block } from '@/blocks/HeroV3Block'
import { HeroV4Block } from '@/blocks/HeroV4Block'
import { CtaBlock } from '@/blocks/CtaBlock'
import { ProjectsBlock } from '@/blocks/ProjectsBlock'
import { ProjectsV2Block } from '@/blocks/ProjectsV2Block'
import { AboutSimpleBlock } from '@/blocks/AboutSimpleBlock'
import { ImageSliderBlock } from '@/blocks/ImageSliderBlock'
import { HeroV5Block } from '@/blocks/HeroV5Block'
import { HeroV6Block } from '@/blocks/HeroV6Block'
import { StatsBlock } from '@/blocks/StatsBlock'
import { TimelineBlock } from '@/blocks/TimelineBlock'
import { FaqBlock } from '@/blocks/FaqBlock'
import { PricingBlock } from '@/blocks/PricingBlock'
import { ProcessStepsBlock } from '@/blocks/ProcessStepsBlock'
import { FeatureListBlock } from '@/blocks/FeatureListBlock'
import { BannerBlock } from '@/blocks/BannerBlock'
import { ContactInfoBlock } from '@/blocks/ContactInfoBlock'
import { ContentColumnsBlock } from '@/blocks/ContentColumnsBlock'
import { BlockquoteBlock } from '@/blocks/BlockquoteBlock'
import { BentoGridBlock } from '@/blocks/BentoGridBlock'
import { LogoMarqueeBlock } from '@/blocks/LogoMarqueeBlock'
import { TabsContentBlock } from '@/blocks/TabsContentBlock'
import { SplitSectionBlock } from '@/blocks/SplitSectionBlock'
import { ChecklistBlock } from '@/blocks/ChecklistBlock'
import { CardGridBlock } from '@/blocks/CardGridBlock'
import { VideoSectionBlock } from '@/blocks/VideoSectionBlock'
import { TextMarqueeBlock } from '@/blocks/TextMarqueeBlock'
import { IconGridBlock } from '@/blocks/IconGridBlock'
import { NumberCounterBlock } from '@/blocks/NumberCounterBlock'

export const PagesCollection: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Page', plural: 'Pages' },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    livePreview: {
      url: ({ data }) => `/${data.slug === 'home' ? '' : (data.slug ?? '')}`,
    },
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path. Use "home" for the homepage.',
      },
    },
    {
      name: 'pageType',
      label: 'Page Type',
      type: 'select',
      defaultValue: 'general',
      admin: {
        description: 'Used for sitemap priority and schema markup.',
        position: 'sidebar',
      },
      options: [
        { label: 'General', value: 'general' },
        { label: 'Pillar', value: 'pillar' },
        { label: 'Job Role', value: 'job_role' },
        { label: 'Job Role + Location', value: 'job_role_location' },
        { label: 'Tool', value: 'tool' },
        { label: 'Topic', value: 'topic' },
        { label: 'Pillar Support', value: 'pillar_support' },
      ],
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        CompaniesBlock,
        TestimonialsBlock,
        AboutMeBlock,
        HeroV2Block,
        WorldMapBlock,
        HeroV3Block,
        HeroV4Block,
        CtaBlock,
        ProjectsBlock,
        ProjectsV2Block,
        AboutSimpleBlock,
        ImageSliderBlock,
        HeroV5Block,
        HeroV6Block,
        StatsBlock,
        TimelineBlock,
        FaqBlock,
        PricingBlock,
        ProcessStepsBlock,
        FeatureListBlock,
        BannerBlock,
        ContactInfoBlock,
        ContentColumnsBlock,
        BlockquoteBlock,
        BentoGridBlock,
        LogoMarqueeBlock,
        TabsContentBlock,
        SplitSectionBlock,
        ChecklistBlock,
        CardGridBlock,
        VideoSectionBlock,
        TextMarqueeBlock,
        IconGridBlock,
        NumberCounterBlock,
      ],
    },
    {
      name: 'meta',
      label: 'SEO / Meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Meta Title',
          type: 'text',
          admin: {
            description: 'Overrides the default site title.',
          },
        },
        {
          name: 'description',
          label: 'Meta Description',
          type: 'textarea',
          admin: {
            description: 'Overrides the default site description.',
          },
        },
        imageField('ogImage', 'OG Image'),
        {
          name: 'noIndex',
          label: 'No Index',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Prevent search engines from indexing this page.',
          },
        },
      ],
    },
  ],
}
