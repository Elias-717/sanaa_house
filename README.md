# Sana'a House — Heritage, Crafted to Last

Bilingual (Arabic / English) showcase website for Sana'a House artisan atelier. Built with React 19 + Vite.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 (Vite, JSX) |
| Styling | Plain CSS with logical properties |
| Form backend | Formspree |
| Hosting (proposed) | Vercel free tier |

---

## Local setup

```bash
# 1. Install dependencies
npm install

# 2. Create environment file (see Environment Variables below)
cp .env.example .env

# 3. Start dev server
npm run dev
```

---

## Environment variables

Create a `.env` file in the project root. **Never commit this file — it is already in `.gitignore`.**

| Variable | Description |
|---|---|
| `VITE_FORMSPREE_ID` | The form ID from your Formspree dashboard (the part after `/f/` in the endpoint URL) |

Example `.env`:
```
VITE_FORMSPREE_ID=mzeznzee
```

---

## Project structure

```
src/
├── assets/          Static images imported by JS
├── components/ui/   Shared UI components (InteractiveHoverButton)
├── data/            All content and translations
│   ├── products.js  Products + availability + getOverallStatus
│   ├── stores.js    Store locations and coordinates
│   ├── chronicle.js Timeline events for Our Story page
│   ├── crafts.js    Craftsmanship discipline stories
│   ├── translations.js  All EN/AR UI strings
│   └── index.js     Barrel export
├── hooks/           Shared React hooks (useTypewriter)
├── pages/           One folder per page, each with JSX + CSS
├── utils/           Helper functions (formatPrice)
├── App.jsx          Root component and page router
└── App.css          Global styles
```

---

## Updating product availability

Availability is stored in `src/data/products.js`. Each product has an `availability` object mapping store slugs to a status.

**Valid status values:** `in_stock` · `low_stock` · `out_of_stock`

**Store slugs:** `bab-al-yaman` · `al-qaa`

### Steps

1. Open `src/data/products.js`
2. Find the product you want to update
3. Change the status for the relevant store:

```js
// Example: Haraz Coffee at Bab al-Yaman sold out
availability: { 'bab-al-yaman': 'out_of_stock', 'al-qaa': 'low_stock' }
```

4. Update the timestamp at the bottom of the same file:

```js
export const availabilityUpdatedAt = '2026-10-03'  // ← change to today's date (YYYY-MM-DD)
```

5. Commit and push:

```bash
git add src/data/products.js
git commit -m "stock: update availability for [product name]"
git push origin main
```

If deployed on Vercel, the site rebuilds automatically within ~30 seconds.

---

## Adding a new product

1. Add the product image to `src/assets/`
2. Import it at the top of `src/data/products.js`
3. Add a new object to the `products` array following the existing structure
4. Add availability rows for each store

---

## Deploying to Vercel

```bash
# Install Vercel CLI (once)
npm i -g vercel

# Deploy
vercel --prod
```

Set `VITE_FORMSPREE_ID` in the Vercel project settings under **Environment Variables**.

---

## Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server at `http://localhost:5173` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |
