import React from 'react'

const App2 = () => {

  let name = prompt("너의 이름은?");

  //날짜,시간 관련 정보를 가진 객체
  let today = new Date();

//   console.log(today);
//   console.log(today.toLocaleDateString()); //현지 시간 기준 날짜(년/월/일) 반환
//   console.log(today.getMonth()+1); // 0~11 값으로 반환 -> +1 더해주는 작업 필요
  
  let date = today.toLocaleDateString();
  let month = today.getMonth()+1;
  let season = "";

  if(month >= 3 && month <= 5){ 
    season = "봄";
  }else if(month >= 6 && month <= 8){
    season = "여름";
  }else if(month >= 9 && month <= 11){
    season = "가을";
  }else{
    season = "겨울";
  }

  return (
    <div>
        <h1>{date}</h1>
        <hr/>
        <p>{name}님 지금은 {season}입니다. 좋은 하루 보내세요:)</p>
    </div>
  )
}

export default App2