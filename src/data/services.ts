import { ServicePillar } from "@/types";

export const servicesData: ServicePillar[] = [
  {
    slug: "business-automation",
    route: "/services/business-automation",
    title: "Business Automation & AI",
    shortDescription:
      "Eliminate repetitive manual tasks, bridge fragmented SaaS tools, and streamline core business workflows with dependable engineering.",
    headline: "Less Manual Work. Better Business Operations.",
    summary:
      "When businesses scale, team members often become human copy-paste bridges between email inboxes, spreadsheets, accounting software, and CRMs. We replace brittle manual handoffs with resilient, monitored automations and practical AI extraction.",
    illustrationPath: "/illustrations/business-automation.svg",
    problems: [
      {
        title: "Disorganized Inbound Inquiries & Lost Leads",
        description:
          "Prospective leads and customer requests sit in shared inboxes or get manually copied into spreadsheets, resulting in slow follow-ups and missed revenue.",
      },
      {
        title: "Double Data Entry Across Unconnected Tools",
        description:
          "Teams retype the same invoice, customer, or candidate details into accounting, CRM, and internal databases, causing data divergence and preventable errors.",
      },
      {
        title: "Manual Document Parsing & Record Creation",
        description:
          "Valuable employee hours are spent opening attachments, reviewing PDFs, and manually inputting structured records into internal business software.",
      },
      {
        title: "Fragile 'No-Code' Webhooks That Silently Break",
        description:
          "Zaps or makeshift webhook scripts fail without alerts or retry buffers, leaving team members wondering where critical customer data disappeared.",
      },
    ],
    offerings: [
      {
        title: "Workflow & Pipeline Automation",
        description:
          "End-to-end automation of recurring operational processes with durable queues, idempotency safeguards, and audit logs.",
        capabilities: [
          "Custom API and webhook integrations",
          "Durable retries and dead-letter queues",
          "Automated status transitions & notification pipelines",
          "Two-way sync between accounting, CRM, and operations",
        ],
      },
      {
        title: "Intelligent Document & Data Extraction",
        description:
          "Practical AI extraction that converts unstructured email attachments, invoices, and resumes into clean, structured records.",
        capabilities: [
          "Strict JSON schema validation for LLM outputs",
          "PDF/DOCX layout parsing with OCR fallbacks",
          "Confidence scoring & human-in-the-loop review queues",
          "Deduplication and verifiable source provenance",
        ],
      },
      {
        title: "Cross-Platform System Integration",
        description:
          "Connect proprietary software with third-party ecosystems like Google Workspace, Microsoft 365, Slack, WhatsApp Business, and ERPs.",
        capabilities: [
          "OAuth 2.0 lifecycle & token refresh management",
          "Rate-limit safe incremental data sync",
          "Custom middle-tier transformation microservices",
          "Detailed transaction logging & health dashboards",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Workflow Discovery & Failure Audit",
        description:
          "We observe your team's manual steps, map data sources, and identify the exact points where human time is wasted or errors occur.",
      },
      {
        step: "02",
        title: "Architecture & Schema Mapping",
        description:
          "We design clean, normalized data contracts, error-handling protocols, and retry strategies before writing integration code.",
      },
      {
        step: "03",
        title: "Custom Build & Sandbox Verification",
        description:
          "We engineer automated pipelines with staging test cases that simulate provider outages, invalid inputs, and sudden payload spikes.",
      },
      {
        step: "04",
        title: "Monitored Deployment & Operational Handover",
        description:
          "We launch the pipeline with automated alert channels (Slack/Email), providing your team with complete documentation and runbooks.",
      },
    ],
    exampleApplications: [
      {
        title: "Multi-Source Recruitment & Resume Ingestion Engine",
        description:
          "Automated parser reading incoming candidate resumes from direct emails and forwarded recruiter notes, extracting structured skills and experience without manual entry.",
        tag: "HR Tech & Operations",
        illustrative: true,
      },
      {
        title: "B2B Order Dispatch & ERP Sync Pipeline",
        description:
          "Direct integration between Shopify B2B wholesale orders and legacy warehouse ERP, dispatching real-time stock levels and shipping tracking numbers.",
        tag: "Logistics & Supply Chain",
        illustrative: true,
      },
      {
        title: "Contract Lifecycle & Signature Milestone Tracker",
        description:
          "Automated pipeline syncing DocuSign webhook events with HubSpot and internal billing systems, triggering finance alerts upon execution.",
        tag: "Legal & Finance",
        illustrative: true,
      },
    ],
    kartgenApproach: [
      {
        title: "Resilience Over Fragile Shortcuts",
        description:
          "We treat external APIs as unreliable by default. Every integration includes backoff retries, rate-limit awareness, and idempotency keys to prevent duplicate transactions.",
      },
      {
        title: "Honest Scope & No 'AI Magic' Claims",
        description:
          "We use AI where probabilistic extraction makes sense, paired with deterministic schema validation and review queues for ambiguous edge cases.",
      },
      {
        title: "You Own the Infrastructure & Code",
        description:
          "No proprietary vendor lock-in. All automation pipelines are deployed inside your own cloud accounts or servers with clean, readable source code.",
      },
    ],
    faqs: [
      {
        question: "How do you prevent duplicate records when integrating systems?",
        answer:
          "We enforce unique transactional idempotency keys and content hashes (such as SHA-256 for documents and unique provider event IDs for webhooks). Even if an external provider redelivers a webhook five times, our system executes the action exactly once.",
      },
      {
        question: "What happens if an external SaaS API goes down or changes?",
        answer:
          "Our pipelines buffer events in durable message queues with exponential backoff retries. If an API remains offline past SLA thresholds, an alert is dispatched to an operations channel with diagnostic logs, ensuring zero data loss.",
      },
      {
        question: "Can we review AI-extracted data before it enters our database?",
        answer:
          "Yes. For any field with ambiguous extraction or low confidence, we route the item to an exception review queue where an authorized human operator can verify or correct the record with one click.",
      },
      {
        question: "Do we need enterprise licenses for Zapier or Make?",
        answer:
          "Not necessarily. While we can work with existing no-code tools when requested, we specialize in building lightweight, serverless, or Dockerized micro-services that eliminate expensive recurring third-party task-tier subscriptions.",
      },
    ],
  },
  {
    slug: "websites-digital-platforms",
    route: "/services/websites-digital-platforms",
    title: "Websites & Digital Platforms",
    shortDescription:
      "Bespoke corporate websites, web applications, and customer portals engineered for fast load speeds, accessibility, and clear conversion.",
    headline: "Digital Experiences Built Around Your Business.",
    summary:
      "A website is often the first commercial interaction a customer has with your business. We engineer custom digital platforms that communicate your value proposition clearly, load instantly on any device, and convert qualified interest without template bloat.",
    illustrationPath: "/illustrations/digital-platforms.svg",
    problems: [
      {
        title: "Bloated, Sluggish Theme Templates",
        description:
          "Heavy page-builder themes with dozens of conflicting plugins cause 4+ second load times, high bounce rates, and frequent security vulnerabilities.",
      },
      {
        title: "Generic 'Agency AI' Look & Vague Messaging",
        description:
          "Websites filled with interchangeable stock photos, tech jargon, and floating animations that fail to articulate what the business actually delivers.",
      },
      {
        title: "Poor Mobile Experience & Broken Interactions",
        description:
          "Desktop-first layouts that break on mobile viewports, feature frustrating navigation, or have sluggish forms that turn away mobile prospects.",
      },
      {
        title: "High Maintenance Costs for Minor Content Edits",
        description:
          "Codebases so brittle that changing a headline or adding a team member requires hiring an expensive agency for days of work.",
      },
    ],
    offerings: [
      {
        title: "Corporate & B2B Company Websites",
        description:
          "Authoritative, responsive websites built with modern frameworks that establish credibility and communicate complex B2B offerings clearly.",
        capabilities: [
          "Bespoke component design system (Tailwind & TypeScript)",
          "Sub-second load times and Core Web Vitals optimization",
          "Accessible semantic HTML (WCAG AA compliance)",
          "Modular content structure for effortless updates",
        ],
      },
      {
        title: "Customer Portals & Web Applications",
        description:
          "Interactive browser-based platforms and dashboards that give your clients self-service access to documents, status, and services.",
        capabilities: [
          "Secure authentication and role-based access control",
          "Responsive data tables, filtering, and export capabilities",
          "Interactive dashboard widgets and clean visual states",
          "REST and GraphQL API client architectures",
        ],
      },
      {
        title: "Landing Pages & Conversion Optimization",
        description:
          "High-impact, focused campaign pages built for specific product launches, service offerings, or marketing initiatives.",
        capabilities: [
          "Message-first layout hierarchy and focused value hooks",
          "Lightweight client-side validation and feedback states",
          "Device-responsive breakpoints tested down to 360px",
          "Zero third-party script bloat",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Information Architecture & Content Framing",
        description:
          "We structure your website around what your target customer needs to understand, eliminating fluff and organizing services logically.",
      },
      {
        step: "02",
        title: "Design System & Responsive Prototyping",
        description:
          "We define cohesive brand tokens (colors, typography, spacing, component scales) and prototype key interactive screens.",
      },
      {
        step: "03",
        title: "Component-Driven Clean Code Construction",
        description:
          "We build with modern frameworks (React / Next.js / TypeScript) with semantic HTML, zero bloat, and full keyboard navigation.",
      },
      {
        step: "04",
        title: "Performance, Cross-Browser & a11y Audit",
        description:
          "We benchmark performance on throttled mobile connections, test on Safari/Chrome/Firefox, and verify accessibility compliance.",
      },
    ],
    exampleApplications: [
      {
        title: "Industrial Equipment Manufacturer Corporate Portal",
        description:
          "High-performance catalog site featuring 400+ technical specs, downloadable CAD documentation, and inquiry request generator.",
        tag: "Manufacturing & B2B",
        illustrative: true,
      },
      {
        title: "Healthcare Diagnostics Client Results Portal",
        description:
          "Secure, HIPAA-conscious web application allowing patients and partner clinics to view authenticated lab reports on mobile devices.",
        tag: "HealthTech & MedTech",
        illustrative: true,
      },
      {
        title: "SaaS Product Onboarding & Documentation Hub",
        description:
          "Lightning-fast static documentation and product tour portal with full-text client-side search and interactive API code snippets.",
        tag: "Developer Tools & SaaS",
        illustrative: true,
      },
    ],
    kartgenApproach: [
      {
        title: "Content & Clarity First",
        description:
          "We never start with dummy 'Lorem Ipsum' or flashy animations. Visual design exists to make your business proposition obvious, compelling, and easy to read.",
      },
      {
        title: "Speed as a Feature",
        description:
          "Every millisecond of load time impacts user perception and conversion. We avoid heavy script bundles, unoptimized media, and unnecessary libraries.",
      },
      {
        title: "Accessible & Maintainable by Design",
        description:
          "We build with standard, readable TypeScript and component libraries that your internal team or any competent developer can maintain without confusion.",
      },
    ],
    faqs: [
      {
        question: "Do you use generic WordPress themes or page builders?",
        answer:
          "No. We build custom frontends using modern component-driven architectures (like Next.js, React, and Tailwind CSS). This gives you superior speed, clean security, and a bespoke brand presentation that cannot be replicated with generic templates.",
      },
      {
        question: "Can our team update text and content without hiring a developer?",
        answer:
          "Yes. We structure content cleanly in modular data files or can integrate with modern headless CMS platforms (such as Strapi or Sanity) based on your team's workflow requirements.",
      },
      {
        question: "How do you ensure the website looks great on all mobile screens?",
        answer:
          "We design and test across real viewport widths (from compact 360px phones to large 1440px+ 4K monitors), ensuring typography scales fluidly, touch targets meet 44px minimums, and navigation feels natural on mobile.",
      },
      {
        question: "What is your standard project timeline?",
        answer:
          "A tailored 5–8 page corporate digital platform typically takes 3 to 5 weeks from initial architecture discovery to final verified deployment.",
      },
    ],
  },
  {
    slug: "cloud-technology-optimization",
    route: "/services/cloud-technology-optimization",
    title: "Cloud & Technology Optimization",
    shortDescription:
      "Right-size infrastructure, eliminate cloud waste, modernize server architectures, and establish resilient deployment workflows.",
    headline: "Make Your Technology Work Smarter.",
    summary:
      "Many growing businesses find their monthly cloud bills ballooning while application response times degrade. We audit infrastructure, identify operational bottlenecks, and implement pragmatic, cost-effective cloud architectures.",
    illustrationPath: "/illustrations/cloud-optimization.svg",
    problems: [
      {
        title: "Runaway, Unmonitored Cloud Invoices",
        description:
          "Over-provisioned AWS/Azure instances, idle development databases, and forgotten snapshot storage inflate monthly operating expenses without delivering value.",
      },
      {
        title: "Premature Complexity & Microservice Sprawl",
        description:
          "Small teams struggling to maintain complex Kubernetes clusters or multi-region setups that could run faster, cheaper, and more reliably on simpler architectures.",
      },
      {
        title: "Fragile Deployment & 'Works on My Machine' Issues",
        description:
          "Manual SSH deployments and inconsistent server environments leading to frequent downtime during updates and high deployment anxiety.",
      },
      {
        title: "Slow Database Queries & Uncached Endpoints",
        description:
          "Server resources max out during traffic spikes because database queries lack proper indexes, connections are exhausted, and static assets aren't cached.",
      },
    ],
    offerings: [
      {
        title: "Cloud Architecture Audit & Right-Sizing",
        description:
          "Comprehensive review of active cloud resources, storage lifecycles, and instance utilization to eliminate unnecessary monthly waste.",
        capabilities: [
          "Detailed infrastructure cost vs. utilization breakdown",
          "Right-sizing EC2/Compute Engine instances and databases",
          "Automated cold storage lifecycle rules (S3 / Blob Storage)",
          "Reserved instance & savings plan recommendations",
        ],
      },
      {
        title: "VPS Migration & Container Modernization",
        description:
          "Package applications cleanly with Docker and migrate from costly proprietary platforms to economical, high-performance dedicated VPS servers.",
        capabilities: [
          "Docker containerization & multi-stage builds",
          "Zero-downtime reverse proxy configuration (Nginx / Caddy)",
          "Automated SSL/TLS certificate renewal",
          "Isolated staging and production environments",
        ],
      },
      {
        title: "CI/CD Automation & Database Health",
        description:
          "Streamline deployments with automated testing pipelines, managed backups, and database index optimization.",
        capabilities: [
          "GitHub Actions / GitLab CI automated build & test",
          "PostgreSQL / MySQL query indexing and connection pooling",
          "Redis caching layers for high-frequency queries",
          "Automated off-site database backups & disaster recovery drills",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure & Cost Inspection",
        description:
          "We analyze your existing cloud bills, server metrics, database slow-query logs, and deployment scripts to map current technical debt.",
      },
      {
        step: "02",
        title: "Practical Architecture Recommendation",
        description:
          "We propose an optimized architecture plan showing estimated monthly savings, expected latency improvements, and migration milestones.",
      },
      {
        step: "03",
        title: "Containerization & Staging Verification",
        description:
          "We dockerize services, configure automated CI/CD, and benchmark performance in an isolated staging environment before touching production.",
      },
      {
        step: "04",
        title: "Cutover, Monitoring & Disaster Drills",
        description:
          "We execute a controlled cutover with automated uptime alerts, log aggregation, and verified database backup restoration procedures.",
      },
    ],
    exampleApplications: [
      {
        title: "Enterprise SaaS AWS Infrastructure Right-Sizing",
        description:
          "Consolidated 14 over-provisioned EC2 instances into optimized containerized workloads behind CloudFront, reducing monthly cloud spend by 42%.",
        tag: "Cloud FinOps",
        illustrative: true,
      },
      {
        title: "PostgreSQL Database Performance Tuning",
        description:
          "Analyzed query execution plans, restructured composite indexes, and implemented PgBouncer connection pooling, bringing p95 API query latency down from 1.4s to 120ms.",
        tag: "Database Engineering",
        illustrative: true,
      },
      {
        title: "Zero-Downtime Automated CI/CD Pipeline Migration",
        description:
          "Replaced manual FTP/SSH uploads with automated GitHub Actions workflow deploying verified Docker containers to Hetzner cloud servers.",
        tag: "DevOps & CI/CD",
        illustrative: true,
      },
    ],
    kartgenApproach: [
      {
        title: "Frugal, Pragmatic Architecture",
        description:
          "We don't recommend hyper-complex architectures just because they're trending on social media. We pick the simplest, most stable infrastructure that handles your actual business load.",
      },
      {
        title: "Security & Backup Defensibility",
        description:
          "No system is finished without automated daily backups, encrypted secrets, and tested restore procedures. We build infrastructure you can sleep soundly with.",
      },
      {
        title: "Transparent Metrics & Clear Runbooks",
        description:
          "We provide clear, human-readable documentation detailing how your servers are configured, how deployments run, and how to scale when traffic increases.",
      },
    ],
    faqs: [
      {
        question: "Can we reduce our AWS or Azure bill without rewriting our application?",
        answer:
          "Yes. A significant portion of cloud waste comes from over-provisioned instance sizes, unattached EBS volumes, unindexed database queries requiring massive compute, and lack of storage lifecycle tiers. We can often achieve substantial savings without touching application logic.",
      },
      {
        question: "Is moving to a VPS or bare-metal server reliable for a production business?",
        answer:
          "Modern European and US VPS providers (like Hetzner, OVH, or Linode) offer enterprise-grade 99.9% uptime at a fraction of hyperscaler prices. Paired with Docker, automated backups, and Cloudflare CDN, a VPS is frequently more stable and significantly faster for typical business traffic than an under-sized managed cloud tier.",
      },
      {
        question: "Will our service experience downtime during the migration?",
        answer:
          "We plan migrations with parallel environments and DNS cutovers. Your existing system stays live while the new architecture is fully provisioned and verified, resulting in minimal or zero scheduled downtime.",
      },
      {
        question: "Do you provide ongoing server maintenance?",
        answer:
          "We provide both one-off architecture optimization sprints and ongoing retained support for infrastructure monitoring, security patching, and disaster recovery verification.",
      },
    ],
  },
];
