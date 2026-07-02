# Kalyaan Portfolio

A simple, responsive personal portfolio for B Kalyaanakrishnan, focused on backend engineering, AI systems, agentic automation, and LLM tooling roles.

Built with React, Vite, TypeScript, and Tailwind CSS. The site is static and deployable to GitHub Pages.

## Local Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Resume

The site expects a PDF at:

```text
public/resume.pdf
```

Replace that file whenever you want to update the resume. The resume buttons link to `/resume.pdf` and open it in a new tab.

## Updating Portfolio Data

Project content lives in:

```text
src/data/projects.ts
```

Update project titles, categories, tech stacks, descriptions, and repository links there. Profile, experience, and skills content live in `src/data/profile.ts`, `src/data/experience.ts`, and `src/data/skills.ts`.

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

The workflow runs on pushes to `main`, installs dependencies with Node 20, builds the app, uploads `dist`, and deploys to GitHub Pages.

For a user or organization site named `10kalyaan.github.io`, `vite.config.ts` uses:

```ts
base: "/"
```

If deploying from a project repository with a different repo name, change the Vite base to:

```ts
base: "/repo-name/"
```

After pushing to GitHub, enable Pages in the repository settings and choose GitHub Actions as the source.
