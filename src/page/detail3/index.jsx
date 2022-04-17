import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail3() {
  const { state: { name, age } } = useLocation()
  return (
    <div>
      我是{name},{age}
    </div>
  )
}
