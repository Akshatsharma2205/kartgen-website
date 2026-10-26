import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "hireflow-ai-ingestion",
    title: "Dual-Channel Candidate Ingestion & Resume Extraction Engine",
    category: "Business Automation & AI",
    categorySlug: "business-automation",
    summary:
      "An automated recruitment intake platform that intercepts inbound candidate resumes from direct and forwarded mail, extracting structured skills and experience without manual entry.",
    businessProblem:
      "A fast-growing company's hiring inbox received hundreds of resumes per week. Resumes were missed in forwarded email threads, duplicated across agencies, and manually re-typed into spreadsheets, causing days of recruitment delay.",
    solutionDelivered:
      "Engineered an asynchronous ingestion pipeline with SHA-256 document deduplication, layout-aware PDF extraction, strict JSON schema validation, and an indexed candidate search dashboard with on-demand pre-signed document viewing.",
    outcomes: [
      "Zero manual data entry from email attachments",
      "Immediate search across skills and validated experience",
      "Historical version tracking preventing stale data overwrites",
      "Sub-300ms candidate search across thousands of indexed profiles",
    ],
    technologies: ["TypeScript", "Next.js", "Python / FastAPI", "PostgreSQL", "AWS S3", "Docker"],
    illustrative: true,
    statusLabel: "Demonstration Architecture",
  },
  {
    id: "industrial-equipment-portal",
    title: "B2B Precision Engineering Product Catalog & Inquiry Platform",
    category: "Websites & Digital Platforms",
    categorySlug: "websites-digital-platforms",
    summary:
      "A bespoke, high-performance digital catalog for an industrial manufacturing business, replacing a 6-year-old sluggish PDF download site with an interactive spec explorer.",
    businessProblem:
      "The client's legacy WordPress site took 5.2 seconds to load, suffered from broken mobile layouts, and buried critical engineering CAD schematics behind confusing multi-tier navigation.",
    solutionDelivered:
      "Constructed a clean, component-driven web platform using Next.js and Tailwind CSS with sub-800ms page loads, responsive parametric filtering across 250+ machine parts, and an instant RFQ (Request for Quote) generator.",
    outcomes: [
      "Sub-second load times across 3G mobile networks",
      "100% WCAG AA accessibility compliance",
      "Mobile quote inquiry abandonment reduced significantly",
      "Modular design system enabling effortless product additions",
    ],
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vercel"],
    illustrative: true,
    statusLabel: "Illustrative Concept",
  },
  {
    id: "finops-infrastructure-optimization",
    title: "Cloud Infrastructure Audit & Containerized Migration",
    category: "Cloud & Technology Optimization",
    categorySlug: "cloud-technology-optimization",
    summary:
      "Right-sizing an over-engineered cloud architecture, consolidating 12 idle cloud instances into containerized workloads and slashing recurring infrastructure expenses.",
    businessProblem:
      "A B2B SaaS startup was spending upwards of $3,800/month on AWS due to oversized development databases, unattached elastic block stores, and an unnecessarily complex Kubernetes cluster for modest traffic.",
    solutionDelivered:
      "Audited cloud telemetry, containerized core applications into streamlined Docker images, migrated staging environments to dedicated VPS nodes, and configured automated GitHub Actions deployment pipelines with zero-downtime reverse proxies.",
    outcomes: [
      "46% reduction in recurring monthly infrastructure spend",
      "Automated push-to-deploy CI/CD eliminating manual SSH steps",
      "PostgreSQL p95 query latency reduced by 70% with composite indexing",
      "Automated encrypted daily off-site backups with verified recovery drills",
    ],
    technologies: ["AWS (EC2, S3, RDS)", "Docker", "Nginx", "GitHub Actions", "PostgreSQL", "Hetzner Cloud"],
    illustrative: true,
    statusLabel: "Illustrative Concept",
  },
  {
    id: "logistics-dispatch-sync",
    title: "Automated Supply Chain Order & Warehouse ERP Synchronization",
    category: "Business Automation & AI",
    categorySlug: "business-automation",
    summary:
      "Two-way synchronization pipeline connecting multi-channel e-commerce storefronts with warehouse inventory management systems.",
    businessProblem:
      "Warehouse staff spent 3 hours every morning manually downloading CSV spreadsheets from separate sales channels and manually keying order line items into their on-premise ERP.",
    solutionDelivered:
      "Built a resilient event-driven middleware service using transactional outboxes and queues with exponential backoff retries, reconciling stock discrepancies and posting real-time tracking numbers automatically.",
    outcomes: [
      "Eliminated 15+ hours of weekly manual spreadsheet manipulation",
      "Near zero order dispatch delays or out-of-stock overselling",
      "Built-in Slack alerting for invalid customer address formats",
      "Complete transaction audit log with 90-day searchability",
    ],
    technologies: ["Node.js", "TypeScript", "Redis Queues", "PostgreSQL", "REST APIs", "Docker"],
    illustrative: true,
    statusLabel: "Illustrative Concept",
  },
  {
    id: "healthtech-results-platform",
    title: "Secure Medical Diagnostic Reports & Appointment Booking Portal",
    category: "Websites & Digital Platforms",
    categorySlug: "websites-digital-platforms",
    summary:
      "A patient-friendly web application allowing clinic clients to securely verify diagnostic lab results and schedule appointments with medical specialists.",
    businessProblem:
      "Patients frequently called clinic receptionists to ask for email delivery of PDF test results, overwhelming phone lines and risking unauthorized email dispatches.",
    solutionDelivered:
      "Designed and engineered an intuitive, mobile-optimized patient portal with OTP-based verification, responsive report viewing, and clear consultation scheduling.",
    outcomes: [
      "Over 65% of test results accessed directly by patients on mobile",
      "Drastic reduction in routine phone calls to clinic front desk",
      "Clean, high-contrast typography accessible to senior patients",
      "Zero third-party tracking scripts ensuring strict privacy",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    illustrative: true,
    statusLabel: "Demonstration Concept",
  },
  {
    id: "database-reliability-tuning",
    title: "High-Traffic E-Commerce Database Optimization & Query Tuning",
    category: "Cloud & Technology Optimization",
    categorySlug: "cloud-technology-optimization",
    summary:
      "Pinpointing slow relational database queries, restructuring connection pools, and implementing memory caching to withstand seasonal traffic spikes.",
    businessProblem:
      "During flash sales, database connection timeouts and unindexed table scans caused the checkout flow to crash, resulting in abandoned shopping carts and lost customer goodwill.",
    solutionDelivered:
      "Conducted deep PostgreSQL query profiling, eliminated N+1 database roundtrips, added targeted partial and composite indexes, and placed a Redis caching layer ahead of read-heavy product catalog endpoints.",
    outcomes: [
      "Checkout API latency dropped from 2,800ms to 95ms under peak load",
      "Zero server downtime during major holiday promotions",
      "Prevented expensive emergency database hardware tier upgrades",
      "Configured automated Slow Query alerts dispatched to Slack",
    ],
    technologies: ["PostgreSQL", "Redis", "PgBouncer", "Grafana", "Linux"],
    illustrative: true,
    statusLabel: "Illustrative Concept",
  },
];
