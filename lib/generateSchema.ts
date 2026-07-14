import type { Page } from '@/payload-types'

const SITE_URL = 'https://alexanderkropivnitski.com'
const SITE_NAME = 'Alexander Kropivnitski'

// Pages that describe an actual service offering, not a topic/tool explainer.
// pageType alone isn't precise enough here - most of these are 'general'.
const SERVICE_SLUGS = new Set([
  'seo',
  'web-development',
  'marketing-technology',
  'performance-marketing',
  'fractional-cmo',
])

type FaqBlock = Extract<NonNullable<Page['layout']>[number], { blockType: 'faq' }>

interface SchemaInput {
  title: string
  description?: string
  slug: string
  pageType?: string
  parentHubSlug?: string
  parentHubTitle?: string
  layout?: Page['layout']
  updatedAt?: string
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
    ...(input.updatedAt ? { dateModified: input.updatedAt } : {}),
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  })

  // ProfessionalService schema — only on pages that describe an actual service
  if (SERVICE_SLUGS.has(input.slug)) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: input.title,
      ...(input.description ? { description: input.description } : {}),
      url: pageUrl,
      provider: {
        '@type': 'Person',
        name: SITE_NAME,
        url: SITE_URL,
      },
    })
  }

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

const CREDENTIALS: { name: string; url?: string; recognizedBy?: string }[] = [
  { name: 'Claude Code', url: 'https://verify.skilljar.com/c/2pn5ts2adtn3', recognizedBy: 'Anthropic' },
  { name: 'Claude 101', url: 'https://verify.skilljar.com/c/doiwoovpvmfd', recognizedBy: 'Anthropic' },
  {
    name: 'AI Powered Performance Ads Certification',
    url: 'https://skillshop.credential.net/30f5c94a-4983-469c-94b4-f019352f8c22',
    recognizedBy: 'Google',
  },
  {
    name: 'Microsoft Advertising Search Certification',
    url: 'https://www.credly.com/badges/b4a6477b-834a-4051-8a25-3b0e88ae0fbe/public_url',
    recognizedBy: 'Microsoft',
  },
  {
    name: 'Google Analytics Certification',
    url: 'https://skillshop.credential.net/927cf410-eeea-4815-a2e0-de6a18aade31',
    recognizedBy: 'Google',
  },
  { name: 'SQL Certification', recognizedBy: 'Stanford University' },
  { name: 'Tableau Certification', recognizedBy: 'Tableau' },
  {
    name: 'Google Ads Search Certification',
    url: 'https://skillshop.credential.net/005153ea-ebbe-4476-8db3-688271e6a775',
    recognizedBy: 'Google',
  },
  { name: 'Certified Marketing Analyst (MCP)', recognizedBy: 'Google' },
]

export function generatePersonSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alexander Kropivnitski',
    jobTitle: 'Head of Marketing',
    url: SITE_URL,
    sameAs: [
      'https://www.linkedin.com/in/alexander-kropivnitski/',
      'https://www.crunchbase.com/person/alexander-kropivnitski',
    ],
    hasCredential: CREDENTIALS.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      ...(c.url ? { url: c.url } : {}),
      ...(c.recognizedBy ? { recognizedBy: { '@type': 'Organization', name: c.recognizedBy } } : {}),
    })),
  }
}
