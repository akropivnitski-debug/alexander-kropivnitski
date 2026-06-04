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
        parts.push({
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          text: p.slice(lastIndex, match.index),
          type: 'text',
          version: 1,
        })
      }
      if (match[1]) {
        parts.push({
          detail: 0,
          format: 1,
          mode: 'normal',
          style: '',
          text: match[1],
          type: 'text',
          version: 1,
        })
      } else if (match[2]) {
        parts.push({
          detail: 0,
          format: 2,
          mode: 'normal',
          style: '',
          text: match[2],
          type: 'text',
          version: 1,
        })
      }
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < p.length) {
      parts.push({
        detail: 0,
        format: 0,
        mode: 'normal',
        style: '',
        text: p.slice(lastIndex),
        type: 'text',
        version: 1,
      })
    }
    return {
      children: parts.length > 0 ? parts : [{ detail: 0, format: 0, mode: 'normal', style: '', text: p, type: 'text', version: 1 }],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'paragraph',
      version: 1,
      textFormat: 0,
      textStyle: '',
    }
  })

  return {
    root: {
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

async function seed() {
  const payload = await getPayload({ config })

  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'performance-marketing' } },
    limit: 1,
  })

  if (existing.docs.length === 0) {
    console.log('Performance Marketing page not found. Create it in the CMS first.')
    process.exit(1)
  }

  const pageId = existing.docs[0].id

  await payload.update({
    collection: 'pages',
    id: pageId,
    data: {
      layout: [
        // 1. Hero
        {
          blockType: 'heroV3',
          heading: 'Performance Marketing',
          content: richText(
            'I spent the last 8 years building paid media programs that actually move business metrics. Not vanity numbers. Real revenue.\nI have managed **$150M+ in ad spend** across **25+ countries** in EMEA, USA, and APAC. The campaigns I ran generated **$350M+ in gross market value** at a consistent **400% ROAS**. Every dollar had a plan behind it.'
          ),
          image: {
            source: 'url',
            url: '/api/media/file/AlexK%20front%201.png',
          },
          circleColor: '#facc15',
        } as any,

        // 2. Stats
        {
          blockType: 'stats',
          heading: 'Results That Matter',
          items: [
            { value: '$350M+', label: 'Gross Market Value' },
            { value: '400%', label: 'Average ROAS' },
            { value: '25+', label: 'Countries Managed' },
            { value: '$150M+', label: 'Total Ad Spend Managed' },
          ],
        } as any,

        // 3. Services (ad types)
        {
          blockType: 'projectsV2',
          heading: 'Services',
          description: 'Full spectrum of paid media campaign types, each tuned to specific business objectives.',
          columns: '3',
          cards: [
            {
              icon: 'Search',
              title: 'Search Ads',
              description: 'Google and Microsoft search campaigns built around intent. I structure accounts for scale while keeping cost per acquisition tight through keyword architecture and bid strategy.',
            },
            {
              icon: 'Tags',
              title: 'Shopping Ads',
              description: 'Product feed optimization, Google Merchant Center management, and Shopping campaign structures that surface the right products to the right buyers at the right moment.',
            },
            {
              icon: 'Monitor',
              title: 'Display & Retargeting',
              description: 'Programmatic display and retargeting campaigns that bring users back at the right stage of their journey. I focus on frequency capping and audience segmentation to avoid waste.',
            },
            {
              icon: 'Rocket',
              title: 'Demand Gen & Performance Max',
              description: 'Google\'s AI powered campaign types require a different kind of management. I combine strong creative inputs with audience signals and let the algorithms do what they do best.',
            },
            {
              icon: 'Layers',
              title: 'Carousel & Social Ads',
              description: 'Multi frame ad formats across Meta, TikTok, and Pinterest. I test creative sequences, messaging order, and visual storytelling to find what drives action.',
            },
            {
              icon: 'Target',
              title: 'Keyword Management',
              description: 'Ongoing keyword research, negative keyword refinement, match type strategy, and search term analysis. This is the foundation everything else is built on.',
            },
          ],
        } as any,

        // 4. My Approach (process steps)
        {
          blockType: 'processSteps',
          heading: 'My Approach',
          description: 'Every engagement follows the same core framework. The details change per client, but the thinking stays consistent.',
          steps: [
            {
              icon: 'Users',
              title: 'Targeted Audience Analysis',
              description: 'I start by understanding who the customer actually is. Not assumptions. Real data from CRM, analytics, and market research. Every campaign decision flows from this.',
            },
            {
              icon: 'BarChart3',
              title: 'Data Driven Insights',
              description: 'Raw data becomes strategy. I look at historical performance, competitive benchmarks, and market trends to identify where the real opportunities are.',
            },
            {
              icon: 'Gauge',
              title: 'Tracking & Measurement',
              description: 'Nothing works without proper measurement. I set up conversion tracking, attribution models, and reporting infrastructure before spending a single dollar.',
            },
            {
              icon: 'Code',
              title: 'Testing',
              description: 'Structured experiments across audiences, creatives, landing pages, and bid strategies. Every test has a hypothesis, a control, and a clear success metric.',
            },
            {
              icon: 'Repeat',
              title: 'Iteration',
              description: 'Results from testing feed back into strategy. I document what works, what doesn\'t, and why. Each cycle compounds the learnings from the one before.',
            },
            {
              icon: 'TrendingUp',
              title: 'Optimization',
              description: 'Continuous refinement of bids, budgets, targeting, and creative. I look at the full funnel, not just click metrics, to find where the real leverage is.',
            },
            {
              icon: 'Zap',
              title: 'Automation',
              description: 'Once I find what works, I build systems to scale it. Automated bidding, dynamic creative, rules based alerts, and custom scripts that keep campaigns performing without constant manual intervention.',
            },
          ],
        } as any,

        // 5. Analytics & Measurement
        {
          blockType: 'featureList',
          heading: 'Analytics & Measurement',
          description: 'Good campaigns start with good measurement. I believe the quality of your data directly determines the quality of your decisions.',
          columns: '3',
          items: [
            {
              icon: 'TrendingUp',
              title: 'Google Analytics 4',
              description: 'Full GA4 implementation including custom events, enhanced ecommerce, and conversion modeling. I configure it to answer the questions that actually matter to your business.',
            },
            {
              icon: 'Eye',
              title: 'Microsoft Clarity',
              description: 'Heatmaps, session recordings, and user behavior analysis. I use Clarity to understand what happens after the click and identify friction points that analytics alone can\'t reveal.',
            },
            {
              icon: 'Code',
              title: 'Google Tag Manager',
              description: 'Server side and client side GTM setups. Clean tag architecture, consent mode integration, and a tagging plan that doesn\'t slow down your site or leak data.',
            },
            {
              icon: 'Share2',
              title: 'Attribution Modeling',
              description: 'Multi touch attribution that reflects reality. I work with data driven, position based, and custom models to understand which touchpoints actually drive conversions.',
            },
            {
              icon: 'PieChart',
              title: 'Marketing Mix Modeling',
              description: 'Statistical modeling that quantifies the impact of each channel on business outcomes. Essential when you need to make budget allocation decisions across a complex media mix.',
            },
            {
              icon: 'Radar',
              title: 'Google Meridian',
              description: 'Hands on experience with Google\'s open source MMM framework. I use Meridian to build models that account for saturation, adstock effects, and cross channel interactions.',
            },
          ],
        } as any,

        // 6. Data Analysis & Experimentation + Automation
        {
          blockType: 'contentColumns',
          heading: 'Data & Automation',
          columns: [
            {
              title: 'Experimentation & Testing',
              content: richText(
                'I apply **Google GeoX** methodology for geo based experiments that measure true incrementality without polluting your main campaigns.\n**FeedX** for product feed experimentation, testing title structures, descriptions, and attributes to find what drives better Shopping performance.\n**Incrementality testing** (CLS) to answer the hardest question in marketing: would this conversion have happened anyway? I design holdout tests and use causal inference methods to measure real lift.\nI write **SQL** daily. Direct database access gives me answers faster than any dashboard. I build custom queries for cohort analysis, LTV calculations, and cross channel attribution that off the shelf tools can\'t handle.'
              ),
            },
            {
              title: 'Automation & AI',
              content: richText(
                'I automate the repetitive parts of performance marketing so I can focus on strategy and creative thinking.\n**Claude Code** for building custom analysis tools, report generators, and data pipelines that would take weeks to build manually.\n**N8n and Make** for workflow automation: alerts, report distribution, data syncing between platforms, and campaign monitoring.\n**OpenAI API and Google AI** for creative analysis at scale, automated ad copy generation, and sentiment analysis across large datasets.\nAutomation is not about replacing human judgment. It is about removing the bottlenecks that prevent you from acting on what the data is telling you.'
              ),
            },
          ],
        } as any,

        // 7. Creative Analysis
        {
          blockType: 'aboutSimple',
          heading: 'Creative Analysis',
          description: richText(
            'Performance creative is where data meets storytelling. I developed a framework that treats every ad as a testable hypothesis.\nI analyze creative performance across **visual hooks** (what stops the scroll), **messaging structure** (what drives the click), and **landing page alignment** (what closes the conversion). Each element is tagged, measured, and compared.\nI look at metrics most teams ignore: thumb stop rate, hold rate, completion rate, and post view conversions. These tell you more about creative quality than CTR ever will.\nThe goal is simple. Turn creative production from a guessing game into a repeatable system where every new asset builds on what you learned from the last one.'
          ),
        } as any,

        // 8. FAQ
        {
          blockType: 'faq',
          heading: 'Questions I Get Asked',
          description: 'Honest answers to the questions clients and hiring managers actually care about.',
          items: [
            {
              question: 'How do you measure success when ROAS looks great but the business isn\'t growing?',
              answer: 'This happens more often than people think. High ROAS can mask problems: you might be over optimizing for existing customers, running on branded traffic that would convert anyway, or measuring attribution incorrectly. I always look beyond ROAS at incrementality, new customer acquisition rate, and blended business metrics. If ROAS is 500% but revenue is flat, something in the measurement is lying to you.',
            },
            {
              question: 'Do you think Performance Max is replacing manual campaign structures?',
              answer: 'Not entirely, but the balance is shifting. Performance Max works well when you give it strong inputs: good creative, clean audience signals, and proper conversion tracking. Where it falls short is transparency. You can\'t see search terms the same way, you can\'t control placements precisely, and reporting is limited. I use PMax alongside manual campaigns. Let the algorithm find opportunities you might miss, but keep manual campaigns running for the terms and audiences you know convert.',
            },
            {
              question: 'What is your experience with international campaigns?',
              answer: 'I have managed campaigns across 25+ countries spanning EMEA, USA, Canada, Australia, New Zealand, and Japan. Each market has its own platform dynamics, auction competition, and consumer behavior. I learned that direct translation of ad copy is never enough. You need local keyword research, market specific landing pages, and bid strategies that account for different conversion values and competition levels in each region.',
            },
            {
              question: 'How do you handle attribution when multiple channels are running?',
              answer: 'I layer multiple approaches. Platform reporting gives you one view, GA4 data driven attribution gives another, and Marketing Mix Modeling gives the macro picture. No single model tells the full truth. I use incrementality testing with geo holdouts (GeoX methodology) to validate what the models are saying. When the models disagree, that\'s actually the most useful signal because it tells you where your assumptions need updating.',
            },
            {
              question: 'What is the biggest mistake companies make when scaling ad spend?',
              answer: 'Scaling too fast without understanding diminishing returns. Every channel has a saturation curve. The first $50K in spend might return 5x, but going from $200K to $300K might only return 1.5x. I use saturation modeling to find the point where each additional dollar starts losing efficiency. Most companies just increase budgets linearly and wonder why efficiency drops. The answer is almost always to diversify into new channels or audiences before pushing harder on what\'s already saturated.',
            },
            {
              question: 'Broad match or exact match keywords?',
              answer: 'Both, but for different purposes. Exact match gives you control and predictability. Broad match gives you reach and discovery. I typically start with exact and phrase match to establish baseline performance, then layer in broad match with smart bidding once I have enough conversion data for the algorithm to work with. The key is monitoring search term reports closely in the first few weeks and building negative keyword lists aggressively.',
            },
            {
              question: 'How do you approach creative testing at scale?',
              answer: 'I break creatives into variables: hook, message, format, CTA, and visual style. Then I test one variable at a time against a control. Most teams test completely different ads against each other and learn nothing because they can\'t isolate what caused the difference. I tag every creative with its variables so I can run meta analyses across campaigns and find patterns. Over time, you build a creative playbook that tells you exactly what works for each audience segment.',
            },
            {
              question: 'Can you work with in house teams or do you prefer to manage everything directly?',
              answer: 'I have done both. I work well embedded in existing teams because I bring structure and process that compounds over time. I document everything: strategies, test results, SOPs. My goal is always to leave the team more capable than I found it. Whether I manage campaigns directly or advise an in house team, the framework stays the same.',
            },
          ],
        } as any,

        // 9. CTA
        {
          blockType: 'cta',
          heading: 'Let\'s Talk Results',
          description: 'If you are looking for someone who treats ad spend as an investment, not an expense, I would like to hear about your challenge.',
          buttonLabel: 'Get in Touch',
          buttonHref: 'mailto:a.kropivnitski@digitalnexusstrategy.com',
          buttonColor: '#facc15',
          linkedinUrl: 'https://www.linkedin.com/in/alexander-kropivnitski/',
          githubUrl: 'https://github.com/akropivnitski-debug',
        } as any,
      ],
      _status: 'published',
    },
  })

  console.log('Performance Marketing page updated and published.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
