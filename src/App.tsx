import React, { useState } from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import NewToDo from './components/NewToDo/NewToDo';
import { ToDo } from './todo.model';

const App: React.FC = () => {
  const [items, setItems] = useState<ToDo[]>([{ id: 't0', text: 'Finish the course' }]);
  const [nextID, setNextID] = useState(1);

  const addToDo = (text: string) => {
    const newTodo = { id: `t${nextID}`, text };
    setItems(prevItems => [...prevItems, newTodo]);
    setNextID(nextID + 1);
  }

  const deleteToDo = (id: string) => {
    const updatedItems: ToDo[] = items.filter(item => item.id !== id);
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <NewToDo onAdd={addToDo} />
      <ToDoList items={items} onDelete={deleteToDo}  />
    </div>
  );
}

export default App;
