import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const VideoSectionBlock: Block = {
  slug: 'videoSection',
  labels: { singular: 'Video Section', plural: 'Video Sections' },
  imageURL: '/blocks/video-section.png',
  imageAltText: 'Video Section block — embedded video with text',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'videoUrl',
      label: 'Video URL',
      type: 'text',
      required: true,
      admin: { description: 'YouTube or Vimeo URL (e.g. https://www.youtube.com/watch?v=...)' },
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'select',
      defaultValue: 'centered',
      options: [
        { label: 'Centered (full width)', value: 'centered' },
        { label: 'Side by side (video + text)', value: 'split' },
      ],
    },
    {
      name: 'aspectRatio',
      label: 'Aspect Ratio',
      type: 'select',
      defaultValue: '16/9',
      options: [
        { label: '16:9', value: '16/9' },
        { label: '4:3', value: '4/3' },
        { label: '1:1', value: '1/1' },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
