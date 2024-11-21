import React from 'react'
import { useState } from 'react';
// import { TodoListContext } from '../context/todoContext';
import { useTodoContext } from '../context/todoContext';

const AddTask = () => {
    const [input, setInput] = useState<string>('');

    const {addTask} = useTodoContext();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addTask(input);
        setInput('');
    }  
  return (
    <section className='add-task'>
        <header>
            <h1>Task List</h1>
        </header>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Add Task' 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    </section>
  )
}

export default AddTask