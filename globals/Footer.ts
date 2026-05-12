import type { GlobalConfig } from 'payload'

export const FooterGlobal: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  admin: { group: 'Site' },
  fields: [
    {
      name: 'logoText',
      label: 'Logo / Brand Name',
      type: 'text',
      defaultValue: 'Alexander Kropivnitski',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      defaultValue: 'Personal portfolio and professional showcase.',
    },
    {
      name: 'copyrightText',
      label: 'Copyright Text',
      type: 'text',
      admin: {
        description: 'Leave blank to auto-generate with current year.',
      },
    },
    {
      type: 'collapsible',
      label: 'Social Links',
      fields: [
        { name: 'githubUrl', label: 'GitHub URL', type: 'text' },
        { name: 'linkedinUrl', label: 'LinkedIn URL', type: 'text' },
        { name: 'facebookUrl', label: 'Facebook URL', type: 'text' },
        { name: 'instagramUrl', label: 'Instagram URL', type: 'text' },
        { name: 'youtubeUrl', label: 'YouTube URL', type: 'text' },
      ],
    },
    {
      name: 'linkGroups',
      label: 'Link Groups',
      type: 'array',
      admin: {
        description: 'Leave empty to use default links.',
      },
      fields: [
        {
          name: 'label',
          label: 'Group Label',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          label: 'Links',
          type: 'array',
          fields: [
            { name: 'title', label: 'Link Title', type: 'text', required: true },
            { name: 'href', label: 'URL', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}
