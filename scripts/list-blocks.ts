import { getPayload } from 'payload'
import config from '../payload.config'

async function main() {
  const payload = await getPayload({ config })
  const slug = process.argv[2] || 'web-development'
  const result = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1 })
  const page = result.docs[0]
  if (!page) { console.log('Page not found'); process.exit(1) }
  const blocks = (page as any).layout || []
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i]
    const summary = b.heading || b.title || b.text || b.quote || ''
    console.log(i + ' ' + b.blockType + ' ' + String(summary).substring(0, 100))
  }
  process.exit(0)
}
main()
