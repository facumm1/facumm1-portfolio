"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { languages } from "@/lib/data";

export function LanguagesCard() {
  return (
    <SpotlightCard className="col-span-12 md:col-span-6 flex flex-col p-6">
      <span className="text-xs font-medium text-muted uppercase tracking-wider">Languages</span>

      <div className="mt-4 space-y-3">
        {languages.map((item) => (
          <div key={item.language} className="flex items-center justify-between">
            <span className="font-heading text-sm font-semibold text-foreground">
              {item.language}
            </span>
            <span className="rounded-full bg-muted-bg px-2.5 py-1 text-xs text-muted">
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}
