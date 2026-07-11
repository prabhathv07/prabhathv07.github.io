# Portfolio — Prabhath Vinay Vipparthi

Personal portfolio built with Next.js 16, TypeScript, Tailwind v4, Framer Motion, React Three Fiber, and Lenis smooth scrolling. Deployed to GitHub Pages via GitHub Actions.

- **Live:** https://prabhathv07.github.io
- **Resume:** [/resume.pdf](https://prabhathv07.github.io/resume.pdf)

## Stack

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion — animations & transitions
- React Three Fiber + Three.js — 3D neural sphere in the hero
- Lenis — smooth scrolling
- Custom cursor with hover states

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static export lands in `out/`.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
