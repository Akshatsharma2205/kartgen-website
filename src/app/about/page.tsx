import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ShieldCheck,
  Code2,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Compass,
  FileCheck,
  Scale,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Kartgen Infotech LLP | Pragmatic Engineering Consultancy",
  description:
    "Learn about Kartgen's engineering ethos, core operating principles, and how we eliminate operational friction for growing businesses.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Business Utility Before Technology Trends",
      description:
        "We never build or recommend software merely because it is popular in developer forums. Every line of code, framework, or cloud instance must directly reduce operational costs or improve business velocity.",
    },
    {
      title: "Direct Technical Collaboration",
      description:
        "Clients work directly with experienced software engineers who design the architecture and write the code. We eliminate layers of non-technical account managers who distort requirements.",
    },
    {
      title: "Complete Client IP & Code Ownership",
      description:
        "Upon project completion, all source code, deployment scripts, design assets, and cloud access belong 100% to your company. We do not hold client repositories hostage.",
    },
    {
      title: "Transparent Scoping & Predictable Pricing",
      description:
        "We define clear, verifiable acceptance criteria and deliver fixed-price milestone agreements for scoped projects, eliminating billing surprises.",
    },
  ];

  return (
    <>
      {/* Hero / Introduction */}
      <section className="pt-16 pb-20 bg-white border-b border-kg-border/60">
        <Container size="wide">
          <div className="max-w-3xl space-y-4">
            <Badge variant="blue" size="md">
              About Kartgen Infotech LLP
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kg-navy tracking-tight leading-[1.15]">
              Senior Engineering for Practical Business Operations
            </h1>
            <p className="text-base sm:text-lg text-kg-muted leading-relaxed">
              Kartgen Infotech was established to provide an honest alternative to bloated digital agencies and fragmented freelance contractors. We specialize in building reliable, high-performance digital systems that eliminate manual friction.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning Statement & Philosophy */}
      <section id="ethos" className="py-20 bg-kg-surface-subtle border-b border-kg-border/60">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-kg-blue">
                Our Operating Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-kg-navy">
                Bridging the Gap Between Fluffy Agency Pitches and Real Technical Delivery
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-kg-muted leading-relaxed">
                <p>
                  Most growing businesses encounter two frustrating extremes when sourcing technology help: bloated traditional agencies that charge excessive markups for junior talent and generic templates, or freelance marketplaces with high turnover and inconsistent code quality.
                </p>
                <p>
                  Kartgen provides a disciplined middle ground. We are a focused technology consultancy founded on engineering rigor, transparent deliverables, and honest scope boundaries.
                </p>
                <p>
                  Whether we are automating an email recruitment pipeline, engineering an industrial product portal, or tuning a relational database under heavy traffic, we hold ourselves to production-grade reliability standards.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Operational Needs
                </Button>
              </div>
            </div>

            {/* Ethos Callout Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-kg-navy text-white border border-slate-800 space-y-6 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-kg-blue/20 text-kg-blue flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">
                  What We Stand For
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-kg-blue shrink-0 mt-0.5" />
                    <span>No unverified claims or exaggerated AI buzzwords.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-kg-blue shrink-0 mt-0.5" />
                    <span>Readable, modular code you can maintain in-house.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-kg-blue shrink-0 mt-0.5" />
                    <span>Frugal, cost-conscious infrastructure recommendations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-kg-blue shrink-0 mt-0.5" />
                    <span>Fixed-milestone accountability and clear documentation.</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                  Registered in Indore, Madhya Pradesh, India.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white border-b border-kg-border/60">
        <Container size="wide">
          <SectionHeading
            eyebrow="Foundational Commitments"
            title="How We Operate With Every Client"
            description="Our fundamental standards for communication, architectural integrity, and professional respect."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((pr, idx) => (
              <Card
                key={idx}
                variant="white"
                padding="lg"
                hoverEffect={true}
                className="border-kg-border/80"
              >
                <div className="w-10 h-10 rounded-lg bg-kg-surface-subtle border border-kg-border flex items-center justify-center font-bold text-kg-blue text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-kg-navy">{pr.title}</h3>
                <p className="mt-2 text-sm text-kg-muted leading-relaxed">
                  {pr.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Legal & Terms Disclosure */}
      <section id="terms" className="py-16 bg-kg-surface-subtle border-b border-kg-border/60">
        <Container size="narrow">
          <div className="p-8 rounded-2xl bg-white border border-kg-border space-y-4 text-xs sm:text-sm text-kg-muted">
            <h3 className="text-lg font-bold text-kg-navy">
              Engagement Integrity & Privacy Disclosure
            </h3>
            <p id="privacy" className="leading-relaxed">
              <strong>Demonstration & Intellectual Property:</strong> This website is an offline demonstration build showcasing Kartgen Infotech’s frontend architecture and technical service framework. We respect client confidentiality; any case studies featured on this website are explicitly disclosed as demonstration architectures or illustrative concepts unless accompanied by authorized corporate attribution.
            </p>
            <p className="leading-relaxed">
              <strong>Data Privacy:</strong> In full client engagements, we enforce least-privilege access, encrypted cloud storage, and non-disclosure agreements prior to reviewing proprietary company data or infrastructure credentials.
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Ready to Discuss Your Business Systems?"
        description="Connect directly with our engineering team. We'll listen to your technical challenges and provide an actionable, transparent roadmap."
      />
    </>
  );
}
