import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, FileCode2, Hammer, CheckCircle2 } from "lucide-react";

export function WorkingApproach() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      icon: <Compass className="w-5 h-5 text-kg-blue" />,
      description:
        "We audit your manual workflows, software bottlenecks, and operational goals. We clarify the real problem before recommending any technology.",
    },
    {
      num: "02",
      title: "Plan",
      icon: <FileCode2 className="w-5 h-5 text-emerald-600" />,
      description:
        "We draft an unambiguous technical specification: database schemas, API contracts, error handling strategies, and fixed milestones.",
    },
    {
      num: "03",
      title: "Build",
      icon: <Hammer className="w-5 h-5 text-amber-600" />,
      description:
        "We construct the system with clean, modular TypeScript or backend services, conducting staged sandbox testing with real-world edge cases.",
    },
    {
      num: "04",
      title: "Refine",
      icon: <CheckCircle2 className="w-5 h-5 text-purple-600" />,
      description:
        "We monitor deployment telemetry, benchmark response latencies, run recovery drills, and provide thorough operational documentation.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-kg-border/60">
      <Container size="wide">
        <SectionHeading
          eyebrow="Our Methodology"
          title="A Disciplined Engineering Process"
          description="How we move from operational friction to dependable, high-performing digital systems."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-kg-surface-subtle border border-kg-border/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white border border-kg-border flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-kg-navy">{step.title}</h3>
                <p className="mt-2.5 text-xs sm:text-sm text-kg-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-semibold text-kg-blue uppercase tracking-wider">
                Phase {step.num} Deliverable
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
