
import { Outlet } from "react-router-dom"
import Footer from "../../components/shared/Footer/Footer"
import Header from "../../components/shared/header/Header"
const MainLayout = () => {
  return (
    <div className='h-screen flex flex-col'>
        <Header/>
          <main className='mt-[30px]'>
              <Outlet/>
          </main>
        <Footer/>
    </div>
  )
}

export default MainLayout
