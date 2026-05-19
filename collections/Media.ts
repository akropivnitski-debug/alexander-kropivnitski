import type { CollectionConfig } from 'payload'

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media', plural: 'Media' },
  admin: {
    group: 'Content',
    useAsTitle: 'filename',
  },
  upload: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'],
    disableLocalStorage: true,
    focalPoint: false,
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data && data.filename && !data.alt) {
          data.alt = data.filename.replace(/\.[^.]+$/, '')
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      admin: {
        description: 'Describe the image for screen readers and SEO.',
      },
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'text',
    },
  ],
}
