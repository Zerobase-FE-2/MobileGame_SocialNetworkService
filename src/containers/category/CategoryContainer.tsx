import Category from '../../components/posts/Category';
import MainBoard from '../../components/category/MainBoard';
import PopularBoard from '../../components/category/PopularBoard';
import { categories } from '../../lib/fakeData/categories';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../modules/redux/hook';
import { READ_PRODUCTS } from '../../modules/redux/productsSlice';

const CategorySection = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  align-content: center;
  width: 1024px;
  height: 80vh;
  padding: 1rem;
  margin: 0 auto;
  background-color: ${palette.black[0]};
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  button {
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: none;
    font-size: large;
    background-color: ${palette.blue[3]};
  }
`;

const CategoryContainer = () => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { posts, error, loading } = useAppSelector(
    ({ posts, loading }: { posts: any; loading: any }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['products/READ_PRODUCTS'],
    })
  );
  useEffect(() => {
    const category = searchParams.get('category');
    dispatch(READ_PRODUCTS({ username, category }));
    const interval = setInterval(() => console.log(posts), 3000);
  }, [dispatch]);
  return (
    <CategorySection>
      <Category categories={categories} />
      <MainBoard loading={loading} error={error} posts={posts} />
      <PopularBoard />
      <button>
        <Link to={'/create'}>등록</Link>
      </button>
    </CategorySection>
  );
};

export default CategoryContainer;
