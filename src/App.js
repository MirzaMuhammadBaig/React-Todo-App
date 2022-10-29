import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='form-control container mt-1'>
      <h1 className='fw-bolder text-center mt-2 mb-5'>Todo app</h1>
      <TodoList />
    </div>
  );
}

export default App;
