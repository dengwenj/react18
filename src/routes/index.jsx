import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

import Home from '../page/home'
import About from '../page/about'
import Message from '../page/message'
import News from '../page/News'
import Detail from '../page/detail'
import Detail2 from '../page/detail2'
import Detail3 from '../page/detail3'

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
              // params 参数
              path: 'detail/:name/:age',
              element: <Detail />
            },
            {
              // search 参数
              path: 'detail2',
              element: <Detail2 />
            },
            {
              // state 参数
              path: 'detail3',
              element: <Detail3 />
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
