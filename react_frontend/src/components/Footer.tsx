import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="hospital-footer">
        <div className="footer-container">
          {/* LOGO / ABOUT */}
          <div className="footer-box">
            <img src="/logo/image.png" alt="Fewa City Hospital" />
            <p>
              We deliver quality healthcare services at affordable rates. Located in Gandaki Province, we cater to
              the diverse healthcare needs of the entire region.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-box">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/department">Departments</Link></li>
              <li><Link to="/doctors">Our Team</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-box">
            <h4>Contact</h4>
            <p>Pokhara, Fewa City</p>
            <p><a style={{ color: 'white' }} href="tel:061582685">061-582685</a></p>
            <p><a style={{ color: 'white' }} href="tel:061582686">061-582686</a></p>
            <p>
              <a style={{ color: 'white' }} href="mailto:fewacitihospital@gmail.com">
                fewacitihospital@gmail.com
              </a>
            </p>
            <p>
              🗺️{' '}
              <a style={{ color: 'white' }} href="https://goo.gl/maps/fewacityhospital" target="_blank" rel="noreferrer">
                View on Map
              </a>
            </p>
          </div>

          {/* HOURS + SOCIAL */}
          <div className="footer-box">
            <h4>⏰ Visiting Hours</h4>
            <p>24 hours <br /> Open</p>

            <div className="socials">
              <a href="https://www.facebook.com/Fchpkr" className="social fb" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.tiktok.com/@fewa.city.hospital?_r=1&_t=ZS-98NZHLkbxgX"
                className="social ig"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://wa.me/9779765940555?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20[     ]%20from%20the%20[ ]%20Department."
                className="social wa"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <a href="https://nitiacademy.edu.np/" target="_blank" rel="noreferrer">
          Designed and Developed by Niti Academy
        </a>
      </div>
    </>
  )
}

export default Footer
