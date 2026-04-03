import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IMG, useReveal } from '../shared'

const TRAINING = [
  'Working at Heights',
  'WHMIS',
  'Suspended Access Equipment',
  'Site-Specific Hazard Awareness',
  'Supervisor Competency',
  'Standard First Aid & CPR',
  'Confined Space Awareness',
  'Personal Protective Equipment',
  'Scissor Lift & Boom Lift Operation',
  'Traffic Control for Construction',
]

const ACCREDITATIONS = [
  { img: IMG.accredWsps, alt: 'Workplace Safety & Prevention Services', href: 'https://www.wsps.ca' },
  { img: IMG.accredSwa, alt: 'Scaffold & Access Industry Association', href: 'https://www.swa.ca' },
  { img: IMG.accredIhsa, alt: 'IHSA - Infrastructure Health & Safety Association', href: 'https://www.ihsa.ca' },
  { img: IMG.accredWsib, alt: 'WSIB Ontario', href: 'https://www.wsib.ca' },
]

export default function Safety() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100); return }
    }
    window.scrollTo(0, 0)
  }, [hash])

  const [heroRef, heroVis] = useReveal(0.1)
  const [safetyRef, safetyVis] = useReveal()
  const [safetyTrainRef, safetyTrainVis] = useReveal(0.05)
  const [teamTextRef, teamTextVis] = useReveal()
  const [teamImgRef, teamImgVis] = useReveal()
  const [ctaRef, ctaVis] = useReveal()

  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">
          <img src={IMG.svcRestoration} alt="" />
        </div>
        <div className="page-hero-overlay" />
        <div className={`page-hero-content container ${heroVis ? 'anim-in' : 'anim-hidden'}`}>
          <div className="section-label anim-fade-up" style={{ animationDelay: '0.2s', color: 'rgba(255,255,255,0.4)' }}>Health &amp; Safety</div>
          <h1 className="anim-fade-up" style={{ animationDelay: '0.4s' }}>
            Our Commitment<br />to Safety
          </h1>
        </div>
      </section>

      {/* ─── SAFETY CONTENT ─── */}
      <section className="about-safety">
        <div className="container">
          <div className="safety-grid">
            <div ref={safetyRef} className={`safety-text ${safetyVis ? 'anim-slide-left' : 'anim-hidden'}`}>
              <div className="section-label">Our Standard</div>
              <h2 className="section-title">Safety Is Non-Negotiable</h2>
              <p>
                The safety of our employees, building occupants, and the general public is
                our highest priority. At Humo Restorations, we maintain full compliance with
                Ontario's occupational health and safety legislation and uphold rigorous
                internal standards that go beyond minimum requirements.
              </p>
              <p>
                Our dedicated Health and Safety Coordinator oversees the implementation of
                comprehensive safety protocols across every active project. From pre-project
                hazard assessments to daily site inspections, we ensure that all personnel
                are equipped with the proper personal protective equipment and trained in
                site-specific safety procedures.
              </p>
              <p>
                We believe that a strong safety culture is built through continuous education
                and accountability. Every member of the Humo team receives ongoing
                certification and training to ensure the highest level of preparedness on
                every job site.
              </p>
            </div>
            <div ref={safetyTrainRef} className={`safety-training ${safetyTrainVis ? 'anim-slide-right' : 'anim-hidden'}`}>
              <h3>Crew Certifications &amp; Training</h3>
              <ul className="safety-training-list">
                {TRAINING.map((item, i) => (
                  <li key={i}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="safety-accreditations">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: 32 }}>Our Accreditations</div>
            <div className="accreditations-grid">
              {ACCREDITATIONS.map((a, i) => (
                <a key={i} href={a.href} target="_blank" rel="noopener noreferrer" className={`accred-card${a.img === IMG.accredWsps ? ' accred-wsps' : ''}`}>
                  <img src={a.img} alt={a.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR TEAM ─── */}
      <section className="team" id="team">
        <div className="container">
          <div className="team-content">
            <div ref={teamTextRef} className={`team-text ${teamTextVis ? 'anim-slide-left' : 'anim-hidden'}`}>
              <div className="section-label">Our People</div>
              <h2 className="section-title">Led by Experience</h2>
              <p>
                Under the leadership of President <strong>Hurshid Ashurov</strong>, Humo
                Restorations has cultivated a team of highly skilled professionals who share
                a collective commitment to precision, safety, and quality craftsmanship.
              </p>
              <p>
                Hurshid brings hands-on expertise in building envelope restoration,
                structural concrete repair, and waterproofing systems. His leadership
                ensures that every project is executed with the same standard of excellence
                that has earned Humo the trust of general contractors, property managers,
                and building consultants across Ontario.
              </p>
              <p>
                From project managers to skilled tradespeople, every member of our crew is
                continuously trained and certified to operate at the highest level. We invest
                in our people because the quality of our work starts with the quality of our team.
              </p>
              <Link to="/contact" className="btn-outline-blue">
                <span className="btn-arrow">&#8594;</span> Contact Our Team
              </Link>
            </div>
            <div ref={teamImgRef} className={`team-image ${teamImgVis ? 'anim-slide-right' : 'anim-hidden'}`}>
              <img src={IMG.team} alt="Humo Restorations team at work" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-trust">
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
    </>
  )
}
