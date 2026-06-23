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
  footer: {
    copy: "Carolina Papes · Frontend Developer · Barcelona",
  },
};

export type PortfolioContent = typeof content;
