import React from 'react';
import './style.skills.css';

function Skills() {
  const skills = [
    "React Native",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Redux Toolkit",
    "TypeScript",
    "Socket.io",
    "Git / GitHub",
    "Cloudinary"
  ];

  return (
    <div id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
