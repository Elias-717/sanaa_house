import { useEffect, useRef, useState, useMemo } from 'react'
import { products, translations } from '@/data'
import logo from '@/assets/sanaa_logo.png'
import { InteractiveHoverButton } from '@/components/ui/InteractiveHoverButton'
import { useTypewriter, useStoryWriter } from '@/hooks/useTypewriter'
import StoryPage         from '@/pages/StoryPage'
import ProductPage       from '@/pages/ProductPage'
import StoresPage        from '@/pages/StoresPage'
import ContactPage       from '@/pages/ContactPage'
import CraftsmanshipPage from '@/pages/CraftsmanshipPage'
import './App.css'

function Anchor({ href, children, className = '', ...rest }) {
  return <a className={className} href={href} {...rest}>{children}</a>
}

function Header({ copy, locale, onLanguageChange, onNavigate }) {
  const navRef = useRef(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })

  const handleMouseEnter = (e) => {
    const nav = navRef.current
    if (!nav) return
    const navRect = nav.getBoundingClientRect()
    const itemRect = e.currentTarget.getBoundingClientRect()
    setIndicator({ left: itemRect.left - navRect.left, width: itemRect.width, opacity: 1 })
  }
  const handleMouseLeave = () => setIndicator(p => ({ ...p, opacity: 0 }))

  // index → action: 0=collections scroll, 1=stores page, 2=story page,
  //                  3=craftsmanship page, 4=contact page
  const handleNavClick = (index, e) => {
    if (index === 0) return // anchor href handles it
    e.preventDefault()
    onNavigate(index)
  }

  const hrefs = ['#collection', '#', '#', '#', '#']

  return (
    <header className="header">
      <Anchor className="brand" href="#top">
        <img src={logo} alt="Sana'a House logo" />
        <span>Sana'a House<small>دار صنعاء · ١٩٨٧</small></span>
      </Anchor>
      <nav ref={navRef} onMouseLeave={handleMouseLeave}>
        <span className="nav-indicator" style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }} />
        {copy.navigation.map((item, index) => (
          <Anchor
            href={hrefs[index]}
            key={item}
            onMouseEnter={handleMouseEnter}
            onClick={(e) => handleNavClick(index, e)}
          >
            {item}
          </Anchor>
        ))}
      </nav>
      <div className="language">
        <button type="button" onClick={onLanguageChange}>{copy.language}</button>
        <i>/</i>
        <strong>{locale.toUpperCase()}</strong>
      </div>
    </header>
  )
}

function Hero({ copy }) {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)

  // Stable star data — generated once, never re-randomised on re-render
  const stars = useMemo(() => Array.from({ length: 160 }, () => ({
    x: Math.random(),
    y: Math.random() * 0.75,
    r: 0.4 + Math.random() * 1.0,
    phase: Math.random() * Math.PI * 2,
    speed: 0.4 + Math.random() * 0.8,
  })), [])

  // Canvas starfield — single element, zero DOM overhead
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = (t) => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      stars.forEach(s => {
        const alpha = 0.35 + 0.55 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase))
        ctx.globalAlpha = alpha
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2)
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [stars])

  // Scroll-driven layer effect
  useEffect(() => {
    const hero = heroRef.current
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const layers = [...hero.querySelectorAll('[data-parallax-layer]')]
    const city = layers[1]
    const content = hero.querySelector('.sanaa-hero__content')

    const chapters = [
      [0,    0   ],
      [0,    0.40],
      [0.40, 0.80],
    ]

    // Cache heroTop once — it never changes after mount
    let heroTop = null
    let frame = 0

    const update = () => {
      if (heroTop === null) {
        heroTop = hero.getBoundingClientRect().top + window.scrollY - 80
      }
      const scrolled = window.scrollY - heroTop
      const range = hero.offsetHeight - window.innerHeight
      const p = Math.min(Math.max(scrolled / range, 0), 1)

      // Fade content out during the city chapter (0 → 40%)
      if (content) {
        const fade = Math.max(1 - p / 0.4, 0)
        content.style.opacity = fade
      }

      layers.forEach((layer, i) => {
        if (i === 0) return
        const [start, end] = chapters[i]
        const cp = Math.min(Math.max((p - start) / (end - start), 0), 1)
        const initial = i === 1 ? 40 : 100
        layer.style.transform = `translateY(${(1 - cp) * initial}%)`
      })
      frame = 0
    }

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }

    const startListening = () => {
      if (city) city.style.animation = 'none'
      window.addEventListener('scroll', onScroll, { passive: true })
      update()
    }

    if (city) {
      city.addEventListener('animationend', startListening, { once: true })
    } else {
      startListening()
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
      if (city) city.removeEventListener('animationend', startListening)
    }
  }, [])

  return <section className="sanaa-hero" ref={heroRef}>
    <div className="sanaa-hero__layers">
      <div className="sanaa-hero__layer sanaa-hero__sky" data-parallax-layer="1">
        <canvas ref={canvasRef} className="star-canvas" />
        <span className="shooting-star s1" />
        <span className="shooting-star s2" />
        <span className="shooting-star s3" />
        <span className="shooting-star s4" />
        <span className="shooting-star s5" />
        <span className="searchlight sl1" />
        <span className="searchlight sl2" />
        <span className="searchlight sl3" />
        <span className="searchlight sl4" />
      </div>
      <div className="sanaa-hero__layer sanaa-hero__city" data-parallax-layer="2" />
      <div className="sanaa-hero__layer sanaa-hero__bab" data-parallax-layer="3" />
      <div className="sanaa-hero__veil" />
      <div className="sanaa-hero__content">
        <p className="sanaa-hero__eyebrow hero-land-1">SANAA, YEMEN</p>
        <div className="hero-land-2"><h1>SANAA<br />HOUSE</h1></div>
        <p className="sanaa-hero__description hero-land-3">{copy.heroCopy}</p>
        <InteractiveHoverButton className="hero-land-4" href="#collection" text={copy.explore} />
      </div>
    </div>
  </section>
}

