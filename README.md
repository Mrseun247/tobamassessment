# Tobams Group — Training and Development Page

A pixel-fidelity rebuild of the Tobams Group "Training and Development" marketing page, built with Next.js (App Router) and Tailwind CSS.

**Live URL:**
https://tobamassessment.vercel.app/

**Design reference:**
https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- Tailwind CSS v4 (no other CSS framework or UI kit)
- TypeScript
- Fonts loaded via `next/font` (Poppins for body text, Newsreader italic for the Transformation Hub display heading)
- Images rendered via `next/image`

## Setup

```bash
git clone https://github.com/Mrseun247/tobamassessment.git
cd tobamassessment
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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

- **Imagery**: the source design was only available as flattened PNG screenshots (no Figma export access to individual layers/assets), so every photo, the logo, and the testimonial avatars were cropped directly out of those screenshots at full resolution and committed under `public/images/`. They're real extracted assets, not placeholders or stock substitutes.
- **Hero background**: the hero photo in the source screenshot has the heading/body text already flattened into the pixels (it's a screenshot, not a layered file), so there was no way to crop a text-free version of the full-width photo. Rendering it as-is behind the real semantic `<h1>`/`<p>` would show faint ghosted duplicate text. Instead the extracted photo is rendered with a soft blur (`blur-xl`) behind a dark overlay — it preserves the photo's color and mood while keeping the real, accessible heading text fully legible with no double-text artifact. This is an intentional, documented deviation from a literal crop of the source image.
- **Color palette**: hex values were sampled directly from the source screenshot pixels (not eyeballed) and defined as Tailwind theme tokens in `globals.css` (`--color-maroon-900`, `--color-brand-purple`, `--color-rose`, `--color-ink`, etc.) rather than hardcoded utility colors, so they stay consistent and easy to retune.
- **Fonts**: the body copy uses Poppins as the closest match to the design's rounded sans-serif. The "Transformation Hub With Jite Newton" heading and its "Learning With Our CEO:" eyebrow use a distinct italic serif in the source design — loaded as Newsreader (italic) via `next/font/google` rather than approximated with plain CSS `italic` on the sans-serif font.
- **Navigation links / CTAs** (`About`, `Jobs`, `Take Assessment`, footer links, social icons, etc.) point to placeholder `#anchor` routes since this page was scoped to the Training and Development page only, not the full site's routing.
- **Testimonials**: the design shows 3 cards with prev/next arrow controls; implemented as client-side pagination through the testimonial list 3-at-a-time rather than a full carousel library, to avoid pulling in a third-party dependency for a simple case. A 4th testimonial (Sarah Johnson) that was cropped off the edge of the desktop screenshot was recovered from the mobile screenshot, which showed it in full.
- **Social icons** in the footer are hand-coded inline SVGs (LinkedIn/Instagram/X marks) rather than an icon library, per the "no UI kit" constraint.

## Known issues / caveats

- None currently known. The build compiles cleanly (`npm run build`), lints clean (`npm run lint`), and was verified to have zero horizontally-overflowing elements at 425px, 768px, and 1280px using a real forced viewport (Chrome DevTools Protocol device metrics), not just a resized window.

## AI disclosure

This project was built with the assistance of Claude (Anthropic), used as an AI pair-programmer for scaffolding, component implementation, and this README, per the assessment's disclosure requirement.
