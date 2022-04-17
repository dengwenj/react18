import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

import Home from '../page/home'
import About from '../page/about'

export default function UseRoutes() {
  const routes = useRoutes([
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/',
      element: <Navigate to={'/home'}/>
    }
  ])

  return routes
}
