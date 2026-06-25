export const content = {
  locale: "en",
  nav: {
    name: "Carolina Papes",
    projects: "Projects",
    cv: "CV",
    cvHref: "/Carolina_Papes_CV_EN.pdf",
    contact: "Contact",
    langSwitch: "ES",
    langSwitchAriaLabel: "Switch language to Spanish",
    langSwitchHref: "/es",
  },
  hero: {
    role: "Frontend developer",
    kicker: "React, TypeScript, and product-minded UI",
    headline: "Frontend developer with a design background.",
    body: "I build clean, responsive, and maintainable web applications with React, TypeScript, Tailwind CSS, and modern frontend architecture.",
    ctas: {
      projects: { label: "View Projects", href: "#projects" },
      cv: { label: "Download CV", href: "/Carolina_Papes_CV_EN.pdf" },
      github: { label: "GitHub", href: "https://github.com/carolinapapes" },
    },
  },
  stats: [
    "4+ years frontend experience",
    "React / TypeScript / Next.js",
    "Design + development background",
    "Based in Barcelona",
  ],
  projects: [
    {
      title: "Design Tokens Theme System",
      subtitle: "Token-driven visual system for a frontend portfolio",
      role: "Frontend Developer / UI Systems",
      description:
        "Personal portfolio project focused on building a scalable design-token architecture. I created a four-layer token system to separate raw values, base design decisions, semantic theme tokens, and component-level styling decisions. The goal was to show how one reusable interface can support multiple visual styles without duplicating React components.",
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
        "Defined a four-layer token architecture: values, base tokens, semantic theme tokens, and component tokens.",
        "Refactored reusable portfolio components to consume semantic CSS classes and token-ready variables.",
        "Created a theme system where the same card, button, badge, and navigation components can adapt to Minimal, Neobrutalism, and Futuristic visual styles.",
        "Mapped component-level tokens to semantic theme decisions to make the system more flexible and avoid hardcoded styling.",
        "Prepared the token structure for a future Figma / Tokens Studio workflow and Storybook documentation.",
      ],
      links: [
        {
          label: "Case study",
          href: "en/projects/design-tokens",
        },
        {
          label: "Repository",
          href: "https://github.com/carolinapapes/portfolio",
        },
      ],
      feedback: null,
    },
    {
      title: "Transcendence",
      subtitle: "Full-stack real-time web platform",
      role: "Tech Lead / Frontend & Full-Stack Developer",
      description:
        "Team project built at 42 Barcelona. I contributed to frontend architecture, authentication flows, social features, direct messaging, real-time interactions, documentation, and Docker/Nginx setup.",
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
        "Defined and improved frontend structure, reusable UI patterns, and technical standards.",
        "Worked on protected routes, profile management, email verification, password recovery, and Google OAuth.",
        "Built and improved profiles, friendship flows, presence, direct messaging, and game room invitations.",
        "Contributed to real-time updates using Socket.IO.",
        "Worked on Docker, Nginx, local HTTPS, and containerized development workflows.",
      ],
      links: [
        {
          label: "Repository",
          href: "https://github.com/42-BCN/Transcendence",
        },
      ],
      feedback: null,
    },
    {
      title: "Business Web Application Refactor",
      subtitle: "Vanilla JavaScript to React",
      role: "Frontend Developer",
      description:
        "Freelance client project focused on refactoring a business web application from vanilla JavaScript to React. The app supported invoice management, estimate creation, job tracking, custom invoice templates, and PDF printing.",
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
        "Refactored existing vanilla JavaScript UI into reusable React components.",
        "Built frontend components for invoice, estimate, and job-tracking workflows.",
        "Implemented custom invoice views and invoice templates.",
        "Supported PDF printing functionality for client-facing business documents.",
        "Improved maintainability by separating UI logic into clearer component-based patterns.",
        "Translated client requirements into frontend features and testable delivery items.",
      ],
      links: [],
      feedback:
        "Carolina is the needle in the haystack. Her skills, cooperation and communication exceeded my expectations.",
    },
  ],
  languages: {
    heading: "Languages",
    items: [
      { lang: "Spanish", level: "Native / Bilingual" },
      { lang: "English", level: "Professional working proficiency" },
    ],
  },
  contact: {
    heading: "Let's connect",
    body: "I'm currently looking for frontend developer opportunities where I can contribute to clean UI, maintainable React code, and product-oriented web experiences.",
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
    label: "Four-layer token system",
    title: "One decision, controlled impact",
    body: "This preview uses the same card and button markup in all three columns. The visual difference comes from semantic token variables: color, typography, spacing, border width, radius, and shadow.",
    preview: {
      eyebrow: "Featured project",
      title: "Design Tokens Showcase",
      body: "Semantic tokens define meaning. Component tokens decide how each pattern responds to that meaning.",
      nav: {
        overview: "Overview",
        details: "Details",
      },
      badges: ["Primary accent", "Quiet badges", "Stable cards"],
      primaryCta: "Primary action",
      secondaryCta: "Secondary action",
    },
    themes: {
      minimal: {
        name: "Minimal",
        note: "Accent is concentrated on actions while the surrounding structure stays restrained.",
      },
      neobrutalism: {
        name: "Neobrutalism",
        note: "Borders and shadows become louder without forcing badges or cards to inherit the accent.",
      },
      futuristic: {
        name: "Futuristic",
        note: "Actions glow in cyan while the card structure and badge borders stay visually separate.",
      },
      terminal: {
        name: "Terminal",
        note: "Monospace typography, dark surfaces, and green accents create a focused command-line mood.",
      },
    },
  },
  footer: {
    copy: "Carolina Papes · Frontend Developer · Barcelona",
  },
};

export type PortfolioContent = typeof content;
