import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Home from '../../components/home/Home'
import Project from '../../components/projects/Project'
import Skills from '../../components/skills/Skills'
import Education from '../../components/education/Education'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import GoToTopButton from '../../components/home/GoTop.jsx'

function AllScreens() {
  return (
    <div className=''>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <GoToTopButton />
    </div>
  )
}

export default AllScreens