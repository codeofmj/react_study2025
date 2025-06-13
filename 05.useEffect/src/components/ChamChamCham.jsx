import React, { useEffect, useState } from 'react'

/*
    실습) 참참참 게임
    1. 사용자는 공격, 컴퓨터는 수비 역할입니다.
    2. '좌','정면','우' 중 하나를 클릭했을 때, 사용자와 컴퓨터의 선택을 비교합니다.
     - 같은 선택일 경우: 사용자의 승리!
     - 다른 선택일 경우: 컴퓨터의 승리!
    3. 승리에 대한 결과를 화면에 출력합니다.

    * '좌','정면','우' 값은 배열로 만들어서 활용할 것!
    * 사용자, 컴퓨터, 결과값 총 3개의 state 생성할 것!

*/

const ChamChamCham = () => {
  const [user, setUser] = useState("");
  const [com, setCom] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    let choices = ['좌','정면','우'];
    let userChoice = e.target.innerText;
    let comChoice = choices[parseInt(Math.random()*choices.length)];

    setUser(userChoice);
    setCom(comChoice);  
  }

  useEffect(()=>{
    if(user === '' || com === '') return;
    // if(user === com){
    //     setResult("사용자의 승리!");
    // }else{
    //     setResult("컴퓨터의 승리...");
    // }

    user === com ? setResult("사용자의 승리!"): setResult("컴퓨터의 승리...");

  },[user,com]);

  return (
    <div>
        <h1>참참참 게임</h1>
        <h4>나의 선택:{user}</h4>
        <h4>컴퓨터의 선택:{com}</h4>
        {result === ""?(<h1></h1>):<h4>게임 결과:{result}</h4>}

        {/* 
            ""(공백)은 false로 인식하기 때문에 오른쪽의 태그를 출력하지 않음
            result state에 값이 초기화되면 true로 인식하면서 결과값을 출력
        */}
        {result && <h4>게임 결과:{result}</h4>}
        <div>
            <button onClick={handleClick}>좌</button>
            <button onClick={handleClick}>정면</button>
            <button onClick={handleClick}>우</button>
        </div>
    </div>
  )
}

export default ChamChamCham