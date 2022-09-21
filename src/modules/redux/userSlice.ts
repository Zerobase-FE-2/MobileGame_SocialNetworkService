import { createSlice } from '@reduxjs/toolkit';
interface userState {
  username?: string;
}

const initialState: { user: userState; checkError: boolean | null } = {
  user: {
    username: 'test0',
  },
  checkError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    TEMP_SET_USER: (state, { payload: user }) => ({
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
    LOGOUT: (state, { payload: user }) => ({
      ...state,
      user: null,
    }),
  },
});

export const { TEMP_SET_USER, CHECK_SUCCESS, CHECK_FAILURE, LOGOUT } =
  userSlice.actions;

export default userSlice.reducer;
