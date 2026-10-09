# JupS – Upcycling Art

Website of [JupS Upcycling ART](https://jups-art.de), a small workshop in
Bisingen (Germany) that turns old barrel staves, oak boards and railway rails
into handmade one-off pieces. The site presents the products; purchases happen
via e-mail or the [Etsy shop](https://www.etsy.com/shop/JupSArt).

**Live:** https://jups-art.de

## Tech

- Plain static HTML and one shared stylesheet — no framework, no build step
- Small vanilla JS file for progressive enhancements (mobile menu, swipeable
  gallery, category filter, scroll reveal); every page works without it
- Mobile-first, respects `prefers-reduced-motion`
- Self-hosted fonts, no cookies, no tracking, no external requests
- Hosted on GitHub Pages from the `main` branch; every push to `main` is live
  within about a minute

## Structure

| Path | Content |
|---|---|
| `index.html`, `style.css` | Home page and the shared stylesheet |
| `produkte/` | Product overview and one page per product (`produkte/<slug>/`) |
| `ueber/`, `kontakt/`, `versand/` | About, contact, shipping |
| `impressum/`, `datenschutz/` | Legal pages |
| `assets/site.js` | Shared progressive enhancements |
| `assets/img/` | Product photos (full size + `thumb/`) and logo |
| `assets/fonts/` | Self-hosted variable fonts (Oswald, Inter) |
| `sitemap.xml`, `robots.txt` | SEO, using the domain https://jups-art.de/ |
| `products/`, `contact/`, `versand-und-lieferzeit/` | Redirects from the URLs of the previous site |
| `CNAME` | Custom domain for GitHub Pages |

## Local preview

Any static file server works:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## License

All content — texts, product photos and the logo — © JupS Upcycling ART.
All rights reserved; not licensed for reuse.
