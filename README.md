# Extreme Cleaning Services — Website

Next.js (App Router) rebuild of the Extreme Cleaning Services marketing site, replacing the agency-managed
WordPress/Enfold site. Built to be hosted on Vercel with no recurring CMS or hosting-agency fees.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- MDX blog posts stored in the repo (`content/blog/`) — no CMS
- Embla Carousel for the home hero and testimonials
- Cloudflare Turnstile for contact-form spam protection
- Google Tag Manager for analytics

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build
npm run start
```

## Before You Launch — Things To Replace

This build shipped with placeholders everywhere real assets/content weren't available. **Do not go live without
addressing these:**

### Images (`public/images/*.svg`)

Every image is currently a labeled placeholder SVG (colored rectangle + text describing what photo belongs there).
Replace each with a real JPG/PNG/WebP of the same filename-ish purpose, then remove `unoptimized` from the
corresponding `<Image>` components (search for `unoptimized` across `components/` and `app/`) so Next/Image can
properly optimize them. Needed: logo, 3 home hero slides, 8 service hero photos, 2 city hero photos, OG share image,
partner logo, charity badge.

### PDFs (`public/downloads/*.pdf`)

Three placeholder PDFs (team lead job description, cleaning technician job description, post-construction checklist)
just say "placeholder — replace before launch." Swap in the real files, keeping the same filenames, or update the
links in [`app/careers/page.tsx`](app/careers/page.tsx) and [`lib/data/services.ts`](lib/data/services.ts)
(`checklistHref`) if you rename them.

### Copy

All page copy — service descriptions, city pages, testimonials, blog posts — is starter/placeholder content written
to match the brief, not verified real business content. In particular:

- **Testimonials** ([`lib/data/testimonials.ts`](lib/data/testimonials.ts)): names/cities are from the brief, but
  exact wording is placeholder — verify with the actual customers before publishing quotes attributed to them.
- **Partner link** ([`lib/data/site.ts`](lib/data/site.ts)): `site.partner.href` points to `example.com` — add the
  real Healthy Homes Housekeeping URL.

### Contact form + newsletter signup — email delivery not yet wired up

The contact form and newsletter signup both work end-to-end (validation, honeypot, submit) but currently only
`console.log` the submission server-side — **no email actually gets sent yet.** Pick a provider (Resend, Formspree,
etc.), then fill in the `// TODO` blocks in:

- [`app/api/contact/route.ts`](app/api/contact/route.ts)
- [`app/api/newsletter/route.ts`](app/api/newsletter/route.ts)

### Cloudflare Turnstile

The contact form's spam widget silently disables itself until you set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and
`TURNSTILE_SECRET_KEY`. Get free keys at the [Cloudflare Turnstile dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
and set them as environment variables (see `.env.example`) — **do this before launch**, or the form has no real spam
protection beyond the honeypot field.

### Google Tag Manager

Set `NEXT_PUBLIC_GTM_ID` to your GTM container ID (e.g. `GTM-XXXXXXX`) to enable analytics. It's a no-op until set.

## Environment Variables

Copy `.env.example` to `.env.local` for local development, and add the same variables in the Vercel project's
Environment Variables settings for production.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, "Add New Project" → import the repo. Vercel auto-detects Next.js; no build config needed.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Point your domain (`extremecleaning.com`) at Vercel once you're ready to cut over from the current host.

Alternatively, install the [Vercel CLI](https://vercel.com/docs/cli) and run `vercel` from this directory to deploy
without connecting a Git repo.

## Project Structure

- `app/` — routes (one folder per page, matching the old site's URLs, e.g. `/deep-cleaning/`)
- `components/` — UI components, organized by area (`layout/`, `home/`, `templates/`, `blog/`)
- `lib/data/` — site content as typed data files (services, cities, FAQ, testimonials, nav, contact info)
- `content/blog/` — MDX blog posts
- `public/images/`, `public/downloads/` — static assets (see placeholder notes above)

The 8 service pages and 2 city pages each render from a shared template
(`components/templates/ServicePageTemplate.tsx` / `CityPageTemplate.tsx`) fed by an entry in `lib/data/services.ts` /
`lib/data/cities.ts` — to add a new city or service, add a data entry and a small `page.tsx` that imports the
template, rather than hand-building a new page from scratch.
