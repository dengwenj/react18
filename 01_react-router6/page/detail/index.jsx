import React from 'react'
import { useParams, useMatch } from 'react-router-dom'

export default function Detail() {
  const { name, age } = useParams()
  const match = useMatch('/home/message/detail/:name/:age')
  console.log(match)

  return (
    <div>
      我是{name},{age}
    </div>
  )
}
