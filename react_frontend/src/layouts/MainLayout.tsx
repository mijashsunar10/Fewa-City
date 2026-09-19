import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EmergencyFloat from '../components/EmergencyFloat'

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <EmergencyFloat />
    </>
  )
}

export default MainLayout
