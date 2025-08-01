
import { useState } from "react"
import HeaderBasket from "../../gallery/HeaderBasket/HeaderBasket"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";



type TToggleProps={
    toggleDarkMode:()=>void;
    darkMode:boolean
}

const Header = ({toggleDarkMode,darkMode}:TToggleProps) => {
    const[navBtnClicked,isNavBtnClicked]=useState(false)
  return (
        <nav className="bg-gray-300 border-gray-200 dark:bg-gray-900 dark:border-b-2 fixed left-0 right-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse md:w-[70%]">
                    <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">Products Gallery</span>
                </Link>
                <button onClick={toggleDarkMode} className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-xl mr-3"> {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</button>
                <button onClick={()=>isNavBtnClicked(!navBtnClicked)} data-collapse-toggle="navbar-default" type="button" className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div  className={`${navBtnClicked? "block" : "hidden"}   w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to={"/"} className={({isActive})=>`block py-2 px-3   rounded-sm md:bg-transparent hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 ${isActive && "text-blue-700 " }`} aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/cart"} className={({isActive})=>`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive && "text-blue-700" }`}>
                                <HeaderBasket/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Header



