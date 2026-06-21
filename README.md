# Meanwhile — *Half Rent. Full Opportunity.*

A concept marketplace for **temporary commercial occupancy**: property owners
monetize vacant spaces at reduced rates while they hunt for a long-term tenant;
growing businesses get premium addresses for a fraction of the rent.

> *“Meanwhile use”* is the property-industry term for putting vacant space to
> temporary use **meanwhile** a permanent tenant is found. A unit isn’t just
> *Vacant* or *Occupied* — it can be **Meanwhile.** That third state is the whole
> product.

Built by **made. by ac** as a design showcase — an award-grade, animation-led
site demonstrating what the studio can do for a product. Concept demo, not a
live marketplace. *(Formerly working-titled “SemiRent.”)*

> 📘 **Full project handbook:** see [`HANDBOOK.md`](./HANDBOOK.md) — explains
> every feature, section, and how it all works, for any reader.

## Art direction — *Architectural / Negative Space*

The site leans into its own subject: empty space. Vast concrete whitespace,
drawn floor-plans instead of stock photography, a blueprint grid under
everything, mono spec-labels, and a single **signal-orange** accent — the warm
glow of lights coming on in a building that was dark. Built on the made. studio
DNA: Fraunces / Hanken Grotesk / Space Mono and the signature soft easing.

## The unexpected moments (the "2% nobody asks for")

- **Living floor-plan hero** — walls draw themselves, rooms light up in sequence.
- **Live vacancy counter** — sq ft sitting empty *right now*, ticking up forever.
- **The Third Option switch** — a Vacant / Occupied / **Meanwhile** toggle that
  rewrites the room, the revenue and the story as you flip it.
- **Horizontal pinned "How it works"** — the three-move flow scrolls sideways.
- **The Rent Splitter** — drag the rate; both owner and business stay ahead live.
- **Title-block footer** — the footer drawn as the spec cartouche from the
  corner of a real blueprint.
- **Kinetic manifesto** — words ignite on scroll to name the new category.

## Interactive demo

Designed, mock-data screens (no backend):

- `/browse` — filterable index of vacant spaces, each with a generated
  floor-plan thumbnail.
- `/space/:id` — listing detail: drawn plan, spec sheet, pricing breakdown,
  apply flow.
- `/dashboard` — owner view: revenue-recovered-during-vacancy chart, inquiries,
  listings.

## Stack

React + Vite · Tailwind v4 · **GSAP ScrollTrigger** · **Lenis** smooth scroll ·
React Router. All motion honours `prefers-reduced-motion`.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

---

A **made. by ac** build — [made-by-ac.com](https://made-by-ac.com)
