# JupS – Upcycling Art: Website Plan

Plan for the new website for JupS (upcycling art by hand, Bisingen).
Successor to the existing site at https://jups-art.de/ (Grav CMS, Quark theme),
which serves as the content source.

## 1. Goal & Scope

- Showcase and promote handcrafted upcycling products with individual product pages.
- **No checkout / no cart.** Two calls to action only:
  1. Contact by email (jups.upcycling@gmail.com)
  2. Link to the Etsy shop (purchase happens there): https://www.etsy.com/shop/JupSArt
- Hosted in the GitHub repo `stillmadmax/jups`, publicly viewable via **GitHub Pages**
  (`https://stillmadmax.github.io/jups/`).
  *Assumption: "in GitLab anschaubar" in the briefing means the GitHub repo above —
  there is no GitLab involved.*
- Phase 1 deliverable: **3 distinct design proposals**, each browsable online so the
  owner can pick one. Only then is the full site built in the chosen design.

## 2. Content Inventory (from jups-art.de)

Brand voice / claims (reuse verbatim):

> „Was andere wegwerfen, ist für mich der Anfang einer neuen Geschichte."
> „Nachhaltigkeit ist kein Trend – sondern Basis meiner Arbeit."

Products & categories (current catalogue):

| Product | Category | Notes |
|---|---|---|
| Magnetischer Messerblock aus Fassdauben | Küchenaccessoires | ab 129 €; oak barrel staves with original winery markings, N45 magnets, steel base plate; ~13 gallery images |
| Amboss aus Eisenbahnschienen | Amboss | compact anvils from railroad rails |
| Eierbecher aus Eichenholz | Küchenaccessoires | |
| Schneidebrett aus Eiche | Bretter | |
| Kartenhalter XL aus Eichenholz | Kartenhalter | from reclaimed oak boards |
| Foto auf Holz mit Epoxy-Versiegelung | Wanddekoration | |
| Sonstiges / Auftragsarbeiten | Sonstiges | custom commissions |

Other existing content:

- Contact page: email only, "Antwort innerhalb von 48 Stunden", list of inquiry topics
  (interest in a piece, custom projects, material questions, feedback).
- Versand und Lieferzeit page.
- Impressum: Martina Schell, Jups Upcycling ART, In Hagen 8, 72406 Bisingen,
  Kleinunternehmer §19 UStG — confirmed, take over as-is.
- **Missing on the old site: Datenschutzerklärung** — legally required in Germany,
  must be added to the new site.
- Product photos: download from jups-art.de (own material), re-crop/optimize
  (WebP + fallback, sensible sizes).

## 3. Site Map (final site)

```
/                     Home: hero + claim, featured products, philosophy teaser, Etsy banner
/produkte/            Overview, filterable by category
/produkte/<slug>/     Product page: gallery, story, description, specs table,
                      price ("ab X €"), CTA "Kontakt aufnehmen" + Etsy link
/ueber/               About: person, workshop, materials, philosophy (expanded from old home text)
/kontakt/             Email CTA (mailto), inquiry topics, response time. No form backend needed.
/versand/             Shipping & delivery times
/impressum/           Legal
/datenschutz/         Privacy policy (new)
```

## 4. Technical Approach

**Simplest thing that works: a fully static site, no framework, no build step.**

- Plain HTML + one shared CSS file + a few lines of vanilla JS
  (image gallery on product pages, category filter on the overview).
- Rationale: ~10 pages, content changes rarely, must be trivially hostable on
  GitHub Pages and maintainable for years. A static-site generator (Eleventy/Astro)
  only pays off if the catalogue grows significantly — can be introduced later
  without changing the hosting.
- Hosting: GitHub Pages from the `main` branch (root or `/docs`), enabled once the
  first designs are pushed. Later option: point the existing domain `jups-art.de`
  at GitHub Pages via CNAME.
