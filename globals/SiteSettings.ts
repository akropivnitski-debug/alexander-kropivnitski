import type { GlobalConfig } from 'payload'
import { imageField } from '@/fields/imageField'

export const SiteSettingsGlobal: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: { group: 'Global' },
  fields: [
    {
      name: 'siteName',
      label: 'Site Name',
      type: 'text',
      defaultValue: 'Alexander Kropivnitski',
      admin: {
        description: 'Used as fallback in <title> tags.',
      },
    },
    {
      name: 'siteDescription',
      label: 'Default Meta Description',
      type: 'textarea',
      admin: {
        description: 'Used when a page has no individual meta description.',
      },
    },
    imageField('defaultOgImage', 'Default OG Image'),
    {
      name: 'faviconUrl',
      label: 'Favicon URL',
      type: 'text',
      admin: {
        description: 'URL to a .ico, .png, or .svg favicon.',
      },
    },
    {
      name: 'googleAnalyticsId',
      label: 'Google Analytics ID',
      type: 'text',
      admin: {
        description: 'e.g. G-XXXXXXXXXX',
      },
    },
    {
      name: 'primaryColor',
      label: 'Primary Brand Color',
      type: 'text',
      defaultValue: '#2563EB',
      admin: {
        description: 'Hex color code used as the brand primary color.',
      },
    },
    {
      name: 'twitterHandle',
      label: 'Twitter / X Handle',
      type: 'text',
    },
  ],
}
