import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { writePost } from '../firebase/write';

export interface WriteState {
  title: string;
  body: string;
  tags: string[];
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
}

const initialState: WriteState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
};

const writePostSaga = createRequestSaga('write/WRITE_POST', writePost);

export function* writeSaga() {
  yield takeLatest('write/WRITE_POST', writePostSaga);
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
        key: 'title' | 'body' | 'tags';
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
  },
});

export const {
  initialize,
  changeField,
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILED,
} = writeSlice.actions;

export default writeSlice.reducer;
