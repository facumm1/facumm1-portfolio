"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { about } from "@/lib/data";

export function AboutCard() {
  return (
    <SpotlightCard className="col-span-12 md:col-span-5 flex flex-col p-6">
      <span className="text-xs font-medium text-muted uppercase tracking-wider">About</span>
      <p className="mt-4 text-sm leading-relaxed text-foreground/75">{about.text}</p>
    </SpotlightCard>
  );
}
