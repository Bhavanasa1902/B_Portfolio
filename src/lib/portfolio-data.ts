/**
 * Portfolio content for Bhavana Sudhakar Athavane — Data Engineer
 * Extracted and refined from the source portfolio.
 * Wording improved for editorial clarity while preserving all factual information.
 */

export const profile = {
  name: "Bhavana Sudhakar Athavane",
  firstName: "Bhavana",
  lastName: "Athavane",
  role: "Data Engineer",
  // Single line positioning statement used across hero / meta / footer
  positioning:
    "I build data pipelines and AI services that power real-time decision making at scale.",
  // Long-form manifesto used in About
  manifesto: [
    "After starting my career in Bangalore and moving to the U.S. for graduate study at CSU Fullerton, I focus on turning complex data systems into reliable, production-ready pipelines that support analytics and AI.",
    "My work blends database engineering, cloud-native architectures, and ML-ready pipelines — with a relentless focus on measurable outcomes: lower latency, more accurate models, and systems teams can operate with confidence.",
    "I enjoy mentoring and teaching: as a Graduate Teaching Assistant I run labs, lead office hours, and help students translate ambiguous business questions into structured, queryable analysis.",
  ],
  location: "Fullerton, California, USA",
  email: "bhavanasathavane@gmail.com",
  phone: "+1 (657) 751-9230",
  availability: "Open to data platform / AI engineering roles",
  availabilityNote: "Open to full-time roles in data platforms, cloud, and AI engineering",
  archetype: "developer",
  seniority: "mid",
  focusAreas: ["AI", "Cloud Computing", "Fintech", "Telecom"],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bhavana-athavane", handle: "bhavana-athavane" },
    { label: "GitHub", href: "https://github.com/Bhavanasa1902", handle: "Bhavanasa1902" },
    { label: "Resume", href: "/resume.pdf", handle: "Download PDF" },
  ],
  // Hero stat band — verified metrics from the source portfolio
  stats: [
    { value: "4", label: "Shipped data & AI projects", note: "Products" },
    { value: "8+", label: "Production data pipelines", note: "Pipelines" },
    { value: "500K+", label: "Transactions & telemetry processed", note: "Scale" },
    { value: "3", label: "Years in production systems", note: "Experience" },
  ],
  // Three positioning pillars shown as "Principles"
  principles: [
    {
      title: "Reliable pipelines",
      body: "ETL and backend flows that avoid surprises, keep data fresh, and scale with demand rather than against it.",
    },
    {
      title: "Production-ready data",
      body: "Databases, schemas, and observability designed so teams can ship analytics and ML with confidence, not caveats.",
    },
    {
      title: "Impact-first work",
      body: "Outcomes over activity: faster queries, lower batch time, and clearer business insights — measured, not asserted.",
    },
  ],
  // Quick tech tags surfaced in hero
  signatureStack: [
    "SQL",
    "Python",
    "GCP",
    "BigQuery",
    "Vertex AI",
    "Dataflow",
    "Pub/Sub",
    "ETL",
    "Tableau",
    "NLP",
    "RAG",
    "Oracle",
  ],
};

export type ExperienceRole = {
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  stack?: string[];
};

