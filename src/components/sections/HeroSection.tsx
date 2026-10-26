import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ShieldCheck, Cpu, Code2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-white border-b border-kg-border/60">
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="blue" size="md">
                Practical Technology Consultancy
              </Badge>
              <span className="text-xs text-kg-muted hidden sm:inline">
                Zero bloated agency markups
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-kg-navy tracking-tight leading-[1.12]">
              Build Better Digital Systems.{" "}
              <span className="text-kg-blue">Eliminate Operational Friction.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-kg-muted leading-relaxed max-w-2xl">
              Kartgen Infotech helps businesses simplify operations through practical automation, professional digital platforms, and smarter technology decisions.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss a Project
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Engineering Proof Badges */}
            <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2 text-kg-ink">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Vendor Lock-In</span>
              </div>
              <div className="flex items-center gap-2 text-kg-ink">
                <Code2 className="w-4 h-4 text-kg-blue shrink-0" />
                <span>Direct Senior Engineers</span>
              </div>
              <div className="flex items-center gap-2 text-kg-ink">
                <Cpu className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Fixed Milestone Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic: Original Vector Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden border border-kg-border/80 bg-kg-surface-subtle shadow-md p-4 flex items-center justify-center">
              <img
                src="/illustrations/hero-systems.svg"
                alt="Connected business systems interface panels and workflow nodes"
                className="w-full h-auto object-contain drop-shadow-xs"
                width={760}
                height={570}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
