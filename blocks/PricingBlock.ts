import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const PricingBlock: Block = {
  slug: 'pricing',
  labels: { singular: 'Pricing', plural: 'Pricing Sections' },
  imageURL: '/blocks/pricing.png',
  imageAltText: 'Pricing block — service tier cards',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'tiers',
      label: 'Tiers',
      type: 'array',
      minRows: 1,
      dbName: 'pricing_tiers',
      fields: [
        { name: 'name', label: 'Tier Name', type: 'text', required: true },
        { name: 'price', label: 'Price', type: 'text', required: true },
        { name: 'period', label: 'Period', type: 'text', defaultValue: '/month' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'highlighted', label: 'Highlighted', type: 'checkbox', defaultValue: false },
        { name: 'buttonLabel', label: 'Button Label', type: 'text', defaultValue: 'Get Started' },
        { name: 'buttonHref', label: 'Button Link', type: 'text' },
        {
          name: 'features',
          label: 'Features',
          type: 'array',
          dbName: 'pricing_feats',
          fields: [
            { name: 'text', label: 'Feature', type: 'text', required: true },
          ],
        },
      ],
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
