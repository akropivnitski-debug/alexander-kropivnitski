import type { CollectionConfig } from 'payload'

// Explicit Users collection — previously Payload auto-injected a default
// 'users' collection (same slug, same table) since none was defined. This
// makes it explicit and adds API key auth so scripts/automation can
// authenticate without a password.
export const UsersCollection: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    tokenExpiration: 7200,
    useAPIKey: true,
  },
  fields: [],
}
