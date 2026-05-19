import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const CtaBlock: Block = {
  slug: 'cta',
  labels: { singular: 'CTA', plural: 'CTA Sections' },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
      defaultValue: "Let's Work Together",
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'buttonLabel',
      label: 'Button Label',
      type: 'text',
      required: true,
      defaultValue: 'Get in Touch',
    },
    {
      name: 'buttonHref',
      label: 'Button Link',
      type: 'text',
      required: true,
      defaultValue: 'mailto:hello@example.com',
      admin: {
        description: 'Use mailto: for email links or a URL.',
      },
    },
    {
      name: 'buttonColor',
      label: 'Button Color',
      type: 'text',
      defaultValue: '#facc15',
      admin: {
        description: 'Hex color for the button background (e.g. #facc15 for yellow).',
      },
    },
    {
      name: 'linkedinUrl',
      label: 'LinkedIn URL',
      type: 'text',
    },
    {
      name: 'githubUrl',
      label: 'GitHub URL',
      type: 'text',
    },
    ...makeSpacingFields('none', 'none'),
  ],
}
