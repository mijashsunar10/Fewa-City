import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 220)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container top-flex">
          <span>24 Hours Emergency & Ambulance Service : +977-9842285269</span>
          <div className="top-right">
            <a href="https://www.facebook.com/share/1GEaPQnKcH/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.tiktok.com/@fewa.city.hospital?_r=1&_t=ZS-98NZHLkbxgX" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="mailto:fewacitihospital@gmail.com">fewacitihospital@gmail.com</a>
          </div>
        </div>
      </div>

      {/* MIDDLE BAR */}
      <div className="middle-bar">
        <div className="container middle-flex">
          <div className="logo-group">
            <img src="/logo/image.png" alt="Fewa City Hospital logo" />
            <div className="hospital-text">
              <span className="hospital-name">FEWA CITY</span>
              <span className="hospital-sub">Hospital Pvt. Ltd.</span>
              <span className="location">Pokhara-09, Nagdhunga</span>
            </div>
          </div>

          <div className="quick-actions">
            <a
              href="https://wa.me/9779765940555?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20[     ]%20from%20the%20[ ]%20Department."
              className="action"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-calendar-check"></i>
              <div className="action-text" style={{ color: '#156619' }}>
                <span>Request</span>
                <span>Appointment</span>
              </div>
            </a>

            <Link to="/department" className="action">
              <i className="fa-solid fa-user-doctor"></i>
              <div className="action-text" style={{ color: '#156619' }}>
                <span>Doctor</span>
                <span>Consultation</span>
              </div>
            </Link>

            <a href="tel:+9779842285269" className="action">
              <i className="fa-solid fa-ambulance"></i>
              <div className="action-text" style={{ color: '#156619' }}>
                <span>Ambulance</span>
                <span>+977 9842285269</span>
              </div>
            </a>

            <Link to="/services" className="action">
              <i className="fa-solid fa-clock"></i>
              <div className="action-text" style={{ color: '#156619' }}>
                <span>24 / 7</span>
                <span>Service</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`navbar${sticky ? ' sticky' : ''}`}>
        <div className="mobile-header">
          <div className="mobile-logo-group">
            <img src="/logo/image.png" alt="Fewa City Hospital logo" />
            <div className="mobile-hospital-text">
              <span className="mobile-hospital-name">FEWA CITY</span>
              <span className="mobile-hospital-sub">Hospital Pvt. Ltd.</span>
            </div>
          </div>

          <div className="mobile-toggle" onClick={() => setMenuOpen((open) => !open)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        <ul className={menuOpen ? 'show' : ''}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/department" onClick={() => setMenuOpen(false)}>Departments</Link>
          </li>
          <li>
            <Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/college-programme" onClick={() => setMenuOpen(false)}>College Programme</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
