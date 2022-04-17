import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Message() {
  const person = {
    name: 'dwj',
    age: 22
  }
  return (
    <div>
      <NavLink to={`detail/${person.name}/${person.age}`}>detail</NavLink>

      <Outlet />
    </div>
  )
}
