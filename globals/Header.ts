import type { GlobalConfig } from 'payload'

export const HeaderGlobal: GlobalConfig = {
  slug: 'header',
  label: 'Header / Navigation',
  admin: { group: 'Site' },
  fields: [
    {
      name: 'logoUrl',
      label: 'Logo Image URL',
      type: 'text',
      admin: {
        description: 'Paste a URL to your logo image (PNG, SVG, WebP). Leave blank to use the default icon.',
      },
    },
    {
      name: 'logoAlt',
      label: 'Logo Alt Text',
      type: 'text',
      defaultValue: 'Alexander Kropivnitski',
    },
    {
      name: 'logoHeight',
      label: 'Logo Height (px)',
      type: 'number',
      defaultValue: 32,
      min: 16,
      max: 80,
      admin: {
        description: 'Height of the logo in pixels (16–80px). Width scales automatically.',
      },
    },
    {
      name: 'navItems',
      label: 'Navigation Items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
        {
          name: 'dropdownItems',
          label: 'Dropdown Items',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'ctaLabel',
      label: 'CTA Button Label',
      type: 'text',
      defaultValue: 'Get in Touch',
    },
    {
      name: 'ctaHref',
      label: 'CTA Button Link',
      type: 'text',
      defaultValue: '#',
    },
  ],
}
