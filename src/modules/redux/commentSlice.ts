import { createSlice } from '@reduxjs/toolkit';
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

const initialState: {} = {
  data: null,
  error: null,
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
    CREATE_COMMENT: (state, { payload: comment }) => ({
      ...state,
      data: null,
      error: null,
    }),
    CREATE_COMMENT_SUCCESS: (state, { payload: comment }) => ({
      ...state,
      data: comment,
    }),
    CREATE_COMMENT_FAILURE: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    READ_COMMENT: (state) => ({
      ...state,
    }),
    READ_COMMENT_SUCCESS: (state, { payload: comment }) => ({
      ...state,
      data: comment,
    }),
    READ_COMMENT_FAILURE: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    UPDATE_COMMENT: (state, { payload: { comment, desc } }) => ({
      ...state,
      data: null,
      error: null,
    }),
    UPDATE_COMMENT_SUCCESS: (state, { payload: { comment, desc } }) => ({
      ...state,
      data: comment,
      desc,
    }),
    UPDATE_COMMENT_FAILURE: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    REMOVE_COMMENT: (state, { payload: item }) => ({
      ...state,
      data: null,
      error: null,
    }),
    REMOVE_COMMENT_SUCCESS: (state, { payload: item }) => ({
      ...state,
      data: item,
    }),
    REMOVE_COMMENT_FAILURE: (state, { payload: error }) => ({
      ...state,
      error: error,
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
