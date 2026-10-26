# Kartgen Infotech LLP Website
## AI Development Specification & Architecture

**Version:** 1.0  
**Project type:** Offline, frontend-only, multi-page static website  
**Purpose:** YouTube demonstration of AI-assisted website development  
**Visual direction:** Modern technology agency with a corporate, premium feel  
**Deployment:** Local development only

---

## 1. Project Brief

Build a polished, responsive, multi-page website for Kartgen Infotech LLP. It should look like a credible B2B technology consultancy, not a generic agency template.

The website should explain three service pillars:

1. **Business Automation & AI**
2. **Websites & Digital Platforms**
3. **Cloud & Technology Optimization**

The deliverable is a local frontend demonstration. It is not a production website and will not be hosted.

### Goals
- Explain what Kartgen does and the business problems it solves.
- Present three clear service categories.
- Demonstrate strong visual design and reusable frontend components.
- Provide complete page navigation and useful browser-side interactions.
- Work at desktop, tablet, and mobile sizes.
- Be straightforward for an AI coding tool to build and modify.

### Explicitly out of scope
Do not implement hosting, deployment, domain or DNS configuration, backend services, APIs, server actions, databases, CMS, authentication, analytics, search visibility work, email delivery, CRM integrations, external form processing, or production infrastructure.

Use semantic HTML and accessible markup as normal engineering practice, but do not add SEO or analytics projects to the scope.

---

## 2. Brand and Business Positioning

### Positioning statement
Kartgen Infotech helps businesses streamline operations, reduce technology overhead, and build better digital systems through business automation, web development, and technology optimization.

### Personality
Professional, practical, experienced, modern, business-focused, clear, and credible.

### Audience
SME owners, startup founders, business operators, service companies, and teams that need better digital platforms, simpler workflows, or more practical technology decisions.

### Copywriting rules
- Lead with business problems and outcomes.
- Explain technical work in plain language.
- Keep paragraphs concise.
- Avoid empty buzzwords and exaggerated promises.
- Do not invent clients, testimonials, certifications, metrics, awards, or results.
- Clearly label hypothetical portfolio items as “Illustrative Concept” or “Demonstration Example.”
- Do not invent contact details.

---

## 3. Service Pillars

### A. Business Automation & AI
Help businesses reduce repetitive work, connect business tools, improve lead handling, and make operational workflows more consistent.

Possible offerings: workflow automation, application integrations, lead-management workflows, follow-up reminders, notifications, data movement, AI-assisted workflows, and process assessment.

Suggested headline: **Less Manual Work. Better Business Operations.**

### B. Websites & Digital Platforms
Build professional websites and digital experiences that explain a business clearly and support its goals.

Possible offerings: corporate websites, startup websites, landing pages, web applications, customer-facing platforms, redesigns, usability improvements, and technical web consultation.

Suggested headline: **Digital Experiences Built Around Your Business.**

### C. Cloud & Technology Optimization
Help businesses make more practical infrastructure decisions, reduce unnecessary complexity, and evaluate technology overhead.

Possible offerings: cloud and hosting consultation, VPS planning, infrastructure cost assessment, stack evaluation, application optimization, technical troubleshooting, and modernization guidance.

Suggested headline: **Make Your Technology Work Smarter.**

Do not promise specific savings or performance improvements without evidence.

---

## 4. Information Architecture

Required pages:

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Introduce Kartgen and its value proposition |
| Services | `/services` | Overview of all service pillars |
| Business Automation & AI | `/services/business-automation` | Automation detail page |
| Websites & Digital Platforms | `/services/websites-digital-platforms` | Web development detail page |
| Cloud & Technology Optimization | `/services/cloud-technology-optimization` | Technology optimization detail page |
| About | `/about` | Company philosophy and approach |
| Work | `/work` | Projects or explicitly illustrative concepts |
| Contact | `/contact` | Contact options and optional demo form |

Navigation: Home, Services, Work, About, Contact. Services may have a dropdown for the three pillars. Main CTA: **Discuss a Project**, linking to `/contact`.

Footer: official logo asset, short company description, primary links, service links, approved contact details, and a simple copyright line.

Do not add optional blog or insights pages unless all required pages are complete and there is a clear demonstration benefit.

---

## 5. Homepage Specification

Build sections in this order:

