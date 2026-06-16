import fs from 'fs'
import path from 'path'
import { buildJobRolePage, type PageDraft } from './lib/lexical-helpers'

const OUT_DIR = path.resolve('content/drafts/batch-3')
fs.mkdirSync(OUT_DIR, { recursive: true })

const pages: PageDraft[] = [

  // ═══════════════════════════════════════════════════════
  // 1. SMALL BUSINESS CMO
  // Positioning: C-level, generalist, small business context, wears many hats
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'small-business-cmo',
    title: 'Small Business CMO',
    seoTitle: 'Small Business CMO | Alexander Kropivnitski',
    seoDescription: 'How I approach the small business CMO role: full-spectrum marketing leadership for companies with limited resources, covering strategy, execution, and measurable growth.',
    parentHub: 'performance-marketing',
    circleColor: '#f59e0b',
    heroContent: `The Small Business CMO is a marketing leader who covers the full spectrum of marketing for a company that does not have a large team or agency roster. Unlike a CMO at a large enterprise who delegates to department heads, the small business CMO often handles [performance marketing](/performance-marketing) strategy, brand positioning, content direction, and analytics personally or with a very small team.

This page explains how I approach marketing leadership for small businesses, what makes the role different from enterprise marketing, and how to build marketing programs that produce real results on limited budgets.`,

    features: [
      { icon: 'Compass', title: 'Full Funnel Strategy', description: 'Building a complete marketing strategy from brand awareness through conversion and retention. In a small business, the CMO owns the entire funnel rather than delegating stages to specialists. Every dollar must be accounted for.' },
      { icon: 'DollarSign', title: 'Budget Optimization', description: 'Making limited marketing budgets work hard. Identifying which channels deliver the best return at small spend levels and knowing when to invest more versus when to pull back. Not every channel that works at scale works at small budgets.' },
      { icon: 'Users', title: 'Team Building and Vendors', description: 'Deciding what to keep in house and what to outsource. Hiring the first marketing team members and managing freelancers or agencies. Knowing which roles to hire first based on business priorities.' },
      { icon: 'BarChart3', title: 'Revenue Attribution', description: 'Connecting marketing activities to revenue outcomes. Small businesses cannot afford to run marketing that does not produce measurable results. Building simple but reliable measurement systems.' },
      { icon: 'Target', title: 'Channel Selection', description: 'Choosing which marketing channels to invest in based on the business model, target audience, and competitive landscape. Small businesses cannot be everywhere, so channel selection is a critical strategic decision.' },
      { icon: 'Settings', title: 'Marketing Operations', description: 'Setting up the tools, processes, and workflows that allow a small marketing team to operate efficiently. Choosing the right marketing technology stack without overcomplicating things.' },
    ],
    featuresDescription: 'The Small Business CMO covers strategy, execution, and measurement across the entire marketing function.',

    approachContent: `My approach to small business marketing leadership starts with understanding the business model and unit economics. Before building any marketing plans, I need to know the customer acquisition cost the business can support, the lifetime value of a customer, and the growth rate the business needs. These numbers determine everything about the marketing strategy.

I come from a [performance marketing](/performance-marketing) background with experience across [Google Ads](/google-ads), [Meta Ads](/meta-ads), and other paid channels. In a small business context, I apply that analytical discipline to every marketing decision, not just paid advertising. Content marketing, partnerships, email, and even brand investments should be evaluated based on their contribution to revenue growth.

The biggest mistake I see in small business marketing is trying to do too much. A startup with a three person marketing team should not be running campaigns on six platforms, producing a daily blog, managing a podcast, and posting across five social networks. Focus is the most important strategic decision. I help small businesses identify the two or three channels that will drive the most growth and invest deeply in those before expanding.

I also believe that small business marketing leadership requires hands on involvement, especially in the early stages. The [Head of Marketing](/head-of-marketing) at a large company can delegate execution entirely. The small business CMO needs to understand the mechanics of each channel well enough to manage vendors, evaluate results, and step in when needed. This is why my experience running campaigns directly in [Google Ads](/google-ads) and [Meta Ads](/meta-ads) is valuable in this role.

Technology decisions matter enormously for small businesses. The wrong marketing technology stack can waste budget and create complexity that slows the team down. I help companies select tools that match their actual needs today rather than buying enterprise solutions they will grow into someday. Simple, reliable [marketing technology](/marketing-technology) that the team actually uses beats sophisticated platforms that sit underutilized.`,

    processSteps: [
      { icon: 'Search', title: 'Business and Market Assessment', description: 'Understand the business model, unit economics, competitive landscape, and customer profile. Identify what is already working and where the biggest growth opportunities are. This assessment drives every subsequent decision.' },
      { icon: 'Target', title: 'Channel Strategy and Focus', description: 'Select the two or three marketing channels that offer the best opportunity for this specific business. Build a focused plan that concentrates resources rather than spreading them thin across many channels.' },
      { icon: 'Settings', title: 'Infrastructure Setup', description: 'Put the right tools and processes in place: analytics, CRM, marketing automation, and reporting. Keep it simple and functional. Every tool should earn its place by making the team more effective.' },
      { icon: 'Rocket', title: 'Execute and Measure', description: 'Launch campaigns, produce content, and build the marketing engine. Measure results against business metrics, not vanity metrics. Adjust quickly based on what the data shows is working.' },
      { icon: 'TrendingUp', title: 'Scale What Works', description: 'Once a channel or tactic proves its value, increase investment. Add new channels only after existing ones are optimized. Build the team around proven needs rather than anticipated ones.' },
    ],
    processDescription: 'A practical approach to building marketing programs that work within small business constraints.',

    faqItems: [
      { question: 'What is the difference between a small business CMO and a fractional CMO?', answer: 'The small business CMO is typically a full time role within one company, leading all marketing functions. A fractional CMO splits time across multiple companies, providing strategic guidance on a part time basis. Small businesses that need daily marketing leadership and hands on execution benefit from a dedicated CMO. Those that mainly need strategic direction and can execute independently may be better served by a fractional arrangement.' },
      { question: 'What should a small business CMO prioritize in the first 90 days?', answer: 'Understanding the numbers comes first: customer acquisition cost, lifetime value, conversion rates, and current channel performance. Then audit existing marketing activities to identify what is producing results and what is not. Within 90 days, you should have a focused strategy for the next 6 to 12 months, a clear measurement framework, and have stopped spending money on activities that are not producing returns.' },
      { question: 'How much should a small business spend on marketing?', answer: 'There is no universal percentage. The right budget depends on the business model, growth targets, competitive environment, and margins. A SaaS company investing in rapid growth might spend 30 to 50 percent of revenue on marketing. A local services business with strong referrals might spend 5 to 10 percent. The CMO should build the budget around specific growth targets and expected returns, not arbitrary percentages.' },
      { question: 'When should a small business hire a CMO versus a marketing manager?', answer: 'If the company needs someone to set marketing strategy, choose channels, build the team, manage budgets, and connect marketing to business outcomes, that is a CMO role. If the strategy is already set and the company needs execution, a marketing manager may be sufficient. Companies that are unclear about their go to market strategy or struggling with marketing ROI typically need CMO level thinking.' },
      { question: 'How does a small business CMO work with limited data?', answer: 'By being disciplined about collecting the data that matters most. Small businesses often lack enterprise analytics platforms, but they do not need them. A clean CRM, basic web analytics, and simple attribution tracking provide enough data for good decisions. The key is consistency: track the same metrics weekly, build trends over time, and resist making major changes based on insufficient data.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition strategy and execution.', href: '/performance-marketing' },
      { title: 'Head of Growth', description: 'Growth leadership at scale.', href: '/head-of-growth' },
      { title: 'Head of Marketing', description: 'Full marketing function leadership.', href: '/head-of-marketing' },
      { title: 'Director of Growth', description: 'Data driven growth strategy.', href: '/director-of-growth' },
      { title: 'Director of Digital Marketing', description: 'Digital channel leadership.', href: '/director-of-digital-marketing' },
      { title: 'Google Ads', description: 'Search advertising management.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising expertise.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Bing search advertising.', href: '/microsoft-ads' },
    ],
    ctaHeading: 'Need Marketing Leadership for Your Business?',
    ctaDescription: 'I help small businesses build marketing programs that produce measurable growth without wasting budget.',
    ctaColor: '#f59e0b',
    links: {
      siblings: ['head-of-growth', 'head-of-marketing', 'director-of-growth', 'director-of-digital-marketing', 'fractional-cmo'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'head-of-growth', 'head-of-marketing', 'director-of-growth', 'director-of-digital-marketing', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 2. FRACTIONAL CMO
  // Positioning: C-level, part-time, multi-company, strategic advisory
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'fractional-cmo',
    title: 'Fractional CMO',
    seoTitle: 'Fractional CMO | Alexander Kropivnitski',
    seoDescription: 'How I approach the fractional CMO role: part-time marketing leadership for companies that need strategic direction without a full-time executive hire.',
    parentHub: 'performance-marketing',
    circleColor: '#8b5cf6',
    heroContent: `A Fractional CMO provides senior marketing leadership on a part time basis, typically working with multiple companies simultaneously. The role fills a gap that many growing businesses face: they need strategic marketing guidance at the executive level but cannot justify or afford a full time CMO salary.

This page explains how I approach fractional marketing leadership, what makes it different from consulting or full time roles, and how companies can get maximum value from a [performance marketing](/performance-marketing) focused fractional CMO engagement.`,

    features: [
      { icon: 'Compass', title: 'Strategic Direction', description: 'Setting the marketing strategy and ensuring it aligns with business goals. Defining target audiences, channel priorities, positioning, and growth targets. Providing the strategic thinking that drives all tactical decisions.' },
      { icon: 'Users', title: 'Team Development', description: 'Building and mentoring the internal marketing team. Helping hire the right people, defining roles and responsibilities, and creating processes that work when the fractional CMO is not in the office.' },
      { icon: 'BarChart3', title: 'Performance Oversight', description: 'Reviewing marketing performance against business metrics. Identifying what is working, what is not, and where to adjust. Bringing external benchmarks and cross industry experience to performance evaluation.' },
      { icon: 'Settings', title: 'Vendor and Agency Management', description: 'Evaluating, selecting, and managing external marketing partners. Ensuring agencies deliver results and stay aligned with the overall strategy. Many companies overpay for underperforming agency relationships.' },
      { icon: 'Target', title: 'Budget Allocation', description: 'Recommending how to allocate the marketing budget across channels, campaigns, and initiatives. Making tough decisions about where to invest and where to cut based on performance data.' },
      { icon: 'Layers', title: 'Process and Systems Design', description: 'Designing marketing operations processes that allow the team to execute effectively without constant senior oversight. Creating reporting frameworks, approval workflows, and planning cadences.' },
    ],
    featuresDescription: 'The Fractional CMO provides strategic marketing leadership on a flexible, part time basis.',

    approachContent: `My approach to fractional CMO work centers on rapid assessment and focused execution. When I join a company in this capacity, the first priority is understanding where marketing is today: what is working, what is not, and what the business actually needs marketing to deliver.

I focus on [performance marketing](/performance-marketing) and data driven growth because these areas produce measurable results quickly. Companies hiring a fractional CMO typically need to see impact within the first quarter, not the first year. My experience with [Google Ads](/google-ads), [Meta Ads](/meta-ads), and paid channels gives me the ability to assess channel performance quickly and identify immediate optimization opportunities.

The fractional model works best when there is a clear internal team or set of vendors who handle day to day execution. My role is to set direction, review results, make strategic decisions, and develop the team. I typically work with a company two to three days per week, which means the team needs to be able to execute independently between sessions. Building that capability is a core part of my work.

One of the biggest advantages of a fractional CMO is cross company experience. I work with multiple businesses across different industries, which means I see what works broadly, not just within one company or market. This pattern recognition helps me identify opportunities and avoid mistakes that a first time CMO might not anticipate. When I see a [Head of Marketing](/head-of-marketing) or marketing team struggling with attribution, for example, I have seen the same problem solved in different contexts and can recommend an approach quickly.

I also help companies decide when they have outgrown the fractional model. At some point, a growing business needs a full time marketing leader. Part of my role is building the foundation that makes that transition smooth, including documenting the strategy, establishing processes, and potentially helping recruit my own replacement.`,

    processSteps: [
      { icon: 'Search', title: 'Rapid Assessment', description: 'Evaluate current marketing performance, team capabilities, technology stack, and competitive position within the first two weeks. Identify quick wins and strategic gaps that need immediate attention.' },
      { icon: 'Map', title: 'Strategic Roadmap', description: 'Build a 90 day and 12 month marketing roadmap aligned to business goals. Define priorities, success metrics, and resource requirements. Present to leadership for alignment before execution begins.' },
      { icon: 'Users', title: 'Team and Vendor Alignment', description: 'Ensure the internal team and external partners are aligned on strategy and priorities. Adjust roles, reassign vendors, or make staffing recommendations as needed to execute the roadmap.' },
      { icon: 'TrendingUp', title: 'Execution Oversight', description: 'Provide ongoing strategic guidance and performance review. Meet weekly with the team, review results monthly with leadership, and adjust the plan quarterly based on business performance.' },
    ],
    processDescription: 'A structured approach to delivering marketing leadership impact on a part time schedule.',

    faqItems: [
      { question: 'How many days per week does a fractional CMO typically work?', answer: 'Most fractional CMO engagements involve two to three days per week. Some companies start with more intensive involvement during the first month to complete the assessment and build the roadmap, then reduce to a steady cadence. The right amount depends on how much internal execution capability already exists.' },
      { question: 'What is the difference between a fractional CMO and a marketing consultant?', answer: 'A marketing consultant typically delivers advice and recommendations. A fractional CMO takes ownership of marketing outcomes. They attend leadership meetings, manage the marketing team, make budget decisions, and are accountable for results. The fractional CMO is part of the leadership team, not an outside advisor.' },
      { question: 'When should a company hire a fractional CMO versus a full time one?', answer: 'Companies with annual marketing budgets under one million dollars or early stage companies building their first marketing function often benefit from fractional CMO support. They get senior strategic thinking without the cost of a full time executive. Once marketing spend, team size, and organizational complexity grow beyond what two to three days per week can manage, it is time for a full time hire.' },
      { question: 'Can a fractional CMO help with hiring a full time marketing leader?', answer: 'Yes, and this is a common part of the engagement. The fractional CMO can define the role, write the job description, participate in interviews, and help onboard the new hire. Having someone who understands the company marketing needs deeply makes the hiring process more effective.' },
      { question: 'How does a fractional CMO handle confidentiality when working with multiple companies?', answer: 'Professional boundaries are essential. I never share proprietary data, strategies, or competitive intelligence between clients. Client agreements include confidentiality terms. In practice, the overlap between companies is in general principles and frameworks, not specific tactics or data. What I learn from one engagement improves my general expertise without compromising any individual client.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition and growth strategy.', href: '/performance-marketing' },
      { title: 'Head of Growth', description: 'Growth leadership at scale.', href: '/head-of-growth' },
      { title: 'Head of Marketing', description: 'Full marketing function leadership.', href: '/head-of-marketing' },
      { title: 'Director of Growth', description: 'Data driven growth operations.', href: '/director-of-growth' },
      { title: 'Director of Digital Marketing', description: 'Digital channel leadership.', href: '/director-of-digital-marketing' },
      { title: 'Google Ads', description: 'Search advertising management.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising expertise.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Bing search advertising.', href: '/microsoft-ads' },
    ],
    ctaHeading: 'Looking for Part Time Marketing Leadership?',
    ctaDescription: 'I provide fractional CMO services focused on performance marketing, data driven growth, and building effective marketing teams.',
    ctaColor: '#8b5cf6',
    links: {
      siblings: ['head-of-growth', 'head-of-marketing', 'director-of-growth', 'director-of-digital-marketing', 'small-business-cmo'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'head-of-growth', 'head-of-marketing', 'director-of-growth', 'director-of-digital-marketing', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 3. MARKETING AUTOMATION MANAGER
  // Positioning: Mid-level, MarTech pillar, automation workflows, email, lead nurturing
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'marketing-automation-manager',
    title: 'Marketing Automation Manager',
    seoTitle: 'Marketing Automation Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the marketing automation manager role: building automated workflows that nurture leads, improve conversion rates, and connect marketing to revenue.',
    parentHub: 'marketing-technology',
    circleColor: '#06b6d4',
    heroContent: `The Marketing Automation Manager designs, builds, and optimizes automated marketing workflows that move prospects through the buying journey. The role sits at the intersection of [marketing technology](/marketing-technology) and campaign strategy, requiring both technical platform expertise and a deep understanding of customer behavior.

This page explains how I approach marketing automation, what distinguishes effective automation from simple email scheduling, and how automation connects to measurable business outcomes.`,

    features: [
      { icon: 'GitBranch', title: 'Workflow Design', description: 'Building multistep automated workflows that respond to customer behavior. Designing branching logic that delivers the right message at the right time based on actions, demographics, and engagement patterns.' },
      { icon: 'Mail', title: 'Email Program Management', description: 'Managing the full email marketing program including nurture sequences, onboarding flows, reengagement campaigns, and transactional messages. Maintaining deliverability and list health.' },
      { icon: 'Target', title: 'Lead Scoring and Routing', description: 'Creating lead scoring models that identify when a prospect is ready for sales outreach. Designing routing rules that connect qualified leads to the right sales team members at the right moment.' },
      { icon: 'Database', title: 'Data Management', description: 'Maintaining clean, structured marketing data across platforms. Managing integrations between the marketing automation platform, CRM, analytics, and other tools in the marketing technology stack.' },
      { icon: 'BarChart3', title: 'Performance Analysis', description: 'Measuring automation performance against business metrics. Tracking conversion rates through each stage of the funnel, identifying bottlenecks, and running tests to improve results over time.' },
      { icon: 'Layers', title: 'Platform Administration', description: 'Managing the marketing automation platform including user access, integrations, templates, and technical configuration. Ensuring the platform is used effectively across the marketing team.' },
    ],
    featuresDescription: 'The Marketing Automation Manager builds and optimizes the automated systems that connect marketing to revenue.',

    approachContent: `My approach to marketing automation starts with the customer journey, not the technology. Before building any workflow, I map the stages a prospect moves through from first touch to purchase and beyond. Each stage has specific questions, objections, and information needs. Good automation addresses these systematically rather than blasting the same message to everyone.

I come from a [marketing technology](/marketing-technology) background with experience in [Google Analytics 4](/google-analytics-4) and [Google Tag Manager](/google-tag-manager) for tracking, and [BigQuery](/bigquery) for data analysis. This technical foundation helps me build automation programs that are properly instrumented and measurable. Too many automation programs run without clear attribution, making it impossible to know what is working.

The most common mistake in marketing automation is building complexity too early. I start with simple, high impact workflows: a welcome series for new subscribers, a lead nurture sequence for prospects who download content, and a reengagement flow for inactive contacts. These three workflows often produce more revenue impact than dozens of complex branching sequences.

I also focus heavily on the integration between marketing automation and the CRM. The handoff from marketing to sales is where many programs break down. Lead scoring must reflect actual buying behavior, not just email opens. Routing rules must get leads to the right person quickly. And feedback loops from sales back to marketing are essential for refining the entire process.

Data quality is the foundation of effective automation. Dirty data, duplicate records, and inconsistent fields make every workflow less effective. I build regular data hygiene processes and create clear data standards that the entire marketing and sales team follows.`,

    processSteps: [
      { icon: 'Map', title: 'Journey Mapping', description: 'Map the customer journey from first touch through purchase and retention. Identify the key moments where automation can add value by delivering the right information at the right time.' },
      { icon: 'GitBranch', title: 'Workflow Architecture', description: 'Design the automation workflow structure including triggers, conditions, actions, and timing. Start with the highest impact workflows first and build complexity gradually based on results.' },
      { icon: 'Settings', title: 'Build and Integrate', description: 'Implement workflows in the automation platform. Connect to the CRM, analytics, and other tools. Set up tracking so every step is measurable. Test thoroughly before launching to live audiences.' },
      { icon: 'BarChart3', title: 'Measure and Optimize', description: 'Monitor performance against business metrics. Test subject lines, timing, content, and branching logic. Make incremental improvements based on data rather than assumptions.' },
    ],
    processDescription: 'A systematic approach to building marketing automation that produces measurable business results.',

    faqItems: [
      { question: 'What is the difference between marketing automation and email marketing?', answer: 'Email marketing is one component of marketing automation, but automation is much broader. Marketing automation includes behavior based triggers, lead scoring, CRM integration, multi channel workflows, and personalization based on data. Email marketing sends messages to lists. Marketing automation responds to individual behavior across channels with the right message at the right moment.' },
      { question: 'How long does it take to see results from marketing automation?', answer: 'Simple workflows like welcome series and lead nurture sequences can show results within 30 to 60 days. More complex programs involving lead scoring, sales integration, and multi touch attribution typically take three to six months to fully implement and optimize. The key is starting with high impact, simple workflows and adding complexity over time.' },
      { question: 'What skills does a Marketing Automation Manager need?', answer: 'The role requires a combination of technical and strategic skills. Platform expertise in at least one major automation tool is essential. Understanding of CRM systems, data management, and basic HTML for email templates. On the strategic side, understanding customer journeys, content strategy, and how marketing connects to sales outcomes. SQL and basic data analysis skills are increasingly important.' },
      { question: 'How do you measure marketing automation ROI?', answer: 'The most meaningful metrics are pipeline contribution and revenue influence. Track how many leads enter automation workflows, what percentage reach sales qualified status, and how many convert to customers. Compare conversion rates and sales cycle length for leads that went through automation versus those that did not. This shows the actual business impact, not just email open rates.' },
      { question: 'What is the biggest mistake companies make with marketing automation?', answer: 'Building too much complexity too soon. Companies buy an automation platform and try to build dozens of workflows before validating that the basics work. The result is a complicated system that nobody fully understands, with poor data flowing through untested logic. Start with three to five core workflows, get those working well, then expand based on what the data tells you.' },
    ],

    relatedCards: [
      { title: 'Marketing Technology', description: 'Marketing technology strategy and stack.', href: '/marketing-technology' },
      { title: 'Marketing Technology Manager', description: 'MarTech stack leadership.', href: '/marketing-technology-manager' },
      { title: 'Marketing Analytics Manager', description: 'Data and analytics leadership.', href: '/marketing-analytics-manager' },
      { title: 'Marketing Operations Manager', description: 'Marketing ops and processes.', href: '/marketing-operations-manager' },
      { title: 'CRM Marketing Manager', description: 'CRM strategy and execution.', href: '/crm-marketing-manager' },
      { title: 'Google Tag Manager', description: 'Tag management and tracking.', href: '/google-tag-manager' },
      { title: 'Google Analytics 4', description: 'Web and app analytics.', href: '/google-analytics-4' },
      { title: 'BigQuery', description: 'Marketing data warehouse.', href: '/bigquery' },
    ],
    ctaHeading: 'Need Help with Marketing Automation?',
    ctaDescription: 'I build marketing automation programs that nurture leads, improve conversion rates, and connect marketing to revenue outcomes.',
    ctaColor: '#06b6d4',
    links: {
      siblings: ['marketing-technology-manager', 'marketing-analytics-manager', 'marketing-operations-manager', 'crm-marketing-manager'],
      tools: ['google-tag-manager', 'google-analytics-4', 'bigquery', 'sql-for-marketing', 'looker-studio'],
      topics: ['what-is-marketing-technology', 'server-side-tracking-explained', 'marketing-technology-stack', 'data-driven-marketing'],
      relatedTopics: ['marketing-technology', 'marketing-technology-manager', 'marketing-analytics-manager', 'marketing-operations-manager', 'crm-marketing-manager', 'google-tag-manager', 'google-analytics-4', 'bigquery'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 4. MARKETING OPERATIONS MANAGER
  // Positioning: Mid-level, MarTech pillar, processes, systems, efficiency
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'marketing-operations-manager',
    title: 'Marketing Operations Manager',
    seoTitle: 'Marketing Operations Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the marketing operations manager role: building the systems, processes, and data infrastructure that make marketing teams more effective and accountable.',
    parentHub: 'marketing-technology',
    circleColor: '#0ea5e9',
    heroContent: `The Marketing Operations Manager builds and maintains the systems, processes, and data infrastructure that enable a marketing team to execute effectively. While marketers focus on campaigns and content, marketing operations ensures that everything runs smoothly behind the scenes: data flows correctly between systems, leads are tracked and routed properly, and performance is measurable.

This page explains how I approach [marketing technology](/marketing-technology) operations, what the role involves day to day, and how strong marketing operations directly improve campaign performance and revenue outcomes.`,

    features: [
      { icon: 'Settings', title: 'Technology Stack Management', description: 'Selecting, implementing, and maintaining the marketing technology stack. Ensuring tools integrate properly and data flows between them without manual intervention. Managing vendor relationships and platform renewals.' },
      { icon: 'GitBranch', title: 'Process Design', description: 'Creating standardized processes for campaign execution, lead management, data governance, and reporting. Documenting workflows so the team can execute consistently regardless of who is involved.' },
      { icon: 'Database', title: 'Data Infrastructure', description: 'Building and maintaining the data pipelines that connect marketing activities to business outcomes. Ensuring data quality, managing integrations, and creating the foundation for accurate reporting and analytics.' },
      { icon: 'BarChart3', title: 'Reporting and Dashboards', description: 'Building the reporting infrastructure that gives the marketing team and leadership visibility into performance. Creating dashboards that show the right metrics at the right level of detail for each audience.' },
      { icon: 'Shield', title: 'Compliance and Governance', description: 'Ensuring marketing operations comply with data privacy regulations and internal policies. Managing consent, data retention, and access controls across marketing systems.' },
      { icon: 'Zap', title: 'Efficiency and Automation', description: 'Identifying manual processes that can be automated to save time and reduce errors. Building internal tools and workflows that help the marketing team move faster without sacrificing quality.' },
    ],
    featuresDescription: 'Marketing Operations builds the infrastructure that makes marketing measurable and scalable.',

    approachContent: `My approach to marketing operations starts with understanding how data moves through the organization. Every marketing operation challenge I have encountered ultimately comes back to data: it is missing, it is in the wrong format, it is in a system nobody checks, or it does not connect to the rest of the business. Fixing the data foundation fixes most operational problems.

I have deep experience with [Google Tag Manager](/google-tag-manager) for tracking implementation, [Google Analytics 4](/google-analytics-4) for web analytics, [BigQuery](/bigquery) for data warehousing, and [SQL](/sql-for-marketing) for data analysis. This technical background means I can build the data infrastructure directly, not just specify requirements and hope someone else builds it correctly.

In [marketing technology](/marketing-technology), the temptation is always to add more tools. Marketing operations should resist this. Every new tool adds complexity: new integrations to maintain, new data to reconcile, new vendors to manage, and new training for the team. Before adding a tool, I ask whether the problem can be solved by better using existing tools or by building a simple custom solution.

Process documentation is another area where I invest heavily. The difference between a marketing team that executes consistently and one that produces inconsistent results is almost always process quality. I create clear, written processes for every repeated activity: campaign launches, lead routing, data imports, reporting cycles, and vendor onboarding. These processes ensure quality even when team members change.

The relationship between marketing operations and the [Marketing Analytics Manager](/marketing-analytics-manager) role is particularly important. Operations provides the infrastructure. Analytics provides the insights. When these functions work well together, the marketing team has both reliable systems and accurate intelligence for making decisions.`,

    processSteps: [
      { icon: 'Search', title: 'Operations Audit', description: 'Review existing marketing technology, data flows, processes, and pain points. Identify where the team loses time to manual work, where data breaks, and where process gaps create inconsistency.' },
      { icon: 'Map', title: 'Architecture Design', description: 'Design the target state for marketing operations: which tools stay, which go, how data flows between systems, and what processes need to be created or improved. Prioritize changes by impact and effort.' },
      { icon: 'Settings', title: 'Build and Integrate', description: 'Implement the changes in phases, starting with the highest impact improvements. Build integrations, automate manual processes, create documentation, and train the team on new workflows.' },
      { icon: 'RefreshCw', title: 'Maintain and Improve', description: 'Marketing operations is ongoing work. Monitor system health, data quality, and process compliance. Make incremental improvements based on team feedback and changing business needs.' },
    ],
    processDescription: 'A systematic approach to building marketing operations that scale with the business.',

    faqItems: [
      { question: 'What is the difference between marketing operations and marketing automation?', answer: 'Marketing automation is one component of marketing operations. Marketing operations covers the full scope of systems, processes, data, and infrastructure that support the marketing function. This includes the automation platform, but also CRM integration, data warehousing, analytics, compliance, vendor management, and process design. A Marketing Automation Manager focuses on workflows and campaigns. A Marketing Operations Manager focuses on the entire operational foundation.' },
      { question: 'What technical skills does a Marketing Operations Manager need?', answer: 'Strong proficiency in marketing automation platforms and CRM systems is essential. Data skills including SQL, spreadsheet modeling, and familiarity with data warehousing concepts. Understanding of APIs and integrations. Experience with tag management and analytics platforms. The role does not require software engineering skills, but the ability to work with technical teams and understand data architecture is critical.' },
      { question: 'How does marketing operations improve marketing ROI?', answer: 'By reducing waste and improving measurement. Operations ensures that campaigns launch correctly, leads are tracked accurately, and performance data is reliable. When the marketing team can trust their data, they make better decisions about where to invest. When processes run efficiently, the team spends more time on high value work instead of manual data reconciliation and troubleshooting.' },
      { question: 'How do you handle marketing technology stack sprawl?', answer: 'By establishing clear criteria for adding or keeping tools. Every tool in the stack should have a clear owner, a documented purpose, and measurable value. I conduct regular stack audits to identify tools that are underutilized, redundant, or no longer needed. Before approving a new tool, I require a business case that explains what problem it solves and why existing tools cannot handle it.' },
      { question: 'What is the relationship between marketing operations and sales operations?', answer: 'These functions should work closely together, especially around lead management, CRM data, and shared reporting. Marketing operations owns the marketing technology stack and lead generation process. Sales operations owns the CRM and sales process. The overlap happens at lead handoff, shared data governance, and revenue reporting. In some organizations, both functions report to a single Revenue Operations leader.' },
    ],

    relatedCards: [
      { title: 'Marketing Technology', description: 'MarTech strategy and stack.', href: '/marketing-technology' },
      { title: 'Marketing Technology Manager', description: 'MarTech stack leadership.', href: '/marketing-technology-manager' },
      { title: 'Marketing Analytics Manager', description: 'Data and analytics leadership.', href: '/marketing-analytics-manager' },
      { title: 'Marketing Automation Manager', description: 'Automation workflows.', href: '/marketing-automation-manager' },
      { title: 'CRM Marketing Manager', description: 'CRM strategy and execution.', href: '/crm-marketing-manager' },
      { title: 'Google Tag Manager', description: 'Tag management and tracking.', href: '/google-tag-manager' },
      { title: 'Google Analytics 4', description: 'Web and app analytics.', href: '/google-analytics-4' },
      { title: 'BigQuery', description: 'Marketing data warehouse.', href: '/bigquery' },
    ],
    ctaHeading: 'Need Marketing Operations Expertise?',
    ctaDescription: 'I build the operational infrastructure that makes marketing teams more effective, data driven, and accountable.',
    ctaColor: '#0ea5e9',
    links: {
      siblings: ['marketing-technology-manager', 'marketing-analytics-manager', 'marketing-automation-manager', 'crm-marketing-manager'],
      tools: ['google-tag-manager', 'google-analytics-4', 'bigquery', 'sql-for-marketing', 'looker-studio'],
      topics: ['what-is-marketing-technology', 'server-side-tracking-explained', 'marketing-technology-stack', 'data-driven-marketing'],
      relatedTopics: ['marketing-technology', 'marketing-technology-manager', 'marketing-analytics-manager', 'marketing-automation-manager', 'crm-marketing-manager', 'google-tag-manager', 'google-analytics-4', 'bigquery'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 5. REVENUE GROWTH MANAGER
  // Positioning: Mid-level, Performance Marketing pillar, revenue focused, full funnel
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'revenue-growth-manager',
    title: 'Revenue Growth Manager',
    seoTitle: 'Revenue Growth Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the revenue growth manager role: connecting marketing activities directly to revenue outcomes through data analysis, funnel optimization, and cross functional collaboration.',
    parentHub: 'performance-marketing',
    circleColor: '#10b981',
    heroContent: `The Revenue Growth Manager focuses on connecting marketing and sales activities directly to revenue outcomes. Unlike a [Performance Marketing Manager](/performance-marketing-manager) who optimizes campaigns, or a [Growth Marketing Manager](/growth-marketing-manager) who focuses on acquisition and retention, the Revenue Growth Manager takes an end to end view of how the business generates and grows revenue.

This page explains how I approach revenue growth, what makes this role distinct from other marketing roles, and how the position bridges marketing, sales, and product to drive measurable business results.`,

    features: [
      { icon: 'DollarSign', title: 'Revenue Attribution', description: 'Building systems that connect marketing activities to actual revenue. Moving beyond lead counting to understand which channels, campaigns, and content pieces contribute to closed deals and recurring revenue.' },
      { icon: 'TrendingUp', title: 'Funnel Optimization', description: 'Analyzing and improving every stage of the revenue funnel from initial awareness through purchase and expansion. Identifying where revenue leaks occur and fixing them systematically.' },
      { icon: 'PieChart', title: 'Channel Economics', description: 'Understanding the unit economics of each marketing channel: customer acquisition cost, payback period, and lifetime value by channel. Allocating investment based on revenue contribution, not just lead volume.' },
      { icon: 'Users', title: 'Sales and Marketing Alignment', description: 'Creating shared definitions, processes, and goals between marketing and sales teams. Ensuring that marketing generates leads that sales can actually close, and that sales provides feedback that improves marketing effectiveness.' },
      { icon: 'BarChart3', title: 'Revenue Forecasting', description: 'Building models that predict revenue based on pipeline data, historical conversion rates, and marketing activity levels. Providing leadership with reliable forward looking projections.' },
      { icon: 'Repeat', title: 'Expansion Revenue', description: 'Identifying opportunities to grow revenue from existing customers through upselling, cross selling, and reducing churn. Customer expansion is often more profitable than new customer acquisition.' },
    ],
    featuresDescription: 'The Revenue Growth Manager connects marketing activities to business revenue through analysis, optimization, and cross functional collaboration.',

    approachContent: `My approach to revenue growth starts with understanding the full revenue picture. Most marketing teams measure leads, clicks, and conversion rates. Revenue Growth Managers measure pipeline value, win rates, customer lifetime value, and revenue per marketing dollar spent. This shift in perspective changes every decision.

I bring a [performance marketing](/performance-marketing) foundation with deep experience in [Google Ads](/google-ads) and [Meta Ads](/meta-ads) campaign management. At the revenue growth level, I apply that measurement discipline to the entire customer journey, not just paid acquisition. The question changes from how many leads did this campaign generate to how much revenue did this campaign contribute over 12 months.

[Attribution modeling](/attribution-modeling-explained) is central to this work. Simple last touch attribution dramatically undervalues top of funnel activities and overvalues bottom of funnel conversions. I build multi touch attribution models that give a more accurate picture of how marketing touchpoints contribute to revenue. This changes budget allocation in meaningful ways.

The relationship between marketing and sales is where revenue growth happens or stalls. I have seen companies where marketing celebrates generating thousands of leads while sales complains about lead quality. The Revenue Growth Manager fixes this disconnect by creating shared definitions of qualified leads, establishing feedback loops, and aligning both teams around revenue metrics rather than departmental vanity metrics.

I also focus heavily on existing customer revenue. Many companies invest almost all their marketing budget in new customer acquisition while ignoring the customers they already have. Expansion revenue, reduced churn, and improved customer lifetime value often produce better returns than acquiring new customers. A balanced revenue growth strategy includes both acquisition and retention.`,

    processSteps: [
      { icon: 'Search', title: 'Revenue Analysis', description: 'Map the complete revenue picture including new customer acquisition, expansion, retention, and churn. Identify the biggest opportunities and bottlenecks across the entire revenue lifecycle.' },
      { icon: 'BarChart3', title: 'Attribution and Measurement', description: 'Build the attribution framework that connects marketing activities to revenue outcomes. Implement tracking across the full funnel and create reporting that shows true revenue contribution by channel.' },
      { icon: 'Target', title: 'Funnel Optimization', description: 'Identify and fix revenue leaks at each funnel stage. Test improvements to conversion rates, sales handoff processes, and customer onboarding. Every percentage point improvement compounds over time.' },
      { icon: 'TrendingUp', title: 'Scale and Forecast', description: 'Once the measurement framework is solid and key bottlenecks are addressed, increase investment in proven channels. Build revenue forecasting models that help leadership plan with confidence.' },
    ],
    processDescription: 'A revenue first approach to marketing that connects every activity to business outcomes.',

    faqItems: [
      { question: 'What is the difference between a Revenue Growth Manager and a Growth Marketing Manager?', answer: 'The Growth Marketing Manager typically focuses on acquisition and top of funnel growth, often with a strong emphasis on experimentation and new channels. The Revenue Growth Manager takes a broader view that includes the full revenue lifecycle: acquisition, conversion, retention, expansion, and revenue forecasting. The revenue focus means this role works more closely with sales and success teams than a typical growth marketer.' },
      { question: 'What tools does a Revenue Growth Manager use?', answer: 'CRM systems are the primary tool, since they contain the revenue data. Marketing automation platforms for tracking lead progression. Analytics tools like Google Analytics 4 for campaign tracking. Data warehouses and BI tools for revenue modeling and reporting. Attribution platforms for understanding multi touch contribution. The specific tools matter less than the ability to connect data across systems to build a complete revenue picture.' },
      { question: 'How does revenue growth management differ from sales operations?', answer: 'Revenue growth management sits between marketing and sales, focused on optimizing the full revenue funnel. Sales operations focuses specifically on sales team efficiency: CRM management, territory planning, compensation design, and sales process optimization. The Revenue Growth Manager works upstream of sales operations, ensuring that the pipeline feeding into sales is healthy and that marketing activities are aligned with revenue goals.' },
      { question: 'How do you handle the tension between short term revenue and long term growth?', answer: 'By making the tradeoff explicit and measurable. Some marketing activities produce revenue this quarter, like paid search for high intent keywords. Others build pipeline for next quarter or next year, like content marketing and brand investment. I present both types of investment to leadership with expected timelines and returns so they can make informed decisions about the balance.' },
      { question: 'What background is best for a Revenue Growth Manager?', answer: 'The most effective Revenue Growth Managers combine marketing expertise with strong analytical skills and business acumen. Common backgrounds include performance marketing, marketing analytics, product marketing, or sales operations. The critical requirement is the ability to think about marketing in revenue terms and communicate in the language of business outcomes, not marketing metrics.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition and measurement.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Campaign management and optimization.', href: '/performance-marketing-manager' },
      { title: 'Growth Marketing Manager', description: 'Growth strategy and experimentation.', href: '/growth-marketing-manager' },
      { title: 'User Acquisition Manager', description: 'User growth and CAC optimization.', href: '/user-acquisition-manager' },
      { title: 'Google Ads', description: 'Search advertising management.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising expertise.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Bing search advertising.', href: '/microsoft-ads' },
      { title: 'Attribution Modeling', description: 'Revenue attribution explained.', href: '/attribution-modeling-explained' },
    ],
    ctaHeading: 'Need Help Connecting Marketing to Revenue?',
    ctaDescription: 'I help companies build the systems and processes that connect marketing activities directly to revenue outcomes.',
    ctaColor: '#10b981',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 6. LIFECYCLE MARKETING MANAGER
  // Positioning: Mid-level, Performance Marketing pillar, retention, customer journey, post-acquisition
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'lifecycle-marketing-manager',
    title: 'Lifecycle Marketing Manager',
    seoTitle: 'Lifecycle Marketing Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the lifecycle marketing manager role: designing customer journey programs that improve retention, increase lifetime value, and reduce churn.',
    parentHub: 'performance-marketing',
    circleColor: '#ec4899',
    heroContent: `The Lifecycle Marketing Manager designs and executes marketing programs that engage customers throughout their entire relationship with a company: from first purchase through retention, expansion, and win back. While most marketing roles focus on acquiring new customers, lifecycle marketing focuses on making existing customer relationships more valuable.

This page explains how I approach lifecycle marketing, what the role involves, and how effective lifecycle programs directly improve customer retention and lifetime value within a [performance marketing](/performance-marketing) framework.`,

    features: [
      { icon: 'RefreshCw', title: 'Retention Programs', description: 'Building systematic programs that keep customers engaged and reduce churn. Identifying early warning signals of disengagement and creating automated interventions that address them before customers leave.' },
      { icon: 'Mail', title: 'Lifecycle Email Campaigns', description: 'Designing triggered email programs for every stage of the customer journey: onboarding, activation, engagement, renewal, and win back. Each program is data driven and continuously optimized.' },
      { icon: 'Users', title: 'Customer Segmentation', description: 'Creating actionable customer segments based on behavior, value, and lifecycle stage. Tailoring communication and offers to each segment rather than sending the same message to all customers.' },
      { icon: 'TrendingUp', title: 'Lifetime Value Optimization', description: 'Identifying and implementing strategies that increase customer lifetime value including cross selling, upselling, and increasing purchase frequency. Making each customer relationship more valuable over time.' },
      { icon: 'BarChart3', title: 'Cohort Analysis', description: 'Tracking customer behavior by cohort to understand how different groups perform over time. Using cohort data to identify trends, measure program effectiveness, and predict future performance.' },
      { icon: 'Heart', title: 'Customer Health Scoring', description: 'Building models that predict which customers are at risk of churning based on engagement patterns, usage data, and behavioral signals. Prioritizing retention efforts on customers where intervention will have the most impact.' },
    ],
    featuresDescription: 'Lifecycle Marketing focuses on the full customer relationship, not just acquisition.',

    approachContent: `My approach to lifecycle marketing is grounded in a simple observation: acquiring a new customer costs far more than retaining an existing one, yet most companies spend the majority of their marketing budget on acquisition. Lifecycle marketing corrects this imbalance by investing in programs that make existing customer relationships more valuable.

I come from a [performance marketing](/performance-marketing) background, which means I apply the same measurement rigor to retention programs that most companies only apply to acquisition campaigns. Every lifecycle program I build has clear success metrics, A/B testing protocols, and attribution to business outcomes. Retention marketing should not be a cost center running on autopilot. It should be a measurable, optimized function.

The foundation of lifecycle marketing is customer data. I work with [Google Analytics 4](/google-analytics-4) and [BigQuery](/bigquery) to build detailed views of customer behavior across the journey. Which customers are most engaged? Where do customers typically drop off? What actions predict long term retention? These questions can only be answered with clean, integrated data.

Segmentation is where lifecycle marketing becomes powerful. Sending the same reengagement email to a customer who purchased once six months ago and a loyal customer who has bought ten times but recently went quiet is a waste. I build segments based on recency, frequency, monetary value, and behavioral signals, then design specific programs for each group.

I also believe lifecycle marketing and acquisition marketing should work together, not in silos. The acquisition team at [performance marketing](/performance-marketing) level needs to understand which channels produce customers with the highest lifetime value, not just the lowest acquisition cost. I create feedback loops that help acquisition teams optimize for long term value rather than short term volume.`,

    processSteps: [
      { icon: 'Map', title: 'Journey Mapping and Data Audit', description: 'Map the complete customer lifecycle and audit available data. Identify which stages have the biggest drop offs and where improved engagement would have the most revenue impact.' },
      { icon: 'Users', title: 'Segmentation Framework', description: 'Build a segmentation model based on customer behavior, value, and lifecycle stage. Create distinct customer groups with specific communication strategies for each.' },
      { icon: 'GitBranch', title: 'Program Design and Build', description: 'Design lifecycle programs for priority stages: onboarding, activation, retention, expansion, and win back. Build automated workflows with personalized content for each segment.' },
      { icon: 'BarChart3', title: 'Measure and Iterate', description: 'Track program performance against retention, lifetime value, and revenue metrics. Run continuous tests on messaging, timing, and offers. Share insights with acquisition teams to improve full funnel performance.' },
    ],
    processDescription: 'A data driven approach to making every customer relationship more valuable over time.',

    faqItems: [
      { question: 'What is the difference between lifecycle marketing and CRM marketing?', answer: 'The terms overlap significantly. CRM marketing typically refers to marketing activities that use CRM data to target and personalize communication with customers. Lifecycle marketing is a broader strategic concept that covers the entire customer journey from acquisition through retention and win back. In practice, CRM is often the primary tool for executing lifecycle marketing programs, but lifecycle strategy extends beyond what happens in the CRM.' },
      { question: 'What metrics should a Lifecycle Marketing Manager track?', answer: 'Customer retention rate and churn rate are the primary metrics. Beyond those: customer lifetime value, repeat purchase rate, average order value trends, time between purchases, onboarding completion rate, and engagement scores. Each lifecycle stage has its own key metrics. The most important thing is tracking trends over time rather than looking at snapshots.' },
      { question: 'How does lifecycle marketing work in B2B versus B2C?', answer: 'The principles are the same but the execution differs. B2C lifecycle marketing often involves high volume, automated communication triggered by purchase behavior and engagement patterns. B2B lifecycle marketing involves longer cycles, multiple stakeholders, and closer coordination with customer success teams. B2B programs tend to be more personalized and relationship driven, while B2C programs rely more on automation at scale.' },
      { question: 'When should a company invest in lifecycle marketing?', answer: 'Once the acquisition engine is producing a steady flow of customers. If customer volume is too low, lifecycle programs will not have enough data to optimize or enough impact to justify the investment. Most companies should start investing seriously in lifecycle marketing when they have a few thousand customers and can see patterns in retention and churn data.' },
      { question: 'What is a good customer retention rate?', answer: 'It varies dramatically by industry and business model. SaaS companies typically target annual retention above 85 to 90 percent. E-commerce repeat purchase rates vary from 20 to 40 percent depending on the category. The most useful benchmark is your own historical data and how your rate changes over time. Improving retention by even a few percentage points can have a significant impact on revenue.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Acquisition and growth strategy.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Campaign management expertise.', href: '/performance-marketing-manager' },
      { title: 'Growth Marketing Manager', description: 'Full funnel growth strategy.', href: '/growth-marketing-manager' },
      { title: 'User Acquisition Manager', description: 'New user growth focus.', href: '/user-acquisition-manager' },
      { title: 'Google Ads', description: 'Search advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Bing search advertising.', href: '/microsoft-ads' },
      { title: 'Attribution Modeling', description: 'Marketing attribution explained.', href: '/attribution-modeling-explained' },
    ],
    ctaHeading: 'Want to Improve Customer Retention?',
    ctaDescription: 'I build lifecycle marketing programs that reduce churn, increase lifetime value, and make existing customer relationships more profitable.',
    ctaColor: '#ec4899',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 7. CRM MARKETING MANAGER
  // Positioning: Mid-level, MarTech pillar, CRM data, segmentation, customer communication
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'crm-marketing-manager',
    title: 'CRM Marketing Manager',
    seoTitle: 'CRM Marketing Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the CRM marketing manager role: using customer data to build personalized marketing programs that improve retention, conversion, and customer lifetime value.',
    parentHub: 'marketing-technology',
    circleColor: '#14b8a6',
    heroContent: `The CRM Marketing Manager uses customer data stored in the CRM system to build targeted, personalized marketing programs. The role combines [marketing technology](/marketing-technology) expertise with customer insight to create communication that is relevant to each customer based on their behavior, preferences, and relationship with the company.

This page explains how I approach CRM marketing, what distinguishes it from general email marketing, and how effective CRM programs improve customer retention and revenue.`,

    features: [
      { icon: 'Database', title: 'CRM Data Strategy', description: 'Defining what customer data to collect, how to structure it, and how to keep it clean. Building the data foundation that makes all CRM marketing programs possible. Without good data, even the best campaigns underperform.' },
      { icon: 'Users', title: 'Audience Segmentation', description: 'Creating customer segments based on purchase history, engagement level, demographics, and behavioral signals. Building segments that are actionable for marketing campaigns and meaningful for business decisions.' },
      { icon: 'Mail', title: 'Personalized Campaigns', description: 'Designing marketing campaigns that use CRM data to deliver personalized messages. Moving beyond basic name insertion to true personalization based on customer behavior and preferences.' },
      { icon: 'GitBranch', title: 'Customer Journey Automation', description: 'Building automated communication flows triggered by customer actions. Welcome series, post purchase follow ups, reengagement campaigns, and milestone communications that run continuously without manual intervention.' },
      { icon: 'BarChart3', title: 'Campaign Performance Analysis', description: 'Measuring campaign performance beyond open and click rates. Tracking revenue contribution, customer retention impact, and lifetime value changes attributable to CRM marketing programs.' },
      { icon: 'Shield', title: 'Data Privacy Compliance', description: 'Ensuring CRM marketing programs comply with data privacy regulations including consent management, data access requests, and proper data handling. Building trust with customers through transparent data practices.' },
    ],
    featuresDescription: 'CRM Marketing turns customer data into personalized programs that drive retention and revenue.',

    approachContent: `My approach to CRM marketing starts with the data. The quality of every CRM program depends on the quality of the underlying customer data. Before building any campaigns, I audit the CRM data: What fields are populated? What is the data quality? What customer behaviors are being tracked? What is missing? This audit almost always reveals gaps that need to be addressed before campaigns can be effective.

I work within the broader [marketing technology](/marketing-technology) ecosystem, connecting CRM data with [Google Analytics 4](/google-analytics-4) for behavior tracking, [Google Tag Manager](/google-tag-manager) for event capture, and [BigQuery](/bigquery) for deeper analysis when needed. CRM marketing works best when it draws on data from multiple sources, not just what the sales team enters into the CRM.

The most valuable CRM marketing programs are triggered, not scheduled. A birthday email is nice but has limited business impact. An email sent two days after a customer browses a product category but does not purchase, personalized with the specific products they viewed, drives real revenue. I build programs around customer behaviors that indicate intent or risk, not arbitrary calendar dates.

I also focus on the relationship between CRM marketing and the [Marketing Operations Manager](/marketing-operations-manager) and [Marketing Automation Manager](/marketing-automation-manager) roles. These three functions share tools and data, and they need to be coordinated. CRM strategy defines what to communicate and to whom. Operations ensures the systems work. Automation builds the technical workflows. When all three are aligned, the results compound.

Measurement in CRM marketing requires looking beyond email metrics. Open rates and click rates are operational indicators, not business metrics. I measure CRM program success by customer retention rates, repeat purchase frequency, average order value trends, and incremental revenue attributable to CRM campaigns versus a holdout group that receives no communication.`,

    processSteps: [
      { icon: 'Database', title: 'Data Audit and Foundation', description: 'Audit existing CRM data quality, identify gaps, and establish data standards. Clean up existing records and build processes to maintain data quality going forward.' },
      { icon: 'Users', title: 'Segmentation and Strategy', description: 'Build customer segments based on available data. Define the communication strategy for each segment: what messages, what frequency, what channels, and what goals.' },
      { icon: 'GitBranch', title: 'Campaign Build and Launch', description: 'Build the campaigns and automation flows in the CRM and marketing platforms. Test thoroughly with small audiences before scaling to full segments.' },
      { icon: 'BarChart3', title: 'Measure and Optimize', description: 'Track business outcomes, not just email metrics. Run holdout tests to measure incremental impact. Continuously refine segments, messaging, and timing based on results.' },
    ],
    processDescription: 'A data-first approach to CRM marketing that produces measurable business impact.',

    faqItems: [
      { question: 'What is the difference between CRM marketing and email marketing?', answer: 'Email marketing sends messages to lists. CRM marketing uses customer data to send personalized, behavior-driven communication through multiple channels. CRM marketing is strategic: it considers the full customer relationship, purchase history, and engagement patterns to determine what to communicate and when. Email marketing is a channel. CRM marketing is a discipline that uses email as one of its tools.' },
      { question: 'What CRM platforms are best for marketing?', answer: 'The best platform depends on the business size, complexity, and existing technology stack. Salesforce is the standard for enterprise B2B. HubSpot works well for mid market companies that want marketing and sales in one platform. Smaller companies often use tools like ActiveCampaign or Klaviyo. The platform matters less than how well it is implemented and maintained. A well managed simple CRM outperforms a poorly used enterprise platform.' },
      { question: 'How does CRM marketing work with performance marketing?', answer: 'CRM data improves performance marketing and vice versa. CRM customer segments can be used to create lookalike audiences for paid acquisition. Performance marketing acquisition data flows into the CRM to track the full customer journey. Understanding which acquisition channels produce the highest lifetime value customers requires connecting CRM and acquisition data together.' },
      { question: 'How do you measure CRM marketing success?', answer: 'The most important metrics are customer retention rate, repeat purchase rate, and customer lifetime value. These show whether CRM marketing is making customer relationships more valuable. I also measure incremental revenue from CRM campaigns using holdout tests: compare the revenue of customers who receive CRM marketing versus a control group that does not. This isolates the true impact of the programs.' },
      { question: 'What is the biggest challenge in CRM marketing?', answer: 'Data quality. Every CRM marketing program is only as good as the data behind it. Incomplete records, duplicate entries, outdated information, and inconsistent formatting all reduce campaign effectiveness. Building and maintaining clean CRM data requires ongoing discipline from every team that touches the system: marketing, sales, and customer support. Without this discipline, even the best campaign strategy will underperform.' },
    ],

    relatedCards: [
      { title: 'Marketing Technology', description: 'MarTech strategy and tools.', href: '/marketing-technology' },
      { title: 'Marketing Technology Manager', description: 'MarTech stack leadership.', href: '/marketing-technology-manager' },
      { title: 'Marketing Analytics Manager', description: 'Data and analytics leadership.', href: '/marketing-analytics-manager' },
      { title: 'Marketing Automation Manager', description: 'Automation workflows.', href: '/marketing-automation-manager' },
      { title: 'Marketing Operations Manager', description: 'Marketing ops and processes.', href: '/marketing-operations-manager' },
      { title: 'Google Tag Manager', description: 'Tag management and tracking.', href: '/google-tag-manager' },
      { title: 'Google Analytics 4', description: 'Web and app analytics.', href: '/google-analytics-4' },
      { title: 'BigQuery', description: 'Marketing data warehouse.', href: '/bigquery' },
    ],
    ctaHeading: 'Need CRM Marketing Expertise?',
    ctaDescription: 'I build CRM programs that use customer data to improve retention, increase lifetime value, and drive measurable revenue growth.',
    ctaColor: '#14b8a6',
    links: {
      siblings: ['marketing-technology-manager', 'marketing-analytics-manager', 'marketing-automation-manager', 'marketing-operations-manager'],
      tools: ['google-tag-manager', 'google-analytics-4', 'bigquery', 'sql-for-marketing', 'looker-studio'],
      topics: ['what-is-marketing-technology', 'server-side-tracking-explained', 'marketing-technology-stack', 'data-driven-marketing'],
      relatedTopics: ['marketing-technology', 'marketing-technology-manager', 'marketing-analytics-manager', 'marketing-automation-manager', 'marketing-operations-manager', 'google-tag-manager', 'google-analytics-4', 'bigquery'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 8. GROWTH STRATEGY CONSULTANT
  // Positioning: Consultant, Performance Marketing pillar, external advisory, strategy focused
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'growth-strategy-consultant',
    title: 'Growth Strategy Consultant',
    seoTitle: 'Growth Strategy Consultant | Alexander Kropivnitski',
    seoDescription: 'How I approach growth strategy consulting: helping companies identify growth opportunities, build marketing strategies, and implement programs that produce measurable results.',
    parentHub: 'performance-marketing',
    circleColor: '#f97316',
    heroContent: `A Growth Strategy Consultant helps companies identify and capture growth opportunities through strategic analysis, marketing planning, and implementation guidance. Unlike an in house role, the consultant brings external perspective, cross industry experience, and the ability to focus on high impact strategic questions without being pulled into daily operations.

This page explains how I approach growth strategy consulting, what distinguishes strategic consulting from tactical marketing services, and how companies benefit from external [performance marketing](/performance-marketing) expertise applied at the strategy level.`,

    features: [
      { icon: 'Search', title: 'Growth Opportunity Assessment', description: 'Analyzing the business, market, and competitive landscape to identify the highest impact growth opportunities. Prioritizing opportunities based on potential revenue impact, feasibility, and alignment with business strengths.' },
      { icon: 'Compass', title: 'Marketing Strategy Development', description: 'Building comprehensive marketing strategies that connect business goals to specific channels, tactics, and investment levels. Creating strategies that are actionable, not theoretical.' },
      { icon: 'BarChart3', title: 'Performance Benchmarking', description: 'Evaluating current marketing performance against industry benchmarks and best practices. Identifying specific areas where performance is below potential and recommending targeted improvements.' },
      { icon: 'Map', title: 'Go to Market Planning', description: 'Helping companies plan market entry or expansion. Defining target audiences, positioning, channel strategy, and launch timelines for new products, markets, or business lines.' },
      { icon: 'Target', title: 'Channel Strategy and Investment', description: 'Recommending which marketing channels to invest in based on the business model, competitive dynamics, and growth targets. Providing budget allocation frameworks that optimize for revenue growth.' },
      { icon: 'Layers', title: 'Organizational Design', description: 'Advising on marketing team structure, roles, and capabilities. Recommending whether to build in house, hire agencies, or use a hybrid model. Helping companies build the marketing organization they need.' },
    ],
    featuresDescription: 'Growth Strategy Consulting provides external expertise to identify and capture growth opportunities.',

    approachContent: `My approach to growth strategy consulting starts with listening. Before recommending anything, I need to understand the business deeply: the revenue model, unit economics, competitive position, customer profile, and organizational capabilities. Strategy recommendations that ignore business reality are useless.

I bring a [performance marketing](/performance-marketing) background to consulting work, which means my strategies are grounded in measurable channels and quantifiable outcomes. I have hands on experience managing [Google Ads](/google-ads), [Meta Ads](/meta-ads), and [Microsoft Ads](/microsoft-ads) campaigns, which gives me practical understanding of what channels can realistically deliver. Consultants who only work at the strategy level sometimes recommend approaches that do not survive contact with operational reality.

The most valuable thing an external consultant brings is pattern recognition across companies and industries. I have seen what works and what does not across different business models, market stages, and competitive environments. This cross pollination of ideas helps companies avoid common mistakes and adopt proven approaches faster than they would discover them independently.

I also believe strongly in building internal capability, not creating dependency. My goal in every consulting engagement is to make myself unnecessary. I document strategies, train teams, build frameworks, and create processes that the company can execute independently after the engagement ends. A consultant who creates dependency is solving for their own revenue, not the client outcome.

Measurement and accountability are central to my consulting practice. Every strategy I develop includes clear success metrics and review points. If a strategy is not producing results within the expected timeframe, we adjust. I do not charge for months of analysis before any action is taken. Rapid assessment, focused strategy, and measurable execution is the approach that produces results for clients.`,

    processSteps: [
      { icon: 'Search', title: 'Discovery and Assessment', description: 'Deep dive into the business, market, and current marketing performance. Interview stakeholders, review data, and analyze the competitive landscape. Complete within two to three weeks.' },
      { icon: 'Map', title: 'Strategy Development', description: 'Build the growth strategy based on assessment findings. Define target markets, channel priorities, investment levels, and success metrics. Present to leadership for alignment.' },
      { icon: 'Rocket', title: 'Implementation Planning', description: 'Create a detailed implementation plan with timelines, responsibilities, and milestones. Identify resource requirements and organizational changes needed to execute the strategy.' },
      { icon: 'TrendingUp', title: 'Execution Support and Review', description: 'Provide ongoing advisory support during implementation. Review progress against milestones, help solve problems that arise, and adjust strategy based on results.' },
    ],
    processDescription: 'A structured consulting approach that moves from assessment to measurable results quickly.',

    faqItems: [
      { question: 'When should a company hire a growth strategy consultant?', answer: 'When the company faces a strategic inflection point: entering a new market, launching a new product, scaling marketing spend significantly, restructuring the marketing team, or when existing approaches have plateaued. Consultants are also valuable when internal teams are too close to the problem to see it objectively or when the company needs expertise it does not have internally.' },
      { question: 'How is growth strategy consulting different from hiring an agency?', answer: 'Agencies typically execute campaigns within specific channels. Consultants work at the strategy level: defining which channels to invest in, how to allocate budget, how to structure the team, and what the overall marketing approach should be. A consultant might recommend which agencies to hire and how to manage them. The relationship is strategic guidance versus tactical execution.' },
      { question: 'How long does a typical growth strategy engagement last?', answer: 'The initial strategy phase usually takes four to eight weeks, from discovery through final strategy presentation. Many engagements then continue with implementation support for three to six months. Some companies retain ongoing advisory relationships for quarterly strategy reviews and ad hoc guidance. The structure depends on how much implementation support the internal team needs.' },
      { question: 'What results should a company expect from growth strategy consulting?', answer: 'A clear, actionable growth strategy with specific channel recommendations, budget allocations, and success metrics. Performance improvement targets based on benchmarking. An implementation roadmap with priorities and timelines. Most importantly, the strategy should be executable by the internal team or agencies, not dependent on the consultant for ongoing execution.' },
      { question: 'How do you ensure consulting recommendations actually get implemented?', answer: 'By making recommendations practical and specific. Abstract strategy documents collect dust. I create detailed implementation plans with clear responsibilities, timelines, and milestones. I stay involved during early implementation to help solve problems and maintain momentum. And I design strategies that match the organization capabilities rather than recommending approaches the team cannot actually execute.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition strategy.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Campaign management.', href: '/performance-marketing-manager' },
      { title: 'Growth Marketing Manager', description: 'Growth and experimentation.', href: '/growth-marketing-manager' },
      { title: 'User Acquisition Manager', description: 'New user growth.', href: '/user-acquisition-manager' },
      { title: 'Google Ads', description: 'Search advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Bing search advertising.', href: '/microsoft-ads' },
      { title: 'Attribution Modeling', description: 'Revenue attribution.', href: '/attribution-modeling-explained' },
    ],
    ctaHeading: 'Need Growth Strategy Guidance?',
    ctaDescription: 'I help companies identify growth opportunities and build marketing strategies that produce measurable results.',
    ctaColor: '#f97316',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 9. DIGITAL STRATEGY CONSULTANT
  // Positioning: Consultant, Performance Marketing pillar, digital transformation, multi channel
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'digital-strategy-consultant',
    title: 'Digital Strategy Consultant',
    seoTitle: 'Digital Strategy Consultant | Alexander Kropivnitski',
    seoDescription: 'How I approach digital strategy consulting: helping companies build effective digital marketing programs across channels, from paid advertising to analytics and marketing technology.',
    parentHub: 'performance-marketing',
    circleColor: '#6366f1',
    heroContent: `A Digital Strategy Consultant helps companies plan and execute their digital marketing presence across channels, platforms, and technologies. The role covers everything from [performance marketing](/performance-marketing) channel selection and budget allocation to analytics infrastructure and digital team structure.

This page explains how I approach digital strategy consulting, what separates strategic digital advice from tactical campaign management, and how companies benefit from having a structured digital strategy before investing in execution.`,

    features: [
      { icon: 'Compass', title: 'Digital Strategy Development', description: 'Building comprehensive digital strategies that align with business objectives. Defining which digital channels to invest in, what each channel should deliver, and how they work together as an integrated program.' },
      { icon: 'Search', title: 'Digital Maturity Assessment', description: 'Evaluating a company current digital marketing capabilities across channels, technology, data, and team. Identifying gaps between current state and where the business needs to be to achieve its growth goals.' },
      { icon: 'BarChart3', title: 'Channel Performance Analysis', description: 'Analyzing the performance of existing digital channels against benchmarks and potential. Identifying which channels are underperforming and where additional investment would produce the best returns.' },
      { icon: 'Settings', title: 'Technology Recommendations', description: 'Advising on the digital marketing technology stack including analytics, advertising platforms, automation tools, and data infrastructure. Recommending tools that match the company needs and capabilities.' },
      { icon: 'Users', title: 'Team and Capability Building', description: 'Advising on digital marketing team structure, skill requirements, and hiring priorities. Helping companies decide what to build in house versus outsource to agencies or freelancers.' },
      { icon: 'Map', title: 'Digital Roadmap Creation', description: 'Creating prioritized implementation roadmaps that sequence digital marketing investments for maximum impact. Balancing quick wins with longer term strategic initiatives.' },
    ],
    featuresDescription: 'Digital Strategy Consulting helps companies build effective, integrated digital marketing programs.',

    approachContent: `My approach to digital strategy starts with the business objectives, not the digital tactics. Many companies approach digital marketing channel by channel: we need a Google Ads strategy, we need a social media strategy, we need a content strategy. This leads to fragmented execution without a unifying direction. I start by defining what the business needs from digital marketing overall, then build the channel strategy to support those goals.

I bring hands on experience with [performance marketing](/performance-marketing) channels including [Google Ads](/google-ads), [Meta Ads](/meta-ads), and [Microsoft Ads](/microsoft-ads). This practical background means my strategy recommendations are grounded in operational reality. I know what channels can deliver, what they cost, and what infrastructure they require because I have managed them directly.

The analytics and measurement strategy is a critical part of every digital strategy engagement. Without proper [Google Analytics 4](/google-analytics-4) implementation, [attribution modeling](/attribution-modeling-explained), and reporting infrastructure, companies cannot evaluate whether their digital investments are working. I build measurement frameworks as part of the strategy, not as an afterthought.

Integration is the biggest opportunity in most digital strategies. Companies often run channels independently: the paid team does not coordinate with the SEO team, email marketing does not use paid audience data, and content strategy is disconnected from search intent research. I design strategies that create these connections, so each channel amplifies the others rather than operating in isolation.

I also help companies avoid two common mistakes in digital strategy. The first is spreading budget too thin across too many channels. A focused strategy that does two or three channels well beats a scattered approach that does eight channels poorly. The second is chasing trends. Not every new platform or feature deserves investment. I help companies evaluate new digital opportunities against clear criteria before committing resources.`,

    processSteps: [
      { icon: 'Search', title: 'Digital Audit', description: 'Comprehensive review of current digital marketing activities, performance, technology, and team capabilities. Benchmark against industry standards and competitor activity. Identify the biggest opportunities and gaps.' },
      { icon: 'Compass', title: 'Strategy Development', description: 'Define the digital strategy: target audiences, channel priorities, budget allocation, measurement framework, and technology requirements. Create a strategy that is specific, actionable, and aligned with business goals.' },
      { icon: 'Map', title: 'Implementation Roadmap', description: 'Prioritize strategy elements into a phased roadmap. Define quick wins for immediate impact and longer term initiatives for sustained growth. Specify resource requirements and timelines for each phase.' },
      { icon: 'TrendingUp', title: 'Execution Guidance', description: 'Support the team during implementation with ongoing advisory, performance reviews, and strategy adjustments. Ensure execution stays aligned with the strategic direction.' },
    ],
    processDescription: 'A structured approach to building digital strategies that connect business goals to measurable digital outcomes.',

    faqItems: [
      { question: 'What is the difference between a digital strategy consultant and a digital marketing agency?', answer: 'A digital strategy consultant works at the strategic level: defining what to do, where to invest, and how to measure success. An agency executes: managing campaigns, creating content, and running platforms. Some companies need both. The consultant defines the strategy and the agency executes it. Others have internal teams for execution and only need strategic guidance.' },
      { question: 'How does digital strategy consulting differ from growth strategy consulting?', answer: 'Growth strategy consulting covers all growth levers including product, pricing, partnerships, and marketing. Digital strategy consulting focuses specifically on the digital marketing program: channels, technology, analytics, and digital team capabilities. Digital strategy is often one component of a broader growth strategy. Companies with primarily digital business models may find the two overlap significantly.' },
      { question: 'What deliverables come out of a digital strategy engagement?', answer: 'A comprehensive digital strategy document covering channel strategy, budget allocation, and success metrics. A technology assessment with recommendations. A measurement framework including tracking requirements and reporting structure. A prioritized implementation roadmap with timelines and resource requirements. All deliverables are designed to be actionable by the internal team or agencies.' },
      { question: 'How often should a company update its digital strategy?', answer: 'The foundational strategy should be reviewed annually. Tactical adjustments should happen quarterly based on performance data. Major market changes, new product launches, or significant competitive shifts may require ad hoc strategy updates. The measurement framework built into the strategy provides the data needed to know when adjustments are required.' },
      { question: 'What is the minimum digital marketing budget for strategy consulting to be worthwhile?', answer: 'Companies spending less than a few thousand per month on digital marketing may not need consulting. The strategy matters most when the stakes are higher: annual digital budgets above 100,000 or companies planning significant growth in digital investment. The consulting investment should be proportional to the marketing spend it influences. A strategy engagement that improves ROI on a large budget pays for itself quickly.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition strategy.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Campaign management.', href: '/performance-marketing-manager' },
      { title: 'Growth Marketing Manager', description: 'Growth and experimentation.', href: '/growth-marketing-manager' },
      { title: 'User Acquisition Manager', description: 'New user growth.', href: '/user-acquisition-manager' },
      { title: 'Google Ads', description: 'Search advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Bing search advertising.', href: '/microsoft-ads' },
      { title: 'Attribution Modeling', description: 'Revenue attribution.', href: '/attribution-modeling-explained' },
    ],
    ctaHeading: 'Need Digital Strategy Guidance?',
    ctaDescription: 'I help companies build integrated digital marketing strategies that connect business goals to measurable outcomes across channels.',
    ctaColor: '#6366f1',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
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
