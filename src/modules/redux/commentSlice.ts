import { createSlice } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import {
  createComment,
  readComment,
  removeComment,
  updateComment,
} from '../firebase/read';

export interface comment {
  contents: {
    comment: string;
    commenter: string | null;
  };
  date: number;
  group: string;
  id: number;
}

export interface commentInit {
  data: comment[];
  desc: string;
  error: Error | boolean;
}

const initialState: commentInit = {
  data: [],
  desc: '',
  error: false,
};

const createCommentSaga = createRequestSaga(
  'comment/CREATE_COMMENT',
  createComment
);
const readCommentSaga = createRequestSaga('comment/READ_COMMENT', readComment);
const updateCommentSaga = createRequestSaga(
  'comment/UPDATE_COMMENT',
  updateComment
);
const removeCommentSaga = createRequestSaga(
  'comment/REMOVE_COMMENT',
  removeComment
);

export function* createSaga() {
  yield takeLatest('comment/CREATE_COMMENT', createCommentSaga);
  yield takeLatest('comment/READ_COMMENT', readCommentSaga);
  yield takeLatest('comment/UPDATE_COMMENT', updateCommentSaga);
  yield takeLatest('comment/REMOVE_COMMENT', removeCommentSaga);
}

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    CREATE_COMMENT: (state, { payload: data }) => ({
      ...state,
    }),
    CREATE_COMMENT_SUCCESS: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    CREATE_COMMENT_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    READ_COMMENT: (state) => ({
      ...state,
    }),
    READ_COMMENT_SUCCESS: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    READ_COMMENT_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    UPDATE_COMMENT: (state, { payload: { data, desc } }) => ({
      ...state,
    }),
    UPDATE_COMMENT_SUCCESS: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    UPDATE_COMMENT_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    REMOVE_COMMENT: (state, { payload: data }) => ({
      ...state,
    }),
    REMOVE_COMMENT_SUCCESS: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    REMOVE_COMMENT_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
});

export const {
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  READ_COMMENT,
  READ_COMMENT_SUCCESS,
  READ_COMMENT_FAILURE,
  UPDATE_COMMENT,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  REMOVE_COMMENT,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILURE,
} = commentSlice.actions;

export default commentSlice.reducer;
