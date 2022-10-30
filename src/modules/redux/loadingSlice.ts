import { createSlice } from '@reduxjs/toolkit';

export interface loadingInit {
  [key: string]: boolean;
}

const initialState: loadingInit = {};

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
