import React from 'react';
import ToDoList from './components/ToDoList/ToDoList';

const App: React.FC = () => {
  const items = [{ id: 't1', text: 'Finish the course' }]
  return (
    <div className="App">
      <ToDoList items={items} />
    </div>
  );
}

export default App;
