import { useEffect, useRef, useState, useMemo } from 'react'
import { products, translations } from './data'
import logo from './assets/sanaa_logo.png'
import './App.css'

function Anchor({ href, children, className = '' }) {
  return <a className={className} href={href}>{children}</a>
}

function Header({ copy, locale, onLanguageChange }) {
  const destinations = ['#collection', '#footer', '#story', '#story', '#footer']
  return <header className="header">
    <Anchor className="brand" href="#top"><img src={logo} alt="Sana'a House logo" /><span>Sana'a House<small>دار صنعاء · ١٩٨٧</small></span></Anchor>
    <nav>{copy.navigation.map((item, index) => <Anchor href={destinations[index]} key={item}>{item}</Anchor>)}</nav>
    <div className="language"><button type="button" onClick={onLanguageChange}>{copy.language}</button><i>/</i><strong>{locale.toUpperCase()}</strong></div>
  </header>
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

    const chapters = [
      [0,    0   ],
      [0,    0.25],
      [0.25, 0.50],
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
        <Anchor className="button primary hero-land-4" href="#collection">{copy.explore}</Anchor>
      </div>
    </div>
  </section>
}

function Story({ copy }) {
  return <section className="intro" id="story"><p className="eyebrow">{copy.history}</p><h2>{copy.storyTitle}</h2><p className="lead">{copy.story}</p><Anchor className="underlink" href="#collection">{copy.read}　↗</Anchor></section>
}

function ProductCard({ product, index }) {
  return <article className={`product product-${index + 1}`}><div className="product-pic"><img src={product.image} alt={product.name} loading="lazy" /><span>0{index + 1}</span></div><p className="eyebrow">{product.category}</p><h3>{product.name}</h3><p>{product.description}</p></article>
}

function Collection({ copy }) {
  return <section className="collection" id="collection"><div className="section-head"><div><h2>{copy.collectionTitle}</h2><p className="arabic">المقتنيات الحرفية الست المعتمدة</p></div><p>{copy.collectionCopy}</p></div><div className="product-grid">{products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div></section>
}

function Qamariya({ copy }) {
  return <section className="qamariya"><div className="arch"><img src={logo} alt="Sana'a House logo" /></div><p className="arabic-quote">«{copy.qamariyaTitle}»</p><blockquote>“{copy.qamariyaTitle}”</blockquote><p>{copy.qamariyaCopy}</p><small>— Master Craftsmen, Sana'a House</small></section>
}

function FavoriteCard({ product, copy }) {
  const status = product.category === 'Honey' ? copy.seasonal : copy.inAtelier
  return <article className="favorite"><div><img src={product.image} alt={product.name} loading="lazy" /></div><p className="eyebrow">{product.category} <em>{status}</em></p><h3>{product.name}</h3><footer><b>{product.price}</b><Anchor href="#collection">{copy.viewArchive}　↗</Anchor></footer></article>
}

function Favorites({ copy }) {
  return <section className="favorites"><div className="section-head"><div><h2>{copy.favorites}</h2><p className="eyebrow">{copy.physical}</p></div><span>Fixed Valuation · Currency in YER</span></div><div className="favorite-grid">{products.slice(0, 3).map((product) => <FavoriteCard copy={copy} key={product.name} product={product} />)}</div></section>
}

function Footer({ copy }) {
  return <footer className="footer" id="footer"><div className="footer-main"><div><h2>Sana'a House</h2><p className="arabic">دار صنعاء للتراث والحِرف</p><p>{copy.footerCopy}</p><small>●　EST. 1987 · SANA'A, YEMEN</small></div><div><label>Physical Ateliers</label><p><b>Old Sana'a Flagship</b><br />Bab Al-Yaman Heritage Quarter<br />Storefront No. 14</p><p><b>Crater Boutique, Aden</b><br />Queen Arwa Historic Arcade</p></div><div><label>Navigation &amp; Inquiries</label>{copy.navigation.map((item) => <Anchor href="#top" key={item}>{item}　↗</Anchor>)}<p className="footer-notice"><b>Atelier Notice</b><br />{copy.notice}</p></div></div><div className="copyright">© 1987–2026 Sana'a House Artisans Co. <span>Sana'a · Aden · Shibam</span></div></footer>
}

function App() {
  const [locale, setLocale] = useState('en')
  const copy = translations[locale]
  return <div className="site" dir={copy.direction}><Header copy={copy} locale={locale} onLanguageChange={() => setLocale(locale === 'en' ? 'ar' : 'en')} /><main id="top"><Hero copy={copy} /><Story copy={copy} /><Collection copy={copy} /><Qamariya copy={copy} /><Favorites copy={copy} /><section className="teaser"><p>{copy.teaser}</p><Anchor className="underlink" href="#footer">{copy.inquiry}　↗</Anchor></section></main><Footer copy={copy} /></div>
}

export default App
