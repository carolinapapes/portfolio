export const content = {
  locale: "es",
  nav: {
    name: "Carolina Papes",
    projects: "Proyectos",
    cv: "CV",
    cvHref: "/Carolina_Papes_CV_ES.pdf",
    contact: "Contacto",
    langSwitch: "EN",
    langSwitchAriaLabel: "Cambiar idioma a inglés",
    langSwitchHref: "/en",
  },
  hero: {
    role: "Desarrolladora frontend",
    kicker: "React, TypeScript y UI orientada a producto",
    headline: "Desarrolladora frontend con background en diseño.",
    body: "Construyo aplicaciones web limpias, responsivas y mantenibles con React, TypeScript, Tailwind CSS y arquitectura frontend moderna.",
    ctas: {
      projects: { label: "Ver proyectos", href: "#projects" },
      cv: { label: "Descargar CV", href: "/Carolina_Papes_CV_ES.pdf" },
      github: { label: "GitHub", href: "https://github.com/carolinapapes" },
    },
  },
  stats: [
    "4+ años de experiencia frontend",
    "React / TypeScript / Next.js",
    "Background en diseño y desarrollo",
    "Barcelona",
  ],
  projects: [
    {
      title: "Transcendence",
      subtitle: "Plataforma web full-stack en tiempo real",
      role: "Tech Lead / Desarrolladora Frontend & Full-Stack",
      description:
        "Proyecto en equipo desarrollado en 42 Barcelona. Contribuí a la arquitectura frontend, flujos de autenticación, funcionalidades sociales, mensajería directa, interacciones en tiempo real, documentación y setup de Docker/Nginx.",
      stack: [
        "React",
        "TypeScript",
        "Next.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Socket.IO",
        "Docker",
        "Nginx",
        "Tailwind CSS",
        "Storybook",
        "i18n",
      ],
      highlights: [
        "Definí y mejoré la estructura frontend, patrones reutilizables de UI y estándares técnicos.",
        "Trabajé en rutas protegidas, perfil, verificación de email, recuperación de contraseña y Google OAuth.",
        "Construí y mejoré perfiles, flujos de amistad, presencia, mensajería directa e invitaciones a salas de juego.",
        "Contribuí a actualizaciones en tiempo real usando Socket.IO.",
        "Trabajé en Docker, Nginx, HTTPS local y flujos de desarrollo containerizados.",
      ],
      links: [
        {
          label: "Repositorio",
          href: "https://github.com/42-BCN/Transcendence",
        },
      ],
      feedback: null,
    },
    {
      title: "Refactor de aplicación web de negocio",
      subtitle: "De vanilla JavaScript a React",
      role: "Desarrolladora Frontend",
      description:
        "Proyecto freelance para cliente enfocado en refactorizar una aplicación web de negocio de vanilla JavaScript a React. La aplicación incluía gestión de facturas, presupuestos, seguimiento de trabajos, plantillas custom de facturas e impresión PDF.",
      stack: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "GitHub Projects",
        "Postman",
        "Puppeteer",
        "Jest",
      ],
      highlights: [
        "Refactoricé UI existente de vanilla JavaScript a componentes reutilizables en React.",
        "Construí componentes frontend para flujos de facturas, presupuestos y seguimiento de trabajos.",
        "Implementé vistas personalizadas de facturas y plantillas custom.",
        "Apoyé funcionalidad de impresión PDF para documentos de negocio.",
        "Mejoré la mantenibilidad separando lógica de UI en patrones basados en componentes.",
        "Traduje requerimientos de cliente en funcionalidades frontend y entregables testeables.",
      ],
      links: [],
      feedback: null,
    },
  ],
  languages: {
    heading: "Idiomas",
    items: [
      { lang: "Español", level: "Nativo / Bilingüe" },
      { lang: "Inglés", level: "Competencia profesional" },
    ],
  },
  contact: {
    heading: "Conectemos",
    body: "Actualmente estoy buscando oportunidades como desarrolladora frontend donde pueda contribuir a interfaces limpias, código React mantenible y experiencias web orientadas a producto.",
    links: [
      {
        label: "Email",
        href: "mailto:carolinapapesdev@gmail.com",
        display: "carolinapapesdev@gmail.com",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/carolina-papes/",
        display: "linkedin.com/in/carolina-papes",
      },
      {
        label: "GitHub",
        href: "https://github.com/carolinapapes",
        display: "github.com/carolinapapes",
      },
    ],
  },
  footer: {
    copy: "Carolina Papes · Desarrolladora Frontend · Barcelona",
  },
};

export type PortfolioContent = typeof content;
