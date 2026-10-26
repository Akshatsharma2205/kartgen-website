import Link from "next/link";
import { ServicePillar } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { servicesData } from "@/data/services";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Workflow,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface ServicePageTemplateProps {
  service: ServicePillar;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  // Find the other two related services
  const relatedServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Service Hero & CTA */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 bg-white border-b border-kg-border/60 overflow-hidden">
        <div
          className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40"
          aria-hidden="true"
        />

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2">
                <Badge variant="blue" size="md">
                  Service Pillar
                </Badge>
                <span className="text-xs font-semibold uppercase tracking-wider text-kg-muted">
                  Kartgen Infotech LLP
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kg-navy tracking-tight leading-[1.15]">
                {service.headline}
              </h1>

              <p className="text-base sm:text-lg text-kg-muted leading-relaxed max-w-2xl">
                {service.summary}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss {service.title}
                </Button>
                <Button
                  href="#offerings"
                  variant="secondary"
                  size="lg"
                >
                  Review Detailed Capabilities
                </Button>
              </div>
            </div>

            {/* Service Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-kg-border/80 bg-kg-surface-subtle p-6 shadow-sm">
                <img
                  src={service.illustrationPath}
                  alt={service.title}
                  className="w-full h-auto object-contain"
                  width={600}
                  height={450}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Three to Five Business Problems */}
      <section className="py-20 bg-kg-surface-subtle border-b border-kg-border/60">
        <Container size="wide">
          <SectionHeading
            eyebrow="The Friction We Solve"
            title="Common Operational Challenges"
            description="These are the real-world friction points companies encounter before engaging us."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.problems.map((prob, idx) => (
              <Card
                key={idx}
                variant="white"
                padding="md"
                hoverEffect={true}
                className="border-kg-border/80 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-kg-navy">
                    {prob.title}
                  </h3>
                  <p className="mt-2 text-sm text-kg-muted leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Service Offerings */}
      <section id="offerings" className="py-20 lg:py-28 bg-white border-b border-kg-border/60">
        <Container size="wide">
          <SectionHeading
            eyebrow="Scope & Deliverables"
            title="Core Service Offerings"
            description="Engineered solutions designed for long-term stability and effortless operational handover."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.offerings.map((offering, idx) => (
              <Card
                key={idx}
                variant="white"
                padding="lg"
                hoverEffect={true}
                className="border-kg-border/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-kg-blue-soft text-kg-blue flex items-center justify-center font-bold text-sm mb-6 border border-kg-blue/20">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-kg-navy">
                    {offering.title}
                  </h3>
                  <p className="mt-3 text-sm text-kg-muted leading-relaxed">
                    {offering.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Specific Capabilities:
                    </span>
                    {offering.capabilities.map((cap, capIdx) => (
                      <div
                        key={capIdx}
                        className="flex items-start gap-2 text-xs text-kg-ink"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-kg-blue shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Button
                    href="/contact"
                    variant="ghost"
                    size="sm"
                    className="!p-0 !text-xs"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Request Proposal
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. How It Works (Process) */}
      <section className="py-20 bg-kg-surface-subtle border-b border-kg-border/60">
        <Container size="wide">
          <SectionHeading
            eyebrow="Engagement Workflow"
            title="How We Execute"
            description="Our structured 4-step delivery lifecycle keeps your team informed at every milestone."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-white rounded-2xl border border-kg-border/80 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-kg-navy mt-4">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-kg-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Example Applications */}
      <section className="py-20 bg-white border-b border-kg-border/60">
        <Container size="wide">
          <SectionHeading
            eyebrow="Practical Scenarios"
            title="Example Applications"
            description="Real-world system patterns we build to resolve business bottlenecks."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.exampleApplications.map((app, idx) => (
              <Card
                key={idx}
                variant="white"
                padding="md"
                hoverEffect={true}
                className="border-kg-border/80 flex flex-col justify-between"
              >
                <div>
                  <Badge variant="slate" size="sm" className="mb-3">
                    {app.tag}
                  </Badge>
                  <h3 className="text-lg font-bold text-kg-navy leading-snug">
                    {app.title}
                  </h3>
                  <p className="mt-3 text-sm text-kg-muted leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-kg-muted">
                  <span className="italic">Illustrative Pattern</span>
                  <Link
                    href="/contact"
                    className="font-semibold text-kg-blue hover:underline inline-flex items-center gap-1"
                  >
                    Discuss <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Kartgen’s Approach */}
      <section className="py-20 bg-kg-navy text-white">
        <Container size="wide">
          <div className="max-w-2xl mb-14 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-kg-blue">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Why We Take This Approach
            </h2>
            <p className="mt-3 text-slate-300 text-base">
              We reject shortcut frameworks and vendor dependency. We engineer systems designed for stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.kartgenApproach.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-kg-blue/20 text-kg-blue flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-white border-b border-kg-border/60">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Questions & Clarifications"
            title="Frequently Asked Questions"
            description="Clear answers regarding our approach, timelines, and technical standards."
            align="center"
            className="mb-14"
          />

          <FaqAccordion items={service.faqs} />
        </Container>
      </section>

      {/* 8. Related Services */}
      <section className="py-16 bg-kg-surface-subtle border-b border-kg-border/60">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-8">
            <h3 className="text-xl font-bold text-kg-navy">
              Explore Related Service Pillars
            </h3>
            <Link
              href="/services"
              className="text-xs font-semibold text-kg-blue hover:underline inline-flex items-center gap-1"
            >
              All Services Overview <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={rel.route}
                className="p-6 bg-white rounded-2xl border border-kg-border/80 hover:border-kg-blue/50 hover:shadow-sm transition-all group flex items-start justify-between gap-4"
              >
                <div>
                  <span className="text-xs font-semibold text-kg-blue uppercase tracking-wider">
                    {rel.title}
                  </span>
                  <h4 className="text-lg font-bold text-kg-navy group-hover:text-kg-blue transition-colors mt-1">
                    {rel.headline}
                  </h4>
                  <p className="mt-2 text-xs text-kg-muted line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-kg-surface-subtle group-hover:bg-kg-blue group-hover:text-white transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Final CTA */}
      <section className="py-20 bg-kg-navy text-white text-center">
        <Container size="narrow" className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Streamline Your {service.title}?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            Book a direct technical scoping conversation. We analyze your requirements and provide a clear, fixed-milestone architectural plan.
          </p>
          <div className="pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss a Project
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
