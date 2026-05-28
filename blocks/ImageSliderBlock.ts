import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { makeSpacingFields } from '@/fields/spacingFields'

export const ImageSliderBlock: Block = {
  slug: 'imageSlider',
  labels: { singular: 'Image Slider', plural: 'Image Slider Sections' },
  imageAltText: 'Image Slider block preview',
  fields: [
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 3,
      dbName: 'img_slider_imgs',
      fields: [
        imageField('image', 'Image'),
        {
          name: 'alt',
          label: 'Alt Text',
          type: 'text',
        },
      ],
    },
    {
      name: 'speed',
      label: 'Scroll Speed (seconds)',
      type: 'number',
      defaultValue: 20,
      admin: {
        description: 'Duration in seconds for one full scroll cycle. Lower = faster.',
      },
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
