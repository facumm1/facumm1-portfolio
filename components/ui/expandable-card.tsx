"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/lib/data";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { useLanguage } from "@/contexts/language-context";

interface ExperienceTranslations {
  period: string;
  shortDescription: string;
  description: string;
  bullets: readonly string[];
}

interface ExperienceExpandableCardProps {
  experience: Experience;
  translations: ExperienceTranslations;
  children: React.ReactNode;
  className?: string;
}

export function ExperienceExpandableCard({
  experience,
  translations,
  children,
  className,
}: ExperienceExpandableCardProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <div onClick={() => setOpen(true)} className={cn("cursor-pointer", className)}>
        {children}
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border-card-border relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 left-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                aria-label="Close"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {experience.images.length > 0 ? (
                <ImageCarousel
                  images={experience.images}
                  alt={`${experience.company} preview`}
                  className="h-100 rounded-t-2xl"
                />
              ) : <div className="h-10"></div>}

              <div className="p-6 pt-5">
                <div className="flex items-start justify-between gap-4 pr-10">
                  <div>
                    <h3 className="font-heading font-700 text-foreground text-xl leading-tight">
                      {experience.title}
                    </h3>
                    <p className="text-muted mt-0.5 text-sm">{experience.company}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    <span className="text-muted text-xs">{translations.period}</span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-medium",
                        experience.type === "Full-time"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-violet-500/10 text-violet-500"
                      )}
                    >
                      {experience.type === "Full-time" ? t.ui.fullTime : t.ui.freelance}
                    </span>
                  </div>
                </div>

                {experience.links && (
                  <div className="my-4 flex flex-wrap gap-1.5">
                    {experience.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="border-card-border text-muted hover:border-foreground/20 hover:text-foreground inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs transition-colors"
                      >
                        {link.label}
                        <ExternalLinkIcon />
                      </a>
                    ))}
                  </div>
                )}

                <p className="text-muted mt-1 text-sm leading-relaxed">
                  {translations.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {translations.bullets.map((bullet, i) => (
                    <li key={i} className="text-foreground/80 flex gap-3 text-sm">
                      <span className="bg-foreground/30 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted-bg text-muted rounded-md px-2.5 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}
