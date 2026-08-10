# Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20.15.1 (or newer)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

All portfolio content (profile, skills, projects, experience, education) lives in one file:

```
src/data/portfolio.ts
```

Replace the dummy data there with your real information — every section on the page reads from it, so no other files need to change. Project screenshots go in `public/projects/`, and your photo/avatar goes in `public/avatar.svg` (or update `avatarUrl` to point at a different file, e.g. `.png`/`.jpg`).

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [lucide-react](https://lucide.dev) for icons

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new). Push this repo to GitHub, import it in Vercel, and it will build and deploy automatically.
