import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Check, Repeat, Layout, GitBranch, Layers, Sliders } from "lucide-react";

export function BusinessOutcomes() {
  const outcomes = [
    {
      icon: <Repeat className="w-5 h-5 text-kg-blue" />,
      title: "Reduce Repetitive Work",
      description:
        "Automate manual spreadsheet copying, PDF data entry, and multi-app status updates so your team focuses on high-value business operations.",
    },
    {
      icon: <Layout className="w-5 h-5 text-emerald-600" />,
      title: "Improve Digital Experiences",
      description:
        "Deliver fast, accessible, mobile-first web platforms and client portals that clearly articulate your value and convert qualified interest.",
    },
    {
      icon: <Sliders className="w-5 h-5 text-amber-600" />,
      title: "Simplify Technology Decisions",
      description:
        "Cut through trending industry hype to choose reliable, cost-effective infrastructure that matches your actual operational scale.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-purple-600" />,
      title: "Connect Disjointed Tools",
      description:
        "Integrate CRMs, accounting software, messaging apps, and internal databases with durable retry buffers and zero lost events.",
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-600" />,
      title: "Build Practical Systems",
      description:
        "Engineer resilient codebases with clean documentation, zero proprietary vendor lock-in, and full intellectual property ownership.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-kg-border/60">
      <Container size="wide">
        <SectionHeading
          eyebrow="Measurable Business Utility"
          title="Outcomes Over Technical Vanity"
          description="We evaluate every project by how much friction it removes from your day-to-day business operations."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="md"
              hoverEffect={true}
              className="border-kg-border/80"
            >
              <div className="w-10 h-10 rounded-lg bg-kg-surface-subtle border border-kg-border flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-kg-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-kg-muted leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}

          {/* Callout Card */}
          <div className="rounded-2xl bg-kg-navy text-white p-7 flex flex-col justify-between border border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-kg-blue">
                Engineering Standard
              </span>
              <h3 className="text-xl font-bold mt-2">
                Predictable, Fixed-Scope Engagements
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Every project is delivered with a concrete technical specification, verifiable acceptance criteria, and zero hidden retainer fees.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              Direct technical collaboration from day one.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
