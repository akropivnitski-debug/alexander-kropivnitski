/**
 * Helpers for building Lexical rich text JSON and Payload block arrays
 * from simple content definitions.
 */

// --- Lexical node builders ---

export function textNode(text: string, format: number = 0) {
  return { detail: 0, format, mode: 'normal', style: '', text, type: 'text', version: 1 }
}

export function boldText(text: string) {
  return textNode(text, 1)
}

export function linkNode(text: string, url: string) {
  return {
    type: 'link',
    version: 3,
    fields: { linkType: 'custom' as const, url, newTab: false },
    children: [textNode(text)],
    direction: 'ltr',
    format: '',
    indent: 0,
  }
}

export function paragraph(children: any[]) {
  return {
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'paragraph',
    version: 1,
    textFormat: 0,
    textStyle: '',
  }
}

export function richText(paragraphs: any[]) {
  return {
    root: {
      children: paragraphs,
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

/**
 * Parse a simple markup format into Lexical paragraphs.
 *
 * Syntax:
 *   - Plain text is a text node
 *   - [text](/url) creates a link node
 *   - **text** creates bold text
 *   - Paragraphs are separated by \n\n
 */
export function parseContent(content: string): any {
  const rawParagraphs = content.split('\n\n').filter(Boolean)
  const paragraphs = rawParagraphs.map((p) => {
    const children: any[] = []
    // Match links [text](/url), bold **text**, or plain text
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
    let lastIndex = 0
    let match

    while ((match = regex.exec(p)) !== null) {
      // Add plain text before this match
      if (match.index > lastIndex) {
        children.push(textNode(p.slice(lastIndex, match.index)))
      }
      if (match[1] && match[2]) {
        // Link
        children.push(linkNode(match[1], match[2]))
      } else if (match[3]) {
        // Bold
        children.push(boldText(match[3]))
      }
      lastIndex = match.index + match[0].length
    }

    // Add remaining text
    if (lastIndex < p.length) {
      children.push(textNode(p.slice(lastIndex)))
    }

    if (children.length === 0) {
      children.push(textNode(p))
    }

    return paragraph(children)
  })

  return richText(paragraphs)
}

// --- Block builders ---

// Media ID for Alexander's hero image (AlexK front 1-1.png)
export const ALEX_IMAGE_ID = 68

export function heroV3Block(heading: string, content: string, circleColor = '#facc15') {
  return {
    blockType: 'heroV3',
    heading,
    content: parseContent(content),
    image: {
      source: 'upload',
      upload: ALEX_IMAGE_ID,
    },
    circleColor,
  }
}

export function featureListBlock(
  heading: string,
  description: string,
  items: { icon: string; title: string; description: string }[],
  columns = '2'
) {
  return {
    blockType: 'featureList',
    heading,
    description,
    columns,
    items,
  }
}

export function aboutSimpleBlock(heading: string, content: string) {
  return {
    blockType: 'aboutSimple',
    heading,
    description: parseContent(content),
  }
}

export function processStepsBlock(
  heading: string,
  description: string,
  steps: { icon: string; title: string; description: string }[]
) {
  return {
    blockType: 'processSteps',
    heading,
    description,
    steps,
  }
}

export function faqBlock(items: { question: string; answer: string }[]) {
  return {
    blockType: 'faq',
    heading: 'Frequently Asked Questions',
    items,
  }
}

export function relatedTopicsBlock(cards: { title: string; description: string; href: string }[]) {
  return {
    blockType: 'cardGrid',
    heading: 'Related Topics',
    columns: '4',
    cards,
  }
}

export function ctaBlock(heading: string, description: string, buttonLabel = 'Contact Me', buttonColor = '#facc15') {
  return {
    blockType: 'cta',
    heading,
    description,
    buttonLabel,
    buttonHref: '#form:email_to_alexander',
    buttonColor,
  }
}

// --- Full page builder ---

export interface PageDraft {
  slug: string
  pageType: string
  meta: { title: string; description: string }
  blocks: any[]
  internalLinks: {
    parent: string
    siblings: string[]
    tools: string[]
    topics: string[]
    relatedTopics: string[]
    [key: string]: any
  }
  wordCount: number
  generatedAt: string
}

export function buildJobRolePage(config: {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  parentHub: string
  circleColor?: string
  heroContent: string
  features: { icon: string; title: string; description: string }[]
  featuresHeading?: string
  featuresDescription?: string
  approachContent: string
  processSteps: { icon: string; title: string; description: string }[]
  processHeading?: string
  processDescription?: string
  faqItems: { question: string; answer: string }[]
  relatedCards: { title: string; description: string; href: string }[]
  ctaHeading: string
  ctaDescription: string
  ctaColor?: string
  links: {
    siblings: string[]
    tools: string[]
    topics: string[]
    relatedTopics: string[]
  }
}): PageDraft {
  return {
    slug: config.slug,
    pageType: 'job_role',
    meta: {
      title: config.seoTitle,
      description: config.seoDescription,
    },
    blocks: [
      heroV3Block(config.title, config.heroContent, config.circleColor || '#facc15'),
      featureListBlock(
        config.featuresHeading || 'What This Role Involves',
        config.featuresDescription || '',
        config.features
      ),
      aboutSimpleBlock('My Approach', config.approachContent),
      processStepsBlock(
        config.processHeading || 'How I Work in This Role',
        config.processDescription || '',
        config.processSteps
      ),
      faqBlock(config.faqItems),
      relatedTopicsBlock(config.relatedCards),
      ctaBlock(config.ctaHeading, config.ctaDescription, 'Contact Me', config.ctaColor || '#facc15'),
    ],
    internalLinks: {
      parent: config.parentHub,
      ...config.links,
    },
    wordCount: 0, // will be calculated
    generatedAt: new Date().toISOString(),
  }
}

export function buildToolPage(config: {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  parentHub: string
  circleColor?: string
  heroContent: string
  whatItIsContent: string
  useCases: { icon: string; title: string; description: string }[]
  useCasesHeading?: string
  useCasesDescription?: string
  practicalExperienceContent: string
  commonMistakes: { icon: string; title: string; description: string }[]
  mistakesHeading?: string
  mistakesDescription?: string
  faqItems: { question: string; answer: string }[]
  relatedCards: { title: string; description: string; href: string }[]
  ctaHeading: string
  ctaDescription: string
  ctaColor?: string
  links: {
    siblings: string[]
    tools: string[]
    topics: string[]
    relatedTopics: string[]
  }
}): PageDraft {
  return {
    slug: config.slug,
    pageType: 'tool',
    meta: {
      title: config.seoTitle,
      description: config.seoDescription,
    },
    blocks: [
      heroV3Block(config.title, config.heroContent, config.circleColor || '#facc15'),
      aboutSimpleBlock(config.useCasesHeading || 'What It Is and Why It Matters', config.whatItIsContent),
      featureListBlock(
        'Common Use Cases',
        config.useCasesDescription || '',
        config.useCases
      ),
      aboutSimpleBlock('Practical Experience', config.practicalExperienceContent),
      processStepsBlock(
        config.mistakesHeading || 'Common Mistakes to Avoid',
        config.mistakesDescription || '',
        config.commonMistakes
      ),
      faqBlock(config.faqItems),
      relatedTopicsBlock(config.relatedCards),
      ctaBlock(config.ctaHeading, config.ctaDescription, 'Contact Me', config.ctaColor || '#facc15'),
    ],
    internalLinks: {
      parent: config.parentHub,
      ...config.links,
    },
    wordCount: 0,
    generatedAt: new Date().toISOString(),
  }
}
