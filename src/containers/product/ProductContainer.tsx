import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../modules/redux/hook';
import { READ_PRODUCTS } from '../../modules/redux/productsSlice';
import ProductDesc from '../../components/product/ProductDesc';
import WriteComment from '../../components/create/WriteComment';
import Comments from '../../components/product/Comments';
import Buttons from '../../components/product/Buttons';
import { READ_COMMENT } from '../../modules/redux/commentSlice';

const ProductContainer = () => {
  let params = useParams();
  const { products, comment, error, loading } = useAppSelector(
    ({
      products,
      comment,
      loading,
    }: {
      products: any;
      comment: any;
      loading: any;
    }) => ({
      products: products.data,
      comment: comment.data,
      error: products.error,
      loading: loading['products/READ_PRODUCTS'],
    })
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(READ_COMMENT());
    dispatch(READ_PRODUCTS());
  }, [dispatch]);
  if (loading || !products || !comment) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <ProductDesc params={params} products={products} />
      <Buttons params={params} />
      <WriteComment />
      <Comments params={params} comment={comment} />
    </>
  );
};
export default ProductContainer;
