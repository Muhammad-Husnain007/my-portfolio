import React from "react";
import { motion } from "framer-motion";
import Profile from "../../assets/profile3.jpeg";
import "./style.home.css";

export default function Home() {
  return (
    <section className="home-container" id="home">
      {/* Left Section */}
      <motion.div
        className="intro-section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm <span>Muhammad Husnain</span>
        </motion.h1>

        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Mobile Application Developer | MERN Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I specialize in building real-time, scalable, and user-friendly
          mobile apps and websites using <b>React, Node.js, Express.js</b>, and
          modern backend technologies.
        </motion.p>

        {/* Buttons with stagger animation */}
        <motion.div
          className="btn-group"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.a
            href="#projects"
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="btn btn-outline"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.a>

          {/* ✅ Fixed Resume Download */}
          <motion.a
            href="/Muhammad_Husnain_Resume.pdf"
            download="Muhammad_Husnain_Resume.pdf"
            className="btn btn-outline"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Side Profile Image */}
      <motion.div
        className="image-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.img
          src={Profile}
          alt="profile"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
