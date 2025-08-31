import React from 'react';
import { motion } from 'framer-motion';
import './style.about.css';
import profileImg from '../../assets/profile3.jpeg'; // apni image ka path daalna

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        {/* Left side - Image with animation */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.img
            src={profileImg}
            alt="Muhammad Husnain"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Right side - Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span>Muhammad Husnain</span>, a passionate 
            <strong> Mobile Application Developer</strong> with hands-on experience 
            in building real-time mobile apps and scalable backends.
          </p>
          <p>
            I enjoy crafting clean UI, smooth user experiences, and secure API 
            integrations. With expertise in <b>React Native, Node.js, Express.js, MongoDB, 
            and Firebase</b>, I love turning ideas into functional applications.
          </p>
          <a href="#contact" className="btn-about">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default About;
