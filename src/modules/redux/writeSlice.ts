import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { writePost, updatePost } from '../firebase/write';

export interface WriteState {
  title: string;
  body: string;
  tags: string[];
  category: string;
  viewCnt: number;
  likeCnt: number;
  dislikeCnt: number;
  post: {
    title: string;
    body: string;
    tags: string[];
    user: { username: string; _id: string };
    _id: string;
    __v: number;
    publishedDate: string;
  } | null;
  postError: boolean | null;
  originalPostId: string | null;
}

const initialState: WriteState = {
  title: '',
  body: '',
  tags: [],
  category: 'all',
  viewCnt: 0,
  likeCnt: 0,
  dislikeCnt: 0,
  post: null,
  postError: null,
  originalPostId: null,
};

const writePostSaga = createRequestSaga('write/WRITE_POST', writePost);
const updatePostSaga = createRequestSaga('write/UPDATE_POST', updatePost);

export function* writeSaga() {
  yield takeLatest('write/WRITE_POST', writePostSaga);
  yield takeLatest('write/UPDATE_POST', updatePostSaga);
}

const writeSlice = createSlice({
  name: 'write',
  initialState,
  reducers: {
    initialize: (state) => initialState,
    changeField: (
      state,
      {
        payload: { key, value },
      }: PayloadAction<{
        key: 'title' | 'body' | 'tags' | 'category';
        value: string & string[];
      }>
    ) => ({
      ...state,
      [key]: value,
    }),
    WRITE_POST: (state, { payload: post }) => ({
      ...state,
      post: null,
      postError: null,
    }),
    WRITE_POST_SUCCESS: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    WRITE_POST_FAILED: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    SET_ORIGINAL_POST: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      tags: post.tags,
      category: post.category,
      originalPostId: post._id,
    }),
    UPDATE_POST: (state, { payload: post }) => ({ ...state, post }),
    UPDATE_POST_SUCCESS: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    UPDATE_POST_FAILURE: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
});

export const {
  initialize,
  changeField,
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILED,
  SET_ORIGINAL_POST,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
} = writeSlice.actions;

export default writeSlice.reducer;
