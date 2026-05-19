import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { makeSpacingFields } from '@/fields/spacingFields'

export const HeroV3Block: Block = {
  slug: 'heroV3',
  labels: { singular: 'Hero V3', plural: 'Hero V3 Sections' },
  imageURL: '/blocks/hero-v3.png',
  imageAltText: 'Hero V3 block preview',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
      defaultValue: 'Hello, I\'m Alexander',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
    imageField('image', 'Hero Image'),
    {
      name: 'circleColor',
      label: 'Circle Background Color',
      type: 'text',
      defaultValue: '#facc15',
      admin: {
        description: 'Hex color for the circle behind the image (e.g. #facc15 for yellow).',
      },
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
