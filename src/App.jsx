import React from 'react'
import { 
  NavLink, 
  BrowserRouter as Router, 
} from 'react-router-dom'

import UseRoutes from './routes'
import Demo1 from './demo1'

export default function App() {

  const handleClick = (e) => {
    console.log(e) // SyntheticBaseEvent 的实例 不是原生的
    console.log(e.nativeEvent.target)
  }

  return (
    <Router>
      <div>
        <Demo1 />
        <button onClick={handleClick}>点击</button>
        <NavLink to={'/home'}>home</NavLink>
        <NavLink to={'/about'}>about</NavLink>

        {/* 用的 useRoutes */}
        <UseRoutes />
      </div>
    </Router>
  )
}
