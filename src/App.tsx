import React from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import NewToDo from './components/NewToDo/NewToDo';

const App: React.FC = () => {
  const items = [{ id: 't1', text: 'Finish the course' }]
  return (
    <div className="App">
      <NewToDo />
      <ToDoList items={items} />
    </div>
  );
}

export default App;
