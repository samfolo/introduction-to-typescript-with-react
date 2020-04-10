import React, { useRef } from 'react';

interface NewToDoProps {
  onAdd: (text: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = ({ onAdd }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAdd(enteredText);
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={textInputRef} />
    </div>
    <button type="submit">ADD TODO</button>
  </form>;
};

export default NewToDo;
