import HeaderContainer from '../containers/common/HeaderContainer';
import CarouselContainer from '../containers/main/CarouselContainer';
import MainPageContainer from '../containers/main/MainPageContainer';
import FooterContainer from '../containers/common/FooterContainer';
import { useEffect } from 'react';
import { product, READ_PRODUCTS } from '../modules/redux/productsSlice';
import { useAppSelector, useAppDispatch } from '../modules/redux/hook';
const MainPage = () => {
  const { products, error, loading } = useAppSelector(
    ({
      products,
      loading,
    }: any): { products: product[]; error: Error; loading: boolean } => ({
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
      {!loading && (
        <>
          <HeaderContainer />
          {!loading && products && (
            <CarouselContainer products={products} loading={loading} />
          )}
          <MainPageContainer products={products} />
          <FooterContainer />
        </>
      )}
    </>
  );
};

export default MainPage;
