import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function About() {
  const [count, setCount] = useState(0)
  const { state } = useLocation()
  console.log(state) // {name: 'dengwj', sex: '男'}

  return (
    <div>
      <h1>
        {count === 3 ? <Navigate to={'/home'} replace /> : count}
      </h1>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}
