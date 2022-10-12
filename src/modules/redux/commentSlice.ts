import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { createComment } from '../firebase/read';

export interface comment {
  contents: {
    comment: string;
    commenter: object | string;
  };
  date: number;
  group: string;
  id: object | string;
}

const initialState: any = {
  data: null,
  error: null,
};

const createCommentSaga = createRequestSaga(
  'comment/CREATE_COMMENT',
  createComment
);

export function* createSaga() {
  yield takeLatest('comment/CREATE_COMMENT', createCommentSaga);
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
    CREATE_COMMENT_FAILURE: (state, { payload: comment }) => ({
      ...state,
      error: comment,
    }),
  },
});

export const {
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
} = commentSlice.actions;

export default commentSlice.reducer;
