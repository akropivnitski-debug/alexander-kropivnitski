import type { Block } from 'payload'
import { makeSpacingFields } from '@/fields/spacingFields'

export const ContactInfoBlock: Block = {
  slug: 'contactInfo',
  labels: { singular: 'Contact Info', plural: 'Contact Info Sections' },
  imageAltText: 'Contact Info block — contact details display',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text', defaultValue: 'Get in Touch' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'email', label: 'Email', type: 'text' },
    { name: 'phone', label: 'Phone', type: 'text' },
    { name: 'location', label: 'Location', type: 'text' },
    { name: 'linkedinUrl', label: 'LinkedIn URL', type: 'text' },
    { name: 'githubUrl', label: 'GitHub URL', type: 'text' },
    { name: 'twitterUrl', label: 'Twitter / X URL', type: 'text' },
    ...makeSpacingFields('none', 'none'),
  ],
}
