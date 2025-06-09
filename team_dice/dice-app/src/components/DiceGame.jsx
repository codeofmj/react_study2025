import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'

/*
  1.사용자 "던지기" 버튼을 눌렀을 때, 랜덤으로 숫자가 생성된다. (1~6)

  2.생성된 숫자로 주사위 눈 이미지를 화면에 출력한다.

  3.사용자와 컴퓨터의 주사위 눈을 비교한다.
   - 사용자가 이겼을 경우: 사용자의 스코어 +1
   - 컴퓨터가 이겼을 경우: 컴퓨터의 스코어 +1

  4."초기화" 버튼을 눌렀을 때, 스코어와 주사위 눈이 초기설정값으로 바뀐다.
   - 주사위 눈 : 1
   - 스코어: 0
*/
const DiceGame = () => {

  const imgPath = 'src/assets/img/img/dice';

  const [userScore, setUserScore] = useState(0);
  const [userDiceImg, setUserDiceImg] = useState(`${imgPath}1.png`);

  const [comScore, setComScore] = useState(0);
  const [comDiceImg, setComDiceImg] = useState(`${imgPath}1.png`);
  
  //주사위 던지기 기능
  const throwDice = () => {
    //alert('던지기 실행');

    //주사위 눈 생성
    let userIndex = parseInt(Math.random()*6)+1;
    let comIndex = parseInt(Math.random()*6)+1;

    //주사위 눈 이미지 초기화
    setUserDiceImg(`${imgPath}${userIndex}.png`);
    setComDiceImg(`${imgPath}${comIndex}.png`);
    
    //실습) 주사위 눈 비교 -> 이긴 쪽 +1 증가
    if(userIndex === comIndex){
      alert("무승부!");
    }else if(userIndex > comIndex){
      setUserScore(userScore+1);
    }else {
      setComScore(comScore+1);
    }

  }

  //초기화 기능
  const initDice = () => {
    alert('초기화 실행');
  }

  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice}/>
        <BoardArea 
          userDiceImg={userDiceImg} 
          comDiceImg={comDiceImg}
          userScore={userScore}
          comScore={comScore}
          />
    </div>
  )
}

export default DiceGame