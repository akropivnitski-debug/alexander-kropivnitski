export const LOCATION_MERGE_REDIRECTS: Record<string, string> = {
  'seo-manager-ile-de-france': 'seo-manager-paris',
  'head-of-growth-ile-de-france': 'head-of-growth-paris',
  'growth-marketing-manager-ile-de-france': 'growth-marketing-manager-paris',
  'performance-marketing-manager-ile-de-france': 'performance-marketing-manager-paris',
  'marketing-technology-manager-ile-de-france': 'marketing-technology-manager-paris',
}

export const ROLE_FOLD_REDIRECTS: Record<string, string> = {
  'technical-seo': 'seo',
  'technical-seo-specialist': 'seo',
  'seo-specialist': 'seo',
  'senior-seo-manager': 'seo',
  'organic-growth-manager': 'seo',
  'seo-manager': 'seo',

  'head-of-performance-marketing': 'performance-marketing',
  'senior-performance-marketing-manager': 'performance-marketing',
  'sem-manager': 'performance-marketing',
  'paid-search-manager': 'performance-marketing',
  'paid-media-manager': 'performance-marketing',
  'performance-marketing-manager': 'performance-marketing',
  'user-acquisition-manager': 'performance-marketing',
  'ecommerce-marketing-manager': 'performance-marketing',

  'marketing-technology-manager': 'marketing-technology',
  'marketing-automation-manager': 'marketing-technology',
  'marketing-analytics-manager': 'marketing-technology',
  'crm-marketing-manager': 'marketing-technology',
  'lifecycle-marketing-manager': 'marketing-technology',

  'head-of-marketing': 'fractional-cmo',
  'director-of-growth': 'fractional-cmo',
  'director-of-digital-marketing': 'fractional-cmo',
  'head-of-growth': 'fractional-cmo',
  'growth-strategy-consultant': 'fractional-cmo',
  'digital-strategy-consultant': 'fractional-cmo',
  'revenue-growth-manager': 'fractional-cmo',
  'growth-marketing-manager': 'fractional-cmo',
  'marketing-operations-manager': 'fractional-cmo',
  'digital-marketing-manager': 'fractional-cmo',
}

export const ALL_MERGED_SLUGS = {
  ...LOCATION_MERGE_REDIRECTS,
  ...ROLE_FOLD_REDIRECTS,
}

const LABELS: Record<string, string> = {
  'technical-seo': 'Technical SEO',
  'technical-seo-specialist': 'Technical SEO Specialist',
  'seo-specialist': 'SEO Specialist',
  'senior-seo-manager': 'Senior SEO Manager',
  'organic-growth-manager': 'Organic Growth Manager',
  'seo-manager': 'SEO Manager',
  'head-of-performance-marketing': 'Head of Performance Marketing',
  'senior-performance-marketing-manager': 'Senior Performance Marketing Manager',
  'sem-manager': 'SEM Manager',
  'paid-search-manager': 'Paid Search Manager',
  'paid-media-manager': 'Paid Media Manager',
  'performance-marketing-manager': 'Performance Marketing Manager',
  'user-acquisition-manager': 'User Acquisition Manager',
  'ecommerce-marketing-manager': 'Ecommerce Marketing Manager',
  'marketing-technology-manager': 'Marketing Technology Manager',
  'marketing-automation-manager': 'Marketing Automation Manager',
  'marketing-analytics-manager': 'Marketing Analytics Manager',
  'crm-marketing-manager': 'CRM Marketing Manager',
  'lifecycle-marketing-manager': 'Lifecycle Marketing Manager',
  'head-of-marketing': 'Head of Marketing',
  'director-of-growth': 'Director of Growth',
  'director-of-digital-marketing': 'Director of Digital Marketing',
  'head-of-growth': 'Head of Growth',
  'growth-strategy-consultant': 'Growth Strategy Consultant',
  'digital-strategy-consultant': 'Digital Strategy Consultant',
  'revenue-growth-manager': 'Revenue Growth Manager',
  'growth-marketing-manager': 'Growth Marketing Manager',
  'marketing-operations-manager': 'Marketing Operations Manager',
  'digital-marketing-manager': 'Digital Marketing Manager',
}

export function rolesFoldedInto(targetSlug: string): string[] {
  return Object.entries(ROLE_FOLD_REDIRECTS)
    .filter(([, target]) => target === targetSlug)
    .map(([slug]) => LABELS[slug] || slug)
    .sort()
}
