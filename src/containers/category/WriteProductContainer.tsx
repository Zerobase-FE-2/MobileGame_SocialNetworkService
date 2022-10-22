import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../modules/redux/hook';
import { READ_PRODUCTS } from '../../modules/redux/productsSlice';
import WriteProduct from '../../components/create/WriteProduct';

const WriteProductContainer = () => {
  const { products, error, loading } = useAppSelector(
    ({ products, loading }: { products: any; loading: any }) => ({
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
    return <h1>loading...</h1>;
  }
  return (
    <>
      <WriteProduct products={products} />
    </>
  );
};

export default WriteProductContainer;
