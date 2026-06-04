import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const BlockquoteBlock: Block = {
  slug: 'blockquote',
  labels: { singular: 'Blockquote', plural: 'Blockquote Sections' },
  imageAltText: 'Blockquote block — large featured quote',
  fields: [
    { name: 'quote', label: 'Quote', type: 'textarea', required: true },
    { name: 'author', label: 'Author Name', type: 'text' },
    { name: 'role', label: 'Author Role / Title', type: 'text' },
    ...makeSpacingFields('none', 'none'),
  ],
}
