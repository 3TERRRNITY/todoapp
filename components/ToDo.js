import React from 'react'

function ToDo({todo, toggleTask, removeTask}) {
  return (
    <div key = {todo.id} className = {todo.complete ? " bg-green-400 p-3 m-3 mx-auto flex justify-center font-semibold text-white border rounded-lg shadow-md cursor-pointer" : "p-3 m-3 mx-auto flex justify-center font-semibold text-white border rounded-lg shadow-md cursor-pointer"}>
        <div className={todo.complete ? "p-3 line-through items-center cursor-pointer" : "p-3 items-center cursor-pointer"} onClick = {() => toggleTask(todo.id)}>
            {todo.task}
        </div>
        <button className = "p-3 cursor-pointer border-solid rounded-md bg-buttonColor hover:bg-red-400 text-white shadow-md" onClick = {() => removeTask(todo.id)}>
            Delete
        </button>
    </div>
  )
}

export default ToDo