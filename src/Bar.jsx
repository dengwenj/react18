import React, { useContext, useEffect } from "react"
import { UserValue } from "./App"

export default function Bar() {
  const user = useContext(UserValue)
  console.log(user)

  useEffect(() => {
    console.log(user);
  })
  return (
    <div>{user?.name}</div>
  )
}
