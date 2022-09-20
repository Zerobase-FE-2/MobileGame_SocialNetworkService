import { all } from 'redux-saga/effects';

import { combineReducers } from '@reduxjs/toolkit';
import writeReducer, { writeSaga } from './writeSlice';
import loadingReducer from './loadingSlice';
import postReducer, { postSaga } from './postSlice';
import postsReducer, { postsSaga } from './postsSlice';

const rootReducer = combineReducers({
  write: writeReducer,
  loading: loadingReducer,
  post: postReducer,
  posts: postsReducer,
});

export function* rootSaga() {
  yield all([writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
