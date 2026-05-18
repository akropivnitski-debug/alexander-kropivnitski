import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'

export const HeroV2Block: Block = {
  slug: 'heroV2',
  labels: { singular: 'Hero V2', plural: 'Hero V2 Sections' },
  fields: [
    {
      name: 'logos',
      label: 'Logo Cloud',
      type: 'array',
      admin: {
        description: 'Logos displayed in a grid on the left side. Ideally 4 or 8 logos.',
      },
      fields: [
        {
          name: 'src',
          label: 'Logo URL',
          type: 'text',
          required: true,
        },
        {
          name: 'alt',
          label: 'Alt Text',
          type: 'text',
          required: true,
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
  ],
}
