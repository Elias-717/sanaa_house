import { useState, useEffect, useRef } from 'react'
import { products, stores, getOverallStatus, translations } from '@/data'
import logo from '@/assets/sanaa_logo.png'
import './ProductPage.css'

/* ── Shared nav (same feel as StoryPage) ── */
function ProductNav({ copy, locale, onLanguageChange, onBack, onNavigate }) {
  return (
    <nav className="pp-nav">
      <button className="pp-nav__brand" onClick={onBack}>
        <img src={logo} alt="Sana'a House" />
        <span>Sana'a House<small>دار صنعاء · ١٩٨٧</small></span>
      </button>
      <div className="pp-nav__links">
        {copy.navigation.map((item, i) => (
          <button key={item} className="pp-nav__link" onClick={() => onNavigate(i)}>{item}</button>
        ))}
      </div>
      <button className="pp-nav__lang" onClick={onLanguageChange}>{copy.language}</button>
    </nav>
  )
}

/* ── Status badge ── */
function StatusBadge({ status, copy }) {
  const map = {
    Available:   { label: copy.statusAvailable,   cls: 'pp-badge--available' },
    Limited:     { label: copy.statusLimited,      cls: 'pp-badge--limited'   },
    Unavailable: { label: copy.statusUnavailable,  cls: 'pp-badge--unavailable' },
  }
  const { label, cls } = map[status] || map.Unavailable
  return <span className={`pp-badge ${cls}`}><span className="pp-badge__dot" />{label}</span>
}

/* ── Store status row label ── */
function StoreStatus({ status, copy }) {
  if (status === 'in_stock')   return <span className="pp-store-status pp-store-status--in">{copy.inStock}</span>
  if (status === 'low_stock')  return <span className="pp-store-status pp-store-status--low">{copy.lowStock}</span>
  return <span className="pp-store-status pp-store-status--out">{copy.outOfStock}</span>
}

/* ── Availability panel ── */
function AvailabilityPanel({ product, copy, open, onClose, onFindStore }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="pp-overlay" role="dialog" aria-modal="true" aria-label={copy.availabilityTitle}>
      <div className="pp-panel" ref={panelRef}>
        <button className="pp-panel__close" onClick={onClose} aria-label="Close">✕</button>
        <p className="pp-panel__eyebrow">AVAILABILITY</p>
        <h3 className="pp-panel__title">{copy.availabilityTitle}</h3>
        <p className="pp-panel__product">{product.name}</p>

        <ul className="pp-store-list">
          {stores.map(store => {
            const status = product.availability?.[store.slug] || 'out_of_stock'
            return (
              <li key={store.slug} className="pp-store-row">
                <div className="pp-store-row__info">
                  <strong>{store.name}</strong>
                  <span>{store.city}</span>
                </div>
                <StoreStatus status={status} copy={copy} />
              </li>
            )
          })}
        </ul>

        <p className="pp-panel__note">{copy.availabilityNote}</p>

        <button className="pp-panel__find-btn" onClick={onFindStore}>
          {copy.findStore} ↗
        </button>
      </div>
    </div>
  )
}

