import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import counterReducer from "../features/counterSlice";
import todosReducer from "../features/todoSlice";
import booksReducer from "../features/bookSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  users: userReducer,
  counter: counterReducer,
  todos: todosReducer,
  books: booksReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos", "books"], // persist only todos and books
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
