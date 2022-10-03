import { all } from 'redux-saga/effects';

import { combineReducers } from '@reduxjs/toolkit';
import writeReducer, { writeSaga } from './writeSlice';
import loadingReducer from './loadingSlice';
import postReducer, { postSaga } from './postSlice';
import postsReducer, { postsSaga } from './postsSlice';
import userReducer from './userSlice';
import productsReducer, { readSaga } from './productsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  write: writeReducer,
  loading: loadingReducer,
  post: postReducer,
  posts: postsReducer,
  products: productsReducer,
});

export function* rootSaga() {
  yield all([writeSaga(), postSaga(), postsSaga(), readSaga()]);
}

export default rootReducer;
