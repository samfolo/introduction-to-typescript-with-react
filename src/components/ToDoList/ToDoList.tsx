import React from 'react';

const ToDoList: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }]
  return <ul data-test="component-to-do-list">
    {
      todos.map(todo => {
        return <li key={todo.id}>{todo.text}</li>
      })
    }
  </ul>;
}

export default ToDoList;
