# Patchland

<p align="center">
  <img src="static/img/logo.svg" alt="Patchland logo — Res Publica Mundi" width="150">
</p>

> Res Publica Mundi — A distributed, imaginary nation built one Patch at a time.

Patchland is a collaborative world-building project where people voluntarily dedicate a small portion of a place they legitimately use (garden, yard, balcony, etc.) as a **Patch**.

The project is purely symbolic and recreational, with no legal, political, or territorial claims.

---

## Table of Contents

- [Project Overview](#project-overview)
- [UX](#ux)
  - [User Stories](#user-stories)
  - [Strategy](#strategy)
  - [Scope](#scope)
  - [Structure](#structure)
  - [Skeleton](#skeleton)
  - [Surface](#surface)
- [Objectives](#objectives)
- [Core Principles](#core-principles)
- [Features & Roadmap](#features--roadmap)
  - [Implemented Features](#implemented-features-v01)
  - [Roadmap](#roadmap)
- [Requirements for a Patch](#requirements-for-a-patch)
- [The Custodian, Citizenship & Tourism](#the-custodian-citizenship--tourism)
- [World Map & Provinces](#world-map--provinces)
- [Collectibles & Symbols](#collectibles--symbols)
- [Slogans](#slogans)
- [UX/UI — Style, Colors & Interaction Guide](#uxui--style-colors--interaction-guide)
  - [Colors](#colors)
  - [Typography](#typography)
  - [Layout](#layout)
  - [Components](#components)
  - [Motion & Effects](#motion--effects)
  - [UX & Accessibility](#ux--accessibility)
- [Architecture](#architecture)
  - [System Overview](#system-overview)
  - [Technology Stack](#technology-stack)
  - [Data Flow](#data-flow)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Developer Guide](#developer-guide)
  - [Project layout](#project-layout)
  - [Conventions](#conventions)
  - [Useful commands](#useful-commands)
- [Testing](#testing)
- [Deployment](#deployment)
- [Security](#security)
- [SEO](#seo)
- [Integrations](#integrations)
- [Troubleshooting](#troubleshooting)
- [Credits](#credits)
- [License](#license)
- [Bug Log](#bug-log)

---

## Project Overview

**Patchland** ("Res Publica Mundi") is a collaborative world-building project in which
people voluntarily dedicate a small portion of a place they legitimately use
(garden, yard, balcony, …) as a **Patch** — a square meter of real, meaningful space
that belongs to a shared, imaginary nation.

| | |
| --- | --- |
| **Version** | v0.1 — Foundation (concept + UI/UX) |
| **Status** | In development |
| **Backend** | Python · Django · Django Ninja |
| **Frontend** | Tailwind CSS · Alpine.js |
| **Database** | SQLite (dev) · PostgreSQL (prod) |
| **License** | MIT |

The project is purely symbolic and recreational, with no legal, political or
territorial claims. The nation grows one Patch at a time — no borders, just stories.

---

## UX

- **Vision/Mission** from the concept: a distributed, symbolic nation built *one Patch at a time* — purely symbolic and recreational, with no claims.
- **Positioning and community philosophy** — inspired by **"The Art of Community" by Jono Bacon**: communities work when there is shared purpose, participation and a sense of belonging; participation is the product, not a feature. Patchland is born from the desire to feel like *citizens of the world*: unlike certain micro-states created to **isolate** from a world in which people don't feel free, Patchland does not detach from humanity — freedom is not a border, but communities that work, shared places and mutual stories. "Community before territory" (key principle of the concept) becomes the strategic thesis.

### User Stories

> To be populated...

### Strategy

**Project goal:** creation of a distributed community built *one Patch at a time*.

**Value proposition per persona:**

| Persona | Value proposition |
| --- | --- |
| **Visitor** | Inspiration and belonging without commitment — explore the nation and decide whether to join. |
| **Citizen** | Belonging, travel and the digital passport — connect with other citizens and collect stamps. |
| **Custodian** | Contribution, expansion and hospitality — grow the nation and welcome visitors. |
| **Administrator** | Governance and quality — validate, moderate and monitor the nation. |

### Scope

**Functional:**

- Patch registration: name, custodian, coordinates, area, foundation date, province, optional photos, short history.
- Official seal: unique, numbered, personalised, permanently linked to a single Patch (National Archive).
- Digital Passport: Patch stamps, commemorative events, visited provinces.
- Tourism access levels: Public / Visit on request / Private.
- Provinces: Patches grouped into Provinces across the globe.
- Citizenship: anyone who registers at least one Patch becomes a citizen.
- Symbolic titles by maintained area, contribution, seniority, community participation.
- Collectibles: coins, stamps, seals, certificates, flags, coats of arms.
- Community-maintained Constitution.
- Public statistics: territory, Patches, citizens, Provinces, countries, seals, passports.
- Interactive world map with real Patches and real coordinates.
- Newsletter subscription.

**Non-functional:**

- Purely symbolic and recreational — no legal, political or territorial claims.
- Accessibility: reduced-motion support, no-JS fallback, semantic HTML & ARIA.
- Fully responsive: mobile tab bar, desktop pill header.
- Resilient UI: server-rendered fallbacks for live counters.

**Out of scope (v0.1):** real data models, authentication, physical stamps.

### Structure

The information architecture follows the user journey Visitor → Citizen → Custodian:

| Level | Pages / areas |
| --- | --- |
| Public (Visitor) | Home, Manifesto, World Map, Register (concept), newsletter |
| Registered (Citizen) | Profile, digital Passport, contact with other citizens |
| Custodian | Patch management, story & seal, hospitality, stamp release |
| Administrator | Validation of Custodian requests, moderation, monitoring |

Already implemented (v0.1): Home, Manifesto, World Map, Passport, Profile, Register — concept / static UI. Data flows land in v0.2.

### Skeleton

- Every page opens with a dark forest hero (shared `partials/page-hero.html`) with entrance cascade and wave divider.
- Sections follow an `eyebrow` + `section-title` header pattern over parchment cards.
- Card grids: `md:grid-cols-2`, `md:grid-cols-3`, `lg:grid-cols-4`.
- Scroll-triggered entrances via the shared `reveal` component.
- Register flow: concept form — validation and submission in v0.2.

### Surface

Fully specified in the [UX/UI — Style, Colors & Interaction Guide](#uxui--style-colors--interaction-guide): forest / parchment / brass / ink palette, Cormorant Garamond + Source Sans 3 typography, motion & accessibility rules.

---

## Objectives

* Build the world's largest distributed symbolic nation.
* Connect people through meaningful places.
* Encourage exploration and tourism between Patchland citizens.
* Preserve the history of every Patch.

---

## Core Principles

* **One Patch at a time.**
* **Every Patch has a story.**
* **Every citizen contributes equally.**
* **The nation is distributed across the world.**
* **Community comes before territory.**

---

## Features & Roadmap

The development phases referenced across the project:

- **v0.1 — Foundation (current):** concept, design system, UI pages and public API.
- **v0.2 — Nation Data (planned):** data models and real nation features.
- **v0.3+ — Future ideas:** advanced collectibles and community features.

### Implemented Features (v0.1)

**Landing & pages**

- Landing page with asymmetric dark hero, entrance animations, live nation counters and featured Patch cards.
- Manifesto, World Map, Passport, Profile and Register pages (concept / static UI).
- Shared reusable hero partial (`partials/page-hero.html`) with entrance cascade + animated wave divider.

**Navigation & motion**

- Responsive navbar: floating mobile tab bar with animated indicator + desktop pill header.
- Scroll-triggered entrance animations (`reveal` component, shared `static/js/reveal.js`).
- Parallax background spheres, animated wave dividers, floating illustrations, live-status dots.

**Design system**

- Tailwind design tokens: forest / parchment / brass / ink palette, display + body typography.
- Reusable components: buttons, cards, badges, icons (Heroicons), navigation, decorative layers.
- Documented in the [UX/UI Style Guide](#uxui--style-colors--interaction-guide).

**API & infrastructure**

- Django Ninja API: `GET /api/home/stats` (simulated nation statistics via the service layer).
- Interactive API docs at `/api/docs`, readiness probe at `/healthz`.
- Shared project-level static assets (`static/`) with documented conventions.

### Roadmap

> Source: `Patchland_Concept_v0.1.md` ("Future Ideas") and the v0.2 references in the templates.

| Feature | Status | Milestone |
| --- | --- | --- |
| Data models: Patch, Custodian, Province, Seal, Passport | 📌 Planned | v0.2 |
| Real nation statistics aggregated from the database | 📌 Planned | v0.2 |
| Interactive world map (real Patches, real coordinates) | 📌 Planned | v0.2 |
| Citizen profiles & citizenship | 📌 Planned | v0.2 |
| Patch registration form with submission handling | 📌 Planned | v0.2 |
| Digital Passport with stamps & seals | 📌 Planned | v0.3+ |
| Collectibles: coins, flags, coats of arms, certificates | 📌 Planned | v0.3+ |
| Community-maintained Constitution | 📌 Planned | v0.3+ |
| Missions & badges | 💡 Future idea | v0.3+ |
| Historical archive & conservation levels | 💡 Future idea | v0.3+ |
| Twin Patches & Annual Patch Day | 💡 Future idea | v0.3+ |
| Leaderboards & community voting | 💡 Future idea | v0.3+ |
| Symbolic titles by area / contribution / seniority | 💡 Future idea | v0.3+ |
| Tourism access levels (Public / on request / Private) | 💡 Future idea | v0.3+ |

---

## Requirements for a Patch

1. **Availability of the Space:** The Custodian must legitimately have access to the space (ownership, rental, permission, etc.).
2. **Minimum Size:** Minimum area of **1 square meter (1 m²)**.
3. **Defined Boundaries:** The Patch must have clearly identifiable limits.
4. **Official Name:** Every Patch has a unique name (e.g., *Raven Grove*, *Aurora Garden*, *Patch 51*).
5. **Registration:** Each Patch records its Name, Custodian, Coordinates, Area, Foundation Date, Province, optional photos, and a short history.
6. **Official Seal (Mandatory):** Each Patch owns a unique, numbered, and personalized seal registered in the National Archive to stamp visitors' passports.
7. **Story:** Every Patch tells a story, even if only a single sentence.

---

## The Custodian, Citizenship & Tourism

* **The Custodian:** Responsible for maintaining information, preserving the seal, and welcoming visitors when possible.
* **Citizenship:** Anyone who registers at least one Patch becomes a citizen. Symbolic titles may depend on maintained area, contribution, seniority, or community participation.
* **Passport:** Citizens can obtain a Patchland Passport to collect Patch stamps, commemorative event marks, and visited provinces.
* **Tourism & Access:** Each Patch can set its visibility and access level:
  * **Public**
  * **Visit on request**
  * **Private**

---

## World Map & Provinces

Patches are grouped into **Provinces** across the globe. The interactive world map displays:

* All registered Patches & total territory area.
* Citizens & registered seals.
* Active provinces & represented countries.

---

## Collectibles & Symbols

* Passport & Digital Stamps
* Official Seals & Certificates
* Symbolic Coins, Flags, and Coats of Arms
* Community-maintained Constitution

---

## Slogans

* *One Patch. One Citizen. One World.*
* *Building the World's Largest Distributed Nation.*
* *One Square at a Time.*
* *Every Patch Tells a Story.*
* *Ex multis, una terra.*

---

## UX/UI — Style, Colors & Interaction Guide

Every page and app in this project shares a single visual language: a warm
"paper & brass" aesthetic over deep forest green, with subtle, purposeful motion.
This guide is the reference for building any new page or app in this repository —
follow it to keep the experience consistent.

### Colors

#### Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `forest` 50 → 950 | `#f1f7f3` → `#0e2017` | Dark sections, heroes, headings on light |
| `parchment` 50 → 500 | `#fffdf8` → `#d0b27a` | Page background, card surfaces, aged-paper feel |
| `brass` 50 → 900 | `#fbf6e7` → `#5f401d` | Accents, CTAs, badges, hover highlights |
| `ink` DEFAULT / soft / faint | `#2b261f` / `#4a443a` / `#6b6357` | Body text / secondary / muted text |

#### Color semantics & usage rules

- **Forest green** (`forest-900` = `#1c3d2b`) is the "nation" colour: page heroes and
  important dark sections use `bg-forest-900 text-parchment-100`.
- **Parchment** (`parchment-50` = `#fffdf8`) is the canvas: the page background and
  card surfaces; `parchment-200` tints alternate section backgrounds.
- **Brass** (`brass-400` = `#d4af37`) is the accent: CTAs, eyebrows, live-status dots,
  icon badges on dark, hover states. Brass on forest = call to action.
- **Ink** is reserved for reading: headings use `forest-900`, body text `ink`,
  secondary `ink-soft`, muted `ink-faint`.
- Opacity is used deliberately to layer depth without new colours:
  `text-parchment-100/85`, `border-brass-400/40`, `bg-brass-400/10`, etc.

### Typography

#### Font families

- **Display** — `Cormorant Garamond` (serif) via `font-display`: all headings.
  Elegant and editorial; pairs with italic brass accents.
- **Body** — `Source Sans 3` (sans): default UI text, buttons, forms.

#### Type scale & usage

- Hero `h1`: `font-display text-5xl … sm:text-6xl` (up to `sm:text-7xl` on the manifesto).
- Section titles: `section-title` (`font-display text-3xl`).
- Eyebrows: `eyebrow` — uppercase, letterspaced
  (`tracking-[0.2em] … sm:tracking-[0.35em]`).
- Quotes & slogans: `font-display italic`.
- Monospace (`font-mono`) reserved for coordinates and identifiers.

### Layout

#### Grid & containers

- `content-container`: `mx-auto w-full max-w-6xl px-4 sm:px-6` — every section's outer wrapper.
- Card grids: `md:grid-cols-2`, `md:grid-cols-3`, `lg:grid-cols-4`.
- Vertical rhythm: sections use `py-16 sm:py-20`; heroes `pt-6 pb-20 md:py-24`.

#### Page structure & hero patterns

- **Hero** — every page opens with a dark green hero. Use the shared partial
  `templates/partials/page-hero.html` for centered heroes, or follow
  `home/templates/home/index.html` for the asymmetric variant. Heroes close with
  the animated wave divider.
- **Sections** — `eyebrow` + `section-title` header, then cards/content on parchment.
- **Shared static assets** — the project-level `static/` folder (e.g.
  `static/js/reveal.js`, `static/css/tailwind.css`) is shared by every app;
  app-specific assets live in `<app>/static/<app>/` (e.g.
  `home/static/home/js/stats.js`). Any app extending `base.html` inherits the
  `reveal` component and the hero partial.
- **Wave divider** — `partials/divider.html` transitions between section colours
  (`fill-forest-900`, `fill-parchment-200/70`, `fill-brass-500`; `flip` for bottom edges).

### Components

#### Buttons

- `btn-brass` — primary CTA (brass fill, dark text, lift + scale on hover).
- `btn-ghost` — outline brass on dark backgrounds.
- `btn-ghost-dark` — outline brass on light backgrounds.
- Icons inside buttons use `partials/icon.html` with `class='size-5'`.

#### Cards

- `card-paper` — signature paper card with asymmetric corners
  (`rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm`).
- `card-parchment` — simple parchment card with a soft brass border.
- Entrance via `reveal`; hover via `hover:-translate-y-1/2 hover:shadow-md/xl`.

#### Badges & labels

- `icon-badge` — 40px circular brass badge wrapping a Heroicon.
- `eyebrow` / `section-title` — section labelling (see Typography).
- Status pills — the "Nation online" pill with an `animate-ping` live dot.

#### Navigation

- Mobile (< md): floating bottom tab bar (`backdrop-blur-xl`) with the notched
  animated `tab-indicator` and a raised central "Found a Patch" action.
- Desktop (≥ md): floating pill header, active-link pills, brass CTA.
- Alpine-powered `navbar` component (`templates/partials/navbar.html`).

#### Icons

- Inline Heroicons (outline, 24×24, stroke 1.5) via `templates/partials/icon.html`.

#### Decorative layers

- `map-grid` — dotted cartographic texture for heroes and map surfaces.
- `blob` — blurred, translucent coloured circles for depth.
- `svg-slot` — floating hero illustration (Storyset "World", credited in the footer).
- `spheres.html` — drifting brass spheres for parallax sections.

### Motion & Effects

#### Scroll-triggered entrance (`reveal`)

- Fade + directional slide powered by IntersectionObserver, defined in
  `static/js/reveal.js` and loaded globally from `base.html`.
- Directions: `from-top` (hero cascade), `from-bottom` (cards/sections),
  `from-left` / `from-right` (section headers).
- Hero cascade delays: 0 / 100 / 150 / 200 / 250 / 300 ms; card grids use
  `{ stagger: true }` (90 ms per sibling).
- Every revealed element needs `:class="visible ? shownClass : hiddenClass"`,
  `:style="delayStyle"` and `transition-all duration-700 ease-out`.

#### Parallax (`scrollSpheres`)

- Scroll-driven horizontal drift for background spheres (see `index.html`,
  Featured Patches). A pure function of scroll position → fully reversible.

#### Ambient animations

- `animate-drift` — floating spheres. `animate-float` — hero illustration/icons.
- `animate-ping` — live-status dots. `animate-spin-slow` / `animate-spin-slower` —
  compass-rose monogram.

#### Wave dividers

- Three layered waves scrolling at different speeds (parallax depth), each layer
  `motion-reduce:animate-none`.

#### Hover transitions

- Buttons: `-translate-y-1 scale-[1.02] shadow-xl` over `duration-300`.
- Cards: `-translate-y-1/2` plus a stronger shadow.
- Nav icons swap outline ↔ solid with `transition-opacity duration-300`.

### UX & Accessibility

#### Reduced motion

- Ambient animations are disabled with `motion-reduce:animate-none`; the `reveal`
  and `scrollSpheres` components check `prefers-reduced-motion` and skip animation
  entirely (content stays visible, spheres stay put).

#### No-JS fallback

- Without Alpine, `:class` bindings never apply → hidden classes are never applied
  and content is fully visible. The site remains usable without JavaScript.

#### Semantic HTML & ARIA

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Decorative layers (`map-grid`, `blob`, icons, dividers) use `aria-hidden="true"`.
- Navigation exposes `aria-label`s; the tab indicator is `aria-hidden`.
- Status is conveyed with icon + text, never colour alone.

#### Resilience

- Stats counters are rendered server-side and enhanced by `stats.js`; if the API
  fails, the server-rendered values remain visible.
- Compact number notation keeps exact values in a `title` tooltip.

---

## Architecture

### System Overview

```
Browser (Tailwind + Alpine.js)
        │
        ▼
Django app `home`
 ├── views.py        → server-rendered pages (templates/)
 ├── api.py          → Django Ninja REST endpoints (/api/)
 └── services.py     → domain logic (nation statistics)
        │
        ▼
Database (SQLite in development / PostgreSQL in production)
```

### Technology Stack

| Layer | Technology |
| --- | --- |
| Backend | Python · Django 5.x |
| API framework | Django Ninja |
| Frontend | Tailwind CSS 3.4 (custom design tokens) |
| Interactivity | Alpine.js 3 (CDN) |
| Fonts | Cormorant Garamond (display) · Source Sans 3 (body) |
| Database | SQLite (development) · PostgreSQL (production) |
| Static assets | Project-level `static/` (compiled CSS, shared JS) |

### Data Flow

- Pages are server-rendered by `home/views.py` from templates in `templates/` and
  `home/templates/`.
- Live counters call the Django Ninja endpoint `GET /api/home/stats`, refreshed
  client-side by `home/static/home/js/stats.js` (server-rendered values remain as a
  graceful fallback).
- Domain logic lives in `home/services.py`; in v0.1 the statistics are simulated and
  will be replaced by ORM aggregations in v0.2.

---

## Setup & Installation

```bash
# 1. Clone the repository
git clone <repo-url> patchland && cd patchland

# 2. Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt
npm install                     # Tailwind CSS CLI

# 4. Configure the environment (.env — see patchland/settings.py)
#    DEBUG=True, SECRET_KEY=..., DATABASE_URL empty → SQLite for local dev
set -a && source .env && set +a

# 5. Migrate and run the dev server
python manage.py migrate
python manage.py runserver

# 6. (Optional) Rebuild Tailwind CSS
npm run tailwind:build
```

> The project deliberately avoids dot-env libraries: environment variables are loaded
> in the terminal from `.env` (see the header of `patchland/settings.py`).

---

## Usage

| Page | Route | Description |
| --- | --- | --- |
| Home | `/` | Landing with hero, live counters, featured Patches and statistics. |
| Manifesto | `/manifesto/` | Vision, principles, objectives, constitution and slogans. |
| World Map | `/map/` | Placeholder for the interactive map (v0.2). |
| Passport | `/passport/` | Passport & seals concept (stamps, events, provinces). |
| Profile | `/profile/` | Placeholder for citizen profiles (v0.2). |
| Register | `/register/` | Concept form to found a Patch (submission in v0.2). |
| API docs | `/api/docs` | Interactive Django Ninja documentation. |
| Health | `/healthz` | Readiness probe. |

> Fully responsive: a floating bottom tab bar on mobile and a floating pill header
> on desktop.

---

## API Reference

All endpoints live under `/api/` (Django Ninja); interactive docs at `/api/docs`.

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/home/stats` | GET | Aggregated nation statistics (total area, Patches, custodians, provinces, countries, seals, passports). |
| `/healthz` | GET | Service readiness probe. |

---

## Developer Guide

### Project layout

```
patchland/            # project settings
home/                 # main app (pages, api, services)
  api.py              # Django Ninja router
  services.py         # domain logic (nation statistics)
  templates/home/     # app templates
  static/home/js/     # app-specific JS (e.g. stats.js)
  templatetags/       # custom template filters
templates/            # project-level templates (base, partials)
  partials/           # navbar, footer, page-hero, icon, divider, spheres …
static/               # project-level static assets
  css/tailwind.css    # compiled Tailwind
  js/reveal.js        # shared reveal component
  src/input.css       # Tailwind source (design tokens & components)
```

### Conventions

- Every new page extends `templates/base.html` and reuses `partials/page-hero.html`
  for the hero (entrance cascade + wave divider built-in).
- Use the shared `reveal` component (`x-data="reveal('from-bottom', { stagger: true })"`)
  for scroll-triggered entrances — see `static/js/reveal.js`.
- Add every new bug to the [Bug Log](#bug-log) (status, discovery date, fix date, resolution).
- Keep the [UX/UI Style Guide](#uxui--style-colors--interaction-guide) updated when
  design tokens or components change.
- Shared assets live in `static/`; app-specific assets in `<app>/static/<app>/`.

### Useful commands

```bash
python manage.py check          # sanity check
python manage.py runserver      # dev server
npm run tailwind:watch          # rebuild CSS on change
npm run tailwind:build          # minified CSS build
```

---

## Testing

> To be populated: test plan, automated suites and manual test results.

---

## Deployment

> To be populated: hosting, environment variables, `collectstatic`, CI/CD.
>
> Current requirements (see `patchland/settings.py`): with `DEBUG=False` the project
> requires `DATABASE_URL` (PostgreSQL) and `ALLOWED_HOSTS`.

---

## Security

> To be populated: secrets management, HTTPS, production hardening notes.

---

## SEO

> To be populated: `sitemap.xml`, `robots.txt`, Open Graph / Twitter Card metadata,
> accessibility and performance notes.

---

## Integrations

> To be populated: external services (maps, mail, payments, …).

---

## Troubleshooting

> To be populated: common issues and their fixes.

---

## Credits

> To be populated: illustrations (Storyset "World", credited in the footer), icon
> sets, fonts and tools.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Bug Log

Living log of known issues and their lifecycle. New bugs are added here as they
are discovered; the status is updated when a fix lands.

**Status legend:** 🔴 Active — bug still present · 🔶 Known — documented, non-blocking (to be fixed later) · ✅ Fixed — resolved and verified.

| ID | Status | Bug | Discovered | Fixed | How it was fixed |
| --- | --- | --- | --- | --- | --- |
| BUG-001 | ✅ Fixed | Fade-in (`reveal`) entrance animations stopped working on every page after the component was moved to a shared static file | 2026-08-27 | 2026-08-27 | `static/js/reveal.js` is now loaded **before** Alpine's CDN script in `templates/base.html` (`{% block corejs %}`, `defer` preserves order), so the `alpine:init` listener is registered before Alpine boots; `reveal.js` also registers immediately when `Alpine` is already present (defensive fallback). |
| BUG-002 | ✅ Fixed | Mobile navbar: first click on a different tab only moved the indicator but didn't navigate — a second click was required | 2026-08-28 | 2026-08-28 | `go()` no longer calls `preventDefault()` nor navigates via `setTimeout`; it only updates the active tab and lets the anchor's **native** navigation happen. Removed the `_pendingNav` flag and `NAV_ANIMATION_MS`. The slide effect is preserved as an entrance animation from the previous tab (id kept in `sessionStorage['navbar-from']`). |
| BUG-003 | ✅ Fixed | Mobile navbar: the first click from home to another tab didn't navigate and the navbar appeared **wider** on the first click | 2026-08-28 | 2026-08-28 | Removed `backdrop-blur-xl` from the navbar (solid `bg-parchment-50`), added `touch-manipulation` and removed the mobile-only hover effects (`group-hover:opacity-40`). The first click now navigates reliably. A residual cosmetic shift during navigation is tracked in BUG-004. |
| BUG-004 | 🔶 Known | Mobile navbar: brief downward shift while navigating from home to other pages (browser URL-bar / dynamic viewport artifact) | 2026-08-28 | — | Accepted as a known, non-blocking browser artifact (verified: the nav container and inner elements are computed-identical across pages). Attempted `interactive-widget=overlays-content` in the viewport meta and a `visualViewport` pin — neither resolved it on the test device. To be revisited. |

> When a new bug is found, add a row with status 🔴 **Active**, the discovery
> date and a short description, then fill in the **Fixed** date and the
> resolution once a fix is verified.
