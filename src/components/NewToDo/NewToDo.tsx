import React, { useRef } from 'react';
import './NewToDo.css';

interface NewToDoProps {
  onAdd: (text: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = ({ onAdd }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAdd(enteredText);
    textInputRef.current!.value = '';
  }

  return <form onSubmit={handleSubmit}>
    <div className="form-control">
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={textInputRef} />
    </div>
    <button type="submit">ADD TODO</button>
  </form>;
};

export default NewToDo;
