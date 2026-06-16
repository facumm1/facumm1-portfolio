"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExperienceExpandableCard } from "@/components/ui/expandable-card";
import type { Experience } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <ExperienceExpandableCard
      experience={experience}
      className={cn("col-span-12", className)}
    >
      <SpotlightCard className="h-full flex flex-col justify-between p-6 cursor-pointer">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-muted uppercase tracking-wider">
                {experience.company}
              </p>
              <h3 className="mt-1 font-heading text-lg font-700 text-foreground">
                {experience.title}
              </h3>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-xs text-muted whitespace-nowrap">{experience.period}</span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs font-medium",
                  experience.type === "Full-time"
                    ? "bg-blue-500/10 text-blue-500"
                    : "bg-violet-500/10 text-violet-500"
                )}
              >
                {experience.type}
              </span>
            </div>
          </div>

          <p className="mt-3 text-sm text-muted line-clamp-2 leading-relaxed">
            {experience.shortDescription}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {experience.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted-bg px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted/60 group-hover:text-muted transition-colors">
            Click to expand →
          </span>
        </div>
      </SpotlightCard>
    </ExperienceExpandableCard>
  );
}
