export type Lang = "en" | "es";

export const translations = {
  en: {
    ui: {
      about: "About",
      education: "Education",
      languages: "Languages",
      currentlyBuilding: "Currently building",
      inProgress: "In progress",
      experience: "Experience",
      getInTouch: "Get in touch",
      letsBuild: "Let's build something together.",
      clickToExpand: "Click to expand →",
      sayHi: "Say hi →",
      techStack: "Tech stack",
      openToWork: "Open to work",
      currentlyWorkingFor: "Currently working for",
      freelancingFor: "Freelancing for",
      fullTime: "Full-time",
      freelance: "Freelance",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Tools",
    },
    hero: {
      role: "Fullstack Developer",
      description: "Building web & mobile products that people use.",
    },
    about: {
      text: "Fullstack Developer with 3 years of experience building web and mobile applications, with a strong focus on frontend. Currently studying Computer Engineering at UBA (FIUBA). Moving towards software architecture and engineering best practices. Known for bridging the gap between technical implementation and user needs, translating complex solutions into clear, understandable outcomes for clients.",
    },
    currentlyBuilding: {
      description: "Multi-tenant SaaS platform for the gastronomy sector.",
      status: "Pre-launch in 1 month",
    },
    experiences: {
      "exp-1": {
        shortDescription: "Delivered features for Apprendemos, an EdTech platform with +10k active users.",
        description: "Working across the full stack for Apprendemos, an EdTech platform serving over 10,000 active users. Built critical features including EPUB readers, offline support, and backoffice tooling.",
        bullets: [
          "Delivered end-to-end features across mobile (React Native Expo) and web (+10k active users)",
          "Built EPUB readers (mobile and web) with annotations, highlights, and cross-device sync",
          "Integrated offline mode for the web platform using service workers and cache storage",
          "Extended backoffice features (Next.js) and backend services (NestJS, MongoDB, hexagonal architecture)",
        ],
      },
      "exp-2": {
        shortDescription: "Built a multi-tenant SaaS platform for restaurants from scratch.",
        description: "A multi-tenant SaaS platform targeting the gastronomy sector. Two Next.js apps, Firebase-powered auth, and full CI/CD pipeline. Pre-launch in 1 month.",
        bullets: [
          "Built two Next.js apps: tenant management dashboard and public-facing digital menu",
          "Developed modules for orders, products, categories, option groups, delivery zones, customers",
          "Implemented subdomain-based tenant isolation and plan-based feature restrictions",
          "Integrated Firebase Auth with OAuth and email verification",
          "Set up CI/CD pipeline with GitHub Actions and Docker Compose for automated VPS deployment",
        ],
      },
      "exp-3": {
        shortDescription: "Developed interactive UIs for an interactive entertainment platform.",
        description: "Worked on an interactive entertainment platform building custom UIs and integrations with real-time application data through Lua scripting.",
        bullets: [
          "Developed interactive UIs using vanilla JavaScript and React",
          "Implemented Lua scripts to fetch and process real-time application data and render it in custom UIs",
        ],
      },
      "exp-4": {
        shortDescription: "Built mobile features, auth flows, and deployment automation.",
        description: "Joined as the mobile developer for a React Native CLI app built for a fast food chain. The platform guided new employees through seasonal training plans — covering combo preparation, ice cream, and other menu items — with progress tracking to monitor their onboarding. Owned the OAuth integration with Okta, built out the Fastlane deployment pipeline, and handled production monitoring.",
        bullets: [
          "Implemented OAuth 2.0 authentication using Okta in a React Native CLI application",
          "Built Fastlane scripts for automated deployment to Google Play Store and App Store",
          "Developed mobile UI with React Native Reanimated animations and native styling",
          "Integrated Bugsnag for production error monitoring and crash reporting",
        ],
      },
    },
    education: [
      { degree: "Computer Engineering", institution: "Universidad de Buenos Aires – FIUBA", period: "2024 – Present" },
      { degree: "Electronics Technician", institution: "Escuela Técnica N°1 Otto Krause", period: "2015 – 2020" },
    ],
    languages: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "B2 – Upper Intermediate" },
    ],
  },
  es: {
    ui: {
      about: "Sobre mí",
      education: "Educación",
      languages: "Idiomas",
      currentlyBuilding: "Actualmente construyendo",
      inProgress: "En progreso",
      experience: "Experiencia",
      getInTouch: "Contacto",
      letsBuild: "Construyamos algo juntos.",
      clickToExpand: "Click para expandir →",
      sayHi: "Saludar →",
      techStack: "Stack tecnológico",
      openToWork: "Disponible",
      currentlyWorkingFor: "Actualmente trabajando en",
      freelancingFor: "Freelanceando en",
      fullTime: "Tiempo completo",
      freelance: "Freelance",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Herramientas",
    },
    hero: {
      role: "Desarrollador Fullstack",
      description: "Construyendo productos web y móviles que la gente usa.",
    },
    about: {
      text: "Desarrollador Fullstack con 3 años de experiencia construyendo aplicaciones web y móviles, con fuerte enfoque en frontend. Actualmente estudiando Ingeniería en Informática en la UBA (FIUBA). Avanzando hacia arquitectura de software y buenas prácticas de ingeniería. Reconocido por conectar la implementación técnica con las necesidades del usuario, traduciendo soluciones complejas en resultados claros y comprensibles para los clientes.",
    },
    currentlyBuilding: {
      description: "Plataforma SaaS multi-tenant para el sector gastronómico.",
      status: "Pre-lanzamiento en 1 mes",
    },
    experiences: {
      "exp-1": {
        shortDescription: "Desarrollé funcionalidades para Apprendemos, una plataforma EdTech con +10k usuarios activos.",
        description: "Trabajando en el stack completo de Apprendemos, una plataforma EdTech con más de 10.000 usuarios activos. Construí funcionalidades críticas incluyendo lectores EPUB, soporte offline y herramientas de backoffice.",
        bullets: [
          "Desarrollé funcionalidades end-to-end en mobile (React Native Expo) y web (+10k usuarios activos)",
          "Construí lectores EPUB (mobile y web) con anotaciones, highlights y sincronización entre dispositivos",
          "Integré modo offline en la plataforma web usando service workers y cache storage",
          "Extendí funcionalidades del backoffice (Next.js) y servicios backend (NestJS, MongoDB, arquitectura hexagonal)",
        ],
      },
      "exp-2": {
        shortDescription: "Construí una plataforma SaaS multi-tenant para restaurantes desde cero.",
        description: "Una plataforma SaaS multi-tenant orientada al sector gastronómico. Dos aplicaciones Next.js, autenticación con Firebase y pipeline completo de CI/CD. Pre-lanzamiento en 1 mes.",
        bullets: [
          "Construí dos apps Next.js: panel de gestión de tenants y menú digital público",
          "Desarrollé módulos para pedidos, productos, categorías, grupos de opciones, zonas de entrega y clientes",
          "Implementé aislamiento de tenants por subdominio y restricciones de funcionalidades por plan",
          "Integré Firebase Auth con OAuth y verificación por email",
          "Configuré pipeline CI/CD con GitHub Actions y Docker Compose para despliegue automatizado en VPS",
        ],
      },
      "exp-3": {
        shortDescription: "Desarrollé UIs interactivas para una plataforma de entretenimiento.",
        description: "Trabajé en una plataforma de entretenimiento interactivo construyendo UIs personalizadas e integraciones con datos de la aplicación en tiempo real mediante scripting Lua.",
        bullets: [
          "Desarrollé UIs interactivas usando JavaScript vanilla y React",
          "Implementé scripts Lua para obtener y procesar datos en tiempo real y renderizarlos en UIs personalizadas",
        ],
      },
      "exp-4": {
        shortDescription: "Construí funcionalidades mobile, flujos de auth y automatización de despliegue.",
        description: "Me uní como desarrollador mobile de una app React Native CLI construida para una cadena de comida rápida. La plataforma guiaba a nuevos empleados en planes de capacitación estacionales — preparación de combos, helados y otros ítems del menú — con seguimiento de progreso para monitorear su incorporación. Estuve a cargo de la integración OAuth con Okta, el pipeline de despliegue con Fastlane y el monitoreo en producción.",
        bullets: [
          "Implementé autenticación OAuth 2.0 con Okta en una aplicación React Native CLI",
          "Construí scripts Fastlane para despliegue automatizado en Google Play Store y App Store",
          "Desarrollé UI mobile con animaciones React Native Reanimated y estilos nativos",
          "Integré Bugsnag para monitoreo de errores y reporte de crashes en producción",
        ],
      },
    },
    education: [
      { degree: "Ingeniería en Informática", institution: "Universidad de Buenos Aires – FIUBA", period: "2024 – Presente" },
      { degree: "Técnico en Electrónica", institution: "Escuela Técnica N°1 Otto Krause", period: "2015 – 2020" },
    ],
    languages: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "B2 – Intermedio Alto" },
    ],
  },
} as const;

export type Translations = typeof translations.en | typeof translations.es;
