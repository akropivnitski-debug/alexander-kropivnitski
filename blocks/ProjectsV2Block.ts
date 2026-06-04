import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const ProjectsV2Block: Block = {
  slug: 'projectsV2',
  labels: { singular: 'Projects V2', plural: 'Projects V2 Sections' },
  imageURL: '/blocks/projects-v2.png',
  imageAltText: 'Projects V2 block preview',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
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
      admin: { description: 'Number of cards per row on desktop.' },
    },
    {
      name: 'cards',
      label: 'Cards',
      type: 'array',
      minRows: 1,
      dbName: 'proj_v2_cards',
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
          name: 'href',
          label: 'Link',
          type: 'text',
          admin: { description: 'Optional URL the card links to.' },
        },
      ],
    },
    {
      name: 'buttonLabel',
      label: 'Button Label',
      type: 'text',
      admin: { description: 'Text for the button below the cards. Only shows when cards exceed 2 rows.' },
    },
    {
      name: 'buttonHref',
      label: 'Button Link',
      type: 'text',
      admin: { description: 'URL the button links to.' },
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
