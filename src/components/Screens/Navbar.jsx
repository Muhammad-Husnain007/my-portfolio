import React from 'react'
import './style.navbar.css'
import Menue from '../../assets/menu.png'
const Navbar = () => {
  const scrollTo = (distance) => {
    window.scrollBy({
      top: distance,
      behavior: 'smooth'
    });
  };
  const scrollToSkills = () => {
    scrollTo(700); // Scrolls 1000 pixels
  };

  const scrollToProjects = () => {
    scrollTo(1750); // Scrolls 2000 pixels
  };
  const scrollToEducation = () => {
    scrollTo(1350); // Scrolls 2000 pixels
  };
  const scrollToContact = () => {
    scrollTo(2150); // Scrolls 3000 pixels
  };
  
  return (
    <div className='main-div'>
      <p>Muhammad Husnain</p>
      <ul>
        <li onClick={scrollToSkills}>Skills</li>
        <li onClick={scrollToProjects}>Projects</li>
        <li onClick={scrollToEducation}>Education</li>
        <li onClick={scrollToContact}>Contact Me</li>
      </ul>
      <img className='menue-img' src={Menue} alt="" />
      {/* <div className='for-Menue'>

      </div> */}
    </div>
  );
};

export default Navbar

