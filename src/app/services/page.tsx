import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { servicesData } from "@/data/services";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ArrowRight,
  Zap,
  Globe,
  Cpu,
  CheckCircle2,
  Workflow,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Service Pillars | Kartgen Infotech LLP",
  description:
    "Explore Kartgen's three core service pillars: Business Automation & AI, Websites & Digital Platforms, and Cloud & Technology Optimization.",
};

export default function ServicesPage() {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "business-automation":
        return <Zap className="w-6 h-6 text-kg-blue" />;
      case "websites-digital-platforms":
        return <Globe className="w-6 h-6 text-emerald-600" />;
      case "cloud-technology-optimization":
        return <Cpu className="w-6 h-6 text-amber-600" />;
      default:
        return <Zap className="w-6 h-6 text-kg-blue" />;
    }
  };

  return (
    <>
      {/* Header Banner */}
      <section className="pt-16 pb-20 bg-white border-b border-kg-border/60">
        <Container size="wide">
          <div className="max-w-3xl space-y-4">
            <Badge variant="blue" size="md">
              Specialized Service Pillars
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kg-navy tracking-tight">
              Practical Technology Services Engineered for Real Operations
            </h1>
            <p className="text-base sm:text-lg text-kg-muted leading-relaxed">
              We do not try to be everything to everyone. We concentrate strictly on three disciplines where senior engineering generates immediate business ROI.
            </p>
          </div>
        </Container>
      </section>

      {/* Pillars Deep Dive */}
      <section className="py-20 bg-kg-surface-subtle border-b border-kg-border/60">
        <Container size="wide" className="space-y-16">
          {servicesData.map((service, idx) => (
            <div
              key={service.slug}
              className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-kg-border shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-kg-surface-subtle border border-kg-border">
                      {getIcon(service.slug)}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-kg-blue">
                        Pillar 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-kg-navy">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    {service.headline}
                  </p>

                  <p className="text-base text-kg-muted leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Capabilities list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.offerings.map((off, oIdx) => (
                      <div
                        key={oIdx}
                        className="flex items-start gap-2 text-xs text-kg-ink bg-slate-50 p-3 rounded-lg border border-slate-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-kg-blue shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-kg-navy">{off.title}</strong>
                          <span className="text-kg-muted text-[11px] line-clamp-1">{off.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button
                      href={service.route}
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore {service.title}
                    </Button>
                    <Button
                      href="/contact"
                      variant="secondary"
                      size="md"
                    >
                      Scope This Service
                    </Button>
                  </div>
                </div>

                {/* Right Illustration */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="w-full max-w-sm rounded-2xl bg-kg-surface-subtle border border-kg-border/80 p-6 shadow-xs">
                    <img
                      src={service.illustrationPath}
                      alt={service.title}
                      className="w-full h-auto object-contain"
                      width={500}
                      height={375}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Fit Guide: Which service do you need? */}
      <section className="py-20 bg-white border-b border-kg-border/60">
        <Container size="wide">
          <SectionHeading
            eyebrow="Decision Framework"
            title="Which Service Fits Your Immediate Needs?"
            description="A quick diagnostic guide to help identify your highest-leverage engineering priority."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="subtle" padding="lg" className="border-kg-border/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-kg-blue uppercase tracking-wider">
                  You need Business Automation if:
                </span>
                <ul className="mt-4 space-y-3 text-xs sm:text-sm text-kg-ink">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-kg-blue shrink-0 mt-0.5" />
                    <span>Your team manually copies data between emails, spreadsheets, and software.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-kg-blue shrink-0 mt-0.5" />
                    <span>Leads sit unattended in shared inboxes for hours or days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-kg-blue shrink-0 mt-0.5" />
                    <span>You receive PDF documents or invoices that require manual entry.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <Link
                  href="/services/business-automation"
                  className="text-xs font-semibold text-kg-blue hover:underline inline-flex items-center gap-1"
                >
                  View Automation Pillar <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>

            <Card variant="subtle" padding="lg" className="border-kg-border/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  You need Websites & Platforms if:
                </span>
                <ul className="mt-4 space-y-3 text-xs sm:text-sm text-kg-ink">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Your current site is slow (3s+ load time) or broken on mobile devices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Prospects cannot quickly understand what business problems you solve.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>You require a client portal, quote generator, or authenticated web app.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <Link
                  href="/services/websites-digital-platforms"
                  className="text-xs font-semibold text-emerald-700 hover:underline inline-flex items-center gap-1"
                >
                  View Platforms Pillar <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>

            <Card variant="subtle" padding="lg" className="border-kg-border/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  You need Cloud Optimization if:
                </span>
                <ul className="mt-4 space-y-3 text-xs sm:text-sm text-kg-ink">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Monthly AWS, GCP, or Azure bills keep climbing without clear justification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Deployments are manual, fragile, and prone to breaking during release.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Relational database queries timeout during peak traffic surges.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <Link
                  href="/services/cloud-technology-optimization"
                  className="text-xs font-semibold text-amber-700 hover:underline inline-flex items-center gap-1"
                >
                  View Cloud Pillar <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Need Guidance on the Right Architectural Direction?"
        description="Schedule a 30-minute scoping call with a senior engineer. We evaluate your current systems and provide an honest assessment."
      />
    </>
  );
}
