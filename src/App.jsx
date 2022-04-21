import React, { useState } from 'react'

export default function App() {
  /**
   * 参数和返回值：
   * 参数：作用是给创建出来的状态一个默认值
   * 返回值：数组，元素1：当前 state 的值，元素2：设置新的值时，使用的一个函数
   */
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