1. **Header:** supplied logo, primary navigation, contact CTA, responsive mobile menu.
2. **Hero:** headline “Build Better Digital Systems. Eliminate Operational Friction.” Supporting copy: “Kartgen Infotech helps businesses simplify operations through practical automation, professional digital platforms, and smarter technology decisions.” Primary CTA “Discuss a Project”; secondary CTA “Explore Our Services.”
3. **Service pillars:** three cards with icon, title, concise description, examples, and links to detail pages.
4. **Business outcomes:** reduce repetitive work, improve digital experiences, simplify technology decisions, connect tools, build practical systems.
5. **Selected work:** actual work only where verified; otherwise use clearly labeled illustrative concepts.
6. **Working approach:** Understand → Plan → Build → Refine.
7. **Why Kartgen:** business problems before technology choices, practical scope, simplicity, maintainability, less operational friction.
8. **Final CTA:** “Let’s Make Your Business Systems Work Better.”
9. **Footer:** consistent site-wide footer.

Visuals must support the message rather than overpower it. Avoid stock-photo clichés, random floating icons, excessive glassmorphism, meaningless fake dashboard text, and decorative gradients everywhere.

---

## 6. Service Page Template

All three service pages should share a template while having distinct content.

Required sections:
1. Service hero and CTA.
2. Three to five business problems.
3. Service offerings.
4. How it works.
5. Example applications.
6. Kartgen’s approach.
7. Three to five FAQs.
8. Related services.
9. Final CTA.

Reuse layout and components, not identical copy. Each page needs service-specific problems, examples, FAQs, and visual accents.

---

## 7. About, Work, and Contact Pages

### About
Include an introduction, company overview, business problems addressed, working philosophy, service pillars, process, and CTA. Do not invent company history, team size, awards, certifications, milestones, or client counts.

### Work
Use project cards with title, category, summary, problem, solution, technologies if relevant, status/disclosure label, and optional local visual. Distinguish verified projects from illustrative concepts. Never fabricate client logos, testimonials, or results.

### Contact
Include an introduction, contact information if confirmed, and optionally a browser-only demonstration form with Name, Business Email, optional Company, Service of Interest, and Project Description.

If implemented, validate fields locally and display a clear message such as: “Demonstration complete. This form is not connected to a messaging service, so your information has not been sent.” Do not transmit or persist form data. A `mailto:` link is acceptable only when a verified email address is available.

---

## 8. Visual Design System

### Direction
Modern technology agency with a corporate, premium feel: confident typography, generous whitespace, restrained color, clean layouts, subtle depth, and purposeful visual elements.

### Design principles
- Clarity before decoration.
- Use whitespace deliberately.
- Use consistent components.
- Keep pages visually related without making them identical.
- Use gradients and shadows sparingly.
- Design responsively rather than shrinking desktop layouts.
- Avoid generic AI-template patterns.

### Color roles
Use the supplied logo as the source of truth for the exact brand colors.

| Role | Direction |
|---|---|
| Primary | Dark navy |
| Accent | Vivid blue |
| Main background | White / very light neutral |
| Alternate background | Cool light gray |
| Main text | Deep charcoal or navy |
| Secondary text | Muted slate |
| Borders | Light neutral gray |
| Dark feature section | Deep navy, used selectively |
| Success/error | Accessible green/red |

The provided CSS token starter is in `src/styles/design-tokens.css`. Adjust its values after inspecting the supplied logo.

### Typography
Use a readable contemporary sans-serif. Prefer a local/system font stack or bundled font asset; do not require a remote font service. Define consistent display, page, section, card, body, label, and button scales.

### Layout
Define shared container widths, page gutters, section spacing, grid gaps, card padding, radii, shadows, and breakpoints. Avoid arbitrary styling scattered across components.

### Logo rules
Use the exact original Kartgen logo asset if available in the working project. Do not redraw, retype, recolor, crop, stretch, replace, or apply effects to it. If the exact file is not available, ask for it or leave a clearly identified placeholder. Do not mistake a generated symbol or favicon for the official logo.

---

## 9. Technical Architecture

Recommended stack:

| Layer | Technology |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| UI | React |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Content | Local TypeScript data |
| Routing | Next.js file-based routing |
| Interactivity | Client Components only where needed |
| Run mode | Local development server |

Use stable compatible versions available in the environment. Inspect the existing project before changing it. Preserve useful files and dependencies.

### Rendering
Use Server Components by default. Use Client Components only for mobile navigation, accordions, optional filters, browser-side form validation, or other real interactions. Do not mark every component with `"use client"`.

### Data flow
Local content configuration → page components → shared UI components → rendered interface.

No database, API, server action, external API, or state-management library is needed for the initial scope.

---