export type ExperienceEntry = {
  id: string;
  org: string;
  location: string;
  // Overall span covering every role at this org
  period: string;
  current?: boolean;
  kind: "Full-time" | "Co-op" | "Academic" | "Trainee";
  // Short paragraph describing the relationship with the org
  summary: string;
  // One or more distinct roles held at this org
  roles: ExperienceRole[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "csuf-ta",
    org: "California State University, Fullerton",
    location: "Fullerton, CA",
    period: "Jan 2026 — May 2026",
    current: true,
    kind: "Academic",
    summary:
      "Graduate teaching assistant for an undergraduate business analytics course — bridging spreadsheet-first thinking and structured query work for fifty-plus students per semester.",
    roles: [
      {
        title: "Graduate Teaching Assistant — ISDS 361B",
        period: "Jan 2026 — May 2026",
        summary:
          "Running weekly labs, holding office hours, and grading structured assignments for a business analytics cohort moving from Excel into SQL.",
        highlights: [
          "Mentored 50+ students per semester across Excel, SQL, and business analytics, achieving a 95% assignment completion rate and improving average quiz scores by 18% through targeted labs and feedback.",
          "Designed and led weekly labs covering VLOOKUP, INDEX/MATCH, Pivot Tables, Power Query, and SQL — moving students from spreadsheet manipulation toward query-based analysis.",
          "Helped learners translate ambiguous business questions into structured, queryable analysis with measurable success criteria.",
        ],
        stack: ["SQL", "Excel", "Power Query", "Tableau"],
      },
    ],
  },
  {
    id: "nokia",
    org: "Nokia",
    location: "Sunnyvale, CA",
    period: "May 2025 — Dec 2025",
    kind: "Co-op",
    summary:
      "Two back-to-back co-op rotations on Nokia's AI inference and fault-diagnostics platform — first implementing the AI workflow, then strengthening the database layer underneath.",
    roles: [
      {
        title: "Platform Engineering Co-op — AI Systems",
        period: "May 2025 — Aug 2025",
        summary:
          "Summer co-op focused on Nokia's AI-assisted fault diagnostics — Vertex AI classification, real-time telemetry pipelines, and LLM-powered incident search.",
        highlights: [
          "Built an AI-powered fault diagnostic pipeline on Google Cloud Vertex AI achieving 82% fault classification accuracy; contributed to a 41% reduction in Mean Time to Resolution (MTTR).",
          "Built log-processing pipelines on GCP (Pub/Sub → Dataflow → BigQuery) handling real-time telemetry, cutting manual triage effort by ~80% and enabling automated alerting.",
          "Integrated LLM-powered semantic search using a RAG architecture across CMDB, JIRA, and knowledge bases, reducing average incident resolution time by over 35%.",
        ],
        stack: ["GCP", "Vertex AI", "Pub/Sub", "Dataflow", "BigQuery", "LLM", "RAG"],
      },
      {
        title: "Database Software Engineer — Co-op",
        period: "Sep 2025 — Dec 2025",
        summary:
          "Fall rotation focused on the database layer of the same AI inference platform — schema design, ETL consolidation, and Python service integrations.",
        highlights: [
          "Designed and optimized relational database schemas across Oracle, MySQL, and PostgreSQL for AI-driven backend systems, reducing average query latency by 55% through indexing, normalization, and query tuning.",
          "Consolidated 3 redundant ETL scheduled jobs into a single stored procedure pipeline, materially cutting average batch completion time and operational surface area.",
          "Built Python REST API integrations connecting backend services to OLTP databases, reducing average DB round-trips per request by ~40%.",
        ],
        stack: ["PostgreSQL", "MySQL", "Python", "REST", "Stored Procedures"],
      },
    ],
  },
  {
    id: "cognizant",
    org: "Cognizant",
    location: "Bangalore, India",
    period: "Mar 2022 — Aug 2024",
    kind: "Full-time",
    summary:
      "Two and a half years across two roles — first automating ETL and reporting as a trainee, then taking on broader Oracle DB performance and data-quality responsibilities.",
    roles: [
      {
        title: "Programmer Analyst Trainee",
        period: "Mar 2022 — Dec 2023",
        summary:
          "First role out of undergrad — automation and reporting across internal ETL workflows and executive dashboards for multiple business units.",
        highlights: [
          "Automated 8 internal ETL workflows using Python and SQL, reducing end-to-end processing time by ~20% and freeing ~15 hours/week of analyst time.",
          "Performed data validation across Oracle DB and SQL Server for 4 production pipelines; built and delivered 6 executive Tableau dashboards tracking KPIs across revenue, operations, and compliance.",
        ],
        stack: ["Python", "SQL", "Oracle DB", "SQL Server", "Tableau"],
      },
      {
        title: "Senior Systems Engineer",
        period: "Dec 2023 — Aug 2024",
        summary:
          "Promoted role focused on Oracle DB performance across three production systems and a cross-system validation framework used by the data quality team.",
        highlights: [
          "Led an Oracle DB performance engineering initiative across 3 production systems, improving overall throughput by 30% through query analysis, index rebuilding, and partition pruning.",
          "Developed an automated SQL data-validation framework in Python and PL/SQL spanning Oracle DB and SQL Server, catching ~200 cross-system discrepancies per month and reducing reconciliation time by 20%.",
        ],
        stack: ["Oracle DB", "SQL Server", "PL/SQL", "Python"],
      },
    ],
  },
];

export type ProjectEntry = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  // One-line articulation of the problem solved
  problem: string;
  // Approach / architecture narrative
  approach: string;
  // Quantified or qualitative outcome
  outcome: string;
  // Engineering thinking — what makes it interesting
  engineering: string[];
  stack: string[];
  tags: string[];
  codeHref?: string;
  featured: boolean;
};

