import HeaderContainer from '../containers/common/HeaderContainer';
import CarouselContainer from '../containers/main/CarouselContainer';
import MainPageContainer from '../containers/main/MainPageContainer';
import FooterContainer from '../containers/common/FooterContainer';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { READ_PRODUCTS } from '../modules/redux/productsSlice';
import { useAppSelector, useAppDispatch } from '../modules/redux/hook';
const MainPage = () => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const { posts, error, loading } = useAppSelector(
    ({ posts, loading }: { posts: any; loading: any }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['products/READ_PRODUCTS'],
    })
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const category = searchParams.get('category');
    dispatch(READ_PRODUCTS({ username, category }));
  }, []);

  return (
    <>
      <HeaderContainer />
      {/* <CarouselContainer /> */}
      <MainPageContainer />
      <FooterContainer />
    </>
  );
};

export default MainPage;
