import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { readPost, addCnt } from '../firebase/write';

const initialState = {
  post: null,
  error: null,
};

const readPostSaga = createRequestSaga('post/READ_POST', readPost);
const addCntSaga = createRequestSaga('post/ADD_CNT', addCnt);

export function* postSaga() {
  yield takeLatest('post/READ_POST', readPostSaga);
  yield takeLatest('post/ADD_CNT', addCntSaga);
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
    ADD_CNT: (state, { payload: { form, postId } }) => initialState,
    ADD_CNT_SUCCESS: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    ADD_CNT_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    UNLOAD_POST: () => initialState,
  },
});

export const {
  READ_POST_SUCCESS,
  READ_POST_FAILURE,
  READ_POST,
  UNLOAD_POST,
  ADD_CNT,
  ADD_CNT_SUCCESS,
  ADD_CNT_FAILURE,
} = postSlice.actions;
export default postSlice.reducer;
