import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Departments.css'

interface Doctor {
  name: string
  qualification: string
  img: string
}

interface Department {
  slug: string
  label: string
  title: string
  paragraphs: string[]
  points: string[]
  img: string
  doctors: Doctor[]
}

const departments: Department[] = [
  {
    slug: 'anesthesia',
    label: 'Anesthesia',
    title: 'Anesthesia Department',
    paragraphs: [
      'The Anesthesia Department ensures patient comfort and safety before, during, and after surgical procedures. Our team specializes in pain management, critical care support, and modern anesthesia techniques.',
      'We provide personalized care for every patient and focus on safety, monitoring, and post-operative support.',
    ],
    points: [
      'Patient monitoring during surgery',
      'Modern anesthesia techniques',
      'Pain management and critical care',
      'Post-operative patient support',
    ],
    img: '/departments/anesthesia.png',
    doctors: [
      { name: 'Dr. Tumaya Ghale', qualification: 'MBBS.MS Anesthesia', img: 'Dr. Tumaya Ghale.jpeg' },
      { name: 'Dr. Rohini Sigdel', qualification: 'MBBS.MS Anesthesia', img: 'Dr. Rohini Sigdel.jpg' },
    ],
  },
  {
    slug: 'cardiology',
    label: 'Cardiology',
    title: 'Cardiology Department',
    paragraphs: [
      'The Cardiology Department specializes in diagnosing and treating heart conditions. Our team provides comprehensive cardiac care using advanced technology for heart health assessment and treatment.',
      'We offer preventive care, diagnostic services, and interventional procedures to manage cardiovascular diseases effectively.',
    ],
    points: ['Comprehensive cardiac care', 'Heart health assessment', 'Diagnostic services', 'Interventional procedures'],
    img: '/departments/cardiology.png',
    doctors: [
      { name: 'Dr. Madhu Roka', qualification: 'MBBS MD DM', img: 'Dr. Madhu Roka.jpg' },
      { name: 'Dr. Arun Kadel', qualification: 'MBBS MD', img: 'Dr. Arun Kadel.png' },
    ],
  },
  {
    slug: 'dental',
    label: 'Dental',
    title: 'Dental Department',
    paragraphs: [
      'The Dental Department provides comprehensive oral healthcare services for all ages. Our team offers preventive, restorative, and cosmetic dental treatments using modern equipment.',
    ],
    points: [
      'Routine checkups and cleanings',
      'Fillings and root canal treatment',
      'Dental implants and crowns',
      'Orthodontic treatments',
    ],
    img: '/departments/dental.png',
    doctors: [{ name: 'Dr. Niva Shrestha', qualification: 'BDS', img: 'Dr. Niva Shrestha.jpg' }],
  },
  {
    slug: 'dermatology',
    label: 'Dermatology',
    title: 'Dermatology Department',
    paragraphs: [
      'The Dermatology Department specializes in skin, hair, and nail conditions. Our team diagnoses and treats various dermatological issues using advanced therapeutic approaches.',
    ],
    points: ['Skin cancer screening', 'Acne and eczema treatment', 'Laser and cosmetic procedures', 'Hair and scalp disorders'],
    img: '/departments/dermatlofgy.png',
    doctors: [
      { name: 'Dr. Saurav Aryal', qualification: 'MBBS MD', img: 'Dr. Saurav Aryal.jpeg' },
      { name: 'Dr. Rishna Malla', qualification: 'MBBS. MD', img: 'Dr. Rishna Malla.png' },
    ],
  },
  {
    slug: 'ent',
    label: 'ENT',
    title: 'ENT Department',
    paragraphs: [
      'The ENT Department specializes in disorders of the head and neck region. Our team provides comprehensive care for hearing, breathing, and swallowing issues.',
    ],
    points: ['Hearing tests and hearing aids', 'Sinus and nasal disorder treatment', 'Voice and swallowing therapy', 'Head and neck surgery'],
    img: '/departments/ent.png',
    doctors: [
      { name: 'Dr. Krishna Prasad Koirala', qualification: 'MBBS .MS ENT', img: 'Dr. Krishna Prasad Koirala.jpeg' },
      { name: 'Dr. Tulika Dube', qualification: 'MBBS .MS ENT', img: 'Dr. Tulika Dube.jpeg' },
      { name: 'Dr. Donjan Bahadur Lamechhine', qualification: 'MBBS .MS ENT', img: 'Dr. Donjan Bahadur Lamechhine.png' },
      { name: 'Dr. Bunu Gaudel', qualification: 'MBBS .MS ENT', img: 'Dr. Bunu Gaudel.png' },
    ],
  },
  {
    slug: 'gastro',
    label: 'Gastroenterology',
    title: 'Gastroenterology Department',
    paragraphs: [
      'The Gastroenterology Department specializes in digestive system disorders. Our team diagnoses and treats conditions affecting the esophagus, stomach, intestines, liver, and pancreas.',
    ],
    points: ['Endoscopy and colonoscopy', 'Liver disease management', 'Inflammatory bowel disease treatment', 'Digestive disorder diagnosis'],
    img: '/departments/Gastroenterology.png',
    doctors: [
      { name: 'Dr. Suresh Thapa', qualification: 'MBBS,MD, DM Gestrology', img: 'Dr. Suresh Thapa.png' },
      { name: 'Dr. Jeevan Thapa', qualification: 'MBBS,MD, DM Gestrology', img: 'Dr. Jeevan Thapa.png' },
    ],
  },
  {
    slug: 'surgery',
    label: 'General Surgery',
    title: 'Surgery Department',
    paragraphs: [
      'The Surgery Department provides a wide range of surgical services using advanced techniques and technology. Our team performs both routine and complex surgical procedures.',
    ],
    points: ['General and laparoscopic surgery', 'Emergency surgical care', 'Minimally invasive procedures', 'Post-operative care and recovery'],
    img: '/departments/Surgery.png',
    doctors: [
      { name: 'Dr. Bhoj Raj Neupane', qualification: 'MBBS.MS General Surgeon', img: 'Dr. Bhoj Raj Neupane.png' },
      { name: 'Dr. Sureshraj Paudel', qualification: 'MBBS.MS General Surgeon', img: 'Dr. Sureshraj Paudel.png' },
    ],
  },
  {
    slug: 'gynecology',
    label: 'Gynecology',
    title: 'Gynecology Department',
    paragraphs: [
      "The Gynecology Department provides comprehensive women's health services, focusing on reproductive system health. Our team offers preventive care, diagnosis, and treatment of gynecological conditions.",
    ],
    points: ['Annual exams and Pap smears', 'Family planning and contraception', 'Menstrual disorder management', 'Minimally invasive gynecological surgery'],
    img: '/departments/Gynecology.png',
    doctors: [
      { name: 'Dr. Chandika Pandit', qualification: 'MBBS.Ms.DCH Gyanocologist', img: 'Dr. Chandika Pandit.png' },
      { name: 'Dr. Padmaraj Dhungana', qualification: 'MBBS.Ms. Gyanocologist', img: 'Dr. Padmaraj Dhungana.jpg' },
    ],
  },
  {
    slug: 'medicine',
    label: 'Internal Medicine',
    title: 'General Medicine Department',
    paragraphs: [
      'The General Medicine Department provides primary care for adults, managing a wide range of medical conditions. Our team focuses on diagnosis, treatment, and prevention of common and complex illnesses.',
    ],
    points: ['Comprehensive health checkups', 'Chronic disease management', 'Preventive health counseling', 'Acute illness treatment'],
    img: '/departments/internalmedicine.png',
    doctors: [
      { name: 'Dr. Buddhi Bahadur Thapa', qualification: 'MBBS.MD Senior Consultant ( Internal Medicine)', img: 'Dr. Buddhi Bahadur Thapa.png' },
      { name: 'Dr. Krishna Bahadur Thapa', qualification: 'MBBS.MD Consultant ( Internal Medicine)', img: 'Dr. Krishna Bahadur Thapa.png' },
      { name: 'Dr. Hari Krishna Bhandari', qualification: 'MBBS.MD Consultant Physician', img: 'Dr. Hari Krishna Bhandari.jpg' },
    ],
  },
  {
    slug: 'neuro',
    label: 'Neurosurgery',
    title: 'Neurosurgery Department',
    paragraphs: [
      'The Neurosurgery Department specializes in diagnosing and treating disorders of the nervous system. Our team manages conditions affecting the brain, spinal cord, nerves, and muscles.',
    ],
    points: ['Brain and spinal surgery', 'Stroke management', 'Epilepsy treatment', 'Neuro-oncology'],
    img: '/departments/Neurosurgery.png',
    doctors: [{ name: 'Dr. Rajan Kumar Sharma', qualification: 'MBBS MD', img: 'Dr. Rajan Kumar Sharma.png' }],
  },
  {
    slug: 'orthopedic',
    label: 'Orthopedic',
    title: 'Orthopedic Department',
    paragraphs: [
      'The Orthopedic Department specializes in conditions involving the musculoskeletal system. Our surgeons provide care for bones, joints, ligaments, tendons, and muscles.',
    ],
    points: ['Joint replacement surgery', 'Fracture and trauma care', 'Sports medicine', 'Spine and back surgery'],
    img: '/departments/Orthopedic.png',
    doctors: [
      { name: 'Dr. Rabeendra Prasad Shrestha', qualification: 'MBBS.MS Orthopedic Surgeon', img: 'Dr. Rabeendra Prasad Shrestha.png' },
      { name: 'Dr. Dinesh Kumar BK', qualification: 'MBBS, MS – (Ortho) Trauma & Joint Replacement Surgeon', img: 'Dr. Dinesh Kumar BK.png' },
      { name: 'Dr. Rabimohan Dhakal', qualification: 'MBBS, MS – (Ortho) Trauma, Sport Injury & Arthroscopy Surgeon', img: 'Dr. Rabimohan Dhakal.png' },
    ],
  },
  {
    slug: 'peadiatric',
    label: 'Peadiatric',
    title: 'Peadiatric Department',
    paragraphs: [
      'The Peadiatric Department provides specialized medical care for infants, children, and adolescents. Our team focuses on the physical, emotional, and social health of young patients.',
    ],
    points: ['Routine checkups and vaccinations', 'Childhood illness treatment', 'Growth and development monitoring', 'Pediatric emergency care'],
    img: '/departments/Peadiatric.png',
    doctors: [
      { name: 'Dr. Hum Prasad Neupane', qualification: 'MBBS.DCH Peadiatrician', img: 'Dr. Hum Prasad Neupane.png' },
      { name: 'Dr. Amrita Ghimire', qualification: 'MBBS MD Peadiatrician', img: 'Dr. Amrita Ghimire.png' },
    ],
  },
  {
    slug: 'urology',
    label: 'Urology',
    title: 'Urology Department',
    paragraphs: ['The Urology Department provides medical and surgical care for the urinary tract system and the male reproductive organs.'],
    points: ['Kidney and bladder care', 'Prostate health', 'Urinary tract infection treatment', 'Minimally invasive urologic surgery'],
    img: '/departments/Urology.png',
    doctors: [
      { name: 'Dr. Dhurba Bahadur Adhikari', qualification: 'MBBS MS Urologist', img: 'Dr. Dhurba Bahadur Adhikari.png' },
      { name: 'Dr. Anup Chapagain', qualification: 'MBBS MS, MCH Urologist', img: 'Dr. Anup Chapagain.jpg' },
    ],
  },
  {
    slug: 'radiology',
    label: 'Radiology',
    title: 'Radiology Department',
    paragraphs: ['The Radiology Department uses medical imaging to diagnose and treat diseases seen within the body.'],
    points: ['X-ray and Fluoroscopy', 'CT and MRI scans', 'Ultrasound imaging', 'Interventional radiology'],
    img: '/departments/Radiology.png',
    doctors: [
      { name: 'Dr. Ananda Bahadur Shrestha', qualification: 'MBBS DMRD Radiology', img: 'Dr. Ananda Bahadur Shrestha.png' },
      { name: 'Dr. Madan Thapa', qualification: 'MBBS.MD Radiology', img: 'Dr. Madan Thapa.jpg' },
      { name: 'Dr. Susmit Kafle', qualification: 'MBBS.MD Radiology', img: 'Dr. Susmit Kafle.jpeg' },
    ],
  },
  {
    slug: 'psychiatric',
    label: 'Psychiatric',
    title: 'Psychiatric Department',
    paragraphs: [
      'The Psychiatric Department provides compassionate mental health care, focusing on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders.',
    ],
    points: ['Counseling and therapy', 'Mental health assessments', 'Mood disorder treatment', 'Stress management'],
    img: '/departments/Psychiatric.png',
    doctors: [{ name: 'Dr. Jaya Bahadur Khatri', qualification: 'MBBS. MD', img: 'Dr. Jaya Bahadur Khatri.png' }],
  },
  {
    slug: 'opthalmology',
    label: 'Opthalmology',
    title: 'Opthalmology Department',
    paragraphs: ['The Opthalmology Department provides comprehensive eye care, from routine exams to advanced surgical procedures.'],
    points: ['Vision testing and spectacles', 'Cataract surgery', 'Glaucoma management', 'Eye trauma care'],
    img: '/departments/Opthalmology.png',
    doctors: [
      { name: 'Dr. Anjita Hirachan', qualification: 'MBBS MD', img: 'Dr. Anjita Hirachan.jpeg' },
      { name: 'Dr. Renu Poudel', qualification: 'MBBS MD', img: 'Dr. Renu Poudel.png' },
    ],
  },
  {
    slug: 'nephrology',
    label: 'Nephrology',
    title: 'Nephrology Department',
    paragraphs: ['The Nephrology Department specializes in kidney care and the treatment of kidney-related diseases.'],
    points: ['Chronic kidney disease management', 'Dialysis services', 'Hypertension treatment', 'Kidney stone prevention'],
    img: '/departments/Nephrology.png',
    doctors: [{ name: 'Dr. Bikash Khatri', qualification: 'MBBS. MD. DM', img: 'Dr. Bikash Khatri.jpeg' }],
  },
]

