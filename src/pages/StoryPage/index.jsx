import { useEffect, useRef, useState } from 'react'
import { chronicle, translations } from '@/data'
import logo from '@/assets/sanaa_logo.png'
import './StoryPage.css'

/* ── Shared fade-in observer hook ── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('sp-visible')
        else el.classList.remove('sp-visible')
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── Nav ── */
function StoryNav({ onLanguageChange, onBack, copy }) {
  return (
    <nav className="sp-nav">
      <a className="sp-nav__brand" href="#top" onClick={onBack}>
        <img src={logo} alt="Sana'a House" />
        <span>Sana'a House<small>دار صنعاء · ١٩٨٧</small></span>
      </a>
      <div className="sp-nav__links">
        {copy.navigation.map((item, i) => (
          <a key={item} href="#top" onClick={onBack}>{item}</a>
        ))}
      </div>
      <button className="sp-nav__lang" onClick={onLanguageChange}>{copy.language}</button>
    </nav>
  )
}

/* ── Hero ── */
function StoryHero({ copy }) {
  const contentRef = useFadeIn(0.05)
  const ledgerRef  = useFadeIn(0.05)

  return (
    <header className="sp-hero">
      <div className="sp-hero__bg" />
      <div className="sp-hero__veil" />
      <div className="sp-hero__content" ref={contentRef}>
        <p className="sp-eyebrow">
          <span className="sp-eyebrow__dot" />
          CHRONICLE OF STEWARDSHIP
          <span className="sp-eyebrow__sep">·</span>
          <span className="sp-eyebrow__ar">سِجل الأثر والتوثيق</span>
        </p>
        <h1>{copy.storyTitle}</h1>
        <p className="sp-hero__arabic">
          {copy.storyTitleAr ?? 'حكاية من المدينة القديمة'}
        </p>
        <p className="sp-hero__lead">
          {copy.storyHeroCopy ?? "Four decades ago, beneath the vaulted baked-brick gates of Bab al-Yaman, Sana'a House opened its timber doors. What began as a sanctuary for ancient highland craftsmanship has persevered as an enduring pact: preserving South Arabian material culture, raw geological clays, and heirloom guild traditions against the rush of the modern world."}
        </p>
      </div>
      <aside className="sp-ledger" ref={ledgerRef}>
        <p className="sp-ledger__label">ARCHIVAL LEDGER</p>
        <div className="sp-ledger__dates">
          <span>1987 — 2026</span>
          <span className="sp-ledger__ar">٣٩ عاماً من الصون</span>
        </div>
        <p className="sp-ledger__note">
          From our flagship cellar in Souq al-Milh to patrons across five continents, keeping the maker's hand unbroken.
        </p>
        <div className="sp-ledger__stats">
          <div><strong>5</strong><span>Guild Ateliers</span></div>
          <div><strong>39</strong><span>Years Active</span></div>
          <div><strong>6</strong><span>Craft Lines</span></div>
        </div>
      </aside>
    </header>
  )
}

/* ── Chronicle header ── */
function ChronicleHeader() {
  const ref = useFadeIn()
  return (
    <div className="sp-chronicle-head sp-fade" ref={ref}>
      <div>
        <p className="sp-section-eyebrow">SANA'A · SINCE 1987 · YEMEN</p>
        <h2>Four Decades in Chronology</h2>
      </div>
      <p className="sp-chronicle-head__sub">
        A physical narrative of patience, artisan alliances, and uninterrupted cultural heritage anchored in Old Sana'a.
      </p>
    </div>
  )
}

