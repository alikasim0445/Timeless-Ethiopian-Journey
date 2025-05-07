import { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#bookings" },
  ];

  return (
    <header className="bg-white shadow fixed w-full z-20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center gap-4">
      <img
            src={logo}
            alt="Timeless Ethiopia Journey Logo"
            className="h-15 w-15 rounded-full object-cover"
            onLoad={() => setLogoLoaded(true)}
            onError={() => setLogoLoaded(false)}
          />
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          
          {logoLoaded && (
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-700 whitespace-nowrap">
              Timeless Ethiopia Journey
            </div>
            
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 justify-center flex-grow">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-emerald-700 font-medium"
            >
              {item.name}
            </a>
          ))}
          <div className="flex gap-3 text-emerald-700 text-xl">
            <a href="https://wa.me/251900123456" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-emerald-700 text-2xl"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pt-4 pb-6">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 mt-4 text-emerald-700 text-xl">
              <a href="https://wa.me/251900123456" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
