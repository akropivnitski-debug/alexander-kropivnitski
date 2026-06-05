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

// ─── SEO Page ───
const seoLayout = [
  {
    blockType: 'heroV3',
    heading: 'SEO & GEO Expert',
    content: richText(
      'I help businesses achieve **sustainable organic growth** through technical SEO, content strategy, and generative engine optimization (GEO).\nWith experience across **25+ international markets**, I build SEO programs that drive **long-term traffic and revenue** — not just rankings.'
    ),
    image: heroImage,
    circleColor: '#facc15',
  },
  {
    blockType: 'projectsV2',
    heading: 'SEO Services',
    description: 'Full-spectrum SEO solutions from technical foundations to content-driven growth.',
    columns: '3',
    cards: [
      { icon: 'Code', title: 'Technical SEO', description: 'Site architecture, crawlability, Core Web Vitals, structured data, and indexation optimization for maximum search engine visibility.' },
      { icon: 'FileText', title: 'Content Strategy', description: 'Keyword research, topic clustering, content calendars, and editorial frameworks that align search intent with business goals.' },
      { icon: 'Link', title: 'Link Building', description: 'White-hat outreach, digital PR, and strategic partnerships to build domain authority and referral traffic.' },
      { icon: 'Globe', title: 'International SEO', description: 'Hreflang implementation, market-specific keyword strategies, and localized content for multi-language, multi-region websites.' },
      { icon: 'Bot', title: 'GEO (Generative Engine Optimization)', description: 'Optimizing content for AI-powered search experiences — ChatGPT, Perplexity, Google AI Overviews — to maintain visibility in the AI era.' },
      { icon: 'BarChart3', title: 'SEO Analytics & Reporting', description: 'Custom dashboards tracking organic traffic, keyword rankings, conversion attribution, and competitive intelligence.' },
    ],
  },
  {
    blockType: 'aboutSimple',
    heading: 'My SEO Philosophy',
    description: richText(
      '**SEO is not a checklist — it\'s a growth engine.** I focus on building systems that compound over time.\n**Technical Foundation First** — Before creating content, I ensure the technical infrastructure is solid: fast load times, clean architecture, proper indexation, and structured data.\n**Search Intent Mapping** — Every page targets a specific user intent. I map the entire customer journey from awareness to conversion and create content that serves each stage.\n**Data-Driven Iteration** — I use tools like Google Search Console, Screaming Frog, Ahrefs, and custom Python scripts to identify opportunities and measure impact with precision.\n**Future-Proofing for AI Search** — With the rise of AI-powered search, I optimize content to be cited by large language models, ensuring visibility across both traditional and generative search experiences.'
    ),
  },
  {
    blockType: 'projectsV2',
    heading: 'Tools & Platforms',
    description: 'Expert-level proficiency across the SEO technology stack.',
    columns: '4',
    cards: [
      { icon: 'Search', title: 'Google Search Console', description: 'Performance monitoring, indexation management, search analytics' },
      { icon: 'Radar', title: 'Ahrefs', description: 'Keyword research, backlink analysis, competitive intelligence' },
      { icon: 'Bug', title: 'Screaming Frog', description: 'Technical audits, crawl analysis, structured data validation' },
      { icon: 'TrendingUp', title: 'SEMrush', description: 'Rank tracking, content gap analysis, site audits' },
      { icon: 'FileCode', title: 'Schema Markup', description: 'JSON-LD structured data for rich results and knowledge panels' },
      { icon: 'Gauge', title: 'PageSpeed Insights', description: 'Core Web Vitals optimization and performance monitoring' },
      { icon: 'Terminal', title: 'Python / Scripts', description: 'Custom automation for log analysis, data processing, and reporting' },
      { icon: 'PieChart', title: 'Looker Studio', description: 'Custom SEO dashboards with automated data pipelines' },
    ],
  },
  {
    blockType: 'cta',
    heading: 'Ready to Grow Organically?',
    description: 'Let\'s build an SEO strategy that drives sustainable traffic and revenue for your business.',
    buttonLabel: 'Get in Touch',
    buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
    buttonColor: '#facc15',
    linkedinUrl: 'https://linkedin.com/in/akropivnitski',
    githubUrl: 'https://github.com/akropivnitski-debug',
  },
]

