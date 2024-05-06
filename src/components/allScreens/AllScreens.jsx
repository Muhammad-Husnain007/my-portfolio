import React from 'react'
import Navbar from '../Screens/Navbar'
import Home from '../Screens/Home'
import Skills from '../Screens/Skills'
import Contactme from '../Screens/Contactme'
import EducationAndProjects from '../Screens/EducationAndProjects'


const AllScreens = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <EducationAndProjects />
      <Contactme />
    </div>
  )
}

export default AllScreens
