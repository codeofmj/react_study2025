import React from 'react'

// filter()
// - 배열 내 요소 중 조건에 부합한 요소를 새로운 배열로 묶어서 반환하는 함수
// - map() 처럼 출력하는 것은 아니기 때문에 조건을 확인할 때 filter()로 처리하고
//   출력은 map()로 활용
const FilterExam = () => {

  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let result = numbers.filter((number)=> number%2===1);

  let members = [
    {id:1, name:'박수현', age:25, gender:'W'},
    {id:2, name:'류이수', age:30, gender:'M'},
    {id:3, name:'임명진', age:35, gender:'M'},
  ];

  let resultMembers = members.filter((member)=>member.age >= 30);

  return (
    <div>
        {result.map((number)=>(
            <div>{number}</div>
        ))}
        <hr/>
        {resultMembers.map((member)=>(
            <div key={member.id}>{member.name}</div>
        ))}
    </div>
  )
}

export default FilterExam