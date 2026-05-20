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
