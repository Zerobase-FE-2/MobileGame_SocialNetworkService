import Category from '../../components/posts/Category';
import MainBoard from '../../components/category/MainBoard';
import PopularBoard from '../../components/category/PopularBoard';
import { categories } from '../../lib/fakeData/categories';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../modules/redux/hook';
import { productInit, READ_PRODUCTS } from '../../modules/redux/productsSlice';
import { loadingInit } from '../../modules/redux/loadingSlice';
import Spinner from '../../components/loading/Spinner';

const CategorySection = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  align-content: center;
  width: 1024px;
  height: full;
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
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.error(error);
  }
  return (
    <>
      {products && (
        <CategorySection>
          <div>
            <Category categories={categories} />
            <PopularBoard products={products} />
          </div>
          <MainBoard products={products} />
          <button>
            <Link to={'/create'}>등록</Link>
          </button>
        </CategorySection>
      )}
    </>
  );
};

export default CategoryContainer;
