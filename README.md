# Kartgen Infotech LLP — Official Website Demonstration

A modern, responsive, multi-page static website for **Kartgen Infotech LLP**, engineered to demonstrate senior B2B technology consulting across business automation, web platforms, and cloud optimization.

Built strictly according to the architecture specification in `docs/KARTGEN-WEBSITE-SPEC.md`.

---

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (Strict Mode)
- **UI & Components**: React 19 + Lucide React
- **Styling**: Tailwind CSS v4 + Design Tokens (`src/styles/design-tokens.css`)
- **Assets**: Bespoke vector SVGs (`public/illustrations/`) and icons (`public/icons/`)
- **Execution Mode**: Static pre-rendering (Offline demonstration, zero backend/external dependencies)

---

## Routes & Information Architecture

All 8 required routes are fully implemented and statically pre-rendered:

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Homepage** | Value proposition, 3 pillars, business outcomes, selected work, working approach, why Kartgen, and CTA. |
| `/services` | **Services Overview** | High-level synthesis of all three pillars with diagnostic fit guide. |
| `/services/business-automation` | **Business Automation & AI** | Workflow automation, cross-tool sync, and intelligent document extraction. |
| `/services/websites-digital-platforms` | **Websites & Digital Platforms** | Bespoke corporate websites, client portals, and web application platforms. |
| `/services/cloud-technology-optimization` | **Cloud & Technology Optimization** | FinOps audit, right-sizing, VPS migration, and database query tuning. |
| `/about` | **About Kartgen** | Company positioning, operating philosophy, core principles, and IP disclosure. |
| `/work` | **Engineering Case Studies** | Filterable portfolio of illustrative concepts and demonstration architectures with architecture breakdown. |
| `/contact` | **Contact & Scoping** | Direct contact channels, response SLA, and interactive browser-validated demo scoping form. |
| `/_not-found` | **Custom 404** | Graceful fallback navigation for non-existent paths. |

---

## Visual Design System & Brand Palette

The site uses a disciplined, corporate B2B palette without generic AI gradients:

- **Deep Navy**: `#10233F` (Headers, dark accent sections, brand anchoring)
- **Vivid Royal Blue**: `#1769E8` (Primary CTAs, active states, key focus elements)
- **Soft Blue**: `#EAF2FF` (Surface highlights, badges, subtle accent cards)
- **Clean Surfaces**: `#FFFFFF` / `#F5F8FC` (Generous whitespace, structured cards)
- **Deep Ink Text**: `#182334` (High-contrast, accessible body typography)
- **Slate Borders**: `#DCE4EF` (Subtle container lines)

---

## Running the Website Locally

### 1. Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Static Build & Verification
```bash
npm run build
npm run start
```

---

## Compliance & Scope Integrity

1. **No Fake Data or Certifications**: No invented clients, fabricated testimonials, awards, or fake metrics.
2. **Transparent Case Studies**: All project case studies are explicitly labeled as *Illustrative Concept* or *Demonstration Architecture*.
3. **Honest Demo Form**: The contact scoping form validates fields locally in the browser and clearly discloses that it operates in offline demonstration mode without transmitting user data.
4. **No External Tracking**: No third-party tracking scripts, cookie trackers, or analytics pixels are included.
