import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Departments from './pages/Departments'
import Doctors from './pages/Doctors'
import Services from './pages/Services'
import CollegeProgramme from './pages/CollegeProgramme'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import FewaCityHospitalQR from './pages/FewaCityHospitalQR'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Standalone page, no header/footer */}
        <Route path="/fewa-city-hospital" element={<FewaCityHospitalQR />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/department" element={<Departments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/college-programme" element={<CollegeProgramme />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
