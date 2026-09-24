export const personal = {
  name: "Prabhath Vinay Vipparthi",
  firstName: "Prabhath",
  lastName: "Vipparthi",
  role: "Data Scientist & AI Engineer",
  tagline: "Think in data. Ship systems that explain themselves.",
  location: "Harrison, NJ",
  email: "vipparthi.prabhathvinay23@gmail.com",
  phone: "973-418-9427",
  linkedin: "https://www.linkedin.com/in/prabhath-vipparthi-90544b225",
  linkedinLabel: "in/prabhath-vipparthi",
  github: "https://github.com/prabhathv07",
  githubLabel: "@prabhathv07",
  status: "Available immediately · Onsite · Hybrid · Remote · Anywhere in the US",
};

export const heroBio =
  "Data Scientist and AI Engineer with 4 years of experience at Scale AI and HCL Tech. MS Data Science, NJIT (GPA 3.7, May 2026). I work end-to-end — production ML pipelines, NLP systems, RAG over pgvector, distributed data engineering over millions of rows, and models with clear SHAP explanations. I care about the math, the tests, and shipping work that holds up.";

export const heroNote =
  "Actively seeking full-time Data Scientist, AI Engineer, and ML Engineer roles. Onsite, hybrid, or remote — anywhere in the US.";

export const stats = [
  {
    value: "5.97M",
    label: "Records processed",
    note: "NYC TLC trip data · medallion architecture",
  },
  {
    value: "700+",
    label: "Automated tests",
    note: "Unit, integration, and end-to-end coverage",
  },
  {
    value: "~130",
    label: "Symbols / day",
    note: "FinSight pre-market briefing pipeline",
  },
  {
    value: "8",
    label: "Projects shipped",
    note: "Analytics, ML, data engineering, and AI",
  },
];

export const summary =
  "I'm Prabhath Vinay Vipparthi, a Data Scientist and AI Engineer with 4 years of experience across Scale AI and HCL Tech. MS Data Science from NJIT (GPA 3.7, May 2026). I work across the full data stack — building production ML pipelines, NLP systems, and RAG-powered platforms at Scale AI; enterprise churn modeling and forecasting at HCL Tech; and personal projects spanning 5.97M-row medallion pipelines, statistical experiments on real e-commerce data, and distributed Hadoop analytics. I care about doing things properly — the math, the tests, and models that don't just score well but tell you why they made the call.";

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  href?: string;
};

export const experiences: Experience[] = [
  {
    title: "Applied AI Engineer",
    company: "Scale AI",
    period: "Jan 2026 – Present",
    location: "United States",
    bullets: [
      "Built Python, SQL, and PySpark pipelines processing 10K+ records, cutting manual validation effort by 30%.",
      "Prepared training and evaluation datasets and engineered statistical and ML features (Pandas, NumPy, Scikit-learn) for automated anomaly and data-quality detection.",
      "Built classification models (Scikit-learn, PyTorch) with cross-validation, precision/recall analysis, and threshold tuning to improve minority-class detection.",
      "Integrated Hugging Face transformers and embeddings for text classification and semantic evaluation, reducing manual review activity by 25%.",
      "Implemented embedding-based retrieval workflows and Python REST APIs for similarity search and AI/LLM evaluation.",
      "Supported model deployment using MLflow, Docker, Kubernetes, Azure, and Databricks.",
      "Monitored model quality, data drift, latency, and pipeline failures; optimized PySpark workloads reducing processing time by 28%.",
      "Created Power BI dashboards tracking AI/ML performance, data-quality trends, and business KPIs.",
    ],
  },
  {
    title: "Data Scientist",
    company: "HCL Tech",
    period: "Jun 2021 – Jul 2024",
    location: "India",
    bullets: [
      "Partnered with enterprise business stakeholders to translate retention and growth objectives into churn and forecasting use cases.",
      "Conducted EDA and statistical analysis (Python, Pandas, NumPy, SQL) to uncover customer behavior patterns and key churn drivers.",
      "Engineered 30+ customer-level features (purchase frequency, recency, transaction value, engagement) for predictive modeling.",
      "Built and compared Logistic Regression, Random Forest, and Gradient Boosting classifiers with cross-validation and ROC-AUC, improving high-risk customer recall by 18%.",
      "Developed demand forecasting models reducing forecast error by ~15%, supporting operational planning.",
      "Processed 5K+ transaction records with PySpark and Databricks, cutting recurring batch runtime by 35%.",
      "Automated data and model workflows using Airflow, AWS, and MLflow; delivered Tableau dashboards covering churn segments, forecasts, and KPIs.",
    ],
  },
];

