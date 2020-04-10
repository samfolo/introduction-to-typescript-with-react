import React from 'react';

interface ToDoListProps {
  items: { id: string; text: string; }[];
  onDelete: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ items, onDelete }) => {
  return <ul data-test="component-to-do-list">
    {
      items.map(todo => {
        return <li key={todo.id} onClick={() => onDelete(todo.id)}>{todo.text}</li>
      })
    }
  </ul>;
}

export default ToDoList;
