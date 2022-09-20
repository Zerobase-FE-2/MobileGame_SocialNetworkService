import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { readPost } from '../firebase/write';

const initialState = {
  post: null,
  error: null,
};

const readPostSaga = createRequestSaga('post/READ_POST', readPost);

export function* postSaga() {
  yield takeLatest('post/READ_POST', readPostSaga);
}
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    READ_POST: (state, { payload: id }) => initialState,
    READ_POST_SUCCESS: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    READ_POST_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    UNLOAD_POST: () => initialState,
  },
});

export const { READ_POST_SUCCESS, READ_POST_FAILURE, READ_POST, UNLOAD_POST } =
  postSlice.actions;
export default postSlice.reducer;
