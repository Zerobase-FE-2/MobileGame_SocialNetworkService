import HeaderContainer from '../containers/common/HeaderContainer';
import CarouselContainer from '../containers/main/CarouselContainer';
import MainPageContainer from '../containers/main/MainPageContainer';
import FooterContainer from '../containers/common/FooterContainer';
import { useEffect } from 'react';
import { READ_PRODUCTS } from '../modules/redux/productsSlice';
import { useAppSelector, useAppDispatch } from '../modules/redux/hook';
import { READ_COMMENT } from '../modules/redux/commentSlice';
const MainPage = () => {
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
      {!loading && (
        <>
          <HeaderContainer />
          {!loading && products && (
            <CarouselContainer products={products} loading={loading} />
          )}
          <MainPageContainer products={products} loading={loading} />
          <FooterContainer />
        </>
      )}
    </>
  );
};

export default MainPage;
