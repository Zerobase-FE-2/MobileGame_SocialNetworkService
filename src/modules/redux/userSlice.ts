import { createSlice } from '@reduxjs/toolkit';
import { call, takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import * as authAPI from '../firebase/auth';
interface userState {
  username?: string;
}

const initialState: { user: userState[] | null; checkError: boolean | null } = {
  user: null,
  checkError: null,
};

const checkSaga = createRequestSaga('user/check', authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
}
function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    console.log('logout');
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest('user/check', checkSaga);
  yield takeLatest('user/check_failure', checkFailureSaga);
  yield takeLatest('user/logout', logoutSaga);
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    TEMP_SET_USER: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    CHECK: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    CHECK_SUCCESS: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    CHECK_FAILURE: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    LOGOUT: (state) => ({
      ...state,
      user: null,
    }),
  },
});

export const { TEMP_SET_USER, CHECK, LOGOUT } = userSlice.actions;

export default userSlice.reducer;
