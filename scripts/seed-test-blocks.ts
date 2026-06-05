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

  const layout: any[] = [
    // 1. Bento Grid
    {
      blockType: 'bentoGrid',
      heading: 'Why Choose Our Platform',
      description: 'Everything you need to build, deploy, and scale modern web applications.',
      cards: [
        { icon: 'Zap', title: 'Lightning Fast', description: 'Sub-second builds with incremental compilation and smart caching across your entire pipeline.', size: 'wide', accentColor: '#facc15' },
        { icon: 'Shield', title: 'Enterprise Security', description: 'SOC 2 Type II certified with end-to-end encryption and zero-trust architecture.', size: 'normal', accentColor: '#3b82f6' },
        { icon: 'Globe', title: 'Global Edge Network', description: 'Deploy to 300+ edge locations worldwide for ultra-low latency.', size: 'normal', accentColor: '#10b981' },
        { icon: 'Workflow', title: 'CI/CD Built In', description: 'Automated deployments, preview environments, and rollback with every git push.', size: 'normal', accentColor: '#8b5cf6' },
        { icon: 'Database', title: 'Managed Data Layer', description: 'Postgres, Redis, and blob storage — provisioned and scaled automatically.', size: 'wide', accentColor: '#f43f5e' },
        { icon: 'Users', title: 'Team Collaboration', description: 'Role-based access, audit logs, and real-time collaboration tools.', size: 'normal', accentColor: '#f97316' },
      ],
    },
    // 2. Logo Marquee
    {
      blockType: 'logoMarquee',
      heading: 'Trusted by industry leaders',
      speed: 'normal',
      logos: [
        { name: 'Vercel', logo: { source: 'url', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg' } },
        { name: 'Next.js', logo: { source: 'url', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' } },
        { name: 'Supabase', logo: { source: 'url', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Supabase_Logo.svg' } },
        { name: 'Stripe', logo: { source: 'url', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' } },
        { name: 'GitHub', logo: { source: 'url', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' } },
        { name: 'Figma', logo: { source: 'url', url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' } },
      ],
    },
    // 3. Tabs Content
    {
      blockType: 'tabsContent',
      heading: 'Platform Capabilities',
      tabs: [
        { label: 'Analytics', icon: 'BarChart3', content: richText('**Real-time analytics** built into every deployment. Track page views, Web Vitals, and custom events without third-party scripts.\nMonitor Core Web Vitals (LCP, CLS, INP) across all routes with automatic alerting when metrics degrade.\nExport data to your existing tools via webhooks or our REST API.') },
        { label: 'Security', icon: 'Shield', content: richText('**Enterprise-grade security** out of the box. Automatic SSL, DDoS protection, and WAF rules.\nAll traffic encrypted in transit and at rest. Private networking between your services with no public exposure.\nSOC 2 Type II compliance with detailed audit logs and role-based access control.') },
        { label: 'Performance', icon: 'Gauge', content: richText('**Edge-first architecture** for the fastest possible user experience. Static assets served from 300+ global locations.\nAutomatic image optimization with WebP/AVIF conversion, responsive srcsets, and lazy loading.\nIncremental Static Regeneration lets you update content without full rebuilds.') },
      ],
    },
    // 4. Split Section
    {
      blockType: 'splitSection',
      heading: 'Ship Faster With Confidence',
      description: richText('Every pull request gets its own **preview deployment** with a unique URL. Share with stakeholders, run integration tests, and iterate — all before merging to production.\nNo more "works on my machine" — preview environments mirror production exactly, including environment variables, edge config, and database branches.'),
      image: { source: 'url', url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop' },
      layout: 'imageRight',
      buttonLabel: 'Start Building',
      buttonHref: '#',
    },
    // 5. Checklist
    {
      blockType: 'checklist',
      heading: 'Professional Plan Features',
      description: 'Everything in Starter, plus advanced tools for growing teams.',
      columns: '2',
      items: [
        { text: 'Unlimited deployments', included: true },
        { text: 'Custom domains with SSL', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'Preview deployments', included: true },
        { text: 'Analytics dashboard', included: true },
        { text: 'Priority support', included: true },
        { text: 'SLA guarantee', included: true },
        { text: 'Dedicated infrastructure', included: false },
        { text: 'Custom contracts', included: false },
        { text: 'SOC 2 report access', included: false },
      ],
    },
    // 6. Card Grid
    {
      blockType: 'cardGrid',
      heading: 'Case Studies',
      description: 'See how teams are building with our platform.',
      columns: '3',
      cards: [
        { title: 'E-commerce Migration', description: 'How a Fortune 500 retailer cut page load times by 60% and increased conversion by 23%.', tag: 'Retail', image: { source: 'url', url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop' } },
        { title: 'SaaS Dashboard', description: 'Building a real-time analytics dashboard serving 10M+ daily active users.', tag: 'SaaS', image: { source: 'url', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' } },
        { title: 'Media Platform', description: 'Scaling a content platform from 1M to 50M monthly visitors with zero downtime.', tag: 'Media', image: { source: 'url', url: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=600&h=400&fit=crop' } },
      ],
    },
    // 7. Video Section
    {
      blockType: 'videoSection',
      heading: 'See It In Action',
      description: 'Watch a 2-minute overview of the platform and see how easy it is to deploy your first project.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      layout: 'centered',
      aspectRatio: '16/9',
    },
    // 8. Text Marquee
    {
      blockType: 'textMarquee',
      text: 'Build • Deploy • Scale',
      separator: '★',
      speed: 'normal',
      size: 'xl',
      variant: 'outline',
    },
    // 9. Icon Grid
    {
      blockType: 'iconGrid',
      heading: 'Tech Stack',
      description: 'First-class support for the frameworks and tools you love.',
      columns: '4',
      items: [
        { icon: 'Globe', label: 'Next.js', sublabel: 'React Framework' },
        { icon: 'Zap', label: 'Turbopack', sublabel: 'Bundler' },
        { icon: 'Database', label: 'PostgreSQL', sublabel: 'Database' },
        { icon: 'Server', label: 'Node.js', sublabel: 'Runtime' },
        { icon: 'Code', label: 'TypeScript', sublabel: 'Language' },
        { icon: 'Layers', label: 'Docker', sublabel: 'Containers' },
        { icon: 'GitBranch', label: 'Git', sublabel: 'Version Control' },
        { icon: 'Cloud', label: 'AWS', sublabel: 'Infrastructure' },
      ],
    },
    // 10. Number Counter
    {
      blockType: 'numberCounter',
      heading: 'Platform at Scale',
      description: 'Numbers that speak for themselves.',
      items: [
        { value: 300, suffix: '+', label: 'Edge Locations', accentColor: '#facc15' },
        { value: 99, suffix: '.99%', label: 'Uptime SLA', accentColor: '#10b981' },
        { value: 50, suffix: 'M+', label: 'Deploys Per Month', accentColor: '#3b82f6' },
        { value: 2, suffix: 'M+', label: 'Developers', accentColor: '#8b5cf6' },
      ],
    },
  ]

  const slug = 'test-blocks'
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    draft: true,
  })

  if (existing.docs.length > 0) {
    const doc = existing.docs[0]
    await payload.update({
      collection: 'pages',
      id: doc.id,
      data: { title: 'Test Blocks', slug, layout },
    })
    await payload.update({
      collection: 'pages',
      id: doc.id,
      data: { _status: 'published' },
    })
    console.log(`Updated page: ${slug}`)
  } else {
    const doc = await payload.create({
      collection: 'pages',
      data: {
        title: 'Test Blocks',
        slug,
        layout,
        meta: { noIndex: true },
      } as any,
      draft: false,
    })
    await payload.update({
      collection: 'pages',
      id: doc.id,
      data: { _status: 'published' },
    })
    console.log(`Created page: ${slug}`)
  }

  console.log('Done — visit /test-blocks to preview all 10 new blocks')
  process.exit(0)
}

seed().catch((err) => { console.error(err); process.exit(1) })
