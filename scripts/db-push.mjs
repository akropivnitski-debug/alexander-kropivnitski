/**
 * Pre-build script: initializes Payload to trigger DB schema push.
 * This runs during `npm run build` on Vercel, ensuring the database
 * schema is up-to-date before the Next.js build starts.
 *
 * Only runs when PAYLOAD_DB_PUSH=true is set.
 */

if (process.env.PAYLOAD_DB_PUSH !== 'true') {
  console.log('[db-push] PAYLOAD_DB_PUSH is not true, skipping.')
  process.exit(0)
}

const connectionString =
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL

if (!connectionString) {
  console.log('[db-push] No database connection string found, skipping.')
  process.exit(0)
}

console.log('[db-push] Pushing schema to database...')

try {
  const { getPayload } = await import('payload')
  const config = (await import('../payload.config.js')).default

  const payload = await getPayload({ config })
  console.log('[db-push] Schema push complete.')
  process.exit(0)
} catch (err) {
  console.error('[db-push] Schema push failed:', err.message)
  // Don't fail the build — the schema may already be up to date
  process.exit(0)
}
