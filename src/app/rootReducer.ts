import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import counterReducer from "../features/counterSlice";
import todosReducer from "../features/todoSlice";
import booksReducer from "../features/bookSlice";
import postsReducer from "../features/postsSlice";
import weatherReducer from "../features/weatherSlice";
import githubReducer from "../features/githubSlice";

const rootReducer = combineReducers({
  users: userReducer,
  counter: counterReducer,
  todos: todosReducer,
  books: booksReducer,
  posts: postsReducer,
  weather: weatherReducer,
  github: githubReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
