import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {TodoListContextProvider} from './context/todoContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <TodoListContextProvider> 
    <App />
  </TodoListContextProvider>
  </React.StrictMode>
);


