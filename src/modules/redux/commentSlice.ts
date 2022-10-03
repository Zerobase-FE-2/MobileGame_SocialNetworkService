import { updateComment, writeComment } from '../firebase/comment';
import createRequestSaga from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const initialState = {
  text: '',
  comment: '',
  commentError: null,
};

const writeCommentSaga = createRequestSaga(
  'comment/WRITE_COMMENT',
  writeComment
);
const updateCommentSaga = createRequestSaga(
  'comment/UPDATE_COMMENT',
  updateComment
);

export function* commentSaga() {
  yield takeLatest('comment/WRITE_COMMENT', writeCommentSaga);
  yield takeLatest('comment/UPDATE_COMMENT', updateCommentSaga);
}

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    CHANGE_FIELD: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
    INITIALIZE_FORM: () => initialState,
    WRITE_COMMENT: (state, { payload: comment }) => ({
      ...state,
      comment: null,
      commentError: null,
    }),
    WRITE_COMMENT_SUCCESS: (state, { payload: comment }) => ({
      ...state,
      comment,
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
} = commentSlice.actions;

export default commentSlice.reducer;
