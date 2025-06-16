import React from 'react'
import useTodoStore from '../stores/useTodoStore'

const TodoList = () => {

  const {todos} = useTodoStore();

  return (
    <div>
        {todos && todos.map((item)=>(
            <p key={item.id}>{item.todo}({item.date})</p>
        ))}
    </div>
  )
}

export default TodoList