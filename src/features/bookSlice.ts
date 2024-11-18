import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Book {
  id: string;
  title: string;
  author?: string;
  quantity: number;
  price: number; // in whatever currency
}

interface BookState {
  items: Book[];
}

const initialState: BookState = {
  items: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.items.push(action.payload);
    },
    removeBook(state, action: PayloadAction<string>) {
      state.items = state.items.filter((b) => b.id !== action.payload);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const b = state.items.find((it) => it.id === action.payload.id);
      if (b) b.quantity = action.payload.quantity;
    },
    updatePrice(state, action: PayloadAction<{ id: string; price: number }>) {
      const b = state.items.find((it) => it.id === action.payload.id);
      if (b) b.price = action.payload.price;
    },
    clearBooks(state) {
      state.items = [];
    },
  },
});

export const { addBook, removeBook, updateQuantity, updatePrice, clearBooks } =
  bookSlice.actions;
export default bookSlice.reducer;
