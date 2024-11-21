import React from 'react'
import {useTodoContext} from '../context/todoContext'

import { useState } from 'react';

const DisplayTask = () => {


  const {tasks, toggleTask, updateTask, deleteTask} = useTodoContext();
  const [edited, setEdited] = useState<boolean>(false);
  const [currentTodo,setCurrentTodo] = useState<{id:string,text:string}>({
    id: '',
    text: '',
}) //? specifying what data we are going to store and data type to accept 

  const handleEdit = (id: string, text: string) => {
    setEdited(!edited);
    setCurrentTodo({id, text});
  }

  const handleSave = () => {
    updateTask(currentTodo.id, currentTodo.text);
    setEdited(!edited);
  }


  return (
    <main>
        <h1>DisplayTask</h1>
        <ul>
            {
              tasks.length > 0 ?
                tasks.map((todo) => (
                    <li key={todo.id}>
                        {
                          edited && todo.id === currentTodo.id ?
                          <>
                            <input type="text" value={todo.text} onChange={(e) => setCurrentTodo({id: todo.id, text: e.target.value})} /> 
                            <button onClick={() => handleSave()}>save</button>
                          </>
                          
                          :
                          <>
                          <input type="checkbox" checked={todo.completed} onChange={() => toggleTask(todo.id)} />
                          <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text.substring(0, 8)}</span>
                          <button id='edit' onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                          <button id='delete' onClick={() => deleteTask(todo.id)}>Delete</button>
                          </>
                        }
                    </li>
                )) :
                <li>No tasks</li>
            }
        </ul>
    </main>
  )
}

export default DisplayTask