export const projects: ProjectEntry[] = [
  {
    id: "fraud-detection",
    title: "Financial Fraud Detection Pipeline",
    category: "Anomaly Detection · Vertex AI",
    tagline: "End-to-end fraud detection on Google Cloud",
    problem:
      "Flag high-risk transactions in real time without flooding analysts with false positives — a classic precision-vs-recall tension at scale.",
    approach:
      "Built an end-to-end pipeline on Vertex AI covering transaction ingestion, feature engineering, and anomaly classification, with model outputs piped into a real-time alerting layer.",
    outcome:
      "Achieved 89% precision on transaction classification across 1M+ synthetic transactions, integrated directly into a live fraud response workflow.",
    engineering: [
      "Ingested and processed 1M+ synthetic transactions through a feature engineering pipeline.",
      "Trained and deployed an anomaly detection model achieving 89% precision on transaction classification.",
      "Integrated model outputs with an alerting system for real-time fraud response.",
    ],
    stack: ["Vertex AI", "BigQuery", "Python", "Cloud Functions"],
    tags: ["Data & ML", "Backend & DB"],
    codeHref: "https://github.com/Bhavanasa1902/AI-powered-Financial-Fraud-Detection-Anomaly-Analysis",
    featured: true,
  },
  {
    id: "nlp-content-modelling",
    title: "Document Intelligence with NLP",
    category: "CNN · OCR · Document Processing",
    tagline: "Turning unstructured documents into structured metadata",
    problem:
      "Manual categorization of diverse document formats was slow, inconsistent, and impossible to scale across a 10K-document corpus.",
    approach:
      "Developed an NLP pipeline using CNN models and OCR to extract and structure unstructured text from heterogeneous document formats, then classify text segments into structured metadata.",
    outcome:
      "Reduced manual categorization effort across a 10K-document test corpus by automating extraction and classification end-to-end.",
    engineering: [
      "Processed 5+ document formats using OCR and text cleaning pipelines.",
      "Trained CNN models to classify text segments and extract structured metadata.",
      "Reduced manual categorization effort for a 10K-document test corpus through automation.",
    ],
    stack: ["NLP", "OCR", "TensorFlow", "Python"],
    tags: ["Data & ML", "Backend & DB"],
    codeHref: "https://github.com/Bhavanasa1902/nlp-content-modelling",
    featured: true,
  },
  {
    id: "textile-db",
    title: "Textile Inventory & Order System",
    category: "Relational · Real-time · Reporting",
    tagline: "Normalized schema for inventory, orders, and supply",
    problem:
      "A textile business needed a single source of truth for orders, inventory, and supplier data — with real-time consistency and analytical reporting on top.",
    approach:
      "Designed a fully normalized schema for orders, inventory, supplier tracking, and payment workflows. Built stored procedures to keep stock and pricing consistent in real time, with reporting queries layered for demand forecasting.",
    outcome:
      "A single relational system that supports live transactions, enforces consistency, and powers demand forecasting and production planning.",
    engineering: [
      "Created a normalized schema for orders, inventory, and supplier tracking.",
      "Built stored procedures to keep stock and pricing consistent in real time.",
      "Added reporting queries for demand forecasting and production planning.",
    ],
    stack: ["Oracle", "PL/SQL", "SQL", "Reporting"],
    tags: ["Backend & DB"],
    codeHref: "https://github.com/Bhavanasa1902/textile-db",
    featured: true,
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Web Application (Internship Project)",
    category: "Additional Project · React · Firebase",
    tagline: "Full shopping experience with persistent cart",
    problem:
      "Build a complete commerce experience — discovery, authentication, cart, and checkout — without a custom backend, using Firebase as the system of record.",
    approach:
      "Implemented a React-based storefront with Firebase authentication, Firestore-backed cart persistence, dynamic product browsing across 5+ categories, and a secure checkout flow — focused on frontend performance, auth, and state persistence.",
    outcome:
      "A responsive commerce app used to strengthen frontend architecture, authentication, and data-state management fundamentals.",
    engineering: [
      "Implemented product discovery with search and filtering across 5+ product categories.",
      "Built Firebase authentication, Firestore cart persistence, and a secure checkout flow.",
      "Optimized app performance with lazy loading and client-side caching.",
    ],
    stack: ["React", "Firebase", "Firestore", "Auth"],
    tags: ["Full-Stack"],
    codeHref: "https://github.com/Bhavanasa1902/ecommerce-app",
    featured: false,
  },
  {
    id: "book-to-playlist",
    title: "Book to Playlist",
    category: "Additional Project · LLM · Web App",
    tagline: "Translating narrative themes into music",
    problem:
      "Readers often want music that mirrors the emotional arc of a book — but matching narrative themes to songs is a manual, subjective task.",
    approach:
      "Built an AI-powered web application that uses LLM analysis to extract book themes, emotions, and narrative elements, then queries the Spotify API to curate a matching playlist.",
    outcome:
      "An interactive React interface that turns any book description into a curated, playable Spotify playlist in seconds.",
    engineering: [
      "Integrated an LLM to analyze book themes, emotions, and narrative elements from user input.",
      "Connected the Spotify API to search and curate music matching extracted book characteristics.",
      "Built an interactive React interface for book input and playlist visualization.",
    ],
    stack: ["LLM", "React", "Spotify API", "Python"],
    tags: ["Data & ML", "Full-Stack"],
    codeHref: "https://github.com/Bhavanasa1902/book-to-playlist",
    featured: false,
  },
  {
    id: "cryptozombies",
    title: "CryptoZombies Arena",
    category: "Additional Project · Blockchain · Web3",
    tagline: "On-chain arena battles with NFT gameplay",
    problem:
      "Build a fully on-chain game where battles, rewards, and state transitions live on Ethereum — not in a centralized database.",
    approach:
      "Developed Solidity smart contracts for NFT-enabled gameplay and token interactions, connected a React front end with Web3 wallets, and designed game logic for battles, rewards, and on-chain state updates.",
    outcome:
      "A playable blockchain game with seamless wallet onboarding and verifiable on-chain state.",
    engineering: [
      "Developed Solidity smart contracts for NFT-enabled gameplay and token interactions.",
      "Connected a React front end with Web3 wallets for seamless player engagement.",
      "Designed game logic for battles, rewards, and on-chain state updates.",
    ],
    stack: ["Solidity", "Web3", "React", "Ethereum"],
    tags: ["Web3", "Full-Stack"],
    codeHref: "https://github.com/Bhavanasa1902/CryptoZombies-Arena",
    featured: false,
  },
  {
    id: "titanfund",
    title: "TitanFund — Portfolio Analytics",
    category: "Analytics Dashboard · Fintech",
    tagline: "Real-time portfolio insights and metrics",
    problem:
      "Investors need a single pane of glass for portfolio performance — combining live metrics, historical context, and exploratory filtering.",
    approach:
      "Built a dashboard platform for tracking investment performance and portfolio metrics, connected backend analytics to frontend visualizations for real-time data updates, and enabled dynamic filtering and charting.",
    outcome:
      "A dashboard that turns raw fund data into explorable portfolio metrics with real-time visualization updates.",
    engineering: [
      "Built a dashboard experience for tracking investment performance and portfolio metrics.",
      "Connected backend analytics to frontend visualizations for real-time data updates.",
      "Enabled users to explore fund performance with dynamic filtering and charting.",
    ],
    stack: ["React", "Python", "Analytics", "Visualization"],
    tags: ["Data & ML", "Full-Stack"],
    codeHref: "https://github.com/Bhavanasa1902/TitanFund",
    featured: false,
  },
];

