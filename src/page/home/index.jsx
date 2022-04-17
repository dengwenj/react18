import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <NavLink to='message'>message</NavLink>
      <NavLink to='news'>news</NavLink>

      {/* 指定路由组件呈现的位置 */}
      <Outlet />
    </div>
  )
}
