import React, { useState } from 'react'
import ToDoForm from './ToDoForm';
import ToDo from "./ToDo";


function Todos() {
    const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substring(2,9),
                task: userInput,
                complete: false
            } 
        setTodos([...todos, newItem])
        }
    };

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    };

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
            )
        ])
    };

  return(
    <>
    <ToDoForm addTask = {addTask} />
    {todos.map((todo ) => {
        return(
            <ToDo
                todo={todo}
                key = {todo.id} 
                toggleTask = {handleToggle}
                removeTask = {removeTask}/>)
    })}
    </>
    
  ) 
}

export default Todos
