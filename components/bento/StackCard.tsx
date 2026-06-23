"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { stack } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Frontend: "text-sky-500 dark:text-sky-400",
  Backend: "text-emerald-500 dark:text-emerald-400",
  DevOps: "text-violet-500 dark:text-violet-400",
  Tools: "text-amber-500 dark:text-amber-400",
};

export function StackCard() {
  const { t } = useLanguage();

  const categories: { key: keyof typeof stack; label: string; color: string }[] = [
    { key: "frontend", label: t.ui.frontend, color: categoryColors["Frontend"] },
    { key: "backend", label: t.ui.backend, color: categoryColors["Backend"] },
    { key: "devops", label: t.ui.devops, color: categoryColors["DevOps"] },
    { key: "tools", label: t.ui.tools, color: categoryColors["Tools"] },
  ];

  return (
    <SpotlightCard className="col-span-12 md:col-span-5 flex flex-col p-6">
      <span className="text-xs font-medium text-muted uppercase tracking-wider">{t.ui.techStack}</span>

      <div className="mt-4 space-y-3">
        {categories.map(({ key, label, color }) => (
          <div key={key}>
            <p className={cn("mb-1.5 text-xs font-medium", color)}>{label}</p>
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