// ─── Web Development Page ───
const webDevLayout = [
  {
    blockType: 'heroV3',
    heading: 'Web Development',
    content: richText(
      'I build **fast, modern web applications** using cutting-edge technologies — from marketing websites to complex full-stack platforms.\nWith deep expertise in **React, Next.js, and TypeScript**, I create solutions that are performant, accessible, and built to scale.'
    ),
    image: heroImage,
    circleColor: '#facc15',
  },
  {
    blockType: 'projectsV2',
    heading: 'Development Services',
    description: 'End-to-end web development from architecture to deployment.',
    columns: '3',
    cards: [
      { icon: 'Layout', title: 'Marketing Websites', description: 'High-performance landing pages and corporate websites built with Next.js, optimized for SEO and conversion.' },
      { icon: 'Server', title: 'Full-Stack Applications', description: 'Custom web applications with robust backends — authentication, databases, APIs, and real-time features.' },
      { icon: 'Smartphone', title: 'Responsive Design', description: 'Pixel-perfect implementations that work flawlessly across all devices — mobile, tablet, and desktop.' },
      { icon: 'Blocks', title: 'CMS Integration', description: 'Headless CMS setup with Payload, Sanity, or Strapi — giving you full control over content without touching code.' },
      { icon: 'Rocket', title: 'Performance Optimization', description: 'Core Web Vitals, image optimization, code splitting, and caching strategies for sub-second load times.' },
      { icon: 'GitBranch', title: 'CI/CD & DevOps', description: 'Automated deployments, preview environments, monitoring, and infrastructure-as-code on Vercel and AWS.' },
    ],
  },
  {
    blockType: 'aboutSimple',
    heading: 'How I Build',
    description: richText(
      '**Every project starts with understanding the business problem**, not the technology. I choose the right tools for the job.\n**Modern Stack** — I work primarily with Next.js, React, TypeScript, and Tailwind CSS. For backends, I use Node.js with PostgreSQL, Payload CMS, and Vercel for deployment.\n**Performance by Default** — Every site I build targets 90+ Lighthouse scores. I optimize images, minimize JavaScript, implement lazy loading, and use edge caching to deliver fast experiences globally.\n**Developer Experience Matters** — Clean code, type safety, automated testing, and well-documented architectures ensure projects are maintainable long after launch.\n**Iterative Delivery** — I ship early and often. Staged deployments, preview URLs, and continuous integration mean you see progress daily, not monthly.'
    ),
  },
  {
    blockType: 'projectsV2',
    heading: 'Technology Stack',
    description: 'Modern, battle-tested technologies chosen for performance and developer experience.',
    columns: '4',
    cards: [
      { icon: 'Code', title: 'Next.js', description: 'React framework — SSR, SSG, App Router, API routes' },
      { icon: 'FileCode', title: 'TypeScript', description: 'Type-safe JavaScript for reliable, maintainable code' },
      { icon: 'Paintbrush', title: 'Tailwind CSS', description: 'Utility-first styling for rapid, consistent UI development' },
      { icon: 'Database', title: 'PostgreSQL', description: 'Relational database for structured data and complex queries' },
      { icon: 'Blocks', title: 'Payload CMS', description: 'Headless CMS with full TypeScript support and admin UI' },
      { icon: 'Cloud', title: 'Vercel', description: 'Edge deployment, preview URLs, serverless functions' },
      { icon: 'GitBranch', title: 'Git & GitHub', description: 'Version control, code review, CI/CD workflows' },
      { icon: 'Container', title: 'Docker', description: 'Containerized development and deployment environments' },
    ],
  },
  {
    blockType: 'cta',
    heading: 'Have a Project in Mind?',
    description: 'Let\'s discuss how I can help you build something great.',
    buttonLabel: 'Get in Touch',
    buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
    buttonColor: '#facc15',
    linkedinUrl: 'https://linkedin.com/in/akropivnitski',
    githubUrl: 'https://github.com/akropivnitski-debug',
  },
]

