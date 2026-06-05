import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const TabsContentBlock: Block = {
  slug: 'tabsContent',
  labels: { singular: 'Tabs Content', plural: 'Tabs Content Sections' },
  imageURL: '/blocks/tabs-content.png',
  imageAltText: 'Tabs Content block — tabbed panels',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    {
      name: 'tabs',
      label: 'Tabs',
      type: 'array',
      minRows: 2,
      maxRows: 6,
      dbName: 'tabs_items',
      fields: [
        { name: 'label', label: 'Tab Label', type: 'text', required: true },
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
        { name: 'content', label: 'Content', type: 'richText', required: true },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
