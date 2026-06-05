import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { makeSpacingFields } from '@/fields/spacingFields'

export const SplitSectionBlock: Block = {
  slug: 'splitSection',
  labels: { singular: 'Split Section', plural: 'Split Sections' },
  imageURL: '/blocks/split-section.png',
  imageAltText: 'Split Section block — image and text side by side',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'richText' },
    imageField('image', 'Image'),
    {
      name: 'layout',
      label: 'Image Position',
      type: 'select',
      defaultValue: 'imageRight',
      options: [
        { label: 'Image Right', value: 'imageRight' },
        { label: 'Image Left', value: 'imageLeft' },
      ],
    },
    { name: 'buttonLabel', label: 'Button Label', type: 'text' },
    { name: 'buttonHref', label: 'Button Link', type: 'text' },
    ...makeSpacingFields('none', 'none'),
  ],
}
