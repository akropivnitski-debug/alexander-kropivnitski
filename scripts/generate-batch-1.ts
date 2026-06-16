import fs from 'fs'
import path from 'path'
import { buildJobRolePage, type PageDraft } from './lib/lexical-helpers'

const OUT_DIR = path.resolve('content/drafts/batch-1')
fs.mkdirSync(OUT_DIR, { recursive: true })

const pages: PageDraft[] = [

  // ═══════════════════════════════════════════════════════
  // 1. SENIOR PERFORMANCE MARKETING MANAGER
  // Positioning: Senior level, strategy + execution, multi-channel orchestration, team mentoring
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'senior-performance-marketing-manager',
    title: 'Senior Performance Marketing Manager',
    seoTitle: 'Senior Performance Marketing Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the senior performance marketing manager role: multi-channel strategy, team leadership, measurement frameworks, and scaling paid programs.',
    parentHub: 'performance-marketing',
    circleColor: '#facc15',
    heroContent: `The senior performance marketing manager role goes beyond campaign execution. It is about building the strategy that guides every channel, setting measurement frameworks that the whole team relies on, and making decisions about where to invest at a higher level. While a [performance marketing manager](/performance-marketing-manager) focuses on hands on campaign work, the senior role adds strategic oversight and team guidance.

This page explains how I approach the role, what makes it different from other [performance marketing](/performance-marketing) positions, and what skills matter most at this level.`,

    features: [
      { icon: 'Compass', title: 'Multi Channel Strategy', description: 'Designing and overseeing paid acquisition strategies across Search, Social, Display, Video, and emerging channels. Deciding where to invest based on incrementality data and business goals, not just platform recommendations.' },
      { icon: 'Users', title: 'Team Mentoring and Development', description: 'Guiding junior and mid level marketers on campaign management, analysis, and strategic thinking. Building a team culture where testing and learning is standard, not optional.' },
      { icon: 'BarChart3', title: 'Measurement and Attribution', description: 'Establishing measurement frameworks that go beyond last click attribution. Working with analytics and data teams to build reporting that reflects actual business impact, not just platform metrics.' },
      { icon: 'TrendingUp', title: 'Budget Planning and Forecasting', description: 'Building annual and quarterly budget plans, forecasting returns at different spend levels, and presenting investment cases to leadership with clear risk and opportunity assessments.' },
      { icon: 'GitBranch', title: 'Cross Functional Alignment', description: 'Working with product, creative, engineering, and finance teams to ensure marketing strategy aligns with broader company priorities. Translating marketing performance into language that non marketers understand.' },
      { icon: 'Lightbulb', title: 'Testing Program Design', description: 'Designing structured experimentation programs that go beyond simple A/B tests. Running incrementality tests, geo experiments, and holdout studies to understand true campaign impact.' },
    ],
    featuresDescription: 'At the senior level, the role shifts from executing campaigns to designing the systems and strategies that make campaigns successful.',

    approachContent: `My approach at the senior level focuses heavily on measurement quality and strategic decision making. I have seen too many marketing teams scale spend based on misleading platform data. Getting the measurement foundation right before making big budget decisions is the most important thing a senior performance marketing manager can do.

I have led [performance marketing](/performance-marketing) programs across multiple markets and channels, including [Google Ads](/google-ads), [Meta Ads](/meta-ads), and [Microsoft Ads](/microsoft-ads). The biggest value I bring at this level is not just knowing how to run campaigns, but knowing how to evaluate whether a channel is genuinely contributing to business growth or simply taking credit for conversions that would have happened anyway.

At the senior level, I also focus on building repeatable processes. When a team relies on one person's intuition, performance is fragile. When it relies on clear frameworks for testing, analysis, and optimization, it becomes consistent and scalable. That is the difference between a good campaign manager and a strong senior leader.

Understanding [attribution](/attribution-modeling-explained) is especially critical at this level. The senior performance marketing manager is often the person who decides how to allocate millions in annual budget across channels. If attribution is wrong, every downstream decision is wrong too.

I have also learned that stakeholder management becomes a larger part of the job at the senior level. Presenting performance data to executives who do not live in the ad platforms every day requires translating complex channel data into clear business narratives. Being able to explain why a channel needs more investment, or why results dipped this quarter, in business terms rather than platform jargon is what earns trust and budget from leadership.`,

    processSteps: [
      { icon: 'Telescope', title: 'Strategic Assessment', description: 'Before making changes, I assess the current marketing mix, measurement setup, team capabilities, and competitive landscape. This creates a clear baseline and identifies the highest impact opportunities across all channels.' },
      { icon: 'Layout', title: 'Framework Design', description: 'I build the operational frameworks the team will use: naming conventions, testing protocols, reporting cadences, budget reallocation triggers, and escalation processes. Good frameworks reduce guesswork and speed up decision making.' },
      { icon: 'Users', title: 'Team Enablement', description: 'I work with team members individually to develop their skills and ensure everyone understands both the tactical execution and the strategic rationale behind decisions. A team that understands the why makes better independent decisions.' },
      { icon: 'Gauge', title: 'Performance Oversight', description: 'Regular reviews of channel performance against targets, with a focus on identifying when results are trending off track early enough to course correct. I look at leading indicators, not just lagging results.' },
      { icon: 'Target', title: 'Strategic Optimization', description: 'Based on ongoing data, I adjust the overall channel mix, budget allocation, and testing priorities. At this level, optimization is about portfolio management across channels rather than individual campaign tweaks.' },
    ],
    processDescription: 'A senior performance marketing manager operates at both the strategic and operational level. Here is how I structure the work.',

    faqItems: [
      { question: 'What is the difference between a performance marketing manager and a senior performance marketing manager?', answer: 'The main differences are scope and responsibility. A performance marketing manager typically focuses on executing and optimizing campaigns within specific channels. A senior performance marketing manager oversees the broader strategy across all paid channels, manages or mentors team members, owns the measurement framework, and makes higher level budget allocation decisions. The senior role requires both deep tactical knowledge and the ability to think strategically about how paid marketing fits into the overall business.' },
      { question: 'What skills matter most at the senior level?', answer: 'Beyond platform expertise, the most valuable skills are strategic thinking, measurement and attribution knowledge, communication with leadership, and the ability to build scalable processes. A senior performance marketing manager needs to translate complex data into clear business recommendations and manage upward effectively. Technical skills are the foundation, but strategic and leadership skills are what differentiate this level.' },
      { question: 'How does a senior performance marketing manager measure success?', answer: 'Success at this level is measured by overall program performance against business targets, not individual campaign metrics. This includes total customer acquisition cost, blended return on ad spend across all channels, year over year growth in efficient spend, and the quality of the team and processes being built. I also look at how well the measurement infrastructure supports good decision making across the organization.' },
      { question: 'Do senior performance marketing managers still manage campaigns directly?', answer: 'It depends on the team size and company. In smaller teams, yes, the senior role often includes hands on campaign work alongside strategic responsibilities. In larger organizations, the senior role is more focused on oversight, strategy, and team management. In my experience, staying close to the data and the platforms, even at the senior level, leads to better strategic decisions.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'The broader discipline and strategic context.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'The mid level hands on campaign execution role.', href: '/performance-marketing-manager' },
      { title: 'Growth Marketing Manager', description: 'Full funnel growth beyond paid channels.', href: '/growth-marketing-manager' },
      { title: 'User Acquisition Manager', description: 'Focused on new user growth and CAC.', href: '/user-acquisition-manager' },
      { title: 'Paid Media Manager', description: 'Media buying and budget allocation.', href: '/paid-media-manager' },
      { title: 'Google Ads', description: 'Primary search and shopping advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Paid social on Facebook and Instagram.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising on the Microsoft network.', href: '/microsoft-ads' },
    ],
    ctaHeading: 'Looking for a Senior Performance Marketing Manager?',
    ctaDescription: 'If you are hiring for a senior performance marketing role or want to discuss how I could strengthen your paid acquisition program, feel free to reach out.',
    links: {
      siblings: ['performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager', 'paid-search-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 2. GROWTH MARKETING MANAGER
  // Positioning: Mid level, full-funnel growth, cross-functional, beyond paid
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'growth-marketing-manager',
    title: 'Growth Marketing Manager',
    seoTitle: 'Growth Marketing Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the growth marketing manager role: full funnel strategy, experimentation, retention, and cross channel optimization beyond just paid media.',
    parentHub: 'performance-marketing',
    circleColor: '#10b981',
    heroContent: `A growth marketing manager works across the full customer journey, not just acquisition. The role covers everything from attracting new users through paid and organic channels to improving activation, retention, and revenue per customer. Unlike a [performance marketing manager](/performance-marketing-manager) who focuses primarily on paid media, a growth marketing manager thinks about every lever that can move the business forward.

This page explains how I approach [growth marketing](/growth-marketing-explained), what distinguishes it from other marketing roles, and where my practical experience applies.`,

    features: [
      { icon: 'Layers', title: 'Full Funnel Optimization', description: 'Working across acquisition, activation, retention, and revenue. Identifying which stage of the funnel has the biggest impact on overall growth and focusing testing efforts there.' },
      { icon: 'TestTube', title: 'Experimentation at Scale', description: 'Designing and running structured experiments across channels, landing pages, onboarding flows, and pricing. Growth marketing depends on consistent testing, not guessing.' },
      { icon: 'RefreshCw', title: 'Retention and Lifecycle Marketing', description: 'Building email, push, and in app messaging programs that keep customers engaged after the first purchase or signup. Reducing churn often has a larger impact on revenue than increasing acquisition.' },
      { icon: 'BarChart3', title: 'Data Driven Decision Making', description: 'Using analytics, cohort analysis, and funnel metrics to prioritize growth initiatives. Every decision should be backed by data, even when the data is imperfect.' },
      { icon: 'Puzzle', title: 'Cross Channel Coordination', description: 'Aligning paid media, SEO, email, product, and content efforts toward shared growth goals. Growth marketing breaks down the silos between these disciplines.' },
      { icon: 'Rocket', title: 'Product Led Growth Integration', description: 'Collaborating with product teams to improve onboarding, reduce friction, and build viral or referral mechanics into the product itself. The best growth strategies use the product as a marketing channel.' },
    ],
    featuresDescription: 'Growth marketing covers more ground than traditional performance marketing. Here are the key areas this role touches.',

    approachContent: `My approach to growth marketing starts with understanding the full customer journey, not just the top of funnel. Many companies spend heavily on acquisition while losing customers further down the funnel. Fixing a leaky bucket is often more profitable than pouring more water in.

I come from a [performance marketing](/performance-marketing) background, which means I bring strong paid media skills to the growth role. But I have expanded into areas like email lifecycle programs, conversion rate optimization, and product analytics. In my experience, the most effective growth marketing managers are the ones who can move between paid acquisition and retention seamlessly, prioritizing wherever the biggest opportunity sits.

Working with tools like [Google Ads](/google-ads) and [Meta Ads](/meta-ads) is part of the role, but a growth marketing manager also needs to understand [marketing technology](/marketing-technology) at a deeper level. Tracking user behavior through the funnel, setting up proper [attribution](/attribution-modeling-explained), and connecting marketing data to product data are all essential capabilities.

The difference between a growth marketing manager and a [senior performance marketing manager](/senior-performance-marketing-manager) is primarily scope. Performance marketing focuses on paid channels. Growth marketing includes paid, organic, product, email, and anything else that can move the needle.`,

    processSteps: [
      { icon: 'Search', title: 'Growth Audit', description: 'I start by mapping the full funnel: acquisition channels, activation rates, retention curves, and revenue metrics. This reveals where the biggest drop offs are and where effort will have the most impact.' },
      { icon: 'Target', title: 'Prioritize Opportunities', description: 'Using an ICE or similar framework, I rank growth opportunities by potential impact, confidence level, and effort required. This prevents the team from working on low impact projects while high value work waits.' },
      { icon: 'Beaker', title: 'Test and Learn', description: 'I design experiments with clear hypotheses, success metrics, and sample sizes. Every test produces a learning, whether it succeeds or fails. Over time, these learnings compound into a significant competitive advantage.' },
      { icon: 'Repeat', title: 'Scale What Works', description: 'When experiments show positive results, I build repeatable systems around them. A successful email sequence becomes a lifecycle program. A winning landing page pattern becomes a template. Growth is about systematizing success.' },
    ],
    processDescription: 'Growth marketing is fundamentally about experimentation. Here is how I structure the process.',

    faqItems: [
      { question: 'What is the difference between growth marketing and performance marketing?', answer: 'Performance marketing focuses on paid acquisition channels with measurable outcomes like cost per acquisition and return on ad spend. Growth marketing takes a broader view, covering the entire customer journey including activation, retention, and revenue optimization. A growth marketing manager might work on paid campaigns one week and email lifecycle flows the next. The role prioritizes whichever lever has the highest impact on overall business growth, regardless of channel.' },
      { question: 'What skills does a growth marketing manager need?', answer: 'A strong growth marketing manager needs paid media expertise, basic data analysis skills, understanding of product analytics, familiarity with email and lifecycle tools, and the ability to design structured experiments. Communication skills are also important because the role requires working across marketing, product, and engineering teams. You do not need to be an expert in every area, but you need to be comfortable enough to identify opportunities and collaborate with specialists.' },
      { question: 'Is growth marketing only for startups?', answer: 'No. Growth marketing originated in the startup world, but the principles apply to companies of all sizes. Larger companies often have dedicated growth teams that sit between marketing and product. The experimentation mindset and full funnel thinking are valuable regardless of company stage. That said, the role tends to be more hands on and varied at smaller companies, and more specialized within a larger team at enterprise organizations.' },
      { question: 'How do you measure growth marketing success?', answer: 'The north star metric depends on the business model. For SaaS, it might be monthly active users or net revenue retention. For ecommerce, it could be customer lifetime value or repeat purchase rate. I track a mix of leading indicators like activation rate and experiment velocity alongside lagging indicators like revenue growth and customer acquisition cost. The key is connecting growth activities to actual business outcomes, not just marketing metrics.' },
      { question: 'Does a growth marketing manager replace a performance marketing manager?', answer: 'Not usually. In larger organizations, both roles exist and complement each other. The performance marketing manager focuses on executing and optimizing paid campaigns, while the growth marketing manager takes a broader view across the funnel. In smaller companies, one person might do both. If you had to choose one role, a growth marketing manager covers more ground, but the depth of paid media expertise might be shallower than a dedicated performance marketing manager.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition strategy and execution.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Hands on paid media campaign management.', href: '/performance-marketing-manager' },
      { title: 'Senior Performance Marketing Manager', description: 'Strategic leadership of paid programs.', href: '/senior-performance-marketing-manager' },
      { title: 'User Acquisition Manager', description: 'Focused specifically on new user growth.', href: '/user-acquisition-manager' },
      { title: 'Paid Media Manager', description: 'Media buying and budget allocation.', href: '/paid-media-manager' },
      { title: 'Google Ads', description: 'Search and shopping advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Paid social advertising.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising on the Microsoft network.', href: '/microsoft-ads' },
    ],
    ctaHeading: 'Looking for a Growth Marketing Manager?',
    ctaDescription: 'If you need someone who can think across the full funnel and drive measurable growth, feel free to reach out.',
    ctaColor: '#10b981',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'user-acquisition-manager', 'paid-media-manager', 'paid-search-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'user-acquisition-manager', 'paid-media-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 3. USER ACQUISITION MANAGER
  // Positioning: Mid level, new user growth, mobile/app focus, CAC optimization
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'user-acquisition-manager',
    title: 'User Acquisition Manager',
    seoTitle: 'User Acquisition Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach user acquisition management: driving new user growth through paid channels, optimizing customer acquisition cost, and scaling mobile and web campaigns.',
    parentHub: 'performance-marketing',
    circleColor: '#8b5cf6',
    heroContent: `A user acquisition manager is focused on one primary objective: bringing new users or customers into the business as efficiently as possible. The role is highly data driven and closely tied to unit economics. Every campaign, every channel, and every creative is evaluated through the lens of customer acquisition cost and long term value.

This role is common in mobile apps, SaaS, ecommerce, and subscription businesses where [growth](/growth-marketing-explained) depends on a steady pipeline of new users. It sits within the broader [performance marketing](/performance-marketing) discipline but with a sharper focus on the top of the funnel.`,

    features: [
      { icon: 'UserPlus', title: 'New User Growth', description: 'Designing and executing campaigns specifically aimed at acquiring new customers or users. This includes identifying the right channels, targeting strategies, and creative approaches for each audience segment.' },
      { icon: 'DollarSign', title: 'CAC Optimization', description: 'Continuously improving customer acquisition cost through bid management, audience refinement, creative testing, and funnel optimization. The goal is acquiring users at a cost that leaves room for the business to be profitable.' },
      { icon: 'Smartphone', title: 'Mobile and App Campaigns', description: 'Running app install campaigns, managing mobile measurement partners, and optimizing for in app events. Mobile user acquisition has its own ecosystem of tools and metrics.' },
      { icon: 'BarChart3', title: 'Cohort and LTV Analysis', description: 'Tracking user cohorts over time to understand which acquisition channels produce the most valuable customers, not just the cheapest ones. A user acquired cheaply who churns in a week has negative value.' },
      { icon: 'Globe', title: 'Multi Market Scaling', description: 'Expanding acquisition efforts into new geographic markets while managing local differences in competition, cost, and user behavior.' },
      { icon: 'Zap', title: 'Creative Performance Testing', description: 'Working with creative teams to rapidly test ad variations. In user acquisition, creative is often the biggest performance lever after targeting and bidding.' },
    ],
    featuresDescription: 'User acquisition management is focused specifically on bringing new users into the business efficiently.',

    approachContent: `My approach to user acquisition starts with understanding the unit economics of the business. Before spending on any channel, I need to know the target customer acquisition cost, the expected lifetime value, and the payback period. Without these numbers, there is no way to know if a campaign is truly successful.

I work across [Google Ads](/google-ads), [Meta Ads](/meta-ads), [Microsoft Ads](/microsoft-ads), and app specific channels depending on the business. For mobile products, I have experience with app install campaigns and working with mobile measurement platforms to track post install events accurately.

The difference between a user acquisition manager and a [performance marketing manager](/performance-marketing-manager) is focus. Performance marketing covers all paid channels and objectives. User acquisition is specifically about bringing new users in. This narrower scope allows for deeper specialization in areas like creative testing velocity, LTV modeling, and [attribution](/attribution-modeling-explained) at the user level.

In my experience, the biggest lever in user acquisition is not bidding strategy. It is understanding which users are worth acquiring and which are not. Many teams optimize for the lowest cost acquisition without checking whether those users actually generate revenue over time. Shifting focus from volume to quality changes the economics dramatically.

Channel diversification is another area where I see user acquisition managers underperform. Relying on a single acquisition channel creates fragility. When that channel's algorithm changes, costs spike, or a policy update disrupts targeting, performance drops overnight. I build acquisition programs that spread risk across multiple channels while maintaining efficiency, so that a disruption in one source does not derail the entire growth plan.`,

    processSteps: [
      { icon: 'Calculator', title: 'Define Unit Economics', description: 'Establish target CAC, expected LTV, and acceptable payback period. These numbers set the guardrails for every campaign and budget decision that follows.' },
      { icon: 'Target', title: 'Channel Testing', description: 'Test multiple channels with controlled budgets to understand which ones deliver users within target economics. Not every channel works for every business. Data should guide the channel mix, not assumptions.' },
      { icon: 'Image', title: 'Creative Iteration', description: 'Launch multiple creative concepts and iterate based on performance data. In user acquisition, creative fatigue is real. Maintaining a pipeline of fresh creative is essential for sustained performance.' },
      { icon: 'TrendingUp', title: 'Scale and Diversify', description: 'Once profitable channels are identified, scale spend while maintaining efficiency. Simultaneously test new channels and markets to reduce dependency on any single source.' },
    ],
    processDescription: 'User acquisition follows a structured process from economics definition to scaling.',

    faqItems: [
      { question: 'What is the difference between user acquisition and growth marketing?', answer: 'User acquisition focuses specifically on the top of funnel, bringing new users into the product. Growth marketing covers the full funnel including activation, retention, and revenue. A user acquisition manager is more specialized, often going deeper on paid channel expertise and creative testing. A growth marketing manager takes a broader view and might deprioritize acquisition if retention or activation is a bigger lever at the time.' },
      { question: 'Which channels work best for user acquisition?', answer: 'It depends entirely on the product and audience. For mobile apps, Meta Ads and Google App campaigns are often the starting point. For SaaS, Google Search and LinkedIn can work well. For ecommerce, Google Shopping and Meta product catalogs tend to perform. The right channel is the one where your target users are and where you can acquire them within your unit economics. Testing is the only way to know for certain.' },
      { question: 'How important is creative in user acquisition?', answer: 'Extremely important, especially on social and video channels. On platforms like Meta and TikTok, creative is often the single biggest driver of performance variation. The same targeting and bidding can produce wildly different results depending on the ad creative. I typically aim to test at least 5 to 10 new creative concepts per month in active acquisition campaigns.' },
      { question: 'How do you measure user acquisition success beyond cost per install?', answer: 'Cost per install or signup is just the starting metric. What matters more is cost per activated user, cost per paying customer, and the ratio of customer acquisition cost to lifetime value. I track user cohorts by acquisition source and date to understand which channels produce users that stick around and generate revenue. A channel with a higher cost per acquisition but better retention can be more valuable than a cheap channel with high churn.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'The broader paid acquisition discipline.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Campaign management across all paid channels.', href: '/performance-marketing-manager' },
      { title: 'Senior Performance Marketing Manager', description: 'Strategic oversight of paid programs.', href: '/senior-performance-marketing-manager' },
      { title: 'Growth Marketing Manager', description: 'Full funnel growth beyond just acquisition.', href: '/growth-marketing-manager' },
      { title: 'Paid Media Manager', description: 'Media buying and platform expertise.', href: '/paid-media-manager' },
      { title: 'Google Ads', description: 'Search, shopping, and app advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising on Facebook and Instagram.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising on the Bing network.', href: '/microsoft-ads' },
    ],
    ctaHeading: 'Need a User Acquisition Manager?',
    ctaDescription: 'If you are looking for someone to build or optimize your user acquisition program, feel free to reach out.',
    ctaColor: '#8b5cf6',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'paid-media-manager', 'paid-search-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'paid-media-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 4. PAID MEDIA MANAGER
  // Positioning: Mid level, media buying, budget allocation, platform expertise
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'paid-media-manager',
    title: 'Paid Media Manager',
    seoTitle: 'Paid Media Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach paid media management: media buying, budget allocation across channels, platform expertise, and campaign optimization for measurable business results.',
    parentHub: 'performance-marketing',
    circleColor: '#f59e0b',
    heroContent: `A paid media manager is responsible for buying and optimizing advertising across digital platforms. The role is fundamentally about spending money wisely: choosing the right platforms, targeting the right audiences, and continuously optimizing to get the best return on every euro or dollar spent.

This role is a core part of any [performance marketing](/performance-marketing) team. While a [growth marketing manager](/growth-marketing-manager) thinks about the full funnel and a [user acquisition manager](/user-acquisition-manager) focuses on new user growth, a paid media manager brings deep platform expertise and hands on media buying skill.`,

    features: [
      { icon: 'CreditCard', title: 'Media Buying and Negotiation', description: 'Purchasing ad inventory across platforms including search, social, display, video, and programmatic channels. Understanding the buying mechanics and auction dynamics of each platform.' },
      { icon: 'PieChart', title: 'Budget Allocation Strategy', description: 'Distributing budgets across channels and campaigns based on performance data, business priorities, and seasonal patterns. Knowing when to shift spend from one channel to another.' },
      { icon: 'Monitor', title: 'Platform Expertise', description: 'Deep knowledge of advertising platforms including Google Ads, Meta Ads, Microsoft Ads, LinkedIn Ads, TikTok, and programmatic DSPs. Each platform has unique optimization levers and best practices.' },
      { icon: 'Target', title: 'Audience Strategy', description: 'Building and refining audience segments using first party data, platform signals, lookalike modeling, and contextual targeting. Reaching the right people is as important as the creative and the bid.' },
      { icon: 'LineChart', title: 'Performance Optimization', description: 'Daily monitoring and optimization of campaigns including bid adjustments, placement management, audience refinement, and creative rotation based on performance data.' },
      { icon: 'FileText', title: 'Reporting and Insights', description: 'Building clear, actionable reports that show campaign performance against business goals. Translating platform data into business insights that stakeholders can act on.' },
    ],
    featuresDescription: 'A paid media manager handles the execution layer of paid advertising. Here are the core responsibilities.',

    approachContent: `My approach to paid media management is rooted in understanding platform mechanics deeply. Each advertising platform has its own auction system, bidding strategies, and optimization algorithms. Knowing how these work at a technical level gives me an advantage when making campaign decisions.

I have managed paid media across [Google Ads](/google-ads), [Meta Ads](/meta-ads), [Microsoft Ads](/microsoft-ads), and programmatic platforms. Budget sizes have ranged from modest to substantial, and the principles remain the same: start with clear goals, build proper tracking, structure campaigns logically, and optimize based on data rather than guesswork.

One area where I see many paid media managers underperform is budget allocation. Too many teams set budgets at the start of the month and let them run without adjustment. In my experience, actively reallocating budget based on weekly performance data, shifting spend toward what is working and away from what is not, has a larger impact than most individual campaign optimizations.

The paid media manager role overlaps with a [performance marketing manager](/performance-marketing-manager) role, but the emphasis is more on the media buying and platform expertise side. A paid media manager is the person who knows the platforms inside and out. Understanding [attribution](/attribution-modeling-explained) across these platforms is critical for making correct budget allocation decisions.

Another area I focus on is platform diversification. Concentrating all spend on one platform creates risk. When Google changes its auction mechanics or Meta adjusts its algorithm, teams that depend entirely on one channel scramble. I maintain expertise across multiple platforms so that budgets can shift quickly when performance dynamics change. This flexibility has saved campaigns during several major platform updates that caught competitors off guard.`,

    processSteps: [
      { icon: 'Search', title: 'Platform and Account Audit', description: 'Review the current state of all advertising accounts, tracking setup, and historical performance. Identify structural issues, wasted spend, and quick optimization opportunities across each platform.' },
      { icon: 'DollarSign', title: 'Budget Planning and Allocation', description: 'Set channel level budgets based on historical performance, business goals, and market opportunity. Build a flexible allocation framework that allows for mid period adjustments based on results.' },
      { icon: 'Sliders', title: 'Campaign Optimization', description: 'Execute daily and weekly optimizations including bid management, audience refinement, creative rotation, placement exclusions, and search term management. Each platform requires specific optimization techniques.' },
      { icon: 'BarChart3', title: 'Performance Reporting', description: 'Build weekly and monthly reports that connect platform metrics to business outcomes. Highlight what is working, what needs attention, and what budget changes are recommended for the next period.' },
    ],
    processDescription: 'Paid media management follows a disciplined cycle of planning, executing, optimizing, and reporting.',

    faqItems: [
      { question: 'What is the difference between a paid media manager and a performance marketing manager?', answer: 'The roles overlap significantly. A paid media manager tends to be more focused on the media buying execution side, with deep platform expertise and hands on campaign management. A performance marketing manager often has a slightly broader scope, including strategy, measurement, and cross channel coordination. In some companies, the titles are used interchangeably. In larger organizations, paid media managers might specialize in specific platforms while the performance marketing manager oversees the overall strategy.' },
      { question: 'Which advertising platforms should a paid media manager know?', answer: 'At minimum, Google Ads and Meta Ads are essential. Microsoft Ads, LinkedIn Ads, TikTok Ads, and programmatic platforms are increasingly important depending on the business and audience. I also think understanding how different platforms complement each other is more valuable than being an expert on every single one. A strong paid media manager knows which platform to use for which objective.' },
      { question: 'How do you decide how to allocate budget across channels?', answer: 'I base allocation on historical performance data, marginal return analysis, and business priorities. Channels that deliver the best return on ad spend or cost per acquisition at current spend levels generally deserve more budget, up to the point of diminishing returns. I also reserve a testing budget, typically 10 to 15 percent, for experimenting with new channels or strategies. Budget allocation should be dynamic, not set once and forgotten.' },
      { question: 'How important is creative in paid media?', answer: 'Very important, especially on social and display channels. On search platforms, ad copy and landing pages matter more than visual creative. On social platforms, the creative is often the single biggest performance variable. A paid media manager does not necessarily create the ads, but they need to understand what makes creative perform well and provide clear direction to creative teams based on performance data.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'The broader paid acquisition discipline.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Broader campaign management and strategy.', href: '/performance-marketing-manager' },
      { title: 'Senior Performance Marketing Manager', description: 'Strategic leadership of paid programs.', href: '/senior-performance-marketing-manager' },
      { title: 'Growth Marketing Manager', description: 'Full funnel growth including paid and organic.', href: '/growth-marketing-manager' },
      { title: 'User Acquisition Manager', description: 'Focused on new user growth and CAC.', href: '/user-acquisition-manager' },
      { title: 'Google Ads', description: 'Search, shopping, and display advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising on Facebook and Instagram.', href: '/meta-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising on the Microsoft network.', href: '/microsoft-ads' },
    ],
    ctaHeading: 'Looking for a Paid Media Manager?',
    ctaDescription: 'If you need someone with deep platform expertise and proven media buying skills, feel free to reach out.',
    ctaColor: '#f59e0b',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-search-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 5. PAID SEARCH MANAGER
  // Positioning: Mid level, search-specific, keyword strategy, SEM focus
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'paid-search-manager',
    title: 'Paid Search Manager',
    seoTitle: 'Paid Search Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach paid search management: keyword strategy, search campaign optimization, bidding, quality score improvement, and search engine marketing.',
    parentHub: 'performance-marketing',
    circleColor: '#3b82f6',
    heroContent: `A paid search manager specializes in search engine advertising, primarily on [Google Ads](/google-ads) and [Microsoft Ads](/microsoft-ads). This is one of the most technical and data intensive roles in [performance marketing](/performance-marketing). The focus is on capturing demand from people who are actively searching for products, services, or information.

Paid search remains one of the highest converting digital advertising channels because it targets people with clear intent. Managing it well requires deep expertise in keyword strategy, match types, bidding algorithms, ad copy testing, and landing page optimization.`,

    features: [
      { icon: 'Search', title: 'Keyword Strategy and Research', description: 'Building comprehensive keyword lists based on search volume, competition, commercial intent, and relevance. Understanding how different match types behave and structuring keywords for maximum control and coverage.' },
      { icon: 'Sliders', title: 'Bidding and Auction Management', description: 'Setting and optimizing bids using manual CPC, target CPA, target ROAS, or maximize conversions strategies depending on account maturity and data volume. Understanding auction dynamics and bid modifiers.' },
      { icon: 'FileText', title: 'Ad Copy Optimization', description: 'Writing and testing responsive search ads, site links, callouts, and structured snippets. Good ad copy improves click through rate, quality score, and ultimately cost per conversion.' },
      { icon: 'Star', title: 'Quality Score Management', description: 'Improving quality scores through better ad relevance, expected click through rate, and landing page experience. Higher quality scores reduce cost per click and improve ad position.' },
      { icon: 'MinusCircle', title: 'Negative Keyword Management', description: 'Systematically reviewing search term reports and building negative keyword lists to prevent wasted spend on irrelevant searches. This is one of the most impactful ongoing optimization tasks in paid search.' },
      { icon: 'LayoutGrid', title: 'Account Structure Design', description: 'Organizing campaigns and ad groups in a way that aligns with business goals, allows for effective budget allocation, and gives bidding algorithms clean signals to optimize against.' },
    ],
    featuresDescription: 'Paid search management requires specialized skills that differ from broader paid media management.',

    approachContent: `My approach to paid search is grounded in account structure and measurement. A well structured account with logical campaign segmentation and tight ad group themes gives you control and lets automated bidding work effectively. A poorly structured account creates noise that even the best algorithms cannot overcome.

I have managed search campaigns across [Google Ads](/google-ads) and [Microsoft Ads](/microsoft-ads) for ecommerce, lead generation, and B2B businesses. The core principles are consistent across verticals: understand the search intent behind every keyword, match that intent to relevant ads and landing pages, and measure results against actual business outcomes rather than just clicks and impressions.

Negative keyword management is one of the most underrated aspects of paid search. I have audited accounts where 20 to 30 percent of budget was going to irrelevant searches simply because no one was reviewing search term reports regularly. Fixing that alone can transform account performance overnight.

The paid search manager role is more specialized than a [paid media manager](/paid-media-manager) or [performance marketing manager](/performance-marketing-manager). While those roles cover multiple channels, a paid search manager goes deep on search engine advertising specifically. This depth allows for more sophisticated optimization in areas like [A/B testing](/a-b-testing-explained) ad variations, auction insights analysis, and impression share management.

Landing page quality is another area where paid search managers can make a real difference. The connection between keyword intent, ad message, and landing page experience directly affects quality score, conversion rate, and ultimately cost per acquisition. I work closely with design and development teams to ensure landing pages match the specific intent behind each keyword group rather than sending all search traffic to the same generic page. This alignment between search intent and page content is one of the most reliable ways to improve paid search performance.`,

    processSteps: [
      { icon: 'Database', title: 'Keyword Foundation', description: 'Build a comprehensive keyword map covering all relevant search terms, organized by intent and business priority. This foundation determines everything else in the account structure.' },
      { icon: 'Layout', title: 'Account Architecture', description: 'Structure campaigns and ad groups to align with keyword themes and business goals. Good structure allows for precise budget control, clear reporting, and effective automated bidding.' },
      { icon: 'PenTool', title: 'Ad Copy and Extensions', description: 'Write compelling ad copy that matches search intent, differentiate from competitors, and use all available ad extensions. Test multiple variations systematically.' },
      { icon: 'Gauge', title: 'Ongoing Optimization', description: 'Regular search term reviews, bid adjustments, quality score improvements, and performance analysis. Paid search requires consistent, disciplined attention to maintain and improve results over time.' },
    ],
    processDescription: 'Effective paid search management follows a structured approach from keyword research through ongoing optimization.',

    faqItems: [
      { question: 'What is the difference between paid search and SEM?', answer: 'SEM, or search engine marketing, is a broader term that historically included both paid search advertising and SEO. Today, SEM is commonly used as a synonym for paid search specifically. A paid search manager and an SEM manager typically do the same job: managing search engine advertising campaigns on platforms like Google Ads and Microsoft Ads.' },
      { question: 'How is paid search different from other paid media?', answer: 'Paid search captures existing demand. When someone types a query into Google, they are actively looking for something. Other paid media channels like social, display, and video typically interrupt users who are not actively searching. This intent based targeting is why paid search often has the highest conversion rates and most predictable returns. The trade off is that search volume is finite. You can not create more demand through search, only capture what already exists.' },
      { question: 'What makes a good paid search manager?', answer: 'Attention to detail, analytical thinking, and patience. Paid search optimization is a continuous process of testing, analyzing, and refining. The best paid search managers are comfortable working with data at a granular level, they check search term reports regularly, they test ad variations systematically, and they understand the connection between keyword intent, ad relevance, and landing page experience.' },
      { question: 'Is paid search still important with AI and automation?', answer: 'Yes, but the role is evolving. Google and Microsoft have automated much of the bidding and targeting. However, human expertise is still essential for strategy, account structure, negative keyword management, creative direction, and interpreting results. Automation works best when given clean inputs and clear goals. The paid search manager role is shifting from manual bid management toward strategic oversight, but the need for search expertise is not going away.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Broader paid acquisition strategy.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Multi channel campaign management.', href: '/performance-marketing-manager' },
      { title: 'Paid Media Manager', description: 'Cross platform media buying.', href: '/paid-media-manager' },
      { title: 'SEM Manager', description: 'Search engine marketing management.', href: '/sem-manager' },
      { title: 'Google Ads', description: 'The primary search advertising platform.', href: '/google-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising on Bing.', href: '/microsoft-ads' },
      { title: 'Growth Marketing Manager', description: 'Full funnel growth strategy.', href: '/growth-marketing-manager' },
      { title: 'What Is Performance Marketing', description: 'Overview of the discipline.', href: '/what-is-performance-marketing' },
    ],
    ctaHeading: 'Need a Paid Search Specialist?',
    ctaDescription: 'If you are looking for someone with deep search advertising expertise, feel free to reach out.',
    ctaColor: '#3b82f6',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 6. SEM MANAGER
  // Positioning: Mid level, search engine marketing, paid+organic overlap
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'sem-manager',
    title: 'SEM Manager',
    seoTitle: 'SEM Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach SEM management: search engine marketing strategy, Google Ads and Microsoft Ads optimization, and bridging paid and organic search.',
    parentHub: 'performance-marketing',
    circleColor: '#06b6d4',
    heroContent: `An SEM manager oversees search engine marketing, which includes paid search advertising and often involves coordination with organic search efforts. The role focuses on maximizing a company's visibility in search engine results pages through strategic use of [Google Ads](/google-ads), [Microsoft Ads](/microsoft-ads), and sometimes collaboration with the SEO team.

SEM management sits within [performance marketing](/performance-marketing) but with a specific focus on search as a channel. The role requires understanding both how paid search auctions work and how paid and organic search results interact on the same page.`,

    features: [
      { icon: 'Search', title: 'Search Strategy Development', description: 'Creating a comprehensive search strategy that covers both paid and organic visibility. Understanding where paid search should fill gaps in organic coverage and where organic is strong enough to reduce paid spend.' },
      { icon: 'BarChart3', title: 'Paid Search Campaign Management', description: 'Managing Google Ads and Microsoft Ads campaigns including keyword strategy, bidding, ad copy, and ongoing optimization. The core execution work of SEM.' },
      { icon: 'GitMerge', title: 'Paid and Organic Coordination', description: 'Working with SEO teams to ensure paid and organic efforts complement each other rather than cannibalize. Understanding when to bid on terms where you rank organically and when to save the budget.' },
      { icon: 'TrendingUp', title: 'Search Market Analysis', description: 'Monitoring competitive landscape in search results, tracking impression share, and identifying new keyword opportunities based on market trends and seasonal patterns.' },
      { icon: 'DollarSign', title: 'Budget and Bid Management', description: 'Allocating search budgets across campaigns, managing automated and manual bidding strategies, and optimizing for the right conversion goals at each stage of the funnel.' },
      { icon: 'FileText', title: 'Search Performance Reporting', description: 'Reporting on paid search performance with context about organic performance, competitive changes, and market trends. Providing a complete view of search visibility.' },
    ],
    featuresDescription: 'SEM management combines technical search expertise with strategic visibility planning.',

    approachContent: `My approach to SEM management focuses on understanding the full search landscape before making campaign decisions. Paid search does not exist in isolation. It interacts with organic results, shopping listings, local packs, and AI generated summaries. A good SEM manager considers all of these when planning strategy.

I have managed SEM programs across [Google Ads](/google-ads) and [Microsoft Ads](/microsoft-ads) for businesses in competitive verticals. One of the most valuable things I do is analyze where paid and organic search overlap. In some cases, bidding on keywords where you already rank first organically wastes money. In other cases, having both a paid and organic listing on the page significantly increases total click share. The right answer depends on the specific keyword, the competitive landscape, and the economics.

What sets SEM management apart from pure [paid search management](/paid-search-manager) is this broader perspective. An SEM manager thinks about search as a channel, not just paid search as a tactic. This includes understanding [SEO](/seo) well enough to coordinate with organic teams and make informed decisions about budget allocation.

Understanding search [attribution](/attribution-modeling-explained) is also critical. Paid search often receives credit for conversions that organic search would have captured without the paid click. A good SEM manager knows how to identify and account for this cannibalization.

I also pay close attention to the evolving search results page itself. Features like shopping listings, local packs, featured snippets, and AI generated summaries all affect how paid and organic results compete for clicks. An effective SEM manager monitors how these SERP features shift over time and adjusts strategy accordingly. What worked in search marketing two years ago may not apply today because the layout and behavior of the results page keeps changing. Staying current on these changes is part of the job.`,

    processSteps: [
      { icon: 'Telescope', title: 'Search Landscape Analysis', description: 'Map the current state of paid and organic visibility for all important search terms. Identify gaps, overlaps, and competitive threats across the search results page.' },
      { icon: 'GitBranch', title: 'Integrated Strategy', description: 'Build a search strategy that coordinates paid and organic efforts. Define which keywords to target with paid, which to rely on organic for, and which need both.' },
      { icon: 'Wrench', title: 'Campaign Execution', description: 'Build and manage paid search campaigns aligned with the strategy. Ensure tracking, bidding, and targeting are set up correctly from the start.' },
      { icon: 'Repeat', title: 'Continuous Optimization', description: 'Regular optimization cycles covering search term management, bid adjustments, ad testing, and budget reallocation. Adjust paid strategy as organic positions change.' },
    ],
    processDescription: 'SEM management follows a cycle that considers both paid and organic search performance.',

    faqItems: [
      { question: 'What is the difference between SEM and SEO?', answer: 'SEO focuses on improving organic search visibility through technical optimization, content, and link building. SEM traditionally covers both paid and organic search but is now commonly used to mean paid search advertising specifically. The two disciplines are complementary. SEO builds long term visibility that does not require ongoing ad spend. SEM provides immediate visibility but stops when you stop paying. A good SEM manager understands both.' },
      { question: 'Is SEM manager the same as a paid search manager?', answer: 'In most companies, yes, the roles are very similar. Both involve managing paid search campaigns on platforms like Google Ads and Microsoft Ads. The SEM manager title sometimes implies a slightly broader scope that includes coordination with organic search efforts, but in practice the day to day work is largely the same. The job title varies by company and region.' },
      { question: 'How do you decide when to bid on branded keywords?', answer: 'I look at several factors: whether competitors are bidding on your brand terms, how strong your organic position is, the incremental lift from having both a paid and organic listing, and the cost relative to the value of protecting those clicks. In competitive markets where rivals actively bid on your brand, brand bidding is usually worthwhile. In less competitive situations, the budget might deliver better returns on non brand keywords.' },
      { question: 'What skills does an SEM manager need beyond platform knowledge?', answer: 'Analytical skills are the most important. Beyond knowing how to use Google Ads and Microsoft Ads, an SEM manager needs to analyze data, identify trends, understand statistical significance, and make budget allocation decisions based on incomplete information. Some understanding of SEO, web analytics, and business strategy also helps significantly. The best SEM managers understand the business context behind the search data, not just the search data itself.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Broader paid channel strategy.', href: '/performance-marketing' },
      { title: 'Paid Search Manager', description: 'Specialized search advertising role.', href: '/paid-search-manager' },
      { title: 'Performance Marketing Manager', description: 'Multi channel campaign management.', href: '/performance-marketing-manager' },
      { title: 'Google Ads', description: 'Primary search advertising platform.', href: '/google-ads' },
      { title: 'Microsoft Ads', description: 'Search advertising on Bing.', href: '/microsoft-ads' },
      { title: 'SEO', description: 'Organic search optimization.', href: '/seo' },
      { title: 'Paid Media Manager', description: 'Cross platform media buying.', href: '/paid-media-manager' },
      { title: 'What Is Performance Marketing', description: 'Overview of the discipline.', href: '/what-is-performance-marketing' },
    ],
    ctaHeading: 'Looking for an SEM Manager?',
    ctaDescription: 'If you need someone with deep search marketing expertise covering both paid and organic coordination, feel free to reach out.',
    ctaColor: '#06b6d4',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 7. SEO MANAGER
  // Positioning: Mid level, organic search, technical+content SEO
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'seo-manager',
    title: 'SEO Manager',
    seoTitle: 'SEO Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the SEO manager role: technical SEO, content strategy, link building, and organic growth across international markets.',
    parentHub: 'seo',
    circleColor: '#22c55e',
    heroContent: `An SEO manager is responsible for growing a website's organic search visibility and traffic. The role covers technical SEO, content strategy, link building, and performance analysis. Unlike paid channels where you pay for each click, [SEO](/seo) builds visibility that compounds over time without ongoing ad spend.

This page explains how I approach organic search management, what skills the role requires, and how SEO fits into a broader marketing strategy alongside [performance marketing](/performance-marketing).`,

    features: [
      { icon: 'Code', title: 'Technical SEO', description: 'Ensuring websites are properly crawled and indexed by search engines. This includes site architecture, page speed, Core Web Vitals, structured data, internal linking, canonical tags, and resolving crawl errors.' },
      { icon: 'FileText', title: 'Content Strategy', description: 'Developing keyword targeted content plans based on search demand, competitive gaps, and business priorities. Organizing content into topic clusters that build topical authority over time.' },
      { icon: 'Link', title: 'Link Building', description: 'Building high quality backlinks through digital PR, content partnerships, and outreach. Links remain one of the most important ranking factors, and building them sustainably requires a strategic approach.' },
      { icon: 'Globe', title: 'International SEO', description: 'Managing multi language and multi region SEO including hreflang implementation, market specific keyword strategies, and localized content for international audiences.' },
      { icon: 'BarChart3', title: 'Analytics and Reporting', description: 'Tracking organic performance using Google Search Console, Google Analytics, and third party tools. Measuring rankings, traffic, and conversions to demonstrate SEO impact on business goals.' },
      { icon: 'Wrench', title: 'SEO Tool Proficiency', description: 'Working with tools like Google Search Console, Ahrefs, Semrush, and Screaming Frog for auditing, keyword research, competitor analysis, and rank tracking.' },
    ],
    featuresDescription: 'SEO management covers a wide range of technical and strategic skills.',

    approachContent: `My approach to SEO management is practical and results focused. I start with the technical foundation because without it, no amount of content or links will rank well. If a website has crawl issues, slow load times, or poor site architecture, those problems need to be fixed first.

I use tools like [Google Search Console](/google-search-console), [Ahrefs](/ahrefs), [Semrush](/semrush), and [Screaming Frog](/screaming-frog) to audit sites, research keywords, and track performance. The specific tools matter less than the ability to interpret the data and turn it into actionable recommendations.

Content strategy is where SEO connects most directly to business outcomes. I build content plans based on what people are actually searching for, mapped to where they are in the buying journey. Top of funnel informational content builds authority. Bottom of funnel commercial content drives conversions. Both are necessary for a complete [SEO](/seo) program.

What makes the SEO manager role distinct from a [technical SEO specialist](/technical-seo-specialist) is the breadth. A technical specialist goes deep on site architecture, crawling, and performance. An SEO manager covers all of that plus content, links, and strategic planning. The manager role requires balancing multiple workstreams and aligning SEO priorities with broader business goals.

In my experience, the most common SEO mistake is treating it as a one time project rather than an ongoing program. Search algorithms change, competitors publish new content, and technical issues appear over time. Consistent, sustained effort is what produces lasting results. Understanding [how SEO actually works](/what-is-seo) at a fundamental level makes this easier to communicate to stakeholders.

I also place a strong emphasis on connecting SEO work to business metrics, not just rankings and traffic. A page that ranks first for a high volume keyword but generates no revenue or leads is not a success. I prioritize content and optimization efforts around keywords and pages that drive actual business value. This commercial focus helps justify ongoing SEO investment to stakeholders who care about revenue, not rankings.`,

    processSteps: [
      { icon: 'Search', title: 'Technical Audit', description: 'Comprehensive crawl analysis to identify technical issues affecting indexation and rankings. This includes site speed, mobile usability, structured data, internal linking, and crawl efficiency.' },
      { icon: 'Map', title: 'Keyword and Content Planning', description: 'Research search demand, map keywords to pages, identify content gaps, and build a prioritized editorial calendar. Focus on topics where the business can compete and where search intent aligns with business goals.' },
      { icon: 'Wrench', title: 'Implementation', description: 'Execute technical fixes, publish optimized content, and build links. Work with development teams on technical changes and with content teams on editorial production.' },
      { icon: 'TrendingUp', title: 'Monitor and Iterate', description: 'Track rankings, traffic, and conversions. Identify what is working, double down on successful patterns, and adjust strategy based on results and algorithm changes.' },
    ],
    processDescription: 'SEO management follows a structured cycle of auditing, planning, implementing, and measuring.',

    faqItems: [
      { question: 'How long does SEO take to show results?', answer: 'Typically three to six months for noticeable improvements, though it depends heavily on the starting point, competition level, and the type of changes being made. Technical fixes can show results faster if they resolve critical crawling or indexation issues. Content and link building take longer because search engines need time to discover, evaluate, and rank new content. SEO is a compounding investment. Results grow over time as content matures and authority builds.' },
      { question: 'What is the difference between an SEO manager and an SEO specialist?', answer: 'An SEO specialist typically focuses on a specific area of SEO, like technical optimization or content creation. An SEO manager oversees the full program: technical, content, links, and strategy. The manager role involves more cross team coordination, stakeholder communication, and strategic planning. In practice, many SEO managers are also hands on practitioners, especially in smaller teams.' },
      { question: 'How does an SEO manager measure success?', answer: 'The primary metrics are organic traffic, keyword rankings, and organic revenue or conversions. I also track technical health metrics like crawl coverage, Core Web Vitals scores, and index status. The most important metric depends on the business. For ecommerce, organic revenue is the north star. For content businesses, traffic and engagement matter more. I always try to connect SEO metrics to actual business outcomes rather than just reporting rankings.' },
      { question: 'Is SEO still worth investing in with AI search changing the landscape?', answer: 'Yes, but the approach is evolving. AI powered search features like Google AI Overviews change how results appear, but they still rely on content from websites. The fundamentals of creating useful, well structured content remain important. Generative engine optimization, or GEO, is becoming an additional consideration. The websites that will do well are those with genuinely useful content that AI systems want to reference and cite.' },
      { question: 'Can an SEO manager also handle paid search?', answer: 'Some do, especially in smaller companies. Understanding both organic and paid search is valuable because they share the same search results page and can inform each other. However, managing both at a high level is difficult as they require different day to day workflows. In my case, I have experience with both organic and paid search, which helps me coordinate SEO efforts with the paid media team effectively.' },
    ],

    relatedCards: [
      { title: 'SEO', description: 'My broader organic search expertise.', href: '/seo' },
      { title: 'Senior SEO Manager', description: 'Strategic SEO leadership.', href: '/senior-seo-manager' },
      { title: 'Technical SEO Specialist', description: 'Deep technical search optimization.', href: '/technical-seo-specialist' },
      { title: 'SEO Specialist', description: 'Focused SEO execution.', href: '/seo-specialist' },
      { title: 'Organic Growth Manager', description: 'Broader organic growth strategy.', href: '/organic-growth-manager' },
      { title: 'Google Search Console', description: 'Essential SEO monitoring tool.', href: '/google-search-console' },
      { title: 'Ahrefs', description: 'SEO research and analysis tool.', href: '/ahrefs' },
      { title: 'Semrush', description: 'SEO and competitive analysis platform.', href: '/semrush' },
    ],
    ctaHeading: 'Looking for an SEO Manager?',
    ctaDescription: 'If you need someone to build or strengthen your organic search program, feel free to reach out.',
    ctaColor: '#22c55e',
    links: {
      siblings: ['senior-seo-manager', 'technical-seo-specialist', 'seo-specialist', 'organic-growth-manager'],
      tools: ['google-search-console', 'ahrefs', 'semrush', 'screaming-frog', 'technical-seo'],
      topics: ['what-is-seo', 'technical-seo-explained', 'technical-seo-approach', 'website-performance-optimization'],
      relatedTopics: ['seo', 'senior-seo-manager', 'technical-seo-specialist', 'seo-specialist', 'organic-growth-manager', 'google-search-console', 'ahrefs', 'semrush'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 8. DIGITAL MARKETING MANAGER
  // Positioning: Mid level, broad digital coverage, generalist
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'digital-marketing-manager',
    title: 'Digital Marketing Manager',
    seoTitle: 'Digital Marketing Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach the digital marketing manager role: managing paid, organic, email, and content channels with a focus on measurable business results.',
    parentHub: 'performance-marketing',
    circleColor: '#ec4899',
    heroContent: `A digital marketing manager oversees a company's online marketing efforts across multiple channels. The role is broader than a [performance marketing manager](/performance-marketing-manager) or an SEO specialist because it often covers paid media, organic search, email marketing, content, and sometimes social media. It is the generalist role in digital marketing.

This page explains how I approach digital marketing management, what makes the role valuable, and how it connects to more specialized disciplines like [performance marketing](/performance-marketing) and [SEO](/seo).`,

    features: [
      { icon: 'Layers', title: 'Multi Channel Management', description: 'Overseeing paid search, paid social, SEO, email marketing, content, and sometimes offline channels. The digital marketing manager connects all of these into a coherent strategy rather than managing them in silos.' },
      { icon: 'Target', title: 'Campaign Planning and Execution', description: 'Planning integrated marketing campaigns that use multiple channels to reach audiences at different stages of the buying journey. Coordinating timing, messaging, and budgets across channels.' },
      { icon: 'BarChart3', title: 'Performance Measurement', description: 'Tracking and reporting on marketing performance across all channels. Building a clear picture of what is driving results and where resources should be allocated for maximum impact.' },
      { icon: 'DollarSign', title: 'Budget Management', description: 'Allocating marketing budgets across channels and campaigns, adjusting based on performance, and ensuring spend aligns with business priorities and revenue targets.' },
      { icon: 'Users', title: 'Team and Agency Coordination', description: 'Managing internal marketing team members and external agencies or freelancers. Ensuring consistent quality, clear briefs, and aligned goals across all contributors.' },
      { icon: 'Compass', title: 'Marketing Strategy', description: 'Translating business goals into marketing plans with clear objectives, channel strategies, timelines, and KPIs. Communicating strategy and results to leadership.' },
    ],
    featuresDescription: 'Digital marketing management covers a broad range of channels and responsibilities.',

    approachContent: `I approach digital marketing management as a coordination and prioritization challenge. With limited budget and time, the question is always: which channels and activities will have the biggest impact on the business right now? The answer changes depending on the company stage, market, and competitive landscape.

My background in [performance marketing](/performance-marketing) gives me strong analytical skills that I apply across all digital channels. Whether I am managing [Google Ads](/google-ads) campaigns, reviewing SEO performance, or analyzing email conversion rates, the approach is the same: set clear goals, measure rigorously, and optimize based on data.

What makes a digital marketing manager different from a specialist is the breadth of responsibility. I do not go as deep into [Google Ads](/google-ads) as a dedicated [paid search manager](/paid-search-manager) would, and I do not do as much technical SEO as an [SEO manager](/seo-manager) would. But I understand enough about each channel to make smart strategic decisions, hire and manage the right specialists, and ensure all channels work together rather than in isolation.

In my experience, the biggest value of a strong digital marketing manager is the ability to see the big picture. Many companies have good individual channel execution but poor coordination between channels. A digital marketing manager who understands [attribution](/attribution-modeling-explained) and can evaluate the true contribution of each channel adds significant value by directing resources where they matter most.

One challenge specific to the digital marketing manager role is managing the tension between short term performance and long term brand building. Paid campaigns deliver immediate measurable results. SEO and content marketing take months to build momentum. Email lists grow gradually. A good digital marketing manager maintains a balanced portfolio of activities across these time horizons rather than chasing only what produces results this week. That balance requires discipline, clear communication with stakeholders about expected timelines, and confidence in the longer term strategy even when short term pressure mounts.`,

    processSteps: [
      { icon: 'Telescope', title: 'Marketing Audit', description: 'Review all existing marketing channels, campaigns, and performance data. Understand what is working, what is not, and where the gaps are.' },
      { icon: 'Map', title: 'Strategy Development', description: 'Build an integrated marketing plan with clear channel strategies, budget allocation, timelines, and success metrics. Ensure the plan aligns with business goals and realistic resource constraints.' },
      { icon: 'Play', title: 'Execution and Coordination', description: 'Launch campaigns, manage team members and agencies, and ensure consistent execution across all channels. Monitor performance daily and make tactical adjustments as needed.' },
      { icon: 'BarChart3', title: 'Analysis and Optimization', description: 'Regular performance reviews across all channels. Identify what is driving results, reallocate budget toward high performers, and refine strategies for underperforming areas.' },
    ],
    processDescription: 'Digital marketing management requires balancing strategy with daily execution across multiple channels.',

    faqItems: [
      { question: 'What is the difference between a digital marketing manager and a performance marketing manager?', answer: 'A digital marketing manager typically covers a broader set of channels including SEO, email, content, and sometimes brand activities alongside paid media. A performance marketing manager focuses specifically on paid channels with measurable ROI. In practice, the roles overlap significantly, and many companies use the titles interchangeably. The key difference is usually scope: digital marketing managers tend to manage more channels but may go less deep into each one.' },
      { question: 'What skills does a digital marketing manager need?', answer: 'A solid understanding of all major digital channels: paid search, paid social, SEO, email, content marketing, and analytics. You do not need to be an expert in every area, but you need enough knowledge to evaluate performance, give direction to specialists, and make strategic trade offs between channels. Analytical skills, project management, and stakeholder communication are equally important.' },
      { question: 'Is this a strategic or tactical role?', answer: 'Both. In smaller companies, a digital marketing manager is highly hands on, managing campaigns directly across multiple channels. In larger companies, the role is more strategic, focused on planning, coordination, and managing a team of specialists. Most digital marketing managers, regardless of company size, operate somewhere between strategy and execution on any given day.' },
      { question: 'How does a digital marketing manager handle so many channels?', answer: 'Prioritization and delegation. No one can be equally good at every channel. A smart digital marketing manager identifies which channels have the highest potential impact, focuses personal attention there, and uses specialists, agencies, or automation to manage the rest. The key is knowing enough about each channel to make good decisions and evaluate quality, even when someone else does the daily execution.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Focused paid acquisition strategy.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Dedicated paid media management.', href: '/performance-marketing-manager' },
      { title: 'Senior Performance Marketing Manager', description: 'Strategic paid program leadership.', href: '/senior-performance-marketing-manager' },
      { title: 'Growth Marketing Manager', description: 'Full funnel growth optimization.', href: '/growth-marketing-manager' },
      { title: 'Google Ads', description: 'Search and shopping advertising.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Social advertising.', href: '/meta-ads' },
      { title: 'SEO', description: 'Organic search optimization.', href: '/seo' },
      { title: 'Marketing Technology', description: 'Martech tools and systems.', href: '/marketing-technology' },
    ],
    ctaHeading: 'Looking for a Digital Marketing Manager?',
    ctaDescription: 'If you need someone who can manage and coordinate marketing across multiple digital channels, feel free to reach out.',
    ctaColor: '#ec4899',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 9. ECOMMERCE MARKETING MANAGER
  // Positioning: Mid level, ecommerce-specific, product feeds, shopping
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'ecommerce-marketing-manager',
    title: 'Ecommerce Marketing Manager',
    seoTitle: 'Ecommerce Marketing Manager | Alexander Kropivnitski',
    seoDescription: 'How I approach ecommerce marketing management: Google Shopping, product feed optimization, conversion rate optimization, and multi channel revenue growth.',
    parentHub: 'performance-marketing',
    circleColor: '#f97316',
    heroContent: `An ecommerce marketing manager is responsible for driving online revenue through a combination of paid media, organic traffic, email marketing, and conversion rate optimization. The role is similar to a [digital marketing manager](/digital-marketing-manager) but with a specific focus on product sales, shopping campaigns, and the metrics that matter in ecommerce: revenue, ROAS, average order value, and customer lifetime value.

Ecommerce marketing sits squarely within [performance marketing](/performance-marketing) because every activity can be tied directly to revenue. This page covers how I approach the role and what makes ecommerce marketing distinct from other marketing management positions.`,

    features: [
      { icon: 'ShoppingCart', title: 'Shopping Campaign Management', description: 'Managing Google Shopping, Meta product catalogs, and marketplace advertising. Understanding how product feeds power these campaigns and how feed quality directly impacts visibility and cost.' },
      { icon: 'Database', title: 'Product Feed Optimization', description: 'Improving product titles, descriptions, categories, images, and custom labels to increase search relevance and click through rates in shopping results. Feed quality is often the biggest lever in ecommerce advertising.' },
      { icon: 'TrendingUp', title: 'Conversion Rate Optimization', description: 'Testing and improving the on site experience to increase the percentage of visitors who purchase. This includes product pages, cart flow, checkout process, and mobile experience.' },
      { icon: 'Mail', title: 'Email and Lifecycle Marketing', description: 'Building automated email flows for cart abandonment, post purchase follow up, win back campaigns, and promotional sequences. Email is often the highest ROI channel in ecommerce.' },
      { icon: 'BarChart3', title: 'Revenue Analytics', description: 'Tracking revenue by channel, product category, customer segment, and campaign. Understanding unit economics at the product and customer level to optimize marketing spend allocation.' },
      { icon: 'Repeat', title: 'Retention and Repeat Purchase', description: 'Developing strategies to increase customer lifetime value through loyalty programs, personalized recommendations, and targeted re engagement campaigns.' },
    ],
    featuresDescription: 'Ecommerce marketing management combines channel expertise with product and revenue focused strategy.',

    approachContent: `My approach to ecommerce marketing starts with the product feed. In my experience, [product feed optimization](/product-feed-optimization) is the single most impactful thing you can do for ecommerce advertising. Better product titles, descriptions, and categories improve visibility in [Google Shopping](/google-shopping) results and reduce wasted spend on irrelevant searches. I have seen feed improvements increase Shopping revenue by 30 to 50 percent without changing bids or budgets.

Beyond the feed, I focus on the full customer journey from ad click to purchase and beyond. This means coordinating [Google Ads](/google-ads) and [Meta Ads](/meta-ads) campaigns with on site experience, email flows, and retention programs. Ecommerce marketing is most effective when all these pieces work together rather than being managed in isolation.

One area I pay close attention to is understanding the real profitability of campaigns, not just the top line ROAS number. After accounting for product costs, shipping, returns, and customer service, a campaign that looks profitable at first glance may not be. This is why understanding [attribution](/attribution-modeling-explained) and having clear unit economics is essential for ecommerce marketing decisions.

The ecommerce marketing manager role is more revenue focused than a general [performance marketing manager](/performance-marketing-manager) role. Everything ties back to sales, margins, and customer lifetime value. That focus makes it easier to prove marketing ROI but also raises the bar for accountability.

Marketplace management is another dimension of ecommerce marketing that many companies overlook. Selling on Amazon, Cdiscount, or other marketplace platforms requires separate strategies for product listings, advertising, and pricing. Managing the balance between direct website sales and marketplace sales is an ongoing strategic decision. I have helped companies navigate this by treating each sales channel as its own profit center with dedicated marketing attention while maintaining a coherent overall brand and pricing strategy across all channels.`,

    processSteps: [
      { icon: 'Database', title: 'Feed and Catalog Audit', description: 'Review product feeds for completeness, accuracy, and optimization opportunities. Fix missing attributes, improve titles and descriptions, and set up custom labels for better campaign segmentation.' },
      { icon: 'ShoppingCart', title: 'Campaign Structure', description: 'Build shopping and search campaigns structured around product categories, margins, and performance tiers. Ensure bid strategies align with the profitability of each product segment.' },
      { icon: 'Mail', title: 'Lifecycle Automation', description: 'Set up or optimize automated email flows for cart abandonment, welcome series, post purchase, and win back. These flows generate revenue with minimal ongoing effort once built correctly.' },
      { icon: 'TestTube', title: 'Test and Optimize', description: 'Continuously test product pages, checkout flow, ad creative, and campaign settings. Ecommerce optimization is an ongoing process, not a one time setup.' },
    ],
    processDescription: 'Ecommerce marketing management follows a structured approach focused on revenue at every step.',

    faqItems: [
      { question: 'What is the most important skill for an ecommerce marketing manager?', answer: 'Understanding product feed optimization and how it connects to advertising performance. Many ecommerce marketers focus on bidding and targeting while neglecting the feed, which is the foundation of shopping campaigns. Beyond that, analytical skills and the ability to connect marketing spend to actual profitability, after accounting for product costs and returns, separates good ecommerce marketers from great ones.' },
      { question: 'How does ecommerce marketing differ from other digital marketing?', answer: 'The biggest difference is the direct connection to revenue. Every marketing activity in ecommerce can be measured against sales, margins, and customer value. This makes the role more accountable but also more rewarding when things go well. Ecommerce marketing also involves specific tools and channels like product feeds, shopping campaigns, and marketplace advertising that do not exist in other types of digital marketing.' },
      { question: 'Which channels matter most in ecommerce marketing?', answer: 'Google Shopping is typically the highest performing channel for product sales. Paid search captures high intent product searches. Meta Ads works well for discovery and retargeting. Email marketing often has the highest ROI for repeat purchases. SEO builds long term organic traffic to product and category pages. The right mix depends on the products, price point, and target audience.' },
      { question: 'How do you handle seasonality in ecommerce?', answer: 'Planning ahead is essential. I build annual marketing calendars that account for seasonal peaks like Black Friday, holiday periods, and industry specific seasons. Budget allocation shifts significantly during these periods. I also prepare product feeds, ad creative, and email campaigns well in advance of peak periods. Trying to set up campaigns during the rush leads to poor results.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Broader paid acquisition strategy.', href: '/performance-marketing' },
      { title: 'Performance Marketing Manager', description: 'Multi channel campaign management.', href: '/performance-marketing-manager' },
      { title: 'Growth Marketing Manager', description: 'Full funnel growth including retention.', href: '/growth-marketing-manager' },
      { title: 'Google Ads', description: 'Search and shopping advertising.', href: '/google-ads' },
      { title: 'Google Shopping', description: 'Product listing ads.', href: '/google-shopping' },
      { title: 'Meta Ads', description: 'Social advertising.', href: '/meta-ads' },
      { title: 'Product Feed Optimization', description: 'Improving shopping feed quality.', href: '/product-feed-optimization' },
      { title: 'What Is Performance Marketing', description: 'The discipline explained.', href: '/what-is-performance-marketing' },
    ],
    ctaHeading: 'Looking for an Ecommerce Marketing Manager?',
    ctaDescription: 'If you need someone to drive ecommerce revenue through data driven marketing, feel free to reach out.',
    ctaColor: '#f97316',
    links: {
      siblings: ['performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'paid-media-manager'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'performance-marketing-manager', 'senior-performance-marketing-manager', 'growth-marketing-manager', 'user-acquisition-manager', 'google-ads', 'meta-ads', 'microsoft-ads'],
    },
  }),

  // ═══════════════════════════════════════════════════════
  // 10. HEAD OF GROWTH
  // Positioning: Director level, growth strategy, team building, business strategy
  // ═══════════════════════════════════════════════════════
  buildJobRolePage({
    slug: 'head-of-growth',
    title: 'Head of Growth',
    seoTitle: 'Head of Growth | Alexander Kropivnitski',
    seoDescription: 'How I approach the Head of Growth role: building growth teams, designing acquisition and retention strategies, and connecting marketing to business outcomes.',
    parentHub: 'performance-marketing',
    circleColor: '#6366f1',
    heroContent: `The Head of Growth is a leadership role responsible for driving company growth through a combination of marketing, product, and data initiatives. Unlike a [performance marketing manager](/performance-marketing-manager) who focuses on paid channels, or a [growth marketing manager](/growth-marketing-manager) who handles full funnel execution, the Head of Growth sets the growth strategy, builds the team, and owns the results at a business level.

This page explains how I approach growth leadership, what the role involves, and how it connects to broader [performance marketing](/performance-marketing) and business strategy.`,

    features: [
      { icon: 'Users', title: 'Team Building and Leadership', description: 'Hiring, developing, and leading a growth team that covers acquisition, retention, analytics, and experimentation. Building the right team structure for the company stage and growth goals.' },
      { icon: 'Compass', title: 'Growth Strategy', description: 'Designing the overall growth strategy including channel selection, budget allocation, experimentation roadmap, and metrics framework. Aligning growth initiatives with company objectives and board expectations.' },
      { icon: 'TrendingUp', title: 'Revenue Accountability', description: 'Owning growth targets and being accountable for metrics like revenue growth, customer acquisition cost, lifetime value, and net revenue retention. Translating these into actionable plans for the team.' },
      { icon: 'Beaker', title: 'Experimentation Culture', description: 'Building a culture of structured experimentation across the organization. Designing testing frameworks, setting velocity targets, and ensuring learnings are documented and shared.' },
      { icon: 'GitBranch', title: 'Cross Functional Coordination', description: 'Working with product, engineering, sales, and finance teams to align growth initiatives with company priorities. Breaking down silos between marketing and product.' },
      { icon: 'PieChart', title: 'Investment and Resource Allocation', description: 'Making decisions about where to invest growth resources for maximum impact. Balancing short term revenue targets with long term growth investments.' },
    ],
    featuresDescription: 'The Head of Growth operates at the intersection of marketing, product, and business strategy.',

    approachContent: `My approach to growth leadership starts with understanding the business model deeply. Before deciding which channels to invest in or which experiments to run, I need to understand the unit economics, the competitive landscape, the product strengths and weaknesses, and the company's strategic priorities. Growth strategy without business context is just tactics.

I come from a [performance marketing](/performance-marketing) background, which gives me strong analytical skills and channel expertise across [Google Ads](/google-ads), [Meta Ads](/meta-ads), and other paid platforms. At the Head of Growth level, I apply that analytical rigor to broader business questions: Where is the biggest growth opportunity? What is the most efficient path to the next revenue milestone? Where should we invest more, and where should we cut?

The most important thing a Head of Growth does is build the right team and the right processes. Individual campaigns and experiments matter, but the system that produces those campaigns and experiments matters more. I focus on building teams that can run experiments at high velocity, analyze results quickly, and scale what works without needing my direct involvement in every decision.

At this level, I also spend significant time communicating with leadership and, in some cases, investors. Translating [growth marketing](/growth-marketing-explained) results into business language and building confidence in the growth strategy is a critical part of the role. Understanding [attribution](/attribution-modeling-explained) and being able to explain the true incremental impact of marketing spend is essential for credible growth leadership.

One area where I add particular value as a Head of Growth is connecting marketing and product development. Many companies treat these as separate functions, but the most effective growth comes from integrating them. Product improvements that reduce friction in the conversion funnel can have a bigger impact than any marketing campaign. Referral programs built into the product can lower acquisition costs permanently. When marketing and product teams work together with shared metrics and aligned incentives, the compound effect on growth is substantial. Building that alignment is one of the most impactful things a Head of Growth can do.`,

    processSteps: [
      { icon: 'Telescope', title: 'Growth Assessment', description: 'Evaluate the current growth engine: what is working, what is not, where the biggest opportunities are, and what the team needs to execute against them. This assessment informs the entire strategy.' },
      { icon: 'Map', title: 'Strategy and Roadmap', description: 'Build a growth roadmap that balances quick wins with longer term strategic investments. Set clear targets, assign ownership, and establish the metrics and review cadence for accountability.' },
      { icon: 'Users', title: 'Team and Systems', description: 'Build or restructure the growth team to match the strategy. Establish experimentation frameworks, reporting systems, and decision making processes that scale.' },
      { icon: 'Rocket', title: 'Execute and Iterate', description: 'Drive execution while maintaining strategic oversight. Review results regularly, adjust the roadmap based on learnings, and continuously improve the growth engine.' },
    ],
    processDescription: 'Growth leadership requires balancing strategic planning with operational execution.',

    faqItems: [
      { question: 'What is the difference between a Head of Growth and a Head of Marketing?', answer: 'A Head of Marketing typically covers the full marketing function including brand, communications, PR, and sometimes events alongside digital marketing. A Head of Growth is more narrowly focused on measurable business growth through acquisition, retention, and revenue optimization. The Head of Growth role tends to be more data driven and experimental, often sitting closer to the product team than traditional marketing leadership. In some companies, particularly smaller ones, one person does both.' },
      { question: 'What background does a Head of Growth typically have?', answer: 'Most come from performance marketing, growth marketing, or product management backgrounds. Some come from data or analytics roles. The common thread is strong analytical skills, comfort with experimentation, and the ability to connect marketing activities to business outcomes. Experience building and managing teams is also essential. The best Heads of Growth combine deep channel expertise with strategic thinking and leadership skills.' },
      { question: 'Does the Head of Growth manage both acquisition and retention?', answer: 'In most organizations, yes. The role is responsible for the full growth loop: acquiring new customers efficiently, activating them, retaining them, and increasing their lifetime value. Some companies split acquisition and retention into separate teams, but the Head of Growth typically owns the strategy and metrics for both. In my experience, the most impactful growth improvements often come from retention and activation rather than acquisition.' },
      { question: 'How does a Head of Growth work with the product team?', answer: 'Closely. Many growth initiatives involve product changes: improving onboarding, adding referral mechanics, optimizing pricing, or reducing friction in the purchase flow. The Head of Growth needs to influence the product roadmap and collaborate with product managers and engineers. In some organizations, the growth team includes engineers and product managers who work specifically on growth related product features.' },
    ],

    relatedCards: [
      { title: 'Performance Marketing', description: 'Paid acquisition strategy and execution.', href: '/performance-marketing' },
      { title: 'Head of Marketing', description: 'Broader marketing leadership.', href: '/head-of-marketing' },
      { title: 'Director of Growth', description: 'Growth leadership at director level.', href: '/director-of-growth' },
      { title: 'Director of Digital Marketing', description: 'Digital marketing leadership.', href: '/director-of-digital-marketing' },
      { title: 'Fractional CMO', description: 'Part time strategic marketing leadership.', href: '/fractional-cmo' },
      { title: 'Google Ads', description: 'Primary paid search platform.', href: '/google-ads' },
      { title: 'Meta Ads', description: 'Paid social advertising.', href: '/meta-ads' },
      { title: 'Growth Marketing Explained', description: 'The discipline behind growth roles.', href: '/growth-marketing-explained' },
    ],
    ctaHeading: 'Looking for a Head of Growth?',
    ctaDescription: 'If you are looking for growth leadership that combines strategic thinking with hands on channel expertise, feel free to reach out.',
    ctaColor: '#6366f1',
    links: {
      siblings: ['head-of-marketing', 'director-of-growth', 'director-of-digital-marketing', 'small-business-cmo', 'fractional-cmo'],
      tools: ['google-ads', 'meta-ads', 'microsoft-ads', 'google-shopping', 'product-feed-optimization'],
      topics: ['what-is-performance-marketing', 'growth-marketing-explained', 'attribution-modeling-explained', 'a-b-testing-explained'],
      relatedTopics: ['performance-marketing', 'head-of-marketing', 'director-of-growth', 'director-of-digital-marketing', 'small-business-cmo', 'google-ads', 'meta-ads', 'microsoft-ads'],
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
