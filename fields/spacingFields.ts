import type { Field } from 'payload'

const spacingOptions = [
  { label: 'None', value: 'none' },
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' },
]

export function makeSpacingFields(defaultTop = 'md', defaultBottom = 'md'): Field[] {
  return [
    {
      type: 'row',
      fields: [
        {
          name: 'spacingTop',
          label: 'Top Spacing',
          type: 'select',
          defaultValue: defaultTop,
          options: spacingOptions,
          admin: { width: '50%' },
        },
        {
          name: 'spacingBottom',
          label: 'Bottom Spacing',
          type: 'select',
          defaultValue: defaultBottom,
          options: spacingOptions,
          admin: { width: '50%' },
        },
      ],
    },
  ]
}

export const spacingFields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'spacingTop',
        label: 'Top Spacing',
        type: 'select',
        defaultValue: 'md',
        options: spacingOptions,
        admin: { width: '50%' },
      },
      {
        name: 'spacingBottom',
        label: 'Bottom Spacing',
        type: 'select',
        defaultValue: 'md',
        options: spacingOptions,
        admin: { width: '50%' },
      },
    ],
  },
]

export const spacingClasses: Record<string, string> = {
  none: '',
  sm: 'py-4 md:py-6',
  md: 'py-8 md:py-12',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
}

export function getSpacingClass(top?: string | null, bottom?: string | null): string {
  const t = top ?? 'md'
  const b = bottom ?? 'md'
  const topMap: Record<string, string> = {
    none: '',
    sm: 'pt-4 md:pt-6',
    md: 'pt-8 md:pt-12',
    lg: 'pt-16 md:pt-24',
    xl: 'pt-24 md:pt-32',
  }
  const bottomMap: Record<string, string> = {
    none: '',
    sm: 'pb-4 md:pb-6',
    md: 'pb-8 md:pb-12',
    lg: 'pb-16 md:pb-24',
    xl: 'pb-24 md:pb-32',
  }
  return `${topMap[t] ?? ''} ${bottomMap[b] ?? ''}`.trim()
}
