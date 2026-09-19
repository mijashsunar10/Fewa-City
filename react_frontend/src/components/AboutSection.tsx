import { Link } from 'react-router-dom'
import './AboutSection.css'

interface AboutSectionProps {
  showButton?: boolean
}

function AboutSection({ showButton = true }: AboutSectionProps) {
  return (
    <section className="alka-hero">
      <div className="alka-wrap">
        {/* LEFT IMAGE */}
        <div className="alka-image">
          <img src="/aboutus/image.png" alt="Best Hospital in Pokhara" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="alka-content">
          <span className="tag">Fewa City Hospital</span>
          <h1>Why Choose Fewa City Hospital?</h1>

          <div className="heartbeat">
            <i className="fa-solid fa-heartbeat"></i>
          </div>

          <p>
            Welcome to Fewa City Hospital, established in 2057 B.S with a mission to
            deliver quality healthcare services at affordable rates. Located in
            Gandaki Province, we Provide Affordable Treatment And Emergency Support 24/7.
          </p>

          {showButton && (
            <Link to="/about-us" className="btn">More About Us</Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
