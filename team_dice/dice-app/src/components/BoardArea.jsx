import React from 'react'
import Board from './Board'

const BoardArea = ({user, com}) => {
  console.log(user, com);
  
  return (
    <div className='board-area'>
        <Board name={"나"} info={user}/>
        <Board name={"컴퓨터"} info={com}/>
    </div>
  )
}

export default BoardArea