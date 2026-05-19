import type { Block } from 'payload'
import { cityOptions } from '@/lib/city-coordinates'
import { spacingFields } from '@/fields/spacingFields'

export const WorldMapBlock: Block = {
  slug: 'worldMap',
  labels: { singular: 'World Map', plural: 'World Map Sections' },
  imageURL: '/blocks/world-map.png',
  imageAltText: 'World Map block preview',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'lineColor',
      label: 'Line Color',
      type: 'text',
      defaultValue: '#0ea5e9',
      admin: {
        description: 'CSS color for the animated connection lines (e.g. #0ea5e9)',
      },
    },
    {
      name: 'dotColor',
      label: 'Map Dots Color',
      type: 'text',
      defaultValue: '#FFFF7F40',
      admin: {
        description: 'CSS color for the continent dots (8-char hex for alpha, e.g. #FFFF7F40)',
      },
    },
    {
      name: 'showLabels',
      label: 'Show Location Labels',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'loop',
      label: 'Loop Animation',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'connections',
      label: 'Connections',
      type: 'array',
      dbName: 'map_conns',
      admin: {
        description: 'Each connection draws an animated arc between two points on the map.',
      },
      fields: [
        {
          name: 'startCity',
          label: 'Start City',
          type: 'select',
          required: true,
          options: cityOptions,
          admin: {
            description: 'Select a European capital or US state capital',
          },
        },
        {
          name: 'endCity',
          label: 'End City',
          type: 'select',
          required: true,
          options: cityOptions,
          admin: {
            description: 'Select a European capital or US state capital',
          },
        },
      ],
    },
    {
      name: 'stats',
      label: 'Stats',
      type: 'array',
      maxRows: 3,
      admin: {
        description: 'Up to 3 big numbers displayed below the map.',
      },
      fields: [
        {
          name: 'value',
          label: 'Number / Value',
          type: 'text',
          required: true,
          admin: { description: 'e.g. "10+", "50K", "99%"' },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: { description: 'Small text below the number.' },
        },
      ],
    },
    {
      name: 'statsColor',
      label: 'Stats Number Color',
      type: 'text',
      defaultValue: '#facc15',
      admin: {
        description: 'Hex color for the stat numbers (e.g. #facc15 for yellow).',
      },
    },
    ...spacingFields,
  ],
}
