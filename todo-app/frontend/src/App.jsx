import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const handleAddTodo = (newTodo) => {
    // Handle the addition of new todo here if necessary
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList />
    </div>
  );
};

export default App;
