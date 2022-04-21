import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Detail3() {
  const { state: { name, age } } = useLocation()
  const navigate = useNavigate()

  function handleRoute() {
    // navigate(-1)
    // navigate(1)
    navigate('/about', {
      replace: true,
      state: {
        name: 'dengwj',
        sex: '男'
      }
    })
  }

  return (
    <div>
      我是{name},{age}
      <button onClick={handleRoute}>编程式路由导航</button>
    </div>
  )
}
