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
  createdAt?: string
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

  // BlogPosting schema — pageType 'topic' covers the site's long-form guide/blog
  // content (both the tool explainers and the newer authority-building posts).
  // Alongside WebPage, not replacing it, per the GEO audit's Finding 4: dateModified
  // and author were already present via WebPage, but datePublished was missing
  // everywhere and the generic WebPage type is parsed less reliably by AI/search
  // systems for article freshness than BlogPosting.
  if (input.pageType === 'topic') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: input.title,
      ...(input.description ? { description: input.description } : {}),
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      ...(input.createdAt ? { datePublished: input.createdAt } : {}),
      ...(input.updatedAt ? { dateModified: input.updatedAt } : {}),
      author: {
        '@type': 'Person',
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Person',
        name: SITE_NAME,
        url: SITE_URL,
      },
    })
  }

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

// Professional marketing credentials only — every entry here must carry a
// live, third-party-verifiable url. Three previously-listed entries (SQL
// Certification/Stanford, Tableau Certification/Tableau, "Certified
// Marketing Analyst (MCP)"/Google) had no verification url and Google has no
// certification actually named "MCP" — removed rather than left unverifiable
// alongside the ones that are real. Claude Code / Claude 101 (AI-tool
// onboarding certificates) moved out entirely: they're not marketing
// credentials and listing them here read as a category error.
const CREDENTIALS: { name: string; url?: string; recognizedBy?: string }[] = [
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
  {
    name: 'Google Ads Search Certification',
    url: 'https://skillshop.credential.net/005153ea-ebbe-4476-8db3-688271e6a775',
    recognizedBy: 'Google',
  },
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
      'https://wellfound.com/u/alexander-kropivnitski',
      'https://contra.com/alexander_kropivnitski_ijp2mgw9',
    ],
    hasCredential: CREDENTIALS.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      ...(c.url ? { url: c.url } : {}),
      ...(c.recognizedBy ? { recognizedBy: { '@type': 'Organization', name: c.recognizedBy } } : {}),
    })),
  }
}
