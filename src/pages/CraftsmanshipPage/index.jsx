import { useState, useEffect, useRef } from 'react'
import { crafts, translations } from '@/data'
import logo from '@/assets/sanaa_logo.png'
import './CraftsmanshipPage.css'

function CraftNav({ copy, onBack, onLanguageChange, onNavigate }) {
  return (
    <nav className="crp-nav">
      <button className="crp-nav__brand" onClick={onBack}>
        <img src={logo} alt="Sana'a House" />
        <span>Sana'a House<small>دار صنعاء · ١٩٨٧</small></span>
      </button>
      <div className="crp-nav__links">
        {copy.navigation.map((item, i) => (
          <button key={item} className="crp-nav__link" onClick={() => onNavigate(i)}>{item}</button>
        ))}
      </div>
      <button className="crp-nav__lang" onClick={onLanguageChange}>{copy.language}</button>
    </nav>
  )
}

/* ── Fade hook ── */
function useFadeRef(threshold = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.classList.add('crp-visible')
        else el.classList.remove('crp-visible')
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── Discipline index sidebar ── */
function DisciplineIndex({ crafts, active, locale, onSelect }) {
  const isAr = locale === 'ar'
  return (
    <aside className="crp-index">
      <p className="crp-index__label">DISCIPLINES</p>
      <ol className="crp-index__list">
        {crafts.map((c, i) => (
          <li key={c.slug}>
            <button
              className={`crp-index__item ${active === c.slug ? 'crp-index__item--active' : ''}`}
              onClick={() => onSelect(c.slug)}
            >
              <span className="crp-index__num">0{i + 1}</span>
              <span>{isAr ? c.subtitleAr : c.subtitle}</span>
            </button>
          </li>
        ))}
      </ol>
    </aside>
  )
}

/* ── Single craft entry ── */
function CraftEntry({ craft, index, locale }) {
  const isAr    = locale === 'ar'
  const textRef = useFadeRef()
  const imgRef  = useFadeRef(0.08)
  const isEven  = index % 2 === 0

  return (
    <article
      id={craft.slug}
      className={`crp-entry ${isEven ? 'crp-entry--normal' : 'crp-entry--reverse'}`}
      style={{ '--i': index }}
    >
      {/* Watermark index */}
      <span className="crp-entry__watermark" aria-hidden="true">0{index + 1}</span>

      {/* Text */}
      <div className="crp-entry__text crp-fade" ref={textRef}>
        <p className="crp-eyebrow">
          {isAr ? craft.subtitleAr : craft.subtitle}
        </p>
        <h2>{isAr ? craft.titleAr : craft.title}</h2>
        <p className="crp-entry__intro">{isAr ? craft.introAr : craft.intro}</p>
        <div className="crp-entry__divider" />
        <p className="crp-entry__body">{isAr ? craft.bodyAr : craft.body}</p>
      </div>

      {/* Spine */}
      <div className="crp-entry__spine">
        <div className="crp-spine__line crp-spine__line--top" />
        <div className="crp-spine__node">
          <span className="crp-spine__pulse" />
          <span className="crp-spine__num">0{index + 1}</span>
        </div>
        <div className="crp-spine__line crp-spine__line--bot" />
      </div>

      {/* Image — polaroid style */}
      <div className="crp-entry__image crp-fade" ref={imgRef}>
        <div className={`crp-polaroid ${isEven ? 'crp-polaroid--tilt-left' : 'crp-polaroid--tilt-right'}`}>
          <div className="crp-polaroid__photo">
            <img src={craft.image} alt={isAr ? craft.titleAr : craft.title} loading="lazy" />
            <div className="crp-polaroid__sheen" />
          </div>
          <p className="crp-polaroid__caption">
            {isAr ? craft.subtitleAr : craft.subtitle}
          </p>
        </div>
        <p className="crp-entry__img-note">
          <span>CRAFT RECORD</span>
          {isAr ? craft.titleAr : craft.title}
        </p>
      </div>
    </article>
  )
}

/* ── Closing quote ── */
function ClosingQuote({ ref: _r }) {
  const ref = useFadeRef()
  return (
    <section className="crp-closing crp-fade" ref={ref}>
      <div className="crp-closing__arch">
        <span /><span /><span />
      </div>
      <blockquote>
        "The hand does not forget what the machine never learned."
      </blockquote>
      <cite>— Zayd Al-Sanaani, founder, 1987</cite>
    </section>
  )
}

export default function CraftsmanshipPage({ locale, onLanguageChange, onBack, onNavigate }) {
  const copy  = translations[locale]
  const isAr  = locale === 'ar'
  const [active, setActive] = useState(crafts[0].slug)
  const heroRef = useFadeRef(0.05)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])

  const scrollToCraft = (slug) => {
    setActive(slug)
    const el = document.getElementById(slug)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Update active discipline on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    crafts.forEach(c => {
      const el = document.getElementById(c.slug)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="crp-site" dir={copy.direction}>
      <CraftNav copy={copy} onBack={onBack} onLanguageChange={onLanguageChange} onNavigate={onNavigate} />

      <main>
        {/* ── Hero ── */}
        <header className="crp-hero">
          <div className="crp-hero__bg" />
          <div className="crp-hero__veil" />
          <div className="crp-hero__content crp-fade" ref={heroRef}>
            <p className="crp-eyebrow">
              <span className="crp-eyebrow__dot" />
              GUILD DOCUMENTATION · توثيق الحرف
            </p>
            <h1>{copy.craftsmanshipTitle}</h1>
            <p className="crp-hero__sub">{copy.craftsmanshipCopy}</p>
            <div className="crp-hero__disciplines">
              {crafts.map((c, i) => (
                <button
                  key={c.slug}
                  className="crp-hero__disc-btn"
                  onClick={() => scrollToCraft(c.slug)}
                >
                  <span className="crp-hero__disc-num">0{i + 1}</span>
                  {isAr ? c.subtitleAr.split('·')[0].trim() : c.subtitle.split('·')[0].trim()}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* ── Content: sticky index + entries ── */}
        <div className="crp-body">
          <DisciplineIndex
            crafts={crafts}
            active={active}
            locale={locale}
            onSelect={scrollToCraft}
          />
          <div className="crp-entries">
            {crafts.map((craft, i) => (
              <CraftEntry key={craft.slug} craft={craft} index={i} locale={locale} />
            ))}
            <ClosingQuote />
          </div>
        </div>
      </main>

      <footer className="crp-footer">
        <span>© 1987–2026 Sana'a House Artisans Co.</span>
        <span>Sana'a · Aden · Shibam</span>
      </footer>
    </div>
  )
}
