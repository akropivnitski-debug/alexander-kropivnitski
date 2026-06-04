import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const BannerBlock: Block = {
  slug: 'banner',
  labels: { singular: 'Banner', plural: 'Banner Sections' },
  imageAltText: 'Banner block — highlight announcement strip',
  fields: [
    { name: 'text', label: 'Text', type: 'text', required: true },
    { name: 'buttonLabel', label: 'Button Label', type: 'text' },
    { name: 'buttonHref', label: 'Button Link', type: 'text' },
    {
      name: 'variant',
      label: 'Style',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Accent', value: 'accent' },
        { label: 'Subtle', value: 'subtle' },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
