import React from 'react';

const TodoItem = ({ todo, onComplete, onDelete }) => {
  return (
    <div>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onComplete(todo._id, todo.completed)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
