import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { makeSpacingFields } from '@/fields/spacingFields'

export const CardGridBlock: Block = {
  slug: 'cardGrid',
  labels: { singular: 'Card Grid', plural: 'Card Grid Sections' },
  imageURL: '/blocks/card-grid.png',
  imageAltText: 'Card Grid block — image cards with links',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'columns',
      label: 'Columns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
    },
    {
      name: 'cards',
      label: 'Cards',
      type: 'array',
      minRows: 1,
      dbName: 'card_grid_items',
      fields: [
        imageField('image', 'Card Image'),
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'tag', label: 'Tag / Category', type: 'text' },
        { name: 'href', label: 'Link URL', type: 'text' },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
