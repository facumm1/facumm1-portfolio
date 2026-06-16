"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { education } from "@/lib/data";

export function EducationCard() {
  return (
    <SpotlightCard className="col-span-12 md:col-span-6 flex flex-col p-6">
      <span className="text-xs font-medium text-muted uppercase tracking-wider">Education</span>

      <div className="mt-4 space-y-5">
        {education.map((item, i) => (
          <div
            key={i}
            className="relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[var(--card-border)]"
          >
            <p className="font-heading text-sm font-semibold text-foreground">{item.degree}</p>
            <p className="mt-0.5 text-xs text-muted">{item.institution}</p>
            <p className="mt-1 text-xs text-muted/50">{item.period}</p>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}
