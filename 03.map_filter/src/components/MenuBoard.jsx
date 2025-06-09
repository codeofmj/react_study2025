import React from 'react'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem';
import { useState } from 'react';
import MenuNav from './MenuNav';

const MenuBoard = () => {

  const [menus, setMenus] = useState(menuData);

  //메뉴버튼 클릭 시, 조건에 맞는 메뉴만 출력되는 기능구현 해보기
  //ex) '커피' 클릭 -> 아메리카노만 출력
  //    '디저트' 클릭 -> 마카롱만 출력
  //    '전체' 클릭 -> 모든 메뉴 출력
  const menuFilter = (category) =>{
    console.log('선택한 메뉴:',category);

    let filterData = menuData.filter((item)=>item.category===category);

    console.log(filterData);

    if(category === 'All'){
        //menus는 가장 최근에 조회한 정보가 저장되어 있음
        //'All'을 누르면 최근 정보로만 조회
        //import한 menuData로 초기화해줘야 전체 메뉴가 출력된다.
        setMenus(menuData);
    }else{
        setMenus(filterData);
    }
    
    
  }

  return (
    <div className='menu-board'>
        <h1>메뉴판</h1>

        <MenuNav onFilter={menuFilter}/>

        <div className='menu-list'>
            {menus.map((menu,index)=>(
                <MenuItem key={index} info={menu}/>
            ))}
        </div>
        
    </div>
  )
}

export default MenuBoard