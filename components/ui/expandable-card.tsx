"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/lib/data";

interface ExperienceExpandableCardProps {
  experience: Experience;
  children: React.ReactNode;
  className?: string;
}

export function ExperienceExpandableCard({
  experience,
  children,
  className,
}: ExperienceExpandableCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-card-border shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-muted-bg text-muted transition-colors hover:bg-foreground/10 hover:text-foreground"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Preview image */}
              <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-muted-bg">
                <Image
                  src={experience.image}
                  alt={`${experience.company} preview`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="p-6 pt-5">
                <div className="flex items-start justify-between gap-4 pr-10">
                  <div>
                    <h3 className="font-heading text-xl font-700 text-foreground leading-tight">
                      {experience.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">{experience.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="text-xs text-muted">{experience.period}</span>
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

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {experience.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {experience.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted-bg px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(experience.repo || experience.demo) && (
                  <div className="mt-5 flex gap-3">
                    {experience.repo && (
                      <a
                        href={experience.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg border border-card-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-foreground/20 hover:text-foreground"
                      >
                        <GitHubIcon />
                        Repo
                      </a>
                    )}
                    {experience.demo && (
                      <a
                        href={experience.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-1.5 text-sm text-background transition-opacity hover:opacity-80"
                      >
                        <ExternalLinkIcon />
                        Live demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}
