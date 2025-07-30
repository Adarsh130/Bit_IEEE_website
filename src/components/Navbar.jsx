import React, { useState } from "react";
import { Link } from "react-router-dom";
import bitLogo from "/src/assets/BIT-LOGO1.png";
import ieeelogo from "/src/assets/IEEE-LOGO.JPG";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Header */}
      <div className="bg-white shadow border-b border-gray-200 z-30">
        <div className="px-4 md:px-10 py-3 md:py-4">
          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-between">
            <div className="w-20 md:w-28 flex-shrink-0">
              <img src={bitLogo} alt="BIT Logo" className="w-full h-auto" />
            </div>
            <div className="text-center flex-1 px-2">
              <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-800 leading-snug">
                BUDDHA INSTITUTE OF TECHNOLOGY, GIDA, GORAKHPUR
              </h1>
              <h2 className="text-red-600 text-base sm:text-xl md:text-2xl font-semibold mt-1">
                3<sup>rd</sup> INTERNATIONAL CONFERENCE ON IoT, COMMUNICATION AND AUTOMATION TECHNOLOGY (ICICAT 2025)
              </h2>
            </div>
            <div className="w-24 md:w-32 flex-shrink-0">
              <img src={ieeelogo} alt="IEEE LOGO" className="w-full h-auto" />
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex items-center justify-between gap-2">
            <div className="w-12">
              <img src={bitLogo} alt="BIT Logo" className="w-full h-auto" />
            </div>
            <div className="flex-1 text-center leading-tight">
              <div className="text-[10px] font-bold text-gray-800">
                BUDDHA INSTITUTE OF TECHNOLOGY, GIDA, GORAKHPUR
              </div>
              <div className="text-red-600 text-[9px] font-semibold mt-1">
                3<sup>rd</sup> INTERNATIONAL CONFERENCE ON IoT, COMMUNICATION AND AUTOMATION TECHNOLOGY (ICICAT 2025)
              </div>
            </div>
            <div className="w-12">
              <img src={ieeelogo} alt="IEEE LOGO" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Nav Bar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white shadow-lg">
        <div className="flex items-center justify-between py-2 px-4 md:px-10">
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="hidden md:flex justify-center flex-wrap gap-4 md:gap-6 font-medium text-sm md:text-base w-full">
            <NavItems />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col gap-2 px-4 py-3 md:hidden bg-red-800 font-medium text-sm">
            <MobileNavItems onItemClick={closeMobileMenu} />
          </div>
        )}
      </nav>
    </>
  );
}

const NavItem = ({ to, label, icon, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="relative flex items-center gap-2 px-2 py-1 rounded transition-all hover:text-yellow-300 after:content-[''] after:block after:h-0.5 after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
  >
    {icon && <i className={`fas ${icon}`}></i>}
    {label && <span>{label}</span>}
  </Link>
);

const NavItems = ({ onItemClick }) => (
  <>
    <NavItem icon="fa-home" to="/" label="HOME" onClick={onItemClick} />
    <NavItem icon="fa-university" to="/about" label="ABOUT US" onClick={onItemClick} />
    <NavItem icon="fa-file-alt" to="/call-for-paper" label="CALL FOR PAPER" onClick={onItemClick} />

    <Dropdown
      label="COMMITTEE"
      icon="fa-users"
      onItemClick={onItemClick}
      items={[
        { to: "/committee/patrons", label: "PATRONS & CHAIRS" },
        { to: "/committee/TechnicalCommittee", label: "TECHNICAL COMMITTEE" },
        { to: "/committee/AdvisoryCommittee", label: "ADVISORY COMMITTEE" },
        { to: "/committee/VolunteerCommittee", label: "VOLUNTEER COMMITTEE" },
      ]}
    />

    <NavItem icon="fa-microphone" to="/speakers" label="SPEAKERS" onClick={onItemClick} />
    <NavItem icon="fa-book" to="/guidelines" label="GUIDELINES" onClick={onItemClick} />
    <NavItem icon="fa-edit" to="/registration" label="REGISTRATION" onClick={onItemClick} />
    <NavItem icon="fa-upload" to="/submission" label="PAPER SUBMISSION" onClick={onItemClick} />

    <Dropdown
      label="GLIMPSES"
      icon="fa-image"
      onItemClick={onItemClick}
      items={[
        { to: "/glimpses/Glimpses2024", label: "2023" },
        { to: "/glimpses/Glimpses2025", label: "2024" },
        { to: "/glimpses/Gallery", label: "Gallery" },
      ]}
    />

    <NavItem icon="fa-phone" to="/contact" label="CONTACT" onClick={onItemClick} />
  </>
);

const MobileNavItems = ({ onItemClick }) => <NavItems onItemClick={onItemClick} />;

const Dropdown = ({ label, icon, items, onItemClick }) => (
  <div className="group relative px-2 py-1 rounded cursor-pointer">
    <div className="flex items-center gap-2 hover:text-yellow-300 transition-all">
      <i className={`fas ${icon}`}></i>
      <span>{label}</span>
      <i className="fas fa-caret-down ml-1"></i>
    </div>
    <div className="absolute top-full left-0 pt-1 hidden group-hover:block bg-white text-black shadow-lg rounded-md w-64 z-50">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          onClick={onItemClick}
          className="block px-4 py-2 hover:bg-red-500 hover:text-white transition-colors duration-300 rounded"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
);

export default Navbar;