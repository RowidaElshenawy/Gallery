import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/Footer/Footer";
import Header from "../../components/shared/header/Header";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <main className="mt-[100px]  px-5 flex-1  dark:bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

