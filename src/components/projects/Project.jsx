import React from 'react';
import './style.project.css';
import WhatsApp from '../../assets/whatsapp.jpeg';
import Olx from '../../assets/olx.jpeg';
import Visit from '../../assets/Visit.png';
import Youtube from '../../assets/youtube.jpeg';

function Project() {
  const projects = [
    {
      title: "Chat App",
      image: WhatsApp,
      desc: "Real-time messaging app with Socket.io, Firebase Auth, and live location sharing.",
      link: "https://github.com/Muhammad-Husnain007/ChatAppBackend",
      demoLink: "https://www.youtube.com/watch?v=-gp_T3f8IGE&t=31s",
    },
    {
      title: "OLX Clone",
      image: Olx,
      desc: "E-commerce platform with product listing, categories, and secure image uploads.",
      link: "https://github.com/Muhammad-Husnain007/Olx-Ecommerce-Clone",
      demoLink: "https://www.linkedin.com/feed/update/urn:li:activity:7150474412637552641/?originTrackingId=zd4nTzbCTAqjZhWtmuqeKw%3D%3D",
    },
    {
      title: "YouTube Clone (Backend)",
      image: Youtube,
      desc: "Backend APIs for video sharing platform with subscriptions, likes, and playlists.",
      link: "https://github.com/Muhammad-Husnain007/Backend_Project",
      demoLink: "https://github.com/Muhammad-Husnain007/Backend_Project",
    }
  ];

  return (
    <div id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {/* Image + Overlay */}
            <div
              className="image-container"
              onClick={() => window.open(project.demoLink, "_blank")}
            >
              <img
                src={project.image}
                alt={project.title}
                className="main-image"
              />
              <div className="overlay">
                <img className="overlay-icon" src={Visit} alt="visit-icon" />
              </div>
            </div>


            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <button className="viewCode-btn">
              <a href={project.link} target="_blank" rel="noreferrer">View Code</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
