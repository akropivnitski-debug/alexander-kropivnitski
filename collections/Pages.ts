import type { CollectionConfig } from 'payload'
import { imageField } from '@/fields/imageField'
import { HeroBlock } from '@/blocks/HeroBlock'
import { CompaniesBlock } from '@/blocks/CompaniesBlock'

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
