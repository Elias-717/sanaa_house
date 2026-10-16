<div align="center">

# Sana'a House — دار صنعاء

### Heritage, Crafted to Last · تراث يُصنع ليبقى

A bilingual (Arabic / English) showcase website for **Sana'a House**, a fictional artisan atelier presenting six signature Yemeni crafts — highland coffee, Do'ani sidr honey, Makhmariya attar, Adeni bakhoor, Madar pottery, and the Habirah handwoven shawl.

Built with **React 19 + Vite**. No cart, no checkout, no accounts — a calm, catalogue-style presentation designed for in-person acquisition and wholesale inquiry.

</div>

---

## ✨ Highlights

- **Fully bilingual EN / AR** with true right-to-left mirroring, driven by CSS logical properties
- **Cinematic layered hero** — a sticky, scroll-driven parallax of the Sana'a skyline and Bab al-Yaman gate, with a canvas starfield, shooting stars, searchlights, and a staggered "land-in" title animation
- **Six content pages** wired through a lightweight in-app router (no router library)
- **Store availability system** — per-store stock status with a computed overall badge
- **Live contact form** backed by Formspree with client-side validation and a honeypot
- **Research-grounded content** — every product is modelled on a real, verifiable Yemeni good
- **Production-ready config** — SEO metadata, security headers, SPA redirects, and a documented content-update workflow

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Language | JavaScript (JSX) |
| Styling | Plain CSS with logical properties (RTL-safe) |
| Icons | lucide-react |
| Fonts | Newsreader · Noto Serif Arabic · Public Sans (Google Fonts) |
| Form backend | Formspree |
| Maps | OpenStreetMap embed |
| Linting | oxlint |
| Hosting | Netlify (free tier) |

---

## 🗺️ Features by page

### Home (`/`)
- Layered parallax hero (`sanaa-hero`) — sky → city skyline → Bab al-Yaman gate, pinned while you scroll, with content fade-out and staged entrance animations
- Animated **story section** with a typewriter effect and polaroid-style imagery
- **Collection grid** — all six products in a uniform three-column layout with a live **category filter** (All / Coffee / Honey / Perfume / Incense / Pottery / Textiles)
- Qamariya quote panel, favorites strip, teaser band, and a full footer

### Collections
- Category-filtered product cards; each card is keyboard-accessible and routes to its product page

### Product page
- Split hero: product image + details (origin, signature vessel, price, availability badge)
- **Locale-aware pricing** — `7,000 YER` in English, `٧٬٠٠٠ ريال` with Arabic-Indic numerals in Arabic
- **Check Availability** panel — per-store status with a "last updated" timestamp
- **Find a Store** cross-links to the Stores page, highlighting shops that carry the item
- Full craft story, materials breakdown, and related products

### Stores
- Store list with address, hours, tappable phone links, and "get directions"
- **OpenStreetMap** embed that re-centres when a store is selected
- Product chips showing which lines each atelier carries

### Our Story
- Vertical **chronicle timeline** (1987 → 2026) with scroll-reveal animations, watermark years, pulsing spine nodes, and polaroid imagery

### Craftsmanship
- Five discipline stories (coffee, honey, pottery, weaving, perfume) with a sticky index sidebar and alternating editorial layout

### Contact & Wholesale
- Seven-field inquiry form (name, email, phone, company, country, type, message)
- Client-side validation, localized error messages, a hidden honeypot for spam, and success / error states
- Submits to **Formspree**; input is sanitized before send

---

## 🌍 Internationalization

- Every UI string lives in `src/data/translations.js` under `en` / `ar` keys — no hard-coded copy in components
- `dir="rtl"` / `dir="ltr"` is applied at the page root; layout mirrors automatically via logical properties
- Locale choice **persists in `localStorage`** and auto-detects Arabic browsers on first visit
- Prices format per locale with `Intl.NumberFormat`

---

## 📁 Project structure