function bookingLink(doctorName: string, deptTitle: string) {
  const text = `Hello Doctor, I would like to book an appointment with ${doctorName} from the ${deptTitle}.`
  return `https://wa.me/9779765940555?text=${encodeURIComponent(text)}`
}

function Departments() {
  const location = useLocation()
  const hashSlug = location.hash.replace('#', '')
  const [activeSlug, setActiveSlug] = useState(
    departments.some((d) => d.slug === hashSlug) ? hashSlug : departments[0].slug,
  )

  useEffect(() => {
    if (hashSlug && departments.some((d) => d.slug === hashSlug)) {
      setActiveSlug(hashSlug)
    }
  }, [hashSlug])

  const active = departments.find((d) => d.slug === activeSlug) ?? departments[0]

  return (
    <section className="department-section">
      <div className="department-container">
        {/* LEFT SIDE */}
        <aside className="department-list">
          <select className="dept-dropdown" value={activeSlug} onChange={(e) => setActiveSlug(e.target.value)}>
            {departments.map((dept) => (
              <option key={dept.slug} value={dept.slug}>{dept.label}</option>
            ))}
          </select>

          <div className="dept-buttons">
            {departments.map((dept) => (
              <button
                key={dept.slug}
                className={`dept-btn${dept.slug === activeSlug ? ' active' : ''}`}
                onClick={() => setActiveSlug(dept.slug)}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT SIDE */}
        <div className="department-content">
          <div className="dept-panel active">
            <div className="dept-top">
              <div className="dept-text">
                <h2>{active.title}</h2>
                {active.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <ul className="dept-points">
                  {active.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="dept-images">
                <img src={active.img} alt={active.title} />
              </div>
            </div>

            <div className="dept-doctors">
              <h3>Available Doctors</h3>
              <div className="doctor-grid">
                {active.doctors.map((doctor) => (
                  <div className="doctor-card" key={doctor.name}>
                    <img src={`/doctors/${encodeURIComponent(doctor.img)}`} alt={doctor.name} />
                    <h4>{doctor.name}</h4>
                    <span>{doctor.qualification}</span>
                    <a
                      className="book-btn"
                      target="_blank"
                      rel="noreferrer"
                      href={bookingLink(doctor.name, active.title)}
                    >
                      Book Appointment
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Departments
