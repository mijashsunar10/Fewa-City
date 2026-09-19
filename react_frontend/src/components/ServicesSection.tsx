import { Link } from 'react-router-dom'
import './ServicesSection.css'

const features = [
  {
    img: '/services/laboratory/lab.jpg',
    title: 'Laboratory',
    description: 'Advanced laboratories for accurate medical testing and analysis. Supporting reliable diagnosis and patient care.',
  },
  {
    img: '/services/x-ray/xray.jpg',
    title: 'X-Ray',
    description: 'Digital X-ray imaging for fast and precise diagnosis. Ensures safety with minimal radiation exposure.',
  },
  {
    img: '/services/pharmacy/phramacy.jpg',
    title: 'Pharmacy',
    description: 'Well-organized pharmacy with essential medicines available. Ensuring safe usage and proper guidance.',
  },
  {
    img: '/services/icu/icu.avif',
    title: 'ICU',
    description: 'Advanced intensive care with continuous patient monitoring. Managed by skilled critical care professionals.',
  },
]

function ServicesSection() {
  return (
    <section className="features-outer" id="services-section">
      <div className="features-inner">
        <h2>Our Medical Services</h2>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="icon">
                <img src={feature.img} alt={feature.title} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="services-btn-wrap">
          <Link to="/services" className="view-all-btn">View All Services</Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
