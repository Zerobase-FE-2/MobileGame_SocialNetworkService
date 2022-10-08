import { all } from 'redux-saga/effects';

import { combineReducers } from '@reduxjs/toolkit';
import writeReducer, { writeSaga } from './writeSlice';
import loadingReducer from './loadingSlice';
import postReducer, { postSaga } from './postSlice';
import postsReducer, { postsSaga } from './postsSlice';
import productsReducer, { readSaga } from './productsSlice';
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
});

export function* rootSaga() {
  yield all([writeSaga(), postSaga(), postsSaga(), authSaga(), readSaga()]);
}

export default rootReducer;
