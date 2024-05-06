import React, { useState, useEffect, useRef } from 'react'
import './style.home.css'
import github from '../../assets/github.png'
import facebook from '../../assets/facebook.png'
import linekin from '../../assets/linkedin.png'
import gmail from '../../assets/email.png'
import hiiHand from '../../assets/waving-hand.png'
import resume from '../../assets/Resume.jpg'
import resumePdf from './Resume.pdf'
import OnMouseAnimation from './OnMouseAnimation.jsx'

const Home = () => {
  const [handAnimation, setHandAnimation] = useState(false);

  const animationRefs = {
    resume: useRef(null),
    resumeButton: useRef(null),
    contactButton: useRef(null),
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setHandAnimation((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollContact = (distance) => {
    window.scrollBy({
      top: 2150,
      behavior: 'smooth'
    })
  }
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Muhammad-Husnain-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mainHome'>
      <div className='divLeft'>
        <span>
          Hi, I'm Husnain{' '}
          <img
            src={hiiHand}
            alt="hii"
            className={handAnimation ? 'waving-hand' : ''}
           
          />
        </span>
        <p>
          A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
        </p>
        <div className='socialImages'>
          <a href="https://github.com/Muhammad-Husnain007" target="_blank"><img src={github} alt="" /> </a>
          <a href="mailto:hasnainilyas007@gmail.com" target="_blank"> <img src={gmail} alt="" /> </a>
          <a href="https://www.linkedin.com/in/muhammad-husnain-617b5a282/" target="_blank"> <img src={linekin} alt="" /> </a>
          <a href="https://www.facebook.com/hasnai.khan.948" target="_blank"> <img src={facebook} alt="" /> </a>
        </div>
        <button ref={animationRefs.contactButton} onClick={scrollContact}>Contact Me</button>
      </div>
      <div className='divRight'>

        <img ref={animationRefs.resume} src={resume} alt="" />
        <button  ref={animationRefs.resumeButton}  onClick={downloadResume}>Download Resume</button>
      </div>
      <OnMouseAnimation refs={animationRefs} />
    </div>
  )
}

export default Home