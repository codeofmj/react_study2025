import React from 'react'
import { Link } from 'react-router'

const Home = () => {

    sessionStorage.remo
  return (
    <div>
        <h1>Home</h1>
        <Link to={"/about"}>About 이동</Link>
        <Link to={"/prdList"}>ProductList 이동</Link>
        <Link to={"/mypage"}>MyPage 이동</Link>
    </div>
  )
}

export default Home