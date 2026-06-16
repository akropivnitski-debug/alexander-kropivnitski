import fs from 'fs'
import path from 'path'
import { buildJobRolePage, type PageDraft } from './lib/lexical-helpers'

const OUT_DIR = path.resolve('content/drafts/batch-2')
fs.mkdirSync(OUT_DIR, { recursive: true })

const pages: PageDraft[] = [

  // ═══════════════════════════════════════════════════════
  // 1. SENIOR SEO MANAGER
  // Positioning: Senior level, strategic SEO leadership, team management, cross-functional
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'senior-seo-manager',
    title: 'Senior SEO Manager',
    seoTitle: 'Senior SEO Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the senior SEO manager role: strategic organic growth leadership, team development, technical oversight, and connecting SEO to business outcomes.',
    parentHub: 'seo',
    circleColor: '#22c55e',
    heroContent: `The senior SEO manager role goes beyond day to day optimization. It involves setting the organic search strategy for the entire organization, managing a team of SEO practitioners, and ensuring that organic search contributes measurably to business growth. While an [SEO manager](/seo-manager) handles execution across technical, content, and link building workstreams, the senior role adds strategic planning, stakeholder management, and team leadership.

This page explains how I approach senior SEO leadership, what makes the role distinct from other [SEO](/seo) positions, and how I connect organic search programs to revenue and business outcomes.`,

    features: [
      { icon: 'Compass', title: 'SEO Strategy and Roadmapping', description: 'Defining the organic search strategy at the organizational level, including prioritization of technical fixes, content investments, and link building initiatives. Building quarterly and annual SEO roadmaps that align with business planning cycles and revenue targets.' },
      { icon: 'Users', title: 'Team Leadership and Development', description: 'Managing and mentoring SEO team members across technical, content, and outreach disciplines. Building a team culture where experimentation is encouraged and decisions are backed by data rather than opinion or outdated best practices.' },
      { icon: 'GitBranch', title: 'Cross Functional Collaboration', description: 'Working with engineering on technical implementations, with content teams on editorial strategy, with product teams on site architecture decisions, and with leadership on budget allocation. SEO at the senior level requires influence across multiple departments.' },
      { icon: 'BarChart3', title: 'Performance Measurement and Attribution', description: 'Building reporting frameworks that connect organic search performance to actual business outcomes like revenue, pipeline, and customer acquisition cost. Moving beyond vanity metrics like traffic and rankings to demonstrate real business impact.' },
      { icon: 'Globe', title: 'International and Multi Market SEO', description: 'Overseeing SEO programs across multiple markets, languages, and regions. Managing hreflang implementations, localized content strategies, and market specific keyword research at scale.' },
      { icon: 'Lightbulb', title: 'Technical SEO Oversight', description: 'Reviewing and approving technical SEO recommendations from the team, ensuring site architecture decisions support organic growth, and maintaining quality standards for technical implementations. Knowing when to push back on engineering decisions that would harm organic visibility.' },
    ],
    featuresDescription: 'At the senior level, SEO management shifts from execution to strategy, leadership, and organizational influence.',

    approachContent: `My approach at the senior level focuses on building sustainable organic growth programs rather than chasing quick wins. I start by establishing a clear measurement framework so every SEO initiative can be evaluated against business impact, not just ranking changes. Too many SEO teams report on metrics that do not connect to revenue. Fixing that disconnect is the first thing I do.

I have led [SEO](/seo) programs across multiple markets and industries, using tools like [Google Search Console](/google-search-console), [Ahrefs](/ahrefs), [Semrush](/semrush), and [Screaming Frog](/screaming-frog) to audit, monitor, and optimize organic performance. At the senior level, tool expertise is table stakes. The real value comes from knowing how to interpret the data and translate it into strategic decisions that move the business forward.

Building the right team is the most impactful thing a senior SEO manager does. I focus on hiring people with strong analytical skills and genuine curiosity about how search works. I also invest time in developing junior team members, creating clear growth paths, and building processes that allow the team to operate effectively without requiring my involvement in every tactical decision.

Stakeholder management becomes critical at this level. Explaining [how SEO works](/what-is-seo) to executives who are used to the immediacy of paid channels requires patience and clear communication. I build trust by being transparent about timelines, honest about what is achievable, and consistent in connecting SEO results to the metrics that leadership actually cares about.

One area where I see senior SEO managers struggle is balancing [technical SEO](/technical-seo-explained) priorities with content and link building investments. All three matter, but the right allocation depends on the specific situation. A technically broken site needs technical fixes first. A technically sound site with thin content needs content investment. Getting this prioritization right requires looking at the data objectively rather than defaulting to personal preferences.`,

    processSteps: [
      { icon: 'Telescope', title: 'Strategic Assessment', description: 'Comprehensive audit of the current SEO program including technical health, content gaps, competitive positioning, backlink profile, and team capabilities. This assessment identifies the highest impact opportunities and sets the baseline for measuring progress over time.' },
      { icon: 'Map', title: 'Roadmap and Prioritization', description: 'Build a prioritized SEO roadmap organized by impact and effort. Present the plan to stakeholders with clear expected outcomes and timelines. Ensure the roadmap accounts for engineering dependencies and content production capacity.' },
      { icon: 'Users', title: 'Team Alignment and Execution', description: 'Assign workstreams to team members based on skills and development goals. Establish clear milestones, review cadences, and quality standards. Remove blockers and ensure the team has the resources needed to execute effectively.' },
      { icon: 'TrendingUp', title: 'Measure and Iterate', description: 'Track progress against the roadmap with regular performance reviews. Adjust priorities based on results, algorithm changes, and shifting business needs. Report outcomes to leadership in terms of business impact, not just SEO metrics.' },
    ],
    processDescription: 'Senior SEO management follows a strategic cycle of assessment, planning, execution, and measurement.',

    faqItems: [
      { question: 'What is the difference between an SEO manager and a senior SEO manager?', answer: 'An SEO manager focuses primarily on executing SEO work across technical, content, and link building workstreams. A senior SEO manager adds strategic oversight, team leadership, stakeholder management, and organizational influence. The senior role is less about doing the work personally and more about ensuring the right work gets done by the right people at the right time. Budget management, hiring, and executive communication become significant parts of the job.' },
      { question: 'How does a senior SEO manager measure success?', answer: 'Success at this level is measured by the overall impact of the SEO program on business outcomes. The primary metrics are organic revenue or pipeline contribution, organic traffic growth in commercially valuable segments, and the efficiency of the SEO investment relative to other acquisition channels. I also track team health indicators like velocity of output, quality of work, and retention of strong team members.' },
      { question: 'What skills are most important at the senior SEO level?', answer: 'Strategic thinking, team leadership, stakeholder communication, and the ability to connect SEO work to business outcomes. Technical SEO knowledge and tool expertise are foundational, but at the senior level, they are not differentiators. What separates a good senior SEO manager from a great one is the ability to prioritize correctly, build high performing teams, and earn trust from leadership by delivering consistent, measurable results.' },
      { question: 'How does a senior SEO manager work with other marketing channels?', answer: 'Collaboration with paid search, content marketing, PR, and product teams is a major part of the role. I coordinate with the paid search team to avoid cannibalization and maximize total search visibility. I work with content teams to align editorial calendars with keyword opportunities. I collaborate with PR on link building through digital PR campaigns. And I work with product teams to ensure site changes do not harm organic performance.' },
      { question: 'Is the senior SEO manager role becoming less relevant with AI search?', answer: 'The role is evolving but not becoming less relevant. AI powered search features change how results appear, but they still rely on content from websites. The senior SEO manager now needs to consider generative engine optimization alongside traditional SEO. The strategic skills of the role, prioritization, team leadership, business alignment, are actually more important in a rapidly changing search landscape because the team needs clear direction on where to invest effort.' },
    ],

    relatedCards: [
      { title: 'SEO', description: 'My broader organic search expertise.', href: '/seo' },
      { title: 'SEO Manager', description: 'The core organic search management role.', href: '/seo-manager' },
      { title: 'Technical SEO Specialist', description: 'Deep technical search optimization.', href: '/technical-seo-specialist' },
      { title: 'SEO Specialist', description: 'Focused SEO execution.', href: '/seo-specialist' },
      { title: 'Organic Growth Manager', description: 'Broader organic growth strategy.', href: '/organic-growth-manager' },
      { title: 'Google Search Console', description: 'Essential SEO monitoring tool.', href: '/google-search-console' },
      { title: 'Ahrefs', description: 'SEO research and analysis.', href: '/ahrefs' },
      { title: 'Semrush', description: 'SEO and competitive analysis.', href: '/semrush' },
    ],
    ctaHeading: 'Looking for a Senior SEO Manager?',
    ctaDescription: 'If you need strategic SEO leadership to build or scale your organic search program, feel free to reach out.',
    ctaColor: '#22c55e',
    links: {
      siblings: ['seo-manager', 'technical-seo-specialist', 'seo-specialist', 'organic-growth-manager'],
      tools: ['google-search-console', 'ahrefs', 'semrush', 'screaming-frog', 'technical-seo'],
      topics: ['what-is-seo', 'technical-seo-explained', 'technical-seo-approach', 'website-performance-optimization'],
      relatedTopics: ['seo', 'seo-manager', 'technical-seo-specialist', 'seo-specialist', 'organic-growth-manager', 'google-search-console', 'ahrefs', 'semrush'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 2. TECHNICAL SEO SPECIALIST
  // Positioning: Mid level, deep technical focus, crawling/indexing/architecture
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'technical-seo-specialist',
    title: 'Technical SEO Specialist',
    seoTitle: 'Technical SEO Specialist | Alexander Kropivnitski',
    seoDescription: 'How I approach technical SEO: site architecture, crawl optimization, Core Web Vitals, structured data, and resolving indexation issues for better organic performance.',
    parentHub: 'seo',
    circleColor: '#14b8a6',
    heroContent: `A technical SEO specialist focuses on the infrastructure side of organic search. The role is about ensuring that search engines can efficiently discover, crawl, render, and index a website's content. While an [SEO manager](/seo-manager) balances technical work with content strategy and link building, a technical SEO specialist goes deep on site architecture, page speed, crawl budget, structured data, and indexation issues.

This page explains how I approach [technical SEO](/technical-seo-explained), what the role requires, and how technical optimization supports broader [SEO](/seo) strategy.`,

    features: [
      { icon: 'Globe', title: 'Crawl and Indexation Management', description: 'Analyzing how search engines crawl a website, identifying crawl waste, managing robots.txt and XML sitemaps, and resolving indexation issues. Ensuring that important pages are crawled frequently and unimportant pages do not waste crawl budget.' },
      { icon: 'Zap', title: 'Core Web Vitals and Page Speed', description: 'Diagnosing and fixing performance issues that affect both user experience and search rankings. Working with developers on LCP, FID, CLS, and INP optimization. Understanding how front end frameworks and rendering methods affect page speed metrics.' },
      { icon: 'Code', title: 'Structured Data Implementation', description: 'Implementing and validating JSON-LD schema markup for products, FAQs, articles, organizations, and other entity types. Structured data helps search engines understand page content and can enable rich results in search.' },
      { icon: 'Layout', title: 'Site Architecture and Internal Linking', description: 'Designing URL structures, navigation hierarchies, and internal linking patterns that distribute authority effectively and help both users and search engines find important content efficiently.' },
      { icon: 'FileCode', title: 'JavaScript SEO and Rendering', description: 'Evaluating how search engines render JavaScript heavy pages, identifying rendering issues, and recommending solutions like server side rendering, static generation, or hybrid approaches.' },
      { icon: 'Shield', title: 'Migration and Redirect Management', description: 'Planning and executing site migrations, domain changes, and URL restructuring with minimal traffic loss. Building redirect maps, monitoring post migration performance, and resolving issues quickly when they appear.' },
    ],
    featuresDescription: 'Technical SEO requires deep understanding of how search engines process websites at a technical level.',

    approachContent: `My approach to technical SEO starts with a thorough crawl audit. I use tools like [Screaming Frog](/screaming-frog), [Google Search Console](/google-search-console), and log file analysis to understand exactly how search engines interact with the site. This reveals issues that are invisible from the content side: redirect chains, orphan pages, crawl traps, duplicate content, and rendering problems.

I work closely with development teams to implement fixes. Technical SEO is not just about identifying issues. It is about explaining them in terms that developers understand and prioritizing them based on expected impact. A recommendation that development cannot implement is worthless. I focus on providing clear, actionable specifications with enough context for engineers to understand why the change matters.

The technical SEO specialist role differs from an [SEO manager](/seo-manager) or [senior SEO manager](/senior-seo-manager) in depth versus breadth. While those roles cover content, links, and strategy alongside technical work, a technical SEO specialist goes deep on the infrastructure side. This specialization is especially valuable for large, complex websites where technical issues can have outsized impact on organic performance.

One area where I add particular value is JavaScript [SEO](/seo). Modern web applications built with frameworks like React, Next.js, and Vue create specific challenges for search engines. Understanding how search engine rendering works, when to use server side rendering versus client side rendering, and how to audit rendered output is increasingly important as more websites adopt these frameworks.

I also pay careful attention to [Core Web Vitals](/website-performance-optimization) because Google uses these metrics as ranking signals. But I focus on fixes that actually move the needle for rankings and user experience, not on achieving perfect scores for their own sake. A site with good performance and excellent content will outperform a site with perfect performance scores and mediocre content every time.`,

    processSteps: [
      { icon: 'Search', title: 'Crawl and Audit', description: 'Comprehensive technical audit using Screaming Frog, Google Search Console, and server log analysis. Map crawl paths, identify technical issues, assess rendering behavior, and evaluate site architecture. Document every finding with severity and expected impact.' },
      { icon: 'ListOrdered', title: 'Prioritize and Specify', description: 'Rank all findings by expected impact on organic performance and effort required to fix. Create detailed technical specifications for each recommendation that developers can implement without ambiguity. Group related fixes into logical implementation sprints.' },
      { icon: 'Wrench', title: 'Implement and Validate', description: 'Work with the development team to implement fixes, validate changes in staging environments, and monitor the impact after deployment. Ensure redirects resolve correctly, structured data validates, and page speed improvements hold under real traffic.' },
      { icon: 'Gauge', title: 'Monitor and Iterate', description: 'Set up ongoing monitoring for technical health metrics including crawl stats, indexation rates, Core Web Vitals, and structured data validation. Technical SEO is not a one time project. New issues appear as the site evolves, and continuous monitoring catches them early.' },
    ],
    processDescription: 'Technical SEO follows a disciplined cycle of auditing, prioritizing, implementing, and monitoring.',

    faqItems: [
      { question: 'What is the difference between a technical SEO specialist and an SEO manager?', answer: 'A technical SEO specialist focuses specifically on the infrastructure and technical aspects of SEO: crawling, indexation, site speed, structured data, and architecture. An SEO manager covers a broader scope including content strategy, link building, and stakeholder management alongside technical work. In larger organizations, these are separate roles with the technical specialist providing deep expertise that the manager oversees strategically. In smaller teams, one person often handles both.' },
      { question: 'What tools does a technical SEO specialist use?', answer: 'The core tools are Screaming Frog for crawl analysis, Google Search Console for indexation and performance data, Chrome DevTools and Lighthouse for page speed auditing, and server log analysis tools for understanding real crawler behavior. Ahrefs and Semrush are used for backlink analysis and competitive research. For JavaScript SEO specifically, tools like Google Rich Results Test, URL Inspection API, and Rendertron help evaluate how search engines process dynamic content.' },
      { question: 'How important is page speed for SEO?', answer: 'Page speed matters but its impact is often overstated. Google uses Core Web Vitals as ranking signals, but they function more as tiebreakers than major ranking factors. A fast site with poor content will not outrank a slightly slower site with excellent content. That said, extremely slow pages do hurt rankings and user experience significantly. I focus on getting performance to a good level rather than obsessing over perfect scores. The biggest SEO performance gains usually come from fixing critical issues like very slow LCP or layout shifts, not from shaving milliseconds off already fast pages.' },
      { question: 'Is technical SEO still relevant with modern CMS platforms?', answer: 'Yes. Modern CMS platforms and frameworks handle some technical basics automatically, but they also introduce new challenges. Server side rendering configuration, dynamic routing, internationalization setup, canonical management in headless architectures, and JavaScript rendering behavior all require technical SEO expertise. The nature of the technical work changes, but the need for someone who understands how search engines process websites at a technical level does not go away.' },
      { question: 'How do you handle site migrations without losing organic traffic?', answer: 'Careful planning is the key. I start by mapping all existing URLs to their new destinations, setting up proper 301 redirects, and creating a monitoring plan. Before launch, I validate the redirect map in a staging environment. After launch, I monitor Google Search Console hourly for the first few days to catch any issues early. Some traffic dip during migration is normal and usually recovers within a few weeks if the redirects are correct. The biggest risks are missed redirects and redirect chains, which I test thoroughly before going live.' },
    ],

    relatedCards: [
      { title: 'SEO', description: 'My broader organic search expertise.', href: '/seo' },
      { title: 'SEO Manager', description: 'Broader organic search management.', href: '/seo-manager' },
      { title: 'Senior SEO Manager', description: 'Strategic SEO leadership.', href: '/senior-seo-manager' },
      { title: 'SEO Specialist', description: 'Focused SEO execution.', href: '/seo-specialist' },
      { title: 'Organic Growth Manager', description: 'Organic growth strategy.', href: '/organic-growth-manager' },
      { title: 'Google Search Console', description: 'Essential SEO monitoring.', href: '/google-search-console' },
      { title: 'Ahrefs', description: 'SEO research and analysis.', href: '/ahrefs' },
      { title: 'Semrush', description: 'SEO and competitive analysis.', href: '/semrush' },
    ],
    ctaHeading: 'Need Technical SEO Expertise?',
    ctaDescription: 'If your website has technical issues holding back organic performance, feel free to reach out.',
    ctaColor: '#14b8a6',
    links: {
      siblings: ['seo-manager', 'senior-seo-manager', 'seo-specialist', 'organic-growth-manager'],
      tools: ['google-search-console', 'ahrefs', 'semrush', 'screaming-frog', 'technical-seo'],
      topics: ['what-is-seo', 'technical-seo-explained', 'technical-seo-approach', 'website-performance-optimization'],
      relatedTopics: ['seo', 'seo-manager', 'senior-seo-manager', 'seo-specialist', 'organic-growth-manager', 'google-search-console', 'ahrefs', 'semrush'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 3. SEO SPECIALIST
  // Positioning: Mid level, execution focused, keyword research + content optimization + link building
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'seo-specialist',
    title: 'SEO Specialist',
    seoTitle: 'SEO Specialist | Alexander Kropivnitski',
    seoDescription: 'How I approach the SEO specialist role: keyword research, on-page optimization, content strategy, link building, and hands-on organic growth execution.',
    parentHub: 'seo',
    circleColor: '#16a34a',
    heroContent: `An SEO specialist is the hands on practitioner who executes organic search optimization across keyword research, on page optimization, content planning, and link building. While an [SEO manager](/seo-manager) oversees the full program and a [technical SEO specialist](/technical-seo-specialist) focuses on infrastructure, the SEO specialist role is about doing the daily work that moves rankings and traffic.

This page covers how I approach SEO execution, the skills that matter most, and how this role fits within a broader [SEO](/seo) strategy.`,

    features: [
      { icon: 'Search', title: 'Keyword Research and Mapping', description: 'Conducting thorough keyword research using search volume, competition, and intent analysis. Mapping keywords to existing and planned content to ensure every important search query has a targeted page with no overlap or cannibalization.' },
      { icon: 'FileText', title: 'On Page Optimization', description: 'Optimizing title tags, meta descriptions, heading structures, internal links, and content quality for target keywords. Ensuring each page clearly communicates its topic to both users and search engines.' },
      { icon: 'PenTool', title: 'Content Planning and Briefs', description: 'Creating content briefs based on keyword research, competitive analysis, and search intent. Defining what each piece of content needs to cover, the target keywords, and the internal linking requirements.' },
      { icon: 'Link', title: 'Link Building Execution', description: 'Building backlinks through outreach, digital PR, guest posting, and content partnerships. Identifying link opportunities, conducting outreach, and tracking acquisition progress against targets.' },
      { icon: 'BarChart3', title: 'Rank Tracking and Reporting', description: 'Monitoring keyword rankings, organic traffic trends, and conversion performance. Building reports that show progress over time and identify areas that need attention or strategy adjustments.' },
      { icon: 'Users', title: 'Competitor Analysis', description: 'Analyzing what competitors rank for, where their backlinks come from, and what content strategies they use. Identifying gaps and opportunities to gain competitive advantage in organic search.' },
    ],
    featuresDescription: 'An SEO specialist handles the tactical execution that drives organic growth.',

    approachContent: `My approach to SEO execution is systematic. I start with keyword research to understand what people are searching for and how competitive those terms are. Then I map those keywords to pages, either existing or planned, ensuring there is a clear one to one relationship between each target keyword and a specific page. Keyword cannibalization, where multiple pages compete for the same term, is one of the most common problems I find and fix.

On page optimization is where many SEO specialists stop, but I see it as just the starting point. Good title tags and meta descriptions matter, but they are not enough on their own. The content itself needs to genuinely satisfy the search intent behind the keyword. I evaluate content against what currently ranks, identify gaps, and make specific recommendations for improvement.

I use [Google Search Console](/google-search-console) for monitoring actual search performance, [Ahrefs](/ahrefs) for backlink analysis and keyword research, and [Semrush](/semrush) for competitive intelligence. The specific tools matter less than the ability to extract actionable insights from them and turn those insights into measurable improvements.

Link building is the area of [SEO](/seo) where quality matters most. I focus on acquiring links from relevant, authoritative websites rather than pursuing volume. One link from a strong, relevant site is worth more than dozens of links from low quality directories or unrelated blogs. I approach link building as relationship building, creating content worth linking to and reaching out to people who would genuinely find it useful.

The SEO specialist role is more execution focused than an [SEO manager](/seo-manager) or [senior SEO manager](/senior-seo-manager). I spend most of my time doing the actual work rather than managing teams or presenting to stakeholders. This depth of execution experience gives me practical knowledge that informs better strategic decisions when I do work at a more strategic level.`,

    processSteps: [
      { icon: 'Search', title: 'Research and Analysis', description: 'Deep keyword research combined with competitor analysis and content gap identification. Build a complete picture of the search landscape for the target market before making any optimization decisions.' },
      { icon: 'FileText', title: 'Optimize Existing Content', description: 'Improve existing pages through better title tags, heading structures, content depth, internal linking, and keyword targeting. Quick wins from on page optimization often produce measurable results within weeks.' },
      { icon: 'PenTool', title: 'Create New Content', description: 'Develop new content targeting identified keyword gaps. Write detailed content briefs, coordinate with writers, and ensure published content meets quality and optimization standards.' },
      { icon: 'Link', title: 'Build Links and Authority', description: 'Execute link building campaigns through outreach, digital PR, and content promotion. Focus on acquiring relevant, high quality links that build topical authority in the target area.' },
    ],
    processDescription: 'SEO execution follows a structured process from research through optimization, content creation, and link building.',

    faqItems: [
      { question: 'What is the difference between an SEO specialist and an SEO manager?', answer: 'An SEO specialist is primarily an executor. The role focuses on doing the hands on work: keyword research, on page optimization, content briefs, and link building. An SEO manager covers all of that but also includes strategy, team management, stakeholder communication, and budget oversight. In smaller companies, one person does both. In larger organizations, specialists focus on execution while managers handle the strategic and organizational aspects.' },
      { question: 'What qualifications does an SEO specialist need?', answer: 'Formal qualifications matter less than practical skills and demonstrable results. The most important skills are keyword research methodology, on page optimization knowledge, content evaluation ability, basic HTML understanding, and proficiency with SEO tools like Google Search Console, Ahrefs, and Semrush. Analytical thinking and attention to detail are equally important. Many strong SEO specialists are self taught through practice and continuous learning.' },
      { question: 'How long does it take to see results from SEO work?', answer: 'It depends on the type of work. Technical fixes can show results within days if they resolve critical crawling or indexation issues. On page optimization improvements typically take four to eight weeks to fully impact rankings. New content takes three to six months to mature in search results. Link building has a gradual, compounding effect over months. The key is setting realistic expectations and tracking leading indicators like impressions and click through rate alongside lagging indicators like traffic and revenue.' },
      { question: 'Is link building still important for SEO?', answer: 'Yes. Links remain one of the strongest ranking factors. But the approach has evolved. Search engines have gotten much better at identifying and ignoring low quality or manipulative links. What works now is earning links through genuinely useful content, digital PR, and building real relationships within your industry. I focus on link quality and relevance over volume, which produces more sustainable results and carries no risk of penalties.' },
      { question: 'Can an SEO specialist also handle paid search?', answer: 'Some can, but the roles require different daily workflows and skill sets. SEO is about long term organic visibility through content and technical optimization. Paid search is about managing budgets, bidding strategies, and ad creative in real time. Understanding both is valuable for coordinating search strategy, but specializing in one produces better results than spreading attention too thin across both.' },
    ],

    relatedCards: [
      { title: 'SEO', description: 'My broader organic search expertise.', href: '/seo' },
      { title: 'SEO Manager', description: 'Full program SEO management.', href: '/seo-manager' },
      { title: 'Senior SEO Manager', description: 'Strategic SEO leadership.', href: '/senior-seo-manager' },
      { title: 'Technical SEO Specialist', description: 'Deep technical optimization.', href: '/technical-seo-specialist' },
      { title: 'Organic Growth Manager', description: 'Broader organic growth.', href: '/organic-growth-manager' },
      { title: 'Google Search Console', description: 'SEO monitoring tool.', href: '/google-search-console' },
      { title: 'Ahrefs', description: 'SEO research and analysis.', href: '/ahrefs' },
      { title: 'Semrush', description: 'Competitive analysis platform.', href: '/semrush' },
    ],
    ctaHeading: 'Looking for an SEO Specialist?',
    ctaDescription: 'If you need hands on SEO execution to improve your organic search performance, feel free to reach out.',
    ctaColor: '#16a34a',
    links: {
      siblings: ['seo-manager', 'senior-seo-manager', 'technical-seo-specialist', 'organic-growth-manager'],
      tools: ['google-search-console', 'ahrefs', 'semrush', 'screaming-frog', 'technical-seo'],
      topics: ['what-is-seo', 'technical-seo-explained', 'technical-seo-approach', 'website-performance-optimization'],
      relatedTopics: ['seo', 'seo-manager', 'senior-seo-manager', 'technical-seo-specialist', 'organic-growth-manager', 'google-search-console', 'ahrefs', 'semrush'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 4. ORGANIC GROWTH MANAGER
  // Positioning: Mid level, broader organic growth beyond SEO, content + community + partnerships
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'organic-growth-manager',
    title: 'Organic Growth Manager',
    seoTitle: 'Organic Growth Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach organic growth management: combining SEO, content marketing, community building, and partnerships to drive sustainable growth without paid media dependency.',
    parentHub: 'seo',
    circleColor: '#059669',
    heroContent: `An organic growth manager drives sustainable business growth through channels that do not require ongoing advertising spend. The role combines [SEO](/seo), content marketing, community building, partnerships, and sometimes referral programs into a cohesive strategy. Unlike an [SEO manager](/seo-manager) who focuses primarily on search engine optimization, an organic growth manager takes a broader view of all non paid growth levers.

This page explains how I approach organic growth, what makes it different from SEO management, and how organic channels can reduce a company's dependency on paid acquisition over time.`,

    features: [
      { icon: 'TrendingUp', title: 'Organic Channel Strategy', description: 'Identifying and prioritizing the organic channels that have the highest potential for the specific business: search, content, social, email, referrals, partnerships, or community. Not every organic channel works for every business. The strategy should focus resources on what actually drives results.' },
      { icon: 'FileText', title: 'Content Led Growth', description: 'Building content programs that attract qualified traffic and convert visitors into customers or leads. This goes beyond blog posts to include tools, templates, guides, comparison pages, and any content format that addresses what potential customers are actually searching for.' },
      { icon: 'Search', title: 'SEO as a Growth Foundation', description: 'Using organic search as the primary discovery channel for content. Keyword research, on page optimization, technical SEO, and link building remain core skills but are applied within the context of a broader growth strategy.' },
      { icon: 'Users', title: 'Community and Partnerships', description: 'Building relationships with industry communities, complementary businesses, and influencers that create sustainable referral traffic. These channels take longer to build but often produce the highest quality leads with the lowest acquisition cost.' },
      { icon: 'Mail', title: 'Email and Owned Channels', description: 'Growing and nurturing an email list as an owned audience that does not depend on algorithm changes or platform policies. Building email programs that drive repeat engagement and conversions over time.' },
      { icon: 'BarChart3', title: 'Organic Attribution and Measurement', description: 'Tracking the contribution of organic channels to business outcomes. Understanding how organic touchpoints influence the customer journey even when they are not the last click before conversion.' },
    ],
    featuresDescription: 'Organic growth management spans multiple non paid channels with a focus on sustainable, compounding results.',

    approachContent: `My approach to organic growth starts with understanding which channels have the highest potential for the specific business. Not every company should invest heavily in SEO. Not every company needs a community strategy. The right organic growth plan depends on the target audience, the product, the competitive landscape, and the resources available.

I have a strong foundation in [SEO](/seo), which is typically the highest volume organic channel. I use tools like [Google Search Console](/google-search-console), [Ahrefs](/ahrefs), and [Semrush](/semrush) to research opportunities, track performance, and optimize content. But I also look beyond search to identify organic channels that competitors are not fully exploiting.

Content is the connective tissue of most organic growth strategies. I focus on creating content that serves a specific purpose in the customer journey rather than producing content for volume. Each piece should either attract new visitors, educate potential customers, or support existing customers. Content without a clear purpose wastes resources and dilutes the overall quality of the site.

What makes the organic growth manager role distinct from an [SEO specialist](/seo-specialist) or [SEO manager](/seo-manager) is the breadth of channels and the focus on sustainability. Organic growth compounds over time. A blog post published today can generate traffic for years. An email list built this quarter generates revenue next quarter and beyond. A community relationship established now produces referrals indefinitely. This compounding effect is the fundamental advantage of organic over paid acquisition.

I also believe strongly in reducing paid media dependency as a strategic objective. Companies that rely entirely on paid channels for growth are vulnerable to rising costs, algorithm changes, and competitive pressure. Building organic channels creates a more resilient growth engine. That does not mean eliminating paid media, but rather building a balanced portfolio where organic channels contribute a meaningful share of acquisition.`,

    processSteps: [
      { icon: 'Telescope', title: 'Channel Assessment', description: 'Evaluate all potential organic channels for the business. Assess current organic performance, competitive landscape, audience behavior, and resource constraints. Identify the two or three channels with the highest potential impact and focus resources there.' },
      { icon: 'FileText', title: 'Content and SEO Foundation', description: 'Build the content and SEO infrastructure needed for organic discovery. This includes keyword targeted content, technical SEO foundations, and the publishing processes needed to sustain consistent output over time.' },
      { icon: 'Users', title: 'Distribution and Relationships', description: 'Develop distribution channels beyond search including email lists, community engagement, partnerships, and social presence. These channels amplify content reach and create direct relationships with the audience.' },
      { icon: 'TrendingUp', title: 'Measure and Compound', description: 'Track organic growth metrics across all channels, identify what is working, and double down on successful strategies. Organic growth is a long game. Consistent effort over months produces compounding results that paid channels cannot replicate.' },
    ],
    processDescription: 'Organic growth management follows a strategic approach focused on building sustainable, compounding growth.',

    faqItems: [
      { question: 'What is the difference between an organic growth manager and an SEO manager?', answer: 'An SEO manager focuses specifically on organic search engine optimization: rankings, traffic from Google and Bing, technical SEO, and link building. An organic growth manager takes a broader view that includes SEO but also encompasses content marketing, email marketing, community building, partnerships, and other non paid growth channels. The organic growth manager role is about growing the business through any channel that does not require ongoing advertising spend.' },
      { question: 'How long does organic growth take to show results?', answer: 'Organic growth typically shows meaningful results within three to six months, with compounding returns over one to two years. SEO improvements can take a few weeks to a few months depending on the specific changes. Content marketing requires several months of consistent publishing before traffic reaches meaningful levels. Email lists and community channels grow gradually but accelerate over time. The key advantage of organic growth is that results compound, unlike paid channels where performance resets when you stop spending.' },
      { question: 'Does an organic growth manager replace the need for paid marketing?', answer: 'Not usually, especially in the short term. Organic growth takes time to build momentum. Paid channels provide immediate results while organic channels ramp up. The ideal scenario is a balanced portfolio where paid channels drive near term growth while organic channels build long term sustainability. Over time, as organic channels mature, the business becomes less dependent on paid acquisition, which improves overall unit economics and resilience.' },
      { question: 'What metrics does an organic growth manager track?', answer: 'The primary metrics are organic traffic by channel, organic conversion rate, customer acquisition cost from organic sources, and the percentage of total revenue attributable to organic channels. I also track leading indicators like keyword rankings, content publication velocity, email list growth rate, and referral traffic trends. The goal is always to connect organic activity to business outcomes, not just traffic or engagement metrics.' },
    ],

    relatedCards: [
      { title: 'SEO', description: 'Core organic search optimization.', href: '/seo' },
      { title: 'SEO Manager', description: 'Focused organic search management.', href: '/seo-manager' },
      { title: 'Senior SEO Manager', description: 'Strategic SEO leadership.', href: '/senior-seo-manager' },
      { title: 'Technical SEO Specialist', description: 'Technical search optimization.', href: '/technical-seo-specialist' },
      { title: 'SEO Specialist', description: 'Hands on SEO execution.', href: '/seo-specialist' },
      { title: 'Google Search Console', description: 'Organic search monitoring.', href: '/google-search-console' },
      { title: 'Ahrefs', description: 'SEO and content research.', href: '/ahrefs' },
      { title: 'Semrush', description: 'Competitive intelligence.', href: '/semrush' },
    ],
    ctaHeading: 'Looking for an Organic Growth Manager?',
    ctaDescription: 'If you want to build sustainable growth channels that reduce paid media dependency, feel free to reach out.',
    ctaColor: '#059669',
    links: {
      siblings: ['seo-manager', 'senior-seo-manager', 'technical-seo-specialist', 'seo-specialist'],
      tools: ['google-search-console', 'ahrefs', 'semrush', 'screaming-frog', 'technical-seo'],
      topics: ['what-is-seo', 'technical-seo-explained', 'technical-seo-approach', 'website-performance-optimization'],
      relatedTopics: ['seo', 'seo-manager', 'senior-seo-manager', 'technical-seo-specialist', 'seo-specialist', 'google-search-console', 'ahrefs', 'semrush'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 5. MARKETING TECHNOLOGY MANAGER
  // Positioning: Mid level, martech stack, integrations, data infrastructure
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'marketing-technology-manager',
    title: 'Marketing Technology Manager',
    seoTitle: 'Marketing Technology Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach marketing technology management: building martech stacks, managing data infrastructure, and connecting marketing tools to business outcomes.',
    parentHub: 'marketing-technology',
    circleColor: '#8b5cf6',
    heroContent: `A marketing technology manager is responsible for selecting, implementing, and maintaining the technology stack that powers a company's marketing operations. The role sits at the intersection of marketing and technology, requiring both domain knowledge of how marketing teams work and technical skills to evaluate, integrate, and optimize tools.

This page explains how I approach [marketing technology](/marketing-technology) management, what the role involves, and how a well managed martech stack enables better marketing execution and measurement.`,

    features: [
      { icon: 'Layers', title: 'Martech Stack Architecture', description: 'Evaluating, selecting, and integrating marketing technology tools into a cohesive stack. Understanding how tools connect through APIs, data flows, and integration platforms. Avoiding tool sprawl while ensuring the team has what it needs.' },
      { icon: 'Database', title: 'Data Infrastructure', description: 'Building the data pipelines that connect marketing tools to analytics platforms and business intelligence systems. Ensuring marketing data flows reliably from collection to storage to reporting.' },
      { icon: 'Code', title: 'Tag Management and Tracking', description: 'Implementing and maintaining tracking through Google Tag Manager, server side tracking solutions, and custom integrations. Ensuring data collection is accurate, compliant with privacy regulations, and complete.' },
      { icon: 'BarChart3', title: 'Analytics and Reporting Systems', description: 'Setting up Google Analytics 4, building Looker Studio dashboards, and creating reporting infrastructure that gives marketing teams reliable, actionable data for decision making.' },
      { icon: 'RefreshCw', title: 'Marketing Automation', description: 'Implementing and optimizing marketing automation platforms for email workflows, lead scoring, nurturing sequences, and customer lifecycle management. Connecting automation to CRM systems and sales processes.' },
      { icon: 'Shield', title: 'Privacy and Compliance', description: 'Ensuring all marketing technology complies with GDPR, CCPA, and other privacy regulations. Managing consent platforms, data processing agreements, and data retention policies across the martech stack.' },
    ],
    featuresDescription: 'Marketing technology management covers the tools, data, and systems that power modern marketing.',

    approachContent: `My approach to marketing technology management starts with understanding what the marketing team actually needs to do their jobs well. Too many companies accumulate martech tools without a clear plan, leading to overlapping functionality, poor data flow, and wasted budget. I start by auditing the existing stack, identifying gaps and redundancies, and building a rationalized architecture that serves real business needs.

I work extensively with tools like [Google Tag Manager](/google-tag-manager), [Google Analytics 4](/google-analytics-4), [BigQuery](/bigquery), and [Looker Studio](/looker-studio) to build the measurement and reporting layer that marketing teams depend on. Getting this layer right is critical because every marketing decision is only as good as the data it is based on. If tracking is incomplete, attribution is flawed, or reports are inaccurate, the entire marketing operation makes suboptimal decisions.

Data infrastructure is the area where I add the most value. Many marketing teams have excellent tools but poor data connections between them. Customer data sits in the CRM but is not available for ad targeting. Campaign results are tracked in platform dashboards but are not connected to revenue in the BI system. Email engagement data is not used to inform paid media audiences. Solving these data flow problems through proper integrations, [SQL](/sql-for-marketing) queries, and ETL processes unlocks significantly better marketing performance.

The marketing technology manager role is different from a [marketing analytics manager](/marketing-analytics-manager) in that it covers the full stack, not just the analytics layer. I manage the tools, the integrations, the data flows, and the technical implementations. The analytics manager typically focuses on interpreting data and producing insights. Both roles are essential, and in smaller organizations, one person often handles both.

Privacy compliance is a growing part of the role. With GDPR enforcement becoming stricter and third party cookies disappearing, the martech stack needs to support [server side tracking](/server-side-tracking-explained), first party data strategies, and proper consent management. I ensure all implementations meet regulatory requirements without sacrificing the data quality that marketers need.`,

    processSteps: [
      { icon: 'Search', title: 'Stack Audit', description: 'Review all existing marketing technology tools, their usage, costs, integrations, and data flows. Identify redundancies, gaps, and data quality issues. Map how data moves from collection through to reporting and decision making.' },
      { icon: 'Layout', title: 'Architecture Design', description: 'Design the target martech architecture based on business needs, budget constraints, and team capabilities. Prioritize integrations that solve the most impactful data flow problems. Create a migration plan for tools that need to be added, replaced, or removed.' },
      { icon: 'Wrench', title: 'Implementation', description: 'Implement new tools, build integrations, configure tracking, and set up reporting. Work with vendors, developers, and marketing team members to ensure implementations meet specifications and data flows correctly.' },
      { icon: 'Gauge', title: 'Optimization and Maintenance', description: 'Monitor tool performance, data quality, and integration health. Continuously optimize the stack as business needs evolve, new tools become available, and privacy requirements change. Maintain documentation so the team can use tools effectively.' },
    ],
    processDescription: 'Marketing technology management follows a cycle of auditing, designing, implementing, and optimizing.',

    faqItems: [
      { question: 'What is the difference between a marketing technology manager and a marketing analytics manager?', answer: 'A marketing technology manager is responsible for the tools and systems: selecting them, integrating them, maintaining them, and ensuring data flows correctly between them. A marketing analytics manager focuses on analyzing the data those tools produce and turning it into actionable insights. The technology manager builds the infrastructure. The analytics manager uses that infrastructure to drive decisions. In smaller companies, one person often handles both responsibilities.' },
      { question: 'What technical skills does a marketing technology manager need?', answer: 'Proficiency with tag management systems like Google Tag Manager, understanding of web analytics platforms like GA4, basic SQL for querying data, familiarity with APIs and integration patterns, and knowledge of privacy and consent management. You do not need to be a full software engineer, but you need enough technical depth to evaluate tools, write tracking specifications, troubleshoot data issues, and communicate effectively with developers.' },
      { question: 'How do you evaluate whether a new marketing tool is worth adding?', answer: 'I evaluate new tools against four criteria: does it solve a real problem that the team currently has, does it integrate with the existing stack without creating data silos, is the total cost of ownership justified by the expected impact, and does the team have the capacity to adopt and use it effectively. Most tool purchases fail not because the tool is bad, but because the team does not have the bandwidth to implement and use it properly.' },
      { question: 'How important is server side tracking versus client side tracking?', answer: 'Server side tracking is becoming increasingly important as browsers restrict third party cookies and ad blockers become more prevalent. Client side tracking through browser tags is being degraded by privacy changes. Server side tracking sends data directly from the server, bypassing these restrictions. I recommend a hybrid approach: client side for basic analytics and consent management, server side for conversion tracking and audience data that needs to be reliable for marketing optimization.' },
      { question: 'What does a typical martech stack look like?', answer: 'A typical mid market stack includes analytics (Google Analytics 4), tag management (Google Tag Manager), CRM (HubSpot or Salesforce), email marketing and automation (integrated into the CRM or standalone), a BI or dashboard tool (Looker Studio or Tableau), and various advertising platforms with their tracking pixels. The specific tools vary, but the architecture follows a similar pattern: data collection, data storage and processing, and data activation and reporting.' },
    ],

    relatedCards: [
      { title: 'Marketing Technology', description: 'My broader martech expertise.', href: '/marketing-technology' },
      { title: 'Marketing Analytics Manager', description: 'Data analysis and insights.', href: '/marketing-analytics-manager' },
      { title: 'Marketing Automation Manager', description: 'Automation platform management.', href: '/marketing-automation-manager' },
      { title: 'Google Tag Manager', description: 'Tag management platform.', href: '/google-tag-manager' },
      { title: 'Google Analytics 4', description: 'Web analytics platform.', href: '/google-analytics-4' },
      { title: 'BigQuery', description: 'Data warehouse for marketing.', href: '/bigquery' },
      { title: 'Looker Studio', description: 'Dashboard and reporting.', href: '/looker-studio' },
      { title: 'SQL for Marketing', description: 'Data querying for marketers.', href: '/sql-for-marketing' },
    ],
    ctaHeading: 'Looking for a Marketing Technology Manager?',
    ctaDescription: 'If you need someone to build, optimize, or manage your marketing technology stack, feel free to reach out.',
    ctaColor: '#8b5cf6',
    links: {
      siblings: ['marketing-analytics-manager', 'marketing-automation-manager', 'marketing-operations-manager', 'crm-marketing-manager'],
      tools: ['google-tag-manager', 'google-analytics-4', 'bigquery', 'sql-for-marketing', 'looker-studio'],
      topics: ['what-is-marketing-technology', 'server-side-tracking-explained', 'marketing-technology-stack', 'data-driven-marketing'],
      relatedTopics: ['marketing-technology', 'marketing-analytics-manager', 'marketing-automation-manager', 'marketing-operations-manager', 'crm-marketing-manager', 'google-tag-manager', 'google-analytics-4', 'bigquery'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 6. MARKETING ANALYTICS MANAGER
  // Positioning: Mid level, data analysis, insights, BI, measurement
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'marketing-analytics-manager',
    title: 'Marketing Analytics Manager',
    seoTitle: 'Marketing Analytics Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach marketing analytics: data analysis, attribution modeling, dashboard development, and turning marketing data into actionable business insights.',
    parentHub: 'marketing-technology',
    circleColor: '#7c3aed',
    heroContent: `A marketing analytics manager turns marketing data into business insights. The role is about understanding what is working, what is not, and why. While a [marketing technology manager](/marketing-technology-manager) builds and maintains the tools and data infrastructure, the analytics manager focuses on interpreting the data those systems produce and guiding better marketing decisions.

This page explains how I approach marketing analytics, what skills the role requires, and how proper analytics connects marketing activity to business outcomes.`,

    features: [
      { icon: 'BarChart3', title: 'Performance Analysis', description: 'Analyzing marketing performance across all channels to identify trends, anomalies, and optimization opportunities. Going beyond surface level metrics to understand the drivers behind results and their business implications.' },
      { icon: 'GitBranch', title: 'Attribution Modeling', description: 'Building and maintaining attribution models that fairly credit marketing touchpoints for conversions. Understanding the limitations of different attribution approaches and choosing the right model for the business context.' },
      { icon: 'LineChart', title: 'Dashboard Development', description: 'Creating dashboards in Looker Studio, Tableau, or similar tools that give stakeholders the information they need for decision making. Good dashboards answer specific questions rather than displaying every available metric.' },
      { icon: 'Database', title: 'Data Querying and Manipulation', description: 'Writing SQL queries to extract, transform, and analyze marketing data from data warehouses like BigQuery. Joining data from multiple sources to create unified views of marketing performance.' },
      { icon: 'TestTube', title: 'Experimentation Analysis', description: 'Designing experiments, calculating required sample sizes, analyzing results with statistical rigor, and determining when results are significant enough to act on. Helping marketing teams make evidence based decisions.' },
      { icon: 'PieChart', title: 'Budget and Forecasting', description: 'Using historical data to forecast marketing performance at different budget levels, model scenarios for budget reallocation, and support investment decisions with data backed projections.' },
    ],
    featuresDescription: 'Marketing analytics combines data skills with marketing domain knowledge to drive better decisions.',

    approachContent: `My approach to marketing analytics is to focus on the questions that matter to the business rather than producing reports for their own sake. Every dashboard, analysis, and report should help someone make a better decision. If it does not, it is wasted effort.

I work with tools like [Google Analytics 4](/google-analytics-4), [BigQuery](/bigquery), [Looker Studio](/looker-studio), and [SQL](/sql-for-marketing) to build the analytics infrastructure that marketers depend on. Getting the data foundation right is critical. Inaccurate data leads to bad decisions, and bad decisions at scale waste significant budget.

Attribution is the area of marketing analytics that has the biggest impact on budget allocation. Understanding [how attribution works](/attribution-modeling-explained) and where different models break down is essential for making fair budget decisions across channels. I have seen companies dramatically over invest in channels that appear to drive conversions but are actually getting credit for organic demand. Fixing attribution errors often unlocks more value than any campaign optimization.

What makes the marketing analytics manager role different from a [marketing technology manager](/marketing-technology-manager) is the focus on interpretation rather than infrastructure. The technology manager ensures data is collected and flows correctly. The analytics manager ensures data is understood and acted on correctly. Both roles require technical skills, but the analytics role leans more toward statistical thinking, business context, and communication of insights to non technical stakeholders.

I also place strong emphasis on making analytics accessible to the marketing team rather than creating a bottleneck where every question requires an analyst to answer. Self service dashboards, well documented data definitions, and training marketing team members on basic data exploration all help the organization become more data driven without creating dependency on a single analytics person. Building this data literacy across [marketing technology](/marketing-technology) teams is one of the most impactful things an analytics manager can do.`,

    processSteps: [
      { icon: 'Search', title: 'Understand the Questions', description: 'Start by identifying what business questions need answering. Work with marketing leadership and channel managers to understand their decision making needs. The best analytics work starts with clear questions, not with data exploration.' },
      { icon: 'Database', title: 'Build the Data Foundation', description: 'Ensure data is being collected correctly, stored in accessible formats, and connected across sources. Write SQL queries and build data models that make recurring analyses efficient and reproducible.' },
      { icon: 'LineChart', title: 'Analyze and Visualize', description: 'Conduct analysis to answer the identified questions. Build dashboards that present insights clearly and update automatically. Focus on actionable metrics that drive decisions rather than comprehensive data dumps.' },
      { icon: 'MessageSquare', title: 'Communicate and Influence', description: 'Present findings in language that non technical stakeholders understand. Make clear recommendations based on the data. Follow up to ensure insights are actually acted on and measure the impact of data driven decisions.' },
    ],
    processDescription: 'Marketing analytics follows a structured approach from question definition through analysis to action.',

    faqItems: [
      { question: 'What technical skills does a marketing analytics manager need?', answer: 'SQL is essential for querying data from warehouses and databases. Proficiency with a BI tool like Looker Studio or Tableau is important for dashboard creation. Understanding of Google Analytics 4 and its data model is standard. Basic statistical knowledge for experiment analysis and significance testing is valuable. Some marketing analytics managers also use Python or R for more advanced analysis, but SQL and BI tools cover most daily needs.' },
      { question: 'What is the difference between marketing analytics and business intelligence?', answer: 'Marketing analytics focuses specifically on marketing data and marketing decisions. Business intelligence covers the entire business including finance, operations, sales, and product. In practice, a marketing analytics manager often pulls data from multiple business systems to create a complete picture of how marketing impacts business outcomes. The skills overlap significantly, but marketing analytics requires deep domain knowledge of marketing channels, attribution, and customer journeys.' },
      { question: 'How does a marketing analytics manager handle attribution in a multi touch world?', answer: 'No single attribution model is perfect. I typically use a combination of approaches: platform reported attribution for channel level optimization, multi touch attribution models for cross channel analysis, and incrementality testing for validating the true impact of specific channels or campaigns. The key is being transparent about the limitations of each approach and not over relying on any single model for budget decisions.' },
      { question: 'How do you make analytics useful for non technical marketers?', answer: 'Self service dashboards with clear labels and intuitive navigation are the starting point. I also invest time in training marketing team members on basic data exploration and interpretation. Creating a shared data dictionary so everyone uses the same definitions for metrics like conversion, lead, and revenue helps avoid confusion. The goal is to make data accessible enough that the analytics team can focus on complex analysis rather than answering basic reporting questions repeatedly.' },
    ],

    relatedCards: [
      { title: 'Marketing Technology', description: 'Broader martech expertise.', href: '/marketing-technology' },
      { title: 'Marketing Technology Manager', description: 'Martech stack management.', href: '/marketing-technology-manager' },
      { title: 'Marketing Automation Manager', description: 'Automation platforms.', href: '/marketing-automation-manager' },
      { title: 'Google Analytics 4', description: 'Web analytics platform.', href: '/google-analytics-4' },
      { title: 'BigQuery', description: 'Data warehouse.', href: '/bigquery' },
      { title: 'Looker Studio', description: 'Dashboard and reporting.', href: '/looker-studio' },
      { title: 'SQL for Marketing', description: 'Data querying skills.', href: '/sql-for-marketing' },
      { title: 'Attribution Modeling Explained', description: 'How attribution works.', href: '/attribution-modeling-explained' },
    ],
    ctaHeading: 'Looking for a Marketing Analytics Manager?',
    ctaDescription: 'If you need someone to turn your marketing data into actionable business insights, feel free to reach out.',
    ctaColor: '#7c3aed',
    links: {
      siblings: ['marketing-technology-manager', 'marketing-automation-manager', 'marketing-operations-manager', 'crm-marketing-manager'],
      tools: ['google-tag-manager', 'google-analytics-4', 'bigquery', 'sql-for-marketing', 'looker-studio'],
      topics: ['what-is-marketing-technology', 'server-side-tracking-explained', 'marketing-technology-stack', 'data-driven-marketing'],
      relatedTopics: ['marketing-technology', 'marketing-technology-manager', 'marketing-automation-manager', 'marketing-operations-manager', 'crm-marketing-manager', 'google-tag-manager', 'google-analytics-4', 'bigquery'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 7. HEAD OF MARKETING
  // Positioning: Director level, full marketing function, brand + performance + ops
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'head-of-marketing',
    title: 'Head of Marketing',
    seoTitle: 'Head of Marketing | Alexander Kropivnitski',
    seoDescription: 'How I approach the Head of Marketing role: leading the full marketing function including brand, performance, content, and operations with measurable business impact.',
    parentHub: 'performance-marketing',
    circleColor: '#dc2626',
    heroContent: `The Head of Marketing leads the entire marketing function for a company. Unlike a [Head of Growth](/head-of-growth) who focuses specifically on acquisition and revenue growth, or a [Director of Digital Marketing](/director-of-digital-marketing) who manages online channels, the Head of Marketing owns the full scope: brand, [performance marketing](/performance-marketing), content, communications, events, and marketing operations.

This page explains how I approach marketing leadership, what the role involves, and how I balance brand building with measurable performance outcomes.`,

    features: [
      { icon: 'Compass', title: 'Marketing Strategy', description: 'Setting the overall marketing strategy aligned with business goals, market positioning, and competitive dynamics. Defining target audiences, value propositions, channel mix, and investment priorities across the full marketing function.' },
      { icon: 'Users', title: 'Team Building and Management', description: 'Hiring, developing, and leading a marketing team across multiple disciplines: performance, content, brand, and operations. Building the right team structure for the company stage and ensuring each team member has clear goals and growth paths.' },
      { icon: 'DollarSign', title: 'Budget Ownership', description: 'Managing the total marketing budget including headcount, tools, media spend, and program costs. Making allocation decisions across brand and performance activities based on business priorities and expected returns.' },
      { icon: 'TrendingUp', title: 'Revenue Accountability', description: 'Owning marketing sourced pipeline and revenue targets. Connecting all marketing activities to business outcomes and reporting results to the executive team and board in business terms.' },
      { icon: 'Megaphone', title: 'Brand and Positioning', description: 'Defining and maintaining the company brand, messaging framework, and market positioning. Ensuring consistency across all marketing touchpoints while adapting messaging for different audiences and channels.' },
      { icon: 'GitBranch', title: 'Cross Functional Leadership', description: 'Working with sales, product, finance, and executive leadership to align marketing with broader company priorities. Bridging the gap between marketing activities and business outcomes across departments.' },
    ],
    featuresDescription: 'The Head of Marketing owns the full marketing function from strategy to execution to measurement.',

    approachContent: `My approach to marketing leadership starts with understanding the business deeply. Marketing strategy should be derived from business strategy, not the other way around. Before building a marketing plan, I need to understand the revenue targets, competitive landscape, product roadmap, sales process, and customer journey.

I come from a [performance marketing](/performance-marketing) background, which gives me a strong analytical foundation. I apply that rigor to all marketing decisions, including brand investments that are traditionally harder to measure. While not everything can be attributed to a specific click, every marketing initiative should have a clear hypothesis about how it contributes to business outcomes.

Building the right team is the most impactful decision a Head of Marketing makes. I focus on hiring people who are strong in their specific disciplines, whether that is [Google Ads](/google-ads), [SEO](/seo), content, or brand, and building a culture where collaboration across those disciplines happens naturally.

What distinguishes the Head of Marketing from a [Head of Growth](/head-of-growth) or [Director of Growth](/director-of-growth) is scope. Growth roles focus on acquisition and revenue optimization through data driven experimentation. The Head of Marketing covers that plus brand, communications, events, partnerships, and sometimes PR. The role requires balancing short term performance metrics with long term brand building, which creates a natural tension that requires careful management.

I also place strong emphasis on [marketing technology](/marketing-technology) as an enabler. A well built martech stack with proper tracking and [attribution](/attribution-modeling-explained) allows the team to make better decisions faster. Investing in measurement infrastructure early pays dividends across every other marketing initiative. Without good data, marketing leadership is guesswork. With good data, it is a strategic advantage.`,

    processSteps: [
      { icon: 'Telescope', title: 'Business and Market Assessment', description: 'Understand the business goals, competitive landscape, customer segments, and sales process. Assess the current marketing team, tools, and performance baseline. Identify the biggest gaps and opportunities.' },
      { icon: 'Map', title: 'Strategy and Planning', description: 'Build a marketing strategy that aligns with business objectives. Define channel priorities, budget allocation, team structure, and success metrics. Present the plan to leadership with clear expected outcomes and investment requirements.' },
      { icon: 'Users', title: 'Team and Execution', description: 'Build or restructure the marketing team to match the strategy. Establish clear goals, processes, and accountability for each team member and function. Remove blockers and ensure the team has the resources to execute.' },
      { icon: 'BarChart3', title: 'Measure and Report', description: 'Track marketing performance against business targets. Report results to the executive team in business terms. Adjust strategy based on results and changing business needs. Build trust through consistent, transparent communication.' },
    ],
    processDescription: 'Marketing leadership requires balancing strategic planning with team management and measurable execution.',

    faqItems: [
      { question: 'What is the difference between a Head of Marketing and a CMO?', answer: 'The difference is primarily about company stage and scope. A CMO is typically a C level executive at a larger company with a large team and significant budget, often sitting on the executive committee. A Head of Marketing performs a similar function at a smaller company or as a senior leader reporting to the CEO. In practice, the responsibilities overlap significantly. The Head of Marketing role is common at startups and mid market companies that need marketing leadership but may not have the scale or budget for a full C suite position.' },
      { question: 'How does a Head of Marketing balance brand and performance?', answer: 'This is one of the hardest parts of the role. Performance marketing delivers measurable short term results. Brand building creates long term value but is harder to measure. I approach this by allocating budget across both with clear expectations for each. Performance spend is measured by ROI and customer acquisition cost. Brand spend is measured by awareness, consideration, and share of voice metrics, with a longer evaluation timeline. Both are necessary for sustainable growth.' },
      { question: 'What background is best for becoming a Head of Marketing?', answer: 'Strong Heads of Marketing come from various backgrounds: performance marketing, brand marketing, product marketing, or content marketing. The key is having depth in at least one area plus breadth across the others. In my case, performance marketing and marketing technology provide the analytical foundation, and I have developed brand and content skills over time. What matters most is the ability to think strategically, build teams, and connect marketing to business outcomes.' },
      { question: 'How does a Head of Marketing work with the sales team?', answer: 'Closely and continuously. Marketing and sales alignment is critical for business success. I establish shared metrics like marketing qualified leads, sales accepted leads, and pipeline contribution. Regular meetings between marketing and sales leadership ensure feedback flows in both directions. Marketing needs to understand which leads convert and why. Sales needs to understand the positioning and messaging that marketing is using in the market.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition strategy.', href: '/performance-marketing' },
      { title: 'Head of Growth', description: 'Growth focused leadership.', href: '/head-of-growth' },
      { title: 'Director of Growth', description: 'Growth at director level.', href: '/director-of-growth' },
      { title: 'Director of Digital Marketing', description: 'Digital channel leadership.', href: '/director-of-digital-marketing' },
      { title: 'Fractional CMO', description: 'Part time marketing leadership.', href: '/fractional-cmo' },
      { title: 'Google Ads', description: 'Paid search advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Paid social advertising.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising.', href: '/microsoft-ads' },
    ],
    ctaHeading: 'Looking for a Head of Marketing?',
    ctaDescription: 'If you need marketing leadership that combines strategic thinking with analytical rigor and team building, feel free to reach out.',
    ctaColor: '#dc2626',
    links: {
      siblings: ['head-of-growth', 'director-of-growth', 'director-of-digital-marketing', 'small-business-cmo', 'fractional-cmo'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'head-of-growth', 'director-of-growth', 'director-of-digital-marketing', 'small-business-cmo', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 8. HEAD OF PERFORMANCE MARKETING
  // Positioning: Director level, performance-specific leadership, multi-channel paid
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'head-of-performance-marketing',
    title: 'Head of Performance Marketing',
    seoTitle: 'Head of Performance Marketing | Alexander Kropivnitski',
    seoDescription: 'How I approach the Head of Performance Marketing role: leading paid acquisition strategy, building performance teams, and driving measurable revenue growth.',
    parentHub: 'performance-marketing',
    circleColor: '#ea580c',
    heroContent: `The Head of Performance Marketing leads the paid acquisition function at a company. This role focuses exclusively on channels with measurable, direct response outcomes: search, social, display, video, and shopping advertising. Unlike a [Head of Marketing](/head-of-marketing) who covers the full marketing function including brand, the Head of Performance Marketing is singularly focused on driving efficient, scalable customer acquisition through [performance marketing](/performance-marketing) channels.

This page explains how I approach performance marketing leadership and what distinguishes it from other leadership roles like [Head of Growth](/head-of-growth) or [Director of Digital Marketing](/director-of-digital-marketing).`,

    features: [
      { icon: 'Target', title: 'Performance Strategy', description: 'Designing the paid acquisition strategy across all performance channels. Setting channel mix, budget allocation, targeting approach, and performance targets based on business goals and unit economics. Making decisions about where to invest and where to cut.' },
      { icon: 'Users', title: 'Team Leadership', description: 'Building and managing a team of performance marketing specialists across search, social, programmatic, and other paid channels. Creating career paths, establishing quality standards, and developing the next generation of performance marketers.' },
      { icon: 'DollarSign', title: 'Budget and P&L Ownership', description: 'Owning the performance marketing budget and being accountable for the return it generates. Making investment decisions with clear visibility into marginal returns and diminishing returns across channels and campaigns.' },
      { icon: 'BarChart3', title: 'Measurement and Attribution', description: 'Building the measurement infrastructure that the team relies on for decision making. Establishing attribution frameworks, incrementality testing programs, and reporting standards that go beyond platform reported metrics.' },
      { icon: 'Zap', title: 'Testing and Innovation', description: 'Driving a culture of structured experimentation across the team. Evaluating new channels, ad formats, and targeting approaches. Ensuring the team stays current with platform changes and emerging opportunities.' },
      { icon: 'GitBranch', title: 'Executive Communication', description: 'Translating performance marketing results into business language for the executive team and board. Building confidence in the performance marketing investment through clear, honest reporting and strategic recommendations.' },
    ],
    featuresDescription: 'The Head of Performance Marketing leads the paid acquisition function with full accountability for results.',

    approachContent: `My approach to performance marketing leadership is built on measurement first. Before scaling any channel or making any significant budget decision, I ensure the measurement infrastructure is reliable. This means proper tracking, thoughtful [attribution](/attribution-modeling-explained), and a clear understanding of incrementality. Too many performance teams scale spend based on inflated platform numbers without testing whether the spend is actually generating incremental business.

I have led [performance marketing](/performance-marketing) programs across [Google Ads](/google-ads), [Meta Ads](/meta-ads), [Microsoft Ads](/microsoft-ads), and programmatic channels. At the leadership level, the job is less about managing individual campaigns and more about building the systems, processes, and team that produce consistently strong results. A high performing team with clear frameworks will outperform a brilliant individual every time.

Building the right team is where this role has the most impact. I hire for analytical thinking and curiosity rather than just platform certification. Performance marketing changes constantly, and team members who can adapt and learn quickly are more valuable than those who only know the current version of a platform. I also invest in developing team members through structured mentoring and clear career progression.

The Head of Performance Marketing role is more focused than a [Head of Marketing](/head-of-marketing), which covers brand, content, and communications alongside performance. And it is more operationally involved than a [Head of Growth](/head-of-growth), which often includes product growth and retention alongside acquisition. This focus allows for deeper expertise in paid channels and more precise measurement of results.

One area I prioritize is the relationship between performance marketing and the rest of the organization. Performance marketing does not happen in isolation. Creative teams need clear performance data to make better ads. Product teams need acquisition cost data for pricing decisions. Finance needs accurate forecasts for planning. Building these cross functional relationships ensures performance marketing is integrated into the business rather than operating as a separate function.`,

    processSteps: [
      { icon: 'Telescope', title: 'Assessment and Baseline', description: 'Audit the current performance marketing program including channel performance, team capabilities, measurement quality, and competitive position. Establish clear baselines for every key metric so progress can be measured objectively.' },
      { icon: 'Map', title: 'Strategy and Roadmap', description: 'Build the performance marketing strategy including channel priorities, budget allocation, team structure, measurement approach, and testing roadmap. Align the strategy with business revenue targets and customer acquisition goals.' },
      { icon: 'Users', title: 'Team and Systems', description: 'Build or restructure the team to match the strategy. Establish operational processes for campaign management, testing, reporting, and budget reallocation. Create the frameworks that enable the team to operate effectively and consistently.' },
      { icon: 'Rocket', title: 'Execute and Scale', description: 'Drive execution through the team while maintaining strategic oversight. Review results regularly, adjust channel mix and budget allocation based on data, and continuously push for better efficiency and scale.' },
    ],
    processDescription: 'Performance marketing leadership follows a strategic cycle from assessment through execution and scaling.',

    faqItems: [
      { question: 'What is the difference between a Head of Performance Marketing and a Head of Growth?', answer: 'The Head of Performance Marketing focuses specifically on paid acquisition channels: search, social, display, video, and programmatic advertising. The Head of Growth takes a broader view that includes paid acquisition but also covers organic channels, product growth, retention, and lifecycle marketing. The performance marketing role goes deeper on paid media expertise. The growth role goes wider across the full customer journey.' },
      { question: 'How does a Head of Performance Marketing handle increasing costs per acquisition?', answer: 'Rising CPAs are a constant challenge in performance marketing. I address this through channel diversification to reduce dependency on any single platform, creative testing to improve ad performance, landing page optimization to increase conversion rates, audience refinement to target higher value prospects, and incrementality testing to eliminate spend that is not actually driving incremental conversions. Often the biggest lever is cutting spend on channels or campaigns that appear to be working but are actually just taking credit for organic conversions.' },
      { question: 'How big of a team does a Head of Performance Marketing typically manage?', answer: 'Team size varies significantly by company. At a mid market company, the team might be three to five people covering search, social, and analytics. At a larger company, it could be 10 to 20 people with specialists in each channel plus analysts and creative strategists. The right team size depends on the number of channels, geographic markets, and the total budget being managed. I structure teams around channels with shared services for analytics and creative.' },
      { question: 'What metrics matter most at this level?', answer: 'At the leadership level, the metrics that matter are blended customer acquisition cost, lifetime value to CAC ratio, marketing sourced revenue, and efficient growth rate. Individual channel metrics like cost per click and click through rate are important for the team but are too granular for leadership reporting. I report on business impact metrics and drill into channel level metrics only when explaining performance changes or making specific recommendations.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'The core discipline.', href: '/performance-marketing' },
      { title: 'Head of Growth', description: 'Broader growth leadership.', href: '/head-of-growth' },
      { title: 'Head of Marketing', description: 'Full marketing leadership.', href: '/head-of-marketing' },
      { title: 'Director of Growth', description: 'Growth at director level.', href: '/director-of-growth' },
      { title: 'Director of Digital Marketing', description: 'Digital channel leadership.', href: '/director-of-digital-marketing' },
      { title: 'Google Ads', description: 'Search advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising.', href: '/microsoft-ads' },
    ],
    ctaHeading: 'Looking for a Head of Performance Marketing?',
    ctaDescription: 'If you need leadership for your paid acquisition program that combines deep channel expertise with strategic business thinking, feel free to reach out.',
    ctaColor: '#ea580c',
    links: {
      siblings: ['head-of-growth', 'head-of-marketing', 'director-of-growth', 'director-of-digital-marketing', 'small-business-cmo'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'head-of-growth', 'head-of-marketing', 'director-of-growth', 'director-of-digital-marketing', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 9. DIRECTOR OF DIGITAL MARKETING
  // Positioning: Director level, digital channels, strategic + operational
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'director-of-digital-marketing',
    title: 'Director of Digital Marketing',
    seoTitle: 'Director of Digital Marketing | Alexander Kropivnitski',
    seoDescription: 'How I approach the Director of Digital Marketing role: leading digital strategy across paid, organic, email, and content channels with measurable business impact.',
    parentHub: 'performance-marketing',
    circleColor: '#be185d',
    heroContent: `The Director of Digital Marketing leads a company's online marketing strategy across paid, organic, email, content, and social channels. The role is broader than a [Head of Performance Marketing](/head-of-performance-marketing) because it includes organic and content channels, but more focused than a [Head of Marketing](/head-of-marketing) because it concentrates on digital channels specifically rather than the full marketing function.

This page explains how I approach digital marketing leadership, what the role involves, and how it connects to broader [performance marketing](/performance-marketing) strategy.`,

    features: [
      { icon: 'Layers', title: 'Multi Channel Digital Strategy', description: 'Building an integrated digital marketing strategy that coordinates paid search, paid social, SEO, email, content, and social media into a cohesive program. Ensuring channels complement each other rather than operating in silos.' },
      { icon: 'Users', title: 'Team Leadership', description: 'Managing a digital marketing team across multiple disciplines. Hiring specialists, developing generalists, and building a team culture that values data, collaboration, and continuous improvement.' },
      { icon: 'DollarSign', title: 'Budget and Resource Allocation', description: 'Allocating budget and resources across digital channels based on performance data, business priorities, and growth opportunities. Making trade off decisions between immediate paid results and longer term organic investments.' },
      { icon: 'BarChart3', title: 'Performance Measurement', description: 'Building reporting and analytics frameworks that connect digital marketing activities to business outcomes. Defining KPIs, building dashboards, and creating a data driven decision making culture across the digital team.' },
      { icon: 'Compass', title: 'Digital Transformation', description: 'Leading digital marketing maturity within the organization. Introducing new channels, technologies, and methodologies as the company grows. Ensuring the digital function evolves with changing market conditions and consumer behavior.' },
      { icon: 'GitBranch', title: 'Agency and Vendor Management', description: 'Managing relationships with digital agencies, technology vendors, and freelance specialists. Setting expectations, evaluating performance, and deciding when to bring capabilities in house versus outsourcing.' },
    ],
    featuresDescription: 'The Director of Digital Marketing leads all online marketing channels with strategic and operational responsibility.',

    approachContent: `My approach to digital marketing leadership centers on integration. The biggest opportunity in most digital marketing programs is better coordination between channels. Paid and organic search should share keyword intelligence. Email marketing should use paid media audience data. Content strategy should be informed by paid campaign performance data. These connections happen naturally in a well led digital program but are missing when channels operate independently.

I bring strong [performance marketing](/performance-marketing) expertise from my work with [Google Ads](/google-ads), [Meta Ads](/meta-ads), and [Microsoft Ads](/microsoft-ads), combined with organic search and content marketing experience. This cross channel perspective is valuable at the director level because it allows me to make informed trade off decisions. Should the next dollar go to paid search or to content that will drive organic traffic over time? The answer depends on the business situation, and having depth in both areas makes the decision more informed.

At the director level, building the right team and establishing clear processes matters more than individual channel tactics. I focus on hiring people who are strong in their specific disciplines and creating an environment where they can do their best work. Clear goals, regular feedback, and the autonomy to make decisions within defined frameworks produce better results than micromanagement.

Understanding [attribution](/attribution-modeling-explained) across digital channels is critical at this level. When you manage both paid and organic channels, attribution becomes more complex but also more important. Paid search may be getting credit for conversions that organic search or email would have captured. Brand campaigns on social may be lifting search query volume. Without understanding these interactions, budget allocation decisions are based on incomplete information.

I also work closely with the [marketing technology](/marketing-technology) function to ensure the digital team has the data and tools they need. The quality of digital marketing decisions is directly proportional to the quality of the data those decisions are based on. Investing in measurement infrastructure consistently pays for itself through better allocation of marketing resources.`,

    processSteps: [
      { icon: 'Telescope', title: 'Digital Audit', description: 'Comprehensive review of all digital channels, team capabilities, technology stack, and competitive positioning. Establish baselines and identify the highest impact opportunities across the digital marketing program.' },
      { icon: 'Map', title: 'Integrated Strategy', description: 'Build a digital marketing strategy that coordinates all channels toward shared business goals. Define budget allocation, team structure, technology requirements, and success metrics for each channel and the program overall.' },
      { icon: 'Users', title: 'Team and Execution', description: 'Build the team, establish processes, and drive execution across all digital channels. Create cross channel collaboration points so the team uses shared insights and data rather than operating in silos.' },
      { icon: 'BarChart3', title: 'Optimize and Scale', description: 'Regular performance reviews across all channels with cross channel analysis. Reallocate budget toward high performing channels and initiatives. Scale successful strategies while testing new opportunities.' },
    ],
    processDescription: 'Digital marketing leadership requires integrating multiple channels into a cohesive, measurable program.',

    faqItems: [
      { question: 'What is the difference between a Director of Digital Marketing and a Head of Marketing?', answer: 'A Director of Digital Marketing focuses specifically on online channels: paid media, SEO, email, content, and social. A Head of Marketing covers the full marketing function including digital but also brand, PR, events, communications, and sometimes product marketing. In companies where digital is the primary marketing channel, the roles may overlap significantly. In companies with significant offline marketing, the Director of Digital Marketing is a subset of the broader marketing leadership team.' },
      { question: 'How does a Director of Digital Marketing allocate budget across channels?', answer: 'I base allocation on historical performance, marginal returns analysis, business priorities, and growth stage. Mature channels with proven returns get the majority of budget. Emerging channels get testing budgets with clear success criteria. I also factor in time horizon: paid channels deliver immediate results, while SEO and content investments take months to mature. A good digital marketing budget balances short term performance with long term organic growth.' },
      { question: 'What skills are most important for this role?', answer: 'Strategic thinking across multiple channels, team leadership, stakeholder communication, and analytical ability. Deep expertise in at least two or three digital channels provides the credibility needed to lead specialists effectively. Budget management and financial acumen are important because the role involves significant spending decisions. And the ability to translate digital marketing performance into business language is essential for executive communication.' },
      { question: 'How does a Director of Digital Marketing stay current with channel changes?', answer: 'By maintaining a learning culture within the team where new developments are discussed and tested. I also stay current through industry publications, platform release notes, peer networks, and selective conference attendance. At the director level, you do not need to know every platform update in detail, but you need to understand the strategic implications of major changes like privacy restrictions, AI features, and algorithm updates.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition strategy.', href: '/performance-marketing' },
      { title: 'Head of Growth', description: 'Growth focused leadership.', href: '/head-of-growth' },
      { title: 'Head of Marketing', description: 'Full marketing leadership.', href: '/head-of-marketing' },
      { title: 'Director of Growth', description: 'Growth at director level.', href: '/director-of-growth' },
      { title: 'Fractional CMO', description: 'Part time marketing leadership.', href: '/fractional-cmo' },
      { title: 'Google Ads', description: 'Search advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising.', href: '/microsoft-ads' },
    ],
    ctaHeading: 'Looking for a Director of Digital Marketing?',
    ctaDescription: 'If you need someone to lead your digital marketing program across paid and organic channels, feel free to reach out.',
    ctaColor: '#be185d',
    links: {
      siblings: ['head-of-growth', 'head-of-marketing', 'director-of-growth', 'small-business-cmo', 'fractional-cmo'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'head-of-growth', 'head-of-marketing', 'director-of-growth', 'small-business-cmo', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 10. DIRECTOR OF GROWTH
  // Positioning: Director level, growth strategy across acquisition and retention, data-driven
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'director-of-growth',
    title: 'Director of Growth',
    seoTitle: 'Director of Growth | Alexander Kropivnitski',
    seoDescription: 'How I approach the Director of Growth role: leading growth strategy across acquisition, retention, and revenue optimization with a data-driven, experimental approach.',
    parentHub: 'performance-marketing',
    circleColor: '#4f46e5',
    heroContent: `The Director of Growth leads a company's growth strategy across acquisition, activation, retention, and revenue optimization. The role combines [performance marketing](/performance-marketing) expertise with product thinking, data analysis, and strategic planning. Unlike a [Head of Marketing](/head-of-marketing) who covers the full marketing function, the Director of Growth is specifically focused on measurable business growth through experimentation and data driven decision making.

This page explains how I approach growth leadership, what distinguishes the Director of Growth from other leadership roles, and how the role drives business outcomes.`,

    features: [
      { icon: 'Compass', title: 'Growth Strategy', description: 'Defining the growth model for the business including acquisition channels, activation flows, retention strategies, and revenue optimization opportunities. Setting growth targets that are ambitious but achievable based on data.' },
      { icon: 'Beaker', title: 'Experimentation Program', description: 'Building and leading a structured experimentation program that tests growth hypotheses across marketing, product, and user experience. Setting experiment velocity targets and creating processes for learning from both successes and failures.' },
      { icon: 'TrendingUp', title: 'Acquisition and Retention Balance', description: 'Making strategic decisions about where to invest growth resources between acquiring new customers and retaining existing ones. Understanding when retention improvements generate more value than acquisition spending.' },
      { icon: 'Users', title: 'Cross Functional Team Leadership', description: 'Leading a growth team that may include marketers, analysts, product managers, and engineers. Creating alignment across functions toward shared growth metrics and ensuring collaboration happens naturally.' },
      { icon: 'BarChart3', title: 'Growth Analytics', description: 'Building the analytics infrastructure needed for growth decision making. Tracking cohort performance, customer lifetime value, payback periods, and unit economics across acquisition channels and customer segments.' },
      { icon: 'PieChart', title: 'Investment and Portfolio Management', description: 'Treating growth channels and initiatives as a portfolio. Allocating resources across proven channels, scaling experiments, and exploratory tests. Managing risk by diversifying growth sources.' },
    ],
    featuresDescription: 'The Director of Growth leads data driven growth across the full customer lifecycle.',

    approachContent: `My approach to growth leadership starts with the growth model. Before launching any campaigns or experiments, I map the full customer journey and identify where the biggest opportunities and bottlenecks are. Sometimes the highest impact point is acquisition. Other times it is activation, retention, or monetization. The growth model makes this visible and guides resource allocation.

I come from a [performance marketing](/performance-marketing) background with deep experience in [Google Ads](/google-ads), [Meta Ads](/meta-ads), and other paid channels. At the Director of Growth level, I apply that analytical rigor to the full growth stack, not just paid acquisition. Retention programs, referral mechanics, pricing experiments, and onboarding optimization all benefit from the same data driven approach that makes paid marketing effective.

Experimentation is the core operating mechanism of growth. I build teams that run a high volume of experiments with clear hypotheses, measurable success criteria, and disciplined analysis. Not every experiment succeeds, and that is expected. The goal is to learn quickly and scale what works. Over time, the compound effect of hundreds of small experiments produces significant competitive advantage.

The Director of Growth role differs from a [Head of Growth](/head-of-growth) primarily in organizational context. In some companies, these titles are interchangeable. In others, the Director reports to a VP or Head and focuses more on execution and team management while the senior role focuses on strategy and board communication. In either case, the core competencies are the same: growth modeling, experimentation, cross functional leadership, and data driven decision making.

I also believe strongly in [attribution](/attribution-modeling-explained) quality at this level. Growth decisions about where to invest resources depend entirely on understanding which activities actually drive incremental business. If attribution is wrong, resource allocation is wrong. I invest heavily in building reliable measurement systems, including [incrementality testing](/incrementality-testing-explained) when possible, before making major growth investment decisions.`,

    processSteps: [
      { icon: 'Map', title: 'Growth Modeling', description: 'Map the full customer journey and build a quantitative growth model. Identify the key levers at each stage, their current performance, and the theoretical ceiling for improvement. This model becomes the foundation for all growth planning.' },
      { icon: 'Target', title: 'Prioritization', description: 'Rank growth opportunities by expected impact and effort using a structured framework. Focus the team on the highest impact initiatives first. Maintain a backlog of ideas for future testing but resist the temptation to spread resources too thin.' },
      { icon: 'Beaker', title: 'Experimentation', description: 'Design and run structured experiments to test growth hypotheses. Each experiment has a clear hypothesis, success metric, required sample size, and timeline. Document learnings regardless of whether the experiment succeeds or fails.' },
      { icon: 'TrendingUp', title: 'Scale and Systematize', description: 'When experiments prove successful, build repeatable systems around them. A winning acquisition channel becomes a managed program. A successful onboarding flow becomes the default. Growth comes from turning one time wins into ongoing systems.' },
    ],
    processDescription: 'Growth leadership follows a structured approach from modeling through experimentation to scaling.',

    faqItems: [
      { question: 'What is the difference between a Director of Growth and a Head of Growth?', answer: 'In many companies, the titles are used interchangeably. When they are distinct, the Head of Growth typically operates at a more strategic level with broader organizational influence, while the Director focuses more on team execution and day to day growth operations. The Director may report to a VP or Head. In either case, the core responsibilities of growth strategy, experimentation, and cross functional leadership are similar.' },
      { question: 'What background do Directors of Growth typically come from?', answer: 'The most common backgrounds are performance marketing, product management, or data analytics. Each brings different strengths. Performance marketing backgrounds bring strong channel expertise and measurement skills. Product backgrounds bring user experience and product growth thinking. Analytics backgrounds bring data infrastructure and statistical rigor. The best Directors of Growth combine elements of all three.' },
      { question: 'How does a Director of Growth work with the product team?', answer: 'Very closely. Many growth initiatives involve product changes: onboarding flows, referral programs, pricing experiments, feature activation, and conversion optimization all require product and engineering resources. The Director of Growth needs to influence the product roadmap and demonstrate through data why growth investments deserve engineering time. Building trust and showing clear ROI on product growth experiments is key to maintaining this partnership.' },
      { question: 'How do you handle the tension between short term and long term growth?', answer: 'By being explicit about the time horizon for each initiative. Some activities like paid acquisition produce immediate results. Others like SEO, content, and brand building take months to show impact. I present growth plans with clear short term and long term components, showing how current investments in longer term channels reduce future acquisition costs and improve resilience. Leadership needs to understand and buy into this portfolio approach for it to work.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition expertise.', href: '/performance-marketing' },
      { title: 'Head of Growth', description: 'Growth leadership.', href: '/head-of-growth' },
      { title: 'Head of Marketing', description: 'Full marketing leadership.', href: '/head-of-marketing' },
      { title: 'Director of Digital Marketing', description: 'Digital channel leadership.', href: '/director-of-digital-marketing' },
      { title: 'Fractional CMO', description: 'Part time marketing leadership.', href: '/fractional-cmo' },
      { title: 'Google Ads', description: 'Search advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising.', href: '/meta-ads' },
      { title: 'Growth Marketing Explained', description: 'The discipline explained.', href: '/growth-marketing-explained' },
    ],
    ctaHeading: 'Looking for a Director of Growth?',
    ctaDescription: 'If you need growth leadership that combines strategic thinking with hands on experimentation and data analysis, feel free to reach out.',
    ctaColor: '#4f46e5',
    links: {
      siblings: ['head-of-growth', 'head-of-marketing', 'director-of-digital-marketing', 'small-business-cmo', 'fractional-cmo'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'head-of-growth', 'head-of-marketing', 'director-of-digital-marketing', 'small-business-cmo', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),
]

// Calculate word counts and write files
function countWords(obj: any): number {
  const texts: string[] = []
  function walk(o: any) {
    if (!o) return
    if (typeof o === 'string') { texts.push(o); return }
    if (Array.isArray(o)) { o.forEach(walk); return }
    if (typeof o === 'object') {
      for (const key of ['text', 'heading', 'description', 'question', 'answer', 'title']) {
        if (key in o && typeof o[key] === 'string') texts.push(o[key])
      }
      for (const key of ['children', 'items', 'cards', 'steps', 'features', 'root', 'blocks', 'content', 'description']) {
        if (key in o) walk(o[key])
      }
    }
  }
  walk(obj)
  return texts.join(' ').split(/\s+/).filter(Boolean).length
}

for (const page of pages) {
  page.wordCount = countWords(page.blocks)
  const filePath = path.join(OUT_DIR, `${page.slug}.json`)
  fs.writeFileSync(filePath, JSON.stringify(page, null, 2))
  console.log(`[OK] ${page.slug} — ${page.wordCount} words`)
}

console.log(`\nGenerated ${pages.length} pages in ${OUT_DIR}`)
