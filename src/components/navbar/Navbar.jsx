import React, { useState } from 'react';
import './style.navbar.css';
import menuIcon from '../../assets/menu.png';   // hamburger
import closeIcon from '../../assets/close.png'; // close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // jab link click ho toh menu close karna
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo / Name */}
        <p className="logo">Muhammad <span>Husnain</span></p>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>

        {/* Mobile Toggle */}
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu"
          className={`menu-toggle ${menuOpen ? "close-icon" : "menu-icon"}`}
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
};

export default Navbar;
