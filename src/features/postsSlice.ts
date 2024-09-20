import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsState {
  items: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  totalPages: number;
}

const initialState: PostsState = {
  items: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  totalPages: 1,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (page: number = 1) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    return {
      posts: response.data,
      totalCount: parseInt(response.headers['x-total-count'] || '100'),
      page,
    };
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (newPost: { title: string; body: string; userId: number }) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      newPost
    );
    return response.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.items = [];
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.posts;
        state.currentPage = action.payload.page;
        state.totalPages = Math.ceil(action.payload.totalCount / 10);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch posts';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      });
  },
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
