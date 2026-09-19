import './CollegeProgramme.css'

const programs = [
  {
    slug: 'pcl-nursing',
    icon: '🩺',
    title: 'PCL Nursing',
    cardImg: '/cpllege/nursing.png',
    detailImg: '/cpllege/nursing.png',
    layout: 'left',
    altBg: false,
    cardDescription:
      'The PCL Nursing program provides professional nursing education with strong theoretical knowledge, practical hospital training, patient care, and community health services.',
    duration: '3 Years',
    contact: '061-575247',
    detailTitle: 'PCL Nursing Program',
    detailParagraphs: [
      'The PCL Nursing program is designed to prepare skilled nurses with strong theoretical understanding and real hospital-based experience. Students learn patient care, medical procedures, and community health practices.',
      'Graduates are capable of working in hospitals, clinics, NGOs, and healthcare institutions across Nepal and abroad with professional competence and ethics.',
    ],
    infoGrid: [
      { label: 'Duration', value: '3 Years' },
      { label: 'Total Seats', value: '40' },
      { label: 'Scholarship', value: '4 Seats' },
      { label: 'Paid Seats', value: '36' },
    ],
    stats: [
      { value: '10K+', label: 'Graduates', primary: true },
      { value: '30+', label: 'Faculty Members' },
      { value: '10+', label: 'Training Centers' },
      { value: '20+', label: 'Classrooms' },
    ],
  },
  {
    slug: 'health-assistant',
    icon: '💉',
    title: 'Health Assistant',
    cardImg: '/cpllege/helathassistant.png',
    detailImg: '/cpllege/helathassistant.png',
    layout: 'right',
    altBg: true,
    cardDescription:
      'The Health Assistant program focuses on community healthcare, diagnosis, treatment support, preventive care, and field-based medical training for rural and urban health services.',
    duration: '3 Years',
    contact: '061-575247',
    detailTitle: 'Health Assistant Program',
    detailParagraphs: [
      'The Health Assistant program prepares students for real-world healthcare services through clinical training, field visits, and hospital practice.',
      'Students gain the skills required to work in health posts, hospitals, and community healthcare centers.',
    ],
    infoGrid: [
      { label: 'Duration', value: '3 Years' },
      { label: 'CTEVT', value: 'Affiliated' },
      { label: 'Training', value: 'Clinical Practice' },
      { label: 'Career', value: 'Healthcare Jobs' },
    ],
    stats: [
      { value: '95%', label: 'Practical Training', primary: true },
      { value: '15+', label: 'Partner Hospitals' },
      { value: '100+', label: 'Clinical Sessions' },
      { value: 'Career', label: 'Focused Learning' },
    ],
  },
  {
    slug: 'lab-technician',
    icon: '🧪',
    title: 'Lab Technician',
    cardImg: '/cpllege/lab.png',
    detailImg: '/cpllege/lab.png',
    layout: 'left',
    altBg: false,
    cardDescription:
      'The Lab Technician program trains students in laboratory science, diagnostic testing, sample analysis, and modern medical equipment handling with hands-on practical experience.',
    duration: '3 Years',
    contact: '061-575247',
    detailTitle: 'Lab Technician Program',
    detailParagraphs: [
      'Students are trained in laboratory procedures, sample testing, pathology techniques, and diagnostic methods using modern equipment.',
      'The program prepares students for careers in hospitals, diagnostic centers, and medical laboratories.',
    ],
    infoGrid: [
      { label: 'Duration', value: '3 Years' },
      { label: 'Focus', value: 'Lab Practice' },
      { label: 'Training', value: 'Practical' },
      { label: 'Career', value: 'Diagnostics' },
    ],
    stats: [
      { value: 'Modern', label: 'Lab Setup', primary: true },
      { value: '50+', label: 'Practical Sessions' },
      { value: 'Advanced', label: 'Equipment' },
      { value: '100%', label: 'Skill Based' },
    ],
  },
]

const offers = [
  {
    icon: 'fa-chalkboard-teacher',
    title: 'Classroom',
    description: 'Spacious, well-ventilated classrooms equipped with modern multimedia and teaching facilities.',
  },
  {
    icon: 'fa-user-nurse',
    title: 'Skill Lab',
    description:
      'Fully equipped labs for basic nursing skills (FON), Midwifery, Microbiology, Pathology, Community Health & Nutrition.',
  },
  {
    icon: 'fa-desktop',
    title: 'Computer Room',
    description: 'Sufficient number of computers with networking and reliable internet access for academic use.',
  },
  {
    icon: 'fa-book',
    title: 'Library',
    description: 'Well-managed library with nursing textbooks, journals, references, and learning materials.',
  },
]

function CollegeProgramme() {
  return (
    <>
      <h1 className="fewa-heading">Fewa City Institute of Medical Science</h1>

      {/* PROGRAM CARDS */}
      <section className="program-cards-section">
        <div className="program-cards-container">
          {programs.map((program) => (
            <a href={`#${program.slug}`} className="program-main-card" key={program.slug}>
              <div className="program-image">
                <img src={program.cardImg} alt={program.title} />
              </div>

              <div className="program-card-top">
                <div className="program-icon">{program.icon}</div>
                <span className="program-badge">CTEVT Affiliated</span>
              </div>

              <h2>{program.title}</h2>
              <p>{program.cardDescription}</p>

              <div className="program-details">
                <div><strong>Duration:</strong> {program.duration}</div>
                <div><strong>Contact:</strong> {program.contact}</div>
              </div>

              <div className="program-link">Explore Program →</div>
            </a>
          ))}
        </div>
      </section>

      {/* PROGRAM DETAIL SECTIONS */}
      {programs.map((program) => (
        <section
          id={program.slug}
          className={`program-detail-section${program.altBg ? ' alt-bg' : ''}`}
          key={program.slug}
        >
          <div className={`detail-container ${program.layout === 'left' ? 'left-layout' : 'right-layout'}`}>
            {program.layout === 'left' && (
              <div className="detail-image">
                <img src={program.detailImg} alt={program.title} />
              </div>
            )}

            <div className="detail-content">
              <span className="detail-badge">CTEVT Affiliated</span>
              <h2>{program.detailTitle}</h2>

              {program.detailParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <div className="detail-info-grid">
                {program.infoGrid.map((item) => (
                  <div key={item.label}><strong>{item.label}:</strong> {item.value}</div>
                ))}
              </div>

              <div className="stats-grid">
                {program.stats.map((stat) => (
                  <div className={`stat-card${stat.primary ? ' primary' : ''}`} key={stat.label}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {program.layout === 'right' && (
              <div className="detail-image">
                <img src={program.detailImg} alt={program.title} />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* WHAT WE OFFER */}
      <section className="offer-section">
        <div className="offer-container">
          <div className="section-header">
            <h2>What We Offer in Fewa City Institute of Medical Science</h2>
            <p>Quality learning resources and facilities to support professional nursing education</p>
          </div>

          <div className="offer-grid">
            {offers.map((offer) => (
              <div className="offer-card" key={offer.title}>
                <i className={`fas ${offer.icon}`}></i>
                <h4>{offer.title}</h4>
                <p>{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CollegeProgramme
