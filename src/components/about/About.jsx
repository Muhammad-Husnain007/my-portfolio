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
<<<<<<< HEAD
       <div className="about-text">
  <h2>About Me</h2>
   <p>
=======
        <div className="about-text">
          <h2>About Me</h2>
          <p>
>>>>>>> ef0e2be (Fix mobile scroll issue in Contact form and clear inputs after submit)
            Hi, I'm <span>Muhammad Husnain</span>, a dedicated
            <strong>MERN Stack & Mobile Application Developer</strong> with a strong passion
            for building modern, scalable, and user-friendly digital solutions.
            I specialize in crafting seamless mobile apps, responsive websites, and
            secure backend systems that solve real-world problems.
          </p>

          <p>
            I have hands-on experience working on <b>real-time projects</b>, including
            mobile applications, portfolio websites, and backend services.
            My expertise includes <b>React, React Native, Node.js, Express.js, MongoDB,
              Firebase, and Cloudinary</b>, allowing me to deliver both frontend and backend
            solutions with efficiency.
          </p>

          <p>
            💼 Worked as a <b>Backend Developer at Astral Developer LLC</b>, where I contributed
            to developing and optimizing backend systems, integrating APIs, and ensuring secure,
            scalable solutions.
          </p>

          <p>
            Worked as a <b>React Native Developer</b>, where I collaborated with teams
            to develop and optimize applications, integrate APIs, and enhance user
            experiences. This role helped me strengthen my problem-solving mindset,
            teamwork, and project delivery skills.
          </p>
<<<<<<< HEAD


          <p>
            I am always eager to <b>learn new technologies</b>, take on challenging projects,
            and contribute to impactful ideas. My goal is to grow as a full-stack and
            mobile developer while delivering high-quality solutions that make a difference.
          </p>
=======
>>>>>>> ef0e2be (Fix mobile scroll issue in Contact form and clear inputs after submit)


          <p>
            I am always eager to <b>learn new technologies</b>, take on challenging projects,
            and contribute to impactful ideas. My goal is to grow as a full-stack and
            mobile developer while delivering high-quality solutions that make a difference.
          </p>


          <a href="#contact" className="btn-about">Contact Me</a>
        </div>

      </div>
    </div>
  );
}

export default About;
