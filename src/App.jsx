import React from 'react'
import { 
  NavLink, 
  BrowserRouter as Router, 
} from 'react-router-dom'

import UseRoutes from './routes'
import Demo1 from './demo1'

export default function App() {
  return (
    <Router>
      <div>
        <Demo1 />
        <NavLink to={'/home'}>home</NavLink>
        <NavLink to={'/about'}>about</NavLink>

        {/* 用的 useRoutes */}
        <UseRoutes />
      </div>
    </Router>
  )
}