## 10. Recommended Project Structure

```text
kartgen-website/
├── public/
│   ├── brand/                 # Official logo goes here unchanged
│   ├── illustrations/         # Local SVG illustrations supplied in this kit
│   ├── backgrounds/           # Optional subtle backgrounds
│   └── icons/                 # Favicon and decorative UI assets
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── services/page.tsx
│   │   ├── services/business-automation/page.tsx
│   │   ├── services/websites-digital-platforms/page.tsx
│   │   ├── services/cloud-technology-optimization/page.tsx
│   │   ├── about/page.tsx
│   │   ├── work/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/             # Header, footer, navigation
│   │   ├── ui/                 # Button, Container, SectionHeading, Card
│   │   ├── sections/            # Homepage sections
│   │   ├── services/            # Service cards and shared template
│   │   ├── work/                # Project cards
│   │   └── forms/               # Demo contact form
│   ├── data/                    # site, navigation, services, projects, FAQs
│   ├── lib/                     # Small utilities
│   ├── types/                   # Shared TypeScript types
│   └── styles/
│       └── design-tokens.css
├── docs/
│   └── KARTGEN-WEBSITE-SPEC.md
├── package.json
└── README.md
```

Treat this as a target structure, not a mandate to create empty files. Keep the architecture proportionate to the project.

---

## 11. Content Data Models

Keep repeated content in local TypeScript files such as `src/data/site.ts`, `navigation.ts`, `services.ts`, `projects.ts`, and `faqs.ts`.

A service record can contain:
- `slug`, `title`, `shortDescription`, `headline`, `description`
- `problems: string[]`
- `offerings: { title, description }[]`
- `examples: { title, description, illustrative }[]`
- `faqs: { question, answer }[]`

Project records can contain:
- `slug`, `title`, `category`, `summary`, `problem`, `solution`
- `technologies`, `illustrative`, `status`, `image`

Use explicit TypeScript types and avoid `any`. Do not duplicate the same content across multiple components.

---

## 12. Shared Components

Recommended components:
- `Header`, `MainNavigation`, `MobileNavigation`, `Footer`
- `Container`, `Button`, `SectionHeading`, `Card`
- `HeroSection`, `ServicePillars`, `OutcomesSection`, `SelectedWork`, `ProcessSection`, `WhyKartgen`, `FinalCTA`
- `ServiceCard`, `ServicePageTemplate`, `RelatedServices`
- `ProjectCard`, `DemoContactForm`

Each component should have a clear responsibility. Avoid one giant component containing the entire site, but also avoid creating components for every paragraph.

Use Lucide React consistently for interface icons. Use the supplied SVGs for larger illustrative visuals where helpful.

---

## 13. Interactions and Accessibility

### Navigation
- Internal navigation uses Next.js `Link`.
- Logo links to `/`.
- All CTA and footer links have valid destinations.
- No `href="#"` placeholders.
- Mobile menu opens/closes, supports keyboard use, and closes after navigation.
- Unknown routes show a proper not-found page.

### Interactions
Optional: subtle hover transitions, accessible FAQ accordion, simple reveal effects. Respect `prefers-reduced-motion`. Do not add animations solely for decoration.

### Accessibility
- Semantic HTML and logical heading hierarchy.
- Visible keyboard focus.
- Labels for form fields.
- Accessible names for icon-only buttons.
- Adequate color contrast and tap targets.
- Meaningful alt text for informative visuals; empty alt for decorative visuals.
- No reliance on color alone.
- Keyboard-accessible menus and accordions.

### No fake functionality
Do not imply real AI processing, integrations, analytics, live support, or message delivery. Either implement a real local interaction or remove the control.

---

## 14. Responsive Requirements

Test at representative widths: 360, 390, 768, 1024, and 1440 px.

Mobile:
- No horizontal overflow.
- Compact, usable navigation.
- Stacked layouts in a logical order.
- Readable typography.
- Easy-to-tap buttons.
- Forms usable without zooming.
- Illustrations must not obscure content.

Tablet and desktop:
- Balanced maximum content width.
- Appropriate multi-column layouts.
- Readable line lengths.
- No navigation collisions.
- Consistent whitespace.

Do not hide essential content to solve responsive problems.

---

## 15. Local Development and Quality

Inspect the working directory before changing it. Check whether a Next.js project already exists, what package manager is in use, and whether the supplied logo/assets are present.

Typical local command:

```bash
npm run dev
```

Use the project’s actual scripts and package manager. Do not assume the default port is free.

