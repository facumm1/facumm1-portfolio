export const hero = {
  name: "Facundo Mamani",
  role: "Fullstack Developer",
  description: "Building web & mobile products that people use.",
  location: "Buenos Aires, Argentina",
  openToWork: true,
};

export const about = {
  text: "Fullstack Developer with 3 years of experience building web and mobile applications, with a strong focus on frontend. Currently studying Computer Engineering at UBA (FIUBA). Moving towards software architecture and engineering best practices. Known for bridging the gap between technical implementation and user needs, translating complex solutions into clear, understandable outcomes for clients.",
};

export const stack = {
  frontend: ["React", "Next.js", "React Native (Expo & CLI)", "TypeScript", "JavaScript", "Tailwind CSS", "React Native Reanimated"],
  backend: ["NestJS", "Node.js", "MongoDB", "MySQL"],
  auth: ["Firebase Auth", "Okta (OAuth 2.0)", "JWT"],
  devops: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Bash Scripting", "Fastlane", "VPS", "Linux"],
  tools: ["Git", "Figma", "Jira", "Claude Code", "Bugsnag"],
};

export const currentlyWorking = {
  name: "Underqubit",
  description: "Multi-tenant SaaS platform for the gastronomy sector.",
}

export const currentlyBuilding = {
  name: "Menu Propio",
  description: "Multi-tenant SaaS platform for the gastronomy sector.",
  status: "Pre-launch in 1 month",
  stack: ["Next.js", "Firebase", "Docker"],
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  type: "Full-time" | "Freelance";
  shortDescription: string;
  description: string;
  bullets: string[];
  stack: string[];
  image: string;
  repo?: string;
  demo?: string;
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Fullstack Developer",
    company: "Underqubit",
    period: "07/2025 – Present",
    type: "Full-time",
    shortDescription: "Delivered features for Apprendemos, an EdTech platform with +10k active users.",
    description: "Working across the full stack on an EdTech platform serving over 10,000 active users. Built critical features including EPUB readers, offline support, and backoffice tooling.",
    bullets: [
      "Delivered end-to-end features across mobile (React Native Expo) and web (+10k active users)",
      "Built EPUB readers (mobile and web) with annotations, highlights, and cross-device sync",
      "Integrated offline mode for the web platform using service workers and cache storage",
      "Extended backoffice features (Next.js) and backend services (NestJS, MongoDB, hexagonal architecture)",
    ],
    stack: ["React Native Expo", "Next.js", "NestJS", "MongoDB"],
    image: "/images/project-placeholder.svg",
  },
  {
    id: "exp-2",
    title: "Frontend Developer",
    company: "Menu Propio",
    period: "01/2026 – Present",
    type: "Freelance",
    shortDescription: "Built a multi-tenant SaaS platform for restaurants from scratch.",
    description: "Architected and built Klik from the ground up — a multi-tenant SaaS platform targeting the gastronomy sector. Two Next.js apps, Firebase-powered auth, and full CI/CD pipeline.",
    bullets: [
      "Built two Next.js apps: tenant management dashboard and public-facing digital menu",
      "Developed modules for orders, products, categories, option groups, delivery zones, customers",
      "Implemented subdomain-based tenant isolation and plan-based feature restrictions",
      "Integrated Firebase Auth with OAuth and email verification",
      "Set up CI/CD pipeline with GitHub Actions and Docker Compose for automated VPS deployment",
    ],
    stack: ["Next.js", "Firebase Auth", "GitHub Actions", "Docker"],
    image: "/images/project-placeholder.svg",
  },
  {
    id: "exp-3",
    title: "Frontend Developer",
    company: "The Orb",
    period: "03/2024 – 01/2025",
    type: "Freelance",
    shortDescription: "Developed interactive UIs for an interactive entertainment platform.",
    description: "Worked on an interactive entertainment platform building custom UIs and integrations with real-time application data through Lua scripting.",
    bullets: [
      "Developed interactive UIs using vanilla JavaScript and React",
      "Implemented Lua scripts to fetch and process real-time application data and render it in custom UIs",
    ],
    stack: ["React", "JavaScript", "Lua"],
    image: "/images/project-placeholder.svg",
  },
  {
    id: "exp-4",
    title: "Mobile Developer",
    company: "Team Laniakea",
    period: "07/2022 – 06/2023",
    type: "Full-time",
    shortDescription: "Built mobile features, auth flows, and deployment automation.",
    description: "Joined as the mobile developer for a React Native CLI app. Owned the OAuth integration with Okta, built out the Fastlane deployment pipeline, and handled production monitoring.",
    bullets: [
      "Implemented OAuth 2.0 authentication using Okta in a React Native CLI application",
      "Built Fastlane scripts for automated deployment to Google Play Store and App Store",
      "Developed mobile UI with React Native Reanimated animations and native styling",
      "Integrated Bugsnag for production error monitoring and crash reporting",
    ],
    stack: ["React Native CLI", "Fastlane", "Okta", "Bugsnag", "GitHub Actions"],
    image: "/images/project-placeholder.svg",
  },
];

export const education = [
  {
    degree: "Computer Engineering",
    institution: "Universidad de Buenos Aires – FIUBA",
    period: "2024 – Present",
  },
  {
    degree: "Electronics Technician",
    institution: "Escuela Técnica N°1 Otto Krause",
    period: "2015 – 2020",
  },
];

export const languages = [
  { language: "Spanish", level: "Native" },
  { language: "English", level: "B2 – Upper Intermediate" },
];

export const contact = {
  github: "github.com/facumm1",
  githubUrl: "https://github.com/facumm1",
  linkedin: "linkedin.com/in/facundo-mamani31",
  linkedinUrl: "https://linkedin.com/in/facundo-mamani31",
  email: "facundomamani120@gmail.com", 
};
