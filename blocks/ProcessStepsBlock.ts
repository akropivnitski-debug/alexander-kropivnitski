import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const ProcessStepsBlock: Block = {
  slug: 'processSteps',
  labels: { singular: 'Process Steps', plural: 'Process Steps Sections' },
  imageURL: '/blocks/process-steps.png',
  imageAltText: 'Process Steps block — numbered methodology',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'steps',
      label: 'Steps',
      type: 'array',
      minRows: 1,
      dbName: 'proc_steps',
      fields: [
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'description', label: 'Description', type: 'textarea', required: true },
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
