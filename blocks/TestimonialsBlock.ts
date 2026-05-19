import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { spacingFields } from '@/fields/spacingFields'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonials', plural: 'Testimonials Sections' },
  imageURL: '/blocks/testimonials.png',
  imageAltText: 'Testimonials block preview',
  dbName: 'testi',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
      defaultValue: 'Build by makers, loved by thousand developers',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      defaultValue:
        'Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.',
    },
    {
      name: 'testimonials',
      label: 'Testimonials',
      type: 'array',
      dbName: 'testi_items',
      minRows: 1,
      fields: [
        {
          name: 'quote',
          label: 'Quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'authorName',
          label: 'Author Name',
          type: 'text',
          required: true,
        },
        {
          name: 'authorRole',
          label: 'Author Role / Title',
          type: 'text',
        },
        imageField('avatar', 'Author Avatar'),
        imageField('logo', 'Company Logo'),
        {
          name: 'featured',
          label: 'Featured (large card)',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Featured testimonials span two columns and two rows.',
          },
        },
      ],
    },
    ...spacingFields,
  ],
}
