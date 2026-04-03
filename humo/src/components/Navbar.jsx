import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IMG } from '../shared'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

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
          <button className="mobile-nav-close" onClick={close}>&times;</button>
        </div>
        <Link to="/#services" onClick={close}>Services</Link>
        <Link to="/about" onClick={close}>About Us</Link>
        <Link to="/contact" onClick={close}>Contact</Link>
      </div>
    </>
  )
}
