import { useEffect, useState, useRef } from "react";

import Logo from "../assets/logo.png";
import darkLogo from "../assets/logo_dark.png";
import arrowIcon from "../assets/arrow-icon.png";
import darkThemeIcon from "../assets/moon_icon.png";
import whiteThemeIcon from "../assets/sun_icon.png";
import menuIcon from "../assets/menu-black.png";
import darkMenu from "../assets/menu-white.png";
import secondMenuIcon from "../assets/close-black.png";
import darkMenuIcon from "../assets/close-white.png";

function NavBar() {
  const [dark, setIsDark] = useState(false);
  const [open, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const linkRef = useRef<HTMLUListElement | null>(null);

  // Handle theme on mount (respect localStorage)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update DOM and navbar bg color when theme changes
  useEffect(() => {
    const html = document.documentElement;
    const nav = navRef.current;

    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      nav?.classList.add("bg-[#11001F]");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      nav?.classList.remove("bg-[#11001F]");
    }
  }, [dark]);

  // Toggle dark/light mode
  const toggleTheme = () => setIsDark((prev) => !prev);

  // Scroll behavior to add background
  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      const link = linkRef.current;
      const isDark = document.documentElement.classList.contains("dark");

      if (scrollY > 50) {
        nav?.classList.remove("bg-white", "bg-[#11001F]");
        nav?.classList.add(isDark ? "bg-[#11001F]" : "bg-white", "backdrop-blur", "shadow-sm");
        link?.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
      } else {
        nav?.classList.remove("bg-white", "bg-[#11001F]", "backdrop-blur", "shadow-sm");
        link?.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
    >
      <img src={Logo} alt="logo" className="w-28 cursor-pointer mr-14 dark:hidden" />
      <img src={darkLogo} alt="dark logo" className="w-28 cursor-pointer mr-14 hidden dark:block" />

      <ul
        ref={linkRef}
        className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-ovo dark:bg-darkTheme"
      >
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">My work</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme}>
          <img src={dark ? whiteThemeIcon : darkThemeIcon} alt="theme toggle" className="w-6" />
        </button>
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-20 py-2.5 border border-grey-500 rounded-full ml-4"
        >
          Contact <img src={arrowIcon} className="w-3" alt="arrow" />
        </a>
        {/* Hamburger toggle */}
        <button className="block md:hidden ml-3" onClick={() => setIsOpen(!open)}>
          <img src={menuIcon} className="w-6 dark:hidden" />
          <img src={darkMenu} className="w-6 hidden dark:block" />
        </button>
      </div>

      {/* Mobile Nav */}
      <ul
        id="sideMenu"
        className={`fixed top-0 right-0 h-screen w-64 z-50 bg-rose-50 py-20 px-10 flex flex-col gap-6 md:hidden font-ovo dark:bg-[#2a004f] transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute right-6 top-6" onClick={() => setIsOpen(false)}>
          <img src={secondMenuIcon} className="w-5 cursor-pointer dark:hidden" />
          <img src={darkMenuIcon} className="w-5 cursor-pointer hidden dark:block" />
        </div>
        <li onClick={() => setIsOpen(false)}><a href="#top">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">My work</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
