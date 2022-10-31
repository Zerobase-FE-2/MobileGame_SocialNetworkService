import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../modules/redux/hook';
import { productInit, READ_PRODUCTS } from '../../modules/redux/productsSlice';
import ProductDesc from '../../components/product/ProductDesc';
import Buttons from '../../components/product/Buttons';
import { loadingInit } from '../../modules/redux/loadingSlice';
import Spinner from '../../components/loading/Spinner';

const ProductContainer = () => {
  let params = useParams();
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
  if (!products) {
    return <Spinner />;
  }
  return (
    <>
      <ProductDesc params={params} products={products} />
      <Buttons params={params} />
    </>
  );
};
export default ProductContainer;
