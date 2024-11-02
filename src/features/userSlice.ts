// src/features/userSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  image_url: string;
  description: string;
  // Add other properties as needed
}

interface UserState {
  data: User[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("opensea/fetchData", async () => {
  const options = {
    method: "GET",
    url: "https://api.opensea.io/api/v2/collections",
    headers: {
      accept: "application/json",
      "x-api-key": "cfa2f65ed71240408595239cf85b14a6",
    },
  };

  const response = await axios.request(options);
  return response.data.collections;
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      });
  },
});

export default userSlice.reducer;
