# Meanwhile — Project Handbook

> **Name: “Meanwhile”** (formerly the working title “SemiRent”).
> A complete guide to what this project is, what it does, how every part works,
> and how it’s built. If you’ve never seen the project before, read this top to
> bottom and you’ll understand all of it.

---

## Table of contents

1. [What Meanwhile is (in one minute)](#1-what-meanwhile-is-in-one-minute)
2. [The problem it solves](#2-the-problem-it-solves)
3. [The core idea — “the third option”](#3-the-core-idea--the-third-option)
4. [How it works (the model)](#4-how-it-works-the-model)
5. [Who it’s for](#5-who-its-for)
6. [The business / revenue model](#6-the-business--revenue-model)
7. [A worked example](#7-a-worked-example)
8. [The website — section by section](#8-the-website--section-by-section)
9. [The interactive demo app](#9-the-interactive-demo-app)
10. [Design system & art direction](#10-design-system--art-direction)
11. [How it’s built (technical)](#11-how-its-built-technical)
12. [Running, building, deploying](#12-running-building-deploying)
13. [Naming](#13-naming)
14. [What’s built vs. what isn’t](#14-whats-built-vs-what-isnt)
15. [Credits](#15-credits)

---

## 1. What Meanwhile is (in one minute)

**Meanwhile is a marketplace for *temporary commercial occupancy*.**

Commercial property — shops, offices, restaurant units — often sits **empty for
months** while the owner searches for the perfect long-term tenant. During that
time it earns **zero** while still costing money (taxes, upkeep). Meanwhile,
thousands of small businesses can’t afford the upfront cost of a premium
location.

Meanwhile connects the two. An owner lists a vacant unit at a **reduced,
temporary rate**. A growing business moves in for a defined period at a fraction
of full rent. When a long-term tenant appears, the temporary occupant gets fair
notice — or converts to the full lease.

- The owner **earns income during vacancy** instead of nothing.
- The business **accesses a premium location** it otherwise couldn’t.
- Nobody is locked in.

Tagline: **Half Rent. Full Opportunity.**
One-line pitch: *Meanwhile helps commercial property owners monetize vacant
spaces through temporary discounted occupancy, while enabling startups and small
businesses to access premium locations at affordable rates.*

> **Important:** what’s built today is a **design showcase + interactive demo** —
> a beautiful, working front-end with mock data, created by the studio **made. by
> ac** to demonstrate design capability. It is **not** a live marketplace (no
> real accounts, payments, or backend). See §14.

---

## 2. The problem it solves

### For property owners
A vacant commercial space is a standoff nobody wins. While the owner waits for
the ideal tenant, the unit creates:

- **Lost rental income** — every empty month is revenue gone forever.
- **Ongoing costs** — maintenance, taxes, security continue regardless.
- **Reduced activity** — a dark unit attracts no interest; an active one does.
- **Deterioration** — unused spaces decay faster.
- **Pressure to drop the rent** — long vacancies force owners to lower their ask.

A vacant property generates **zero return while still accumulating expenses.**

### For small businesses
Startups and growing businesses face steep barriers to commercial space:

- **High upfront commitments** and **large security deposits.**
- **Long-term lease lock-ins** — years of obligation before they’re ready.
- **Premium locations priced out of reach.**
- **No way to test demand** before betting the company on a location.

Many never get to test their concept in a high-footfall area purely because of
cost.

**Both problems are the same gap, seen from two sides.** Meanwhile fills it.

---

## 3. The core idea — “the third option”

This is the conceptual heart of the product.

Traditional commercial leasing offers only **two** outcomes for any unit:

1. **Occupied** — a full-paying, long-term tenant.
2. **Vacant** — empty, earning nothing.

Meanwhile introduces a **third**:

> ### Temporary Commercial Occupancy (“Semi”)
> The space is occupied. Revenue is generated. The owner keeps full flexibility.
> The business gets affordability. Everyone wins in the in-between.

We call the category this creates **“commercial vacancy monetization.”** It’s
not a property portal, not co-working, not a broker — it’s a structured
marketplace for the period *between* tenants.

---

## 4. How it works (the model)

### The property owner
1. Lists a vacant commercial space.
2. Specifies the terms:
   - Monthly (full) rent
   - **Temporary occupancy rent** (the reduced “semi” rate)
   - Notice period
   - Space type, occupancy duration, available facilities
   - Security-deposit requirements
3. The unit becomes visible to **verified** businesses on the platform.

### The business occupant
1. Discovers a suitable space (startup, retailer, agency, clinic, café, etc.).
2. Applies instantly.
3. Completes verification (KYC / business screening).
4. Reviews the occupancy conditions.
5. Pays online.
6. Moves in — a premium location at a fraction of the cost.

### The transition model (the part that makes it fair)
When the owner finds a long-term tenant, there are two clean outcomes:

- The temporary occupant receives the **agreed notice period** and vacates
  smoothly, **or**
- If eligible, the occupant **converts into the full-rent tenant** themselves.

Flexibility is written into the contract, not left to chance.

---

## 5. Who it’s for

**Property owners**
Commercial building owners · retail-shop owners · office owners · real-estate
developers · co-working operators · property-management firms.

**Businesses**
Startups · D2C brands · pop-up stores · boutique retailers · agencies · salons ·
clinics · cafés · creators · freelancers · service providers.

---

## 6. The business / revenue model

How Meanwhile (the company) would make money:

| Stream | What it is | Note |
|---|---|---|
| **Owner commission** | A % of completed transactions | Est. **5–10%** |
| **Occupant convenience fee** | Small platform fee at booking | Per transaction |
| **Premium listings** | Owners pay to promote a listing for visibility | Upsell |
| **Subscription plans** | Pro tools for developers / property managers | Recurring |
| **Insurance & protection** | Optional damage cover + deposit management | Add-on |

---

## 7. A worked example

> A retail shop’s full asking rent is **₹60,000/month**. It’s been vacant for
> three months — earning **₹0**.
>
> The owner lists it on Meanwhile at a temporary rate of **₹30,000/month**.
> A startup clothing brand moves in.
>
> - **Owner:** now earns ₹30,000/month instead of nothing → **₹90,000 recovered**
>   over three months that would have been zero.
> - **Business:** saves ₹30,000/month vs. committing to full rent, in a location
>   it couldn’t otherwise afford.
>
> Three months later the startup has grown and **converts to the full lease.**
> A vacancy problem became a business opportunity.

This exact scenario is the one the website lets you play with interactively (see
the **Rent Splitter**, §8).

---

## 8. The website — section by section

The marketing site (`/`) is an immersive, scroll-driven experience. Each section
is explained below: **what it is**, **what it shows**, and the **design intent**.

> Tip while reviewing: it’s desktop-first. Let the **intro curtain** finish on
> first load, then scroll slowly — much of the storytelling is in the motion.

### 0. Intro curtain (first load only)
A one-time concrete “curtain” covering the screen. A small floor-plan outline
**draws itself**, a room **lights up** (the signal accent), the wordmark settles,
and the curtain **lifts** to reveal the hero. Sets the architectural tone in ~2
seconds. Skipped entirely for visitors who prefer reduced motion.

### 1. Hero — the living floor-plan
**What:** the opening statement — *“Fill empty spaces. Fuel growing
businesses.”*
**Shows:** the headline rises line-by-line from behind masks; on the right, an
**architectural floor-plan draws its own walls** and its rooms **light up one by
one** in the brand colours.
**Intent:** the whole concept in one image — empty space being filled with light
(occupancy). Drawn, not photographed, because the brand *is* architecture.

### 2. Live vacancy counter
**What:** a full-screen dark band with a giant number.
**Shows:** an estimate of the **square footage of commercial space sitting vacant
in India right now**, which **counts up and never stops ticking** while you watch.
**Intent:** make an abstract problem **visceral**. The meter runs whether anyone’s
inside or not — “Meanwhile turns the meter the other way.”

### 3. The problem — facing ledgers
**What:** the two-sided pain, side by side.
**Shows:** two “ledgers” — **For property owners** (avg. 3-month vacancy, the cost
list) and **For small businesses** (6–9× rent up front, the barrier list).
**Intent:** prove it’s **one gap seen from two sides** — which is exactly what the
product bridges.

### 4. The Third Option — interactive switch  ⭐
**What:** the core concept, made playable.
**Shows:** a three-state toggle — **Vacant / Occupied / Semi**. Flip between them
and *everything* updates: the revenue figure, the room visual (windows **light
up** as occupancy increases), the headline, and the explanation. “Semi” is the
recommended, highlighted state.
**Intent:** let the visitor **feel** the third option rather than read about it.
This is the centrepiece argument of the page.

### 5. “Who it’s for” marquee
**What:** an infinite horizontal ticker.
**Shows:** the target customer types (Startups · Pop-up stores · D2C brands · …)
scrolling past, separated by signal diamonds. Pauses on hover.
**Intent:** breadth at a glance, and a kinetic palate-cleanser between heavy
sections.

### 6. How it works — horizontal pinned scroll  ⭐
**What:** the three-move model, told sideways.
**Shows:** the section **pins** to the screen and the content **scrolls
horizontally** as you scroll down — an intro panel, then **01 List the space**
(owner), **02 Apply & move in** (business), **03 Transition** (both), then a
result panel: *“A vacancy problem becomes a business opportunity.”* A progress
bar tracks the journey.
**Intent:** an unexpected, cinematic way to walk through a process most sites
present as a boring 3-column row.

### 7. The Rent Splitter — interactive calculator  ⭐
**What:** the worked example (§7) as a hands-on tool.
**Shows:** a draggable slider sets the **semi rate** as a % of a ₹60,000 full
rent. Three live read-outs update instantly: **Owner earns** (vs. ₹0 vacant),
**Business saves** (vs. full rent), and **recovered over 3 months**. Both sides
**always stay positive** — that’s the whole point, made tangible.
**Intent:** turn the pitch into proof the visitor generates themselves.

### 8. Benefits — both sides of the door
**What:** the payoff, listed cleanly.
**Shows:** two editorial columns — benefits **for owners** (revenue during
vacancy, visibility, upkeep, verified occupants, flexibility) and **for
businesses** (lower entry cost, market validation, reduced risk, growth room,
upgrade path).
**Intent:** “the rare deal where nobody compromises.”

### 9. Manifesto — kinetic closer
**What:** the category claim.
**Shows:** a large statement whose words **ignite (brighten) one by one as you
scroll** — *“Not a property portal. Not a co-working desk. Not a broker. Meanwhile
is an entirely new category — commercial vacancy monetization.”*
**Intent:** land the positioning with rhythm and finality.

### 10. Footer — the blueprint title block  ⭐
**What:** the most unexpected detail on the page.
**Shows:** the footer is drawn as the **spec cartouche from the corner of a real
architectural blueprint** — fields for *Project / Drawing / Scale / Status*, plus
navigation, company, legal, and the **made. by ac** attribution (“Drawn by”).
**Intent:** stay in-world right to the last pixel. The “2% nobody asks for.”

⭐ = signature / “award-winning” moments — the sections built to be memorable.

---

## 9. The interactive demo app

Beyond the marketing page, there are **three designed, working product screens**
using mock data (no real backend). They show what the actual platform would feel
like.

### `/browse` — the index of spaces
- A **filterable grid** of vacant commercial units (filter by type: Retail,
  Office, F&B, Pop-up, Services; sort by lowest semi rate, biggest saving, or
  longest vacant).
- Every card shows a **uniquely generated floor-plan thumbnail** (drawn from the
  listing’s ID — no two alike, and zero photo assets needed), the address, size,
  the **semi rate vs. full rent**, the **discount %**, and **how long it’s been
  vacant** (a live pulsing badge).

### `/space/:id` — a listing detail
- A large **drawn plan view** plus a mini gallery of additional drawn views.
- A **specification sheet** (type, floor, area, footfall, notice period, days
  vacant).
- A **facilities** list.
- A sticky **pricing card**: the temporary rate, the saving vs. full rent, and a
  line-item breakdown (semi rent, deposit, notice, platform fee).
- An **“Apply to occupy”** button that shows a mock confirmation, plus a “message
  the owner” action and a verified-owner badge.

### `/dashboard` — the owner’s view
- Top stats: **revenue recovered during vacancy**, active occupancies, open
  inquiries, average fill time.
- A **revenue chart** that tells the story visually: empty months at ₹0 →
  orange **semi-occupancy** months earning income → a gold month where the
  tenant **converted to a full lease**.
- A live **inquiries** feed (new / verified / reviewing).
- A **listings table** with per-space status (Occupied / Vacant / Converting).

The mock listings live in `src/data/listings.js` (six spaces across real Indian
commercial districts, with ₹ figures and a small currency-formatting helper).

---

## 10. Design system & art direction

### The concept: *Architectural / Negative Space*
The brief was an **award-winning, unique** site with sections nobody expects for
a real-estate product. The chosen direction leans **into the subject itself —
empty space.** The result reads like a gallery / blueprint, not a property
listings site.

### Palette
| Role | Colour | Use |
|---|---|---|
| Paper / concrete | warm off-white | primary light surface |
| Ink | near-black | dark “acts”, text on paper |
| **Signal orange** `#ff5a1f` | the one accent | the action / “lights on in a dark building” |
| Brass `#b08a4f` | secondary | provenance / “premium location” warmth |
| Blueprint blue `#2f6df0` | structural | technical / plan accents |

The signal colour is used sparingly — it represents **occupancy**: a dark
(vacant) space coming alive. One accent for the action, never scattered.

### Type
- **Fraunces** — editorial display serif (headlines, the wordmark; italic for
  emphasis words).
- **Hanken Grotesk** — body & UI.
- **Space Mono** — labels, numbers, metadata (the “spec sheet” voice).

### Motion (slow, soft, intentional — never bouncy)
- **Smooth scroll** (Lenis) drives the whole page.
- **Scroll reveals** — content rises and fades in as it enters view.
- **Kinetic headlines** — lines rise from behind masks.
- A **custom cursor** — a precise dot with a lagging ring that **morphs into a
  labelled disc** over interactive elements (desktop only).
- **Magnetic** buttons lean toward the cursor.
- A thin **scroll-progress bar** (signal → brass) at the very top.
- The **nav flips** light-over-dark automatically as it crosses dark sections.
- **Everything honours `prefers-reduced-motion`** — every animation no-ops for
  visitors who ask for less motion (a hard studio rule).

### Recurring visual motifs
The **blueprint grid**, **drawn floor-plans**, **dimension ticks**, and **mono
spec-labels** appear throughout so the world feels consistent end to end.

This is built on the **made. by ac** design system (the studio’s house style),
adapted with Meanwhile’s own concrete-and-signal palette.

---

## 11. How it’s built (technical)

### Stack
- **React 18** + **Vite 5** (fast dev server + build)
- **Tailwind CSS v4** (via `@tailwindcss/vite`; design tokens defined in CSS)
- **GSAP 3 + ScrollTrigger** — timeline & scroll-driven animation (the hero plan
  draw, the horizontal pinned section, the manifesto word-ignite)
- **Lenis** — smooth scrolling, synced to GSAP
- **React Router 6** — the four routes

### File structure
```
semirent/
├─ index.html              # fonts, meta, the favicon (a lit-room SVG)
├─ src/
│  ├─ main.jsx             # React entry
│  ├─ App.jsx              # router + global layout (cursor, nav, footer, smooth scroll)
│  ├─ styles/index.css     # design tokens + base styles + utility classes
│  ├─ lib/
│  │  ├─ useLenis.js       # smooth scroll + GSAP sync
│  │  ├─ useReveal.js      # IntersectionObserver scroll-reveals
│  │  └─ useMagnetic.js    # magnetic-cursor effect
│  ├─ components/
│  │  ├─ Cursor.jsx        # the custom cursor
│  │  ├─ ScrollProgress.jsx
│  │  ├─ Intro.jsx         # the intro curtain
│  │  ├─ Nav.jsx           # header + light/dark flip
│  │  ├─ Footer.jsx        # the blueprint title-block
│  │  ├─ Wordmark.jsx      # the logo
│  │  └─ SpaceThumb.jsx    # generates a floor-plan from a listing id
│  ├─ sections/            # the homepage sections (Hero, VacancyCounter,
│  │                       #   Problem, ThirdOption, Marquee, HowItWorks,
│  │                       #   RentSplitter, Benefits, Manifesto)
│  ├─ pages/               # Home, Browse, Listing, Dashboard
│  └─ data/listings.js     # mock spaces + ₹ helpers
```

### A few notable implementation details
- **Floor-plans are code, not images.** `SpaceThumb` hashes the listing ID into a
  deterministic little plan, so every space has its own drawing and the site
  ships with **no photo assets**.
- **The wall-draw animation** uses SVG stroke dash-offset (free) rather than the
  paid GSAP DrawSVG plugin.
- **The horizontal “How it works”** pins the section and translates a wide track
  by the scroll distance — a classic GSAP ScrollTrigger pattern.
- **Accessibility:** reduced-motion is detected once and disables Lenis, the
  cursor, the intro, and all reveals.

---

## 12. Running, building, deploying

```bash
cd ~/semirent
npm install        # one-time
npm run dev        # local dev → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

- **Status today:** runs locally; **not deployed**, no git remote yet.
- **To go live:** it’s a static front-end, so any static host works (the studio’s
  usual path would be a `*.made-by-ac.com` subdomain — which needs a DNS record).

---

## 13. Naming

The project is named **“Meanwhile.”** It started under the working title
*“SemiRent”* (semi = half/partial rent), which was descriptive but generic.

**Why “Meanwhile”:** *“meanwhile use”* is the real property-industry term for
exactly this idea — putting vacant space to temporary use *meanwhile* a permanent
tenant is found. It’s premium, ownable, and quietly clever, and it folds the
concept straight into the brand: the **third occupancy state is literally called
“Meanwhile”** (see the Third Option switch, §8.4) — a space isn’t Vacant or
Occupied, it’s *Meanwhile*.

The wordmark sets **“Mean”** in Fraunces italic and **“while”** upright, closed
with the signal-orange square (the lit pixel of an occupied space).

> Note: the local project folder is still `~/semirent` (legacy path); the product,
> wordmark, titles, copy and package name are all “Meanwhile.” The folder can be
> renamed to `~/meanwhile` at any time.

---

## 14. What’s built vs. what isn’t

**Built (this is a design showcase + interactive demo):**
- The full marketing experience and all signature animated sections.
- Three designed product screens (Browse, Listing, Dashboard) with mock data.
- The complete design system and motion layer.

**Not built (it’s a concept, not a live product):**
- No real accounts, authentication, or KYC.
- No backend, database, or real listings.
- No payments, contracts, or messaging.
- Form actions (apply, message) are mock confirmations only.

A production build would add the marketplace MVP described in §4 and §6.

---

## 15. Credits

A **made. by ac** build — design & development studio.
Created as a portfolio demonstration of what the studio can do for a product.
→ [made-by-ac.com](https://made-by-ac.com)
