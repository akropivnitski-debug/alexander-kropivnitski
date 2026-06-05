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
    where: { slug: { equals: 'marketing-technology' } },
    limit: 1,
    draft: true,
  })

  const page = result.docs[0]
  if (!page) { console.error('marketing-technology page not found'); process.exit(1) }

  const existingBlocks = (page as any).layout || []
  const heroBlock = existingBlocks[0] // heroV3 — keep

  const newLayout: any[] = [
    heroBlock,

    // 1. Bento Grid — MarTech Services
    {
      blockType: 'bentoGrid',
      heading: 'MarTech Services',
      description: 'Building the technology foundation for data-driven marketing — from tracking to activation.',
      cards: [
        {
          icon: 'Tags',
          title: 'Tag Management & Tracking',
          description: 'GTM web & server-side containers, consent management, and event tracking architectures that capture the right data while respecting privacy regulations.',
          size: 'wide',
          accentColor: '#3b82f6',
        },
        {
          icon: 'Database',
          title: 'Data Architecture',
          description: 'Marketing data warehouses, ETL pipelines, and unified data models that connect cross-channel performance data.',
          size: 'normal',
          accentColor: '#8b5cf6',
        },
        {
          icon: 'BarChart3',
          title: 'Dashboards & Reporting',
          description: 'Custom real-time dashboards in Tableau, Looker, and Power BI that give stakeholders actionable insights.',
          size: 'normal',
          accentColor: '#10b981',
        },
        {
          icon: 'Workflow',
          title: 'Marketing Automation',
          description: 'HubSpot, Salesforce, and custom workflow design — lead scoring, nurture sequences, and lifecycle automation.',
          size: 'normal',
          accentColor: '#f97316',
        },
        {
          icon: 'Plug',
          title: 'Platform Integration',
          description: 'API integrations, webhook architectures, and middleware connecting your CRM, ad platforms, analytics, and internal tools.',
          size: 'normal',
          accentColor: '#ec4899',
        },
        {
          icon: 'Shield',
          title: 'Privacy & Compliance',
          description: 'GDPR/CCPA consent architectures, server-side tracking to reduce data leakage, and privacy-first measurement strategies.',
          size: 'wide',
          accentColor: '#facc15',
        },
      ],
    },

    // 2. Process Steps — How I Work
    {
      blockType: 'processSteps',
      heading: 'Implementation Process',
      description: 'A systematic approach to MarTech that avoids the classic "buy tools, figure it out later" trap.',
      steps: [
        {
          icon: 'Search',
          title: 'Stack Audit',
          description: 'Inventory your current tools, data flows, and integrations. Identify redundancies, gaps, and what\'s actually being used vs. what\'s just costing you money.',
        },
        {
          icon: 'Target',
          title: 'Requirements Mapping',
          description: 'Define what data you need, where it needs to go, and what decisions it should enable. Strategy before software.',
        },
        {
          icon: 'PenTool',
          title: 'Architecture Design',
          description: 'Design the data layer, tracking plan, integration map, and consent framework. Document everything before implementation.',
        },
        {
          icon: 'Code',
          title: 'Implementation',
          description: 'Deploy tracking, configure platforms, build integrations, and set up dashboards. Systematic, tested, and documented.',
        },
        {
          icon: 'Eye',
          title: 'Validation & QA',
          description: 'End-to-end data validation — verify every event fires correctly, every integration passes data accurately, every dashboard reflects reality.',
        },
        {
          icon: 'Repeat',
          title: 'Training & Optimization',
          description: 'Hands-on training for your team, runbooks for common tasks, and ongoing optimization based on real usage patterns.',
        },
      ],
    },

    // 3. Icon Grid — Platforms & Expertise
    {
      blockType: 'iconGrid',
      heading: 'Platforms & Expertise',
      description: 'Deep experience across the marketing technology landscape.',
      columns: '4',
      items: [
        { icon: 'Tags', label: 'Google Tag Manager', sublabel: 'Web & Server-Side' },
        { icon: 'TrendingUp', label: 'Google Analytics 4', sublabel: 'Events & BigQuery' },
        { icon: 'PieChart', label: 'Tableau', sublabel: 'Enterprise Dashboards' },
        { icon: 'Database', label: 'BigQuery', sublabel: 'Data Warehouse' },
        { icon: 'Users', label: 'HubSpot', sublabel: 'CRM & Automation' },
        { icon: 'Mail', label: 'Salesforce', sublabel: 'Marketing Cloud' },
        { icon: 'Radar', label: 'Segment', sublabel: 'Customer Data Platform' },
        { icon: 'Webhook', label: 'Zapier / Make', sublabel: 'Workflow Automation' },
      ],
    },

    // 4. Tabs Content — Philosophy
    {
      blockType: 'tabsContent',
      heading: 'MarTech Philosophy',
      tabs: [
        {
          label: 'Audit First',
          icon: 'Search',
          content: richText('**Most organizations use less than 40% of what they\'ve already purchased.** Before recommending any new tool, I audit your existing stack to find untapped capabilities and eliminate redundant spend.\nThe average enterprise uses 91 marketing cloud services. Most of them overlap. A lean, well-integrated stack of 8–12 tools will outperform a bloated ecosystem of 30+ every time.\n**My rule: no new tool until you\'ve maximized what you have.**'),
        },
        {
          label: 'Data Quality',
          icon: 'Database',
          content: richText('**Bad data in, bad decisions out.** Every MarTech implementation starts with a rigorous tracking plan and data validation framework.\nI design structured data layers with consistent naming conventions, event taxonomies, and property schemas. Every event is documented, every property has an expected type and format.\nAutomated data quality checks run continuously — **you\'ll know within minutes if something breaks**, not months later when a stakeholder questions a dashboard number.'),
        },
        {
          label: 'Privacy-First',
          icon: 'Shield',
          content: richText('**Third-party cookies are dead. Tracking pixels are unreliable.** I build measurement architectures that work in a privacy-first world.\nServer-side GTM containers keep sensitive data off the client. Consent management platforms integrate cleanly with your tracking stack. First-party data strategies replace reliance on third-party audiences.\nThe result: **accurate measurement that respects user privacy and complies with GDPR, CCPA, and ePrivacy** without sacrificing the data you need to make decisions.'),
        },
        {
          label: 'Integration',
          icon: 'Plug',
          content: richText('**Tools are only as valuable as the connections between them.** A CRM that doesn\'t talk to your ad platforms is an expensive spreadsheet.\nI build integration architectures using APIs, webhooks, and middleware — connecting your marketing stack into a unified ecosystem where data flows automatically.\n**Lead captured in a form → scored in CRM → synced to ad platform audiences → triggered in email sequence.** No manual exports, no CSV uploads, no "I\'ll update it Monday."'),
        },
      ],
    },

    // 5. Checklist — What You Get
    {
      blockType: 'checklist',
      heading: 'What You Get',
      description: 'Every MarTech engagement includes these deliverables.',
      columns: '2',
      items: [
        { text: 'Full stack audit & recommendations', included: true },
        { text: 'Tracking plan with event taxonomy', included: true },
        { text: 'Data layer specification', included: true },
        { text: 'GTM container setup (web + server)', included: true },
        { text: 'GA4 configuration & custom events', included: true },
        { text: 'Consent management integration', included: true },
        { text: 'Dashboard & reporting setup', included: true },
        { text: 'Platform integrations & APIs', included: true },
        { text: 'Data validation & QA testing', included: true },
        { text: 'Team training & documentation', included: true },
        { text: '30 days post-launch support', included: true },
        { text: 'Ongoing managed services', included: false },
      ],
    },

    // 6. Stats
    {
      blockType: 'stats',
      heading: 'Impact',
      items: [
        { value: '40%', label: 'Avg. Tool Redundancy Found' },
        { value: '99.5%', label: 'Data Accuracy Target' },
        { value: '< 24h', label: 'Issue Detection Time' },
        { value: '8–12', label: 'Ideal Stack Size' },
      ],
    },

    // 7. FAQ
    {
      blockType: 'faq',
      heading: 'Common Questions',
      items: [
        {
          question: 'What\'s the difference between MarTech and just buying tools?',
          answer: 'Buying tools is shopping. MarTech is architecture. I design how your tools connect, how data flows between them, and how the whole system enables better marketing decisions. Without this, you end up with expensive software nobody fully uses.',
        },
        {
          question: 'Do I need to replace all my existing tools?',
          answer: 'Almost never. Most engagements involve configuring existing tools properly, building integrations between them, and occasionally replacing one or two that genuinely don\'t fit. I aim to maximize your current investment before adding new costs.',
        },
        {
          question: 'How do you handle the transition from Universal Analytics to GA4?',
          answer: 'I design a clean GA4 implementation from scratch — not a copy of your old UA setup. GA4\'s event-based model requires rethinking your measurement strategy, not just migrating properties. I build a new tracking plan, implement it alongside your existing setup, and validate data parity before cutover.',
        },
        {
          question: 'What about server-side tracking? Is it worth the complexity?',
          answer: 'If you\'re spending significant money on paid media, yes. Server-side GTM gives you first-party data collection, better conversion accuracy (20–30% more conversions captured vs. client-side), and compliance with privacy regulations. The ROI usually pays for itself within the first month.',
        },
        {
          question: 'Can you work with my existing agency or in-house team?',
          answer: 'Absolutely. I often work alongside media agencies, design teams, and internal marketing ops. I handle the technical architecture and implementation; they handle strategy and creative. Clear handoff documentation makes collaboration seamless.',
        },
        {
          question: 'How long does a typical MarTech project take?',
          answer: 'A stack audit takes 1–2 weeks. A full tracking implementation (GTM + GA4 + dashboards) runs 3–5 weeks. A comprehensive MarTech transformation with integrations and automation takes 6–10 weeks. Timeline depends on the number of platforms and complexity of integrations.',
        },
      ],
    },

    // 8. CTA
    {
      blockType: 'cta',
      heading: 'Ready to Fix Your MarTech Stack?',
      description: 'Let\'s start with an audit of what you have and build a plan for where you need to be.',
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

  console.log('Marketing Technology page updated with optimized layout')
  process.exit(0)
}

seed().catch((err) => { console.error(err); process.exit(1) })
