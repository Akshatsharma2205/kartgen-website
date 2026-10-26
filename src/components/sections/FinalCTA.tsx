import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";

interface FinalCTAProps {
  title?: string;
  description?: string;
}

export function FinalCTA({
  title = "Let’s Make Your Business Systems Work Better.",
  description = "Whether you need to automate a manual operational bottleneck, build a fast modern website, or optimize cloud infrastructure—we’re ready to help.",
}: FinalCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-kg-navy text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-kg-blue/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="narrow" className="relative z-10 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
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
            variant="outline"
            size="lg"
          >
            Review All Services
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-kg-blue" />
            <span>Direct Email: {siteConfig.contact.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Response within 24 business hours</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
