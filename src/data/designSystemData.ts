/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface InfoArchSection {
  title: string;
  items: string[];
}

export interface WireframeElement {
  sectionName: string;
  layoutType: string;
  visualLayout: string;
  purpose: string;
}

export interface StrategyItem {
  metric: string;
  implementation: string;
  benefit: string;
}

export const infoArchitecture: InfoArchSection[] = [
  {
    title: "1. Navigation Structure (Global Header)",
    items: [
      "Brand Identity: Simply Exponential Consult Limited (SECL) logo (Links to Homepage)",
      "Primary Links: Courses (Dropdown list displaying the 3 programmes), About Us, Trainers, Career Support, Contact Us",
      "Action Callouts: 'Design Strategy Hub' (Interactive toggle), 'Apply Now' (Accent Button triggering the multi-step application wizard)"
    ]
  },
  {
    title: "2. Homepage (Primary Conversion Funnel)",
    items: [
      "Hero block with bold futuristic tagline & dual high-contrast action CTAs",
      "Overview Statement summarizing Simply Exponential's value proposition & trust pillars",
      "Programme Showcase: Course cards mapping custom modules and paths",
      "The Hybrid Journey: Step-by-step learning experience interactive timeline",
      "Job Readiness Module: Real metrics, career services highlights, and outcome tracking",
      "The Mentor Circle: Faculty carousel showing profiles and qualifications",
      "Social Validation: Interactive testimonials panel & verified employer networks list"
    ]
  },
  {
    title: "3. Modular Page Architecture (Course Pages, Support, Partners)",
    items: [
      "Deep-Dive Curriculum Hubs containing expandable modules, tools arrays, and capstone blueprints",
      "Dedicated 'About Us' detailing SECL's mission, vision, and core capacity markers",
      "Career Support portal tracing portfolio building, interview prep, and direct job referral schemes",
      "Detailed contacts dashboard complete with physical address coordinates, support email channels, and an interactive lead capture panel"
    ]
  }
];

export const uiuxLayouts = {
  themeMood: "The overall style is a premium, cutting-edge EdTech design named 'Elite Slate'. It leverages deep charcoal backgrounds, soft slate off-whites, and vibrant gradient accents unique to each programme (Blue for AI, Emerald for Digital Marketing, and Purple for Product Management). This builds visual distinction without creating layout chaos.",
  gridSystem: "A strict 12-column Grid is utilized across desktop frames, adapting fluidly to single-column card hierarchies on mobile viewports. Layouts feature comfortable padding (py-16 to py-28) to cultivate high breathing-room and allow typography to establish instant cognitive structure.",
  interactionStates: "All primary conversion buttons apply smooth transitions (duration-300) with subtle scale hover transformations (hover:-translate-y-0.5 hover:shadow-lg) to incentivize actions. Interactive FAQ modules apply custom height transitions to reveal answers cleanly.",
  accessibilityCode: "A minimum of 4.5:1 color contrast ratio is applied globally (e.g., charcoal text on crisp off-white or white text on vibrant gradient backgrounds). Proper semantic HTML elements (nav, main, section, footer, article, button) are declared with unique IDs."
};

export const wireframes: WireframeElement[] = [
  {
    sectionName: "Landing Hero Frame",
    layoutType: "Split 2-Column Banner Layout",
    visualLayout: "[Left Column]: Bold Title + Descriptive Subtext + Gradient Primary Button & Outline Secondary Button | [Right Column]: Custom interactive EdTech isometric dashboard graphic emphasizing real-time skill growth.",
    purpose: "Instantly capture professional intent and outline clear navigational shortcuts for high-converters."
  },
  {
    sectionName: "Industry Skill Icons Grid",
    layoutType: "3x2 Responsive Flex Grid",
    visualLayout: "Six card elements each styled with transparent border strokes, elevated left-hand visual icons (Lucide-react icons), bold headers, and crisp, single-sentence descriptions.",
    purpose: "Highlight immediate program benefits and clear post-learning capabilities in a highly scannable visual grid."
  },
  {
    sectionName: "Interactive Syllabus Drawer",
    layoutType: "Vertical Accordion Block",
    visualLayout: "Stacked modular rows showing 'Module 1, 2, ...' with right-aligned indicator chevrons. Expanding a row reveals modular bullet lists, practical goals, and expected student challenges.",
    purpose: "House extensive syllabus details cleanly without overwhelming passive readers with wordy text blocks."
  },
  {
    sectionName: "Faculty Profiles",
    layoutType: "Horizontal Scrolling Cards Array",
    visualLayout: "Elegant portrait-ratio cards containing stylized background icons, crisp credentials markers, name headings, and expandable text-buttons revealing expert backgrounds.",
    purpose: "Build human connection and elevate educational trust scores."
  }
];

