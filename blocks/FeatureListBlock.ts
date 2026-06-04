import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const FeatureListBlock: Block = {
  slug: 'featureList',
  labels: { singular: 'Feature List', plural: 'Feature List Sections' },
  imageAltText: 'Feature List block — two-column icon + text',
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
        { label: '3 Columns', value: '3' },
      ],
    },
    {
      name: 'items',
      label: 'Features',
      type: 'array',
      minRows: 1,
      dbName: 'feat_list_items',
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          type: 'text',
          admin: {
            components: {
              Field: '/components/admin/IconPicker#IconPicker',
            },
          },
        },
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
