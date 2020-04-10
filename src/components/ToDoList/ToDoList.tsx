import React from 'react';
import './ToDoList.css';

interface ToDoListProps {
  items: { id: string; text: string; }[];
  onDelete: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ items, onDelete }) => {
  return <ul data-test="component-to-do-list">
    {
      items.map(todo => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>DELETE</button>
          </li>
        );
      })
    }
  </ul>;
}

export default ToDoList;
