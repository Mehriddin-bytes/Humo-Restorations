import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IMG, useReveal, useCounter } from './shared'

const SERVICES = [
  {
    img: IMG.svcRestoration,
    title: 'Building Envelope Restoration',
    text: 'From highrise facade rehabilitation to masonry repair, our team delivers lasting restoration solutions that protect your building\'s structural integrity and enhance its appearance.',
  },
  {
    img: IMG.svcConcrete,
    title: 'Structural Concrete Restoration',
    text: 'Expert concrete repair for balconies, parking structures, and suspended slabs. We restore reinforced concrete elements with precision engineering and durable materials.',
  },
  {
    img: IMG.svcWaterproofing,
    title: 'Waterproofing & Masonry',
    text: 'Comprehensive waterproofing systems for foundations, balconies, and rooftops. We utilize advanced membrane technology to deliver reliable moisture protection.',
  },
]

const STATS = [
  { value: 30, suffix: '+', label: 'Years Combined Experience' },
  { value: 200, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

function AnimatedStat({ value, suffix, label, started, delay }) {
  const count = useCounter(value, 2000, started)
  return (
    <div className="hero-stat" style={{ transitionDelay: `${delay}ms` }}>
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  )
}

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const [heroRef, heroVis] = useReveal(0.1)
  const [introTextRef, introTextVis] = useReveal()
  const [introImgRef, introImgVis] = useReveal()
  const [svcHeaderRef, svcHeaderVis] = useReveal()
  const [svcGridRef, svcGridVis] = useReveal(0.05)
  const [teamTextRef, teamTextVis] = useReveal()
  const [teamImgRef, teamImgVis] = useReveal()
  const [ctaRef, ctaVis] = useReveal()
  const [statsRef, statsVis] = useReveal(0.3)

  const carouselImages1 = [
    IMG.proj1, IMG.svcRestoration, IMG.proj3, IMG.svcConcrete,
    IMG.proj5, IMG.car1, IMG.car3, IMG.svcEnvelope, IMG.car5,
  ]
  const carouselImages2 = [
    IMG.proj2, IMG.car2, IMG.proj4, IMG.svcWaterproofing,
    IMG.proj6, IMG.car4, IMG.about, IMG.team, IMG.heroBg,
  ]

  return (
    <>
      {/* ─── LOADING SCREEN ─── */}
      <div className={`loading-screen ${videoLoaded ? 'loaded' : ''}`}>
        <div className="loading-content">
          <img src={IMG.logoFull} alt="Humo Restorations" className="loading-logo" />
          <div className="loading-bar">
            <div className="loading-bar-fill" />
          </div>
          <p className="loading-text">Loading</p>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-media">
          <iframe
            src="https://player.vimeo.com/video/1179973875?background=1&autoplay=1&loop=1&muted=1"
            style={{ border: 0 }}
            allow="autoplay; fullscreen"
            title="Humo Restorations"
            onLoad={() => setTimeout(() => setVideoLoaded(true), 2000)}
          />
        </div>
        <div className="hero-overlay" />
        <div className={`hero-content container ${heroVis ? 'anim-in' : 'anim-hidden'}`}>
          <div className="hero-logo-center anim-fade-up" style={{ animationDelay: '0.2s' }}>
            <img src={IMG.logoFull} alt="Humo Restorations Inc." />
          </div>
          <p className="hero-subtitle anim-fade-up" style={{ animationDelay: '0.7s' }}>
            Building Envelope &bull; Structural Concrete &bull; Waterproofing &bull; Masonry
          </p>
          <div className="hero-buttons anim-fade-up" style={{ animationDelay: '1.0s' }}>
            <a href="#services" className="btn-slide btn-primary">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="stats-bar" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <AnimatedStat key={i} {...s} started={statsVis} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO / ABOUT ─── */}
      <section className="intro" id="about">
        <div className="container">
          <div className="intro-grid">
            <div ref={introTextRef} className={`intro-text ${introTextVis ? 'anim-slide-left' : 'anim-hidden'}`}>
              <div className="section-label">About Us</div>
              <h2 className="section-title">Project by Project, We Build Our Reputation</h2>
              <p>
                Humo Restorations Inc. is a trusted building envelope restoration and structural
                concrete contractor serving commercial, industrial, and multi-unit residential
                sectors across Ontario. Backed by a dedicated team of seasoned professionals, we
                bring precision, innovation, and an unwavering commitment to safety and client
                satisfaction to every project.
              </p>
              <p>
                From balcony rehabilitation and facade restoration to parking structure repairs and
                waterproofing systems, our team handles projects of varying scale and complexity
                &mdash; always with meticulous attention to detail and top-notch craftsmanship.
              </p>
              <div className="intro-highlights">
                <div className="highlight-box"><h4>Restoration</h4></div>
                <div className="highlight-box"><h4>Waterproofing</h4></div>
                <div className="highlight-box"><h4>Structural</h4></div>
                <div className="highlight-box"><h4>Masonry</h4></div>
              </div>
              <Link to="/about" className="btn-slide btn-dark">
                <span className="btn-arrow">&#8594;</span> Learn More
              </Link>
            </div>
            <div ref={introImgRef} className={`intro-image ${introImgVis ? 'anim-slide-right' : 'anim-hidden'}`}>
              <img src={IMG.about} alt="Humo Restorations swing stage work" />
              <div className="intro-image-badge">
                <h3>30+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="services" id="services">
        <div className="container">
          <div ref={svcHeaderRef} className={`section-header-center ${svcHeaderVis ? 'anim-fade-up-trigger' : 'anim-hidden'}`}>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Comprehensive Restoration Solutions</h2>
            <p className="section-desc">
              From building envelope repair to structural concrete restoration, our expert team
              delivers high-quality solutions engineered to protect and restore.
            </p>
          </div>
          <div ref={svcGridRef} className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                className={`service-card ${svcGridVis ? 'anim-fade-down-stagger' : 'anim-hidden'}`}
                key={i}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="service-card-img-wrap">
                  <img className="service-card-img" src={s.img} alt={s.title} loading="lazy" />
                </div>
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link to="/contact" className="btn-slide btn-dark">
                    <span className="btn-arrow">&#8594;</span> Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCROLLING CAROUSEL ─── */}
      <section className="carousel">
        <div className="carousel-track scroll-left">
          {[...carouselImages1, ...carouselImages1, ...carouselImages1].map((src, i) => (
            <img key={i} src={src} alt="Humo project" loading="lazy" />
          ))}
        </div>
        <div className="carousel-track scroll-right" style={{ marginTop: 6 }}>
          {[...carouselImages2, ...carouselImages2, ...carouselImages2].map((src, i) => (
            <img key={i} src={src} alt="Humo project" loading="lazy" />
          ))}
        </div>
      </section>

      {/* ─── ACCREDITATIONS ─── */}
      <section className="accreditations">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center' }}>Our Accreditations</div>
          <div className="accreditations-grid">
            <a href="https://www.wsps.ca" target="_blank" rel="noopener noreferrer" className="accred-card accred-wsps">
              <img src={IMG.accredWsps} alt="Workplace Safety & Prevention Services" />
            </a>
            <a href="https://www.swa.ca" target="_blank" rel="noopener noreferrer" className="accred-card">
              <img src={IMG.accredSwa} alt="Scaffold & Access Industry Association" />
            </a>
            <a href="https://www.ihsa.ca" target="_blank" rel="noopener noreferrer" className="accred-card">
              <img src={IMG.accredIhsa} alt="IHSA - Infrastructure Health & Safety Association" />
            </a>
            <a href="https://www.wsib.ca" target="_blank" rel="noopener noreferrer" className="accred-card">
              <img src={IMG.accredWsib} alt="WSIB Ontario" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="team">
        <div className="container">
          <div className="team-content">
            <div ref={teamTextRef} className={`team-text ${teamTextVis ? 'anim-slide-left' : 'anim-hidden'}`}>
              <div className="section-label">Our People</div>
              <h2 className="section-title">Meet Your Dedicated Team</h2>
              <p>
                Our team is the foundation of our success &mdash; bringing together professionals
                who are passionate about quality, safety, and innovation.
              </p>
              <p>
                Led by President <strong>Hurshid Ashurov</strong>, our crew brings deep expertise
                in building envelope restoration, structural concrete repair, and waterproofing
                systems. Every team member approaches each project with precision, integrity, and
                a commitment to exceeding expectations.
              </p>
              <p>
                We invest in continuous training and safety certification to ensure our people are
                equipped with the latest techniques and technologies. From project managers to
                skilled tradespeople, the Humo team is dedicated to delivering exceptional results.
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

      {/* ─── CTA / TRUST ─── */}
      <section className="cta-trust" id="contact">
        <div className="container">
          <div ref={ctaRef} className={`cta-trust-grid ${ctaVis ? 'anim-in' : 'anim-hidden'}`}>
            <div className="cta-trust-logo anim-fade-up" style={{ animationDelay: '0.2s' }}>
              <img src={IMG.logoFull} alt="Humo Restorations Inc." />
            </div>
            <div className="cta-trust-content anim-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="section-label">The Name Behind the Work</div>
              <h2 className="section-title">When It Has to Be Done Right,<br />They Call Humo</h2>
              <p>
                General contractors, property managers, and building consultants across Ontario
                trust Humo Restorations to carry the work that matters most. We take on the
                liability, manage the complexity, and deliver results that stand behind every
                signature and every inspection.
              </p>
              <p>
                Our reputation is not built on promises &mdash; it&rsquo;s built on completed
                projects, repeat clients, and the confidence that comes from knowing the work
                was done once, done right, and done to last.
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
