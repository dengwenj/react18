import React, { useState, useEffect, createContext } from 'react'
import Foo from './Foo'

export const UserValue = createContext()

export default function App() {
  /**
   * 参数和返回值：
   * 参数：作用是给创建出来的状态一个默认值
   * 返回值：数组，元素1：当前 state 的值，元素2：设置新的值时，使用的一个函数
   */
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      console.log('更新和卸载的时候会被调用')
    }
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <UserValue.Provider value={{ name: 'dengwj', age:22 }}>
        <Foo />
      </UserValue.Provider>
    </div>
  )
}
