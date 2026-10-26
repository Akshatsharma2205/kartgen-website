import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { servicesData } from "@/data/services";
import { ArrowRight, Zap, Globe, Cpu, CheckCircle } from "lucide-react";

export function ServicePillars() {
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
    <section className="py-20 lg:py-28 bg-kg-surface-subtle border-b border-kg-border/60">
      <Container size="wide">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Three Practical Service Pillars"
          description="We focus on three technical domains that deliver the highest operational return on investment for growing businesses."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.slug}
              variant="white"
              padding="none"
              hoverEffect={true}
              className="flex flex-col h-full border-kg-border/80 group"
            >
              {/* Header */}
              <div className="p-7 sm:p-8 flex-1">
                <div className="w-12 h-12 rounded-xl bg-kg-surface-subtle border border-kg-border flex items-center justify-center mb-6 group-hover:border-kg-blue/40 transition-colors">
                  {getIcon(service.slug)}
                </div>

                <h3 className="text-xl font-bold text-kg-navy group-hover:text-kg-blue transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-kg-blue">
                  {service.headline}
                </p>

                <p className="mt-4 text-sm text-kg-muted leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Offerings list */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Offerings:
                  </span>
                  {service.offerings.map((offering, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-kg-ink">
                      <CheckCircle className="w-3.5 h-3.5 text-kg-blue shrink-0 mt-0.5" />
                      <span>{offering.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-5 sm:px-8 bg-slate-50 border-t border-slate-100 mt-auto flex items-center justify-between">
                <Link
                  href={service.route}
                  className="text-xs font-semibold text-kg-navy group-hover:text-kg-blue inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Pillar Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
