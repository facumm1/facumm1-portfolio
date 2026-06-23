"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { currentlyBuilding } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";

export function CurrentlyBuildingCard() {
  const { t } = useLanguage();

  return (
    <SpotlightCard className="col-span-12 md:col-span-5 flex flex-col justify-between p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted uppercase tracking-wider">{t.ui.currentlyBuilding}</span>
        <span className="flex items-center gap-1.5 text-xs text-amber-500 dark:text-amber-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          {t.ui.inProgress}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="font-heading text-2xl font-700 text-foreground">{currentlyBuilding.name}</h3>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">{t.currentlyBuilding.description}</p>
      </div>

      <div className="mt-4">
        <p className="mb-3 text-xs text-muted/70">{t.currentlyBuilding.status}</p>
        <div className="flex flex-wrap gap-1.5">
          {currentlyBuilding.stack.map((tech) => (
            <span key={tech} className="rounded-md bg-muted-bg px-2.5 py-1 text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}
