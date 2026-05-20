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
    {
      type: 'collapsible',
      label: 'Typography',
      fields: [
        {
          name: 'headingFontSource',
          label: 'Heading Font Source',
          type: 'radio',
          defaultValue: 'google',
          options: [
            { label: 'Google Fonts', value: 'google' },
            { label: 'Custom (.woff2)', value: 'custom' },
          ],
          admin: { layout: 'horizontal' },
        },
        {
          name: 'headingFontGoogle',
          label: 'Heading Font (Google)',
          type: 'text',
          defaultValue: 'Inter',
          admin: {
            description: 'Exact Google Fonts name, e.g. "Inter", "Playfair Display", "Space Grotesk".',
            condition: (data) => data?.headingFontSource !== 'custom',
          },
        },
        {
          name: 'headingFontFile',
          label: 'Heading Font (.woff2)',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload a .woff2 font file for headings.',
            condition: (data) => data?.headingFontSource === 'custom',
          },
        },
        {
          name: 'headingFontWeight',
          label: 'Heading Font Weight',
          type: 'text',
          defaultValue: '700',
          admin: {
            description: 'CSS font-weight value, e.g. "700", "400..900" for variable fonts.',
          },
        },
        {
          name: 'bodyFontSource',
          label: 'Body Font Source',
          type: 'radio',
          defaultValue: 'google',
          options: [
            { label: 'Google Fonts', value: 'google' },
            { label: 'Custom (.woff2)', value: 'custom' },
          ],
          admin: { layout: 'horizontal' },
        },
        {
          name: 'bodyFontGoogle',
          label: 'Body Font (Google)',
          type: 'text',
          defaultValue: 'Inter',
          admin: {
            description: 'Exact Google Fonts name, e.g. "Inter", "DM Sans", "Outfit".',
            condition: (data) => data?.bodyFontSource !== 'custom',
          },
        },
        {
          name: 'bodyFontFile',
          label: 'Body Font (.woff2)',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload a .woff2 font file for body text.',
            condition: (data) => data?.bodyFontSource === 'custom',
          },
        },
        {
          name: 'bodyFontWeight',
          label: 'Body Font Weight',
          type: 'text',
          defaultValue: '400',
          admin: {
            description: 'CSS font-weight value, e.g. "400", "100..900" for variable fonts.',
          },
        },
      ],
    },
  ],
}
