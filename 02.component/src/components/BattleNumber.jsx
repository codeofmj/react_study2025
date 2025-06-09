import React, { useState } from 'react'

/*
    실습) 숫자 맞추기
    0. 사용자(user), 컴퓨터(com), 결과값(result)에 대한 useState() 초기화하기

    1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기(1~3)
      - parseInt(Math.random() * 3) + 1

    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
      - 정답인 경우 -> "정답입니다~!"
      - 틀린 경우 -> "땡~!"
      * 누른 버튼의 값 가져오는 방법 -> event.target.innerText
*/
const BattleNumber = () => {

  const [user, setUser] = useState(0);
  const [com, setCom] = useState(0);
  const [result, setResult] = useState("");

  const handleClick = (e) => {

    let comNum = parseInt(Math.random() * 3) + 1;
    let userNum = parseInt(e.target.innerText);

    setCom(comNum);
    setUser(userNum);

    setResult(userNum===comNum?"정답입니다!":"땡~!");
  }

  return (
    <div>
        <p>
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
        </p>
        <p>내가 입력한 숫자: {user}</p>
        <p>랜덤 숫자: {com}</p>
        <p>{result}</p>
    </div>
  )
}

export default BattleNumber