import Logo from "../assets/logo.png";
import arrowIcon from "../assets/arrow-icon.png";
import darkThemeIcon from "../assets/moon_icon.png";
import whiteThemeIcon from "../assets/sun_icon.png"
import menuIcon from "../assets/menu-black.png"
import secondMenuIcon from "../assets/close-black.png"
import darkLogo from "../assets/logo_dark.png"
import darkMenu from "../assets/menu-black.png"
import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
function NavBar() {
  const[dark, setIsDark] = useState<boolean>(false)
  const[open, setIsOpen] = useState<boolean>(false)
  const navRef = useRef(null);
  const linkRef = useRef(null)

    useEffect  (() => {
      window.addEventListener('scroll', () => {
        if(scrollY > 50) {
          navRef.current?.classList.add("bg-white", "backdrop-blur", "shadow-sm")
          linkRef.current?.classList.remove("bg-white, shadow-sm, bg-opacity-50")

        }else{
        navRef.current?.classList.remove("bg-white", "backdrop-blur", "shadow-sm");
        linkRef.current?.classList.add("bg-white", "shadow-sm", "bg-opacity-50")
        

        }
      })
    },[])
  const openMenu = () => {
    setIsOpen(!open)
    
  }
  const toggleTheme = () => {
    setIsDark(!dark)
  }
  useEffect(()=> {
      if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  }, [dark])

  return (
      <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <img src={Logo} alt="" className="w-28 cursor-pointer mr-14 dark:hidden " />
        <img src={darkLogo} className="w-28 cursor-pointer mr-14 hidden dark:block" alt="" />
        <ul ref={linkRef} className=" hidden  md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-ovo ">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}>
            <img src={dark ? whiteThemeIcon : darkThemeIcon} alt="" className="w-6" />
          </button>
          <a
            href="contact"
            className="hidden lg:flex items-center gap-3 px-20 py-2.5 border border-grey-500 rounded-full ml-4 "
          >
            Contact <img src={arrowIcon} className="w-3" alt="" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}><img src={menuIcon} alt="" className="w-6 dark:hidden" /></button>
          <button className="block md:hidden ml-3" onClick={openMenu}><img src={darkMenu} alt="" className="w-6 hidden dark:block" /></button>

        </div>
        {/* ---mobile */}
          <ul id="sideMenu" className={`fixed top-0 right-0 h-screen w-64 z-50 bg-rose-50 py-20 px-10 flex flex-col gap-6
          transform transition-transform duration-500 ease-in-out md:hidden font-ovo ${
            open ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="absolute right-6 top-6" onClick={openMenu}>
            <img src={secondMenuIcon} alt="" className="w-5 cursor-pointer" />
          </div>
          <li onClick={openMenu}>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
  );
}

export default NavBar;
