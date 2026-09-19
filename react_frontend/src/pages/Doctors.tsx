import './Doctors.css'

const team = [
  { name: 'Dr. Bhoj Raj Neupane', position: 'MBBS, MS - General Surgeon', img: 'Dr. Bhoj Raj Neupane.png' },
  { name: 'Dr. Chandika Pandit', position: 'MBBS, MS, DCH - Gynecologist', img: 'Dr. Chandika Pandit.png' },
  { name: 'Dr. Suresh Thapa', position: 'MBBS, MD, DM - Gastroenterologist', img: 'Dr. Suresh Thapa.png' },
  { name: 'Dr. Buddhi Bahadur Thapa', position: 'MBBS, MD – Senior Consultant (Internal Medicine)', img: 'Dr. Buddhi Bahadur Thapa.png' },
  { name: 'Dr. Rohini Sigdel', position: 'MBBS, MS - Anesthetist', img: 'Dr. Rohini Sigdel.jpg' },
  { name: 'Dr. Krishna Bahadur Thapa', position: 'MBBS, MD – Consultant (Internal Medicine)', img: 'Dr. Krishna Bahadur Thapa.png' },
  { name: 'Dr. Sureshraj Paudel', position: 'MBBS, MS – General Surgeon', img: 'Dr. Sureshraj Paudel.png' },
  { name: 'Dr. Rabeendra Prasad Shrestha', position: 'MBBS, MS – Orthopedic Surgeon', img: 'Dr. Rabeendra Prasad Shrestha.png' },
  { name: 'Dr. Dinesh Kumar BK', position: 'MBBS, MS – (Ortho) Trauma & Joint Replacement Surgeon', img: 'Dr. Dinesh Kumar BK.png' },
  { name: 'Dr. Rabimohan Dhakal', position: 'MBBS, MS – (Ortho) Trauma, Sport Injury & Arthroscopy Surgeon', img: 'Dr. Rabimohan Dhakal.png' },
  { name: 'Dr. Hum Prasad Neupane', position: 'MBBS, DCH – Pediatrician', img: 'Dr. Hum Prasad Neupane.png' },
  { name: 'Dr. Amrita Ghimire', position: 'MBBS, MD – Pediatrician', img: 'Dr. Amrita Ghimire.png' },
  { name: 'Dr. Dhurba Bahadur Adhikari', position: 'MBBS, MS – Urologist', img: 'Dr. Dhurba Bahadur Adhikari.png' },
  { name: 'Dr. Jeevan Thapa', position: 'MBBS, MD, DM – Gastroenterologist', img: 'Dr. Jeevan Thapa.png' },
  { name: 'Dr. Ananda Bahadur Shrestha', position: 'MBBS, DMRD – Radiologist', img: 'Dr. Ananda Bahadur Shrestha.png' },
  { name: 'Dr. Donjan Bahadur Lamechhine', position: 'MBBS, MS – ENT', img: 'Dr. Donjan Bahadur Lamechhine.png' },
  { name: 'Dr. Bonu Gaudel', position: 'MBBS, MS – ENT', img: 'Dr. Bunu Gaudel.png' },
  { name: 'Dr. Jaya Bahadur Khatri', position: 'MBBS, MD – Psychiatrist', img: 'Dr. Jaya Bahadur Khatri.png' },
  { name: 'Dr. Renu Poudel', position: 'MBBS, MD – Ophthalmologist', img: 'Dr. Renu Poudel.png' },
  { name: 'Dr. Rishna Malla', position: 'MBBS, MD – Dermatologist', img: 'Dr. Rishna Malla.png' },
  { name: 'Dr. Rajan Kumar Sharma', position: 'MBBS, MD – Neurosurgeon', img: 'Dr. Rajan Kumar Sharma.png' },
  { name: 'Dr. Arun Kadel', position: 'MBBS, MD – Cardiologist', img: 'Dr. Arun Kadel.png' },
  { name: 'Dr. Bijaya Bhahadur Pradhan', position: 'Physiotherapist', img: 'Dr. Bijaya Bhahadur Pradhan.png' },
  { name: 'Harishchandra Joshi', position: 'Physiotherapist', img: 'Harishchandra Joshi.png' },
  { name: 'Dr. Niva Shrestha', position: 'BDS – Dental Surgeon', img: 'Dr. Niva Shrestha.jpg' },
  { name: 'Dr. Padam Raj Dhungana', position: 'MBBS, MS – Senior Consultant Obsetrician Gynecologist', img: 'Dr. Padmaraj Dhungana.jpg' },
  { name: 'Dr. Anup Chapagain', position: 'MBBS, MS, MCH – Urologist', img: 'Dr. Anup Chapagain.jpg' },
  { name: 'Dr. Madan Thapa', position: 'MBBS, MD – Radiologist', img: 'Dr. Madan Thapa.jpg' },
  { name: 'Dr. Tumaya Ghale', position: 'MBBS, MS – Anesthesia', img: 'Dr. Tumaya Ghale.jpeg' },
  { name: 'Dr. Susmit Kafle', position: 'MBBS, MD – Radiologist', img: 'Dr. Susmit Kafle.jpeg' },
  { name: 'Dr. Krishna Prasad Koirala', position: 'MBBS, MS – ENT', img: 'Dr. Krishna Prasad Koirala.jpeg' },
  { name: 'Dr. Tulika Dube', position: 'MBBS, MS – ENT', img: 'Dr. Tulika Dube.jpeg' },
  { name: 'Dr. Anjita Hirachan', position: 'MBBS, MD – Ophthalmologist', img: 'Dr. Anjita Hirachan.jpeg' },
  { name: 'Dr. Saurav Aryal', position: 'MBBS, MD – Dermatologist', img: 'Dr. Saurav Aryal.jpeg' },
  { name: 'Dr. Madhu Roka', position: 'MBBS, MD, DM – Cardiologist', img: 'Dr. Madhu Roka.jpg' },
  { name: 'Dr. Bikash Khatri', position: 'MBBS, MD, DM – Nephrologist', img: 'Dr. Bikash Khatri.jpeg' },
  { name: 'Dr. Deependra Man Simang Gainda', position: 'Oncologist', img: 'Dr. Deependra Man Simang Gainda.jpg' },
  { name: 'Dr. Hari Krishna Bhandari', position: 'MBBS, MD – Consultant Physician', img: 'Dr. Hari Krishna Bhandari.jpg' },
]

function Doctors() {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="section-title">
          <h1>Specialist Doctors In Pokhara</h1>
          <p>
            Meet our dedicated professionals and specialist doctors at Fewa City Hospital. Our team provides expert
            care, combining experience and compassion to ensure the best health outcomes for our patients.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <div className="team-member" key={member.name}>
              <img src={`/doctors/${encodeURIComponent(member.img)}`} alt={member.name} />
              <h3>{member.name}</h3>
              <span className="position">{member.position}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
