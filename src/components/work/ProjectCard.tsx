"use client";

import { useState } from "react";
import { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      variant="white"
      padding="none"
      hoverEffect={true}
      className="overflow-hidden flex flex-col h-full border-kg-border/80"
    >
      {/* Top Banner / Category Header */}
      <div className="p-6 border-b border-slate-100 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold text-kg-blue uppercase tracking-wider">
            {project.category}
          </span>
          <Badge
            variant={project.illustrative ? "amber" : "green"}
            size="sm"
          >
            {project.statusLabel}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-kg-navy leading-snug group-hover:text-kg-blue transition-colors">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-kg-muted leading-relaxed">
          {project.summary}
        </p>

        {/* Key Outcomes Pills */}
        <div className="mt-5 space-y-2">
          {project.outcomes.slice(0, expanded ? undefined : 2).map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-kg-ink">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Details: Business Problem & Solution Delivered */}
      {expanded && (
        <div className="p-6 bg-kg-surface-subtle border-b border-slate-100 space-y-4 animate-in fade-in duration-200 text-xs">
          <div>
            <h4 className="font-bold text-kg-navy uppercase tracking-wider mb-1 text-[11px]">
              Business Friction Addressed:
            </h4>
            <p className="text-kg-muted leading-relaxed">
              {project.businessProblem}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-kg-navy uppercase tracking-wider mb-1 text-[11px]">
              Engineering Solution:
            </h4>
            <p className="text-kg-muted leading-relaxed">
              {project.solutionDelivered}
            </p>
          </div>
        </div>
      )}

      {/* Footer Bar: Tech Tags & Interactive Toggle */}
      <div className="p-5 bg-slate-50/60 border-t border-slate-100 mt-auto flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-slate-200/60">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-semibold text-kg-blue hover:text-kg-blue-hover inline-flex items-center gap-1 cursor-pointer focus:outline-none"
          >
            <span>{expanded ? "Hide Breakdown" : "Inspect Architecture"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <Button
            href="/contact"
            variant="ghost"
            size="sm"
            className="!text-xs !p-0"
            icon={<ArrowRight className="w-3 h-3" />}
          >
            Scope Similar
          </Button>
        </div>
      </div>
    </Card>
  );
}
