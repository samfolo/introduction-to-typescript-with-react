import React, { useState } from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import NewToDo from './components/NewToDo/NewToDo';

const App: React.FC = () => {
  const [items, setItems] = useState([{ id: 't0', text: 'Finish the course' }]);
  const [nextID, setNextID] = useState(1);

  const addToDo = (text: string) => {
    const newTodo = { id: `t${nextID}`, text };
    setItems([ ...items, newTodo]);
    setNextID(nextID + 1);
  }

  return (
    <div className="App">
      <NewToDo onAdd={addToDo} />
      <ToDoList items={items} />
    </div>
  );
}

export default App;
