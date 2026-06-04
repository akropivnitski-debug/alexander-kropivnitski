import { getPayload } from 'payload'
import config from '../payload.config'

function richText(html: string) {
  const paragraphs = html.split('\n').filter(Boolean)
  const children = paragraphs.map((p) => {
    const parts: any[] = []
    const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g
    let lastIndex = 0
    let match
    while ((match = regex.exec(p)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ detail: 0, format: 0, mode: 'normal', style: '', text: p.slice(lastIndex, match.index), type: 'text', version: 1 })
      }
      if (match[1]) {
        parts.push({ detail: 0, format: 1, mode: 'normal', style: '', text: match[1], type: 'text', version: 1 })
      } else if (match[2]) {
        parts.push({ detail: 0, format: 2, mode: 'normal', style: '', text: match[2], type: 'text', version: 1 })
      }
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < p.length) {
      parts.push({ detail: 0, format: 0, mode: 'normal', style: '', text: p.slice(lastIndex), type: 'text', version: 1 })
    }
    return {
      children: parts.length > 0 ? parts : [{ detail: 0, format: 0, mode: 'normal', style: '', text: p, type: 'text', version: 1 }],
      direction: 'ltr', format: '', indent: 0, type: 'paragraph', version: 1, textFormat: 0, textStyle: '',
    }
  })
  return { root: { children, direction: 'ltr', format: '', indent: 0, type: 'root', version: 1 } }
}

function bulletList(items: string[]) {
  return {
    root: {
      children: [
        {
          children: items.map((item) => ({
            children: [{ detail: 0, format: 0, mode: 'normal', style: '', text: item, type: 'text', version: 1 }],
            direction: 'ltr', format: '', indent: 0, type: 'listitem', version: 1, value: 1,
          })),
          direction: 'ltr', format: '', indent: 0, type: 'list', version: 1, listType: 'bullet', start: 1, tag: 'ul',
        },
      ],
      direction: 'ltr', format: '', indent: 0, type: 'root', version: 1,
    },
  }
}

