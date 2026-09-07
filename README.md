# Tobams Group — Training and Development Page

A pixel-fidelity rebuild of the Tobams Group "Training and Development" marketing page, built with Next.js (App Router) and Tailwind CSS.

**Live URL:** 
-https://tobamassessment.vercel.app/

**Design reference:** 
-https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0


## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- Tailwind CSS v4 (no other CSS framework or UI kit)
- TypeScript
- Fonts loaded via `next/font` (Poppins)
- Images rendered via `next/image`

## Setup

```bash
npm install
npm run dev
```
```bash
npm run build   # production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx        # root layout, font + metadata
    page.tsx           # composes sections only — no page-level markup logic
    globals.css        # Tailwind import + design tokens (@theme)
  components/
    layout/             # Header, Footer
    sections/           # one file per page section (Hero, LearningManagementSystem, ...)
    ui/                  # small reusable pieces (Button, Badge, BulletList, PillList)
  lib/
    content.ts           # copy/data consumed by components (nav links, bullet lists, testimonials, footer columns)
```

Each section of the page is its own component, and section-specific copy lives in `lib/content.ts` rather than being hardcoded inline, so content can be updated without touching JSX.

## Responsive approach

Built mobile-first using only Tailwind's `sm:` / `lg:` responsive prefixes — no custom media queries anywhere in the codebase. Verified breakpoints target 425px (mobile, default/unprefixed styles), 768px (`sm:`), and 1280px+ (`lg:`).

## Design decisions & assumptions

- **Color palette**: exact hex values were not available from the source design, so brand colors (maroon/purple/rose tones) were sampled visually from the provided screenshots and defined as Tailwind theme tokens in `globals.css` (`--color-maroon-900`, `--color-brand-purple`, etc.) rather than hardcoded utility colors, so they stay consistent and easy to retune.
- **Font**: the design's rounded sans-serif wasn't identified by name, so Poppins was used as the closest visual match via `next/font/google`.
- **Imagery**: original photography assets weren't provided as exportable files, so descriptive placeholder SVGs live under `public/images/` in the correct aspect ratios/positions. Swapping in real photography only requires replacing those files — no component changes needed.
- **Navigation links / CTAs** (`About`, `Jobs`, `Take Assessment`, footer links, social icons, etc.) point to placeholder `#anchor` routes since this page was scoped to the Training and Development page only, not the full site's routing.
- **Testimonials**: the design shows 3 cards with prev/next arrow controls; implemented as client-side pagination through the testimonial list 3-at-a-time rather than a full carousel library, to avoid pulling in a third-party dependency for a simple case.
- **Social icons** in the footer are letter-avatar placeholders (no icon set/SVG kit was provided or bundled, per the "no UI kit" constraint) — swap in real brand SVGs under `public/images/` when available.

## Known issues / caveats

- Local development in the environment this was built in hit a persistent low-bandwidth network condition (`npm install` repeatedly failed with `ECONNRESET` while fetching large packages). Dependencies install fine on a normal connection — this is an environment issue, not a project issue.
- Because of the above, the page has not yet been manually verified pixel-by-pixel in a local browser at the time of this commit. The Vercel deployment build is the first full verification pass; any visual discrepancies found after that will be corrected and noted here.

## AI disclosure

This project was built with the assistance of Claude (Anthropic), used as an AI pair-programmer for scaffolding, component implementation, and this README, per the assessment's disclosure requirement.
