import { useState, useEffect } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-md fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
         <div className="container  flex justify-between items-center py-4 px-6">
      <nav className="max-w-7xl   sm:px-6 lg:px-8 flex justify-end items-center lg:gap-50 sm:gap-5 ">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src={logo}
            alt="Timeless Ethiopia Journey Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover transition-all duration-300"
            onLoad={() => setLogoLoaded(true)}
            onError={() => setLogoLoaded(false)}
          />
          {logoLoaded && (
            <h1
              className={`text-lg sm:text-sm md:text-2xl font-bold text-emerald-700 whitespace-nowrap transition-all duration-300 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              Timeless Ethiopia Journey
            </h1>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm sm:text-base text-gray-700 hover:text-emerald-700 font-medium transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex gap-2 sm:gap-3 text-emerald-700 text-lg sm:text-xl">
            <a href="https://wa.me/251900123456" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity"><FaWhatsapp /></a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity"><FaInstagram /></a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-3xl focus:outline-none">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-emerald-700 text-2xl hover:opacity-80 transition-opacity"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg px-4 py-4 fixed top-0  w-fit h-fit  transition-transform duration-300 flex flex-col items-center justify-center md:hidden">
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-700 hover:text-emerald-700 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 mt-3 text-emerald-700 text-lg">
              <a href="https://wa.me/251900123456" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity"><FaWhatsapp /></a>
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity"><FaInstagram /></a>
            </div>
          </nav>
        </div>
        
      )}
      </div>
    </header>
  );
}

