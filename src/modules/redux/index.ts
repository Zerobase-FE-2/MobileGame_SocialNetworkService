import { all } from 'redux-saga/effects';

import { combineReducers } from '@reduxjs/toolkit';
import writeReducer, { writeSaga } from './writeSlice';
import loadingReducer from './loadingSlice';
import postReducer, { postSaga } from './postSlice';
import postsReducer, { postsSaga } from './postsSlice';
import productsReducer, { readSaga } from './productsSlice';
import commentReducer, { createSaga } from './commentSlice';
import userReducer from './userSlice';
import authReducer, { authSaga } from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  write: writeReducer,
  loading: loadingReducer,
  post: postReducer,
  posts: postsReducer,
  products: productsReducer,
  comment: commentReducer,
});

export function* rootSaga() {
  yield all([writeSaga(), postSaga(), postsSaga(), readSaga(), createSaga(), authSaga()]);
}

export default rootReducer;
