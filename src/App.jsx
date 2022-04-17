import React from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './page/about'
import Home from './page/home'

export default function App() {
  return (
    <Router>
      <div>
        <Link to={'/home'}>home</Link>
        <Link to={'/about'}>about</Link>

        {/* Routes 相当于原来的 Switch */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}
