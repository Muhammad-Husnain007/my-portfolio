import React from 'react';
import './style.project.css';
import WhatsApp from '../../assets/whatsApp.jpeg';
import Olx from '../../assets/olx.jpeg';
import Visit from '../../assets/visit.png';
import Youtube from '../../assets/youtube.jpeg';
import ndisync from '../../assets/ndisync.jpg';
import client from '../../assets/client.jpg';
import dashboard from '../../assets/dashboard.jpg';
import UsaPublishing from '../../assets/usaPub.jpg';
import techSeller from '../../assets/techseller.jpg';

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
    },
    {
      title: "NdiSync Website",
      image: ndisync,
      desc: "Developed the frontend of the NdiSync app, creating a responsive and user-friendly interface for video sharing, including features like subscriptions, likes, and playlists.",
      link: "https://ndisync.ai/",
      demoLink: "https://ndisync.ai/",
    },
    {
      title: "ClassyShop Ecommerce Website",
      image: client,
     desc: "A modern and responsive ecommerce website for ClassyShop, featuring smooth product browsing, secure checkout, user authentication, and dynamic inventory management.",
      link: "https://github.com/Muhammad-Husnain007/Ecommerce-Website",
      demoLink: "https://github.com/Muhammad-Husnain007/Ecommerce-Website",
    },
    {
      title: "ClassyShop Dashboard",
      image: dashboard,
     desc: "A sleek and intuitive admin dashboard for ClassyShop, featuring seamless management of products, users, and orders with real-time analytics and reports.",
      link: "https://github.com/Muhammad-Husnain007/Ecommerce-Website",
      demoLink: "https://github.com/Muhammad-Husnain007/Ecommerce-Website",
    },
    {
  title: "USA Publishing Group",
  image: UsaPublishing,
  desc: "Worked on UI improvements and updates for USA Publishing Group, enhancing user experience and interface consistency across the platform.",
  link: "https://usapublishinggroup.com/",
  demoLink: "https://usapublishinggroup.com/",
},
{
  title: "TechSeller USA",
  image: techSeller,
  desc: "Contributed to UI design changes and visual updates for TechSeller USA, focusing on a modern and responsive interface for better usability.",
  link: "https://techsellerusa.com/",
  demoLink: "https://techsellerusa.com/",
},
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
