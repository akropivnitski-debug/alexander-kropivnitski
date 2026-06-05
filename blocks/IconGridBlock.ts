import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const IconGridBlock: Block = {
  slug: 'iconGrid',
  labels: { singular: 'Icon Grid', plural: 'Icon Grid Sections' },
  imageURL: '/blocks/icon-grid.png',
  imageAltText: 'Icon Grid block — icons with labels',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'columns',
      label: 'Columns',
      type: 'select',
      defaultValue: '4',
      options: [
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
        { label: '5 Columns', value: '5' },
        { label: '6 Columns', value: '6' },
      ],
    },
    {
      name: 'items',
      label: 'Items',
      type: 'array',
      minRows: 1,
      dbName: 'icon_grid_items',
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
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'sublabel', label: 'Sub-label', type: 'text' },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
