import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { toggleTodo, removeTodo, clearCompleted } from '../features/todoSlice';
import { AppDispatch } from '../app/store';

const TodoList: React.FC = () => {
  const todos = useSelector((s: RootState) => s.todos.items);
  const dispatch = useDispatch<AppDispatch>();

  if (!todos || todos.length === 0) return <div>No todos yet — add one above.</div>;

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      {todos.map((t) => (
        <div key={t.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 8, borderRadius: 8, background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="checkbox" checked={t.completed} onChange={() => dispatch(toggleTodo(t.id))} />
            <div style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.text}</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => dispatch(removeTodo(t.id))} style={{ background: 'transparent', border: 'none', color: '#d33' }}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={() => dispatch(clearCompleted())} style={{ padding: '6px 10px' }}>
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
