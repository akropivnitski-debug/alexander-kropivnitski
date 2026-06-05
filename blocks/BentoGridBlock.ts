import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const BentoGridBlock: Block = {
  slug: 'bentoGrid',
  labels: { singular: 'Bento Grid', plural: 'Bento Grid Sections' },
  imageURL: '/blocks/bento-grid.png',
  imageAltText: 'Bento Grid block — mixed-size card layout',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'cards',
      label: 'Cards',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      dbName: 'bento_cards',
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
        {
          name: 'size',
          label: 'Card Size',
          type: 'select',
          defaultValue: 'normal',
          options: [
            { label: 'Normal (1 col)', value: 'normal' },
            { label: 'Wide (2 cols)', value: 'wide' },
          ],
        },
        {
          name: 'accentColor',
          label: 'Accent Color',
          type: 'text',
          admin: { description: 'Optional hex color for card accent (e.g. #facc15)' },
        },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
