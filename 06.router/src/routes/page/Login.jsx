import React from 'react'
import { Link, useNavigate } from 'react-router'

const Login = ({setAuthenticate}) => {

  const navigate = useNavigate();

  const goToHome = () => {
    setAuthenticate(true);
    navigate("/");
  }

  return (
    <div>
        <h1>Login</h1>
        <button onClick={goToHome}>로그인</button>
    </div>
  )
}

export default Login