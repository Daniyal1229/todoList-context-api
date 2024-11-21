import React from 'react'
import {useTodoContext} from '../context/todoContext'

import { useState } from 'react';

const DisplayTask = () => {


  const {tasks, toggleTask, updateTask, deleteTask} = useTodoContext();
  const [edited, setEdited] = useState<boolean>(false);

  const handleEdit = (id: string, text: string) => {
    setEdited(true);
  }

  const handleSave = () => {
    setEdited(false);
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
                          edited ?
                          <>
                            <input type="text" value={todo.text} onChange={(e) => updateTask(todo.id, e.target.value)} /> 
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