export type Skill = {
  label: string;
  value: number;
};

export type SkillGroup = {
  id: string;
  title: string;
  caption: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming & Query",
    caption: "Languages I reach for first",
    skills: [
      { label: "SQL / PL/SQL / Query Optimization", value: 92 },
      { label: "Python", value: 88 },
      { label: "ETL / ELT Pipeline Development", value: 82 },
      { label: "Database Design & Normalization", value: 80 },
      { label: "Java / JavaScript", value: 58 },
    ],
  },
  {
    id: "databases",
    title: "Databases & Warehousing",
    caption: "Where the data lives",
    skills: [
      { label: "PostgreSQL / MySQL", value: 82 },
      { label: "Oracle DB / SQL Server", value: 78 },
      { label: "BigQuery / Redshift", value: 76 },
      { label: "Data Warehousing Architecture", value: 74 },
      { label: "Stored Procedures & Triggers", value: 80 },
    ],
  },
  {
    id: "cloud-ai",
    title: "Cloud & AI",
    caption: "Platform and intelligence layer",
    skills: [
      { label: "Google Cloud Platform (GCP)", value: 88 },
      { label: "Vertex AI / ML Pipelines", value: 80 },
      { label: "BigQuery ML / Analytics", value: 78 },
      { label: "LLM Integration & Semantic Search", value: 74 },
      { label: "NLP & Text Analytics", value: 72 },
    ],
  },
  {
    id: "tools-devops",
    title: "Tools & DevOps",
    caption: "How work ships",
    skills: [
      { label: "Git / Version Control", value: 90 },
      { label: "Tableau / Data Visualization", value: 80 },
      { label: "REST APIs / Microservices", value: 72 },
      { label: "Docker / Kubernetes", value: 60 },
      { label: "Jira / CI-CD Pipelines", value: 56 },
    ],
  },
];

export type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location?: string;
  period: string;
  current?: boolean;
};

export const education: EducationEntry[] = [
  {
    id: "csuf",
    institution: "California State University, Fullerton",
    degree: "Master of Science",
    field: "Computer Science",
    location: "Fullerton, CA, USA",
    period: "2024 — May 2026",
    current: true,
  },
  {
    id: "jyothy",
    institution: "Jyothy Institute of Technology",
    degree: "Bachelor of Engineering",
    field: "Computer Science",
    location: "Bangalore, India",
    period: "2018 — July 2022",
  },
];

// Section registry — used by navigation
export const sections = [
  { id: "intro", label: "Intro", index: "00" },
  { id: "about", label: "About", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "work", label: "Projects", index: "03" },
  { id: "expertise", label: "Expertise", index: "04" },
  { id: "education", label: "Education", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
] as const;
