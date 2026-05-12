import { getPayload } from 'payload'
import config from '../payload.config'

async function seed() {
  const payload = await getPayload({ config })

  // Check if home page already exists
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log('Home page already exists, skipping.')
    process.exit(0)
  }

  // Create the home page with a Hero block
  const page = await payload.create({
    collection: 'pages',
    draft: true,
    data: {
      title: 'Home',
      slug: 'home',
      layout: [
        {
          blockType: 'hero',
          mainText:
            'Creative developer crafting digital experiences with modern web technologies.',
          readMoreLabel: 'Read More',
          readMoreHref: '#about',
          image: {
            source: 'url',
            url: '',
          },
          overlayPart1: 'ALEX',
          overlayPart2: 'ANDER',
          circleColor: '#facc15',
          locationText: 'Based in Europe',
        },
      ],
      _status: 'published',
    },
  })

  // Publish it (versioned collection gotcha)
  await payload.update({
    collection: 'pages',
    id: page.id,
    data: { _status: 'published' },
  })

  console.log(`Home page created (id: ${page.id}) and published.`)
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
