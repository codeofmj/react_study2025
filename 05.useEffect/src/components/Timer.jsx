import React, { useEffect } from 'react'

const Timer = () => {

  useEffect(()=>{
    const interval = setInterval(()=>{
        console.log("1초마다 실행");
    },1000);

    //Unmounting(앱 종료)에 대한 처리
    return () => {
        console.log("타이머 종료");
        clearInterval(interval);
    }

  },[])

  return (
    <div>Timer</div>
  )
}

export default Timer