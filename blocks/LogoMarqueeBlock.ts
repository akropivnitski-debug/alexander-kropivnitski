import type { Block } from 'payload'
import { imageField } from '@/fields/imageField'
import { makeSpacingFields } from '@/fields/spacingFields'

export const LogoMarqueeBlock: Block = {
  slug: 'logoMarquee',
  labels: { singular: 'Logo Marquee', plural: 'Logo Marquee Sections' },
  imageURL: '/blocks/logo-marquee.png',
  imageAltText: 'Logo Marquee block — infinite scrolling logos',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    {
      name: 'speed',
      label: 'Scroll Speed',
      type: 'select',
      defaultValue: 'normal',
      options: [
        { label: 'Slow', value: 'slow' },
        { label: 'Normal', value: 'normal' },
        { label: 'Fast', value: 'fast' },
      ],
    },
    {
      name: 'logos',
      label: 'Logos',
      type: 'array',
      minRows: 3,
      dbName: 'marquee_logos',
      fields: [
        imageField('logo', 'Logo Image'),
        { name: 'name', label: 'Name / Alt Text', type: 'text', required: true },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