/* ── Main product page ── */
export default function ProductPage({ slug, locale, onLanguageChange, onBack, onNavigate }) {
  const copy = translations[locale]
  const product = products.find(p => p.slug === slug)
  const [panelOpen, setPanelOpen] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [slug])

  // Fade-in on scroll for detail sections
  useEffect(() => {
    const els = document.querySelectorAll('.pp-fade')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('pp-visible')
        else e.target.classList.remove('pp-visible')
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [slug])

  if (!product) {
    return (
      <div className="pp-site pp-404" dir={copy.direction}>
        <h2>Product not found.</h2>
        <button onClick={onBack}>{copy.backToCollection}</button>
      </div>
    )
  }

  const overallStatus = getOverallStatus(product)
  const isAr = locale === 'ar'
  const name        = isAr ? product.nameAr        : product.name
  const description = isAr ? product.descriptionAr : product.description
  const origin      = isAr ? product.originAr      : product.origin
  const vessel      = isAr ? product.vesselAr      : product.vessel
  const materials   = isAr ? product.materialsAr   : product.materials
  const story       = isAr ? product.storyAr       : product.story
  const category    = isAr ? product.categoryAr    : product.category

  return (
    <div className="pp-site" dir={copy.direction}>
      <ProductNav
        copy={copy}
        locale={locale}
        onLanguageChange={onLanguageChange}
        onBack={onBack}
        onNavigate={onNavigate}
      />

      <main>
        {/* ── Hero split ── */}
        <section className="pp-hero" ref={heroRef}>
          {/* Image side */}
          <div className="pp-hero__image">
            <div className="pp-hero__img-frame">
              <img src={product.image} alt={name} />
              <div className="pp-hero__img-overlay" />
              <span className="pp-hero__img-num">0{products.indexOf(product) + 1}</span>
            </div>
          </div>

          {/* Info side */}
          <div className="pp-hero__info">
            <button className="pp-back-btn" onClick={onBack}>{copy.backToCollection}</button>
            <p className="pp-eyebrow">{category} · {copy.history}</p>
            <h1>{name}</h1>
            <p className="pp-hero__desc">{description}</p>

            <div className="pp-hero__meta">
              <div className="pp-meta-row">
                <span className="pp-meta-label">{copy.origin}</span>
                <span className="pp-meta-value">{origin}</span>
              </div>
              <div className="pp-meta-row">
                <span className="pp-meta-label">{copy.vessel}</span>
                <span className="pp-meta-value">{vessel}</span>
              </div>
            </div>

            <div className="pp-hero__price-row">
              <span className="pp-price">{product.price}</span>
              <StatusBadge status={overallStatus} copy={copy} />
            </div>

            <div className="pp-hero__actions">
              <button className="pp-btn pp-btn--primary" onClick={() => setPanelOpen(true)}>
                {copy.checkAvailability}
              </button>
              <button className="pp-btn pp-btn--ghost" onClick={() => onNavigate(1)}>
                {copy.findStore}
              </button>
            </div>

            <p className="pp-hero__notice">{copy.notice}</p>
          </div>
        </section>

        {/* ── Story section ── */}
        <section className="pp-story pp-fade">
          <div className="pp-story__inner">
            <div className="pp-story__text">
              <p className="pp-eyebrow">{copy.productStory}</p>
              <h2>{name}</h2>
              <p>{story}</p>
            </div>
            <div className="pp-story__aside">
              <div className="pp-story__materials-card">
                <p className="pp-materials-label">{copy.materials}</p>
                <ul className="pp-materials-list">
                  {materials.split('·').map((m, i) => (
                    <li key={i}>{m.trim()}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related products ── */}
        <section className="pp-related pp-fade">
          <div className="pp-related__head">
            <p className="pp-eyebrow">{copy.collectionTitle}</p>
          </div>
          <div className="pp-related__grid">
            {products.filter(p => p.slug !== product.slug).slice(0, 3).map(p => (
              <button
                key={p.slug}
                className="pp-related-card"
                onClick={() => onNavigate('product', p.slug)}
              >
                <div className="pp-related-card__img">
                  <img src={p.image} alt={isAr ? p.nameAr : p.name} loading="lazy" />
                </div>
                <p className="pp-related-card__cat">{isAr ? p.categoryAr : p.category}</p>
                <p className="pp-related-card__name">{isAr ? p.nameAr : p.name}</p>
                <p className="pp-related-card__price">{p.price}</p>
              </button>
            ))}
          </div>
        </section>
      </main>

      <AvailabilityPanel
        product={product}
        copy={copy}
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
        onFindStore={() => { setPanelOpen(false); onNavigate(1) }}
      />
    </div>
  )
}
