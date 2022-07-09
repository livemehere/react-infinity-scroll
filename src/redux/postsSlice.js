import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addPost,
  deletePost,
  getAllPost,
  updatePost,
} from "../service/firebase/posts";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {})
      .addCase(removePost.fulfilled, (state, action) => {})
      .addCase(modifyPost.fulfilled, (state, action) => {});
  },
});

const postsReducer = postsSlice.reducer;

export default postsReducer;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getAllPost();
  return posts;
});

export const createPost = createAsyncThunk(
  "posts/createPosts",
  async (data) => {
    const posts = await addPost(data);
  }
);

export const modifyPost = createAsyncThunk(
  "posts/modifyPosts",
  async (data) => {
    const posts = await updatePost(data.id, data);
  }
);

export const removePost = createAsyncThunk("posts/removePost", async (id) => {
  await deletePost(id);
});
