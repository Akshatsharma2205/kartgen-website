export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Process" | "Technology" | "Engagement";
}

export const generalFaqs: FAQItem[] = [
  {
    category: "General",
    question: "What makes Kartgen Infotech different from traditional digital agencies?",
    answer:
      "Most digital agencies rely on bloated templates, subcontracted junior talent, and generic pitch decks. Kartgen is founded on practical, senior engineering. We prioritize business workflows before tech buzzwords, write clean maintainable code, and build digital systems that you fully own without monthly retainer hostage situations.",
  },
  {
    category: "General",
    question: "Who is your typical client?",
    answer:
      "We work with growing businesses, founders, and operational leaders who are frustrated by manual bottlenecks, legacy software slowness, or runaway technology bills. Whether you need an automated data pipeline, a fast corporate web platform, or cloud cost optimization, we focus on measurable business utility.",
  },
  {
    category: "Process",
    question: "How does an engagement with Kartgen typically begin?",
    answer:
      "Every project begins with a structured Discovery & Architecture call. We inspect your existing tools, clarify specific operational friction points, and deliver a concise technical scope with clear milestones and fixed pricing before any code is written.",
  },
  {
    category: "Engagement",
    question: "Do you offer fixed-price projects or hourly billing?",
    answer:
      "We strongly prefer transparent, milestone-based fixed pricing for clearly defined scopes (such as building a corporate website or engineering a specific integration). For ongoing advisory, infrastructure management, or iterative product development, we offer structured monthly engineering sprints.",
  },
  {
    category: "Technology",
    question: "Who owns the code, design, and infrastructure after completion?",
    answer:
      "You do. 100%. Upon final project milestone completion, all source code, design assets, and cloud configurations belong entirely to your company. We provide complete setup documentation and handover walkthroughs.",
  },
  {
    category: "Process",
    question: "How do you handle project communication and updates?",
    answer:
      "We maintain direct communication via private Slack/Teams channels or email, alongside scheduled weekly video check-ins. You speak directly with the engineers designing and building your system—no non-technical account managers playing telephone.",
  },
];
