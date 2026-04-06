import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IMG, useReveal } from '../shared'

const WHY_HUMO = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    title: 'Safety-Driven',
    text: 'Safety is at the core of everything we do at Humo — guiding every decision, process, and project from start to finish.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/><path d="M16 12a4 4 0 0 0-4-4"/></svg>
    ),
    title: 'Innovative Technology',
    text: 'We leverage cutting-edge technology and advanced materials to deliver smarter, more efficient restoration solutions.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: 'Dedicated & Committed',
    text: 'Our team is deeply dedicated to their craft and fully committed to delivering exceptional results that put our clients\u2019 needs first.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
    title: 'Superior Services',
    text: 'We deliver unmatched expertise and a relentless commitment to quality — making us a trusted choice across Ontario.',
  },
]

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [heroRef, heroVis] = useReveal(0.1)
  const [formRef, formVis] = useReveal()
  const [whyRef, whyVis] = useReveal(0.05)

  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', heardFrom: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      setForm({ name: '', phone: '', email: '', service: '', heardFrom: '', subject: '', message: '' })
    } catch {
      setError('Something went wrong. Please try again or email us directly at info@humorestorations.ca')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">
          <img src={IMG.svcEnvelope} alt="" />
        </div>
        <div className="page-hero-overlay" />
        <div className={`page-hero-content container ${heroVis ? 'anim-in' : 'anim-hidden'}`}>
          <div className="section-label anim-fade-up" style={{ animationDelay: '0.2s', color: 'rgba(255,255,255,0.4)' }}>Get In Touch</div>
          <h1 className="anim-fade-up" style={{ animationDelay: '0.4s' }}>
            Contact<br />Humo Restorations
          </h1>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ─── */}
      <section className="contact-section">
        <div className="container">
          <div ref={formRef} className={`contact-grid ${formVis ? 'anim-in' : 'anim-hidden'}`}>

            {/* ── FORM ── */}
            <div className="contact-form-wrap">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="contact-form-desc">
                Please provide us with a brief message and we will get back to you
                as soon as possible, or give us a call during business hours.
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={update} required />
                <div className="contact-form-row">
                  <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={update} />
                  <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={update} required />
                </div>
                <select name="service" value={form.service} onChange={update} required>
                  <option value="" disabled>Select Service</option>
                  <option value="Building Envelope Restoration">Building Envelope Restoration</option>
                  <option value="Structural Concrete Restoration">Structural Concrete Restoration</option>
                  <option value="Waterproofing">Waterproofing</option>
                  <option value="Masonry">Masonry</option>
                  <option value="Other">Other</option>
                </select>
                <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={update} />
                <textarea name="message" placeholder="Brief Message / Additional Notes" rows="5" value={form.message} onChange={update} required />
                <div className="contact-heard">
                  <label className="contact-heard-label">How did you hear about us?</label>
                  <div className="contact-heard-options">
                    {['Online Search', 'Referral', 'Social Media', 'Other'].map((opt) => (
                      <label key={opt} className="contact-radio">
                        <input type="radio" name="heardFrom" value={opt} checked={form.heardFrom === opt} onChange={update} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {error && <p className="contact-error">{error}</p>}
                {sent && <p className="contact-success">Message sent successfully! We'll get back to you shortly.</p>}
                <button type="submit" className="btn-slide btn-dark" disabled={sending}>
                  <span className="btn-arrow">&#8594;</span> {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* ── OFFICE INFO ── */}
            <div className="contact-info">
              <div className="contact-office">
                <h3>Head Office</h3>
                <div className="contact-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>131 Whitmore Rd, Unit 24<br />Woodbridge, ON</span>
                </div>
                <div className="contact-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href="tel:+16476699339">+1 (647) 669-9339</a>
                </div>
                <div className="contact-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:info@humorestorations.ca">info@humorestorations.ca</a>
                </div>
              </div>

              <div className="contact-office">
                <h3>Service Area</h3>
                <p>
                  We service the Greater Toronto Area, Hamilton, Kitchener-Waterloo,
                  and communities across Ontario.
                </p>
              </div>

              <div className="contact-hours">
                <h3>Business Hours</h3>
                <div className="contact-hours-row"><span>Monday &ndash; Friday</span><span>8:00 AM &ndash; 5:00 PM</span></div>
                <div className="contact-hours-row"><span>Saturday</span><span>By Appointment</span></div>
                <div className="contact-hours-row"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY HUMO ─── */}
      <section className="why-humo">
        <div className="container">
          <div className="why-humo-grid">
            <div ref={whyRef} className={`why-humo-text ${whyVis ? 'anim-slide-left' : 'anim-hidden'}`}>
              <h2 className="section-title">Why Humo?</h2>
              <p>
                Humo Restorations goes beyond delivering quality craftsmanship — we lead
                with a strong focus on safety in every aspect of our work. Operating across
                Ontario, our dedicated team harnesses advanced technologies and a relentless
                drive for excellence to provide restoration services that raise the bar for
                the industry.
              </p>
              <Link to="/contact" className="btn-slide btn-dark" style={{ marginTop: 12 }}>
                <span className="btn-arrow">&#8594;</span> Contact Us
              </Link>
            </div>
            <div className="why-humo-cards">
              {WHY_HUMO.map((item, i) => (
                <div
                  key={i}
                  className={`why-humo-card ${whyVis ? 'anim-fade-down-stagger' : 'anim-hidden'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="why-humo-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP ─── */}
      <section className="contact-map">
        <iframe
          src="https://maps.google.com/maps?q=131+Whitmore+Road+Woodbridge+ON+Canada&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Humo Restorations Location"
        />
      </section>
    </>
  )
}
