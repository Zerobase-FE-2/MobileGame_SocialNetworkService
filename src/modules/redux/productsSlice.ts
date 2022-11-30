import { createSlice } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga';
import { readProduct, removeProduct, updateProduct } from '../firebase/read';

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

export interface productInit {
  data: product[] | null;
  error: Error | boolean;
}

const initialState: productInit = {
  data: null,
  error: false,
};

const readProductSaga = createRequestSaga(
  'products/READ_PRODUCTS',
  readProduct
);
const updateProductSaga = createRequestSaga(
  'products/UPDATE_PRODUCTS',
  updateProduct
);
const removeProductSaga = createRequestSaga(
  'products/REMOVE_PRODUCTS',
  removeProduct
);

export function* readSaga() {
  yield takeLatest('products/READ_PRODUCTS', readProductSaga);
  yield takeLatest('products/UPDATE_PRODUCTS', updateProductSaga);
  yield takeLatest('products/REMOVE_PRODUCTS', removeProductSaga);
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    READ_PRODUCTS: (state) => ({
      ...state,
    }),
    READ_PRODUCTS_SUCCESS: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    READ_PRODUCTS_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    UPDATE_PRODUCTS: (state, { payload: data }) => ({
      ...state,
    }),
    UPDATE_PRODUCTS_SUCCESS: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    UPDATE_PRODUCTS_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    REMOVE_PRODUCTS: (state, { payload: data }) => ({
      ...state,
    }),
    REMOVE_PRODUCTS_SUCCESS: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    REMOVE_PRODUCTS_FAILURE: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
});

export const {
  READ_PRODUCTS,
  READ_PRODUCTS_SUCCESS,
  READ_PRODUCTS_FAILURE,
  UPDATE_PRODUCTS,
  UPDATE_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS_FAILURE,
  REMOVE_PRODUCTS,
  REMOVE_PRODUCTS_SUCCESS,
  REMOVE_PRODUCTS_FAILURE,
} = productsSlice.actions;
export default productsSlice.reducer;
