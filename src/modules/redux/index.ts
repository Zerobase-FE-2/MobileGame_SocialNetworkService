import { all } from 'redux-saga/effects';

import { combineReducers } from '@reduxjs/toolkit';
import writeReducer, { writeSaga } from './writeSlice';
import loadingReducer from './loadingSlice';
import postReducer, { postSaga } from './postSlice';

const rootReducer = combineReducers({
  write: writeReducer,
  loading: loadingReducer,
  post: postReducer,
});

export function* rootSaga() {
  yield all([writeSaga(), postSaga()]);
}

export default rootReducer;
