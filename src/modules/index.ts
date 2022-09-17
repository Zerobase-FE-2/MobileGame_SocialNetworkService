import { all } from 'redux-saga/effects';

import { combineReducers } from '@reduxjs/toolkit';
import writeReducer from './writeSlice';

const rootReducer = combineReducers({
  write: writeReducer,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
