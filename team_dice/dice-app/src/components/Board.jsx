import React from 'react'

const Board = ({name, info}) => {

  console.log(name, info);
  
  return (
    <div>
        <h4>{name}</h4>
        <img src={info.imgPath}/>
        <div>
            <p>현재 점수는?</p>
            <p>{info.score}</p>
        </div>
    </div>
  )
}

export default Board