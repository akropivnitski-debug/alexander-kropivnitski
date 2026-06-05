import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const TextMarqueeBlock: Block = {
  slug: 'textMarquee',
  labels: { singular: 'Text Marquee', plural: 'Text Marquee Sections' },
  imageURL: '/blocks/text-marquee.png',
  imageAltText: 'Text Marquee block — scrolling text strip',
  fields: [
    {
      name: 'text',
      label: 'Marquee Text',
      type: 'text',
      required: true,
      admin: { description: 'Text that scrolls continuously. Will be repeated.' },
    },
    {
      name: 'separator',
      label: 'Separator',
      type: 'text',
      defaultValue: '•',
      admin: { description: 'Character between repeated text (e.g. •, /, |, ★)' },
    },
    {
      name: 'speed',
      label: 'Speed',
      type: 'select',
      defaultValue: 'normal',
      options: [
        { label: 'Slow', value: 'slow' },
        { label: 'Normal', value: 'normal' },
        { label: 'Fast', value: 'fast' },
      ],
    },
    {
      name: 'size',
      label: 'Text Size',
      type: 'select',
      defaultValue: 'lg',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' },
      ],
    },
    {
      name: 'variant',
      label: 'Style',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Outline', value: 'outline' },
        { label: 'Muted', value: 'muted' },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
