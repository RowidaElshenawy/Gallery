
import { Outlet } from "react-router-dom"
import Footer from "../../components/shared/Footer/Footer"
import Header from "../../components/shared/header/Header"
const MainLayout = () => {
  return (
    <div className='h-screen flex flex-col bg-red-300'>
        <Header/>
        <main className='mt-[30px]'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout
