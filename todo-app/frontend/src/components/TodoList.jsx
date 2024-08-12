import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleComplete = (id, completed) => {
    axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed })
      .then(() => setTodos(todos.map(todo => todo._id === id ? { ...todo, completed: !completed } : todo)))
      .catch(error => console.error(error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
