import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const RefExam = () => {

  let countVar = 0;
  const [countState, setCountState] = useState(0);
  let countRef = useRef(0);

  const handleClick = () => {
    countVar += 1;
  }

  const handleClick2 = () => {
    setCountState(countState+1);
  }

  const handleClick3 = () => {
    countRef.current += 1;
  }

  const print = () => {
    console.log('var:', countVar);
    console.log('state:', countState);
    console.log('ref:', countRef);
  }

  return (
    <div>
        <h1>Ref 실습</h1>
        <div>
            <p>var: {countVar}</p>
            <p>state: {countState}</p>
            <p>ref: {countRef.current}</p>
        </div>
        <div>
            <button onClick={handleClick}>var증가</button>
            <button onClick={handleClick2}>state증가</button>
            <button onClick={handleClick3}>ref 증가</button>
            <button onClick={print}>출력</button>
        </div>
    </div>
  )
}

export default RefExam