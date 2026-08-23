# JupS – Upcycling Art Website

New website for [JupS Upcycling ART](https://jups-art.de) (handcrafted upcycling
pieces from Bisingen). Static HTML/CSS, hosted via GitHub Pages, design
"Werkstatt" (dark, industrial).

See [PLAN.md](PLAN.md) for the full project plan.

## Structure

- `index.html`, `style.css` — home page and the shared stylesheet
- `produkte/` — product overview and one page per product (`produkte/<slug>/`)
- `ueber/`, `kontakt/`, `versand/` — about, contact, shipping
- `impressum/`, `datenschutz/` — legal pages
- `assets/img/` — optimized product photos and logo (sourced from jups-art.de)
- `assets/fonts.css`, `assets/fonts/` — self-hosted webfonts (Oswald, Inter)

No build step: plain HTML, one shared CSS file, a few lines of vanilla JS
(gallery, category filter). All pages use relative links, so the site works
under any base path (e.g. GitHub Pages project pages).

## Local preview

Any static file server works, e.g.:

```
python3 -m http.server 8000
```
