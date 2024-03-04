// src/app/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

const rootReducer = combineReducers({
  users: userReducer,
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
