import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IMG } from '../shared'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => { setMenuOpen(false); setMobileDropdown(null) }
  const toggleDrop = (name) => setMobileDropdown(mobileDropdown === name ? null : name)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="navbar-logo">
          <img src={IMG.logo} alt="Humo Restorations" />
        </Link>
        <div className="nav-links">
          <div className="nav-dropdown">
            <Link to="/#services" className="nav-dropdown-trigger">Services</Link>
            <div className="nav-dropdown-menu">
              <Link to="/#services">Building Envelope Restoration</Link>
              <Link to="/#services">Structural Concrete Restoration</Link>
              <Link to="/#services">Waterproofing</Link>
              <Link to="/#services">Masonry</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <Link to="/about" className="nav-dropdown-trigger">About Us</Link>
            <div className="nav-dropdown-menu">
              <Link to="/about">About Us</Link>
              <Link to="/safety#team">Our Team</Link>
              <Link to="/safety">Commitment to Safety</Link>
              <Link to="/about#locations">Locations</Link>
              <Link to="/about#team">Company Profile</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-cta">Contact Us</Link>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} onClick={close} />
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <img src={IMG.logo} alt="Humo" />
          <button className="mobile-nav-close" onClick={close} aria-label="Close menu">&times;</button>
        </div>
        <div className="mobile-nav-links">
          <Link to="/" onClick={close}>Home</Link>

          <div className="mobile-nav-group">
            <button className={`mobile-nav-toggle ${mobileDropdown === 'services' ? 'open' : ''}`} onClick={() => toggleDrop('services')}>
              Services <span className="mobile-nav-chevron">&#8250;</span>
            </button>
            <div className={`mobile-nav-sub ${mobileDropdown === 'services' ? 'open' : ''}`}>
              <Link to="/#services" onClick={close}>Building Envelope Restoration</Link>
              <Link to="/#services" onClick={close}>Structural Concrete Restoration</Link>
              <Link to="/#services" onClick={close}>Waterproofing</Link>
              <Link to="/#services" onClick={close}>Masonry</Link>
            </div>
          </div>

          <div className="mobile-nav-group">
            <button className={`mobile-nav-toggle ${mobileDropdown === 'about' ? 'open' : ''}`} onClick={() => toggleDrop('about')}>
              About Us <span className="mobile-nav-chevron">&#8250;</span>
            </button>
            <div className={`mobile-nav-sub ${mobileDropdown === 'about' ? 'open' : ''}`}>
              <Link to="/about" onClick={close}>About Us</Link>
              <Link to="/safety#team" onClick={close}>Our Team</Link>
              <Link to="/safety" onClick={close}>Commitment to Safety</Link>
              <Link to="/about#locations" onClick={close}>Locations</Link>
            </div>
          </div>

          <Link to="/contact" onClick={close}>Contact Us</Link>
        </div>
        <div className="mobile-nav-footer">
          <a href="tel:+16476699339">+1 (647) 669-9339</a>
          <a href="mailto:info@humorestorations.ca">info@humorestorations.ca</a>
        </div>
      </div>
    </>
  )
}
