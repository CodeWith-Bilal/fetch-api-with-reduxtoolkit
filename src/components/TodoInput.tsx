import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import { AppDispatch } from '../app/store';
import { v4 as uuidv4 } from 'uuid';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(addTodo({ id: uuidv4(), text: trimmed }));
    setText('');
  };

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
        style={{ flex: 1, padding: '8px 10px', borderRadius: 6, border: '1px solid #ddd' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 12px' }}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
