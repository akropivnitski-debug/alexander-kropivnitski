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

async function seed() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'web-development' } },
    limit: 1,
    draft: true,
  })

  const page = result.docs[0]
  if (!page) {
    console.error('web-development page not found')
    process.exit(1)
  }

  const existingBlocks = (page as any).layout || []
  // Keep hero (index 0) and gallery (index 1)
  const heroBlock = existingBlocks[0]
  const galleryBlock = existingBlocks[1]

  const newLayout: any[] = [
    heroBlock,
    galleryBlock,

    // 1. Bento Grid — Development Services
    {
      blockType: 'bentoGrid',
      heading: 'Development Services',
      description: 'End-to-end web development — from architecture to deployment, built for performance and scale.',
      cards: [
        {
          icon: 'Layout',
          title: 'Marketing Websites',
          description: 'High-performance landing pages and corporate sites built with Next.js. SEO-optimized, conversion-focused, and scoring 95+ on PageSpeed.',
          size: 'wide',
          accentColor: '#3b82f6',
        },
        {
          icon: 'Server',
          title: 'Full-Stack Applications',
          description: 'Custom web apps with authentication, real-time features, database design, and robust API layers.',
          size: 'normal',
          accentColor: '#8b5cf6',
        },
        {
          icon: 'Blocks',
          title: 'CMS Integration',
          description: 'Headless CMS setup with Payload, Sanity, or Strapi — full content control without touching code.',
          size: 'normal',
          accentColor: '#10b981',
        },
        {
          icon: 'Rocket',
          title: 'Performance Optimization',
          description: 'Core Web Vitals tuning, image optimization, code splitting, and caching strategies for sub-second load times.',
          size: 'normal',
          accentColor: '#f97316',
        },
        {
          icon: 'Smartphone',
          title: 'Responsive & Accessible',
          description: 'Pixel-perfect across all devices with WCAG 2.1 AA compliance baked in from the start.',
          size: 'normal',
          accentColor: '#ec4899',
        },
        {
          icon: 'GitBranch',
          title: 'CI/CD & DevOps',
          description: 'Automated deployments, preview environments, monitoring, and infrastructure-as-code. Ship every day with confidence.',
          size: 'wide',
          accentColor: '#facc15',
        },
      ],
    },

    // 2. Process Steps — How I Build
    {
      blockType: 'processSteps',
      heading: 'How I Build',
      description: 'A structured, transparent process designed to minimize risk and maximize value at every stage.',
      steps: [
        {
          icon: 'Search',
          title: 'Discovery & Requirements',
          description: 'Understand the business problem, target audience, and success metrics before writing a single line of code.',
        },
        {
          icon: 'PenTool',
          title: 'Architecture & Design',
          description: 'Define the tech stack, database schema, API contracts, and UI wireframes. Make the big decisions early when they\'re cheapest to change.',
        },
        {
          icon: 'Code',
          title: 'Development Sprints',
          description: 'Build in focused 1–2 week sprints with preview deployments after each. You see real progress, not status reports.',
        },
        {
          icon: 'Eye',
          title: 'Review & QA',
          description: 'Cross-browser testing, accessibility audit, performance profiling, and security review before every release.',
        },
        {
          icon: 'Rocket',
          title: 'Launch & Handoff',
          description: 'Zero-downtime deployment, documentation, CMS training, and knowledge transfer. You own everything.',
        },
        {
          icon: 'Repeat',
          title: 'Iterate & Support',
          description: 'Post-launch monitoring, analytics review, and continuous improvements based on real user data.',
        },
      ],
    },

    // 3. Icon Grid — Technology Stack
    {
      blockType: 'iconGrid',
      heading: 'Technology Stack',
      description: 'Modern, battle-tested technologies chosen for performance, developer experience, and long-term maintainability.',
      columns: '4',
      items: [
        { icon: 'Globe', label: 'Next.js', sublabel: 'React Framework' },
        { icon: 'Code', label: 'TypeScript', sublabel: 'Type-Safe JS' },
        { icon: 'Paintbrush', label: 'Tailwind CSS', sublabel: 'Utility-First Styling' },
        { icon: 'Database', label: 'PostgreSQL', sublabel: 'Relational Database' },
        { icon: 'Blocks', label: 'Payload CMS', sublabel: 'Headless CMS' },
        { icon: 'Cloud', label: 'Vercel', sublabel: 'Edge Deployment' },
        { icon: 'GitBranch', label: 'Git & GitHub', sublabel: 'Version Control' },
        { icon: 'Container', label: 'Docker', sublabel: 'Containerization' },
      ],
    },

    // 4. Tabs Content — Development Approach
    {
      blockType: 'tabsContent',
      heading: 'Development Philosophy',
      tabs: [
        {
          label: 'Performance',
          icon: 'Gauge',
          content: richText('**Every millisecond matters.** Slow sites lose users — and revenue. I build with performance as a first-class requirement, not an afterthought.\nServer-side rendering and static generation ensure pages load instantly. Automatic image optimization with WebP/AVIF conversion and responsive srcsets keeps payload sizes minimal.\nCode splitting, route-level lazy loading, and aggressive caching mean users only download what they need. The result: **95+ PageSpeed scores** on mobile and desktop.'),
        },
        {
          label: 'Quality',
          icon: 'Shield',
          content: richText('**TypeScript everywhere.** Full type safety from database schema to UI component props eliminates entire categories of bugs before they reach production.\nAutomated testing, linting, and formatting run on every commit. Preview deployments on every pull request let you review changes in a production-identical environment before merging.\n**Zero-error policy:** every build must pass `tsc --noEmit` with zero type errors. No exceptions, no `// @ts-ignore` hacks.'),
        },
        {
          label: 'SEO',
          icon: 'Search',
          content: richText('**Technical SEO is architecture, not an add-on.** Semantic HTML, proper heading hierarchy, structured data (JSON-LD), and dynamic meta tags are built into every page from day one.\nAutomatic sitemap generation, robots.txt configuration, and canonical URLs prevent duplicate content issues. Server-side rendering ensures search engines see fully rendered content.\nCore Web Vitals optimization — LCP, CLS, and INP — directly impacts search rankings. Every site I build targets **green scores across all metrics**.'),
        },
        {
          label: 'Accessibility',
          icon: 'Users',
          content: richText('**The web is for everyone.** I build to WCAG 2.1 AA standards by default — proper color contrast, keyboard navigation, screen reader support, and semantic markup.\nFocus management, ARIA labels, and skip links are implemented from the start, not retrofitted later. Automated accessibility audits run in CI to catch regressions.\nAccessibility isn\'t just the right thing to do — it also **improves SEO, broadens your audience, and reduces legal risk**.'),
        },
      ],
    },

    // 5. Checklist — What's Included
    {
      blockType: 'checklist',
      heading: 'What\'s Included',
      description: 'Every project ships with these fundamentals — no upsells, no hidden extras.',
      columns: '2',
      items: [
        { text: 'Fully responsive design', included: true },
        { text: 'SEO optimization & meta tags', included: true },
        { text: 'PageSpeed 90+ on mobile', included: true },
        { text: 'WCAG 2.1 AA accessibility', included: true },
        { text: 'SSL & security headers', included: true },
        { text: 'Analytics integration', included: true },
        { text: 'CMS for content management', included: true },
        { text: 'Automated deployments (CI/CD)', included: true },
        { text: 'Preview environments per PR', included: true },
        { text: 'Source code & documentation', included: true },
        { text: '30 days post-launch support', included: true },
        { text: 'Performance monitoring setup', included: true },
      ],
    },

    // 6. Stats
    {
      blockType: 'stats',
      heading: 'By the Numbers',
      items: [
        { value: '95+', label: 'Average PageSpeed Score' },
        { value: '50+', label: 'Projects Delivered' },
        { value: '<1s', label: 'Target Load Time' },
        { value: '100%', label: 'Code Ownership' },
      ],
    },

    // 7. FAQ
    {
      blockType: 'faq',
      heading: 'Common Questions',
      items: [
        {
          question: 'What does a typical project timeline look like?',
          answer: 'A marketing website takes 3–5 weeks. A full-stack application with custom features typically runs 6–12 weeks depending on complexity. Every project starts with a 1-week discovery phase to nail down requirements and prevent scope creep.',
        },
        {
          question: 'Do I own the code?',
          answer: 'Yes, 100%. You get full ownership of the source code, deployed on your own accounts (Vercel, GitHub, database). No vendor lock-in, no monthly "platform fees." If we part ways, you walk away with everything.',
        },
        {
          question: 'Why Next.js instead of WordPress or Webflow?',
          answer: 'WordPress and Webflow are great for certain use cases. I choose Next.js when you need custom functionality, high performance, type safety, and full control over the codebase. It\'s the difference between renting a template and owning a purpose-built solution.',
        },
        {
          question: 'How do you handle content management?',
          answer: 'I set up a headless CMS (usually Payload CMS) with a custom admin panel. You edit content through a clean interface — no code required. Content changes deploy automatically in under a minute.',
        },
        {
          question: 'What about hosting and ongoing costs?',
          answer: 'Most projects deploy on Vercel\'s free or Pro tier ($20/month). Database hosting on Neon or Supabase starts free. Total monthly cost is typically $0–$40 for most sites — no $200/month WordPress hosting needed.',
        },
        {
          question: 'Can you work with my existing design?',
          answer: 'Absolutely. I work from Figma files, design systems, or rough wireframes. If you don\'t have a design, I can build with a clean, modern aesthetic and iterate from there.',
        },
      ],
    },

    // 8. CTA
    {
      blockType: 'cta',
      heading: 'Ready to Build?',
      description: 'Let\'s talk about your project. No sales pitch — just a technical conversation about what you need and how to get there.',
      buttonLabel: 'Get in Touch',
      buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
      buttonColor: '#facc15',
      linkedinUrl: 'https://linkedin.com/in/akropivnitski',
      githubUrl: 'https://github.com/akropivnitski-debug',
    },
  ]

  await payload.update({
    collection: 'pages',
    id: page.id,
    data: { layout: newLayout },
  })
  await payload.update({
    collection: 'pages',
    id: page.id,
    data: { _status: 'published' },
  })

  console.log('Web Development page updated with optimized layout')
  process.exit(0)
}

seed().catch((err) => { console.error(err); process.exit(1) })
