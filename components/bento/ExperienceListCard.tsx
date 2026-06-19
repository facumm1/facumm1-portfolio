"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExperienceExpandableCard } from "@/components/ui/expandable-card";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ExperienceListCard() {
  return (
    <SpotlightCard className="col-span-12 md:col-span-7 flex flex-col p-6">
      <span className="text-xs font-medium text-muted uppercase tracking-wider">Experience</span>

      <div className="mt-4 flex flex-col">
        {experiences.map((exp, i) => (
          <ExperienceExpandableCard key={exp.id} experience={exp}>
            <div
              className={cn(
                "group flex items-start justify-between gap-4 py-3.5 transition-opacity hover:opacity-75",
                i !== experiences.length - 1 && "border-b border-[var(--card-border)]"
              )}
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <p className="font-heading text-sm font-semibold text-foreground">{exp.company}</p>
                  <span className="text-xs text-muted">·</span>
                  <p className="text-xs text-muted">{exp.title}</p>
                  <span className="text-xs text-muted/50">{exp.period}</span>
                </div>
                <p className="mt-0.5 text-xs text-muted/60 line-clamp-1">{exp.shortDescription}</p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <div className="flex flex-wrap justify-end gap-1.5">
                  {exp.stack.slice(0, 2).map((tech) => (
                    <span key={tech} className="rounded-md bg-muted-bg px-2 py-0.5 text-xs text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-muted/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-muted"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </ExperienceExpandableCard>
        ))}
      </div>
    </SpotlightCard>
  );
}
