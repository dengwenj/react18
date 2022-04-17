import React from 'react'
import { 
  Link, 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate
} from 'react-router-dom'

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

          {/* 前面都没匹配到才会走到这里 */}
          <Route path='/' element={<Navigate to={'/home'}/>}/>
        </Routes>
      </div>
    </Router>
  )
}
