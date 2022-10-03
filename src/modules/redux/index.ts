import { all } from 'redux-saga/effects';

import { combineReducers } from '@reduxjs/toolkit';
import writeReducer, { writeSaga } from './writeSlice';
import loadingReducer from './loadingSlice';
import postReducer, { postSaga } from './postSlice';
import postsReducer, { postsSaga } from './postsSlice';
import userReducer, { userSaga } from './userSlice';
import authReducer, { authSaga } from './authSlice';
import commentsReducer, { commentsSaga } from './commentsSlice';
import commentReducer, { commentSaga } from './commentSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  write: writeReducer,
  loading: loadingReducer,
  post: postReducer,
  posts: postsReducer,
  comment: commentReducer,
  comments: commentsReducer,
});

export function* rootSaga() {
  yield all([
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    authSaga(),
    commentSaga(),
    commentsSaga(),
  ]);
}

export default rootReducer;