/* ── Single timeline entry ── */
function ChronicleEntry({ entry, index }) {
  const textRef = useRef(null)
  const imgRef  = useRef(null)

  useEffect(() => {
    const targets = [textRef.current, imgRef.current].filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('sp-visible')
          else e.target.classList.remove('sp-visible')
        })
      },
      { threshold: 0.1 }
    )
    targets.forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])

  return (
    <article
      className={`sp-entry sp-entry--${entry.side}`}
      style={{ '--i': index }}
    >
      {/* Giant watermark year — pure CSS decoration */}
      <span className="sp-entry__watermark" aria-hidden="true">{entry.year}</span>

      {/* ── Text panel ── */}
      <div
        className={`sp-entry__text sp-slide-${entry.side === 'right' ? 'left' : 'right'}`}
        ref={textRef}
      >
        <div className="sp-entry__year-row">
          <span className="sp-entry__year">{entry.year}</span>
          <span className="sp-entry__count">{entry.yearAr}</span>
          {entry.badge && <span className="sp-entry__badge">{entry.badge}</span>}
        </div>
        <h3>{entry.title}</h3>
        <p className="sp-entry__title-ar">{entry.titleAr}</p>
        <div className="sp-entry__divider" />
        <p className="sp-entry__body">{entry.body}</p>
        <a className="sp-entry__link" href="#top">
          <span className="sp-entry__link-dot" />
          {entry.caption}
        </a>
      </div>

      {/* ── Spine ── */}
      <div className="sp-entry__spine">
        <div className="sp-entry__spine-line sp-entry__spine-line--top" />
        <div className="sp-entry__spine-node">
          <span className="sp-entry__spine-pulse" />
        </div>
        <div className="sp-entry__spine-line sp-entry__spine-line--bot" />
      </div>

      {/* ── Image panel ── */}
      <div className="sp-entry__image sp-slide-up" ref={imgRef}>
        <div className="sp-entry__polaroid">
          <div style={{ position: 'relative' }}>
            <img
              className="sp-entry__polaroid-img"
              src={entry.image}
              alt={entry.title}
              loading="lazy"
            />
            <div className="sp-entry__img-hover" />
            <span className="sp-entry__img-stamp">{entry.year}</span>
          </div>
          <p className="sp-entry__polaroid-caption">{entry.captionAr}</p>
        </div>
        <p className="sp-entry__caption">
          <span className="sp-entry__caption-label">ORIGINAL PLATE {index + 1}</span>
          {entry.caption}
        </p>
      </div>
    </article>
  )
}

/* ── Timeline ── */
function Chronicle() {
  return (
    <section className="sp-chronicle">
      <ChronicleHeader />
      <div className="sp-timeline">
        {chronicle.map((entry, i) => (
          <ChronicleEntry key={entry.year} entry={entry} index={i} />
        ))}
      </div>
    </section>
  )
}

/* ── Closing CTA ── */
function StoryClosing({ copy, onBack }) {
  const ref = useFadeIn()
  return (
    <section className="sp-closing sp-fade" ref={ref}>
      <div className="sp-closing__inner">
        <p className="sp-eyebrow">
          <span className="sp-eyebrow__dot" />
          EST. 1987 · OLD SANA'A
        </p>
        <h2>The Maker's Hand,<br />Unbroken.</h2>
        <p>Every piece in our catalogue carries an unbroken chain of craft — from highland guild workshop to your hands.</p>
        <div className="sp-closing__actions">
          <a className="sp-btn sp-btn--primary" href="#top" onClick={onBack}>{copy.explore}</a>
          <a className="sp-btn sp-btn--ghost" href="#footer" onClick={onBack}>{copy.inquiry}</a>
        </div>
      </div>
      <div className="sp-closing__img" />
    </section>
  )
}

/* ── Root ── */
export default function StoryPage({ locale, onLanguageChange, onBack }) {
  const copy = translations[locale]
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])

  return (
    <div className="sp-site" dir={copy.direction}>
      <StoryNav copy={copy} locale={locale} onLanguageChange={onLanguageChange} onBack={onBack} />
      <main>
        <StoryHero copy={copy} />
        <Chronicle />
        <StoryClosing copy={copy} onBack={onBack} />
      </main>
      <footer className="sp-footer">
        <span>© 1987–2026 Sana'a House Artisans Co.</span>
        <span>Sana'a · Aden · Shibam</span>
      </footer>
    </div>
  )
}
