import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./style.about.css";

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-content">

         <div className="about-image">

          <img src="/animation.gif" alt="" />
         </div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2>About Me</h2>
          <p>
            Hi, I'm <span>Muhammad Husnain</span> — a passionate and results-driven
            <strong> Full Stack Developer</strong> with hands-on experience in designing,
            developing, and deploying modern, scalable, and user-centric digital solutions.
          </p>

          <p>
            I specialize in building responsive web applications, seamless mobile apps,
            and secure backend systems using technologies like
            <b> React, Node.js, Express.js, MongoDB, Firebase, and Cloudinary</b>.
            My focus is on creating efficient, maintainable, and performance-driven products
            that solve real-world problems.
          </p>

          <p>
            I am deeply committed to <b>continuous learning</b> and staying up-to-date
            with the latest technologies in web and mobile development.
            My goal is to keep evolving as a full-stack and mobile developer,
            while contributing to projects that make a meaningful impact.
          </p>

          <a href="#contact" className="btn-about">
            Contact Me
          </a>
        </motion.div>
      </div>

    </div>
  );
}

export default About;