export const designSystem = {
  colors: [
    { name: "Primary Brand Slate", value: "Slate 900 (#0f172a)", desc: "Global background foundations and dark structural headers." },
    { name: "Canvas Warm Ivory", value: "Slate 50 (#f8fafc) & Light Gray (#f1f5f9)", desc: "Clean, high-contrast, premium light-mode layouts." },
    { name: "Syllabus Accent (AI)", value: "Blue-600 Gradient (#2563eb)", desc: "Dynamic color accents representing computational depth in Data Analytics modules." },
    { name: "Syllabus Accent (Growth)", value: "Emerald-600 Gradient (#059669)", desc: "Growth color represent organic visibility and acquisition funnels." },
    { name: "Syllabus Accent (PM/Ent)", value: "Purple-600 Gradient (#9333ea)", desc: "Vibrant violet hues symbolizing innovation, product architecture, and venture creation." }
  ],
  typography: {
    headings: "Space Grotesk / Inter (Weights: 600, 700) – Tech-forward, highly legible, strong character kerning.",
    bodyText: "Inter (Weights: 400, 500) – High rendering precision, optimal readability on screens.",
    technicalStats: "JetBrains Mono (Weight: 500) – Establishes raw analytical trust in numeric cards."
  },
  spacing: {
    outerSections: "py-16 to py-28 (Desktop) & py-10 (Mobile) – Curates excellent negative space.",
    innerComponents: "gap-6 to gap-10 – Keeps sub-components structured and easily discoverable."
  },
  buttons: [
    { type: "Primary Action", styling: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300 transform hover:-translate-y-0.5 hover:shadow-lg focus:ring-4 focus:ring-blue-100", id: "btn-primary-apply" },
    { type: "Secondary Outlined", styling: "border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-medium px-6 py-3 rounded-xl transition duration-300 focus:ring-4 focus:ring-slate-100", id: "btn-secondary-explore" }
  ]
};

export const conversionTriggers: StrategyItem[] = [
  {
    metric: "High-Visibility Application Funnel",
    implementation: "Sticky primary navigation container houses an direct accent-colored 'Apply Now' CTA button triggering the custom multi-step wizard containing clear progression indicators.",
    benefit: "Keeps learners only one-click away from initiating enrolment, regardless of which page segment they are researching."
  },
  {
    metric: "Urgency and Capacity Indicators",
    implementation: "Strategic, non-intrusive banner warnings highlighting next cohort intakes and limited seats (e.g., 'Cohort starting soon - 12 seats left').",
    benefit: "Drives prospective student decision-making, converting passive interest into proactive applications."
  },
  {
    metric: "Modular Proof Points & Stats",
    implementation: "High-contrast visual counters showing 1,200+ trained students, 94% graduation rate, and 85% career placement success, flanked by real client feedback from the LSETF cohort.",
    benefit: "Suppresses enrolment friction by providing empirical evidence of training efficacy and employer trust."
  },
  {
    metric: "Multi-Step Application Wizard",
    implementation: "Instead of directing users to long external spreadsheets, implement an elegant in-app modal form capturing contact info, course selection, and motivation.",
    benefit: "Reduces bounce rates by maintaining consistent, polished, of-piece branding during the application checkout."
  }
];

export const seoOptimizations = [
  {
    page: "Homepage",
    title: "Simply Exponential Training Academy | Digital Skills & Career Growth",
    keywords: "digital skills training Nigeria, tech bootcamp Lagos, AI data career development, SECL academy, professional digital skills, LSETF training partner",
    description: "Launch your career with industry-proven software development, AI & Data Skills, Product Management, and Digital Marketing training from Simply Exponential Consult Limited (SECL)."
  },
  {
    page: "AI & Data Skills",
    title: "AI & Data Analytics Program | Simply Exponential Training Academy",
    keywords: "data analytics bootcamp, learn SQL and Excel Lagos, power BI training, python data analysis course, business intelligence certification",
    description: "Master modern data reporting, SQL database querying, advanced Excel spreadsheets, and dashboard design in our hybrid 10-week AI & Data Skills bootcamp."
  },
  {
    page: "Digital Marketing & Growth",
    title: "Digital Marketing & Growth Bootcamp | Learn Paid Ads & SEO",
    keywords: "digital marketing course Lagos, learn SEO optimization, Google Ads certification training, social media growth agency program",
    description: "Step into high-paying client contracts. Master full-funnel digital strategy, paid search engine media, meta pixel setup, and copywriting."
  },
  {
    page: "Product Management & Entrepreneurship",
    title: "Product Management & Startup Incubation | Simply Exponential",
    keywords: "product manager course, learn agile scrum frameworks Lagos, startup incubator program, figma wireframe UX training Nigeria",
    description: "Learn how to discover, research, build, and scale digital products. Includes full Agile framework, Jira management, and investor pitching."
  },
  {
    page: "Trainers & Mentors",
    title: "Meet the Tech Leadership & Industry Advisory Faculty | SECL",
    keywords: "Fayo Williams consulting, tech mentors Nigeria, expert SQL trainers, corporate growth consultants Lagos",
    description: "Learn from battle-tested product builders, business consultants, and Google certified growth specialists with real industry experience."
  },
  {
    page: "Career Support & Placement",
    title: "Digital Employability Service, Internships & Jobs | Simply Exponential",
    keywords: "tech internships Nigeria, tech CV writing help, job placement support Lagos, portfolio building bootcamp",
    description: "Prepare for high-demand digital careers with dedicated CV coaching, LinkedIn optimization audits, and direct job references to employer networks."
  }
];
