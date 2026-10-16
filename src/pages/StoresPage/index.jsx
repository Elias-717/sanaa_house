import { useState, useEffect, useRef } from 'react'
import { stores, products, getOverallStatus, translations } from '@/data'
import logo from '@/assets/sanaa_logo.png'
import './StoresPage.css'

function StoresNav({ copy, onBack, onLanguageChange, onNavigate }) {
  return (
    <nav className="stp-nav">
      <button className="stp-nav__brand" onClick={onBack}>
        <img src={logo} alt="Sana'a House" />
        <span>Sana'a House<small>دار صنعاء · ١٩٨٧</small></span>
      </button>
      <div className="stp-nav__links">
        {copy.navigation.map((item, i) => (
          <button key={item} className="stp-nav__link" onClick={() => onNavigate(i)}>{item}</button>
        ))}
      </div>
      <button className="stp-nav__lang" onClick={onLanguageChange}>{copy.language}</button>
    </nav>
  )
}

/* ── Static map placeholder using OpenStreetMap embed ── */
function StoreMap({ store, active }) {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${store.coordinates.lng - 0.008}%2C${store.coordinates.lat - 0.006}%2C${store.coordinates.lng + 0.008}%2C${store.coordinates.lat + 0.006}&layer=mapnik&marker=${store.coordinates.lat}%2C${store.coordinates.lng}`
  return (
    <div className={`stp-map ${active ? 'stp-map--active' : ''}`}>
      <iframe
        title={store.name}
        src={src}
        loading="lazy"
        allowFullScreen
        aria-label={`Map showing location of ${store.name}`}
      />
      <div className="stp-map__veil" />
    </div>
  )
}

/* ── Products carried by a store ── */
function StoreProducts({ store, copy, locale, onProductClick }) {
  const isAr = locale === 'ar'
  const carried = products.filter(p => {
    const s = p.availability?.[store.slug]
    return s === 'in_stock' || s === 'low_stock'
  })
  if (!carried.length) return null
  return (
    <div className="stp-store__products">
      <p className="stp-label">Available Lines</p>
      <div className="stp-store__product-chips">
        {carried.map(p => (
          <button
            key={p.slug}
            className="stp-chip"
            onClick={() => onProductClick(p.slug)}
          >
            <img src={p.image} alt={isAr ? p.nameAr : p.name} />
            <span>{isAr ? p.categoryAr : p.category}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ── Single store card ── */
function StoreCard({ store, copy, locale, active, onSelect, onProductClick }) {
  const isAr = locale === 'ar'
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('stp-visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const directionsUrl = `https://www.openstreetmap.org/?mlat=${store.coordinates.lat}&mlon=${store.coordinates.lng}#map=17/${store.coordinates.lat}/${store.coordinates.lng}`

  return (
    <article
      ref={ref}
      className={`stp-card stp-fade ${active ? 'stp-card--active' : ''}`}
      onClick={onSelect}
    >
      <div className="stp-card__head">
        <div>
          <p className="stp-card__city">{isAr ? store.cityAr : store.city}</p>
          <h2 className="stp-card__name">{isAr ? store.nameAr : store.name}</h2>
          <p className="stp-card__address">{isAr ? store.addressAr : store.address}</p>
        </div>
        <span className={`stp-card__indicator ${active ? 'stp-card__indicator--active' : ''}`} aria-hidden="true" />
      </div>

      <div className="stp-card__details">
        <div className="stp-card__detail-row">
          <span className="stp-label">{copy.openingHours}</span>
          <span>{isAr ? store.hoursAr : store.hours}</span>
        </div>
        <div className="stp-card__detail-row">
          <span className="stp-label">{copy.callStore}</span>
          <a
            href={`tel:${store.phone}`}
            className="stp-card__phone"
            onClick={e => e.stopPropagation()}
          >
            {store.phone}
          </a>
        </div>
        {store.note && (
          <p className="stp-card__note">{isAr ? store.noteAr : store.note}</p>
        )}
      </div>

      <StoreProducts
        store={store}
        copy={copy}
        locale={locale}
        onProductClick={onProductClick}
      />

      <a
        className="stp-card__directions"
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
      >
        {copy.getDirections} ↗
      </a>
    </article>
  )
}

export default function StoresPage({ locale, onLanguageChange, onBack, onNavigate, highlightStore }) {
  const copy = translations[locale]
  const [activeStore, setActiveStore] = useState(highlightStore || stores[0].slug)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])

  const activeStoreData = stores.find(s => s.slug === activeStore) || stores[0]
  const isAr = locale === 'ar'

  return (
    <div className="stp-site" dir={copy.direction}>
      <StoresNav copy={copy} onBack={onBack} onLanguageChange={onLanguageChange} onNavigate={onNavigate} />

      <main className="stp-main">
        {/* ── Page header ── */}
        <header className="stp-header">
          <div className="stp-header__text">
            <p className="stp-eyebrow">EST. 1987 · OLD SANA'A</p>
            <h1>{copy.storesTitle}</h1>
            <p className="stp-header__copy">{copy.storesCopy}</p>
          </div>
          <div className="stp-header__stats">
            <div><strong>{stores.length}</strong><span>Ateliers</span></div>
            <div><strong>2</strong><span>Cities</span></div>
            <div><strong>6</strong><span>Craft Lines</span></div>
          </div>
        </header>

        {/* ── Split: list + map ── */}
        <div className="stp-body">
          {/* Store list */}
          <div className="stp-list">
            {stores.map(store => (
              <StoreCard
                key={store.slug}
                store={store}
                copy={copy}
                locale={locale}
                active={activeStore === store.slug}
                onSelect={() => setActiveStore(store.slug)}
                onProductClick={(slug) => onNavigate('product', slug)}
              />
            ))}
          </div>

          {/* Map panel */}
          <div className="stp-map-panel">
            <div className="stp-map-panel__inner">
              <StoreMap store={activeStoreData} active />
              <div className="stp-map-panel__info">
                <p className="stp-eyebrow">{isAr ? activeStoreData.cityAr : activeStoreData.city}</p>
                <p className="stp-map-panel__name">{isAr ? activeStoreData.nameAr : activeStoreData.name}</p>
                <p className="stp-map-panel__addr">{isAr ? activeStoreData.addressAr : activeStoreData.address}</p>
                <a
                  className="stp-map-panel__dir"
                  href={`https://www.openstreetmap.org/?mlat=${activeStoreData.coordinates.lat}&mlon=${activeStoreData.coordinates.lng}#map=17/${activeStoreData.coordinates.lat}/${activeStoreData.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.getDirections} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="stp-footer">
        <span>© 1987–2026 Sana'a House Artisans Co.</span>
        <span>Sana'a · Aden · Shibam</span>
      </footer>
    </div>
  )
}
