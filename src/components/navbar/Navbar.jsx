import React, { useState } from 'react';
import './style.navbar.css';
import menuIcon from '../../assets/menu.png';   // hamburger
import closeIcon from '../../assets/close.png'; // close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo / Name */}
        <p className="logo">Muhammad <span>Husnain</span></p>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Toggle */}
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu"
          className="menu-toggle"
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
};

export default Navbar;
