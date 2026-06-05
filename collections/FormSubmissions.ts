import type { CollectionConfig } from 'payload'

export const FormSubmissionsCollection: CollectionConfig = {
  slug: 'form-submissions',
  labels: { singular: 'Form Submission', plural: 'Form Submissions' },
  admin: {
    group: 'Forms',
    useAsTitle: 'email',
    defaultColumns: ['form', 'email', 'createdAt', 'blocked'],
  },
  access: {
    create: () => false, // only via API route
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'form',
      label: 'Form',
      type: 'relationship',
      relationTo: 'forms',
      admin: { readOnly: true },
    },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'message', label: 'Message', type: 'textarea' },
    {
      name: 'data',
      label: 'All Field Data',
      type: 'json',
      admin: {
        readOnly: true,
        description: 'Raw JSON of all submitted field values.',
      },
    },
    { name: 'source', label: 'Source Page', type: 'text' },
    { name: 'ip', label: 'IP Address', type: 'text', admin: { readOnly: true } },
    { name: 'blocked', label: 'Blocked (Bot)', type: 'checkbox', defaultValue: false },
    { name: 'blockReason', label: 'Block Reason', type: 'text', admin: { readOnly: true } },
  ],
}
