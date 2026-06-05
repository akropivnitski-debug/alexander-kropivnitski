import type { CollectionConfig } from 'payload'

export const FormsCollection: CollectionConfig = {
  slug: 'forms',
  labels: { singular: 'Form', plural: 'Forms' },
  admin: {
    group: 'Forms',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Create forms and use #form:slug in any button link to open them as a popup.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Form Title (admin only)',
      type: 'text',
      required: true,
      admin: { description: 'Internal name — not shown to visitors.' },
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Use this in button links as #form:your-slug to open this form as a popup.',
      },
    },
    {
      name: 'heading',
      label: 'Popup Heading',
      type: 'text',
      admin: { description: 'Optional heading shown at the top of the popup.' },
    },
    {
      name: 'description',
      label: 'Popup Description',
      type: 'textarea',
      admin: { description: 'Optional description below the heading.' },
    },
    {
      name: 'recipientEmail',
      label: 'Recipient Email',
      type: 'email',
      required: true,
      admin: { description: 'Email shown to the user after successful submission.' },
    },
    {
      name: 'successMessage',
      label: 'Success Message',
      type: 'text',
      defaultValue: 'Thank you for reaching out. I\'ll get back to you soon.',
      admin: { description: 'Message shown after successful submission.' },
    },
    {
      name: 'submitLabel',
      label: 'Submit Button Label',
      type: 'text',
      defaultValue: 'Send Message',
    },
    {
      name: 'buttonColor',
      label: 'Submit Button Color',
      type: 'text',
      defaultValue: '#facc15',
      admin: { description: 'Hex color (e.g. #facc15).' },
    },
    {
      name: 'fields',
      label: 'Form Fields',
      type: 'array',
      minRows: 1,
      dbName: 'form_fields',
      admin: {
        description: 'Add fields to the form. Email field is required for submissions.',
      },
      fields: [
        {
          name: 'name',
          label: 'Field Name',
          type: 'text',
          required: true,
          admin: { description: 'Internal name (e.g. email, name, message). Must be unique within the form.' },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          admin: { description: 'Optional label shown above the field. If empty, no label is rendered.' },
        },
        {
          name: 'type',
          label: 'Field Type',
          type: 'select',
          required: true,
          defaultValue: 'text',
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Textarea', value: 'textarea' },
            { label: 'Phone', value: 'tel' },
            { label: 'URL', value: 'url' },
            { label: 'Number', value: 'number' },
          ],
        },
        {
          name: 'placeholder',
          label: 'Placeholder',
          type: 'text',
          admin: { description: 'Faded hint text shown when the field is empty.' },
        },
        {
          name: 'required',
          label: 'Required',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'width',
          label: 'Width',
          type: 'select',
          defaultValue: 'full',
          options: [
            { label: 'Full Width', value: 'full' },
            { label: 'Half Width', value: 'half' },
          ],
        },
      ],
    },
  ],
}
