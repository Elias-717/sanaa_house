import { useState, useEffect, useRef } from 'react'
import { translations } from '@/data'
import logo from '@/assets/sanaa_logo.png'
import './ContactPage.css'

function ContactNav({ copy, onBack, onLanguageChange, onNavigate }) {
  return (
    <nav className="cp-nav">
      <button className="cp-nav__brand" onClick={onBack}>
        <img src={logo} alt="Sana'a House" />
        <span>Sana'a House<small>دار صنعاء · ١٩٨٧</small></span>
      </button>
      <div className="cp-nav__links">
        {copy.navigation.map((item, i) => (
          <button key={item} className="cp-nav__link" onClick={() => onNavigate(i)}>{item}</button>
        ))}
      </div>
      <button className="cp-nav__lang" onClick={onLanguageChange}>{copy.language}</button>
    </nav>
  )
}

/* ── Field wrapper ── */
function Field({ label, required, error, children }) {
  return (
    <div className={`cp-field ${error ? 'cp-field--error' : ''}`}>
      <label className="cp-field__label">
        {label}
        {required && <span className="cp-field__req" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <p className="cp-field__error" role="alert">{error}</p>}
    </div>
  )
}

/* ── Validate ── */
function validate(fields, copy) {
  const errs = {}
  if (!fields.name.trim())    errs.name    = copy.required
  if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errs.email = copy.required
  if (!fields.country.trim()) errs.country = copy.required
  if (!fields.type)           errs.type    = copy.required
  if (!fields.message.trim() || fields.message.length < 10 || fields.message.length > 2000)
    errs.message = `${copy.formMessageHint}`
  return errs
}

const EMPTY = { name: '', email: '', phone: '', company: '', country: '', type: '', message: '', honeypot: '' }

