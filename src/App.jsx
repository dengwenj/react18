import React from 'react'
import { 
  NavLink, 
  BrowserRouter as Router, 
} from 'react-router-dom'

import UseRoutes from './routes'

export default function App() {
  return (
    <Router>
      <div>
        <NavLink to={'/home'}>home</NavLink>
        <NavLink to={'/about'}>about</NavLink>

        {/* 用的 useRoutes */}
        <UseRoutes />
      </div>
    </Router>
  )
}
