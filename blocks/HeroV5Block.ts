import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { makeSpacingFields } from '@/fields/spacingFields'

export const HeroV5Block: Block = {
  slug: 'heroV5',
  labels: { singular: 'Hero V5 (Image Right)', plural: 'Hero V5 Sections' },
  imageURL: '/blocks/hero-v5.png',
  imageAltText: 'Hero V5 block preview — text left, image right, no circle',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
    imageField('image', 'Hero Image'),
    ...makeSpacingFields('none', 'none'),
  ],
}