export type CaseStudy = {
  problem: string;
  architecture: string[];
  solution: string[];
  results: string[];
};

export type Project = {
  number: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  footer: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "AI Digital Badge Classification — NJIT LDI Capstone",
    category: "NLP / AI Systems",
    tag: "Featured · Production",
    description:
      "Production AI-assisted classification system automating NJIT's institutional taxonomy across 3 dimensions, validated on 20 real-world held-out submissions with 100% accuracy. Built a 4-layer text extraction pipeline — 130+ lexicon phrase patterns, 44 regex rules, spaCy Bloom's taxonomy matcher, and an LLM stub — handling OBv3 JSON, guided forms, and free-text inputs. Implemented a deterministic 3-stage rule engine (19 rules) with immutable audit logs, plain-English decision explanations, and human-in-the-loop override workflows.",
    stack: ["FastAPI", "spaCy", "React / Vite", "SQLite", "Python", "GitHub Actions"],
    metrics: [
      { label: "Accuracy", value: "100%" },
      { label: "Tests", value: "351 passing" },
      { label: "Pipeline layers", value: "4" },
      { label: "Rules", value: "19" },
    ],
    footer: "351-test suite · 100% accuracy on held-out set",
    github: "https://github.com/prabhathv07/AI_Digital_Badge_Classification",
    featured: true,
    caseStudy: {
      problem:
        "NJIT's LDI team was manually classifying every micro-credential submission against a 3-dimension institutional taxonomy — subject area, learning outcome type, and Bloom's level. Slow, inconsistent between reviewers, and impossible to audit six months later. They needed AI-assist, not AI-replace: fast enough to help, transparent enough to challenge.",
      architecture: [
        "Ingest layer accepts OBv3 JSON, guided form submissions, and free-text uploads through FastAPI endpoints",
        "4-layer text extraction: 130+ lexicon phrase patterns → 44 regex rules → spaCy Bloom's taxonomy matcher → LLM stub",
        "3-stage deterministic rule engine (19 rules total) maps extracted signals to taxonomy dimensions",
        "Every decision written to an immutable audit log with plain-English rationale",
        "React/Vite reviewer UI for human-in-the-loop overrides; SQLite persistence; GitHub Actions CI",
      ],
      solution: [
        "Chose deterministic rules over end-to-end LLM for the classification core so every prediction is inspectable and reproducible",
        "Kept the LLM stub as a fallback for edge cases the rules don't cover — never as the primary path",
        "Built the audit log first, before the models, because that's what the compliance team needed to sign off",
        "351-test suite covering unit, integration, and end-to-end paths — every rule change re-validates against a held-out set",
      ],
      results: [
        "100% accuracy on 20 real-world held-out submissions across all three dimensions",
        "Every classification comes with a decision trace a non-technical reviewer can read",
        "Human override workflow captured so future model iterations learn from corrections",
      ],
    },
  },
  {
    number: "02",
    title: "FinSight — Pre-Market Intelligence Platform",
    category: "AI / RAG",
    tag: "Featured · Production",
    description:
      "Production pre-market briefing system that runs every weekday morning. Ingests ~130 symbols, computes RSI and moving-average indicators, generates commentary with Gemini 2.5 Flash, stores everything in Postgres with pgvector, and emails confirmed subscribers via Resend. A retrieval-augmented Q&A layer answers plain-English questions over the full briefing history with inline date citations.",
    stack: [
      "FastAPI",
      "PostgreSQL · pgvector",
      "Gemini 2.5 Flash",
      "RAG",
      "GitHub Actions",
      "Render · Resend",
    ],
    metrics: [
      { label: "Symbols", value: "~130 / day" },
      { label: "Tests", value: "68 passing" },
      { label: "LLM", value: "Gemini 2.5" },
      { label: "Vector store", value: "pgvector" },
    ],
    footer: "Live on Render",
    github: "https://github.com/prabhathv07/finsight",
    featured: true,
    caseStudy: {
      problem:
        "I wanted a pre-market brief that read like it was written for me — not a generic newsletter. Something that ingested my watchlist every morning, computed the indicators I actually use (RSI, moving averages), and turned raw numbers into a paragraph of context. And it had to be cheap to run, because I wasn't paying $50/month for it.",
      architecture: [
        "GitHub Actions cron triggers weekday morning at market open",
        "FastAPI service pulls ~130 symbols, computes RSI + moving-average indicators",
        "Gemini 2.5 Flash generates per-symbol commentary from the indicator payload",
        "Everything persists to PostgreSQL with pgvector — briefings, embeddings, subscriber list",
        "Resend delivers email to confirmed subscribers",
        "Separate RAG endpoint: user question → embed → pgvector similarity search → cited answer",
      ],
      solution: [
        "Chose Gemini 2.5 Flash over larger models — cheaper, fast enough for the batch, quality was fine for structured commentary",
        "pgvector instead of a dedicated vector DB — one Postgres, one connection pool, one thing to monitor",
        "Confirmed opt-in only. No spam list, no scraping — real subscribers with an unsubscribe link",
        "Inline date citations on RAG answers so users can trace claims back to specific briefings",
      ],
      results: [
        "Running every weekday since launch, ~130 symbols per run, live on Render",
        "68 automated tests covering the ingest → commentary → email pipeline",
        "RAG layer answers plain-English questions over the full briefing history",
      ],
    },
  },
  {
    number: "03",
    title: "StarCoder2 Self-Alignment Pipeline",
    category: "LLM Alignment",
    tag: "Featured · Research",
    description:
      "Implemented the SelfOSSInstruct methodology from the StarCoder2 paper to generate a TypeScript instruction-tuning dataset. Extracted functions from The Stack v2 using tree-sitter AST parsing and TypeScript compiler type-checking, then ran an S→C→I→R chain (Seed → Concepts → Instructions → Responses) via StarCoder2-3B on a T4 GPU. Produced 448 complete instruction-response pairs from 5,791 type-checked seeds. Filtered final outputs with model-based quality scoring.",
    stack: [
      "vLLM",
      "Hugging Face",
      "tree-sitter",
      "StarCoder2-3B",
      "Arrow / Datasets",
      "Python",
    ],
    metrics: [
      { label: "Quality seeds", value: "5,791" },
      { label: "Raw files", value: "30,000" },
      { label: "Pairs", value: "448" },
      { label: "Inference", value: "vLLM · bs 32" },
    ],
    footer: "30k files → 5,791 seeds → 448 pairs",
    github: "https://github.com/prabhathv07/StarCoder2-Self-Alignment-Pipeline",
    featured: true,
    caseStudy: {
      problem:
        "The StarCoder2 paper describes SelfOSSInstruct — using a model to bootstrap its own instruction-tuning dataset from raw source code. I wanted to reproduce it end-to-end for TypeScript on modest hardware (single T4 GPU), and understand what actually holds the pipeline together vs. what the paper glosses over.",
      architecture: [
        "The Stack v2 as raw source: 30,000 TypeScript files sampled",
        "tree-sitter AST parser extracts individual function definitions",
        "TypeScript compiler type-checks each function — only type-safe seeds survive (5,791 remain)",
        "S→C→I→R chain: Seed → Concepts → Instructions → Responses, each stage a separate vLLM inference batch",
        "StarCoder2-3B running via vLLM (batch size 32) for throughput on the T4",
        "Model-based quality filter on final pairs — 448 kept from the raw generation",
      ],
      solution: [
        "Chose type-checking as the seed filter — cheap, deterministic, catches the noise before you spend GPU on it",
        "vLLM over vanilla transformers for the inference loop — 3× throughput on the same hardware",
        "Kept each pipeline stage independently resumable; a T4 crash at stage 3 doesn't re-run stages 1 and 2",
        "Model-based quality scoring so the final dataset filters itself rather than requiring manual review",
      ],
      results: [
        "448 complete instruction-response pairs from 5,791 type-checked seeds",
        "Full pipeline reproducible on a single T4 GPU (~$0.35/hour)",
        "Pattern generalizes to any typed language with an AST parser + type checker",
      ],
    },
  },
  {
    number: "04",
    title: "NYC Taxi Medallion Data Pipeline",
    category: "Data Engineering",
    tag: "Medallion Architecture",
    description:
      "End-to-end data engineering pipeline over 5.97M real NYC TLC Yellow Taxi trips (Jan–Feb 2024): raw Parquet → PySpark cleaning → dbt gold marts → 23 data-quality tests → daily Airflow DAG. Built on a DuckDB warehouse with a Streamlit dashboard layer. Analysis surfaced Manhattan as 75% of total revenue ($111.9M of $149.1M).",
    stack: ["PySpark", "dbt", "DuckDB", "Airflow", "Streamlit"],
    metrics: [
      { label: "Clean trips", value: "5.44M" },
      { label: "DQ tests", value: "23" },
      { label: "Revenue", value: "$149.1M" },
      { label: "Warehouse", value: "DuckDB" },
    ],
    footer: "5.97M rows · medallion architecture",
    github: "https://github.com/prabhathv07/nyc-taxi-pipeline",
    featured: true,
    caseStudy: {
      problem:
        "Two months of NYC TLC Yellow Taxi trips — 5.97M rows of real fleet data. The point wasn't the analysis (Manhattan makes most of the revenue, no surprise); it was building a pipeline that could actually be trusted. Something with tests, lineage, and a warehouse layer, not just a notebook full of pandas.",
      architecture: [
        "Bronze: raw Parquet files from TLC dropped into object storage",
        "Silver: PySpark cleaning — nulls, outliers, timezone alignment, fare validation",
        "Gold: dbt models building trip facts + zone dimensions, materialised to DuckDB",
        "23 dbt data-quality tests running as part of every build",
        "Airflow DAG orchestrates the whole thing on a daily schedule",
        "Streamlit dashboard reads directly from DuckDB for exploratory views",
      ],
      solution: [
        "Medallion architecture on purpose — makes each layer's contract obvious, and lets one layer break without corrupting the others",
        "DuckDB as the warehouse instead of Snowflake/BigQuery — this is a personal project, DuckDB is free and 10× fast enough for 5M rows",
        "dbt tests over hand-written SQL checks — declarative, self-documenting, break the build when they fail",
        "Airflow instead of cron so the DAG's failure modes are inspectable",
      ],
      results: [
        "5.44M clean trips after silver-layer filtering (out of 5.97M raw)",
        "23 data-quality tests pass on every daily run",
        "Manhattan drives 75% of total revenue ($111.9M of $149.1M)",
      ],
    },
  },
  {
    number: "05",
    title: "Olist SQL Analysis & Hypothesis Testing",
    category: "Analytics",
    tag: "Experimentation",
    description:
      "End-to-end SQL analysis on real Olist Brazilian e-commerce data (99,441 orders across 96,096 customers). Six DuckDB window-function queries power a monthly cohort retention matrix. A formal power analysis and two-proportion z-test confirmed a payment-method retention hypothesis as null (p = 0.76) with 80% statistical power on a 0.34 pp minimum detectable effect.",
    stack: ["DuckDB", "statsmodels", "scipy", "pandas", "Window functions"],
    metrics: [
      { label: "Customers", value: "96k" },
      { label: "p-value", value: "0.76" },
      { label: "MDE", value: "0.34 pp" },
      { label: "Power", value: "80%" },
    ],
    footer: "96k customers · 6 SQL queries",
    github: "https://github.com/prabhathv07/olist-sql-experimentation",
  },
  {
    number: "06",
    title: "Loan Approval Risk Prediction",
    category: "Machine Learning",
    tag: "Finance",
    description:
      "End-to-end classification pipeline on 20,000 loan applications (36 features, 76.1% rejection baseline). Applied SMOTE on training folds only to avoid data leakage. Compared 6 models — Logistic Regression, Decision Tree, Random Forest, SVM, KNN, and ANN — with GridSearchCV. SHAP identified CreditScore, AnnualIncome, and DebtToIncomeRatio as top predictors, packaged for compliance-ready reporting.",
    stack: ["SMOTE", "SHAP", "Scikit-learn", "TensorFlow", "GridSearchCV"],
    metrics: [
      { label: "Records", value: "20k" },
      { label: "Models", value: "6" },
      { label: "Features", value: "36" },
      { label: "Class imbalance", value: "76%" },
    ],
    footer: "76% rejection baseline · 6 models",
    github: "https://github.com/prabhathv07/Financial-Risk-Loan-Approval",
  },
  {
    number: "07",
    title: "Cryptocurrency Market Analysis on Hadoop",
    category: "Big Data",
    tag: "Distributed Systems",
    description:
      "Three distributed MapReduce jobs in Java analyzing 2 GB of historical OHLCV tick data across 100+ cryptocurrency pairs (Binance, Apr–Aug 2024) on a multi-node AWS EC2 Hadoop cluster. Jobs surface volatility rankings, worst-performing assets by open-to-close change, and cumulative volume leaders with peak timestamps.",
    stack: ["Hadoop", "MapReduce", "Java", "HDFS", "AWS EC2"],
    metrics: [
      { label: "Data", value: "2 GB" },
      { label: "Pairs", value: "100+" },
      { label: "MR jobs", value: "3" },
      { label: "Cluster", value: "Multi-node" },
    ],
    footer: "3 MR jobs · multi-node cluster",
    github: "https://github.com/prabhathv07/crypto-hadoop-analysis",
  },
  {
    number: "08",
    title: "User Management System",
    category: "Backend",
    tag: "DevOps · CI/CD",
    description:
      "FastAPI + PostgreSQL backend with JWT OAuth2 authentication, role-based access control (Admin, Manager, User), and profile-completion tracking. Diagnosed and resolved 5 critical production bugs across CI failures, unique-constraint violations, routing 404s, nested transaction errors, and mocking issues. Added 10 edge-case tests (138 passing) and shipped full CI/CD with GitHub Actions and Docker.",
    stack: ["FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "SQLAlchemy"],
    metrics: [
      { label: "Tests", value: "138" },
      { label: "Auth", value: "JWT OAuth2" },
      { label: "Roles", value: "3" },
      { label: "Bugs fixed", value: "5" },
    ],
    footer: "RBAC · 3 roles · JWT OAuth2",
    github: "https://github.com/prabhathv07/user_management",
  },
];

