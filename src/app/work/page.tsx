"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { projectsData } from "@/data/projects";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Info } from "lucide-react";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Business Automation & AI", value: "business-automation" },
    { label: "Websites & Platforms", value: "websites-digital-platforms" },
    { label: "Cloud Optimization", value: "cloud-technology-optimization" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.categorySlug === selectedCategory);

  return (
    <>
      {/* Header Banner */}
      <section className="pt-16 pb-20 bg-white border-b border-kg-border/60">
        <Container size="wide">
          <div className="max-w-3xl space-y-4">
            <Badge variant="blue" size="md">
              Portfolio & Engineering Case Studies
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kg-navy tracking-tight">
              System Architectures & Project Case Studies
            </h1>
            <p className="text-base sm:text-lg text-kg-muted leading-relaxed">
              Explore how we design and engineer practical systems. Each study demonstrates the business friction addressed, technical decisions made, and measurable operational outcomes.
            </p>
          </div>

          {/* Transparent Disclosure Notice */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 max-w-3xl">
            <Info className="w-5 h-5 text-kg-blue shrink-0 mt-0.5" />
            <p className="text-xs text-kg-muted leading-relaxed">
              <strong>Disclosure & Transparency:</strong> In accordance with our professional standards, client confidentiality is strictly maintained. The case studies below represent demonstration architectures and illustrative concepts built to showcase our engineering capabilities without exposing confidential client data.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-20 bg-kg-surface-subtle border-b border-kg-border/60">
        <Container size="wide">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-kg-blue ${
                  selectedCategory === cat.value
                    ? "bg-kg-navy text-white shadow-xs"
                    : "bg-white text-kg-ink border border-kg-border hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Have a Project With Similar Architectural Needs?"
        description="We can review your business requirements, evaluate existing software constraints, and design a custom solution."
      />
    </>
  );
}
