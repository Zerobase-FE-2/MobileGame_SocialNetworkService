import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import * as authAPI from '../firebase/auth';

const registerSaga = createRequestSaga('auth/REGISTER', authAPI.register);

const loginSaga = createRequestSaga('auth/LOGIN', authAPI.login);

export function* authSaga() {
  yield takeLatest('auth/REGISTER', registerSaga);
  yield takeLatest('auth/LOGIN', loginSaga);
}

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    CHANGE_FIELD: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    INITIALIZE_FORM: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    REGISTER: (state) => ({
      ...state,
      auth: null,
      authError: null,
    }),
    REGISTER_SUCCESS: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    REGISTER_FAILURE: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    LOGIN: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth: null,
    }),
    LOGIN_SUCCESS: (state, { payload: auth }) => {
      return {
        ...state,
        auth,
        authError: null,
      };
    },
    LOGIN_FAILURE: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
});

export const {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = authSlice.actions;

export default authSlice.reducer;
