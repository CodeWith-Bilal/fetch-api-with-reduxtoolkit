
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import counterReducer from '../features/counterSlice';

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
