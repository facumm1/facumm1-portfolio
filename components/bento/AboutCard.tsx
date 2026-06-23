"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLanguage } from "@/contexts/language-context";

export function AboutCard() {
  const { t } = useLanguage();

  return (
    <SpotlightCard className="col-span-12 md:col-span-5 flex flex-col p-6">
      <span className="text-xs font-medium text-muted uppercase tracking-wider">{t.ui.about}</span>
      <p className="mt-4 text-sm leading-relaxed text-foreground/75">{t.about.text}</p>
    </SpotlightCard>
  );
}