export default function ContactPage({ locale, onLanguageChange, onBack, onNavigate }) {
  const copy   = translations[locale]
  const isAr   = locale === 'ar'
  const [fields,  setFields]  = useState(EMPTY)
  const [errors,  setErrors]  = useState({})
  const [status,  setStatus]  = useState('idle') // idle | submitting | success | error
  const formRef = useRef(null)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])

  // Fade-in sections
  useEffect(() => {
    const els = document.querySelectorAll('.cp-fade')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('cp-visible')
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Honeypot check
    if (fields.honeypot) return
    const errs = validate(fields, copy)
    if (Object.keys(errs).length) {
      setErrors(errs)
      // Focus first error
      const first = formRef.current?.querySelector('[aria-invalid="true"]')
      first?.focus()
      return
    }
    setErrors({})
    setStatus('submitting')
    try {
      // Simulate submission — replace with real endpoint (Formspree/EmailJS/API)
      await new Promise(r => setTimeout(r, 900))
      setStatus('success')
      setFields(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="cp-site" dir={copy.direction}>
      <ContactNav copy={copy} onBack={onBack} onLanguageChange={onLanguageChange} onNavigate={onNavigate} />

      <main>
        {/* ── Hero ── */}
        <header className="cp-hero cp-fade">
          <div className="cp-hero__bg" />
          <div className="cp-hero__veil" />
          <div className="cp-hero__content">
            <p className="cp-eyebrow">
              <span className="cp-eyebrow__dot" />
              EST. 1987 · OLD SANA'A
            </p>
            <h1>{copy.contactTitle}</h1>
            <p className="cp-hero__copy">{copy.contactCopy}</p>
          </div>
          <aside className="cp-hero__aside">
            <div className="cp-aside-card">
              <p className="cp-aside-card__label">RESPONSE TIME</p>
              <p className="cp-aside-card__value">2 Business Days</p>
              <div className="cp-aside-card__divider" />
              <p className="cp-aside-card__label">INQUIRIES</p>
              <p className="cp-aside-card__value">Wholesale · Gifting · General</p>
              <div className="cp-aside-card__divider" />
              <p className="cp-aside-card__label">ATELIERS</p>
              <p className="cp-aside-card__value">Sana'a · Aden · Shibam</p>
            </div>
          </aside>
        </header>

        {/* ── Form + side copy ── */}
        <section className="cp-body cp-fade">
          {/* Left: pitch copy */}
          <div className="cp-pitch">
            <div className="cp-pitch__block">
              <span className="cp-pitch__num">01</span>
              <h3>Wholesale & Retail</h3>
              <p>We supply curated heritage hospitality groups, luxury hotel gift shops, and museum stores worldwide. Minimum orders negotiated directly.</p>
            </div>
            <div className="cp-pitch__block">
              <span className="cp-pitch__num">02</span>
              <h3>Diplomatic Gifting</h3>
              <p>Each piece carries a provenance certificate with guild information, material origin and craftsman details — designed for formal gifting programmes.</p>
            </div>
            <div className="cp-pitch__block">
              <span className="cp-pitch__num">03</span>
              <h3>Bespoke Commissions</h3>
              <p>Direct guild commissions for custom vessels, textiles and attar blends. Lead time four to twelve weeks depending on craft and quantity.</p>
            </div>
            <p className="cp-pitch__privacy">
              <span className="cp-pitch__privacy-dot" />
              {copy.formPrivacy}
            </p>
          </div>

          {/* Right: form */}
          <div className="cp-form-wrap">
            {status === 'success' ? (
              <div className="cp-success">
                <span className="cp-success__icon">✓</span>
                <h3>Inquiry Received</h3>
                <p>{copy.formSuccess}</p>
                <button className="cp-btn cp-btn--ghost" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                className="cp-form"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Honeypot — hidden from real users */}
                <input
                  className="cp-honeypot"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={fields.honeypot}
                  onChange={set('honeypot')}
                  aria-hidden="true"
                />

                <div className="cp-form__row">
                  <Field label={copy.formName} required error={errors.name}>
                    <input
                      className="cp-input"
                      type="text"
                      value={fields.name}
                      onChange={set('name')}
                      aria-invalid={!!errors.name}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label={copy.formEmail} required error={errors.email}>
                    <input
                      className="cp-input"
                      type="email"
                      value={fields.email}
                      onChange={set('email')}
                      aria-invalid={!!errors.email}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <div className="cp-form__row">
                  <Field label={copy.formPhone} error={errors.phone}>
                    <input
                      className="cp-input"
                      type="tel"
                      value={fields.phone}
                      onChange={set('phone')}
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label={copy.formCompany} error={errors.company}>
                    <input
                      className="cp-input"
                      type="text"
                      value={fields.company}
                      onChange={set('company')}
                      autoComplete="organization"
                    />
                  </Field>
                </div>

                <div className="cp-form__row">
                  <Field label={copy.formCountry} required error={errors.country}>
                    <input
                      className="cp-input"
                      type="text"
                      value={fields.country}
                      onChange={set('country')}
                      aria-invalid={!!errors.country}
                      autoComplete="country-name"
                    />
                  </Field>
                  <Field label={copy.formType} required error={errors.type}>
                    <select
                      className="cp-select"
                      value={fields.type}
                      onChange={set('type')}
                      aria-invalid={!!errors.type}
                    >
                      <option value="">—</option>
                      {copy.formTypeOptions.map((opt, i) => (
                        <option key={i} value={[copy.typeWholesale, copy.typeGeneral, copy.typeOther][i]}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label={copy.formMessage} required error={errors.message}>
                  <textarea
                    className="cp-textarea"
                    rows={6}
                    value={fields.message}
                    onChange={set('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby="msg-hint"
                  />
                  <span id="msg-hint" className="cp-field__hint">{copy.formMessageHint}</span>
                </Field>

                {status === 'error' && (
                  <p className="cp-form__error" role="alert">{copy.formError}</p>
                )}

                <div className="cp-form__footer">
                  <button
                    className="cp-btn cp-btn--primary"
                    type="submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? '…' : copy.formSubmit}
                  </button>
                  <p className="cp-form__req-note">* {copy.required}</p>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="cp-footer">
        <span>© 1987–2026 Sana'a House Artisans Co.</span>
        <span>Sana'a · Aden · Shibam</span>
      </footer>
    </div>
  )
}
