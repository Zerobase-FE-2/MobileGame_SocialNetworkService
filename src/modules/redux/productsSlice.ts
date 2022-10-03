import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { readProduct } from '../firebase/read';

interface product {
  category: string;
  company: string;
  description: string;
  id: number;
  image: string;
  rating: {
    score: number;
    visit: number;
  };
  screenshot: {
    0: string;
    1: string;
    2: string;
  };
  title: string;
}

const initialState: any = {
  data: null,
  error: null,
};

const readProductSaga = createRequestSaga(
  'products/READ_PRODUCTS',
  readProduct
);

export function* readSaga() {
  yield takeLatest('products/READ_PRODUCTS', readProductSaga);
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    READ_PRODUCTS: (state, { payload: { username, category } }) => initialState,
    READ_PRODUCTS_SUCCESS: (state, { payload: posts }) => ({
      ...state,
      ...posts,
    }),
    READ_PRODUCTS_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
});

export const { READ_PRODUCTS, READ_PRODUCTS_SUCCESS, READ_PRODUCTS_FAILURE } =
  productsSlice.actions;
export default productsSlice.reducer;
