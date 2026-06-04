import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const FaqBlock: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQ Sections' },
  imageURL: '/blocks/faq.png',
  imageAltText: 'FAQ block — accordion questions and answers',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text', defaultValue: 'Frequently Asked Questions' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'items',
      label: 'Questions',
      type: 'array',
      minRows: 1,
      dbName: 'faq_items',
      fields: [
        { name: 'question', label: 'Question', type: 'text', required: true },
        { name: 'answer', label: 'Answer', type: 'textarea', required: true },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