export const projectCategories = [
  "All",
  "AI & LLMs",
  "Machine Learning",
  "Data Engineering",
  "Analytics",
  "Backend",
] as const;

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "SQL", "TypeScript", "Java", "R"],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "vLLM",
      "spaCy",
      "SHAP",
      "SMOTE",
      "RAG",
      "Gemini",
    ],
  },
  {
    category: "Data & Pipelines",
    items: [
      "PySpark",
      "dbt",
      "Airflow",
      "DuckDB",
      "Databricks",
      "Hadoop",
      "MapReduce",
      "Pandas",
      "Tree-sitter",
    ],
  },
  {
    category: "MLOps & Cloud",
    items: [
      "MLflow",
      "Docker",
      "Kubernetes",
      "Azure",
      "AWS",
      "GitHub Actions",
      "Render",
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "SQLAlchemy",
      "React / Vite",
    ],
  },
  {
    category: "Analytics · Visualization",
    items: [
      "Streamlit",
      "Tableau",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "statsmodels",
      "scipy",
    ],
  },
  {
    category: "Tooling",
    items: ["Git", "Linux", "Jupyter", "pytest", "REST APIs"],
  },
];

export const education = [
  {
    degree: "Master of Science in Data Science",
    school: "New Jersey Institute of Technology · Ying Wu College of Computing",
    period: "Graduated May 2026 · Newark, NJ · GPA 3.7",
    detail: "Class of 2026",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  verify?: string;
  featured?: boolean;
  description?: string;
};

export const certifications: Certification[] = [
  {
    title: "AI Fluency for Builders",
    issuer: "Anthropic Education",
    date: "Jul 2026",
    verify: "https://verify.skilljar.com/c/v4retfah555v",
    description:
      "Covers how to design and build production-ready systems using Claude — prompt engineering, tool use, multi-step pipelines, and responsible deployment patterns.",
    featured: true,
  },
  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic Education",
    date: "Jul 2026",
    verify: "https://verify.skilljar.com/c/w7htfdpog5w3",
    description:
      "Hands-on course covering agentic AI design patterns, tool-calling, memory management, and orchestrating multi-step Claude agent workflows.",
    featured: true,
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Education",
    date: "Jul 2026",
    verify: "https://verify.skilljar.com/c/dkrh6ss5mx5b",
    description:
      "Core conceptual framework for understanding large language models, their capabilities and limitations, safety considerations, and effective evaluation strategies.",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic Education",
    date: "2026",
    description:
      "Practical course on using Claude Code for agentic software development — AI-assisted coding, project automation, and real-world engineering workflows.",
  },
  {
    title: "Claude Platform 101",
    issuer: "Anthropic Education",
    date: "2026",
    description:
      "Foundation course on the Claude API, platform capabilities, and building AI-powered applications on Anthropic's developer platform.",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI · Stanford · Andrew Ng",
    date: "Feb 2025 · Coursera",
    verify: "https://coursera.org/verify/66B4T6HFYKDC",
    description:
      "Covers linear and logistic regression, gradient descent, regularization, and neural network fundamentals — the core curriculum from the original Coursera Machine Learning course.",
    featured: true,
  },
  {
    title: "Google Cloud Network Engineer Professional",
    issuer: "Coursera",
    date: "Nov 2022",
    verify: "https://coursera.org/verify/professional-cert/JT4HRNA839CC",
  },
  {
    title: "AWS Cloud Virtual Internship",
    issuer: "AWS Academy · EduSkills · AICTE",
    date: "Oct — Dec 2021",
  },
  {
    title: "Salesforce Administrator Virtual Internship",
    issuer: "SmartInternz · AICTE",
    date: "Aug — Oct 2022",
    verify:
      "https://smartinternz.com/internships/salesforce_certificates/9d201c59e6aa7ee34e3f1e6e95669d02",
  },
];
