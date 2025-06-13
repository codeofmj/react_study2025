import React from 'react'
import { useNavigate } from 'react-router'

const ProductList = () => {

  //useNavigate()
  // - 페이지를 이동할 때 사용하는 컴포넌트
  // - Link컴포넌트와 다른 점은 조건에 따라 페이지를 이동해야 할 때 활용!
  // - Link컴포넌트는 바로 이동해야 할 때 활용!
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  }

  const goToProduct = (e) => {
    if(e.target.innerText === "ProductDetail 이동"){
        navigate("/prdDetail/1")
    }else{
        navigate("/prdDetail2?pro_no=15&cate=pants")
    }
  }

  return (
    <div>
        <h1>ProductList</h1>
        <button onClick={goToHome}>Home 이동</button>
        <button onClick={goToProduct}>ProductDetail 이동</button>
        <button onClick={goToProduct}>ProductDetail2 이동</button>    
    </div>
  )
}

export default ProductList