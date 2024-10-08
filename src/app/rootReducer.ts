import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import counterReducer from "../features/counterSlice";
import todosReducer from "../features/todoSlice";
import booksReducer from "../features/bookSlice";

const rootReducer = combineReducers({
  users: userReducer,
  counter: counterReducer,
  todos: todosReducer,
  books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
