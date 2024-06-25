import React, { useRef } from 'react'
import './style.education.css'
import pizza from '../../assets/pizza.jpg'
import olx from '../../assets/olx.jpg'
import OnMouseAnimation from './OnMouseAnimation.jsx'

const EducationAndProjects = () => {
  const animationRefs = {
    pizza: useRef(null),
    olx: useRef(null),
    education: useRef(null),
    course: useRef(null),
    paragraph: useRef(null)
    // Add more refs as needed
  };




  return (
    <div className='educationDiv'>
      <div className='div1'>
        <span className='educationSpan'>Education</span>
        <div className='education'>
          <div ref={animationRefs.education} className='matric'>
            <span>Education</span>
            <p>I passed my Matric exams in May <br /> 2023 from  the Board of Secondary Education Karachi, and
              now I am studying in the
              12th grade in the field  of Computer Science at <br />
              Adamjee Government  Science <br /> College.</p>
          </div>
          <div ref={animationRefs.course} className='inter'>
            <span>Full Stack Development</span>
            <p>I completed a course in Web and Mobile App Development from Jawan Pakistan's
              platform in December <br /> 2023,  where I acquired skills in <br />
              both  web development and mobile application development.
            </p>
          </div>
        </div>
      </div>
      <div className='div2'>
        <span className='projectSpan'>Projects</span>
        <div className='projectsRow1'>

          <div className='project1'>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7150474270580662273" height="781" width="504" frameborder="0" allowfullscreen="" title="Embedded post"
              style={{ width: 400, height: 250, }}
            >

            </iframe>
          </div>
          <div className='project2'>
            <img ref={animationRefs.pizza} src={pizza} alt="" />
          </div>
        </div>

        <div className='projectsRow2'>
          <div ref={animationRefs.paragraph} className='project3'>
            <p>
              This project is a complete backend for a YouTube-like application,
              built using Node.js and MongoDB. It provides all necessary functionalities
              for a video streaming platform, including User authentication, Video
              management, Playlists, Watch history, Tweets, Subscription, Comments,
              and Likes. <br /> <br />
              Github URL:
              <a target='_blank' href="https://github.com/Muhammad-Husnain007/Backend_Project.git">
               Muhammad-Husnain007/Backend_Project
              </a>
             
            </p>
          </div>
        </div>
      </div>
      <OnMouseAnimation refs={animationRefs} />
    </div>
  )
}

export default EducationAndProjects
