import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const NumberCounterBlock: Block = {
  slug: 'numberCounter',
  labels: { singular: 'Number Counter', plural: 'Number Counter Sections' },
  imageURL: '/blocks/number-counter.png',
  imageAltText: 'Number Counter block — animated counting numbers',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'items',
      label: 'Counters',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      dbName: 'counter_items',
      fields: [
        {
          name: 'value',
          label: 'Target Number',
          type: 'number',
          required: true,
          admin: { description: 'The number to count up to (e.g. 150, 400, 25)' },
        },
        {
          name: 'suffix',
          label: 'Suffix',
          type: 'text',
          admin: { description: 'Text after the number (e.g. +, %, M, K)' },
        },
        {
          name: 'prefix',
          label: 'Prefix',
          type: 'text',
          admin: { description: 'Text before the number (e.g. $, €)' },
        },
        { name: 'label', label: 'Label', type: 'text', required: true },
        {
          name: 'accentColor',
          label: 'Number Color',
          type: 'text',
          admin: { description: 'Optional hex color for the number (e.g. #facc15)' },
        },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
