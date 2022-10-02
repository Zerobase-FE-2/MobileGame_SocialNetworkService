import { call, put } from 'redux-saga/effects';
import {
  FINISH_LOADING as finishLoading,
  START_LOADING as startLoading,
} from '../modules/redux/loadingSlice';
import { ServerResponse } from 'http';

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: any) {
    yield put(startLoading(type));

    try {
      const response: ServerResponse = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response,
        meta: response,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
