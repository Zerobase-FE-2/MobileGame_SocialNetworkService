import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { readProduct, removeProduct } from '../firebase/read';

export interface product {
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
const removeProductSaga = createRequestSaga(
  'products/REMOVE_PRODUCTS',
  removeProduct
);

export function* readSaga() {
  yield takeLatest('products/READ_PRODUCTS', readProductSaga);
  yield takeLatest('products/REMOVE_PRODUCTS', removeProductSaga);
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    READ_PRODUCTS: (state) => ({
      ...state,
    }),
    READ_PRODUCTS_SUCCESS: (state, { payload: products }) => ({
      ...state,
      data: products,
    }),
    READ_PRODUCTS_FAILURE: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    REMOVE_PRODUCTS: (state, { payload: id }) => ({
      ...state,
      data: null,
      error: null,
    }),
    REMOVE_PRODUCTS_SUCCESS: (state, { payload: id }) => ({
      ...state,
      data: id,
    }),
    REMOVE_PRODUCTS_FAILURE: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
  },
});

export const {
  READ_PRODUCTS,
  READ_PRODUCTS_SUCCESS,
  READ_PRODUCTS_FAILURE,
  REMOVE_PRODUCTS,
  REMOVE_PRODUCTS_SUCCESS,
  REMOVE_PRODUCTS_FAILURE,
} = productsSlice.actions;
export default productsSlice.reducer;
