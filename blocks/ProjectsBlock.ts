import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const ProjectsBlock: Block = {
  slug: 'projects',
  labels: { singular: 'Projects', plural: 'Projects Sections' },
  imageAltText: 'Projects block preview',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      defaultValue: 'Projects',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'projects',
      label: 'Project Cards',
      type: 'array',
      minRows: 1,
      dbName: 'proj_items',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
        {
          name: 'stats',
          label: 'Stats',
          type: 'array',
          maxRows: 3,
          dbName: 'proj_stats',
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
              admin: { description: 'e.g. "Revenue", "Users", "Performance"' },
            },
            {
              name: 'value',
              label: 'Value',
              type: 'text',
              required: true,
              admin: { description: 'e.g. "+25%", "10K", "99.9%"' },
            },
            {
              name: 'trend',
              label: 'Trend',
              type: 'select',
              defaultValue: 'neutral',
              options: [
                { label: 'Up (green)', value: 'up' },
                { label: 'Neutral', value: 'neutral' },
                { label: 'Down (gold)', value: 'down' },
              ],
            },
          ],
        },
        {
          name: 'buttonLabel',
          label: 'Button Label',
          type: 'text',
          defaultValue: 'Explore',
        },
        {
          name: 'buttonHref',
          label: 'Button Link',
          type: 'text',
          admin: { description: 'URL the button links to.' },
        },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
