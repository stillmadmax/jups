# JupS – Upcycling Art Website

New website for [JupS Upcycling ART](https://jups-art.de) (handcrafted upcycling
pieces from Bisingen). Static HTML/CSS, hosted via GitHub Pages.

**Current phase: design proposals.** Three distinct design drafts live under
`designs/a|b|c/`, linked from the chooser page at the repo root. Each draft
contains a home page, a product overview, and one exemplary product page
(Messerblock). Once a design is chosen, the full site is built from it.

See [PLAN.md](PLAN.md) for the full project plan.

## Structure

- `index.html` — chooser page linking the three design drafts
- `designs/a/` — draft A "Werkstatt" (dark, industrial)
- `designs/b/` — draft B "Naturlicht" (bright, scandinavian-minimal)
- `designs/c/` — draft C "Geschichten" (warm, editorial)
- `assets/img/` — optimized product photos and logo (sourced from jups-art.de)
- `assets/fonts.css`, `assets/fonts/` — self-hosted webfonts (Oswald, Inter, Fraunces)

## Local preview

Any static file server works, e.g.:

```
python3 -m http.server 8000
```
