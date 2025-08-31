import React from 'react';
import './style.education.css';

function Education() {
  const education = [
    {
      title: "Intermediate – Board of Intermediate Education Karachi",
      duration: "July 2023 – May 2025",
    },
    {
      title: "Matriculation – Board of Secondary Education Karachi",
      duration: "May 2021 – June 2023",
    },
    {
      title: "Certificate Course – Website & Mobile App Development (Jawan Pakistan)",
      duration: "Jan 2023 – Dec 2023",
    }
  ];

  return (
    <div id="education" className="education-container">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div className="edu-card" key={index}>
            <h3>{edu.title}</h3>
            <p>{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
