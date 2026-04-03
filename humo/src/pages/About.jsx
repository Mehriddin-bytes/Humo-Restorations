import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IMG, useReveal } from '../shared'

export default function About() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100); return }
    }
    window.scrollTo(0, 0)
  }, [hash])

  const [heroRef, heroVis] = useReveal(0.1)
  const [storyRef, storyVis] = useReveal()
  const [storyImgRef, storyImgVis] = useReveal()
  const [valuesRef, valuesVis] = useReveal(0.05)
  const [ctaRef, ctaVis] = useReveal()
  const [mapRef, mapVis] = useReveal(0.1)

  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">
          <img src={IMG.svcEnvelope} alt="" />
        </div>
        <div className="page-hero-overlay" />
        <div className={`page-hero-content container ${heroVis ? 'anim-in' : 'anim-hidden'}`}>
          <div className="section-label anim-fade-up" style={{ animationDelay: '0.2s', color: 'rgba(255,255,255,0.4)' }}>About Humo Restorations</div>
          <h1 className="anim-fade-up" style={{ animationDelay: '0.4s' }}>
            Built on Trust,<br />Driven by Excellence
          </h1>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="about-story">
        <div className="container">
          <div className="intro-grid">
            <div ref={storyRef} className={`intro-text ${storyVis ? 'anim-slide-left' : 'anim-hidden'}`}>
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">Restoration Experts You Can Count On</h2>
              <p>
                Humo Restorations Inc. is a leading building envelope restoration and structural
                concrete contractor serving commercial, industrial, and multi-unit residential
                sectors across Ontario. With over 30 years of combined experience, our team
                delivers precision-driven solutions that protect and preserve the built environment.
              </p>
              <p>
                We specialize in balcony rehabilitation, facade restoration, parking structure
                repair, waterproofing systems, and masonry work. Every project we take on is
                managed with meticulous attention to detail, strict safety compliance, and an
                unwavering commitment to client satisfaction.
              </p>
              <p>
                General contractors, property managers, and building consultants trust Humo to
                carry the work that carries the most liability. Our reputation is built on
                completed projects, repeat clients, and results that stand behind every signature
                and every inspection.
              </p>
            </div>
            <div ref={storyImgRef} className={`intro-image ${storyImgVis ? 'anim-slide-right' : 'anim-hidden'}`}>
              <img src={IMG.about} alt="Humo Restorations at work" />
              <div className="intro-image-badge">
                <h3>30+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GUIDING PRINCIPLES ─── */}
      <section className="about-values">
        <div className="container">
          <div className="section-header-center">
            <div className="section-label">Our Principles</div>
            <h2 className="section-title">What Guides Us</h2>
          </div>
          <div ref={valuesRef} className="values-grid" style={{ marginTop: 48 }}>
            {[
              {
                icon: '/images/safety-at-work.png',
                title: 'Safety First',
                text: 'Safety is non-negotiable. We adhere to strict health and safety protocols on every site, ensuring the well-being of our crew, building residents, and the general public.',
              },
              {
                icon: '/images/guarantee-certificate.png',
                title: 'Quality Craftsmanship',
                text: 'We don\'t cut corners. Every repair, every pour, every membrane is executed to the highest standard. Our work is engineered to last — because our name is on it.',
              },
              {
                icon: '/images/reputation.png',
                title: 'Client Satisfaction',
                text: 'We build lasting relationships through open communication, transparent pricing, and consistent delivery. Our clients come back because they trust us.',
              },
              {
                icon: '/images/collaborate.png',
                title: 'Integrity',
                text: 'We do the right thing, even when no one is watching. Honest assessments, fair timelines, and work that meets the highest standards of professionalism.',
              },
            ].map((v, i) => (
              <div
                className={`value-card ${valuesVis ? 'anim-fade-down-stagger' : 'anim-hidden'}`}
                key={i}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="value-icon"><img src={v.icon} alt={v.title} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-trust" id="contact">
        <div className="container">
          <div ref={ctaRef} className={`cta-trust-grid ${ctaVis ? 'anim-in' : 'anim-hidden'}`}>
            <div className="cta-trust-logo anim-fade-up" style={{ animationDelay: '0.2s' }}>
              <img src={IMG.logoFull} alt="Humo Restorations Inc." />
            </div>
            <div className="cta-trust-content anim-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="section-label">Work With Us</div>
              <h2 className="section-title">Ready to Start Your Project?</h2>
              <p>
                Whether you need a detailed assessment, a competitive bid, or a trusted
                restoration partner — we're here. Reach out and let's discuss how Humo
                can support your next project.
              </p>
              <Link to="/contact" className="btn-slide btn-dark" style={{ marginTop: 12 }}>
                <span className="btn-arrow">&#8594;</span> Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATION ─── */}
      <section className="about-location" id="locations">
        <div className="container">
          <div ref={mapRef} className={`about-location-header ${mapVis ? 'anim-fade-up-trigger' : 'anim-hidden'}`}>
            <div>
              <div className="section-label">Our Location</div>
              <h2 className="section-title">131 Whitmore Road, Unit 24</h2>
              <p className="section-desc">Woodbridge, Ontario &bull; Serving the Greater Toronto Area, Hamilton, Kitchener-Waterloo, and beyond.</p>
            </div>
          </div>
        </div>
        <div className="about-location-map">
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
        </div>
      </section>
    </>
  )
}
