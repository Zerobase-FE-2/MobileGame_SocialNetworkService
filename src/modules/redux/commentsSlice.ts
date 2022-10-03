import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { listComments } from '../firebase/comments';

const initialState = {
  comments: null,
  error: null,
  lastPage: 1,
};

const listCommentsSaga = createRequestSaga(
  'comments/LIST_COMMENTS',
  listComments
);

export function* commentsSaga() {
  yield takeLatest('comments/LIST_COMMENTS', listCommentsSaga);
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
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

export const { LIST_COMMENTS, LIST_COMMENTS_SUCCESS, LIST_COMMENTS_FAILURE } =
  commentsSlice.actions;

export default commentsSlice.reducer;
