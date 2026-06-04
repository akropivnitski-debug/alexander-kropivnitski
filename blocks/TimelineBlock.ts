import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const TimelineBlock: Block = {
  slug: 'timeline',
  labels: { singular: 'Timeline', plural: 'Timeline Sections' },
  imageURL: '/blocks/timeline.png',
  imageAltText: 'Timeline block — vertical event timeline',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'events',
      label: 'Events',
      type: 'array',
      minRows: 1,
      dbName: 'tl_events',
      fields: [
        { name: 'date', label: 'Date / Period', type: 'text', required: true },
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'description', label: 'Description', type: 'textarea' },
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
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
