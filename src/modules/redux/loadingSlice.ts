import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    START_LOADING: (state, action) => ({ ...state, [action.payload]: true }),
    FINISH_LOADING: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
});

export const { START_LOADING, FINISH_LOADING } = loadingSlice.actions;
export default loadingSlice.reducer;
