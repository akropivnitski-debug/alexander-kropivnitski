import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const ContentColumnsBlock: Block = {
  slug: 'contentColumns',
  labels: { singular: 'Content Columns', plural: 'Content Columns Sections' },
  imageAltText: 'Content Columns block — multi-column rich text',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    {
      name: 'columns',
      label: 'Columns',
      type: 'array',
      minRows: 2,
      maxRows: 3,
      dbName: 'cont_cols',
      fields: [
        { name: 'title', label: 'Column Title', type: 'text' },
        { name: 'content', label: 'Content', type: 'richText', required: true },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
