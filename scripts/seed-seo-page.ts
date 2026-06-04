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

const heroImage = { source: 'url' as const, url: '/api/media/file/AlexK%20front%201.png' }

const seoLayout = [
  // 1. Banner — GEO announcement
  {
    blockType: 'banner',
    text: 'By 2027, 30% of all search traffic will go through AI-generated answers. Is your content optimized for GEO?',
    buttonLabel: 'Learn About GEO',
    buttonHref: '#geo',
    variant: 'accent',
  },

  // 2. Hero
  {
    blockType: 'heroV3',
    heading: 'SEO & GEO Expert',
    content: richText(
      'I help businesses dominate **both traditional search and AI-powered discovery**. From technical SEO foundations to cutting-edge Generative Engine Optimization, I build organic growth systems that compound.\nWith **10+ years of experience** across 25+ international markets, I deliver strategies that drive **real revenue** — not just rankings.'
    ),
    image: heroImage,
    circleColor: '#facc15',
  },

  // 3. Stats — combined client numbers
  {
    blockType: 'stats',
    heading: 'Results Across All Clients',
    description: 'Combined performance metrics from SEO and GEO programs managed over the past decade.',
    items: [
      { value: '12M+', label: 'Organic Sessions Generated' },
      { value: '340%', label: 'Average Traffic Growth' },
      { value: '€8.2M', label: 'Revenue Attributed to Organic' },
      { value: '15,000+', label: 'Keywords in Top 10' },
      { value: '2,800+', label: 'Backlinks Acquired' },
      { value: '45%', label: 'Average GEO Citation Rate' },
    ],
  },

  // 4. Feature List — 4 pillars
  {
    blockType: 'featureList',
    heading: 'The Four Pillars of Modern SEO',
    description: 'A complete organic growth framework covering every dimension of search visibility.',
    columns: '2',
    items: [
      {
        icon: 'Code',
        title: 'Technical SEO',
        description: 'Site architecture, crawl optimization, Core Web Vitals, structured data (JSON-LD), indexation management, and rendering strategies. The invisible foundation that determines how well search engines can discover and understand your content.',
      },
      {
        icon: 'FileText',
        title: 'On-Page SEO & Content',
        description: 'Keyword research, search intent mapping, topic clustering, title/meta optimization, internal linking architecture, and content quality frameworks. Every page engineered to match what users actually search for.',
      },
      {
        icon: 'Link',
        title: 'Backlinks & Authority',
        description: 'Strategic link acquisition through digital PR, content-led outreach, HARO/Connectively, guest contributions, and competitor backlink gap analysis. Building domain authority that compounds over years.',
      },
      {
        icon: 'Bot',
        title: 'GEO (Generative Engine Optimization)',
        description: 'Optimizing content to be cited by ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot. Structured data, entity optimization, authoritative sourcing, and citation-ready formatting for the AI search era.',
      },
    ],
  },

  // 5. Blockquote
  {
    blockType: 'blockquote',
    quote: 'SEO used to be about ranking on page one. Now it\'s about being the answer — whether a human reads the results or an AI synthesizes them. The brands that understand this shift will own the next decade of organic growth.',
    author: 'Alexander Kropivnitski',
    role: 'SEO & GEO Strategist',
  },

  // 6. Timeline — evolution from SEO to GEO
  {
    blockType: 'timeline',
    heading: 'The Evolution of Search',
    description: 'Search is transforming faster than ever. Here\'s why GEO matters now — and why it will matter even more tomorrow.',
    events: [
      {
        date: '2010 — 2015',
        title: 'Keywords & Links Era',
        description: 'SEO was dominated by keyword density, exact-match domains, and volume-based link building. Rankings were relatively predictable and manipulation was common.',
        icon: 'Search',
      },
      {
        date: '2015 — 2020',
        title: 'Intent & Quality Era',
        description: 'Google\'s RankBrain, BERT, and E-A-T guidelines shifted the focus to search intent, content quality, and topical authority. Technical SEO became table stakes.',
        icon: 'Brain',
      },
      {
        date: '2020 — 2024',
        title: 'Experience & Entities Era',
        description: 'Core Web Vitals, passage ranking, and the Knowledge Graph made user experience and entity-based SEO critical. Featured snippets began replacing traditional blue links.',
        icon: 'Gauge',
      },
      {
        date: '2024 — 2025',
        title: 'AI Overviews & GEO Emergence',
        description: 'Google launched AI Overviews, ChatGPT gained search capabilities, and Perplexity hit 100M users. For the first time, content could rank without a single click reaching your website.',
        icon: 'Bot',
      },
      {
        date: '2025 — Future',
        title: 'GEO Becomes Essential',
        description: 'AI-generated answers will mediate 30%+ of search queries. Brands that optimize for both traditional SERP rankings AND AI citation will capture organic growth. Those that don\'t will become invisible.',
        icon: 'Rocket',
      },
    ],
  },

  // 7. Content Columns — deep dive into SEO vs GEO
  {
    blockType: 'contentColumns',
    heading: 'Traditional SEO vs. GEO',
    columns: [
      {
        title: 'Traditional SEO',
        content: richText(
          '**Goal:** Rank web pages in search engine results pages (SERPs) to earn clicks.\n**How it works:** Optimize content around keywords, build backlinks, ensure technical health, and match search intent.\n**Metrics:** Rankings, organic traffic, click-through rate, conversions.\n**Still critical?** Absolutely. Traditional SEO drives the majority of organic traffic today and will continue to do so. Every GEO strategy is built on a strong SEO foundation.'
        ),
      },
      {
        title: 'Generative Engine Optimization',
        content: richText(
          '**Goal:** Get your brand and content cited in AI-generated answers across ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot.\n**How it works:** Structure content for entity recognition, provide authoritative data with clear sourcing, use schema markup extensively, and format information in ways LLMs can easily extract and attribute.\n**Metrics:** AI citation rate, brand mentions in AI answers, zero-click visibility, attributed traffic from AI referrals.\n**Why it\'s growing:** AI search usage doubled in 2024. By 2027, an estimated 30% of queries will be answered by AI without traditional link clicks.'
        ),
      },
    ],
  },

  // 8. Process Steps — methodology
  {
    blockType: 'processSteps',
    heading: 'How I Build SEO & GEO Programs',
    description: 'A battle-tested methodology refined across 150+ client engagements.',
    steps: [
      {
        title: 'Comprehensive Audit',
        description: 'Full technical crawl, on-page analysis, backlink profile review, competitor benchmarking, and AI search visibility assessment. I identify every gap and quick win before writing a single recommendation.',
        icon: 'Search',
      },
      {
        title: 'Strategy & Roadmap',
        description: 'Keyword universe mapping, content gap analysis, link building targets, and GEO optimization priorities. A phased roadmap with clear KPIs, timelines, and expected ROI for each initiative.',
        icon: 'Map',
      },
      {
        title: 'Technical Foundation',
        description: 'Fix crawlability issues, implement structured data, optimize Core Web Vitals, configure hreflang for international sites, and set up proper indexation controls. No content strategy works on a broken foundation.',
        icon: 'Wrench',
      },
      {
        title: 'Content & Link Execution',
        description: 'Publish optimized content following topic clusters, execute digital PR campaigns for backlinks, optimize existing pages for quick wins, and format key content for AI citation readiness.',
        icon: 'PenTool',
      },
      {
        title: 'GEO Optimization Layer',
        description: 'Enrich content with entity markup, add authoritative data sources, structure FAQs and definitions for AI extraction, monitor brand citations across ChatGPT, Perplexity, and AI Overviews.',
        icon: 'Bot',
      },
      {
        title: 'Measure, Report & Iterate',
        description: 'Custom dashboards tracking organic sessions, rankings, backlink growth, revenue attribution, and AI citation rates. Monthly strategy reviews to double down on what works and pivot what doesn\'t.',
        icon: 'BarChart3',
      },
    ],
  },

  // 9. Tools & Platforms
  {
    blockType: 'projectsV2',
    heading: 'Tools & Platforms I Use',
    description: 'Expert-level proficiency across the full SEO and GEO technology stack.',
    columns: '4',
    cards: [
      { icon: 'Search', title: 'Google Search Console', description: 'Performance monitoring, indexation, search analytics, Core Web Vitals' },
      { icon: 'Radar', title: 'Ahrefs', description: 'Keyword research, backlink analysis, content explorer, rank tracking' },
      { icon: 'Bug', title: 'Screaming Frog', description: 'Technical crawls, redirect chains, structured data validation' },
      { icon: 'TrendingUp', title: 'SEMrush', description: 'Competitive intelligence, content gap analysis, position tracking' },
      { icon: 'FileCode', title: 'Schema / JSON-LD', description: 'Structured data for rich results, knowledge panels, and AI extraction' },
      { icon: 'Gauge', title: 'PageSpeed Insights', description: 'Core Web Vitals optimization, Lighthouse audits, performance budgets' },
      { icon: 'Terminal', title: 'Python & Custom Scripts', description: 'Log file analysis, automated audits, data pipelines, NLP processing' },
      { icon: 'PieChart', title: 'Looker Studio', description: 'Custom SEO dashboards, automated reporting, cross-channel attribution' },
      { icon: 'Globe', title: 'Perplexity & ChatGPT', description: 'GEO monitoring — tracking brand citations and content attribution in AI answers' },
      { icon: 'Database', title: 'BigQuery', description: 'Large-scale SEO data analysis, GSC data warehousing, ML-powered forecasting' },
      { icon: 'Eye', title: 'ContentKing', description: 'Real-time SEO monitoring, change detection, alerting on indexation issues' },
      { icon: 'Mail', title: 'BuzzStream / Pitchbox', description: 'Link building outreach, relationship management, campaign tracking' },
    ],
  },

  // 10. Pricing
  {
    blockType: 'pricing',
    heading: 'SEO & GEO Engagement Models',
    description: 'Flexible options to match your growth stage and ambition.',
    tiers: [
      {
        name: 'SEO Audit',
        price: '$2,500',
        period: 'one-time',
        description: 'Comprehensive audit with an actionable roadmap to fix what\'s holding you back.',
        highlighted: false,
        buttonLabel: 'Book a Call',
        buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
        features: [
          { text: 'Full technical SEO crawl & audit' },
          { text: 'On-page optimization review' },
          { text: 'Backlink profile analysis' },
          { text: 'Competitor benchmarking' },
          { text: 'AI search visibility check' },
          { text: 'Prioritized action plan' },
        ],
      },
      {
        name: 'Growth Retainer',
        price: '$5,000',
        period: '/month',
        description: 'Full-service SEO & GEO execution — strategy, content, links, and AI optimization.',
        highlighted: true,
        buttonLabel: 'Get Started',
        buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
        features: [
          { text: 'Everything in SEO Audit' },
          { text: 'Monthly technical monitoring' },
          { text: 'Content strategy & optimization' },
          { text: 'Link building campaigns' },
          { text: 'GEO optimization & tracking' },
          { text: 'Custom reporting dashboards' },
          { text: 'Bi-weekly strategy calls' },
        ],
      },
      {
        name: 'GEO Add-On',
        price: '$1,500',
        period: '/month',
        description: 'For teams with existing SEO — add AI search optimization to your program.',
        highlighted: false,
        buttonLabel: 'Learn More',
        buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
        features: [
          { text: 'AI citation monitoring' },
          { text: 'Entity & schema optimization' },
          { text: 'Content reformatting for LLMs' },
          { text: 'Perplexity & ChatGPT tracking' },
          { text: 'Monthly GEO performance reports' },
        ],
      },
    ],
  },

  // 11. FAQ
  {
    blockType: 'faq',
    heading: 'SEO & GEO Questions',
    description: 'Common questions about search engine optimization and generative engine optimization.',
    items: [
      {
        question: 'What is GEO and how is it different from SEO?',
        answer: 'GEO (Generative Engine Optimization) focuses on getting your content cited in AI-generated answers — from ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot. While traditional SEO optimizes for ranking in search results, GEO optimizes for being referenced by AI systems when they synthesize answers. Both work together — strong SEO is the foundation that GEO builds on.',
      },
      {
        question: 'Is traditional SEO still worth investing in?',
        answer: 'Absolutely. Traditional organic search still drives 50-60% of all website traffic globally. SEO delivers the highest ROI of any digital channel over time because results compound. GEO is an additional layer — not a replacement. The strongest organic strategy combines both.',
      },
      {
        question: 'How long does it take to see SEO results?',
        answer: 'Technical fixes and quick wins often show impact within 4-8 weeks. Content and link building strategies typically take 3-6 months to show meaningful traffic growth. GEO citation improvements can appear faster since AI models update their knowledge more frequently than search indexes shift rankings. I always identify quick wins to deliver early results while building toward long-term growth.',
      },
      {
        question: 'How do you build backlinks?',
        answer: 'Through digital PR, data-driven content that earns natural links, strategic guest contributions on authoritative publications, HARO/Connectively expert sourcing, competitor backlink gap analysis, and relationship-based outreach. I never use link farms, PBNs, or paid link schemes — these create short-term gains but long-term penalties.',
      },
      {
        question: 'Can you help with international / multilingual SEO?',
        answer: 'Yes — I\'ve managed SEO programs across 25+ international markets. This includes hreflang implementation, market-specific keyword research, localized content strategies, international site architecture decisions (subdirectories vs subdomains vs ccTLDs), and local search optimization for each target market.',
      },
      {
        question: 'How do you measure GEO performance?',
        answer: 'I track brand citations across major AI platforms (ChatGPT, Perplexity, Google AI Overviews), monitor which queries trigger AI-generated answers that reference your content, measure referral traffic from AI sources, and assess your content\'s "citation readiness" through structured data coverage and entity recognition scores.',
      },
    ],
  },

  // 12. Banner — bottom CTA
  {
    blockType: 'banner',
    text: 'The shift from SEO to SEO + GEO is happening now. Early movers will capture the advantage.',
    buttonLabel: 'Start the Conversation',
    buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
    variant: 'subtle',
  },

  // 13. Contact Info
  {
    blockType: 'contactInfo',
    heading: 'Let\'s Grow Your Organic Presence',
    description: 'Whether you need an SEO audit, a full growth program, or GEO strategy — I\'m here to help.',
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
    where: { slug: { equals: 'seo' } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log('Updating SEO page...')
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data: {
        title: 'SEO & GEO',
        layout: seoLayout as any,
        _status: 'published',
      },
    })
  } else {
    console.log('Creating SEO page...')
    const doc = await payload.create({
      collection: 'pages',
      draft: true,
      data: {
        title: 'SEO & GEO',
        slug: 'seo',
        layout: seoLayout as any,
        _status: 'published',
      },
    })
    await payload.update({
      collection: 'pages',
      id: doc.id,
      data: { _status: 'published' },
    })
  }

  console.log('✓ SEO & GEO page ready at /seo')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
