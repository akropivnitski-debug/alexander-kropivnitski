import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'

export const AboutMeBlock: Block = {
  slug: 'aboutMe',
  labels: { singular: 'About Me', plural: 'About Me Sections' },
  dbName: 'about_me',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      defaultValue: 'About Me',
    },
    {
      name: 'description',
      label: 'Section Description',
      type: 'textarea',
    },
    {
      name: 'items',
      label: 'Timeline Items',
      type: 'array',
      dbName: 'about_items',
      minRows: 1,
      fields: [
        {
          name: 'label',
          label: 'Date / Label',
          type: 'text',
          required: true,
          admin: {
            description: 'Displayed on the opposite side (e.g. "2020 – 2023", "Chapter 1").',
          },
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          label: 'Description',
          type: 'textarea',
        },
        imageField('image', 'Image'),
      ],
    },
  ],
}
