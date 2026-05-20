import type { CollectionConfig } from 'payload'
import sharp from 'sharp'

const FORMAT_TO_MIME: Record<string, string> = {
  webp: 'image/webp',
  avif: 'image/avif',
  jpeg: 'image/jpeg',
  png: 'image/png',
}

const MIME_TO_EXT: Record<string, string> = {
  'image/webp': '.webp',
  'image/avif': '.avif',
  'image/jpeg': '.jpg',
  'image/png': '.png',
}

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media', plural: 'Media' },
  admin: {
    group: 'Content',
    useAsTitle: 'filename',
  },
  upload: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml', 'image/avif', 'font/woff2'],
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
      async ({ data, req }) => {
        const file = req.file
        if (!file || !data) return data

        // Skip SVGs and GIFs — Sharp can't meaningfully optimize them
        if (
          file.mimetype === 'image/svg+xml' ||
          file.mimetype === 'image/gif'
        ) {
          return data
        }

        const format = data.optimizeFormat || 'auto'
        const quality = data.optimizeQuality ?? 80
        const maxWidth = data.optimizeMaxWidth || undefined
        const maxHeight = data.optimizeMaxHeight || undefined

        // Nothing to do if auto format, full quality, and no resize
        if (format === 'auto' && quality >= 100 && !maxWidth && !maxHeight) {
          return data
        }

        let pipeline = sharp(file.data)

        // Resize if max dimensions set
        if (maxWidth || maxHeight) {
          pipeline = pipeline.resize({
            width: maxWidth,
            height: maxHeight,
            fit: 'inside',
            withoutEnlargement: true,
          })
        }

        // Format conversion or quality compression
        if (format !== 'auto') {
          pipeline = pipeline.toFormat(format as keyof sharp.FormatEnum, {
            quality,
          })
        } else if (quality < 100) {
          // Compress in original format
          const mimeToFormat: Record<string, keyof sharp.FormatEnum> = {
            'image/jpeg': 'jpeg',
            'image/png': 'png',
            'image/webp': 'webp',
            'image/avif': 'avif',
          }
          const originalFormat = mimeToFormat[file.mimetype]
          if (originalFormat) {
            pipeline = pipeline.toFormat(originalFormat, { quality })
          }
        }

        const output = await pipeline.toBuffer({ resolveWithObject: true })

        // Update file buffer and size
        file.data = output.data
        file.size = output.data.length

        // Update mimetype and filename if format changed
        if (format !== 'auto') {
          const newMime = FORMAT_TO_MIME[format]
          if (newMime && newMime !== file.mimetype) {
            file.mimetype = newMime
            const newExt = MIME_TO_EXT[newMime]
            if (newExt && data.filename) {
              data.filename = data.filename.replace(/\.[^.]+$/, newExt)
            }
          }
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
    {
      type: 'ui',
      name: 'optimizationPanel',
      admin: {
        components: {
          Field: '/components/admin/OptimizationPanel#OptimizationPanel',
        },
      },
    },
    {
      name: 'optimizeFormat',
      type: 'select',
      defaultValue: 'auto',
      options: [
        { label: 'Auto (keep original)', value: 'auto' },
        { label: 'WebP', value: 'webp' },
        { label: 'AVIF', value: 'avif' },
        { label: 'JPEG', value: 'jpeg' },
        { label: 'PNG', value: 'png' },
      ],
      admin: { hidden: true },
    },
    {
      name: 'optimizeQuality',
      type: 'number',
      defaultValue: 80,
      min: 1,
      max: 100,
      admin: { hidden: true },
    },
    {
      name: 'optimizeMaxWidth',
      type: 'number',
      min: 1,
      admin: { hidden: true },
    },
    {
      name: 'optimizeMaxHeight',
      type: 'number',
      min: 1,
      admin: { hidden: true },
    },
  ],
}
