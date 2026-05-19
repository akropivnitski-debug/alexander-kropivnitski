import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { spacingFields } from '@/fields/spacingFields'

export const CompaniesBlock: Block = {
  slug: 'companies',
  labels: { singular: 'Companies', plural: 'Companies Sections' },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      defaultValue: "Companies I've Worked With",
      admin: {
        description: 'Optional heading above the logo strip.',
      },
    },
    {
      name: 'logos',
      label: 'Company Logos',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'name',
          label: 'Company Name',
          type: 'text',
          required: true,
        },
        imageField('logo', 'Logo'),
      ],
    },
    {
      name: 'speed',
      label: 'Scroll Speed (seconds)',
      type: 'number',
      defaultValue: 30,
      admin: {
        description: 'Duration in seconds for one full scroll cycle. Lower = faster.',
      },
    },
    ...spacingFields,
  ],
}
