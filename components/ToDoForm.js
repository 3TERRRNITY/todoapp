import { Input } from 'postcss'
import React, { useState } from 'react'

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit(e)
    }
  };

  return (
    <form onSubmit = {handleSubmit} className = "p-3 mx-auto flex items-center justify-center">
      <input className = "p-2 m-2 rounded-xl shadow-xl cursor-pointer focus:outline-none focus:ring focus:ring-buttonColor" value={userInput} type = 'text' onChange = {handleChange} onKeyDown = {handleKeyPress} placeholder = 'input your tasks' />
      <button className = "border-solid bg-buttonColor p-2 rounded-xl shadow-lg text-white hover:bg-red-400">Save</button>
    </form>
  )
}

export default ToDoForm