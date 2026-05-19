import type { Block } from 'payload'

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
          name: 'startLat',
          label: 'Start Latitude',
          type: 'number',
          required: true,
          admin: { description: 'e.g. 48.8566 for Paris' },
        },
        {
          name: 'startLng',
          label: 'Start Longitude',
          type: 'number',
          required: true,
          admin: { description: 'e.g. 2.3522 for Paris' },
        },
        {
          name: 'startLabel',
          label: 'Start Label',
          type: 'text',
        },
        {
          name: 'endLat',
          label: 'End Latitude',
          type: 'number',
          required: true,
        },
        {
          name: 'endLng',
          label: 'End Longitude',
          type: 'number',
          required: true,
        },
        {
          name: 'endLabel',
          label: 'End Label',
          type: 'text',
        },
      ],
    },
  ],
}
