// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
// Update the import path if the file is named differently or located elsewhere
// Example: If the file is named counterSlice.tsx or located in another folder, update accordingly
import counterReducer from '../features/counterSlice';
// If the file does not exist, create '../features/counterSlice.ts' with a basic slice:

const store = configureStore({
  reducer: {
    users: userReducer,
    counter: counterReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
