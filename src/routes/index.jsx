import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

import Home from '../page/home'
import About from '../page/about'
import Message from '../page/message'
import News from '../page/News'
import Detail from '../page/detail'

export default function UseRoutes() {
  const routes = useRoutes([
    {
      path: '/home',
      element: <Home />,
      children: [
        {
          path: 'message',
          element: <Message />,
          children: [
            {
              path: 'detail/:name/:age',
              element: <Detail />
            }
          ]
        },
        {
          path: 'news',
          element: <News />
        }
      ]
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
