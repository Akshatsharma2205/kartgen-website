import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DemoContactForm } from "@/components/forms/DemoContactForm";
import { siteConfig } from "@/data/site";
import { Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Scoping | Kartgen Infotech LLP",
  description:
    "Discuss a project with Kartgen Infotech. Explore our technical scoping process and submit a project inquiry.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="pt-16 pb-20 bg-white border-b border-kg-border/60">
        <Container size="wide">
          <div className="max-w-3xl space-y-4">
            <Badge variant="blue" size="md">
              Initiate a Project Conversation
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kg-navy tracking-tight">
              Let’s Make Your Business Systems Work Better
            </h1>
            <p className="text-base sm:text-lg text-kg-muted leading-relaxed">
              We discuss operational problems in plain language. Reach out directly or test our interactive project scoping form below.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Grid: Details + Interactive Form */}
      <section className="py-20 bg-kg-surface-subtle border-b border-kg-border/60">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact & Process Expectations */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-kg-blue">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl font-bold text-kg-navy mt-1">
                  How to Reach Us
                </h2>
                <p className="mt-2 text-sm text-kg-muted leading-relaxed">
                  We review incoming inquiries each morning and connect prospective clients directly with a senior engineer.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-kg-border flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-kg-blue-soft text-kg-blue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base font-bold text-kg-navy hover:text-kg-blue transition-colors mt-0.5 block"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-xs text-kg-muted">
                      Direct inbox for scoping and technical consultation
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-kg-border flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Response Window
                    </h3>
                    <p className="text-sm font-bold text-kg-navy mt-0.5">
                      {siteConfig.contact.responseTime}
                    </p>
                    <span className="text-xs text-kg-muted">
                      {siteConfig.contact.workingHours}
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-kg-border flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Office Location
                    </h3>
                    <p className="text-sm font-bold text-kg-navy mt-0.5">
                      {siteConfig.contact.location}
                    </p>
                    <span className="text-xs text-kg-muted">
                      Consulting globally for growing B2B enterprises
                    </span>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="p-6 rounded-2xl bg-kg-navy text-white space-y-4 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kg-blue">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Scoping Protocol</span>
                </div>
                <h3 className="text-lg font-bold">
                  What Happens After You Inquire:
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>A senior engineer reviews your current toolstack and bottleneck.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>We schedule a focused 30-minute technical architecture call.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>We deliver a concise fixed-milestone scope and quote.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Interactive Browser-Side Demonstration Form */}
            <div className="lg:col-span-7">
              <DemoContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Offline Demonstration Disclosure */}
      <section id="demo" className="py-12 bg-white">
        <Container size="narrow">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-kg-muted space-y-2">
            <p className="font-semibold text-kg-navy">
              Offline Demonstration Architecture Notice
            </p>
            <p className="leading-relaxed">
              This frontend is configured for local demonstration. The scoping form operates with client-side validation and feedback states without external API transmission or database storage.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
