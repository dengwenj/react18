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
      {/* params 参数 */}
      <NavLink to={`detail/${person.name}/${person.age}`}>detail</NavLink>
      {/* search 参数 */}
      <NavLink to={`detail2?name=${person2.name}&age=${person2.age}`}>detail2</NavLink>
      {/* state 参数 */}
      <NavLink 
        to='detail3' 
        state={{
          name: 'hmm',
          age: 23
        }}
      >
        detail3
      </NavLink>

      {/* 路由占位 */}
      <Outlet />
    </div>
  )
}
