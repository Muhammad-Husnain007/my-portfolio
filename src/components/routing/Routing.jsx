import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AllScreens from '../allScreens/AllScreens'

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
