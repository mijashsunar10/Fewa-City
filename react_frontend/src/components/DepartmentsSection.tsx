import { Link } from 'react-router-dom'
import './DepartmentsSection.css'

const departments = [
  { slug: 'anesthesia', label: 'Anesthesia' },
  { slug: 'cardiology', label: 'Cardiology' },
  { slug: 'dental', label: 'Dental' },
  { slug: 'dermatology', label: 'Dermatology' },
  { slug: 'ent', label: 'ENT' },
  { slug: 'gastro', label: 'Gastrology' },
  { slug: 'surgery', label: 'General Surgery' },
  { slug: 'gynecology', label: 'Gynecology' },
  { slug: 'medicine', label: 'Internal Medicine' },
  { slug: 'neuro', label: 'Neurosurgery' },
  { slug: 'orthopedic', label: 'Orthopedic' },
  { slug: 'peadiatric', label: 'Pediatric' },
  { slug: 'urology', label: 'Urology' },
  { slug: 'radiology', label: 'Radiology' },
  { slug: 'psychiatric', label: 'Psychiatric' },
  { slug: 'opthalmology', label: 'Opthalmology' },
  { slug: 'nephrology', label: 'Nephorology' },
]

function DepartmentsSection() {
  return (
    <section className="departments-section">
      <div className="container">
        <div className="section-title">
          <h1>Our Departments</h1>
          <p>
            Explore the wide range of specialized medical departments at best Hospital in Pokhara. Our expert teams
            provide top-notch care, advanced treatments, and compassionate services for every patient.
          </p>
        </div>

        <div className="departments-grid">
          {departments.map((dept) => (
            <Link to={`/department#${dept.slug}`} key={dept.slug}>
              <div className="department-card">{dept.label}</div>
            </Link>
          ))}
        </div>

        <div className="services-btn-wrap">
          <Link to="/department" className="view-all-btn">View Department Details</Link>
        </div>
      </div>
    </section>
  )
}

export default DepartmentsSection
