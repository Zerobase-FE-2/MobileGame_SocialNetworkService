import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../modules/redux/hook';
import { READ_PRODUCTS } from '../../modules/redux/productsSlice';
import ProductDesc from '../../components/product/ProductDesc';
import WriteComment from '../../components/create/WriteComment';

const ProductContainer = () => {
  let params = useParams();
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
  return (
    <>
      {!loading && products && (
        <>
          <ProductDesc params={params} products={products} />
          <WriteComment />
        </>
      )}
    </>
  );
};
export default ProductContainer;
