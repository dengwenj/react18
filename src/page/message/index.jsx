import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Message() {
  const person = {
    name: 'dwj',
    age: 22
  }
  const person2 = {
    name: 'ww',
    age: 17
  }
  return (
    <div>
      <NavLink to={`detail/${person.name}/${person.age}`}>detail</NavLink>
      <NavLink to={`detail2?name=${person2.name}&age=${person2.age}`}>detail2</NavLink>

      <Outlet />
    </div>
  )
}
