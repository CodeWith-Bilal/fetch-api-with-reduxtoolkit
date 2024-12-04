
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import counterReducer from '../features/counterSlice';
import todosReducer from '../features/todoSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    counter: counterReducer,
  todos: todosReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
