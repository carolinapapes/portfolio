# Carolina Papes — Portfolio

Personal developer portfolio built to present my frontend work, selected projects, CV, and contact information.

The site is focused on clean UI, responsive layouts, bilingual content, and a simple structure that can grow as new portfolio case studies are added.

## Overview

This portfolio introduces my profile as a frontend developer with a design background. It highlights my experience with React, TypeScript, Tailwind CSS, and modern frontend architecture, while also showing full-stack foundations through selected project work.

The current portfolio includes:

- Intro / hero section
- Selected projects
- CV download links
- English and Spanish content
- Contact links
- Responsive layout

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS
- ESLint

## Featured Projects

### Transcendence

Full-stack real-time web platform built as a team project at 42 Barcelona.

Main areas covered:

- Frontend architecture
- Authentication and account flows
- Social features
- Direct messaging
- Real-time interactions with Socket.IO
- Docker / Nginx setup
- Reusable UI structure
- Internationalization

Repository: [42-BCN/Transcendence](https://github.com/42-BCN/Transcendence)

### Business Web Application Refactor

Freelance project focused on refactoring a business web application from vanilla JavaScript to React.

Main areas covered:

- Reusable React components
- Invoice and estimate workflows
- Job tracking UI
- Custom invoice templates
- PDF printing support
- Improved maintainability through component-based structure

## Project Structure

```txt
portfolio/
├── public/              # Static assets and downloadable CV files
├── src/
│   ├── app/             # Next.js App Router pages, layouts, and global styles
│   ├── components/      # Reusable UI and layout components
│   ├── content/         # Portfolio content in English and Spanish
│   ├── styles/          # Design tokens and shared CSS structure
│   └── proxy.ts         # Locale routing / request handling
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/carolinapapes/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the site locally:

```txt
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

## Content Management

Portfolio copy is stored in `src/content`.

```txt
src/content/
├── portfolio.en.ts
├── portfolio.es.ts
└── portfolio.ts
```

To update the English or Spanish version of the site, edit the corresponding content file.

## Localization

The portfolio supports English and Spanish routes.

Current locales:

- English: `/en`
- Spanish: `/es`

## Deployment

This project can be deployed on Vercel or any platform that supports Next.js.

A typical production flow is:

```bash
npm run build
npm run start
```

## Contact

- Email: [carolinapapesdev@gmail.com](mailto:carolinapapesdev@gmail.com)
- LinkedIn: [linkedin.com/in/carolina-papes](https://www.linkedin.com/in/carolina-papes/)
- GitHub: [github.com/carolinapapes](https://github.com/carolinapapes)

## License

This is a personal portfolio project.
