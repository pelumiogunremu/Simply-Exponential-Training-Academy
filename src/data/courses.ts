/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course } from "../types";

export const courses: Course[] = [
  {
    id: "ai-data-skills",
    title: "AI and Data Skills",
    slug: "ai-data-skills",
    shortDescription: "Learn data analytics, business intelligence, visualization, and modern AI data tools to make informed business decisions.",
    overview: "In today's data-driven economy, data is the new currency. The AI and Data Skills programme equips you with the foundational and advanced competencies required to process, analyze, visualize, and interpret complex data structures, powered by modern artificial intelligence. From structuring dynamic spreadsheets in Excel to writing robust relational database queries in SQL and building interactive business intelligence reports in Power BI and Tableau, this course accelerates your journey toward becoming a highly competent data professional.",
    duration: "16 Weeks (120+ Hours of Applied Learning)",
    format: "Hybrid Learning (Interact live virtual plus hands-on physical bootcamps)",
    learningOutcomes: [
      "Analyze and clean messy, complex datasets using advanced Excel, Python and SQL",
      "Build interactive enterprise dashboards that communicate key stakeholder insights",
      "Formulate predictive and analytical queries to answer complex commercial questions",
      "Embed AI prompt-engineering and LLM-powered tools to automate data cleaning and report generation",
      "Generate standard Business Intelligence reporting ready for presentation to executive boards",
      "Translate raw enterprise datasets into actionable tactical recommendations"
    ],
    curriculum: [
      {
        title: "Introduction to Data Analytics",
        subtopics: [
          "The Data Analytics Lifecycle: Discovery, Wrangling, Modeling, Communication",
          "Types of Analytics: Descriptive, Diagnostic, Predictive, and Prescriptive",
          "Data Ethics, Governance, and GDPR compliance overview",
          "Identifying business questions solvable with raw data"
        ]
      },
      {
        title: "Excel for Data Analysis",
        subtopics: [
          "Advanced formulas & Logical functions (VLOOKUP, XLOOKUP, INDEX-MATCH, nested IFS)",
          "Data cleaning pipelines: Text-to-Columns, Duplicating, Flash Fill, and Power Query",
          "Pivot Tables & Pivot Charts for rapid cross-tabulation and interactive summaries",
          "What-If Analysis, Solver, and building native automated spreadsheets"
        ]
      },
      {
        title: "SQL Fundamentals & Relational Databases",
        subtopics: [
          "Understand relational databases, schemas, primary keys, and foreign keys",
          "Querying data with SELECT, WHERE, LIKE, ORDER BY, and LIMIT",
          "Aggregations and Groups: GROUP BY, HAVING, COUNT, SUM, AVG",
          "Joining tables: INNER, LEFT, RIGHT, and FULL outer joins",
          "Subqueries, Common Table Expressions (CTEs), and Query Optimization"
        ]
      },
      {
        title: "Python for Data Analysis",
        subtopics: [
          "Python syntax essentials, variables, lists, dicts, and loops",
          "Data structures with NumPy for numerical computations",
          "Data wrangling and exploratory data analysis (EDA) with Pandas",
          "Data visualization using Seaborn and Matplotlib packages"
        ]
      },
      {
        title: "Power BI & Business Intelligence",
        subtopics: [
          "Connecting to diverse data sources and building robust Data Models (Star Schemas)",
          "Data Transformation and clean-up in Power Query Editor",
          "Introduction to DAX (Data Analysis Expressions) for custom calculated columns and measures",
          "Designing highly interactive, beautiful, and accessible dashboard UI reports"
        ]
      },
      {
        title: "Tableau Visualization",
        subtopics: [
          "Tableau desktop workspace architecture and interface principles",
          "Creating advanced visual forms: Heat maps, dual-axis charts, bullet graphs, and treemaps",
          "Applying advanced filters, calculated fields, and groups",
          "Assembling interactive dashboards with Storytelling layouts"
        ]
      },
      {
        title: "Data Visualization Best Practices",
        subtopics: [
          "Choosing the right chart type: Comparison, distribution, composition, relationship",
          "Gestalt principles and cognitive load optimization in design",
          "Color theory, typography, and visual hierarchy for report cleanups",
          "Designing reports that speak directly to the C-Suite executive"
        ]
      },
      {
        title: "Business Intelligence Reporting & Generative AI",
        subtopics: [
          "Leveraging LLMs and generative AI tools for writing complex SQL, DAX, and Python scripts",
          "Automated anomaly detection and forecasting modeling",
          "Synthesizing numeric data into strategic operational summaries",
          "Presenting a data story persuasively to non-technical stakeholders"
        ]
      }
    ],
    tools: [
      { name: "Microsoft Excel", category: "Spreadsheets" },
      { name: "PostgreSQL / SQLite", category: "Database Queries" },
      { name: "Power BI", category: "Enterprise BI Dashboarding" },
      { name: "Tableau Desktop", category: "Interactive Data Viz" },
      { name: "Python (Pandas/NumPy)", category: "Programming & Wrangling" },
      { name: "VS Code / Jupyter Notebooks", category: "Coding Environment" },
      { name: "Gemini / ChatGPT for Coders", category: "AI-Assisted Efficiency" }
    ],
    projects: [
      {
        title: "Retail Sales Performance Optimization Dashboard",
        description: "Analyze a complex multi-million row sales dataset using SQLite and Power BI. Clean the raw data sheets, model relational mapping, calculate DAX metrics to identify declining store margins, and present a solution-oriented dashboard panel to improve logistics efficiency."
      },
      {
        title: "Healthcare Attrition & Predictive Analytics",
        description: "Engage Python (Pandas & Seaborn) to analyze healthcare staff demographic and performance indexes. Uncover key indicators behind rising staff turnover, and format visual insights detailing retention-focused incentive strategies."
      }
    ],
    capstoneProject: {
      title: "Enterprise Business Intelligence Report & Advisory",
      description: "Working in teams, select a real-world company (or choose one of our industry partners' sandboxed datasets). Perform end-to-end extraction (SQL), transformations (Power Query/Pandas), diagnostic visualizations, and build a production-grade Tableau or Power BI dashboard. Finally, pitch your interactive data findings live to a panel of expert advisors and hiring managers, outlining empirical strategic steps for the company's next fiscal quarter."
    },
    careerOpportunities: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Reporting Officer",
      "Operations Analyst",
      "Junior Database Administrator",
      "Analytics Consultant",
      "Market Research Analyst"
    ],
    faqs: [
      {
        id: "ai-f1",
        question: "Do I need a strong mathematical or coding background to register?",
        answer: "No. This course is systematically designed to take you from absolute zero to job-readiness. We introduce databases and coding concepts progressively, using real-world analogies, high-touch instructor coaching, and hands-on lab sessions before moving into specialized data syntax."
      },
      {
        id: "ai-f2",
        question: "What specifications are required for my learning laptop?",
        answer: "A laptop with Windows 10/11 or macOS, containing at least 8GB RAM (16GB recommended) and a core i5 processor (or Apple Silicon M1/M2/M3) is ideal for running Power BI Desktop and running local SQL environments smoothly."
      },
      {
        id: "ai-f3",
        question: "Will I receive real-world work experience?",
        answer: "Yes, our interactive capstones simulate enterprise workflows. You will tackle real raw datasets from active organizations, build functional deliverables, and collaborate using agile project methodologies just like distributed digital teams."
      }
    ],
    accentColor: "blue",
    bgGradient: "from-blue-600 to-indigo-700"
  },
  {
    id: "digital-marketing-growth",
    title: "Digital Marketing and Growth",
    slug: "digital-marketing-growth",
    shortDescription: "Master digital marketing strategies, campaign management, organic customer acquisition, paid advertising, and performance analytics.",
    overview: "Whether you want to drive thousands of high-intent website visitors, scale a local startup to a global audience, or transition to a high-demand creative career, digital marketing is your unfair advantage. The Digital Marketing and Growth programme offers an industry-certified deep-dive into paid and organic growth systems, dynamic content pipelines, social commerce, search engine optimization (SEO), and conversion rate metrics.",
    duration: "16 Weeks (120+ Hours of Applied Learning)",
    format: "Hybrid Learning (Interact live virtual plus hands-on physical bootcamps)",
    learningOutcomes: [
      "Formulate full-funnel digital marketing strategies suited for B2B and B2C landscapes",
      "Execute structure-backed search ads and display campaigns on Google Ads and Meta Platforms",
      "Conduct keyword lookup and apply authoritative on-page and technical SEO frameworks",
      "Produce brand-aligned copywriting driven by AI optimization platforms",
      "Configure Google Analytics (GA4) pipelines to trace referral actions and calculate real CAC/LTV",
      "Manage client budgets and outline scalable social media marketing playbooks"
    ],
    curriculum: [
      {
        title: "Marketing Fundamentals & Consumer Psychology",
        subtopics: [
          "The modern digital customer journey: TOFU, MOFU, BOFU frameworks",
          "Defining target personas, empathy maps, and competitive analysis matrixes",
          "Understanding value propositions and writing irresistible copy hook lines",
          "Setting key performance indicators (KPIs) and marketing roadmap targets"
        ]
      },
      {
        title: "Social Media Marketing & Brand Strategy",
        subtopics: [
          "Platform algorithm blueprints (Instagram, LinkedIn, TikTok, X, YouTube)",
          "Organic brand distribution, community building, and user engagement strategies",
          "Influencer marketing matching, outreach, and legal reporting",
          "Social media calendar orchestration, visual templates, and asset creation"
        ]
      },
      {
        title: "Search Engine Optimization (SEO) & Audits",
        subtopics: [
          "Search Engine mechanics: Crawling, indexing, ranking algorithms",
          "Keyword research blueprints: Intent analysis, search volumes, and difficulty scales",
          "On-page optimization: Title tags, headings, schema markup, and internal link trees",
          "Technical SEO audits using Google Search Console, Screaming Frog, and load speed tests",
          "Off-page authority: White-hat link building, backlink profiles, and local search footprint"
        ]
      },
      {
        title: "Paid Advertising: Google Ads Ecosystem",
        subtopics: [
          "Google Ads account topology, campaign setups, and bidding models (CPC, CPM, CPA)",
          "Structuring responsive search campaigns, negative keywords, and ad extensions",
          "Display network and YouTube video targeted ad setup",
          "Retargeting setups and bid optimization hacks"
        ]
      },
      {
        title: "Meta Ads (Facebook & Instagram Advertising)",
        subtopics: [
          "Deploying Meta Business Manager, Pixels, and Conversions API setups",
          "Defining Custom and Lookalike audiences to scale customer discovery",
          "Creative formats: Carousel, video reels, dynamic creative templates, lead generation forms",
          "A/B testing ad structures and combating high ad fatigue on budgets"
        ]
      },
      {
        title: "Content Marketing & Copywriting Mastery",
        subtopics: [
          "Writing magnetic headlines, blog models, and long-form thought-leadership",
          "Applying classical frameworks: AIDA (Attention, Interest, Desire, Action) and PAS (Problem, Agitate, Solve)",
          "Video script production for TikTok and Reels",
          "Repurposing content efficiently across 5+ digital channels"
        ]
      },
      {
        title: "Email Marketing & Marketing Automation",
        subtopics: [
          "Building compliant subscriber lists from lead-magnets",
          "Setting up behavioral sequences: Welcome series, abandoned carts, and re-engagement loops",
          "Email template creation, CTA layout rules, and delivering directly to primary inboxes",
          "Analyzing open rates, click-through rates (CTR), and conversion calculations"
        ]
      },
      {
        title: "Campaign Performance Analytics & AI Marketing Tools",
        subtopics: [
          "Navigating Google Analytics 4 (GA4): Active sessions, event configuration, source acquisition",
          "Building integrated visual client dashboards using Looker Studio",
          "Deploying GenAI platforms: advanced copy-generation, visual mockups, and script adjustments",
          "Preparing professional agency-ready performance reports for clients"
        ]
      }
    ],
    tools: [
      { name: "Google Analytics (GA4)", category: "Traffic Attribution" },
      { name: "Meta Business Suite / Ads Manager", category: "Social Paid Media" },
      { name: "Google Ads Manager", category: "Search Paid Media" },
      { name: "SEMrush / Ahrefs / Moz", category: "SEO Insights" },
      { name: "Mailchimp / Brevo", category: "Email Automations" },
      { name: "Canva & Figma", category: "Creative Production" },
      { name: "Looker Studio", category: "Interactive Reports" },
      { name: "Gemini / ChatGPT for Creators", category: "Ad Copy & Concepting" }
    ],
    projects: [
      {
        title: "Local E-Commerce High-CAC Ad Recovery Campaign",
        description: "Given an e-commerce brand suffering from sky-high acquisition costs, reconstruct their complete Meta and Google ad account structures. Program and draft high-converting custom-targeted copy options, configure audience clusters, define exact budget plans, and detail conversion rate growth steps."
      },
      {
        title: "Authority SEO Optimization Checklist & Content Audit",
        description: "Take over an underperforming digital service company website. Deliver a comprehensive on-page keyword optimization checklist, structural URL repairs, page loading diagnostic fixes, and formulate a 4-month editorial content production roadmap that drives organic visibility."
      }
    ],
    capstoneProject: {
      title: "Full-Funnel Launch Growth Venture Campaign",
      description: "Working alongside local business founders or simulated cases, create an integrated digital launch strategy from scratch. Draft visual brand assets, construct SEO keyword targets, formulate a structural paid budget plan (split between Search, Social, and Automation), build operational landing pages, and present an integrated pitch deck with measurable KPI models. This capstone is presented to real growth marketers and startup operators."
    },
    careerOpportunities: [
      "Digital Marketing Specialist",
      "Performance Marketer",
      "Social Media/SEO Manager",
      "Growth Marketing Coordinator",
      "Content Strategist / Copywriter",
      "Paid Ads Specialist (PPC)",
      "Email Marketing Automator"
    ],
    faqs: [
      {
        id: "dm-f1",
        question: "Is there budget required for ads during training?",
        answer: "We supply sandboxed tools and simulated structures, so zero personal budget is required to pass. For learning labs, we walk through live campaign examples using real budgets set aside by Simply Exponential to demonstrate real performance in real-time."
      },
      {
        id: "dm-f2",
        question: "How does the career support connect me to clients?",
        answer: "We prepare you for both stable corporate and high-ticket freelancing environments. Graduates receive dedicated modules on crafting freelance pitches on Upwork, Feverr, and LinkedIn search hacks, paired with direct referrals to agencies in our employer circle."
      },
      {
        id: "dm-f3",
        question: "Will I learn how to use AI tools for my marketing work?",
        answer: "Yes, 100%. Generative AI is now standard in professional marketing. You will learn to construct specialized copywriting templates, auto-generate responsive social captions in bulk, create beautiful graphic prototypes, and execute quick qualitative market analyses."
      }
    ],
    accentColor: "emerald",
    bgGradient: "from-emerald-600 to-teal-700"
  },
  {
    id: "product-management-entrepreneurship",
    title: "Product Management and Digital Entrepreneurship",
    slug: "product-management-entrepreneurship",
    shortDescription: "Learn how to build, launch, manage, and scale high-value digital products while developing powerful digital entrepreneurial skills.",
    overview: "Great digital ideas fail not because of technology, but because of poor alignment to market realities and inconsistent execution. The Product Management and Digital Entrepreneurship programme acts as a practical incubator. It demystifies how world-class products are discovered, validated, structured, engineered (with low-code/no-code stacks), and launched. Designed for aspiring product managers, business analysts, startup founders, and design specialists, this course instills strategic leadership mastery.",
    duration: "16 Weeks (120+ Hours of Applied Learning)",
    format: "Hybrid Learning (Interact live virtual plus hands-on physical bootcamps)",
    learningOutcomes: [
      "Conduct rigorous user discovery and quantitative market research validation",
      "Draft industry-grade PRDs (Product Requirement Documents) and prioritize features",
      "Structure clear, actionable Agile product development roadmaps & backlogs",
      "Coordinate development teams using modern Scrum and Kanban structures",
      "Build high-fidelity wireframe interactive prototypes using Figma",
      "Coordinate full Go-To-Market (GTM) launches and calculate product-market-fit metrics",
      "Formulate startup business models and present professional pitch decks to angel funds"
    ],
    curriculum: [
      {
        title: "Product Discovery & Market Research Validation",
        subtopics: [
          "The Product Manager Role: Bridge between Business, Design, and Technology",
          "Unveiling user needs through direct customer interviewing and user surveys",
          "Competitive analysis matrix, SWOT, and finding high-value market gaps",
          "The Minimum Viable Product (MVP) loop: Build-Measure-Learn cycle"
        ]
      },
      {
        title: "Product Strategy & Value Propositions",
        subtopics: [
          "Defining North Star metrics and company Strategic Focus points",
          "Building the Lean Business Canvas for digital business modeling",
          "Value Proposition design: Aligning product features to core customer pains/gains",
          "Identifying monetization and sustainable unit economics vectors"
        ]
      },
      {
        title: "UX/UI Prototyping & Interaction Design",
        subtopics: [
          "Information architecture models and user journey flowmapping",
          "Creating wireframes: Low-fidelity paper sketchups to high-fidelity clickable Figma designs",
          "Usability evaluation techniques, user testing scripts, and design system alignment",
          "Collaborating with UI designers and preparing design handoffs for engineers"
        ]
      },
      {
        title: "Agile, Scrum & Kanban Methodologies",
        subtopics: [
          "The Agile Manifesto principles and cultural alignment",
          "Scrum team roles: Product Owner, Scrum Master, and Developers",
          "Running Scrum ceremonies: Sprint Planning, Daily Stand-ups, Review, and Retrospectives",
          "Managing backlog queues, writing User Stories (INVEST criteria), and estimating sizing"
        ]
      },
      {
        title: "Product Roadmapping & Prioritization Frameworks",
        subtopics: [
          "Prioritizing features using structured models: RICE, MoSCoW, Kano, Value/Effort matrix",
          "Orchestrating visual product roadmaps in Jira, ClickUp, or Productboard",
          "Differentiating timelines between outputs versus outcome-driven objectives",
          "Managing scope creep and saying 'No' to stakeholders constructively"
        ]
      },
      {
        title: "Product Analytics & Post-Launch Measurement",
        subtopics: [
          "Measuring user retention, active usage (DAU/MAU), and activation drop-offs",
          "Structuring A/B test setups on checkout components or home layouts",
          "Quantitative behavior analytics using Hotjar, Mixpanel, or Amplitude",
          "Collecting and prioritizing customer feature requests from customer service logs"
        ]
      },
      {
        title: "Go-To-Market (GTM) Launch Blueprints",
        subtopics: [
          "Formulating product pricing tiers and competitive SaaS monetization strategies",
          "Designing release blueprints: alpha, closed beta, public beta, and general availability",
          "Coordinating marketing, support, and sales teams for synchronized launches",
          "Tracking post-launch alignment and accelerating viral loops"
        ]
      },
      {
        title: "Digital Entrepreneurship & Investor Pitching",
        subtopics: [
          "The anatomy of a winning venture capitalist (VC) and Angel pitch deck",
          "Legal business formations, intellectual property rights, and founder term sheets",
          "Financial projections, burn rate management, and investment runway planning",
          "Presenting digital startup concepts persuasively to investors"
        ]
      }
    ],
    tools: [
      { name: "Figma", category: "UX/UI Clickable Prototyping" },
      { name: "Jira / Confluence", category: "Agile Project Planning" },
      { name: "Trello & Miro", category: "Collaborative Storyboarding" },
      { name: "Amplitude / Mixpanel", category: "Product Funnel Analytics" },
      { name: "Productboard", category: "Strategic Feature Roadmaps" },
      { name: "Loom and Notion", category: "Documenting Specs & PRDs" },
      { name: "Bubble / Webflow", category: "No-Code Build Sandbox" }
    ],
    projects: [
      {
        title: "CollabTask PM Portfolio Blueprint",
        description: "Draft a comprehensive Product Requirement Document (PRD) for a modern remote task scheduling app. Outline high-fidelity Figma user-journey wireframes, establish feature priority using the RICE scoring model, write detailed Epic & Sprint backlog lists inside Jira, and create the strategic product launch roadmap."
      },
      {
        title: "Zero-to-One Lean Startup Incubator Pitch Deck",
        description: "Formulate a digital venture matching a local market challenge (e.g., decentralized agricultural transport). Craft the complete Lean Business Canvas, test assumption theories with customer validation scripts, build a clickable low-code MVP portal, and produce a polished pitch deck."
      }
    ],
    capstoneProject: {
      title: "Interactive Product Showcase & Demo Day Pitch",
      description: "Collaborating with fellow classmates, build a brand new digital venture solution from concept to high-fidelity clickable product. Complete the PRD, present the clickable design prototype, deliver a structured agile roadmap, and map the comprehensive Go-To-Market strategy. This integrated program culminates in SECL's annual 'Demo Day,' presenting your startup model live before incubator heads, accelerators, and tech funders."
    },
    careerOpportunities: [
      "Associate Product Manager (APM)",
      "Technical Product Owner (PO)",
      "Business Systems Analyst",
      "Digital Product Strategist",
      "Startup Founder / Co-Founder",
      "Venture Capital Analyst",
      "Agile Project Consultant"
    ],
    faqs: [
      {
        id: "pm-f1",
        question: "Do I need to check in with programming languages to understand this course?",
        answer: "Absolutely not. Product Managers focus on the 'What' and the 'Why', while developers focus on the 'How'. We teach you how to translate business needs into technical blueprints and use intuitive design/no-code platforms, allowing you to productively speak the language of engineering without coding."
      },
      {
        id: "pm-f2",
        question: "How does the digital entrepreneurship track support founders?",
        answer: "Aside from direct training modules on building pitching models and setting up entity registration, SECL's network links qualifying graduates with prominent incubator hubs like AfriLabs and GIZ channels to discover pre-seed micro-grants."
      },
      {
        id: "pm-f3",
        question: "Can I take this course alongside my current full-time employment?",
        answer: "Yes, our hybrid delivery scheme leverages modular evening virtual instruction sessions and interactive weekend bootcamps, which helps professionals upskill and switch careers without resigning from their current jobs."
      }
    ],
    accentColor: "purple",
    bgGradient: "from-purple-600 to-fuchsia-700"
  }
];
