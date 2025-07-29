import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-100 shadow-md px-6 py-4 sticky top-0 z-50 flex items-center justify-between">
      <h1 className="text-xl font-bold text-blue-800">Abdul Baseer</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-blue-700 font-medium text-lg">
        {["home", "education", "experience", "projects", "contact"].map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-blue-500 capitalize"
          >
            {section === "contact" ? "Contact Me" : section}
          </ScrollLink>
        ))}
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden text-blue-800 text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown (absolutely positioned) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-100 flex flex-col gap-4 px-6 py-4 text-blue-700 font-medium text-base shadow-md md:hidden">
          {["home", "education", "experience", "projects", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-500 capitalize"
            >
              {section === "contact" ? "Contact Me" : section}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
