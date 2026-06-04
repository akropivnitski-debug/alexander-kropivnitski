import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const StatsBlock: Block = {
  slug: 'stats',
  labels: { singular: 'Stats', plural: 'Stats Sections' },
  imageAltText: 'Stats block — key numbers in a grid',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'items',
      label: 'Stats',
      type: 'array',
      minRows: 1,
      dbName: 'stats_items',
      fields: [
        { name: 'value', label: 'Value', type: 'text', required: true },
        { name: 'label', label: 'Label', type: 'text', required: true },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
