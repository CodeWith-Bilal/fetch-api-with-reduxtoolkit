import React from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodosPage: React.FC = () => {
  return (
    <div>
      <h2>Todos</h2>
      <div style={{ marginTop: 12 }}>
        <TodoInput />
      </div>
      <div style={{ marginTop: 12 }}>
        <TodoList />
      </div>
    </div>
  );
};

export default TodosPage;
