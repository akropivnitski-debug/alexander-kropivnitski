import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { spacingFields } from '@/fields/spacingFields'

export const HeroV2Block: Block = {
  slug: 'heroV2',
  labels: { singular: 'Hero V2', plural: 'Hero V2 Sections' },
  imageURL: '/blocks/hero-v2.png',
  imageAltText: 'Hero V2 block preview',
  fields: [
    {
      name: 'logos',
      label: 'Logo Cloud',
      type: 'array',
      admin: {
        description: 'Logos displayed in a grid on the left side. Ideally 4 or 8 logos.',
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
    imageField('image', 'Hero Image'),
    {
      name: 'overlayPart1',
      label: 'Large Text — Line 1',
      type: 'text',
      required: true,
      defaultValue: 'ALEX',
    },
    {
      name: 'overlayPart2',
      label: 'Large Text — Line 2',
      type: 'text',
      required: true,
      defaultValue: 'ANDER',
    },
    {
      name: 'circleColor',
      label: 'Circle Background Color',
      type: 'text',
      defaultValue: '#facc15',
    },
    {
      name: 'locationText',
      label: 'Location Text',
      type: 'text',
      defaultValue: 'Based in Europe',
    },
    ...spacingFields,
  ],
}
