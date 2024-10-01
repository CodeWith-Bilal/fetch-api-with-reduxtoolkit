import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

interface GitHubState {
  repos: GitHubRepo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchTerm: string;
}

const initialState: GitHubState = {
  repos: [],
  status: "idle",
  error: null,
  searchTerm: "",
};

export const searchGitHubRepos = createAsyncThunk(
  "github/searchRepos",
  async (query: string) => {
    if (!query.trim()) {
      throw new Error("Search query cannot be empty");
    }

    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(
        query
      )}&sort=stars&order=desc&per_page=20`
    );

    return response.data.items;
  }
);

export const fetchUserRepos = createAsyncThunk(
  "github/fetchUserRepos",
  async (username: string) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
    );

    return response.data;
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    clearRepos: (state) => {
      state.repos = [];
      state.status = "idle";
      state.searchTerm = "";
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchGitHubRepos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchGitHubRepos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.repos = action.payload;
      })
      .addCase(searchGitHubRepos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to search repositories";
      })
      .addCase(fetchUserRepos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserRepos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.repos = action.payload;
      })
      .addCase(fetchUserRepos.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch user repositories";
      });
  },
});

export const { clearRepos, setSearchTerm } = githubSlice.actions;
export default githubSlice.reducer;
