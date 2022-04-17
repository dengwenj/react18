import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const { name, age } = useParams()

  return (
    <div>
      我是{name},{age}
    </div>
  )
}
