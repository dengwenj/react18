import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail2() {
  const location = useLocation()
  console.log(location)

  const [search, setSearch] = useSearchParams()
  const name = search.get('name')
  const age = search.get('age')

  return (
    <div>
      我是{name},{age}
      <button onClick={() => setSearch('name=xx&age=10')}>setSearch</button>
    </div>
  )
}
