import type { Field } from 'payload'

export function imageField(name: string, label: string): Field {
  return {
    name,
    label,
    type: 'group',
    fields: [
      {
        name: 'source',
        label: 'Image Source',
        type: 'radio',
        options: [
          { label: 'Upload', value: 'upload' },
          { label: 'External URL', value: 'url' },
        ],
        defaultValue: 'url',
        admin: { layout: 'horizontal' },
      },
      {
        name: 'upload',
        label: 'Media',
        type: 'upload',
        relationTo: 'media',
        admin: {
          condition: (_, siblingData) => siblingData?.source === 'upload',
        },
      },
      {
        name: 'url',
        label: 'External URL',
        type: 'text',
        admin: {
          condition: (_, siblingData) => siblingData?.source === 'url',
          description: 'Full URL to an image (JPG, PNG, WebP, SVG)',
        },
      },
    ],
  }
}
