import {create} from "zustand"

const useTodoStore = create((set)=>({
    todos:[],
    addTodo:(todo, date)=>set((state)=>({
        todos:[...state.todos, {id:Date.now() ,todo, date}]
    }))
}))

export default useTodoStore