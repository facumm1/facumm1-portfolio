"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { contact } from "@/lib/data";

const links = [
  {
    label: "GitHub",
    value: contact.github,
    href: contact.githubUrl,
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    value: contact.linkedin,
    href: contact.linkedinUrl,
    icon: <LinkedInIcon />,
  },
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: <MailIcon />,
  },
];

export function ContactCard() {
  return (
    <SpotlightCard className="col-span-12 p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-medium text-muted uppercase tracking-wider">Get in touch</span>
          <p className="mt-1.5 font-heading text-xl font-bold text-foreground">
            Let&apos;s build something together.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-xl border border-card-border bg-muted-bg px-4 py-2.5 text-sm text-muted transition-all hover:border-foreground/20 hover:text-foreground"
            >
              <span className="text-foreground/50">{link.icon}</span>
              <span className="text-xs font-medium">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </SpotlightCard>
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

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}