Run available checks, for example:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Only claim checks passed if they were actually run. Fix TypeScript, lint, import, asset, hydration, and browser-console errors. Avoid adding deployment configuration.

The website should remain usable without remote image, font, icon, API, or form dependencies once packages are installed.

---

## 16. Implementation Phases

### Phase 1: Inspect
Inspect project, framework, dependencies, assets, and logo. Report findings before overwriting files.

### Phase 2: Foundation
Confirm routes, setup, and local run command.

### Phase 3: Design system
Inspect logo, tune color tokens, typography, spacing, buttons, containers, and responsive breakpoints.

### Phase 4: Shared layout
Build header, desktop/mobile navigation, footer, and global styles.

### Phase 5: Homepage
Build hero, services, outcomes, work, process, why Kartgen, CTA, footer. Review the homepage before expanding the design to every page.

### Phase 6: Service pages
Build the shared template and distinct content for all three services.

### Phase 7: About, Work, Contact
Build remaining pages, label illustrative projects, and implement honest demo form behavior if included.

### Phase 8: Refinement
Review hierarchy, spacing, colors, visual consistency, responsive behavior, focus states, and motion.

### Phase 9: QA
Test all routes and interactions, run available checks, fix errors, and prepare README.

### Phase 10: Handoff
Report completed pages, component architecture, local run command, tests actually performed, limitations, and remaining placeholders.

---

## 17. Acceptance Checklist

### Functional
- [ ] All eight required routes render.
- [ ] Desktop and mobile navigation work.
- [ ] All service cards and CTAs navigate correctly.
- [ ] Footer links work.
- [ ] FAQ works if implemented.
- [ ] Contact form behavior is honest and local-only.
- [ ] No knowingly broken controls.

### Visual
- [ ] Exact supplied logo is used unchanged.
- [ ] Color and typography are consistent.
- [ ] Homepage value proposition is immediately clear.
- [ ] Three service pillars are obvious.
- [ ] Modern, premium visual direction is achieved.
- [ ] Effects are restrained.
- [ ] No mobile horizontal overflow.

### Content integrity
- [ ] No invented testimonials, client logos, metrics, or credentials.
- [ ] Illustrative work is labeled.
- [ ] Contact details are verified or left as placeholders.
- [ ] No accidental placeholder copy remains.

### Technical
- [ ] Application starts locally.
- [ ] No broken imports/assets.
- [ ] No TypeScript errors.
- [ ] No relevant lint errors.
- [ ] No critical browser-console or hydration errors.
- [ ] No backend, analytics, deployment, or external form service was added.
- [ ] README explains how to run the project.

---

## 18. AI Coding Tool Instructions

Act as a senior frontend engineer and design-minded technical lead.

1. Inspect the project before editing.
2. Preserve useful existing work.
3. Use the supplied logo exactly as-is.
4. Prefer the simplest maintainable implementation.
5. Use Server Components by default.
6. Keep content separate from presentation.
7. Avoid unnecessary libraries and abstractions.
8. Do not invent business facts.
9. Do not expand project scope without asking.
10. Report progress after each major phase, including changed files, tests performed, errors remaining, and next step.
11. Do not claim tests passed unless they were run.
12. Finish with a factual completion report.

### Master implementation prompt

You are the senior frontend engineer responsible for building the Kartgen Infotech LLP website described in this specification.

Implement a polished, responsive, multi-page frontend using Next.js App Router, TypeScript, Tailwind CSS, React, and Lucide React. The visual direction is a modern technology agency with a corporate, premium feel.

Build the eight required routes and the three service pillars. Use reusable components, a consistent design system, and structured local content.

First inspect the existing project directory and assets. Locate the exact supplied Kartgen logo and use it unchanged. Never redraw, retype, recolor, crop, stretch, or replace the official logo. If the logo is missing, ask for it or leave a clearly identified placeholder.

This is an offline YouTube demonstration. Do not implement hosting, DNS, deployment, backend, database, CMS, analytics, production SEO, email delivery, or external form processing. A contact form, if included, must clearly state that it does not send information.

Do not fabricate testimonials, clients, metrics, credentials, or outcomes. Label hypothetical project examples clearly.

Proceed in phases. Build the design system and homepage first, then review the homepage before completing all remaining pages. Run the available checks and test the site in a browser. Report what was actually completed and tested.

## Final principle

Prioritize clear business positioning, strong visual design, useful page content, consistent components, working interactions, responsive behavior, clean code, and reliable local demonstration—in that order. Do not add infrastructure the project does not need.