- No cookies, no analytics, no external requests (self-hosted fonts) → keeps the
  Datenschutzerklärung minimal.
- Responsive (phone-first — buyers of handmade goods browse mobile), semantic HTML,
  proper `lang="de"`, meta/OG tags per product.

## 5. Phase 1 – The Three Design Proposals

Process:

- Each proposal is a self-contained static preview under
  `designs/a/`, `designs/b/`, `designs/c/` with **three pages each**:
  home, product overview, and one real product page (Messerblock) — real content,
  real photos, so the decision is made on realistic material.
- A small index page at the repo root links the three variants, so the owner
  gets **one URL** and can browse everything:
  `https://stillmadmax.github.io/jups/`
- Claude Design may be used as a drafting aid, but nothing is stored there;
  everything lives as files in this repo.
- After the decision: the chosen variant becomes the basis for Phase 2 (full site),
  the other two are deleted.

### Variant A — „Werkstatt" (industrial, dark)

The workshop itself as the stage. Masculine, robust, material-driven.

- **Mood:** steel, oak, forge. Serious craftsmanship, not decoration.
- **Colors:** anthracite/near-black background, warm oak-brown tones,
  one accent in rust/ember orange. Light text.
- **Typography:** condensed bold headlines (e.g. Oswald/Archivo), clean grotesque body.
- **Layout:** full-bleed photos, hard edges, visible grid, specs presented like a
  data plate ("Typenschild") on product pages.
- **Fits:** Amboss, steel plates, barrel staves — the heavy, archaic side of the work.

### Variant B — „Naturlicht" (bright, scandinavian-minimal)

Modern sustainable-brand look; lets the photos and the wood speak.

- **Mood:** calm, airy, contemporary shop aesthetic. Sustainability communicated
  through restraint.
- **Colors:** warm white/cream background, soft gray text, one muted green accent
  (moss/sage), natural wood tones from the photos.
- **Typography:** light humanist grotesque (e.g. Inter/Source Sans), generous spacing.
- **Layout:** lots of whitespace, large product photos on neutral ground, card grid
  for the overview, thin lines, rounded corners kept subtle.
- **Fits:** Eierbecher, Schneidebretter, Kartenhalter — the friendly gift-shop side.

### Variant C — „Geschichten" (warm, editorial, personal)

The person and the stories behind the pieces up front — each object had a first life.

- **Mood:** storytelling, warmth, handmade character; more magazine than shop.
- **Colors:** paper/linen background (warm beige), dark brown text, terracotta accent.
- **Typography:** serif headlines (e.g. Fraunces/Lora), grotesque body; occasional
  hand-drawn/underline accents.
- **Layout:** editorial rhythm — alternating text/image blocks, the claim
  „Was andere wegwerfen…" as a large opening statement, product pages open with the
  material's origin story before the specs.
- **Fits:** the upcycling narrative itself — provenance, winery markings, old rails.

All three variants share: identical content and information architecture (only the
skin differs), the JupS logo, mobile-first responsiveness, and both CTAs
(Kontakt + Etsy) prominently placed.

## 6. Decisions (confirmed by Max, 2026-08-20)

1. **Etsy shop URL:** https://www.etsy.com/shop/JupSArt — used for all Etsy CTA buttons.
2. **Impressum:** keep Martina Schell as on the old site.
3. **Prices:** show "ab X €" on all product pages.

## 7. Open Questions

1. Keep the existing logo (jups-logo.svg) unchanged?
2. Later: should jups-art.de point to the new site (DNS/CNAME change)?

## 8. Milestones

1. **Plan approved** (this document)
2. Init repo, download & optimize photos/logo from jups-art.de
3. Build 3 design previews + index page, push, enable GitHub Pages
4. Owner reviews → picks a variant (feedback round on details)
5. Build full site in chosen design (all products, all pages, Datenschutz/Impressum)
6. Review round → fixes → optional: custom domain
