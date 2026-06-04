import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { makeSpacingFields } from '@/fields/spacingFields'

export const HeroV6Block: Block = {
  slug: 'heroV6',
  labels: { singular: 'Hero V6 (Image Left)', plural: 'Hero V6 Sections' },
  imageAltText: 'Hero V6 block preview — image left, text right, no circle',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    imageField('image', 'Hero Image'),
    {
      name: 'logos',
      label: 'Logo Cloud',
      type: 'array',
      admin: {
        description: 'Logos displayed in a grid below the heading and content.',
      },
      fields: [
        imageField('logo', 'Logo Image'),
        {
          name: 'alt',
          label: 'Alt Text',
          type: 'text',
          required: true,
        },
        {
          name: 'disableFilter',
          label: 'Disable Color Filter',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Show the logo in its original colors instead of grayscale/inverted.',
          },
        },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
