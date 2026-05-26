import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const AboutSimpleBlock: Block = {
  slug: 'aboutSimple',
  labels: { singular: 'About Simple', plural: 'About Simple Sections' },
  imageAltText: 'About Simple block preview',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