```
src/
├── assets/              Product images imported by JS (webp)
├── components/ui/       Shared UI (InteractiveHoverButton)
├── data/
│   ├── products.js      Six products + availability + getOverallStatus + timestamp
│   ├── stores.js        Store locations, hours, coordinates
│   ├── chronicle.js     Our Story timeline events
│   ├── crafts.js        Craftsmanship discipline stories
│   ├── translations.js  All EN / AR UI strings
│   └── index.js         Barrel export
├── hooks/
│   └── useTypewriter.js Typewriter + parallel story-writer hooks
├── pages/               One folder per page (index.jsx + PageName.css)
│   ├── StoryPage/
│   ├── ProductPage/
│   ├── StoresPage/
│   ├── ContactPage/
│   └── CraftsmanshipPage/
├── utils/
│   └── formatPrice.js   Locale-aware YER formatting
├── App.jsx              Root component, in-app router, home sections, hero
└── App.css              Global styles + hero + home-page styles

public/
├── images/              Hero + story imagery (webp)
├── sanaa_logo.svg       Transparent logo (used across all pages)
└── 404.html             Host-level fallback

netlify.toml             Build, SPA redirect, security headers
```

---

## 🚀 Local setup

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file
cp .env.example .env
#    then set VITE_FORMSPREE_ID (see below)

# 3. Start the dev server
npm run dev
```

### Environment variables

Create a `.env` in the project root (it is gitignored — never commit it):

| Variable | Description |
|---|---|
| `VITE_FORMSPREE_ID` | Your Formspree form ID (the part after `/f/` in the endpoint URL) |

```
VITE_FORMSPREE_ID=your_form_id_here
```

---

## 📜 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Dev server at `http://localhost:5173` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

---

## 🔄 Updating content

### Product availability

Availability lives in `src/data/products.js`. Each product maps store slugs to a status.

- **Statuses:** `in_stock` · `low_stock` · `out_of_stock`
- **Store slugs:** `bab-al-yaman` · `al-qaa`
- **Overall badge** is computed by `getOverallStatus()`: any `in_stock` → *Available*; else any `low_stock` → *Limited*; otherwise *Unavailable*

```js
// Example: Haraz Coffee sold out at the flagship
availability: { 'bab-al-yaman': 'out_of_stock', 'al-qaa': 'low_stock' }
```

Then bump the timestamp at the bottom of the same file:

```js
export const availabilityUpdatedAt = '2026-10-03'  // YYYY-MM-DD
```

Commit and push — the deploy rebuilds automatically.

### Adding a product

1. Add the image to `src/assets/`
2. Import it at the top of `src/data/products.js`
3. Append an object to the `products` array (follow the existing bilingual field shape)
4. Add an `availability` entry for each store

---

## 🌐 Deploying to Netlify

Configuration is already in `netlify.toml` (build command, publish dir, SPA redirect, security headers).

1. Push to GitHub
2. On [netlify.com](https://netlify.com): **Add new site → Import an existing project → GitHub** → select this repo
3. Netlify auto-fills build settings from `netlify.toml` (`npm run build` → `dist`)
4. Add the environment variable **`VITE_FORMSPREE_ID`** under *Site settings → Environment variables*
5. Deploy — you'll get a free `*.netlify.app` URL

> After deploying, update the `canonical` and Open Graph URLs in `index.html` to your live address.

---

## 🔒 Security & privacy

- Security headers (CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS) are set in `netlify.toml`
- The Content-Security-Policy whitelists only what the app uses: Google Fonts, OpenStreetMap embeds, and the Formspree endpoint
- No analytics, no trackers, no third-party cookies
- The only personal data collected is what a visitor types into the contact form

---

## 📝 Notes & design constraints

- **No e-commerce** — by design. No cart, checkout, payments, or user accounts. The site is a catalogue for in-person acquisition and wholesale inquiry.
- **No admin interface** — content is updated by editing the data files and redeploying (see *Updating content*).
- **Static content layer** — all copy and data live in `src/data/`, making the site fast, version-controlled, and dependency-light.
- **Product content** is modelled on real Yemeni goods (Udaini coffee landrace, Do'ani sidr honey, Makhmariya al-Arais attar, Adeni bakhoor, madar terracotta, Habirah shawl). Arabic copy should be proofread by a native speaker before a formal launch.

---

<div align="center">

**© 1987–2026 Sana'a House Artisans Co.** · Sana'a · Aden · Shibam

*This is a showcase / portfolio project.*

</div>
