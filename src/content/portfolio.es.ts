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
      title: "Design Tokens Theme System",
      body: "Esta vista previa usa el mismo marcado de tarjeta y botón en las tres columnas. La diferencia visual viene de variables de tokens semánticos: color, tipografía, espaciado, grosor del borde, radio y sombra.",
      role: "Frontend Developer / UI Systems",
      description:
        "Proyecto personal de portfolio enfocado en construir una arquitectura escalable de design tokens. Creé un sistema de tokens de cuatro capas para separar valores base, decisiones de diseño, tokens semánticos de tema y decisiones de estilo a nivel componente. El objetivo fue mostrar cómo una misma interfaz reutilizable puede adaptarse a múltiples estilos visuales sin duplicar componentes React.",
      stack: [
        "React",
        "TypeScript",
        "Next.js",
        "CSS Variables",
        "Tailwind CSS",
        "Design Tokens",
        "Style Dictionary",
        "Storybook",
        "Figma",
      ],
      highlights: [
        "Definí una arquitectura de tokens de cuatro capas: valores, tokens base, tokens semánticos de tema y tokens de componente.",
        "Refactoricé componentes reutilizables del portfolio para consumir clases semánticas de CSS y variables preparadas para tokens.",
        "Creé un sistema de temas donde los mismos componentes de card, botón, badge y navegación pueden adaptarse a estilos Minimal, Neobrutalism y Futuristic.",
        "Mapeé tokens a nivel componente con decisiones semánticas de tema para hacer el sistema más flexible y evitar estilos hardcodeados.",
        "Preparé la estructura de tokens para un futuro flujo con Figma / Tokens Studio y documentación en Storybook.",
      ],
      links: [
        {
          label: "Caso de estudio",
          href: "/es/projects/design-tokens",
        },
        {
          label: "Repositorio",
          href: "https://github.com/carolinapapes/portfolio",
        },
      ],
      feedback: null,
    },
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
  showcase: {
    label: "Sistema de tokens en cuatro capas",
    title: "Una decisión, impacto controlado",
    body: "Cambiar el acento de marca actualiza las acciones primarias y los hover del nav, mientras badges y cards mantienen sus propias decisiones a nivel de componente.",
    preview: {
      eyebrow: "Mismo JSX, distintos tokens",
      title: "Los tokens por capas mantienen el cambio enfocado.",
      body: "Los tokens semánticos definen significado. Los tokens de componente deciden cómo responde cada patrón a ese significado.",
      nav: {
        overview: "Resumen",
        details: "Detalle",
      },
      badges: ["Acento primario", "Badges discretos", "Cards estables"],
      primaryCta: "Acción primaria",
      secondaryCta: "Acción secundaria",
    },
    themes: {
      minimal: {
        name: "Minimal",
        note: "El acento se concentra en las acciones, mientras la estructura alrededor se mantiene contenida.",
      },
      neobrutalism: {
        name: "Neobrutalismo",
        note: "Los bordes y las sombras se vuelven más expresivos sin obligar a las etiquetas o tarjetas a heredar el acento.",
      },
      futuristic: {
        name: "Futurista",
        note: "Las acciones brillan en cian, mientras la estructura de la tarjeta y los bordes de las etiquetas se mantienen visualmente separados.",
      },
      softPop: {
        name: "Soft Pop",
        note: "Las formas redondeadas, el contraste suave y el color lúdico crean una interfaz más cálida y cercana.",
      },
      terminal: {
        name: "Terminal",
        note: "La tipografía monoespaciada, las superficies oscuras y los acentos verdes crean una estética enfocada de línea de comandos.",
      },
      luxury: {
        name: "Luxury",
        note: "Los tonos cálidos, la tipografía serif y los acentos dorados crean una sensación editorial y refinada.",
      },
    },
  },
  footer: {
    copy: "Carolina Papes · Desarrolladora Frontend · Barcelona",
  },
};

export type PortfolioContent = typeof content;
