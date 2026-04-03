import { Link } from 'react-router-dom'
import { IMG } from '../shared'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={IMG.logo} alt="Humo Restorations" />
            <p>
              Building envelope restoration and structural concrete experts serving Ontario.
              Quality craftsmanship, innovative solutions, and unwavering commitment to safety.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">&#9679;</a>
              <a href="#" aria-label="LinkedIn">&#9679;</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/#services">Building Envelope</Link></li>
              <li><Link to="/#services">Structural Concrete</Link></li>
              <li><Link to="/#services">Waterproofing</Link></li>
              <li><Link to="/#services">Masonry</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <svg className="fc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>info@humorestorations.ca</span>
            </div>
            <div className="footer-contact-item">
              <svg className="fc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+1 (647) 669-9339</span>
            </div>
            <div className="footer-contact-item">
              <svg className="fc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>131 Whitmore Rd, Unit 24, Woodbridge, ON</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Humo Restorations Inc. All rights reserved.</p>
          <p>Building Excellence Across Ontario</p>
        </div>
      </div>
      <a href="https://github.com/Mehriddin-bytes" target="_blank" rel="noopener noreferrer" className="footer-author">Author</a>
    </footer>
  )
}
