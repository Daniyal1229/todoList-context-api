import React, { createContext, useState, ReactNode, useContext} from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListContextType {
  tasks: Todo[];
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, text: string) => void;
  toggleTask: (id: string) => void;
}

// export const TodoListContext = createContext<TodoListContextType | undefined>(undefined);

export const TodoListContext = createContext<TodoListContextType| undefined>(
    undefined
//   tasks: [],
//   addTask: (text) => {},
//   deleteTask: () => {},
//   updateTask: () => {},
//   toggleTask: () => {},
)

export const useTodoContext = () => {
    const context = useContext(TodoListContext);
    if (!context) {
      throw new Error('useTodoContext must be used within a TodoListContextProvider');
    }
    return context
}

export const TodoListContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTask = (text: string) => {
    console.log(text);
    
    const newTask: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, text: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text } : task))
    );
  };

  return (
    <TodoListContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        toggleTask,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};