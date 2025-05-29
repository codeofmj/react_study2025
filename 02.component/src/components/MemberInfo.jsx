import React from 'react'

const MemberInfo = ({teamNm, memberNm}) => {
  return (
    <div className='team-info'>
        <h4>{teamNm}</h4>
        <span>{memberNm}</span>
    </div>
  )
}

export default MemberInfo