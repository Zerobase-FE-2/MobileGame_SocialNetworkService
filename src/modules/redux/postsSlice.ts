import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { listPosts } from '../firebase/write';

const initialState = {
  posts: null,
  error: null,
};

const listPostsSaga = createRequestSaga('posts/LIST_POSTS', listPosts);

export function* postsSaga() {
  yield takeLatest('posts/LIST_POSTS', listPostsSaga);
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    LIST_POSTS: (state, { payload: { tag, username, page, category } }) =>
      initialState,
    LIST_POSTS_SUCCESS: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    LIST_POSTS_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
});

export const { LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE, LIST_POSTS } =
  postsSlice.actions;

export default postsSlice.reducer;