function CoffeeDots() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // Warm coffee palette
    const colors = [
      'rgba(139, 90, 43,',
      'rgba(180, 120, 60,',
      'rgba(101, 67, 33,',
      'rgba(196, 154, 69,',
      'rgba(120, 80, 40,',
    ]

    let dots = []
    let raf
    let w, h

    const resize = () => {
      w = canvas.width  = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    const init = () => {
      resize()
      dots = Array.from({ length: 55 }, () => ({
        x:       Math.random() * w,
        y:       Math.random() * h,
        r:       1.2 + Math.random() * 3.2,
        vx:      (Math.random() - 0.5) * 0.18,
        vy:      (Math.random() - 0.5) * 0.18,
        color:   colors[Math.floor(Math.random() * colors.length)],
        phase:   Math.random() * Math.PI * 2,
        speed:   0.25 + Math.random() * 0.35,
      }))
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      dots.forEach(d => {
        // gentle drift
        d.x += d.vx
        d.y += d.vy
        // wrap around edges
        if (d.x < -10) d.x = w + 10
        if (d.x > w + 10) d.x = -10
        if (d.y < -10) d.y = h + 10
        if (d.y > h + 10) d.y = -10

        // breathe opacity between 0.06 and 0.22
        const alpha = 0.06 + 0.16 * (0.5 + 0.5 * Math.sin(t * d.speed + d.phase))
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `${d.color}${alpha.toFixed(3)})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    init()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="coffee-dots" />
}




function PolaroidCaption({ text, active, startDelay = 0 }) {
  const { displayed, done } = useTypewriter(text, active, { speed: 22, startDelay })
  return (
    <figcaption className="polaroid-caption">
      {displayed}
      {!done && active && <span className="polaroid-cursor" aria-hidden="true" />}
    </figcaption>
  )
}

function WritingCursor() {
  return <span className="story-cursor" aria-hidden="true" />
}

function Story({ copy }) {
  const sectionRef = useRef(null)
  const pic1Ref    = useRef(null)
  const pic2Ref    = useRef(null)

  const [textActive,  setTextActive]  = useState(false)
  const [pic1Visible, setPic1Visible] = useState(false)
  const [pic2Visible, setPic2Visible] = useState(false)

  const w = useStoryWriter(copy, textActive)

  useEffect(() => {
    const items = [
      { el: sectionRef.current, delay: 0,   onEnter: () => setTextActive(true),   onLeave: () => setTextActive(false) },
      { el: pic1Ref.current,    delay: 120,  onEnter: () => setPic1Visible(true),  onLeave: () => setPic1Visible(false) },
      { el: pic2Ref.current,    delay: 260,  onEnter: () => setPic2Visible(true),  onLeave: () => setPic2Visible(false) },
    ]

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const item = items.find(t => t.el === entry.target)
          if (!item) return
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('story-visible')
              item.onEnter?.()
            }, item.delay)
          } else {
            entry.target.classList.remove('story-visible')
            item.onLeave?.()
          }
        })
      },
      { threshold: 0.15 }
    )

    items.forEach(({ el }) => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <section className="intro" id="story" ref={sectionRef}>
      <div className="story-inner">
        {/* ── Text column ── */}
        <div className="story-text">
          <p className="eyebrow story-writing">
            {w.eyebrow}
            {w.cursorOn('eyebrow') && <WritingCursor />}
          </p>
          <h2 className="story-writing">
            {w.title}
            {w.cursorOn('title') && <WritingCursor />}
          </h2>
          <p className="lead story-writing">
            {w.body}
            {w.cursorOn('body') && <WritingCursor />}
          </p>
          <Anchor className="underlink story-writing" href="#collection">
            {w.link}
            {w.cursorOn('link') && <WritingCursor />}
          </Anchor>
        </div>

        {/* ── Polaroid column ── */}
        <div className="story-polaroids">
          <figure className="polaroid polaroid--top story-fade" ref={pic1Ref}>
            <img src="/images/story_pic.webp" alt="Sana'a House atelier" loading="lazy" />
            <PolaroidCaption text="Old Sana'a, 1987" active={pic1Visible} startDelay={300} />
          </figure>
          <figure className="polaroid polaroid--bottom story-fade" ref={pic2Ref}>
            <img src="/images/story_pic_second.webp" alt="Craftsmen at work" loading="lazy" />
            <PolaroidCaption text="Heritage Quarter" active={pic2Visible} startDelay={300} />
          </figure>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index, locale, onProductClick }) {
  const isAr = locale === 'ar'
  return (
    <article
      className={`product product-${index + 1}`}
      onClick={() => onProductClick(product.slug)}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onProductClick(product.slug)}
      aria-label={isAr ? product.nameAr : product.name}
    >
      <div className="product-pic">
        <img src={product.image} alt={isAr ? product.nameAr : product.name} loading="lazy" />
        <span>0{index + 1}</span>
      </div>
      <p className="eyebrow">{isAr ? product.categoryAr : product.category}</p>
      <h3>{isAr ? product.nameAr : product.name}</h3>
      <p>{isAr ? product.descriptionAr : product.description}</p>
    </article>
  )
}

function Collection({ copy, locale, onProductClick }) {
  const isAr = locale === 'ar'
  const categories = ['All', ...new Set(products.map(p => p.category))]
  const categoriesAr = ['الكل', ...new Set(products.map(p => p.categoryAr))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? products
    : products.filter(p => p.category === active)

  // Remap indices so CSS grid classes stay correct for filtered view
  return (
    <section className="collection" id="collection">
      <div className="section-head">
        <div>
          <h2>{copy.collectionTitle}</h2>
          <p className="arabic">المقتنيات الحرفية الست المعتمدة</p>
        </div>
        <p>{copy.collectionCopy}</p>
      </div>

      {/* ── Category filter ── */}
      <div className="collection-filter" role="group" aria-label={copy.filterLabel}>
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`collection-filter__btn ${active === cat ? 'collection-filter__btn--active' : ''}`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {isAr ? categoriesAr[i] : cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="collection-empty">{copy.noProducts}</p>
      ) : (
        <div className="product-grid">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={index}
              locale={locale}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function Qamariya({ copy }) {
  return <section className="qamariya"><div className="arch"><img src={logo} alt="Sana'a House logo" /></div><p className="arabic-quote">«{copy.qamariyaTitle}»</p><blockquote>“{copy.qamariyaTitle}”</blockquote><p>{copy.qamariyaCopy}</p><small>— Master Craftsmen, Sana'a House</small></section>
}

function FavoriteCard({ product, copy, locale, onProductClick }) {
  const isAr = locale === 'ar'
  const status = product.category === 'Honey' ? copy.seasonal : copy.inAtelier
  return (
    <article className="favorite" onClick={() => onProductClick(product.slug)} style={{ cursor: 'pointer' }}>
      <div><img src={product.image} alt={isAr ? product.nameAr : product.name} loading="lazy" /></div>
      <p className="eyebrow">{isAr ? product.categoryAr : product.category} <em>{status}</em></p>
      <h3>{isAr ? product.nameAr : product.name}</h3>
      <footer>
        <b>{product.price}</b>
        <span className="underlink" style={{ cursor: 'pointer' }}>{copy.viewArchive}　↗</span>
      </footer>
    </article>
  )
}

function Favorites({ copy, locale, onProductClick }) {
  return (
    <section className="favorites">
      <div className="section-head">
        <div><h2>{copy.favorites}</h2><p className="eyebrow">{copy.physical}</p></div>
        <span>Fixed Valuation · Currency in YER</span>
      </div>
      <div className="favorite-grid">
        {products.slice(0, 3).map(product => (
          <FavoriteCard copy={copy} key={product.slug} product={product} locale={locale} onProductClick={onProductClick} />
        ))}
      </div>
    </section>
  )
}

function Footer({ copy, onNavigate }) {
  return (
    <footer className="footer" id="footer">
      <div className="footer-main">
        <div>
          <h2>Sana'a House</h2>
          <p className="arabic">دار صنعاء للتراث والحِرف</p>
          <p>{copy.footerCopy}</p>
          <small>● EST. 1987 · SANA'A, YEMEN</small>
        </div>
        <div>
          <label>Physical Ateliers</label>
          <p><b>Old Sana'a Flagship</b><br />Bab Al-Yaman Heritage Quarter<br />Storefront No. 14</p>
          <p><b>Crater Boutique, Aden</b><br />Queen Arwa Historic Arcade</p>
        </div>
        <div>
          <label>Navigation &amp; Inquiries</label>
          {copy.navigation.map((item, i) => (
            <button
              key={item}
              onClick={() => onNavigate(i)}
              style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', borderBottom: '1px solid var(--line)', color: 'var(--muted)', fontSize: '13px', width: '100%', textAlign: 'inherit' }}
            >
              {item}　↗
            </button>
          ))}
          <p className="footer-notice"><b>Atelier Notice</b><br />{copy.notice}</p>
        </div>
      </div>
      <div className="copyright">© 1987–2026 Sana'a House Artisans Co. <span>Sana'a · Aden · Shibam</span></div>
    </footer>
  )
}

function App() {
  const [locale, setLocale] = useState('en')
  // page: 'home' | 'story' | 'product' | 'stores' | 'contact' | 'craftsmanship'
  const [page,   setPage]   = useState('home')
  const [productSlug, setProductSlug] = useState(null)
  const copy = translations[locale]

  const handleLanguageChange = () => setLocale(l => l === 'en' ? 'ar' : 'en')

  const goHome = () => { setPage('home'); window.scrollTo({ top: 0 }) }

  // Called by every nav (index = nav item index 0-4, or 'product')
  const handleNavigate = (indexOrType, slug) => {
    if (indexOrType === 'product') {
      setProductSlug(slug); setPage('product'); return
    }
    switch (indexOrType) {
      case 0: setPage('home');           window.scrollTo({ top: 0 }); break
      case 1: setPage('stores');         break
      case 2: setPage('story');          break
      case 3: setPage('craftsmanship');  break
      case 4: setPage('contact');        break
      default: break
    }
  }

  const openProduct = (slug) => { setProductSlug(slug); setPage('product') }

  /* ── Sub-pages ── */
  if (page === 'story') {
    return <StoryPage locale={locale} onLanguageChange={handleLanguageChange} onBack={goHome} />
  }
  if (page === 'product') {
    return (
      <ProductPage
        slug={productSlug}
        locale={locale}
        onLanguageChange={handleLanguageChange}
        onBack={() => setPage('home')}
        onNavigate={handleNavigate}
      />
    )
  }
  if (page === 'stores') {
    return (
      <StoresPage
        locale={locale}
        onLanguageChange={handleLanguageChange}
        onBack={goHome}
        onNavigate={handleNavigate}
      />
    )
  }
  if (page === 'contact') {
    return (
      <ContactPage
        locale={locale}
        onLanguageChange={handleLanguageChange}
        onBack={goHome}
        onNavigate={handleNavigate}
      />
    )
  }
  if (page === 'craftsmanship') {
    return (
      <CraftsmanshipPage
        locale={locale}
        onLanguageChange={handleLanguageChange}
        onBack={goHome}
        onNavigate={handleNavigate}
      />
    )
  }

  /* ── Home ── */
  return (
    <div className="site" dir={copy.direction}>
      <Header copy={copy} locale={locale} onLanguageChange={handleLanguageChange} onNavigate={handleNavigate} />
      <CoffeeDots />
      <main id="top">
        <Hero copy={copy} />
        <Story copy={copy} />
        <Collection copy={copy} locale={locale} onProductClick={openProduct} />
        <Qamariya copy={copy} />
        <Favorites copy={copy} locale={locale} onProductClick={openProduct} />
        <section className="teaser">
          <p>{copy.teaser}</p>
          <button
            className="underlink"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit', padding: 0 }}
            onClick={() => handleNavigate(4)}
          >
            {copy.inquiry}　↗
          </button>
        </section>
      </main>
      <Footer copy={copy} onNavigate={handleNavigate} />
    </div>
  )
}

export default App
