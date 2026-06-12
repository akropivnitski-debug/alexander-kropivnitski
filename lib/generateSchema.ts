import type { Page } from '@/payload-types'

const SITE_URL = 'https://alexanderkropivnitski.com'
const SITE_NAME = 'Alexander Kropivnitski'

type FaqBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'faq' }>

interface SchemaInput {
  title: string
  description?: string
  slug: string
  pageType?: string
  parentHubSlug?: string
  parentHubTitle?: string
  layout?: Page['layout']
}

export function generatePageSchema(input: SchemaInput): object[] {
  const schemas: object[] = []
  const pageUrl = `${SITE_URL}/${input.slug === 'home' ? '' : input.slug}`

  // WebPage schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.title,
    ...(input.description ? { description: input.description } : {}),
    url: pageUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  })

  // BreadcrumbList schema
  const breadcrumbItems: object[] = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
  ]

  if (input.parentHubSlug && input.parentHubTitle && input.slug !== 'home') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: input.parentHubTitle,
      item: `${SITE_URL}/${input.parentHubSlug}`,
    })
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: input.title,
      item: pageUrl,
    })
  } else if (input.slug !== 'home') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: input.title,
      item: pageUrl,
    })
  }

  if (breadcrumbItems.length > 1) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    })
  }

  // FAQPage schema — extract from FAQ blocks in layout
  const faqItems: { question: string; answer: string }[] = []
  if (input.layout) {
    for (const block of input.layout) {
      if (block.blockType === 'faq') {
        const faqBlock = block as FaqBlock
        for (const item of faqBlock.items ?? []) {
          if (item.question && item.answer) {
            faqItems.push({ question: item.question, answer: item.answer })
          }
        }
      }
    }
  }

  if (faqItems.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    })
  }

  return schemas
}

export function generatePersonSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alexander Kropivnitski',
    jobTitle: 'Head of Marketing',
    url: SITE_URL,
    sameAs: ['https://www.linkedin.com/in/alexander-kropivnitski/'],
  }
}
