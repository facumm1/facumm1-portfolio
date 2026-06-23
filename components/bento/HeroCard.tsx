"use client";

import { useTheme } from "next-themes";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { hero, contact, currentlyBuilding, currentlyWorking } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";

export function HeroCard() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  return (
    <SpotlightCard className="col-span-12 md:col-span-7 flex flex-col justify-between p-7 min-h-[240px]">
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-card-border bg-muted-bg text-xs font-medium text-muted transition-all hover:border-foreground/20 hover:text-foreground"
          aria-label="Toggle language"
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-card-border bg-muted-bg text-muted transition-all hover:border-foreground/20 hover:text-foreground"
          aria-label="Toggle theme"
        >
          <SunIcon className="hidden dark:block" />
          <MoonIcon className="block dark:hidden" />
        </button>
      </div>

      <div>
        <div className="flex items-center gap-3">
          {hero.openToWork && (
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {t.ui.openToWork}
            </span>
          )}
          <span className="text-xs text-muted">{hero.location}</span>
        </div>

        <h1 className="mt-4 font-heading text-5xl font-medium tracking-tight text-foreground leading-[1.05]">
          {hero.name}
        </h1>
        <p className="mt-2 text-base font-medium text-muted">{t.hero.role}</p>
        <p className="mt-3 max-w-sm text-sm text-foreground/65 leading-relaxed">{t.hero.description}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs text-muted/60">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            {t.ui.currentlyWorkingFor}{" "}
            <span className="font-medium text-foreground/70">{currentlyWorking.name}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted/60">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            {t.ui.freelancingFor}{" "}
            <span className="font-medium text-foreground/70">{currentlyBuilding.name}</span>
            <span className="text-muted/40">— {t.currentlyBuilding.status}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-card-border bg-muted-bg text-muted transition-all hover:border-foreground/20 hover:text-foreground"
          >
            <GitHubIcon />
          </a>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-card-border bg-muted-bg text-muted transition-all hover:border-foreground/20 hover:text-foreground"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-lg bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {t.ui.sayHi}
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
