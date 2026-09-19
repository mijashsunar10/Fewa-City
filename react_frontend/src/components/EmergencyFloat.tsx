import { useState } from 'react'
import './EmergencyFloat.css'

function EmergencyFloat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* EMERGENCY FLOAT BUTTON */}
      <div className="emergency-float" onClick={() => setOpen(true)}>
        <img src="https://fch.com.np/wp-content/uploads/2026/02/emergency.png" alt="Emergency" />
      </div>

      {/* BOOK APPOINTMENT BUTTON */}
      <a
        href="https://wa.me/9779765940555?text=Hello%20I%20want%20to%20book%20an%20appointment"
        target="_blank"
        rel="noreferrer"
        className="appointment-float"
        title="Book Appointment on WhatsApp"
      >
        📅
      </a>

      {/* EMERGENCY POPUP */}
      {open && (
        <div
          className="emergency-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="emergency-box">
            <div className="popup-siren">
              <img src="https://fch.com.np/wp-content/uploads/2026/02/emergency.png" alt="Emergency" />
            </div>

            <h2>Emergency</h2>

            <div className="emergency-grid">
              <div className="emergency-item">
                <span>Enquiry No</span>
                <a href="tel:061582686">061582686</a>
              </div>

              <div className="emergency-item">
                <span>🚑 Ambulance No.</span>
                <a href="tel:9842285269">9842285269</a>
              </div>

              <div className="emergency-item">
                <span>🏥 Office.</span>
                <a href="tel:061575260">061-575260</a>
              </div>

              <div className="emergency-item">
                <span>⚠ Emergency No.</span>
                <a href="tel:061588193">061588193</a>
              </div>
            </div>

            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
          </div>
        </div>
      )}
    </>
  )
}

export default EmergencyFloat