const testLayout = [
  // 1. Banner (accent) — top announcement
  {
    blockType: 'banner',
    text: 'This is a test page showcasing all 10 new CMS blocks — each one is fully editable in the admin panel.',
    buttonLabel: 'Back to Home',
    buttonHref: '/',
    variant: 'accent',
  },

  // 2. Stats
  {
    blockType: 'stats',
    heading: 'By the Numbers',
    description: 'Key metrics from over a decade in digital marketing and web development.',
    items: [
      { value: '25+', label: 'International Markets' },
      { value: '150+', label: 'Projects Delivered' },
      { value: '10+', label: 'Years Experience' },
      { value: '98%', label: 'Client Retention' },
    ],
  },

  // 3. Feature List
  {
    blockType: 'featureList',
    heading: 'Core Capabilities',
    description: 'A comprehensive skill set spanning strategy, technology, and execution.',
    columns: '3',
    items: [
      { icon: 'Search', title: 'SEO & GEO', description: 'Technical SEO audits, content strategy, and generative engine optimization for AI-powered search.' },
      { icon: 'Code', title: 'Web Development', description: 'Full-stack applications with Next.js, React, TypeScript, and modern deployment pipelines.' },
      { icon: 'BarChart3', title: 'Analytics', description: 'Custom dashboards, attribution modeling, and data-driven decision frameworks.' },
      { icon: 'Tags', title: 'Tag Management', description: 'Server-side tagging, GTM, consent management, and privacy-first tracking architectures.' },
      { icon: 'Workflow', title: 'Marketing Automation', description: 'CRM integrations, email workflows, lead scoring, and lifecycle campaigns.' },
      { icon: 'Shield', title: 'Privacy & Compliance', description: 'GDPR, CCPA, ePrivacy implementation with consent management platforms.' },
    ],
  },

  // 4. Blockquote
  {
    blockType: 'blockquote',
    quote: 'The best marketing doesn\'t feel like marketing. It feels like someone finally understood your problem and built the exact solution you needed.',
    author: 'Alexander Kropivnitski',
    role: 'Digital Marketing Strategist & Web Developer',
  },

  // 5. Timeline
  {
    blockType: 'timeline',
    heading: 'Career Journey',
    description: 'Key milestones across digital marketing, technology, and leadership.',
    events: [
      { date: '2024 — Present', title: 'Digital Nexus Strategy', description: 'Founded a consultancy focused on SEO, web development, and marketing technology for growth-stage companies.', icon: 'Rocket' },
      { date: '2021 — 2024', title: 'Head of SEO & MarTech', description: 'Led a cross-functional team of 12, managing organic growth across 25 international markets.', icon: 'Users' },
      { date: '2018 — 2021', title: 'Senior SEO Strategist', description: 'Built and executed enterprise SEO programs for e-commerce brands, driving 3x organic traffic growth.', icon: 'TrendingUp' },
      { date: '2015 — 2018', title: 'Digital Marketing Analyst', description: 'Started in analytics, building dashboards and attribution models that informed multi-million dollar ad spend.', icon: 'PieChart' },
      { date: '2014', title: 'First Line of Code', description: 'Discovered web development through building marketing landing pages. Self-taught HTML, CSS, JavaScript.', icon: 'Code' },
    ],
  },

  // 6. Process Steps
  {
    blockType: 'processSteps',
    heading: 'How I Work',
    description: 'A proven methodology refined over 150+ projects.',
    steps: [
      { title: 'Discovery & Audit', description: 'Deep dive into your current setup — analytics, SEO, tech stack, competitors. I identify quick wins and long-term opportunities before writing a single line of code.', icon: 'Search' },
      { title: 'Strategy & Architecture', description: 'Define goals, KPIs, and technical approach. I create a detailed roadmap that aligns business objectives with implementation reality.', icon: 'Map' },
      { title: 'Build & Implement', description: 'Hands-on execution — whether it\'s building a website, setting up tracking, or creating content. I ship early and iterate based on real data.', icon: 'Hammer' },
      { title: 'Measure & Optimize', description: 'Track performance against KPIs, run experiments, and continuously improve. Data-driven iteration is what separates good results from great ones.', icon: 'BarChart3' },
    ],
  },

  // 7. Content Columns
  {
    blockType: 'contentColumns',
    heading: 'What Sets Me Apart',
    columns: [
      {
        title: 'Technical Depth',
        content: richText(
          '**I don\'t just strategize — I build.** While most marketing consultants hand off technical work, I write code, configure servers, and deploy infrastructure myself.\nThis means faster execution, fewer misunderstandings between teams, and solutions that actually work in production — not just in slide decks.'
        ),
      },
      {
        title: 'Cross-Disciplinary Thinking',
        content: richText(
          '**SEO, development, and analytics aren\'t separate disciplines — they\'re one system.** I bring all three together to create solutions that compound.\nA website built with SEO in mind from day one performs better than one that gets "SEO\'d" after launch. An analytics setup designed alongside the UX captures better data.'
        ),
      },
      {
        title: 'Results, Not Reports',
        content: richText(
          '**I focus on outcomes that move the business forward** — revenue, qualified leads, market share — not vanity metrics like impressions or follower counts.\nEvery recommendation is tied to a measurable business impact. If I can\'t connect it to your bottom line, I won\'t waste your time with it.'
        ),
      },
    ],
  },

  // 8. Pricing
  {
    blockType: 'pricing',
    heading: 'Engagement Models',
    description: 'Flexible options to match your needs, timeline, and budget.',
    tiers: [
      {
        name: 'Audit & Strategy',
        price: '$2,500',
        period: 'one-time',
        description: 'Comprehensive audit of your current digital presence with an actionable roadmap.',
        highlighted: false,
        buttonLabel: 'Book a Call',
        buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
        features: [
          { text: 'Full SEO & technical audit' },
          { text: 'Analytics & tracking review' },
          { text: 'Competitor analysis' },
          { text: 'Prioritized action plan' },
          { text: '60-min strategy presentation' },
        ],
      },
      {
        name: 'Monthly Retainer',
        price: '$5,000',
        period: '/month',
        description: 'Ongoing execution — SEO, development, and analytics in one package.',
        highlighted: true,
        buttonLabel: 'Get Started',
        buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
        features: [
          { text: 'Everything in Audit & Strategy' },
          { text: 'Monthly SEO execution' },
          { text: 'Web development hours' },
          { text: 'Analytics & reporting' },
          { text: 'Bi-weekly strategy calls' },
          { text: 'Slack access for async support' },
        ],
      },
      {
        name: 'Project-Based',
        price: 'Custom',
        period: 'per project',
        description: 'Fixed-scope engagements for website builds, migrations, or specific initiatives.',
        highlighted: false,
        buttonLabel: 'Discuss Your Project',
        buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
        features: [
          { text: 'Website builds (Next.js)' },
          { text: 'CMS setup & migration' },
          { text: 'Analytics implementation' },
          { text: 'MarTech stack setup' },
          { text: 'Dedicated project timeline' },
        ],
      },
    ],
  },

  // 9. FAQ
  {
    blockType: 'faq',
    heading: 'Frequently Asked Questions',
    description: 'Common questions about working together.',
    items: [
      { question: 'What industries do you work with?', answer: 'I\'ve worked across e-commerce, SaaS, B2B services, media, and fintech. My approach is adaptable — the fundamentals of SEO, web performance, and data-driven marketing apply everywhere.' },
      { question: 'Do you work with teams or just solo?', answer: 'Both. I can embed into your existing team as a specialist, or handle the entire project independently. For larger engagements, I bring in trusted specialists from my network.' },
      { question: 'How quickly can you start?', answer: 'Typically within 1–2 weeks. I keep my client roster intentionally small to ensure quality and availability. Audit & Strategy engagements can usually start within a few days.' },
      { question: 'What\'s your tech stack?', answer: 'Next.js, React, TypeScript, Tailwind CSS for frontend. Node.js, PostgreSQL, Payload CMS for backend. Vercel for deployment. Google Tag Manager, GA4, BigQuery for analytics. But I\'m tool-agnostic — I use what works best for your specific needs.' },
      { question: 'Do you offer ongoing support after project delivery?', answer: 'Yes. Every project includes 30 days of post-launch support. For ongoing work, the Monthly Retainer model provides continuous optimization, development, and strategic guidance.' },
      { question: 'How do you measure success?', answer: 'We define KPIs together at the start — organic traffic, conversion rates, revenue from organic, page speed scores, lead volume. I set up dashboards so you can see progress in real-time, and we review metrics together on every call.' },
    ],
  },

  // 10. Banner (subtle) — bottom CTA
  {
    blockType: 'banner',
    text: 'Like what you see? These blocks are available for any page on the site.',
    buttonLabel: 'Contact Me',
    buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
    variant: 'subtle',
  },

  // 11. Contact Info
  {
    blockType: 'contactInfo',
    heading: 'Let\'s Connect',
    description: 'Available for consulting, projects, and strategic partnerships.',
    email: 'a.kropivnitski@digitalnexusstrategy.com',
    location: 'Europe (Remote-first)',
    linkedinUrl: 'https://linkedin.com/in/akropivnitski',
    githubUrl: 'https://github.com/akropivnitski-debug',
  },
]

async function seed() {
  const payload = await getPayload({ config })

  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'test-blocks' } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log('Updating existing test-blocks page...')
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data: {
        title: 'Block Showcase',
        layout: testLayout as any,
        _status: 'published',
      },
    })
  } else {
    console.log('Creating test-blocks page...')
    const doc = await payload.create({
      collection: 'pages',
      draft: true,
      data: {
        title: 'Block Showcase',
        slug: 'test-blocks',
        layout: testLayout as any,
        _status: 'published',
      },
    })
    await payload.update({
      collection: 'pages',
      id: doc.id,
      data: { _status: 'published' },
    })
  }

  console.log('✓ Block Showcase page ready at /test-blocks')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
