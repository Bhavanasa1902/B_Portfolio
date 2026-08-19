(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/portfolio-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Portfolio content for Bhavana Sudhakar Athavane — Data Engineer
 * Extracted and refined from the source portfolio.
 * Wording improved for editorial clarity while preserving all factual information.
 */ __turbopack_context__.s([
    "education",
    ()=>education,
    "experience",
    ()=>experience,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "sections",
    ()=>sections,
    "skillGroups",
    ()=>skillGroups
]);
const profile = {
    name: "Bhavana Sudhakar Athavane",
    firstName: "Bhavana",
    lastName: "Athavane",
    role: "Data Engineer",
    // Single line positioning statement used across hero / meta / footer
    positioning: "I build scalable pipelines, cloud data platforms, and ML-ready infrastructure that let analytics and AI operations move with confidence.",
    // Long-form manifesto used in About
    manifesto: [
        "I build the systems that let AI and data scale — from backend to cloud.",
        "I focus on engineering reliable backend systems, cloud-native architecture, and ML-ready data pipelines that teams can build on with confidence.",
        "My work spans database engineering, REST API design, cloud platform integration, and applied machine learning — with a focus on measurable outcomes: lower latency, cleaner interfaces, and systems that hold up under real usage.",
        "Through platform engineering and database co-ops, I've built fault-diagnostic pipelines on Google Cloud, integrating platform monitoring data with ticketing and asset-management systems through REST APIs, and worked on Python-based backend integrations across Oracle, MySQL, and PostgreSQL. In enterprise systems roles, I've contributed to database performance work and automated ETL workflows in Python. As a Graduate Teaching Associate at CSUF, I run labs and office hours in SQL and business analytics, helping students turn ambiguous business questions into structured, queryable analysis."
    ],
    location: "Fullerton, California, USA",
    email: "bhavanasathavane@gmail.com",
    phone: "+1 (657) 751-9230",
    availability: "Open to data platform / AI engineering roles",
    availabilityNote: "Open to full-time roles in data platforms, cloud, and AI engineering",
    archetype: "developer",
    seniority: "mid",
    focusAreas: [
        "AI",
        "Cloud Computing",
        "Fintech",
        "Telecom"
    ],
    socials: [
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/bhavana-athavane",
            handle: "bhavana-athavane"
        },
        {
            label: "GitHub",
            href: "https://github.com/Bhavanasa1902",
            handle: "Bhavanasa1902"
        },
        {
            label: "Resume",
            href: "/resume.pdf",
            handle: "Download PDF"
        }
    ],
    // Hero stat band — verified metrics from the source portfolio
    stats: [
        {
            value: "4",
            label: "Shipped data & AI projects",
            note: "Products"
        },
        {
            value: "8+",
            label: "Production data pipelines",
            note: "Pipelines"
        },
        {
            value: "500K+",
            label: "Transactions & telemetry processed",
            note: "Scale"
        },
        {
            value: "3",
            label: "Years in production systems",
            note: "Experience"
        }
    ],
    // Three positioning pillars shown as "Principles"
    principles: [
        {
            title: "Reliable systems",
            body: "Backend and ETL flows engineered to avoid surprises, stay observable, and scale with demand rather than against it."
        },
        {
            title: "Production-ready foundations",
            body: "Databases, APIs, and cloud infrastructure designed so teams can ship analytics, ML, and platform features with confidence, not caveats."
        },
        {
            title: "Impact-first work",
            body: "Outcomes over activity: faster queries, lower latency, cleaner architecture — measured, not asserted."
        }
    ],
    // Quick tech tags surfaced in hero
    signatureStack: [
        "SQL",
        "Python",
        "GCP",
        "Vertex AI",
        "BigQuery",
        "REST APIs",
        "Docker",
        "Flask",
        "React",
        "ETL",
        "Oracle",
        "PostgreSQL"
    ]
};
const experience = [
    {
        id: "csuf-ta",
        org: "California State University, Fullerton",
        location: "Fullerton, CA",
        period: "Jan 2026 — May 2026",
        current: true,
        kind: "Academic",
        summary: "Graduate teaching assistant for an undergraduate business analytics course — bridging spreadsheet-first thinking and structured query work for fifty-plus students per semester.",
        roles: [
            {
                title: "Graduate Teaching Assistant — ISDS 361B",
                period: "Jan 2026 — May 2026",
                summary: "Running weekly labs, holding office hours, and grading structured assignments for a business analytics cohort moving from Excel into SQL.",
                highlights: [
                    "Mentored 50+ students per semester across Excel, SQL, and business analytics, achieving a 95% assignment completion rate and improving average quiz scores by 18% through targeted labs and feedback.",
                    "Designed and led weekly labs covering VLOOKUP, INDEX/MATCH, Pivot Tables, Power Query, and SQL — moving students from spreadsheet manipulation toward query-based analysis.",
                    "Helped learners translate ambiguous business questions into structured, queryable analysis with measurable success criteria."
                ],
                stack: [
                    "SQL",
                    "Excel",
                    "Power Query",
                    "Tableau"
                ]
            }
        ]
    },
    {
        id: "nokia",
        org: "Nokia",
        location: "Sunnyvale, CA",
        period: "May 2025 — Dec 2025",
        kind: "Co-op",
        summary: "Two back-to-back co-op rotations on Nokia's AI inference and fault-diagnostics platform — first implementing the AI workflow, then strengthening the database layer underneath.",
        roles: [
            {
                title: "Platform Engineering Co-op — AI Systems",
                period: "May 2025 — Aug 2025",
                summary: "Summer co-op focused on Nokia's AI-assisted fault diagnostics — Vertex AI classification, real-time telemetry pipelines, and LLM-powered incident search.",
                highlights: [
                    "Built an AI-powered fault diagnostic pipeline on Google Cloud Vertex AI achieving 82% fault classification accuracy; contributed to a 41% reduction in Mean Time to Resolution (MTTR).",
                    "Built log-processing pipelines on GCP (Pub/Sub → Dataflow → BigQuery) handling real-time telemetry, cutting manual triage effort by ~80% and enabling automated alerting.",
                    "Integrated LLM-powered semantic search using a RAG architecture across CMDB, JIRA, and knowledge bases, reducing average incident resolution time by over 35%."
                ],
                stack: [
                    "GCP",
                    "Vertex AI",
                    "Pub/Sub",
                    "Dataflow",
                    "BigQuery",
                    "LLM",
                    "RAG"
                ]
            },
            {
                title: "Database Software Engineer — Co-op",
                period: "Sep 2025 — Dec 2025",
                summary: "Fall rotation focused on the database layer of the same AI inference platform — schema design, ETL consolidation, and Python service integrations.",
                highlights: [
                    "Designed and optimized relational database schemas across Oracle, MySQL, and PostgreSQL for AI-driven backend systems, reducing average query latency by 55% through indexing, normalization, and query tuning.",
                    "Consolidated 3 redundant ETL scheduled jobs into a single stored procedure pipeline, materially cutting average batch completion time and operational surface area.",
                    "Built Python REST API integrations connecting backend services to OLTP databases, reducing average DB round-trips per request by ~40%."
                ],
                stack: [
                    "PostgreSQL",
                    "MySQL",
                    "Python",
                    "REST",
                    "Stored Procedures"
                ]
            }
        ]
    },
    {
        id: "cognizant",
        org: "Cognizant",
        location: "Bangalore, India",
        period: "Mar 2022 — Aug 2024",
        kind: "Full-time",
        summary: "Two and a half years across two roles — first automating ETL and reporting as a trainee, then taking on broader Oracle DB performance and data-quality responsibilities.",
        roles: [
            {
                title: "Programmer Analyst Trainee",
                period: "Mar 2022 — Dec 2023",
                summary: "First role out of undergrad — automation and reporting across internal ETL workflows and executive dashboards for multiple business units.",
                highlights: [
                    "Automated 8 internal ETL workflows using Python and SQL, reducing end-to-end processing time by ~20% and freeing ~15 hours/week of analyst time.",
                    "Performed data validation across Oracle DB and SQL Server for 4 production pipelines; built and delivered 6 executive Tableau dashboards tracking KPIs across revenue, operations, and compliance."
                ],
                stack: [
                    "Python",
                    "SQL",
                    "Oracle DB",
                    "SQL Server",
                    "Tableau"
                ]
            },
            {
                title: "Senior Systems Engineer",
                period: "Dec 2023 — Aug 2024",
                summary: "Promoted role focused on Oracle DB performance across three production systems and a cross-system validation framework used by the data quality team.",
                highlights: [
                    "Led an Oracle DB performance engineering initiative across 3 production systems, improving overall throughput by 30% through query analysis, index rebuilding, and partition pruning.",
                    "Developed an automated SQL data-validation framework in Python and PL/SQL spanning Oracle DB and SQL Server, catching ~200 cross-system discrepancies per month and reducing reconciliation time by 20%."
                ],
                stack: [
                    "Oracle DB",
                    "SQL Server",
                    "PL/SQL",
                    "Python"
                ]
            }
        ]
    }
];
const projects = [
    {
        id: "fraud-detection",
        title: "Financial Fraud Detection Pipeline",
        category: "ANOMALY DETECTION",
        tagline: "Ensemble ML system for detecting and explaining suspicious transactions",
        metric: 0.9497,
        metricDescription: "ROC-AUC ACROSS 200K+ TRANSACTIONS",
        problem: "Flag high-risk transactions in real time without flooding analysts with false positives — a classic precision-vs-recall tension at scale.",
        approach: "Built an ensemble anomaly detection system combining XGBoost, Isolation Forest, and a PyTorch autoencoder, served through a Flask REST API. Used Neo4j graph analytics to surface relationship patterns between accounts and transactions that single-model approaches miss, with SHAP for model explainability. Added automated email notifications on every transaction, alerting users whether it was flagged as suspicious or processed successfully.",
        outcome: "Achieved 0.9497 ROC-AUC across 200K+ transactions, with SHAP-based explanations attached to every flagged transaction and automated email alerts closing the loop between detection and user response.",
        engineering: [
            "Built a 3-model ensemble (XGBoost, Isolation Forest, PyTorch autoencoder) to balance precision and recall across imbalanced fraud data.",
            "Applied Neo4j graph analytics to detect relationship-based fraud patterns beyond individual transaction features.",
            "Integrated SHAP explainability so every fraud prediction ships with a human-readable reason.",
            "Built automated email notifications for every transaction — flagged or clean — closing the loop between model output and user response."
        ],
        stack: [
            "XGBoost",
            "Isolation Forest",
            "PyTorch",
            "SHAP",
            "Neo4j",
            "Flask",
            "Python"
        ],
        tags: [
            "Data & ML",
            "Backend & DB"
        ],
        codeHref: "https://github.com/Bhavanasa1902/AI-powered-Financial-Fraud-Detection-Anomaly-Analysis",
        featured: true
    },
    {
        id: "nlp-content-modelling",
        title: "Document Intelligence with NLP",
        category: "DOCUMENT INTELLIGENCE",
        tagline: "Turning unstructured documents into structured, queryable data",
        problem: "Manual categorization of diverse document formats was slow, inconsistent, and impossible to scale across a large, varied document corpus.",
        approach: "Developed a document intelligence pipeline using a CNN for image-based layout detection and document-type classification, paired with OCR to extract and structure unstructured text from heterogeneous formats. Extracted text was then processed with NLP to classify content into structured metadata.",
        outcome: "Automated categorization and structured data extraction across 5+ document formats, replacing manual review with an end-to-end CNN + OCR + NLP pipeline.",
        engineering: [
            "Trained a CNN to detect document layout and classify document type from scanned images",
            "Built an OCR pipeline to extract and clean text from heterogeneous document formats",
            "Applied NLP to classify extracted text into structured metadata",
            "Processed 5+ distinct document formats through the full pipeline"
        ],
        stack: [
            "NLP",
            "OCR",
            "TensorFlow"
        ],
        tags: [
            "Data & ML",
            "Backend & DB"
        ],
        codeHref: "https://github.com/Bhavanasa1902/nlp-content-modelling",
        featured: true
    },
    {
        id: "textile-db",
        title: "Textile Inventory & Order System",
        category: "RELATIONAL DATABASE",
        tagline: "Normalized schema for inventory, orders, and supply chain",
        problem: "Designed for a hypothetical textile business needing a single source of truth for orders, inventory, and supplier data — with real-time consistency and analytical reporting on top.",
        approach: "Designed a normalized schema for orders, inventory, supplier tracking, and payment workflows as a personal project (no external payment processing integrated). Built stored procedures to keep stock and pricing consistent in real time, with reporting queries layered for demand forecasting.",
        outcome: "A relational system supporting live transactions, enforcing referential integrity across orders, inventory, and suppliers, with built-in demand-forecasting queries for production planning.",
        engineering: [
            "Created a normalized schema for orders, inventory, supplier tracking, and payment workflows",
            "Built stored procedures (PL/SQL) to enforce real-time stock and pricing consistency",
            "Wrote demand-forecasting queries to support production planning decisions"
        ],
        stack: [
            "Oracle",
            "PL/SQL",
            "SQL",
            "Reporting"
        ],
        tags: [
            "Backend & DB"
        ],
        bottomLink: "CODE ↗",
        codeHref: "https://github.com/Bhavanasa1902/textile-db",
        featured: true
    },
    {
        id: "ecommerce-app",
        title: "E-Commerce Web Application (Internship Project)",
        category: "FULL-STACK",
        tagline: "Full shopping experience with persistent cart",
        problem: "Design and build a production-style commerce experience — product discovery, authentication, cart, and checkout — with Firebase as the system of record for real-time state management.",
        approach: "Engineered a responsive React storefront integrated with Firebase Authentication and Firestore, implementing persistent cart state, dynamic product discovery with multi-category search and filtering, and a checkout flow modeling real transaction logic.",
        outcome: "A fully functional e-commerce application demonstrating strong command of frontend architecture, authentication flows, and real-time data synchronization.",
        engineering: [
            "Engineered product discovery with multi-category search and filtering for a responsive browsing experience",
            "Implemented Firebase Authentication and Firestore-backed cart persistence with real-time sync",
            "Built a checkout flow modeling real transaction logic and state management"
        ],
        stack: [
            "React",
            "Firebase",
            "Firestore",
            "Auth"
        ],
        tags: [
            "Full-Stack"
        ],
        bottomLink: "CODE ↗",
        codeHref: "https://github.com/Bhavanasa1902/ecommerce-app",
        featured: false
    },
    {
        id: "book-to-playlist",
        title: "Book to Playlist",
        category: "DATA ENGINEERING / NLP",
        tagline: "Translating narrative themes into music",
        problem: "Matching narrative themes to music is a manual, subjective task with no structured way to search and retrieve relevant songs across large book and song datasets.",
        approach: "Designed a semantic retrieval pipeline for book-to-music recommendation. Processed and structured raw book and song datasets (descriptions, lyrics, acoustic features, popularity metrics), then generated BERT embeddings to represent thematic and semantic content. Built a FAISS-based vector index for fast nearest-neighbor similarity search at scale, with PCA applied for dimensionality reduction to optimize retrieval performance. Served results through a Flask backend.",
        outcome: "A functioning recommendation system that retrieves the top N songs matching a given book's themes, built on structured multi-source datasets and optimized for fast similarity search.",
        engineering: [
            "Processed and structured multi-source datasets (book metadata, song lyrics, acoustic features) for downstream embedding generation",
            "Generated BERT embeddings to represent semantic and thematic content for cross-domain similarity matching",
            "Built a FAISS vector index for scalable nearest-neighbor retrieval",
            "Applied PCA for dimensionality reduction to optimize search performance",
            "Built a Flask backend to serve recommendation results"
        ],
        stack: [
            "LLM",
            "React",
            "Spotify API",
            "Python"
        ],
        tags: [
            "LLM",
            "Full-Stack"
        ],
        codeHref: "https://github.com/Bhavanasa1902/book-to-playlist",
        bottomLink: "CODE ↗",
        featured: false
    },
    {
        id: "cryptozombies",
        title: "CryptoZombies Arena",
        category: "WEB3 / BLOCKCHAIN",
        tagline: "On-chain arena battles with NFT gameplay",
        problem: "Build a fully on-chain game where battles, breeding, marketplace trades, and player rankings all live on Ethereum — not in a centralized database.",
        approach: "Extended the CryptoZombies starter contracts into a full-featured NFT game, contributing across smart contract development, frontend implementation, and Web3 integration — including an NFT marketplace, a breeding system with custom naming, a turn-based battle system, and a real-time leaderboard pulling data from blockchain events. Built a responsive HTML/CSS/JavaScript frontend with MetaMask wallet integration for seamless on-chain interaction.",
        outcome: "A playable blockchain game with a working NFT marketplace, breeding mechanics, battle system, and live leaderboard — all backed by verifiable on-chain state.",
        engineering: [
            "Extended Solidity smart contracts (Factory → Feeding → Attack → Marketplace) to add NFT marketplace and breeding functionality",
            "Built a real-time leaderboard that ranks players and zombies using live blockchain event data",
            "Integrated MetaMask wallet connection with account switching and persistent connection state",
            "Implemented a turn-based battle system with win/loss tracking and level progression on-chain"
        ],
        stack: [
            "Solidity",
            "Web3",
            "React",
            "Ethereum"
        ],
        tags: [
            "WEB3",
            "Blockchain"
        ],
        codeHref: "https://github.com/Bhavanasa1902/CryptoZombies-Arena",
        bottomLink: "CODE ↗",
        featured: false
    },
    {
        id: "titanfund",
        title: "TitanFund — Portfolio Analytics",
        category: "BLOCKCHAIN / DATA MODELING",
        tagline: "Real-time, on-chain crowdfunding data model",
        problem: "Crowdfunding platforms need transparent, verifiable tracking of contributions and fund withdrawals — without a centralized authority controlling the data or the money.",
        approach: "Built a blockchain-based crowdfunding platform where campaign data, contributions, and withdrawal requests are structured and stored on-chain via Solidity smart contracts. Designed the data flow for campaign creation, contribution tracking, and a withdrawal-approval system where contributors vote on fund releases — ensuring every state change is queryable and auditable through on-chain events. Built a Next.js frontend to surface this structured on-chain data to users in real time.",
        outcome: "A working platform where campaign, contribution, and withdrawal data is fully structured on-chain, queryable via smart contract state and events, and enforced without reliance on a centralized database.",
        engineering: [
            "Designed on-chain data structures for campaigns, contributions, and withdrawal requests using Solidity",
            "Built a contributor-approval workflow where fund withdrawals require verifiable on-chain votes before release",
            "Queried and surfaced structured blockchain event data through a Next.js frontend",
            "Integrated MetaMask and Web3.js for wallet-based transaction handling"
        ],
        stack: [
            "React",
            "Python",
            "Analytics",
            "Visualization"
        ],
        tags: [
            "Analytics",
            "Dashboard"
        ],
        codeHref: "https://github.com/Bhavanasa1902/TitanFund",
        bottomLink: "CODE ↗",
        featured: false
    }
];
const skillGroups = [
    {
        id: "programming",
        title: "Programming & Query",
        caption: "Languages I reach for first",
        skills: [
            {
                label: "SQL / PL/SQL / Query Optimization",
                value: 92
            },
            {
                label: "Python",
                value: 88
            },
            {
                label: "ETL / ELT Pipeline Development",
                value: 82
            },
            {
                label: "Database Design & Normalization",
                value: 80
            },
            {
                label: "Java / JavaScript",
                value: 58
            }
        ]
    },
    {
        id: "databases",
        title: "Databases & Warehousing",
        caption: "Where the data lives",
        skills: [
            {
                label: "PostgreSQL / MySQL",
                value: 82
            },
            {
                label: "Oracle DB / SQL Server",
                value: 78
            },
            {
                label: "BigQuery / Redshift",
                value: 76
            },
            {
                label: "Data Warehousing Architecture",
                value: 74
            },
            {
                label: "Stored Procedures & Triggers",
                value: 80
            }
        ]
    },
    {
        id: "cloud-ai",
        title: "Cloud & AI",
        caption: "Platform and intelligence layer",
        skills: [
            {
                label: "Google Cloud Platform (GCP)",
                value: 88
            },
            {
                label: "Vertex AI / ML Pipelines",
                value: 80
            },
            {
                label: "BigQuery ML / Analytics",
                value: 78
            },
            {
                label: "LLM Integration & Semantic Search",
                value: 74
            },
            {
                label: "NLP & Text Analytics",
                value: 72
            }
        ]
    },
    {
        id: "tools-devops",
        title: "Tools & DevOps",
        caption: "How work ships",
        skills: [
            {
                label: "Git / Version Control",
                value: 90
            },
            {
                label: "Tableau / Data Visualization",
                value: 80
            },
            {
                label: "REST APIs / Microservices",
                value: 72
            },
            {
                label: "Docker / Kubernetes",
                value: 60
            },
            {
                label: "Jira / CI-CD Pipelines",
                value: 56
            }
        ]
    }
];
const education = [
    {
        id: "csuf",
        institution: "California State University, Fullerton",
        degree: "Master of Science",
        field: "Computer Science",
        location: "Fullerton, CA, USA",
        period: "2024 — May 2026",
        current: true
    },
    {
        id: "jyothy",
        institution: "Visvesvaraya Technological University — Jyothy Institute of Technology",
        degree: "Bachelor of Engineering",
        field: "Computer Science",
        location: "Bangalore, India",
        period: "2018 — July 2022"
    }
];
const sections = [
    {
        id: "intro",
        label: "Intro",
        index: "00"
    },
    {
        id: "about",
        label: "About",
        index: "01"
    },
    {
        id: "experience",
        label: "Experience",
        index: "02"
    },
    {
        id: "work",
        label: "Projects",
        index: "03"
    },
    {
        id: "expertise",
        label: "Expertise",
        index: "04"
    },
    {
        id: "education",
        label: "Education",
        index: "05"
    },
    {
        id: "contact",
        label: "Contact",
        index: "06"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteNav",
    ()=>SiteNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/portfolio-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SiteNav() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [scrolled, setScrolled] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [activeId, setActiveId] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("intro");
    const [mobileOpen, setMobileOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SiteNav.useEffect": ()=>setMounted(true)
    }["SiteNav.useEffect"], []);
    // Track scroll position for nav background
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SiteNav.useEffect": ()=>{
            const onScroll = {
                "SiteNav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["SiteNav.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "SiteNav.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["SiteNav.useEffect"];
        }
    }["SiteNav.useEffect"], []);
    // Track active section via IntersectionObserver
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SiteNav.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "SiteNav.useEffect": (entries)=>{
                    entries.forEach({
                        "SiteNav.useEffect": (entry)=>{
                            if (entry.isIntersecting) setActiveId(entry.target.id);
                        }
                    }["SiteNav.useEffect"]);
                }
            }["SiteNav.useEffect"], {
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sections"].forEach({
                "SiteNav.useEffect": (s)=>{
                    const el = document.getElementById(s.id);
                    if (el) observer.observe(el);
                }
            }["SiteNav.useEffect"]);
            return ({
                "SiteNav.useEffect": ()=>observer.disconnect()
            })["SiteNav.useEffect"];
        }
    }["SiteNav.useEffect"], []);
    // Lock body scroll when mobile menu is open
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SiteNav.useEffect": ()=>{
            if (mobileOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            return ({
                "SiteNav.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["SiteNav.useEffect"];
        }
    }["SiteNav.useEffect"], [
        mobileOpen
    ]);
    const handleNavClick = (e, id)=>{
        e.preventDefault();
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: reduced ? "auto" : "smooth",
                block: "start"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: [
                    "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                    scrolled ? "backdrop-blur-md bg-paper/80 border-b border-rule shadow-[0_10px_35px_-28px_rgba(0,0,0,0.45)]" : "bg-transparent border-b border-transparent"
                ].join(" "),
                style: {
                    ["--w"]: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "container-wide flex items-center justify-between py-4 md:py-5",
                    "aria-label": "Primary",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#intro",
                            onClick: (e)=>handleNavClick(e, "intro"),
                            className: "group flex items-center gap-2.5",
                            "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name} — back to top`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "grid h-8 w-8 place-items-center rounded-full bg-ink text-paper font-display text-[13px] font-medium transition-transform duration-300 group-hover:scale-105",
                                    "aria-hidden": true,
                                    children: "b"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:flex flex-col leading-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono-label text-[11px] font-medium text-ink uppercase tracking-[0.18em]",
                                        children: "Bhavana Sudhakar Athavane"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-1.5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sections"].slice(1, -1).map((s)=>{
                                const isActive = activeId === s.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${s.id}`,
                                    onClick: (e)=>handleNavClick(e, s.id),
                                    className: "group relative px-4 py-2 text-xs uppercase tracking-[0.18em] font-mono-label transition-colors duration-300",
                                    "aria-current": isActive ? "true" : undefined,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: [
                                                "absolute inset-0 rounded-full transition-opacity duration-300",
                                                isActive ? "bg-ink/8 opacity-100" : "bg-ink/5 opacity-0 group-hover:opacity-100"
                                            ].join(" ")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: [
                                                "relative z-10 transition-colors duration-300",
                                                isActive ? "text-ink font-semibold" : "text-ink-mute group-hover:text-ink"
                                            ].join(" "),
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this),
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                            layoutId: "nav-active",
                                            className: "absolute bottom-[2px] left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-ink/75",
                                            transition: {
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                            lineNumber: 149,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
                                    className: "grid h-9 w-9 place-items-center rounded-full border border-rule text-ink-mute transition-colors hover:text-ink hover:border-rule-strong",
                                    "aria-label": "Toggle color theme",
                                    children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeIcon, {
                                        isDark: theme === "dark"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-4 w-4",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/resume.pdf",
                                    className: "hidden sm:inline-flex items-center gap-1.5 rounded-full border border-rule-strong bg-transparent px-4 py-2 font-mono-label text-[10px] uppercase tracking-[0.18em] text-ink transition-all duration-200 hover:border-ink hover:bg-ink hover:text-paper",
                                    children: [
                                        "Résumé",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            "aria-hidden": true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 7h6m0 0L7 4m3 3L7 10",
                                                stroke: "currentColor",
                                                strokeWidth: "1.4",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMobileOpen((o)=>!o),
                                    className: "md:hidden grid h-9 w-9 place-items-center rounded-full border border-rule text-ink",
                                    "aria-label": mobileOpen ? "Close menu" : "Open menu",
                                    "aria-expanded": mobileOpen,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative block h-3 w-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: [
                                                    "absolute left-0 h-px w-full bg-current transition-transform duration-300",
                                                    mobileOpen ? "top-1.5 rotate-45" : "top-0"
                                                ].join(" ")
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: [
                                                    "absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200",
                                                    mobileOpen ? "opacity-0" : "opacity-100"
                                                ].join(" ")
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: [
                                                    "absolute left-0 h-px w-full bg-current transition-transform duration-300",
                                                    mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                                                ].join(" ")
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "fixed inset-0 z-40 md:hidden bg-paper",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full flex-col justify-center px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "flex flex-col gap-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sections"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
                                        initial: {
                                            opacity: 0,
                                            y: 12
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.05 + i * 0.04
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${s.id}`,
                                            onClick: (e)=>handleNavClick(e, s.id),
                                            className: "flex items-baseline gap-4 py-3 border-b border-rule",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "numeral text-sm text-ink-mute tabular-nums",
                                                    children: s.index
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display text-3xl md:text-4xl text-ink font-medium tracking-[-0.02em]",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                            lineNumber: 249,
                                            columnNumber: 21
                                        }, this)
                                    }, s.id, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                        lineNumber: 243,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 flex flex-col gap-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                        className: "link-editorial text-ink",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone.replace(/[^\d+]/g, "")}`,
                                        className: "link-editorial text-ink",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/resume.pdf",
                                        className: "link-editorial text-ink",
                                        children: "Download résumé ↓"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                                lineNumber: 265,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                        lineNumber: 240,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SiteNav, "yyIQfVcReb8fQ78TpNhj4wwL+e0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = SiteNav;
function ThemeIcon({ isDark }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": true,
        className: "text-ink",
        children: isDark ? // Sun
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "8",
                    cy: "8",
                    r: "3",
                    stroke: "currentColor",
                    strokeWidth: "1.3"
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                    lineNumber: 306,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "currentColor",
                    strokeWidth: "1.3",
                    strokeLinecap: "round",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 1.5v1.5M8 13v1.5M1.5 8h1.5M13 8h1.5M3.3 3.3l1.1 1.1M11.6 11.6l1.1 1.1M3.3 12.7l1.1-1.1M11.6 4.4l1.1-1.1"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                        lineNumber: 308,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
                    lineNumber: 307,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : // Moon
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.5 9.5A5 5 0 016.5 3.5a5 5 0 106 6z",
            stroke: "currentColor",
            strokeWidth: "1.3",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
            lineNumber: 313,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/nav.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_c1 = ThemeIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "SiteNav");
__turbopack_context__.k.register(_c1, "ThemeIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/portfolio-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Hero() {
    _s();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start start",
            "end start"
        ]
    });
    // Parallax — only applied when motion is allowed
    const yHeadline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -80
    ]);
    const yMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -40
    ]);
    const yPortrait = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -120
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.8
    ], [
        1,
        0
    ]);
    const transition = {
        duration: 1.1,
        ease: [
            0.22,
            1,
            0.36,
            1
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "intro",
        ref: ref,
        className: "relative min-h-[100svh] flex flex-col overflow-hidden pb-12 md:pb-16",
        "aria-labelledby": "hero-headline",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-wide pt-28 md:pt-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    initial: reduced ? false : {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8,
                        delay: 0.1
                    },
                    className: "flex flex-wrap items-center justify-between gap-3 text-ink-mute",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 translate-y-8 md:translate-y-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex h-2 w-2",
                                "aria-hidden": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono-label text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/75",
                                children: "Fullerton, CA"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-wide flex-1 flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full py-12 md:py-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            className: "lg:col-span-7 flex flex-col justify-center",
                            style: reduced ? undefined : {
                                y: yHeadline,
                                opacity
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].h1, {
                                    id: "hero-headline",
                                    initial: reduced ? false : {
                                        opacity: 0,
                                        y: 24
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        ...transition,
                                        delay: 0.25
                                    },
                                    className: "font-display font-medium text-ink leading-[0.96] tracking-[-0.035em] text-[clamp(2.75rem,7vw,6.5rem)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block",
                                            children: [
                                                "Hi, I'm ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic font-normal text-ink-soft",
                                                    children: "Bhavana"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 52
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-ink",
                                            children: "a Data, Backend & AI Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].p, {
                                    initial: reduced ? false : {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        ...transition,
                                        delay: 0.45
                                    },
                                    className: "mt-6 max-w-xl text-base md:text-lg text-ink-soft leading-relaxed",
                                    children: "I engineer data pipelines, backend systems, and cloud-native platforms that power reliable analytics and AI."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    initial: reduced ? false : {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        ...transition,
                                        delay: 0.6
                                    },
                                    className: "mt-8 flex flex-wrap items-center gap-3.5 md:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].socials.find((s)=>s.label === "LinkedIn")?.href || "https://www.linkedin.com/in/bhavana-athavane",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "group inline-flex items-center justify-center gap-2.5 h-11 rounded-full border border-rule-strong bg-paper-raised text-ink px-6 transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper shadow-[0_6px_18px_-14px_rgba(0,0,0,0.28)] dark:shadow-[0_6px_18px_-14px_rgba(0,0,0,0.8)]",
                                            "aria-label": "View my LinkedIn profile",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 448 512",
                                                    fill: "currentColor",
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M100.28 448H7.4V148.9h92.88zm-46.44-341.5a53.86 53.86 0 1153.86-53.86 53.87 53.87 0 01-53.86 53.86zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.25-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89V196h1.3c12.4-23.3 42.6-47.8 87.7-47.8 93.8 0 111.1 61.8 111.1 142.3V448z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono-label text-[10px] uppercase tracking-[0.2em] whitespace-nowrap",
                                                    children: "LinkedIn"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].socials.find((s)=>s.label === "GitHub")?.href || "https://github.com/Bhavanasa1902",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "group inline-flex items-center justify-center gap-2.5 h-11 rounded-full border border-rule-strong bg-paper-raised text-ink px-6 transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper shadow-[0_6px_18px_-14px_rgba(0,0,0,0.28)] dark:shadow-[0_6px_18px_-14px_rgba(0,0,0,0.8)]",
                                            "aria-label": "View my work on GitHub",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono-label text-[10px] uppercase tracking-[0.2em] whitespace-nowrap",
                                                    children: "GitHub"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#work",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                document.getElementById("work")?.scrollIntoView({
                                                    behavior: reduced ? "auto" : "smooth",
                                                    block: "start"
                                                });
                                            },
                                            className: "group inline-flex items-center justify-center gap-2.5 h-11 shrink-0 rounded-full border border-rule-strong px-6 transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper",
                                            "aria-label": "Scroll to Selected Work section",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono-label text-[10px] uppercase tracking-[0.2em] whitespace-nowrap",
                                                    children: "View selected work"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": true,
                                                    className: "transition-transform duration-300 group-hover:translate-y-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 12 12",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M6 1v10m0 0L2 7m4 4l4-4",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.4",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                document.getElementById("contact")?.scrollIntoView({
                                                    behavior: reduced ? "auto" : "smooth",
                                                    block: "start"
                                                });
                                            },
                                            className: "group inline-flex items-center justify-center gap-2.5 h-11 rounded-full bg-ink text-paper px-6 transition-all duration-300 hover:bg-ink/85 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.45)] dark:shadow-[0_8px_24px_-14px_rgba(0,0,0,0.75)]",
                                            "aria-label": "Get in touch",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono-label text-[10px] uppercase tracking-[0.2em] whitespace-nowrap",
                                                    children: "Get in touch"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": true,
                                                    className: "transition-transform duration-300 group-hover:translate-x-0.5",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            className: "lg:col-span-5 flex justify-center lg:justify-end items-center self-center",
                            style: reduced ? undefined : {
                                y: yPortrait
                            },
                            initial: reduced ? false : {
                                opacity: 0,
                                scale: 0.92
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                ...transition,
                                delay: 0.55
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "aria-hidden": true,
                                                className: "absolute -inset-3 md:-inset-4 rounded-full border border-rule-strong"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "aria-hidden": true,
                                                className: "absolute -inset-1 rounded-full bg-ink/5 blur-xl transition-opacity duration-700 opacity-0 hover:opacity-100"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-square w-[clamp(220px,28vw,360px)] overflow-hidden rounded-full border border-rule-strong bg-paper-sunken shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/bhavana_headshot.png",
                                                        alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name} — portrait`,
                                                        className: "h-full w-full object-cover",
                                                        width: 480,
                                                        height: 480
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "aria-hidden": true,
                                                        className: "pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-ink/5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-paper px-3 py-1 shadow-sm border border-rule",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono-label text-[9px] uppercase tracking-[0.2em] text-ink-mute",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].firstName,
                                                        " · 2026"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 md:mt-6 lg:mt-8 flex justify-center w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "max-w-[36rem] text-center text-sm md:text-base text-ink-soft px-4",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].positioning
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/hero.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Hero, "j8goqfPUF/yxNXsC2EqolBlPl7Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Marquee",
    ()=>Marquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Marquee({ items, stats, duration = 45, direction = "forward", className = "" }) {
    _s();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [paused, setPaused] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "stack",
        className: [
            "w-full bg-paper text-ink border-y border-rule scroll-mt-20",
            className
        ].join(" "),
        children: [
            stats && stats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-editorial border-b border-rule/60 py-10 md:py-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
                    children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display text-4xl sm:text-5xl md:text-[3.8rem] font-medium leading-none text-ink tracking-tight",
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs md:text-sm text-ink-mute leading-snug max-w-[200px]",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden py-8 md:py-12",
                onMouseEnter: ()=>setPaused(true),
                onMouseLeave: ()=>setPaused(false),
                "aria-label": "Technical stack",
                role: "list",
                children: !reduced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-max marquee-track",
                    style: {
                        "--marquee-duration": `${duration}s`
                    },
                    "data-direction": direction,
                    "data-paused": paused,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeGroup, {
                            items: items
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeGroup, {
                            items: items,
                            ariaHidden: true
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-x-8 gap-y-4 px-6 md:px-12 py-4",
                    children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeItem, {
                            item: item
                        }, `${item}-${i}`, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                            lineNumber: 74,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Marquee, "VSIaSraPxnxSPi8y3UsW9Awcz90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Marquee;
function MarqueeGroup({ items, ariaHidden }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "flex items-center shrink-0",
        "aria-hidden": ariaHidden ? "true" : undefined,
        role: "presentation",
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeItem, {
                item: item
            }, `${item}-${i}`, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c1 = MarqueeGroup;
function MarqueeItem({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center gap-8 md:gap-14 px-4 md:px-7",
        role: "listitem",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-display italic font-medium text-4xl sm:text-5xl md:text-[4.2rem] leading-none text-ink tracking-tight whitespace-nowrap",
                children: item
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "text-ink-mute/70 text-lg md:text-2xl select-none font-serif",
                children: "✦"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/marquee.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c2 = MarqueeItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Marquee");
__turbopack_context__.k.register(_c1, "MarqueeGroup");
__turbopack_context__.k.register(_c2, "MarqueeItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal,
    "SectionLabel",
    ()=>SectionLabel,
    "Stagger",
    ()=>Stagger,
    "StaggerItem",
    ()=>StaggerItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
function Reveal({ children, delay = 0, y = 24, className, as = "div", once = true }) {
    _s();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once,
        margin: "-12% 0px -12% 0px"
    });
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const MotionTag = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"][as];
    if (reduced) {
        const Tag = as;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            ref: ref,
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionTag, {
        ref: ref,
        className: className,
        initial: {
            opacity: 0,
            y
        },
        animate: inView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y
        },
        transition: {
            duration: 0.7,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Reveal, "C3b0yhg98J60T4Y6ccirfeROlMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Reveal;
function Stagger({ children, className, gap = 0.08, as = "div" }) {
    _s1();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-10% 0px -10% 0px"
    });
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const MotionTag = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"][as];
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: reduced ? 0 : gap,
                delayChildren: 0.05
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionTag, {
        ref: ref,
        className: className,
        variants: containerVariants,
        initial: "hidden",
        animate: inView ? "show" : "hidden",
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s1(Stagger, "C3b0yhg98J60T4Y6ccirfeROlMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = Stagger;
function StaggerItem({ children, className, y = 20, as = "div" }) {
    _s2();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const MotionTag = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"][as];
    const itemVariants = {
        hidden: reduced ? {
            opacity: 0
        } : {
            opacity: 0,
            y
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionTag, {
        className: className,
        variants: itemVariants,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s2(StaggerItem, "/JSVQSdN2dVjcj5yyuX/KnOybKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = StaggerItem;
function SectionLabel({ index, eyebrow, title, align = "left", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            "flex flex-col gap-5",
            align === "center" ? "items-center text-center" : "items-start text-left",
            className
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-4 text-ink-mute",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow-parens",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "h-px w-8 bg-rule-strong"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "numeral text-sm tabular-nums tracking-tight",
                        children: index
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display text-ink leading-[1.02] font-medium text-[clamp(2.25rem,6vw,4.5rem)] tracking-[-0.025em]",
                children: title
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_c3 = SectionLabel;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Reveal");
__turbopack_context__.k.register(_c1, "Stagger");
__turbopack_context__.k.register(_c2, "StaggerItem");
__turbopack_context__.k.register(_c3, "SectionLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/portfolio-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative scroll-mt-20 py-24 md:py-36 border-t border-rule",
        "aria-labelledby": "about-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-editorial",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                        index: "01",
                        eyebrow: "About",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The discipline of treating",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, void 0),
                                " data as a",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic font-normal text-ink-soft",
                                    children: "product"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 lg:pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: 0.05,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow-parens",
                                        children: "Manifesto"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 font-mono-label text-[10px] text-ink-mute uppercase tracking-[0.18em]",
                                        children: "On what I build, and why"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-9 lg:col-start-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                                as: "div",
                                className: "flex flex-col gap-7 max-w-3xl",
                                gap: 0.12,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].manifesto.map((para, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                        as: "div",
                                        children: i === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "manifesto-first text-ink-soft",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "drop-cap",
                                                    "aria-hidden": true,
                                                    children: para.charAt(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "manifesto-first-body",
                                                    children: para.slice(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                            lineNumber: 54,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "manifesto-body text-ink-soft",
                                            children: para
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                            lineNumber: 61,
                                            columnNumber: 21
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-24 md:mt-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow-parens mb-3",
                                                children: "How I work"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-3xl md:text-4xl text-ink font-medium leading-[1.05] tracking-[-0.02em]",
                                                children: [
                                                    "Three principles,",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "italic font-normal text-ink-soft",
                                                        children: "no surprises"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-sm text-ink-mute text-sm leading-relaxed",
                                        children: "The same lens applies whether I'm shipping a schema, an ETL pipeline, or an ML feature store."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                            as: "ol",
                            className: "flex flex-col",
                            gap: 0,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].principles.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                                    as: "li",
                                    className: "border-t border-rule last:border-b last:border-b-rule",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrincipleRow, {
                                        principle: p,
                                        index: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                }, p.title, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = About;
/* ---------- Principle row — editorial spread with massive numeral ---------- */ function PrincipleRow({ principle, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 items-start group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "numeral block font-display font-medium text-ink leading-none text-[clamp(3rem,8vw,4rem)] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1",
                    children: String(index).padStart(2, "0")
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-display text-xl md:text-2xl text-ink font-medium leading-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "italic font-normal text-ink-soft",
                            children: principle.title.split(" ")[0]
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        " ",
                        principle.title.split(" ").slice(1).join(" ")
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[15px] md:text-base text-ink-soft leading-relaxed",
                    children: principle.body
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/about.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c1 = PrincipleRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "About");
__turbopack_context__.k.register(_c1, "PrincipleRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/portfolio-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Projects() {
    _s();
    const categories = [
        "All",
        "Data & ML",
        "Backend & DB",
        "Full-Stack",
        "Web3"
    ];
    const trackRef = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [activeIndex, setActiveIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [selectedCategory, setSelectedCategory] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("All");
    const [isDragging, setIsDragging] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const dragStart = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const filteredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Projects.useMemo[filteredProjects]": ()=>selectedCategory === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter({
                "Projects.useMemo[filteredProjects]": (project)=>project.tags.includes(selectedCategory)
            }["Projects.useMemo[filteredProjects]"])
    }["Projects.useMemo[filteredProjects]"], [
        selectedCategory
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Projects.useEffect": ()=>{
            if (filteredProjects.length === 0) {
                setActiveIndex(0);
                return;
            }
            setActiveIndex({
                "Projects.useEffect": (current)=>Math.min(current, filteredProjects.length - 1)
            }["Projects.useEffect"]);
        }
    }["Projects.useEffect"], [
        filteredProjects.length
    ]);
    /* ── sync active index with scroll position ── */ const onScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Projects.useCallback[onScroll]": ()=>{
            const el = trackRef.current;
            if (!el) return;
            const count = Math.max(filteredProjects.length, 1);
            const cardWidth = el.scrollWidth / count;
            const idx = Math.round(el.scrollLeft / cardWidth);
            setActiveIndex(Math.max(0, Math.min(idx, filteredProjects.length - 1)));
        }
    }["Projects.useCallback[onScroll]"], [
        filteredProjects.length
    ]);
    /* ── arrow navigation ── */ const scrollTo = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Projects.useCallback[scrollTo]": (index)=>{
            const el = trackRef.current;
            if (!el) return;
            const count = Math.max(filteredProjects.length, 1);
            const cardWidth = el.scrollWidth / count;
            el.scrollTo({
                left: cardWidth * index,
                behavior: reduced ? "auto" : "smooth"
            });
            setActiveIndex(index);
        }
    }["Projects.useCallback[scrollTo]"], [
        filteredProjects.length,
        reduced
    ]);
    /* ── drag-to-scroll (desktop) ── */ const onMouseDown = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Projects.useCallback[onMouseDown]": (e)=>{
            const el = trackRef.current;
            if (!el) return;
            setIsDragging(true);
            dragStart.current = {
                x: e.clientX,
                scrollLeft: el.scrollLeft
            };
            e.preventDefault();
        }
    }["Projects.useCallback[onMouseDown]"], []);
    const onMouseMove = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Projects.useCallback[onMouseMove]": (e)=>{
            if (!dragStart.current || !trackRef.current) return;
            const dx = e.clientX - dragStart.current.x;
            trackRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
        }
    }["Projects.useCallback[onMouseMove]"], []);
    const endDrag = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Projects.useCallback[endDrag]": ()=>{
            setIsDragging(false);
            dragStart.current = null;
            // let the scroll-snap settle, then sync index
            setTimeout({
                "Projects.useCallback[endDrag]": ()=>onScroll()
            }["Projects.useCallback[endDrag]"], 60);
        }
    }["Projects.useCallback[endDrag]"], [
        onScroll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        className: "relative scroll-mt-20 py-24 md:py-36 border-t border-rule overflow-hidden",
        "aria-labelledby": "work-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-editorial mb-10 md:mb-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                            index: "04",
                            eyebrow: "Selected Work",
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Engineering that solves problems."
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "max-w-lg text-base md:text-lg text-ink-soft leading-relaxed",
                                            children: "Built to solve real problems. Data pipelines, distributed backends, and applied machine learning — explore the problem, approach, and outcome behind each build."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "aria-label": "Previous project",
                                                    onClick: ()=>scrollTo(Math.max(0, activeIndex - 1)),
                                                    disabled: activeIndex === 0,
                                                    className: "group h-10 w-10 rounded-full border border-rule-strong flex items-center justify-center transition-all duration-200 hover:border-ink hover:bg-ink hover:text-paper disabled:opacity-30 disabled:pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 14 14",
                                                        fill: "none",
                                                        "aria-hidden": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9 2L4 7l5 5",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "numeral text-sm tabular-nums text-ink-mute select-none",
                                                    children: [
                                                        String(activeIndex + 1).padStart(2, "0"),
                                                        " / ",
                                                        String(filteredProjects.length).padStart(2, "0")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "aria-label": "Next project",
                                                    onClick: ()=>scrollTo(Math.min(filteredProjects.length - 1, activeIndex + 1)),
                                                    disabled: activeIndex === filteredProjects.length - 1,
                                                    className: "group h-10 w-10 rounded-full border border-rule-strong flex items-center justify-center transition-all duration-200 hover:border-ink hover:bg-ink hover:text-paper disabled:opacity-30 disabled:pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 14 14",
                                                        fill: "none",
                                                        "aria-hidden": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M5 2l5 5-5 5",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-3",
                                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setSelectedCategory(category);
                                                setActiveIndex(0);
                                            },
                                            className: `rounded-full border px-4 py-2 text-sm font-medium transition ${selectedCategory === category ? "border-ink bg-ink text-paper" : "border-rule text-ink-soft hover:border-ink hover:text-ink"}`,
                                            children: category
                                        }, category, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-editorial",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: trackRef,
                    onScroll: onScroll,
                    onMouseDown: onMouseDown,
                    onMouseMove: isDragging ? onMouseMove : undefined,
                    onMouseUp: endDrag,
                    onMouseLeave: endDrag,
                    style: {
                        cursor: isDragging ? "grabbing" : "grab",
                        paddingLeft: 0,
                        paddingRight: 0
                    },
                    className: "flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 select-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            mode: "popLayout",
                            children: filteredProjects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                    project: project,
                                    index: i + 1,
                                    isActive: i === activeIndex,
                                    onClick: ()=>scrollTo(i)
                                }, project.id, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 187,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 w-8 md:w-16",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-editorial mt-8 flex items-center gap-2",
                children: filteredProjects.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": `Go to project ${i + 1}`,
                        onClick: ()=>scrollTo(i),
                        className: [
                            "rounded-full transition-all duration-300",
                            i === activeIndex ? "w-5 h-1.5 bg-ink" : "w-1.5 h-1.5 bg-rule-strong hover:bg-ink-mute"
                        ].join(" ")
                    }, i, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(Projects, "gDHx3TMK1Zbv/5fF/PtPljNO5mk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Projects;
/* ============================================================
   Single project card — compact editorial tile
   ============================================================ */ function ProjectCard({ project, index, isActive, onClick }) {
    const metric = extractMetric(project);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        onOpenChange: (open)=>{
            if (open) onClick();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].article, {
                    layout: true,
                    initial: {
                        opacity: 0,
                        y: 18
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -18
                    },
                    transition: {
                        duration: 0.32,
                        ease: "easeOut"
                    },
                    className: [
                        "shrink-0 snap-start flex flex-col bg-paper-raised",
                        // Card width: ~85vw on mobile (so you can see the next card peeking), capped at 320px; wider on desktop
                        "w-[min(85vw,20rem)] sm:w-[min(52vw,21rem)] md:w-[min(36vw,22rem)] lg:w-80",
                        "rounded-2xl overflow-hidden border transition-[border-color,box-shadow,transform] duration-300 cursor-pointer",
                        isActive ? "border-ink/25 shadow-[0_16px_34px_-24px_rgba(0,0,0,0.35)] dark:shadow-[0_22px_42px_-30px_rgba(0,0,0,0.92)]" : "border-rule hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_14px_28px_-22px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_38px_-28px_rgba(0,0,0,0.88)]"
                    ].join(" "),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full overflow-hidden bg-paper-sunken shrink-0",
                            style: {
                                aspectRatio: "16/9"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 400 300",
                                    className: "absolute inset-0 h-full w-full",
                                    preserveAspectRatio: "xMidYMid slice",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectArt, {
                                        projectId: project.id
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                        lineNumber: 271,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 265,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-2.5 right-3 numeral text-[10px] tabular-nums text-ink-mute/60 select-none",
                                    children: String(index).padStart(2, "0")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 275,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 264,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col flex-1 px-5 pt-4 pb-5 bg-paper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono-label text-[9px] uppercase tracking-[0.2em] text-ink-soft",
                                    children: project.category.split(" · ")[0]
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 284,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-1.5 font-display text-[1.1rem] leading-[1.2] tracking-[-0.018em] text-ink font-medium",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 289,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 text-[12px] text-ink-soft leading-snug line-clamp-1",
                                    children: project.tagline
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 294,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-3.5 h-px bg-rule"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 299,
                                    columnNumber: 9
                                }, this),
                                metric && metric.value !== "•" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "numeral font-display font-semibold text-ink text-[1.625rem] leading-none tracking-[-0.03em]",
                                            children: metric.value
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                            lineNumber: 304,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono-label text-[9px] uppercase tracking-[0.13em] text-ink-mute leading-snug max-w-[9rem]",
                                            children: metric.caption.slice(0, 48)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                            lineNumber: 307,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 303,
                                    columnNumber: 11
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] text-ink-soft leading-snug line-clamp-2",
                                    children: project.outcome
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 312,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-auto pt-3.5 flex flex-wrap gap-1",
                                    children: [
                                        project.stack.slice(0, 3).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-sm border border-rule px-1.5 py-0.5 font-mono-label text-[8px] uppercase tracking-[0.1em] text-ink-soft/90",
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                lineNumber: 320,
                                                columnNumber: 13
                                            }, this)),
                                        project.stack.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono-label text-[8px] text-ink-mute/50 self-center pl-0.5",
                                            children: [
                                                "+",
                                                project.stack.length - 3
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                            lineNumber: 328,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 318,
                                    columnNumber: 9
                                }, this),
                                project.codeHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: project.codeHref,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: (e)=>e.stopPropagation(),
                                    className: "mt-2.5 inline-flex items-center gap-1 font-mono-label text-[9px] uppercase tracking-[0.15em] text-ink-soft hover:text-ink transition-colors duration-200 self-start group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Code"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                            lineNumber: 343,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "transition-transform duration-200 group-hover:translate-x-0.5",
                                            "aria-hidden": true,
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                            lineNumber: 344,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 336,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 281,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "max-w-2xl max-h-[90vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: project.category
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl bg-paper p-5 border border-rule",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold uppercase tracking-[0.18em] text-ink-mute",
                                        children: "Problem"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm leading-relaxed text-ink-soft",
                                        children: project.problem
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl bg-paper p-5 border border-rule",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold uppercase tracking-[0.18em] text-ink-mute",
                                        children: "Approach"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm leading-relaxed text-ink-soft",
                                        children: project.approach
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl bg-paper p-5 border border-rule",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold uppercase tracking-[0.18em] text-ink-mute",
                                        children: "Outcome"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm leading-relaxed text-ink-soft",
                                        children: project.outcome
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl bg-paper p-5 border border-rule",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold uppercase tracking-[0.18em] text-ink-mute",
                                        children: "Engineering highlights"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3 space-y-3 text-sm leading-relaxed text-ink-soft",
                                        children: project.engineering.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-[0.1rem] text-ink",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                        className: "mt-6 gap-3",
                        children: [
                            project.codeHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.codeHref,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-ink/90",
                                children: "View code"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 390,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "inline-flex items-center justify-center rounded-full border border-rule px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_c1 = ProjectCard;
/* ============================================================
   Project-specific SVG illustrations (unchanged from before)
   ============================================================ */ function ProjectArt({ projectId }) {
    const stroke = "#5C5C58";
    const accent = "#2D3028";
    const alert = "#8B4F26";
    switch(projectId){
        case "fraud-detection":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FraudArt, {
                stroke: stroke,
                accent: accent,
                alert: alert
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 420,
                columnNumber: 14
            }, this);
        case "nlp-content-modelling":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NlpArt, {
                stroke: stroke,
                accent: accent
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 422,
                columnNumber: 14
            }, this);
        case "textile-db":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DatabaseArt, {
                stroke: stroke,
                accent: accent
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 424,
                columnNumber: 14
            }, this);
        case "ecommerce-app":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EcommerceArt, {
                stroke: stroke,
                accent: accent
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 426,
                columnNumber: 14
            }, this);
        case "book-to-playlist":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaylistArt, {
                stroke: stroke,
                accent: accent
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 428,
                columnNumber: 14
            }, this);
        case "cryptozombies":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockchainArt, {
                stroke: stroke,
                accent: accent,
                alert: alert
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 430,
                columnNumber: 14
            }, this);
        case "titanfund":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardArt, {
                stroke: stroke,
                accent: accent,
                alert: alert
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 432,
                columnNumber: 14
            }, this);
        default:
            return null;
    }
}
_c2 = ProjectArt;
/* ---------- 1. Fraud Detection ---------- */ function FraudArt({ stroke, accent, alert }) {
    const sources = Array.from({
        length: 6
    }).map((_, i)=>({
            x: 30 + i * 18,
            y: 40 + i % 3 * 14
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            sources.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: s.x,
                            cy: s.y,
                            r: "3",
                            fill: accent,
                            fillOpacity: i === 2 || i === 4 ? 0.8 : 0.25,
                            stroke: accent,
                            strokeWidth: "0.6"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M ${s.x} ${s.y} C ${s.x + 40} ${s.y}, 130 130, 180 150`,
                            stroke: i === 2 || i === 4 ? alert : stroke,
                            strokeWidth: i === 2 || i === 4 ? 1.2 : 0.6,
                            fill: "none",
                            strokeDasharray: i === 2 || i === 4 ? "4 3" : "none",
                            opacity: i === 2 || i === 4 ? 0.95 : 0.55
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 444,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "180",
                cy: "150",
                r: "22",
                fill: "none",
                stroke: accent,
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "180",
                cy: "150",
                r: "14",
                fill: accent,
                fillOpacity: "0.08",
                stroke: accent,
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "180",
                y: "154",
                textAnchor: "middle",
                fontFamily: "ui-monospace, monospace",
                fontSize: "7",
                fill: accent,
                letterSpacing: "0.5",
                children: "ML"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 200 150 L 320 90",
                stroke: stroke,
                strokeWidth: "0.7",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 200 150 L 320 210",
                stroke: alert,
                strokeWidth: "1.4",
                fill: "none",
                strokeDasharray: "4 3"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "320",
                y: "78",
                width: "55",
                height: "24",
                stroke: accent,
                strokeWidth: "0.9",
                fill: "none",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "347",
                y: "93",
                textAnchor: "middle",
                fontFamily: "ui-monospace, monospace",
                fontSize: "7",
                fill: accent,
                children: "CLEAN ✓"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "320",
                y: "198",
                width: "55",
                height: "24",
                stroke: alert,
                strokeWidth: "1.2",
                fill: alert,
                fillOpacity: "0.08",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "347",
                y: "213",
                textAnchor: "middle",
                fontFamily: "ui-monospace, monospace",
                fontSize: "7",
                fill: alert,
                letterSpacing: "0.5",
                children: "FRAUD ⚠"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "30",
                y: "280",
                fontFamily: "ui-monospace, monospace",
                fontSize: "7",
                fill: stroke,
                letterSpacing: "0.6",
                children: "1M+ TX / 89% PRECISION"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
        lineNumber: 442,
        columnNumber: 5
    }, this);
}
_c3 = FraudArt;
/* ---------- 2. NLP / Document Intelligence ---------- */ function NlpArt({ stroke, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            [
                0,
                1,
                2
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: 50 + i * 14,
                    y: 50 - i * 8,
                    width: "120",
                    height: "150",
                    stroke: stroke,
                    strokeWidth: "0.5",
                    fill: "none",
                    opacity: 0.35 + i * 0.15
                }, i, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 467,
                    columnNumber: 30
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "92",
                y: "26",
                width: "120",
                height: "150",
                stroke: accent,
                strokeWidth: "0.9",
                fill: "#FFFFFF",
                fillOpacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            Array.from({
                length: 9
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: 100,
                    y1: 38 + i * 14,
                    x2: 200 - (i === 4 ? 50 : i === 6 ? 30 : 0),
                    y2: 38 + i * 14,
                    stroke: i === 4 || i === 6 ? accent : stroke,
                    strokeWidth: i === 4 || i === 6 ? 1.1 : 0.5,
                    opacity: i === 4 || i === 6 ? 0.95 : 0.6
                }, i, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 469,
                    columnNumber: 49
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "100",
                y: "50",
                width: "60",
                height: "8",
                fill: accent,
                fillOpacity: "0.18",
                stroke: accent,
                strokeWidth: "0.5"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "100",
                y: "92",
                width: "40",
                height: "8",
                fill: accent,
                fillOpacity: "0.18",
                stroke: accent,
                strokeWidth: "0.5"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "92",
                y1: "100",
                x2: "212",
                y2: "100",
                stroke: accent,
                strokeWidth: "1.5",
                strokeDasharray: "3 2",
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 472,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "240",
                y: "40",
                fontFamily: "ui-monospace, monospace",
                fontSize: "6.5",
                fill: stroke,
                letterSpacing: "0.4",
                children: "EXTRACTED:"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 473,
                columnNumber: 7
            }, this),
            [
                {
                    k: "type",
                    v: "INVOICE"
                },
                {
                    k: "vendor",
                    v: "ACME CO."
                },
                {
                    k: "total",
                    v: "$12,480"
                },
                {
                    k: "date",
                    v: "2024-03-14"
                },
                {
                    k: "category",
                    v: "OPEX"
                }
            ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "240",
                            y: 62 + i * 18,
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "6.5",
                            fill: stroke,
                            letterSpacing: "0.4",
                            children: [
                                row.k,
                                ":"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 474,
                            columnNumber: 194
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "280",
                            y: 62 + i * 18,
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "6.5",
                            fill: accent,
                            fontWeight: "500",
                            letterSpacing: "0.4",
                            children: row.v
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 474,
                            columnNumber: 325
                        }, this)
                    ]
                }, row.k, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 474,
                    columnNumber: 179
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 212 56 C 226 56, 226 62, 240 62",
                stroke: accent,
                strokeWidth: "0.6",
                fill: "none",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 212 100 C 226 100, 226 98, 240 98",
                stroke: accent,
                strokeWidth: "0.6",
                fill: "none",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 212 152 C 226 152, 226 134, 240 134",
                stroke: accent,
                strokeWidth: "0.6",
                fill: "none",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
        lineNumber: 466,
        columnNumber: 5
    }, this);
}
_c4 = NlpArt;
/* ---------- 3. Textile DB ---------- */ function DatabaseArt({ stroke, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        stroke: stroke,
        strokeWidth: "0.8",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "40",
                        y: "50",
                        width: "110",
                        height: "80",
                        stroke: accent,
                        strokeWidth: "1",
                        fill: "#FFFFFF",
                        fillOpacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 486,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "40",
                        y: "50",
                        width: "110",
                        height: "18",
                        fill: accent,
                        fillOpacity: "0.12",
                        stroke: accent,
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 486,
                        columnNumber: 121
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "46",
                        y: "62",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "7",
                        fill: accent,
                        fontWeight: "600",
                        children: "orders"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 486,
                        columnNumber: 232
                    }, this),
                    [
                        "order_id  ◆",
                        "customer_id",
                        "total",
                        "status"
                    ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "40",
                                    y1: 68 + (i + 1) * 14,
                                    x2: "150",
                                    y2: 68 + (i + 1) * 14,
                                    stroke: stroke,
                                    strokeWidth: "0.4",
                                    opacity: "0.6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 486,
                                    columnNumber: 427
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "46",
                                    y: 78 + i * 14,
                                    fontFamily: "ui-monospace, monospace",
                                    fontSize: "6",
                                    fill: i === 0 ? accent : stroke,
                                    letterSpacing: "0.3",
                                    children: row
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 486,
                                    columnNumber: 546
                                }, this)
                            ]
                        }, row, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 486,
                            columnNumber: 414
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "240",
                        y: "40",
                        width: "115",
                        height: "100",
                        stroke: accent,
                        strokeWidth: "1",
                        fill: "#FFFFFF",
                        fillOpacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 487,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "240",
                        y: "40",
                        width: "115",
                        height: "18",
                        fill: accent,
                        fillOpacity: "0.12",
                        stroke: accent,
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 487,
                        columnNumber: 123
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "246",
                        y: "52",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "7",
                        fill: accent,
                        fontWeight: "600",
                        children: "inventory"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 487,
                        columnNumber: 235
                    }, this),
                    [
                        "sku  ◆",
                        "name",
                        "qty",
                        "supplier_id",
                        "price"
                    ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "240",
                                    y1: 58 + (i + 1) * 14,
                                    x2: "355",
                                    y2: 58 + (i + 1) * 14,
                                    stroke: stroke,
                                    strokeWidth: "0.4",
                                    opacity: "0.6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 487,
                                    columnNumber: 434
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "246",
                                    y: 68 + i * 14,
                                    fontFamily: "ui-monospace, monospace",
                                    fontSize: "6",
                                    fill: i === 0 ? accent : stroke,
                                    letterSpacing: "0.3",
                                    children: row
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 487,
                                    columnNumber: 554
                                }, this)
                            ]
                        }, row, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 487,
                            columnNumber: 421
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "135",
                        y: "200",
                        width: "125",
                        height: "80",
                        stroke: accent,
                        strokeWidth: "1",
                        fill: "#FFFFFF",
                        fillOpacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 488,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "135",
                        y: "200",
                        width: "125",
                        height: "18",
                        fill: accent,
                        fillOpacity: "0.12",
                        stroke: accent,
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 488,
                        columnNumber: 123
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "141",
                        y: "212",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "7",
                        fill: accent,
                        fontWeight: "600",
                        children: "suppliers"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 488,
                        columnNumber: 236
                    }, this),
                    [
                        "supplier_id  ◆",
                        "name",
                        "country"
                    ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "135",
                                    y1: 218 + (i + 1) * 14,
                                    x2: "260",
                                    y2: 218 + (i + 1) * 14,
                                    stroke: stroke,
                                    strokeWidth: "0.4",
                                    opacity: "0.6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 488,
                                    columnNumber: 424
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "141",
                                    y: 228 + i * 14,
                                    fontFamily: "ui-monospace, monospace",
                                    fontSize: "6",
                                    fill: i === 0 ? accent : stroke,
                                    letterSpacing: "0.3",
                                    children: row
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 488,
                                    columnNumber: 546
                                }, this)
                            ]
                        }, row, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 488,
                            columnNumber: 411
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 150 92 C 195 92, 195 90, 240 90",
                stroke: accent,
                strokeWidth: "0.9",
                strokeDasharray: "3 2",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "178",
                y: "86",
                fontFamily: "ui-monospace, monospace",
                fontSize: "5.5",
                fill: stroke,
                letterSpacing: "0.3",
                children: "FK"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 297 140 C 297 170, 230 170, 230 200",
                stroke: accent,
                strokeWidth: "0.9",
                strokeDasharray: "3 2",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "260",
                y: "172",
                fontFamily: "ui-monospace, monospace",
                fontSize: "5.5",
                fill: stroke,
                letterSpacing: "0.3",
                children: "FK"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 492,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "40",
                y: "28",
                fontFamily: "ui-monospace, monospace",
                fontSize: "6.5",
                fill: stroke,
                letterSpacing: "0.5",
                children: "NORMALIZED · 3NF · LIVE TX"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
        lineNumber: 485,
        columnNumber: 5
    }, this);
}
_c5 = DatabaseArt;
/* ---------- 4. E-Commerce ---------- */ function EcommerceArt({ stroke, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        stroke: stroke,
        strokeWidth: "0.8",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "40",
                y: "40",
                width: "320",
                height: "220",
                stroke: accent,
                strokeWidth: "1",
                fill: "#FFFFFF",
                fillOpacity: "0.4",
                rx: "4"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "40",
                y: "40",
                width: "320",
                height: "22",
                fill: accent,
                fillOpacity: "0.1",
                stroke: accent,
                strokeWidth: "1",
                rx: "4"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            [
                0,
                1,
                2
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: 52 + i * 9,
                    cy: 51,
                    r: "2",
                    fill: stroke,
                    stroke: "none",
                    opacity: "0.6"
                }, i, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 504,
                    columnNumber: 30
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "85",
                y: "46",
                width: "200",
                height: "10",
                stroke: stroke,
                strokeWidth: "0.5",
                fill: "#FFFFFF",
                fillOpacity: "0.6",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "92",
                y: "53",
                fontFamily: "ui-monospace, monospace",
                fontSize: "5.5",
                fill: stroke,
                letterSpacing: "0.3",
                children: "shop.example.com"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "52",
                y: "82",
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "13",
                fill: accent,
                fontStyle: "italic",
                fontWeight: "500",
                stroke: "none",
                children: "Shop."
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(330, 75)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M -8 -2 L -5 -2 L -3 6 L 8 6 L 10 -2 L -3 -2",
                        stroke: accent,
                        strokeWidth: "0.9",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 508,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "-1",
                        cy: "10",
                        r: "1.2",
                        fill: accent,
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 508,
                        columnNumber: 144
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "6",
                        cy: "10",
                        r: "1.2",
                        fill: accent,
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 508,
                        columnNumber: 206
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "8",
                        cy: "-4",
                        r: "4",
                        fill: accent,
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 508,
                        columnNumber: 267
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "8",
                        y: "-2",
                        textAnchor: "middle",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5",
                        fill: "#FFFFFF",
                        stroke: "none",
                        letterSpacing: "0.2",
                        children: "3"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 508,
                        columnNumber: 326
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            [
                {
                    x: 60,
                    y: 100,
                    label: "Bag"
                },
                {
                    x: 165,
                    y: 100,
                    label: "Watch"
                },
                {
                    x: 60,
                    y: 175,
                    label: "Shoes"
                },
                {
                    x: 165,
                    y: 175,
                    label: "Lamp"
                }
            ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: p.x,
                            y: p.y,
                            width: "90",
                            height: "60",
                            stroke: stroke,
                            strokeWidth: "0.6",
                            fill: "#FFFFFF",
                            fillOpacity: "0.5",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 509,
                            columnNumber: 174
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: p.x + 6,
                            y: p.y + 6,
                            width: "78",
                            height: "32",
                            stroke: stroke,
                            strokeWidth: "0.4",
                            fill: accent,
                            fillOpacity: 0.06 + i * 0.04,
                            rx: "1"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 509,
                            columnNumber: 295
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: p.x + 45,
                            cy: p.y + 22,
                            r: "8",
                            stroke: accent,
                            strokeWidth: "0.5",
                            fill: "none",
                            opacity: "0.6"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 509,
                            columnNumber: 435
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: p.x + 6,
                            y: p.y + 50,
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "5.5",
                            fill: accent,
                            letterSpacing: "0.3",
                            fontWeight: "500",
                            children: p.label
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 509,
                            columnNumber: 539
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: p.x + 78,
                            y: p.y + 50,
                            textAnchor: "end",
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "5.5",
                            fill: stroke,
                            letterSpacing: "0.3",
                            children: [
                                "$",
                                (i + 1) * 24,
                                ".99"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 509,
                            columnNumber: 689
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 509,
                    columnNumber: 163
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(280, 175)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "0",
                        width: "65",
                        height: "22",
                        stroke: accent,
                        strokeWidth: "0.8",
                        fill: accent,
                        fillOpacity: "0.06",
                        rx: "3"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 510,
                        columnNumber: 42
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "6",
                        y: "9",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5",
                        fill: stroke,
                        letterSpacing: "0.3",
                        children: "FIREBASE"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 510,
                        columnNumber: 159
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "6",
                        y: "17",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5",
                        fill: accent,
                        letterSpacing: "0.3",
                        fontWeight: "500",
                        children: "AUTH ✓"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 510,
                        columnNumber: 276
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
        lineNumber: 501,
        columnNumber: 5
    }, this);
}
_c6 = EcommerceArt;
/* ---------- 5. Book to Playlist ---------- */ function PlaylistArt({ stroke, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        stroke: stroke,
        strokeWidth: "0.8",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 30 80 L 110 70 L 110 200 L 30 210 Z",
                        stroke: accent,
                        strokeWidth: "1",
                        fill: "#FFFFFF",
                        fillOpacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 190 80 L 110 70 L 110 200 L 190 200 Z",
                        stroke: accent,
                        strokeWidth: "1",
                        fill: "#FFFFFF",
                        fillOpacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "110",
                        y1: "70",
                        x2: "110",
                        y2: "200",
                        stroke: accent,
                        strokeWidth: "0.6"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this),
                    Array.from({
                        length: 8
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 40 + (i % 4 === 3 ? 8 : 0),
                            y1: 90 + i * 13,
                            x2: 100 - (i % 4 === 2 ? 6 : 0),
                            y2: 90 + i * 13,
                            stroke: stroke,
                            strokeWidth: "0.4",
                            opacity: "0.55"
                        }, i, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 523,
                            columnNumber: 51
                        }, this)),
                    Array.from({
                        length: 8
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 120,
                            y1: 90 + i * 13,
                            x2: 180 - (i % 3 === 1 ? 10 : 0),
                            y2: 90 + i * 13,
                            stroke: stroke,
                            strokeWidth: "0.4",
                            opacity: "0.55"
                        }, `r${i}`, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 524,
                            columnNumber: 51
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "50",
                        y: "92",
                        width: "50",
                        height: "8",
                        fill: accent,
                        fillOpacity: "0.18",
                        stroke: accent,
                        strokeWidth: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "55",
                        y: "98",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5",
                        fill: accent,
                        letterSpacing: "0.3",
                        children: "MELANCHOLY"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 526,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 200 135 C 230 135, 235 135, 250 135",
                        stroke: accent,
                        strokeWidth: "1.2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 248 131 L 254 135 L 248 139",
                        stroke: accent,
                        strokeWidth: "1.2",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "208",
                        y: "118",
                        width: "34",
                        height: "14",
                        stroke: accent,
                        strokeWidth: "0.7",
                        fill: accent,
                        fillOpacity: "0.06",
                        rx: "2"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "225",
                        y: "128",
                        textAnchor: "middle",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: accent,
                        letterSpacing: "0.4",
                        children: "LLM"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(260, 110)",
                children: [
                    Array.from({
                        length: 5
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: i * 5,
                            x2: "120",
                            y2: i * 5,
                            stroke: accent,
                            strokeWidth: "0.5"
                        }, i, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 535,
                            columnNumber: 51
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 6 4 C 12 4, 12 14, 6 14 C 0 14, 0 4, 6 4 Z M 6 14 L 6 22",
                        stroke: accent,
                        strokeWidth: "0.9",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            x: 24,
                            y: 12
                        },
                        {
                            x: 40,
                            y: 8
                        },
                        {
                            x: 56,
                            y: 14
                        },
                        {
                            x: 72,
                            y: 6
                        },
                        {
                            x: 88,
                            y: 12
                        },
                        {
                            x: 104,
                            y: 4
                        }
                    ].map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: n.x,
                                    cy: n.y,
                                    rx: "2.5",
                                    ry: "1.8",
                                    fill: accent,
                                    stroke: "none",
                                    transform: `rotate(-20 ${n.x} ${n.y})`
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 537,
                                    columnNumber: 143
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: n.x + 2.3,
                                    y1: n.y - 0.5,
                                    x2: n.x + 2.3,
                                    y2: n.y - 9,
                                    stroke: accent,
                                    strokeWidth: "0.7"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 537,
                                    columnNumber: 258
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 537,
                            columnNumber: 132
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "48",
                        y1: "0",
                        x2: "48",
                        y2: "20",
                        stroke: accent,
                        strokeWidth: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "80",
                        y1: "0",
                        x2: "80",
                        y2: "20",
                        stroke: accent,
                        strokeWidth: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "118",
                        y1: "0",
                        x2: "118",
                        y2: "20",
                        stroke: accent,
                        strokeWidth: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 540,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "121",
                        y1: "0",
                        x2: "121",
                        y2: "20",
                        stroke: accent,
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 541,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "30",
                y: "245",
                fontFamily: "ui-monospace, monospace",
                fontSize: "6",
                fill: stroke,
                letterSpacing: "0.4",
                children: "BOOK THEMES → LLM → SPOTIFY"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "30",
                y: "255",
                fontFamily: "ui-monospace, monospace",
                fontSize: "6",
                fill: accent,
                letterSpacing: "0.4",
                fontWeight: "500",
                children: "REAL-TIME PLAYLIST CURATION"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 544,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
        lineNumber: 518,
        columnNumber: 5
    }, this);
}
_c7 = PlaylistArt;
/* ---------- 6. CryptoZombies ---------- */ function BlockchainArt({ stroke, accent, alert }) {
    const blocks = [
        {
            x: 40,
            y: 130
        },
        {
            x: 110,
            y: 80
        },
        {
            x: 180,
            y: 130
        },
        {
            x: 250,
            y: 80
        },
        {
            x: 320,
            y: 130
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            blocks.slice(0, -1).map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: b.x + 18,
                    y1: b.y + (i % 2 === 0 ? 10 : -10),
                    x2: blocks[i + 1].x - 18,
                    y2: blocks[i + 1].y + (i % 2 === 0 ? -10 : 10),
                    stroke: accent,
                    strokeWidth: "1",
                    strokeDasharray: "3 2",
                    opacity: "0.7"
                }, i, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 554,
                    columnNumber: 43
                }, this)),
            blocks.map((b, i)=>{
                const isLatest = i === blocks.length - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: [
                                `${b.x},${b.y - 22}`,
                                `${b.x + 19},${b.y - 11}`,
                                `${b.x + 19},${b.y + 11}`,
                                `${b.x},${b.y + 22}`,
                                `${b.x - 19},${b.y + 11}`,
                                `${b.x - 19},${b.y - 11}`
                            ].join(" "),
                            stroke: isLatest ? alert : accent,
                            strokeWidth: isLatest ? 1.3 : 1,
                            fill: isLatest ? alert : accent,
                            fillOpacity: isLatest ? 0.1 : 0.05
                        }, void 0, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 559,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: b.x,
                            y: b.y + 3,
                            textAnchor: "middle",
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "7",
                            fill: isLatest ? alert : accent,
                            fontWeight: "600",
                            letterSpacing: "0.4",
                            children: [
                                "#",
                                (1248 + i).toString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 560,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            transform: `translate(${b.x}, ${b.y - 12})`,
                            opacity: "0.85",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "-4",
                                    y: "-2",
                                    width: "8",
                                    height: "6",
                                    stroke: isLatest ? alert : accent,
                                    strokeWidth: "0.5",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 561,
                                    columnNumber: 76
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "-2",
                                    cy: "0",
                                    r: "0.7",
                                    fill: isLatest ? alert : accent,
                                    stroke: "none"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 561,
                                    columnNumber: 184
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "2",
                                    cy: "0",
                                    r: "0.7",
                                    fill: isLatest ? alert : accent,
                                    stroke: "none"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 561,
                                    columnNumber: 264
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 561,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                    lineNumber: 558,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(180, 30)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "0",
                        y: "0",
                        textAnchor: "middle",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "6",
                        fill: stroke,
                        letterSpacing: "0.4",
                        children: "ARENA BATTLE"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 565,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M -50 12 L 50 12",
                        stroke: alert,
                        strokeWidth: "1",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 565,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M -50 8 L -50 16 M 50 8 L 50 16",
                        stroke: alert,
                        strokeWidth: "1",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 565,
                        columnNumber: 254
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "-60",
                        y: "15",
                        textAnchor: "end",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: accent,
                        letterSpacing: "0.3",
                        fontWeight: "500",
                        children: "ZOMBIE A"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 565,
                        columnNumber: 341
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "60",
                        y: "15",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: accent,
                        letterSpacing: "0.3",
                        fontWeight: "500",
                        children: "ZOMBIE B"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 565,
                        columnNumber: 497
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(30, 230)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "0",
                        width: "100",
                        height: "30",
                        stroke: accent,
                        strokeWidth: "0.8",
                        fill: accent,
                        fillOpacity: "0.06",
                        rx: "3"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 566,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "6",
                        y: "11",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: stroke,
                        letterSpacing: "0.3",
                        children: "WALLET"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 566,
                        columnNumber: 159
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "6",
                        y: "22",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: accent,
                        letterSpacing: "0.3",
                        fontWeight: "500",
                        children: "0xA1f3...92E4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 566,
                        columnNumber: 277
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "92",
                        cy: "15",
                        r: "4",
                        stroke: accent,
                        strokeWidth: "0.5",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 566,
                        columnNumber: 419
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 90 13 L 92 16 L 94 13",
                        stroke: accent,
                        strokeWidth: "0.6",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 566,
                        columnNumber: 497
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(280, 230)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "0",
                        width: "90",
                        height: "30",
                        stroke: accent,
                        strokeWidth: "0.8",
                        fill: accent,
                        fillOpacity: "0.06",
                        rx: "3"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 567,
                        columnNumber: 42
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "6",
                        y: "11",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: stroke,
                        letterSpacing: "0.3",
                        children: "CONTRACT"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 567,
                        columnNumber: 159
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "6",
                        y: "22",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: accent,
                        letterSpacing: "0.3",
                        fontWeight: "500",
                        children: "SOLIDITY ✓"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 567,
                        columnNumber: 279
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
        lineNumber: 553,
        columnNumber: 5
    }, this);
}
_c8 = BlockchainArt;
/* ---------- 7. TitanFund Dashboard ---------- */ function DashboardArt({ stroke, accent, alert }) {
    const candles = [
        {
            x: 30,
            open: 140,
            close: 132,
            up: false
        },
        {
            x: 50,
            open: 132,
            close: 138,
            up: true
        },
        {
            x: 70,
            open: 138,
            close: 124,
            up: false
        },
        {
            x: 90,
            open: 124,
            close: 130,
            up: true
        },
        {
            x: 110,
            open: 130,
            close: 116,
            up: false
        },
        {
            x: 130,
            open: 116,
            close: 122,
            up: true
        },
        {
            x: 150,
            open: 122,
            close: 108,
            up: false
        },
        {
            x: 170,
            open: 108,
            close: 118,
            up: true
        },
        {
            x: 190,
            open: 118,
            close: 110,
            up: false
        },
        {
            x: 210,
            open: 110,
            close: 96,
            up: false
        },
        {
            x: 230,
            open: 96,
            close: 104,
            up: true
        },
        {
            x: 250,
            open: 104,
            close: 88,
            up: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        stroke: stroke,
        strokeWidth: "0.8",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "20",
                y: "20",
                width: "360",
                height: "260",
                stroke: accent,
                strokeWidth: "1",
                fill: "#FFFFFF",
                fillOpacity: "0.4",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 577,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "20",
                y: "20",
                width: "360",
                height: "22",
                stroke: accent,
                strokeWidth: "0.8",
                fill: accent,
                fillOpacity: "0.08",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "30",
                y: "34",
                fontFamily: "ui-monospace, monospace",
                fontSize: "6.5",
                fill: accent,
                fontWeight: "600",
                letterSpacing: "0.5",
                children: "TITANFUND · PORTFOLIO"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "370",
                y: "34",
                textAnchor: "end",
                fontFamily: "ui-monospace, monospace",
                fontSize: "6",
                fill: stroke,
                letterSpacing: "0.4",
                children: "LIVE"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "355",
                cy: "31",
                r: "2",
                fill: alert,
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 581,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    [
                        60,
                        100,
                        140,
                        180
                    ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "30",
                            y1: y,
                            x2: "280",
                            y2: y,
                            stroke: stroke,
                            strokeWidth: "0.3",
                            opacity: "0.3",
                            strokeDasharray: "2 3"
                        }, y, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 583,
                            columnNumber: 42
                        }, this)),
                    [
                        {
                            y: 64,
                            v: "+8%"
                        },
                        {
                            y: 104,
                            v: "+4%"
                        },
                        {
                            y: 144,
                            v: "0%"
                        },
                        {
                            y: 184,
                            v: "-4%"
                        }
                    ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "286",
                            y: row.y + 2,
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "5",
                            fill: stroke,
                            letterSpacing: "0.3",
                            children: row.v
                        }, row.v, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 584,
                            columnNumber: 111
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "30",
                        y1: "144",
                        x2: "280",
                        y2: "144",
                        stroke: stroke,
                        strokeWidth: "0.5",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, this),
                    candles.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: c.x,
                                    y1: c.open - 8,
                                    x2: c.x,
                                    y2: c.close + 8,
                                    stroke: c.up ? accent : alert,
                                    strokeWidth: "0.6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 586,
                                    columnNumber: 44
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: c.x - 4,
                                    y: Math.min(c.open, c.close),
                                    width: "8",
                                    height: Math.max(Math.abs(c.close - c.open), 2),
                                    fill: c.up ? accent : alert,
                                    fillOpacity: c.up ? 0.7 : 0.6,
                                    stroke: c.up ? accent : alert,
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                    lineNumber: 586,
                                    columnNumber: 152
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                            lineNumber: 586,
                            columnNumber: 33
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 30 130 L 50 134 L 70 120 L 90 124 L 110 110 L 130 114 L 150 100 L 170 104 L 190 96 L 210 92 L 230 88 L 250 78",
                        stroke: accent,
                        strokeWidth: "1.4",
                        fill: "none",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 582,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(310, 60)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "0",
                        y: "0",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: stroke,
                        letterSpacing: "0.4",
                        children: "RETURN"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 590,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "0",
                        y: "14",
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "20",
                        fill: accent,
                        fontWeight: "600",
                        fontStyle: "italic",
                        children: "+24.6%"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 591,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "0",
                        y: "24",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5",
                        fill: alert,
                        letterSpacing: "0.3",
                        children: "▲ 3.2 today"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: "34",
                        x2: "60",
                        y2: "34",
                        stroke: stroke,
                        strokeWidth: "0.3",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 593,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "0",
                        y: "48",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: stroke,
                        letterSpacing: "0.4",
                        children: "SHARPE"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "0",
                        y: "62",
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "16",
                        fill: accent,
                        fontWeight: "600",
                        fontStyle: "italic",
                        children: "1.84"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 595,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: "72",
                        x2: "60",
                        y2: "72",
                        stroke: stroke,
                        strokeWidth: "0.3",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "0",
                        y: "86",
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "5.5",
                        fill: stroke,
                        letterSpacing: "0.4",
                        children: "DRAWDOWN"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 597,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "0",
                        y: "100",
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "16",
                        fill: alert,
                        fontWeight: "600",
                        fontStyle: "italic",
                        children: "-6.2%"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 598,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 589,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(30, 240)",
                children: [
                    "1D",
                    "1W",
                    "1M",
                    "1Y",
                    "ALL"
                ].map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: i * 38,
                                y: "0",
                                width: "32",
                                height: "18",
                                stroke: i === 2 ? accent : stroke,
                                strokeWidth: "0.6",
                                fill: i === 2 ? accent : "none",
                                fillOpacity: i === 2 ? 0.1 : 0,
                                rx: "2"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 601,
                                columnNumber: 76
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: i * 38 + 16,
                                y: "11",
                                textAnchor: "middle",
                                fontFamily: "ui-monospace, monospace",
                                fontSize: "5.5",
                                fill: i === 2 ? accent : stroke,
                                letterSpacing: "0.3",
                                fontWeight: i === 2 ? "600" : "400",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                                lineNumber: 601,
                                columnNumber: 249
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                        lineNumber: 601,
                        columnNumber: 61
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
                lineNumber: 600,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/projects.tsx",
        lineNumber: 576,
        columnNumber: 5
    }, this);
}
_c9 = DashboardArt;
/* ---------- Metric extractor ---------- */ function extractMetric(project) {
    // Prefer explicit metric fields when present (set in `portfolio-data.ts`)
    if (project.metric !== undefined && project.metric !== null) {
        const raw = project.metric;
        const value = typeof raw === "number" ? String(raw) : raw;
        const caption = project.metricDescription || project.outcome?.split(/[.]/)[0] || "";
        return {
            value,
            caption
        };
    }
    for (const note of project.engineering){
        const percentMatch = note.match(/(\d+%)/);
        if (percentMatch) return {
            value: percentMatch[1],
            caption: project.outcome.split(/[.]/)[0]
        };
    }
    for (const note of project.engineering){
        const numMatch = note.match(/(\d+(?:,\d{3})?(?:\.\d+)?(?:K|M|\+)?)\b/);
        if (numMatch) {
            const raw = numMatch[1];
            // Accept only large/meaningful metrics: contains K/M, has decimal, or >= 10
            const hasKMorM = /[KM]/i.test(raw);
            const hasDecimal = /\./.test(raw);
            const numeric = parseFloat(raw.replace(/[+,KMkm]/g, ""));
            if (hasKMorM || hasDecimal || !Number.isNaN(numeric) && numeric >= 10) {
                return {
                    value: raw,
                    caption: project.outcome.split(/[.]/)[0]
                };
            }
        // otherwise ignore small counts (e.g. '5+' document formats) and keep searching
        }
    }
    if (project.outcome) return {
        value: "•",
        caption: project.outcome.split(".")[0]
    };
    return null;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Projects");
__turbopack_context__.k.register(_c1, "ProjectCard");
__turbopack_context__.k.register(_c2, "ProjectArt");
__turbopack_context__.k.register(_c3, "FraudArt");
__turbopack_context__.k.register(_c4, "NlpArt");
__turbopack_context__.k.register(_c5, "DatabaseArt");
__turbopack_context__.k.register(_c6, "EcommerceArt");
__turbopack_context__.k.register(_c7, "PlaylistArt");
__turbopack_context__.k.register(_c8, "BlockchainArt");
__turbopack_context__.k.register(_c9, "DashboardArt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experience",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/portfolio-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Experience() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "relative scroll-mt-20 py-24 md:py-36 border-t border-rule",
        "aria-labelledby": "experience-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-editorial",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                                    index: "03",
                                    eyebrow: "Experience",
                                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Early-career experience shipping",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden sm:block"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                                lineNumber: 36,
                                                columnNumber: 21
                                            }, void 0),
                                            " data at",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "italic font-normal text-ink-soft",
                                                children: "scale"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                                lineNumber: 37,
                                                columnNumber: 21
                                            }, void 0),
                                            "."
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4 md:text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-ink-soft leading-relaxed max-w-sm md:ml-auto",
                                    children: "Nokia · Cognizant · CSU Fullerton — co-op, full-time, and teaching experience across pipelines, databases, and analytics."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                    as: "ol",
                    className: "mt-16 md:mt-24 flex flex-col gap-6 md:gap-8",
                    gap: 0.18,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                            as: "li",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompanyCard, {
                                entry: entry,
                                index: i,
                                total: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].length
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        }, entry.id, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Experience;
/* ---------- One organization card ---------- */ function CompanyCard({ entry, index }) {
    const hasMultipleRoles = entry.roles.length > 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "group relative rounded-2xl border border-rule bg-paper-raised transition-[border-color,box-shadow] duration-300 hover:border-ink/25 hover:shadow-[0_18px_36px_-26px_rgba(0,0,0,0.34)] dark:hover:shadow-[0_22px_44px_-30px_rgba(0,0,0,0.92)] [&_summary::-webkit-details-marker]:hidden [&_summary::marker]:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-10 px-6 md:px-10 py-7 md:py-9 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-ink/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "numeral text-sm tabular-nums text-ink-mute shrink-0",
                                        children: String(index + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        id: `exp-${entry.id}-org`,
                                        className: "font-display text-2xl md:text-[1.85rem] text-ink font-medium leading-tight tracking-[-0.015em]",
                                        children: entry.org
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 md:mt-3 ml-9 md:ml-10 text-[14.5px] text-ink-soft leading-relaxed max-w-2xl",
                                children: entry.summary
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 ml-9 md:ml-10 text-sm text-ink-mute",
                                children: "Hover or tap the card to reveal detailed role information."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-6 md:pl-8 md:border-l md:border-rule flex flex-col gap-2 md:items-end md:text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono-label text-[10px] uppercase tracking-[0.18em] text-ink",
                                children: entry.period
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono-label text-[10px] uppercase tracking-[0.18em] text-ink-soft",
                                children: entry.location
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1",
                                children: entry.current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1.5 rounded-full border border-ink px-2.5 py-1 font-mono-label text-[9px] uppercase tracking-[0.18em] text-ink",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-1 w-1 rounded-full bg-ink",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        "Current"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono-label text-[9px] uppercase tracking-[0.18em] text-ink-soft",
                                    children: entry.kind
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-rule bg-paper px-6 md:px-10 py-6 md:py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-8 md:gap-10",
                    children: entry.roles.map((role, ri)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleBlock, {
                            role: role,
                            roleIndex: ri,
                            totalRoles: entry.roles.length,
                            multiRole: hasMultipleRoles
                        }, `${entry.id}-role-${ri}`, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c1 = CompanyCard;
/* ---------- A single role inside a company card ---------- */ function RoleBlock({ role, multiRole }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-5 relative",
                children: [
                    multiRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "absolute -left-[6px] md:-left-[14px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-paper-raised"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: [
                            "font-display text-lg md:text-xl text-ink font-medium leading-[1.25] tracking-[-0.01em]",
                            multiRole ? "md:pl-2" : ""
                        ].join(" "),
                        children: role.title
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 font-mono-label text-[9.5px] uppercase tracking-[0.18em] text-ink-mute",
                        children: role.period
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-[14px] text-ink-soft leading-relaxed max-w-md",
                        children: role.summary
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-7 md:pl-8 md:border-l md:border-rule",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col gap-3",
                        children: role.highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        className: "numeral text-xs text-ink-mute tabular-nums mt-1 shrink-0 w-5",
                                        children: String(i + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] md:text-[14.5px] text-ink-soft leading-relaxed flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                className: "text-ink-mute mr-2",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            highlightNumbers(h)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    role.stack && role.stack.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-wrap gap-1.5",
                        children: role.stack.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-rule-strong px-2.5 py-0.5 font-mono-label text-[9.5px] uppercase tracking-[0.12em] text-ink-soft",
                                children: s
                            }, s, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c2 = RoleBlock;
/* Highlight numeric tokens within text for visual emphasis */ function highlightNumbers(text) {
    // Split on patterns like 89%, 1M+, ~80%, 500K+, 41%, etc.
    const parts = text.split(/(~?\d+(?:\.\d+)?(?:%|K|M|\+)?)/g);
    return parts.map((part, i)=>{
        if (/^~?\d+(?:\.\d+)?(%|K|M|\+)?$/.test(part)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-ink font-medium tabular-nums",
                children: part
            }, i, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: part
        }, i, false, {
            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/experience.tsx",
            lineNumber: 230,
            columnNumber: 12
        }, this);
    });
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Experience");
__turbopack_context__.k.register(_c1, "CompanyCard");
__turbopack_context__.k.register(_c2, "RoleBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Expertise",
    ()=>Expertise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/portfolio-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Expertise() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "expertise",
        className: "relative scroll-mt-20 py-24 md:py-36 border-t border-rule bg-paper-sunken",
        "aria-labelledby": "expertise-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-editorial relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                        index: "02",
                        eyebrow: "Technical Expertise",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The stack behind",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                                    lineNumber: 32,
                                    columnNumber: 17
                                }, void 0),
                                " the",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic font-normal text-ink-soft",
                                    children: "work"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                                    lineNumber: 33,
                                    columnNumber: 17
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed",
                        children: "Early-career fluency across the modern data stack — from query optimization to ML-ready pipelines. These are the tools I use most often, grouped by where they fit in the architecture."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stagger"], {
                    as: "div",
                    className: "mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6",
                    gap: 0.1,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillGroups"].map((group, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggerItem"], {
                            as: "div",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillCard, {
                                group: group,
                                index: i + 1
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        }, group.id, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-12 max-w-2xl text-sm text-ink-mute leading-relaxed italic font-display",
                        children: "“The right tool is usually the one your team already understands — and the second-best is the one you can teach them in an afternoon.”"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Expertise;
function SkillCard({ group, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-paper-raised border border-rule rounded-2xl p-7 md:p-9 h-full flex flex-col group transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_16px_34px_-24px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.9)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono-label text-[10px] uppercase tracking-[0.22em] text-ink-soft mb-2",
                                children: group.caption
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-2xl md:text-[1.85rem] text-ink font-medium leading-tight tracking-[-0.015em]",
                                children: group.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "numeral text-base text-ink-soft tabular-nums shrink-0 ml-4",
                        children: String(index).padStart(2, "0")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-col mt-auto space-y-4 pt-4 border-t border-rule text-ink-soft",
                children: group.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3 text-[13px] md:text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-ink",
                                        children: skill.label
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tabular-nums text-ink-mute",
                                        children: [
                                            skill.value,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                value: skill.value,
                                className: "h-2 rounded-full bg-ink/10"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, skill.label, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/expertise.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c1 = SkillCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Expertise");
__turbopack_context__.k.register(_c1, "SkillCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Education",
    ()=>Education
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/portfolio-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Education() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "education",
        className: "relative scroll-mt-20 py-24 md:py-36 border-t border-rule",
        "aria-labelledby": "education-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-editorial",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                        index: "05",
                        eyebrow: "Education",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Two degrees, two",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                    lineNumber: 28,
                                    columnNumber: 17
                                }, void 0),
                                "perspectives"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed",
                        children: "Formal CS training in India and the U.S.: a Bachelor in Bangalore and an MS at CSU Fullerton, paired with hands-on data engineering and teaching experience."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["education"].map((ed, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 0.1 + i * 0.1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "bg-paper-raised border border-rule rounded-2xl p-7 md:p-10 h-full flex flex-col group transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_16px_34px_-24px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.9)]",
                                "aria-labelledby": `edu-${ed.id}-inst`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono-label text-[10px] uppercase tracking-[0.22em] text-ink-soft",
                                                children: ed.current ? "In progress" : "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "numeral text-base text-ink-soft tabular-nums shrink-0",
                                                children: String(i + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono-label text-[10px] uppercase tracking-[0.22em] text-ink mb-3",
                                        children: ed.period
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        id: `edu-${ed.id}-inst`,
                                        className: "font-display text-2xl md:text-[1.85rem] text-ink font-medium leading-tight tracking-[-0.015em] mb-3",
                                        children: ed.institution
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-ink-soft mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-ink",
                                                children: ed.degree
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            " · ",
                                            ed.field
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    ed.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-ink-soft mt-auto pt-6 font-mono-label uppercase tracking-[0.18em] text-[10px]",
                                        children: ed.location
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        }, ed.id, false, {
                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/education.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Education;
var _c;
__turbopack_context__.k.register(_c, "Education");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/node_modules/motion/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/primitives.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/B_Portfolio-main/B_Portfolio/src/lib/portfolio-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Contact() {
    _s();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative scroll-mt-20 py-24 md:py-40 border-t border-rule section-invert paper-grain",
        "aria-labelledby": "contact-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-editorial relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-ink-mute mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "numeral text-sm tabular-nums",
                                children: "06"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": true,
                                className: "h-px w-8 bg-rule-strong"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow-parens",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.05,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "contact-heading",
                        className: "font-display italic font-normal text-ink-soft leading-[0.95] tracking-[-0.03em] text-[clamp(2.5rem,9vw,7rem)] max-w-5xl",
                        children: [
                            "Let's build something",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "not-italic font-medium text-ink",
                                children: "dependable"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.15,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed",
                        children: "Open to entry-level data engineering roles and collaborations. The fastest way to reach me is by email — I read every message."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.25,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}?subject=${encodeURIComponent("Data Engineering Role — Conversation")}`,
                                        className: "group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-paper transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Start a conversation"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                className: "transition-transform duration-300 group-hover:translate-x-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 16 16",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 8h6m0 0L8 5m3 3L8 11",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-ink-soft",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative flex h-1.5 w-1.5",
                                                "aria-hidden": true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-ink"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono-label text-[10px] uppercase tracking-[0.22em]",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].availabilityNote
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                className: "link-editorial font-display text-2xl md:text-3xl text-ink font-medium self-start",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email,
                                    " ↗"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.35,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 border-t border-rule pt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow-parens",
                                        children: "Details"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-ink-soft leading-relaxed max-w-xs",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].positioning,
                                            " Currently based in ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow-parens",
                                        children: "Elsewhere"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-col gap-2.5",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].socials.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: s.href,
                                                    target: s.href.startsWith("http") ? "_blank" : undefined,
                                                    rel: s.href.startsWith("http") ? "noopener noreferrer" : undefined,
                                                    className: "group inline-flex items-baseline gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "link-editorial font-display text-lg text-ink font-medium",
                                                            children: s.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono-label text-[10px] text-ink-mute uppercase tracking-[0.18em]",
                                                            children: [
                                                                "↗ ",
                                                                s.handle
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            }, s.label, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow-parens",
                                        children: "Reach"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "font-mono-label text-[9px] uppercase tracking-[0.22em] text-ink-mute mb-0.5",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-base text-ink",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone.replace(/[^\d+]/g, "")}`,
                                                            className: "link-editorial",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "font-mono-label text-[9px] uppercase tracking-[0.22em] text-ink-mute mb-0.5",
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-base text-ink",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "font-mono-label text-[9px] uppercase tracking-[0.22em] text-ink-mute mb-0.5",
                                                        children: "Availability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-base text-ink",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].availability
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$src$2f$components$2f$portfolio$2f$primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.45,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        initial: reduced ? false : {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 1.2,
                            delay: 0.2
                        },
                        className: "mt-24 md:mt-32 pt-10 border-t border-rule flex flex-col md:flex-row md:items-end md:justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-[clamp(3rem,14vw,11rem)] leading-[0.85] text-ink font-medium tracking-[-0.04em]",
                                children: "Bhavana."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:items-end gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#intro",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            window.scrollTo({
                                                top: 0,
                                                behavior: reduced ? "auto" : "smooth"
                                            });
                                        },
                                        className: "link-editorial font-mono-label text-[10px] uppercase tracking-[0.22em] text-ink-mute hover:text-ink transition-colors",
                                        children: "Back to top ↑"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono-label text-[10px] uppercase tracking-[0.22em] text-ink-mute md:text-right",
                                        children: [
                                            "© 2026 — Bhavana Sudhakar Athavane",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            "Designed & built with care."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/B_Portfolio-main/B_Portfolio/src/components/portfolio/contact.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Contact, "/JSVQSdN2dVjcj5yyuX/KnOybKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$B_Portfolio$2d$main$2f$B_Portfolio$2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_B_Portfolio-main_B_Portfolio_src_4ca0f35f._.js.map