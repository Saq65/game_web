import Header from '../components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout