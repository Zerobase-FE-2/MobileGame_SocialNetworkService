import HeaderContainer from '../containers/common/HeaderContainer';
import CarouselContainer from '../containers/main/CarouselContainer';
import MainPageContainer from '../containers/main/MainPageContainer';
import FooterContainer from '../containers/common/FooterContainer';
import { useEffect } from 'react';
import {
  product,
  productInit,
  READ_PRODUCTS,
} from '../modules/redux/productsSlice';
import { useAppSelector, useAppDispatch } from '../modules/redux/hook';
import { loadingInit } from '../modules/redux/loadingSlice';
import Spinner from '../components/loading/Spinner';
const MainPage = () => {
  const dispatch = useAppDispatch();
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
  useEffect(() => {
    dispatch(READ_PRODUCTS());
  }, [dispatch]);
  if (!products) {
    return <Spinner />;
  }
  return (
    <>
      <HeaderContainer />
      <CarouselContainer products={products} />
      <MainPageContainer products={products} />
      <FooterContainer />
    </>
  );
};

export default MainPage;
