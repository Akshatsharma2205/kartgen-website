import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Target, Scale, Wrench, ShieldAlert } from "lucide-react";

export function WhyKartgen() {
  const points = [
    {
      icon: <Target className="w-6 h-6 text-kg-blue" />,
      title: "Business Problems First",
      description:
        "We never build software for the sake of technology trends. Every engineering decision must justify itself by removing business friction or lowering ongoing operational cost.",
    },
    {
      icon: <Scale className="w-6 h-6 text-emerald-600" />,
      title: "Pragmatic, Honest Scope",
      description:
        "No inflated feature lists or endless change orders. We define a tight, realistic scope that solves your core bottleneck and gets delivered on schedule.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-amber-600" />,
      title: "Simplicity & Maintainability",
      description:
        "Complex systems fail in complex ways. We choose proven, stable technologies that your team can understand, maintain, and scale without panic.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-purple-600" />,
      title: "Zero Agency Bloat",
      description:
        "You deal directly with senior engineers who design the architecture and write the code. No middleman account managers or junior subcontractors.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-kg-surface-subtle border-b border-kg-border/60">
      <Container size="wide">
        <SectionHeading
          eyebrow="Why Work With Us"
          title="Practical Engineering Over Agency Hype"
          description="We built Kartgen to be the antidote to bloated digital agency overhead and brittle freelance shortcuts."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((pt, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="lg"
              hoverEffect={true}
              className="border-kg-border/80 flex items-start gap-5"
            >
              <div className="p-3 rounded-xl bg-kg-surface-subtle border border-kg-border shrink-0">
                {pt.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-kg-navy">{pt.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-kg-muted leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
