
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

function MainLayout() {
  return (
    <>

        <Navbar />
      <main>
        <div className="px-4 md:px-6 pt-12 pb-24 w-full xl:w-[100%] space-y-6">
        <Outlet />
        </div>
      </main>
      <Footer />
   
    </>
  )
}

export default MainLayout