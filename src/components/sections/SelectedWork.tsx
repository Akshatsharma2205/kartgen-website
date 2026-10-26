import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function SelectedWork() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-kg-surface-subtle border-b border-kg-border/60">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Case Studies & Architectures"
            title="Selected Engineering Projects"
            description="Representative projects demonstrating how we approach automation, bespoke web platforms, and cloud optimization."
          />
          <div className="shrink-0">
            <Button
              href="/work"
              variant="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All 6 Case Studies
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
