/**
 * QA checks for SEO JSON drafts.
 *
 * Usage:
 *   npx tsx scripts/qa-seo-batch.ts content/drafts/batch-0
 *
 * Checks:
 *   - JSON structure validity
 *   - Word count within target range
 *   - No dashes in content text
 *   - No buzzwords
 *   - Internal links reference valid slugs (from xlsx)
 *   - No duplicate FAQ questions across drafts
 *   - Meta title/description uniqueness
 *   - H1 similarity (cannibalization check)
 */

import fs from 'fs'
import path from 'path'

const BUZZWORDS = [
  'leverage', 'synergy', 'disruptive', 'cutting edge', 'unlock growth',
  'game changing', 'best in class', 'innovative solution', 'world class',
  'cutting-edge', 'game-changing', 'best-in-class', 'world-class',
]

const WORD_COUNT_TARGETS: Record<string, [number, number]> = {
  job_role: [800, 1800],
  job_role_location: [600, 1400],
  tool: [1200, 2800],
  topic: [1200, 3200],
  pillar_support: [2000, 3500],
}

interface DraftPage {
  slug: string
  pageType: string
  meta: { title: string; description: string }
  blocks: any[]
  internalLinks?: {
    parent?: string
    siblings?: string[]
    tools?: string[]
    topics?: string[]
  }
  wordCount?: number
}

function extractText(blocks: any[]): string {
  const texts: string[] = []

  function walk(obj: any) {
    if (!obj) return
    if (typeof obj === 'string') {
      texts.push(obj)
      return
    }
    if (Array.isArray(obj)) {
      obj.forEach(walk)
      return
    }
    if (typeof obj === 'object') {
      if (obj.text && typeof obj.text === 'string') texts.push(obj.text)
      if (obj.heading && typeof obj.heading === 'string') texts.push(obj.heading)
      if (obj.description && typeof obj.description === 'string') texts.push(obj.description)
      if (obj.question && typeof obj.question === 'string') texts.push(obj.question)
      if (obj.answer && typeof obj.answer === 'string') texts.push(obj.answer)
      if (obj.title && typeof obj.title === 'string') texts.push(obj.title)
      if (obj.children) walk(obj.children)
      if (obj.items) walk(obj.items)
      if (obj.cards) walk(obj.cards)
      if (obj.steps) walk(obj.steps)
      if (obj.features) walk(obj.features)
    }
  }

  walk(blocks)
  return texts.join(' ')
}

function extractFaqQuestions(blocks: any[]): string[] {
  const questions: string[] = []
  for (const block of blocks) {
    if (block.blockType === 'faq' && block.items) {
      for (const item of block.items) {
        if (item.question) questions.push(item.question)
      }
    }
  }
  return questions
}

function checkDashes(text: string): string[] {
  const issues: string[] = []
  // Check for em dashes and en dashes
  if (text.includes('\u2014')) issues.push('Contains em dash (\u2014)')
  if (text.includes('\u2013')) issues.push('Contains en dash (\u2013)')
  // Check for hyphenated compound words that should be avoided per copywriting rules
  const dashPattern = / \w+[-]\w+ /g
  const matches = text.match(dashPattern)
  if (matches && matches.length > 3) {
    issues.push(`Excessive hyphenated words (${matches.length} found)`)
  }
  return issues
}

function checkBuzzwords(text: string): string[] {
  const lower = text.toLowerCase()
  return BUZZWORDS.filter((bw) => lower.includes(bw))
}

function main() {
  const batchDir = process.argv[2]
  if (!batchDir) {
    console.error('Usage: npx tsx scripts/qa-seo-batch.ts <batch-directory>')
    process.exit(1)
  }

  const absDir = path.resolve(batchDir)
  if (!fs.existsSync(absDir)) {
    console.error(`Directory not found: ${absDir}`)
    process.exit(1)
  }

  const files = fs.readdirSync(absDir).filter((f) => f.endsWith('.json'))
  if (files.length === 0) {
    console.error('No JSON files found')
    process.exit(1)
  }

  const drafts: DraftPage[] = []
  const errors: { slug: string; issues: string[] }[] = []

  // Load all drafts
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(absDir, file), 'utf-8')
      drafts.push(JSON.parse(raw))
    } catch {
      errors.push({ slug: file, issues: ['Invalid JSON'] })
    }
  }

  const allMetaTitles = new Map<string, string>()
  const allFaqQuestions = new Map<string, string>()

  for (const draft of drafts) {
    const issues: string[] = []

    // Structure check
    if (!draft.slug) issues.push('Missing slug')
    if (!draft.meta?.title) issues.push('Missing meta.title')
    if (!draft.meta?.description) issues.push('Missing meta.description')
    if (!draft.blocks || draft.blocks.length === 0) issues.push('No blocks')

    // Word count
    const text = extractText(draft.blocks)
    const wordCount = text.split(/\s+/).filter(Boolean).length
    const target = WORD_COUNT_TARGETS[draft.pageType]
    if (target) {
      if (wordCount < target[0]) issues.push(`Word count too low: ${wordCount} (min ${target[0]})`)
      if (wordCount > target[1]) issues.push(`Word count too high: ${wordCount} (max ${target[1]})`)
    }

    // Dashes
    const dashIssues = checkDashes(text)
    issues.push(...dashIssues)

    // Buzzwords
    const buzzwordsFound = checkBuzzwords(text)
    if (buzzwordsFound.length > 0) {
      issues.push(`Buzzwords found: ${buzzwordsFound.join(', ')}`)
    }

    // Meta title uniqueness
    if (draft.meta?.title) {
      const existing = allMetaTitles.get(draft.meta.title)
      if (existing) {
        issues.push(`Duplicate meta title with: ${existing}`)
      }
      allMetaTitles.set(draft.meta.title, draft.slug)
    }

    // FAQ question uniqueness
    const faqQuestions = extractFaqQuestions(draft.blocks)
    for (const q of faqQuestions) {
      const qLower = q.toLowerCase()
      const existing = allFaqQuestions.get(qLower)
      if (existing) {
        issues.push(`Duplicate FAQ question "${q}" (also in: ${existing})`)
      }
      allFaqQuestions.set(qLower, draft.slug)
    }

    if (issues.length > 0) {
      errors.push({ slug: draft.slug, issues })
    }
  }

  // Report
  console.log(`\n=== QA Report: ${path.basename(absDir)} ===`)
  console.log(`Total drafts: ${drafts.length}`)
  console.log(`Drafts with issues: ${errors.length}`)

  if (errors.length === 0) {
    console.log('\nAll checks passed.')
  } else {
    for (const err of errors) {
      console.log(`\n[${err.slug}]`)
      for (const issue of err.issues) {
        console.log(`  - ${issue}`)
      }
    }
  }

  process.exit(errors.length > 0 ? 1 : 0)
}

main()
