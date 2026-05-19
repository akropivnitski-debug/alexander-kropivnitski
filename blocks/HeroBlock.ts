import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { spacingFields } from '@/fields/spacingFields'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Hero Sections' },
  imageURL: '/blocks/hero.png',
  imageAltText: 'Hero block preview',
  fields: [
    {
      name: 'mainText',
      label: 'Description Text',
      type: 'textarea',
      required: true,
      defaultValue: 'Creative developer crafting digital experiences with modern web technologies.',
      admin: {
        description: 'Short paragraph displayed on the left side of the hero.',
      },
    },
    {
      name: 'readMoreLabel',
      label: 'Link Label',
      type: 'text',
      defaultValue: 'Read More',
    },
    {
      name: 'readMoreHref',
      label: 'Link URL',
      type: 'text',
      defaultValue: '#about',
    },
    imageField('image', 'Hero Image'),
    {
      name: 'overlayPart1',
      label: 'Large Text — Line 1',
      type: 'text',
      required: true,
      defaultValue: 'ALEX',
      admin: {
        description: 'First line of the large overlay text.',
      },
    },
    {
      name: 'overlayPart2',
      label: 'Large Text — Line 2',
      type: 'text',
      required: true,
      defaultValue: 'ANDER',
      admin: {
        description: 'Second line of the large overlay text.',
      },
    },
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
      name: 'locationText',
      label: 'Location Text',
      type: 'text',
      defaultValue: 'Based in Europe',
      admin: {
        description: 'Small text shown at the bottom right of the hero.',
      },
    },
    ...spacingFields,
  ],
}
