
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import counterReducer from '../features/counterSlice';

const rootReducer = combineReducers({
  users: userReducer,
  counter: counterReducer,
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
