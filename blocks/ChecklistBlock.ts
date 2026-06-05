import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const ChecklistBlock: Block = {
  slug: 'checklist',
  labels: { singular: 'Checklist', plural: 'Checklist Sections' },
  imageURL: '/blocks/checklist.png',
  imageAltText: 'Checklist block — feature list with icons',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'columns',
      label: 'Columns',
      type: 'select',
      defaultValue: '2',
      options: [
        { label: '1 Column', value: '1' },
        { label: '2 Columns', value: '2' },
      ],
    },
    {
      name: 'items',
      label: 'Items',
      type: 'array',
      minRows: 1,
      dbName: 'checklist_items',
      fields: [
        { name: 'text', label: 'Text', type: 'text', required: true },
        {
          name: 'included',
          label: 'Included',
          type: 'checkbox',
          defaultValue: true,
          admin: { description: 'Uncheck to show as excluded (with X icon)' },
        },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
