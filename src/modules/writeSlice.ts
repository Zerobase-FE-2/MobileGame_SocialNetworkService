import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WriteState {
  title: string;
  body: string;
  tags: string[];
}

const initialState: WriteState = {
  title: '',
  body: '',
  tags: [],
};

const writeSlice = createSlice({
  name: 'write',
  initialState: initialState,
  reducers: {
    initialize: (state) => initialState,
    changeField: (
      state,
      {
        payload: { key, value },
      }: PayloadAction<{
        key: 'title' | 'body' | 'tags';
        value: string & string[];
      }>
    ) => ({
      ...state,
      [key]: value,
    }),
  },
});

export const { initialize, changeField } = writeSlice.actions;

export default writeSlice.reducer;
