import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../modules/redux/hook';
import { productInit, READ_PRODUCTS } from '../../modules/redux/productsSlice';
import WriteProduct from '../../components/create/WriteProduct';
import { loadingInit } from '../../modules/redux/loadingSlice';
import Spinner from '../../components/loading/Spinner';

const WriteProductContainer = () => {
  const { products, error, loading } = useAppSelector(
    ({
      products,
      loading,
    }: {
      products: productInit;
      loading: loadingInit;
    }) => ({
      products: products.data,
      error: products.error,
      loading: loading['products/READ_PRODUCTS'],
    })
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(READ_PRODUCTS());
  }, [dispatch]);
  if (loading || !products) {
    return <Spinner />;
  }
  return (
    <>
      <WriteProduct products={products} />
    </>
  );
};

export default WriteProductContainer;
