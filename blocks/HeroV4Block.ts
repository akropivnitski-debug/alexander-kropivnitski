import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { spacingFields } from '@/fields/spacingFields'

export const HeroV4Block: Block = {
  slug: 'heroV4',
  labels: { singular: 'Hero V4', plural: 'Hero V4 Sections' },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
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
    {
      name: 'logos',
      label: 'Logo Cloud',
      type: 'array',
      admin: {
        description: 'Logos displayed in a grid below the heading and content.',
      },
      fields: [
        imageField('logo', 'Logo Image'),
        {
          name: 'alt',
          label: 'Alt Text',
          type: 'text',
          required: true,
        },
        {
          name: 'disableFilter',
          label: 'Disable Color Filter',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Show the logo in its original colors instead of grayscale/inverted.',
          },
        },
      ],
    },
    ...spacingFields,
  ],
}
