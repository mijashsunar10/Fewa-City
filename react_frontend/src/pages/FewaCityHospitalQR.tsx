import { useEffect, useState } from 'react'
import './FewaCityHospitalQR.css'

const PHOTO_URL = 'https://fch.com.np/wp-content/uploads/2026/02/fewa-city-institute-of-medical-science-pokhara.jpeg'
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Fewa+City+Hospital+Pokhara'

function FewaCityHospitalQR() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div id="fch-qr-section">
      <div className="fch-container">
        <div className="fch-card">
          {/* IMAGE */}
          <div className="fch-photo">
            <img src={PHOTO_URL} alt="Fewa City Hospital" />
            <div className="fch-photo-overlay"></div>
            <div className="fch-photo-badge">
              <span>●</span>
              24/7 Healthcare Service
            </div>
          </div>

          {/* CONTENT */}
          <div className="fch-details">
            <div className="fch-label">FEWA CITY HOSPITAL PVT. LTD.</div>

            <h2>Fewa City Hospital</h2>

            <p className="fch-intro">
              Quality healthcare, compassionate care and 24/7 emergency support in Pokhara.
            </p>

            {/* LOCATION */}
            <div className="fch-info">
              <div className="fch-info-icon">📍</div>
              <div className="fch-info-content">
                <span>LOCATION</span>
                <strong>Pokhara-9, Nagdhunga, Nepal</strong>
              </div>
            </div>

            {/* CONTACT */}
            <div className="fch-info">
              <div className="fch-info-icon">📞</div>
              <div className="fch-info-content">
                <span>CONTACT NUMBER</span>
                <strong>
                  <a href="tel:061582685" className="fch-direct-call">061-582685</a>
                  <a href="tel:061582686" className="fch-direct-call">061-582686</a>
                </strong>
              </div>
            </div>

            {/* AMBULANCE */}
            <div className="fch-info">
              <div className="fch-info-icon">🚑</div>
              <div className="fch-info-content">
                <span>24/7 AMBULANCE</span>
                <strong>
                  <a href="tel:+9779842285269" className="fch-direct-call">+977 9842285269</a>
                </strong>
              </div>
            </div>

            {/* WEBSITE */}
            <div className="fch-info">
              <div className="fch-info-icon">🌐</div>
              <div className="fch-info-content">
                <span>WEBSITE</span>
                <strong>fch.com.np</strong>
              </div>
            </div>

            {/* MAIN BUTTONS */}
            <div className="fch-buttons">
              <a href="tel:061582685" className="fch-btn fch-call fch-direct-call" aria-label="Call Fewa City Hospital">
                📞 Call Hospital
              </a>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="fch-btn fch-map">
                📍 Get Directions
              </a>
            </div>

            {/* EMERGENCY */}
            <div className="fch-emergency">
              <div className="fch-emergency-left">
                <span>🚨 EMERGENCY</span>
                <strong>061-588193</strong>
              </div>
              <a href="tel:061588193" className="fch-emergency-btn fch-direct-call" aria-label="Call Emergency">
                CALL NOW
              </a>
            </div>

            {/* POPUP OPEN BUTTON */}
            <button type="button" className="fch-open-popup" onClick={() => setOpen(true)}>
              🏥 View Hospital Information
            </button>
          </div>
        </div>
      </div>

      {/* AUTOMATIC POPUP */}
      <div id="fch-popup" className={`fch-popup${open ? ' fch-show' : ''}`} aria-hidden={!open}>
        <div className="fch-popup-background" onClick={() => setOpen(false)}></div>

        <div className="fch-popup-box" role="dialog" aria-modal="true" aria-label="Fewa City Hospital Information">
          <button type="button" className="fch-popup-close" aria-label="Close popup" onClick={() => setOpen(false)}>
            ×
          </button>

          {/* POPUP IMAGE */}
          <div className="fch-popup-photo">
            <img src={PHOTO_URL} alt="Fewa City Hospital" />
            <div className="fch-popup-photo-overlay"></div>
            <div className="fch-popup-photo-text">FEWA CITY HOSPITAL</div>
          </div>

          {/* POPUP CONTENT */}
          <div className="fch-popup-content">
            <div className="fch-popup-label">FEWA CITY HOSPITAL PVT. LTD.</div>
            <h3>Fewa City Hospital</h3>
            <p className="fch-popup-description">
              Quality healthcare services with 24/7 emergency and ambulance support.
            </p>

            {/* LOCATION */}
            <div className="fch-popup-info">
              <div className="fch-popup-icon">📍</div>
              <div>
                <small>LOCATION</small>
                <strong>Pokhara-9, Nagdhunga, Nepal</strong>
              </div>
            </div>

            {/* CONTACT */}
            <div className="fch-popup-info">
              <div className="fch-popup-icon">📞</div>
              <div>
                <small>CONTACT</small>
                <strong>
                  <a href="tel:061582685" className="fch-direct-call">061-582685</a>
                  <span className="fch-divider">/</span>
                  <a href="tel:061582686" className="fch-direct-call">061-582686</a>
                </strong>
              </div>
            </div>

            {/* AMBULANCE */}
            <div className="fch-popup-info">
              <div className="fch-popup-icon">🚑</div>
              <div>
                <small>24/7 AMBULANCE</small>
                <strong>
                  <a href="tel:+9779842285269" className="fch-direct-call">+977 9842285269</a>
                </strong>
              </div>
            </div>

            {/* EMERGENCY */}
            <div className="fch-popup-info fch-popup-danger">
              <div className="fch-popup-icon">🚨</div>
              <div>
                <small>EMERGENCY</small>
                <strong>
                  <a href="tel:061588193" className="fch-direct-call">061-588193</a>
                </strong>
              </div>
            </div>

            {/* CALL BUTTONS */}
            <div className="fch-popup-buttons">
              <a href="tel:061588193" className="fch-popup-btn fch-popup-emergency-btn fch-direct-call">
                🚨 Emergency Call
              </a>
              <a href="tel:+9779842285269" className="fch-popup-btn fch-popup-ambulance-btn fch-direct-call">
                🚑 Ambulance
              </a>
            </div>

            {/* WEBSITE / MAP */}
            <div className="fch-popup-buttons">
              <a href="https://fch.com.np/" target="_blank" rel="noopener noreferrer" className="fch-popup-btn fch-popup-website-btn">
                🌐 Visit Website
              </a>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="fch-popup-btn fch-popup-map-btn">
                📍 Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FewaCityHospitalQR
