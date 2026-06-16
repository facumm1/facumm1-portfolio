"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { stack } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories: { key: keyof typeof stack; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps" },
  { key: "tools", label: "Tools" },
];

const categoryColors: Record<string, string> = {
  Frontend: "text-sky-500 dark:text-sky-400",
  Backend: "text-emerald-500 dark:text-emerald-400",
  DevOps: "text-violet-500 dark:text-violet-400",
  Tools: "text-amber-500 dark:text-amber-400",
};

export function StackCard() {
  return (
    <SpotlightCard className="col-span-12 md:col-span-5 flex flex-col p-6">
      <span className="text-xs font-medium text-muted uppercase tracking-wider">Tech stack</span>

      <div className="mt-4 space-y-3">
        {categories.map(({ key, label }) => (
          <div key={key}>
            <p className={cn("mb-1.5 text-xs font-medium", categoryColors[label])}>{label}</p>
            <div className="flex flex-wrap gap-1.5">
              {stack[key].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-muted-bg px-2.5 py-1 text-xs text-foreground/70 transition-colors hover:bg-foreground/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}
