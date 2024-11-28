import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  items: Todo[];
}

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ id: string; text: string }>) {
      state.items.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const t = state.items.find((it) => it.id === action.payload);
      if (t) t.completed = !t.completed;
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.items = state.items.filter((it) => it.id !== action.payload);
    },
    clearCompleted(state) {
      state.items = state.items.filter((it) => !it.completed);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, clearCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
