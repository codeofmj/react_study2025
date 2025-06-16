import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <div>
        <h1>할 일 목록</h1>
        <TodoForm/>
        <hr></hr>
        <TodoList/>
    </div>
  )
}

export default Todo