
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import counterReducer from '../features/counterSlice';
import todosReducer from '../features/todoSlice';

const rootReducer = combineReducers({
  users: userReducer,
  counter: counterReducer,
  todos: todosReducer,
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
