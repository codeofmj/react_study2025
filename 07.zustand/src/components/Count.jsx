import React from 'react'
import { useState } from 'react'
import CountBox from './CountBox';
import useCountStore from '../stores/useCountStore';

const Count = () => {

  //const [count, setCount] = useState(0);
  const { count, increase, increaseBy, decrease } = useCountStore();

  const handleAddCount = () => {
    increase();
  }

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleAddCount}>증가+1</button>
        <button onClick={()=>increaseBy(10)}>증가+10</button>
        <button onClick={decrease}>감소-1</button>

        <CountBox/>
    </div>
  )
}

export default Count