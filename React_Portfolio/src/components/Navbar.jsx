import React, { useEffect, useState } from "react";
import "ionicons";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Highlights", link: "#achievements" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        sticky
          ? "bg-gradient-to-r from-[#b7d9e0] via-[#ffffff] to-[#dae2f0] shadow-lg text-gray-800"
          : "bg-transparent text-gray-600"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-3xl font-bold tracking-tight cursor-pointer">
          <span className="text-gray-800">Subashini R</span>
        </div>
        <ul className="hidden md:flex items-center space-x-8">
          {menuLinks.map((menu, i) => (
            <li key={i} className="relative group">
              <a
                href={menu.link}
                className="py-2 px-5 font-semibold text-gray-700 transition-colors duration-300 hover:text-cyan-500"
              >
                {menu.name}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </li>
          ))}
        </ul>
        <div
          className={`text-3xl md:hidden cursor-pointer transition-colors duration-300 ${
            open ? "text-gray-800" : sticky ? "text-gray-800" : "text-gray-600"
          }`}
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-gradient-to-br from-[#b7d9e0] via-[#f2ede9] to-[#dae2f0] shadow-xl transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-start justify-start h-full space-y-10 text-lg font-semibold text-gray-800 pl-6 pt-10">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                className="transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                <a
                  href={menu.link}
                  className="py-2 px-5 block transition-colors duration-300 hover:text-cyan-500"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