// ─── Marketing Technology Page ───
const marTechLayout = [
  {
    blockType: 'heroV3',
    heading: 'Marketing Technology',
    content: richText(
      'I design and implement **marketing technology ecosystems** that connect data, automate workflows, and enable smarter decision-making.\nFrom **tag management to data warehousing**, I build the infrastructure that powers modern marketing teams.'
    ),
    image: heroImage,
    circleColor: '#facc15',
  },
  {
    blockType: 'projectsV2',
    heading: 'MarTech Services',
    description: 'Building the technology foundation for data-driven marketing.',
    columns: '3',
    cards: [
      { icon: 'Tags', title: 'Tag Management & Tracking', description: 'GTM, server-side tagging, consent management, and event tracking architectures that capture the data you need while respecting privacy.' },
      { icon: 'Database', title: 'Data Architecture', description: 'Design and implementation of marketing data warehouses, ETL pipelines, and data models that unify cross-channel performance data.' },
      { icon: 'BarChart3', title: 'Dashboards & Reporting', description: 'Custom real-time dashboards in Tableau, Looker, and Power BI that give stakeholders the insights they need to act.' },
      { icon: 'Workflow', title: 'Marketing Automation', description: 'CRM integrations, email automation, lead scoring, and lifecycle marketing workflows using HubSpot, Salesforce, and custom solutions.' },
      { icon: 'Shield', title: 'Privacy & Compliance', description: 'GDPR, CCPA, and ePrivacy compliance — consent management platforms, data retention policies, and privacy-by-design implementation.' },
      { icon: 'Plug', title: 'API & Integration', description: 'Custom integrations between marketing platforms, CRMs, analytics tools, and business systems using REST APIs and webhooks.' },
    ],
  },
  {
    blockType: 'aboutSimple',
    heading: 'My MarTech Philosophy',
    description: richText(
      '**Technology should serve strategy, not the other way around.** I build MarTech stacks that are lean, reliable, and purpose-driven.\n**Audit Before You Buy** — Most organizations use only 30% of their MarTech capabilities. Before adding tools, I optimize what you already have.\n**Data Quality First** — Bad data leads to bad decisions. I establish data governance, validation rules, and monitoring to ensure your marketing data is trustworthy.\n**Privacy by Design** — With evolving regulations and the deprecation of third-party cookies, I build measurement solutions that are future-proof and compliant from day one.\n**Integration Over Isolation** — Siloed tools create siloed teams. I architect systems where data flows freely between platforms, enabling unified reporting and cross-channel optimization.'
    ),
  },
  {
    blockType: 'projectsV2',
    heading: 'Platforms & Expertise',
    description: 'Deep experience across the marketing technology landscape.',
    columns: '4',
    cards: [
      { icon: 'Tags', title: 'Google Tag Manager', description: 'Web & server-side containers, custom templates, data layer design' },
      { icon: 'TrendingUp', title: 'Google Analytics 4', description: 'Implementation, custom events, audiences, BigQuery export' },
      { icon: 'PieChart', title: 'Tableau', description: 'Enterprise dashboards, calculated fields, live database connectors' },
      { icon: 'Database', title: 'BigQuery', description: 'Marketing data warehouse, SQL analysis, ML models' },
      { icon: 'Users', title: 'HubSpot', description: 'CRM, marketing automation, lead scoring, workflows' },
      { icon: 'Mail', title: 'Salesforce', description: 'Marketing Cloud, Pardot, Journey Builder, integrations' },
      { icon: 'Shield', title: 'OneTrust / Cookiebot', description: 'Consent management, cookie scanning, compliance reporting' },
      { icon: 'Webhook', title: 'Segment / CDP', description: 'Customer data platforms, identity resolution, event routing' },
    ],
  },
  {
    blockType: 'cta',
    heading: 'Upgrade Your MarTech Stack?',
    description: 'Let\'s audit your current setup and build a technology ecosystem that drives results.',
    buttonLabel: 'Get in Touch',
    buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
    buttonColor: '#facc15',
    linkedinUrl: 'https://linkedin.com/in/akropivnitski',
    githubUrl: 'https://github.com/akropivnitski-debug',
  },
]

// ─── Page definitions ───
const pages = [
  { title: 'SEO', slug: 'seo', layout: seoLayout },
  { title: 'Web Development', slug: 'web-development', layout: webDevLayout },
  { title: 'Marketing Technology', slug: 'marketing-technology', layout: marTechLayout },
]

async function seed() {
  const payload = await getPayload({ config })

  for (const page of pages) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: page.slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`Updating existing page: ${page.slug}`)
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: {
          title: page.title,
          layout: page.layout as any,
          _status: 'published',
        },
      })
    } else {
      console.log(`Creating new page: ${page.slug}`)
      const doc = await payload.create({
        collection: 'pages',
        draft: true,
        data: {
          title: page.title,
          slug: page.slug,
          layout: page.layout as any,
          _status: 'published',
        },
      })
      // Publish it
      await payload.update({
        collection: 'pages',
        id: doc.id,
        data: { _status: 'published' },
      })
    }
    console.log(`✓ ${page.title} page ready`)
  }

  // Fix header nav link: "marketin-technology" → "marketing-technology"
  const header = await payload.findGlobal({ slug: 'header' })
  const navItems = (header.navItems ?? []) as any[]
  let headerUpdated = false
  for (const item of navItems) {
    if (item.href === 'marketin-technology') {
      item.href = 'marketing-technology'
      headerUpdated = true
    }
  }
  if (headerUpdated) {
    await payload.updateGlobal({
      slug: 'header',
      data: { navItems } as any,
    })
    console.log('✓ Fixed header nav link typo: marketin-technology → marketing-technology')
  }

  console.log('\nAll pages created and published.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
