import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AllScreens from '../screens/AllScreens/allScreens.jsx'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllScreens />} />
      </Routes>
    </Router>
  )
}

export default Routing
