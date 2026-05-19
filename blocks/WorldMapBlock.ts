import type { Block } from 'payload'
import { cityOptions } from '@/lib/city-coordinates'

export const WorldMapBlock: Block = {
  slug: 'worldMap',
  labels: { singular: 'World Map', plural: 'World Map Sections' },
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
  ],
}
