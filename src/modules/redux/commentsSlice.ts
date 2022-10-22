import { initializeApp } from 'firebase/app';
import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { listComments } from '../firebase/comments';
import { updateComment, writeComment } from '../firebase/comment';
import produce from 'immer';

const initialState = {
  text: '',
  comment: '',
  comments: null,
  error: null,
  lastPage: 1,
};

const writeCommentSaga = createRequestSaga(
  'comments/WRITE_COMMENT',
  writeComment
);
const updateCommentSaga = createRequestSaga(
  'comments/UPDATE_COMMENT',
  updateComment
);

const listCommentsSaga = createRequestSaga(
  'comments/LIST_COMMENTS',
  listComments
);

export function* commentsSaga() {
  yield takeLatest('comments/WRITE_COMMENT', writeCommentSaga);
  yield takeLatest('comments/UPDATE_COMMENT', updateCommentSaga);
  yield takeLatest('comments/LIST_COMMENTS', listCommentsSaga);
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    CHANGE_FIELD: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
    INITIALIZE_FORM: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    WRITE_COMMENT: (state, { payload: comment }) => ({
      ...state,
      comment: null,
      commentError: null,
    }),
    WRITE_COMMENT_SUCCESS: (state, { payload: comment }) => ({
      ...state,
      comments: { comment, ...state.comments },
    }),
    WRITE_COMMENT_FAILED: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
    SET_ORIGINAL_COMMENT: (state, { payload: comment }) => ({
      ...state,
      _id: comment._id,
      text: comment.text,
      publishedDate: comment.publishedDate,
      user: comment.user,
    }),
    UPDATE_COMMENT: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    UPDATE_COMMENT_SUCCESS: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    UPDATE_COMMENT_FAILURE: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
    LIST_COMMENTS: (state, { payload: { postId } }) => initialState,
    LIST_COMMENTS_SUCCESS: (state, { payload: comments }) => ({
      ...state,
      comments,
    }),
    LIST_COMMENTS_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
});

export const {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  WRITE_COMMENT,
  WRITE_COMMENT_SUCCESS,
  WRITE_COMMENT_FAILED,
  SET_ORIGINAL_COMMENT,
  UPDATE_COMMENT,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  LIST_COMMENTS,
  LIST_COMMENTS_SUCCESS,
  LIST_COMMENTS_FAILURE,
} = commentsSlice.actions;

export default commentsSlice.reducer;
