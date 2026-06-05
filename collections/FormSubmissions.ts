import type { CollectionConfig } from 'payload'

export const FormSubmissionsCollection: CollectionConfig = {
  slug: 'form-submissions',
  labels: { singular: 'Form Submission', plural: 'Form Submissions' },
  admin: {
    group: 'Content',
    useAsTitle: 'email',
    defaultColumns: ['email', 'message', 'createdAt'],
  },
  access: {
    create: () => false, // only via API route
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
    { name: 'source', label: 'Source Page', type: 'text' },
    { name: 'ip', label: 'IP Address', type: 'text', admin: { readOnly: true } },
    { name: 'blocked', label: 'Blocked (Bot)', type: 'checkbox', defaultValue: false },
    { name: 'blockReason', label: 'Block Reason', type: 'text', admin: { readOnly: true } },
  ],
}
