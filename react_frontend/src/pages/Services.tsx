import './Services.css'

const services = [
  {
    img: '/services/laboratory/lab.jpg',
    title: 'Laboratory',
    description:
      'Advanced laboratories for accurate medical testing and analysis. Supporting reliable diagnosis and patient care.',
  },
  {
    img: '/services/x-ray/xray.jpg',
    title: 'X-Ray',
    description:
      'Digital X-ray imaging for fast and precise diagnosis. Ensures safety with minimal radiation exposure.',
  },
  {
    img: '/services/pharmacy/phramacy.jpg',
    title: 'Pharmacy',
    description:
      'Well-organized pharmacy with essential medicines available. Ensuring safe usage and proper guidance.',
  },
  {
    img: '/services/icu/icu.avif',
    title: 'ICU',
    description:
      'Advanced intensive care with continuous patient monitoring. Managed by skilled critical care professionals.',
  },
  {
    img: '/services/video-colonoscopy/colonsocopy.avif',
    title: 'Video Colonoscopy',
    description:
      'Camera-based examination of the large intestine. Helps in early detection of colorectal conditions.',
  },
  {
    img: '/services/ultrasonography/ultrasonography.jpeg',
    title: 'Ultrasonography',
    description:
      'Safe imaging using sound waves for diagnosis. Commonly used for organs and pregnancy assessment.',
  },
  {
    img: '/services/laparoscopy/Blausen_0602_Laparoscopy_02.png',
    title: 'Laparoscopy',
    description:
      'Minimally invasive surgical procedure using small incisions. Enables faster recovery and minimal scarring.',
  },
  {
    img: '/services/arthroscopy/arthoscopy.jpg',
    title: 'Arthroscopy',
    description:
      'Joint surgery using a small camera for precision. Improves mobility with quicker healing time.',
  },
  {
    img: '/services/ct-scan/ctscan.jpeg',
    title: 'CT Scan 160 Slice',
    description:
      'High-resolution CT imaging for detailed diagnosis. Supports accurate medical evaluation and planning.',
  },
  {
    img: '/services/video-colposcopy/coloposcopy.jpg',
    title: 'Video Colposcopy',
    description:
      'Gynecological screening of cervix and vaginal area. Helps detect abnormalities at an early stage.',
  },
  {
    img: '/services/echocardiography/echardiography.jpg',
    title: 'Echocardiography',
    description: 'Live ultrasound imaging of the heart. Assesses heart function and blood circulation.',
  },
  {
    img: '/services/nicu/nicu.jpg',
    title: 'NICU',
    description: 'Specialized intensive care for newborn infants. Designed for premature and high-risk babies.',
  },
  {
    img: '/services/eeg/eeg.jpg',
    title: 'EEG',
    description: 'Non-invasive test to record brain activity. Used for diagnosing neurological disorders.',
  },
  {
    img: '/services/video-endoscopy/endoscopy.jpeg',
    title: 'Video Endoscopy',
    description: 'Internal organ examination using a flexible camera. Helps in diagnosis and treatment planning.',
  },
  {
    img: '/services/rirs-hollet/rirshollet.jpg',
    title: 'RIRS-HOLLET',
    description:
      'Laser-based kidney stone treatment without open surgery. Ensures quicker recovery and minimal discomfort.',
  },
  {
    img: '/services/pft/pft.webp',
    title: 'PFT',
    description: 'Diagnostic test to evaluate lung function. Helps detect asthma and respiratory conditions.',
  },
  {
    img: '/services/turp-turbt/turp.jpg',
    title: 'TURP / TURBT',
    description:
      'Minimally invasive urological procedures via urethra. Treats prostate enlargement and bladder tumors.',
  },
  {
    img: '/services/urs-icpl/ursicpl.png',
    title: 'URS-ICPL',
    description: 'Endoscopic treatment for urinary stone removal. Provides effective results with minimal invasion.',
  },
]

function Services() {
  return (
    <section className="services-page-outer" id="services-section">
      <div className="services-page-inner">
        <h1 className="services-page-title">24/7 Hospital Service in Pokhara</h1>

        <div className="services-page-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card-icon">
                <img src={service.img} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
