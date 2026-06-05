import { getPayload } from 'payload'
import config from '../payload.config'

async function main() {
  const payload = await getPayload({ config })
  const slug = process.argv[2] || 'marketing-technology'
  const result = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1, draft: true })
  const page = result.docs[0]
  if (!page) { console.log('Page not found'); process.exit(1) }
  const blocks = (page as any).layout || []
  for (let i = 0; i < blocks.length; i++) {
    console.log('--- BLOCK ' + i + ' ---')
    console.log(JSON.stringify(blocks[i], null, 2).substring(0, 1500))
  }
  process.exit(0)
}
main()
