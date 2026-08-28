# Patchland

> Res Publica Mundi — A distributed, imaginary nation built one Patch at a time.

Patchland is a collaborative world-building project where people voluntarily dedicate a small portion of a place they legitimately use (garden, yard, balcony, etc.) as a **Patch**.

The project is purely symbolic and recreational, with no legal, political, or territorial claims.

---

## 📋 Table of Contents

* [Objectives](#-objectives)
* [Core Principles](#-core-principles)
* [Requirements for a Patch](#-requirements-for-a-patch)
* [The Custodian, Citizenship & Tourism](#-the-custodian-citizenship--tourism)
* [World Map & Provinces](#-world-map--provinces)
* [Collectibles & Symbols](#-collectibles--symbols)
* [Slogans](#-slogans)
* [UX/UI](#-uxui--style-colors--interaction-guide)
* [Tech Stack](#-tech-stack)
* [License](#-license)
* [Bug Log](#-bug-log)

---

## 🎯 Objectives

* Build the world's largest distributed symbolic nation.
* Connect people through meaningful places.
* Encourage exploration and tourism between Patchland citizens.
* Preserve the history of every Patch.

---

## 🌟 Core Principles

* **One Patch at a time.**
* **Every Patch has a story.**
* **Every citizen contributes equally.**
* **The nation is distributed across the world.**
* **Community comes before territory.**

---

## 📐 Requirements for a Patch

1. **Availability of the Space:** The Custodian must legitimately have access to the space (ownership, rental, permission, etc.).
2. **Minimum Size:** Minimum area of **1 square meter (1 m²)**.
3. **Defined Boundaries:** The Patch must have clearly identifiable limits.
4. **Official Name:** Every Patch has a unique name (e.g., *Raven Grove*, *Aurora Garden*, *Patch 51*).
5. **Registration:** Each Patch records its Name, Custodian, Coordinates, Area, Foundation Date, Province, optional photos, and a short history.
6. **Official Seal (Mandatory):** Each Patch owns a unique, numbered, and personalized seal registered in the National Archive to stamp visitors' passports.
7. **Story:** Every Patch tells a story, even if only a single sentence.

---

## 🏛️ The Custodian, Citizenship & Tourism

* **The Custodian:** Responsible for maintaining information, preserving the seal, and welcoming visitors when possible.
* **Citizenship:** Anyone who registers at least one Patch becomes a citizen. Symbolic titles may depend on maintained area, contribution, seniority, or community participation.
* **Passport:** Citizens can obtain a Patchland Passport to collect Patch stamps, commemorative event marks, and visited provinces.
* **Tourism & Access:** Each Patch can set its visibility and access level:
  * **Public**
  * **Visit on request**
  * **Private**

---

## 🗺️ World Map & Provinces

Patches are grouped into **Provinces** across the globe. The interactive world map displays:

* All registered Patches & total territory area.
* Citizens & registered seals.
* Active provinces & represented countries.

---

## 🏅 Collectibles & Symbols

* Passport & Digital Stamps
* Official Seals & Certificates
* Symbolic Coins, Flags, and Coats of Arms
* Community-maintained Constitution

---

## 💬 Slogans

* *One Patch. One Citizen. One World.*
* *Building the World's Largest Distributed Nation.*
* *One Square at a Time.*
* *Every Patch Tells a Story.*
* *Ex multis, una terra.*

---

## 🎨 UX/UI — Style, Colors & Interaction Guide

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

## 🛠️ Tech Stack

* **Backend:** Python / Django
* **API Framework:** Django Ninja
* **Frontend:** Tailwind CSS

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🐞 Bug Log

Living log of known issues and their lifecycle. New bugs are added here as they
are discovered; the status is updated when a fix lands.

**Status legend:** 🔴 Active — bug still present · ✅ Fixed — resolved and verified.

| ID | Status | Bug | Discovered | Fixed | How it was fixed |
| --- | --- | --- | --- | --- | --- |
| BUG-001 | ✅ Fixed | Fade-in (`reveal`) entrance animations stopped working on every page after the component was moved to a shared static file | 2026-08-27 | 2026-08-27 | `static/js/reveal.js` is now loaded **before** Alpine's CDN script in `templates/base.html` (`{% block corejs %}`, `defer` preserves order), so the `alpine:init` listener is registered before Alpine boots; `reveal.js` also registers immediately when `Alpine` is already present (defensive fallback). |
| BUG-002 | ✅ Fixed | Mobile navbar: first click on a different tab only moved the indicator but didn't navigate — a second click was required | 2026-08-28 | 2026-08-28 | `go()` no longer calls `preventDefault()` nor navigates via `setTimeout`; it only updates the active tab and lets the anchor's **native** navigation happen. Removed the `_pendingNav` flag and `NAV_ANIMATION_MS`. The slide effect is preserved as an entrance animation from the previous tab (id kept in `sessionStorage['navbar-from']`). |
| BUG-003 | 🔴 Active | Mobile navbar: the first click from home to another tab still doesn't navigate and the navbar appears **wider** on the first click | 2026-08-28 | — | Attempted fixes (not resolving yet): links are server-rendered with real `href` (`{% url %}`), `x-cloak` removed, `go()` uses native navigation (no `preventDefault`/`setTimeout`). Still under investigation — suspected: `backdrop-filter` compositing glitch on `position: fixed` (wider bar), first-tap hover consumption, tap/`touch-action` handling. |

> When a new bug is found, add a row with status 🔴 **Active**, the discovery
> date and a short description, then fill in the **Fixed** date and the
> resolution once a fix is verified.
