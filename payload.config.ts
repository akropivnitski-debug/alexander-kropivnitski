import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { fileURLToPath } from 'url'
import { HeaderGlobal } from './globals/Header'
import { FooterGlobal } from './globals/Footer'
import { SiteSettingsGlobal } from './globals/SiteSettings'
import { MediaCollection } from './collections/Media'
import { PagesCollection } from './collections/Pages'
import { FormsCollection } from './collections/Forms'
import { FormSubmissionsCollection } from './collections/FormSubmissions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  collections: [MediaCollection, PagesCollection, FormsCollection, FormSubmissionsCollection],
  globals: [
    SiteSettingsGlobal,
    HeaderGlobal,
    FooterGlobal,
  ],
  secret: process.env.PAYLOAD_SECRET!,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  plugins: [
    vercelBlobStorage({
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL_UNPOOLED || process.env.POSTGRES_URL_NON_POOLING || process.env.DATABASE_URL || process.env.POSTGRES_URL!,
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 10000,
    },
    push: process.env.NODE_ENV !== 'production' && process.env.PAYLOAD_DB_PUSH === 'true',
  }),
})
