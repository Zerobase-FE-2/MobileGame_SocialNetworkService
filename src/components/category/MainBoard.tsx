import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { product } from '../../modules/redux/productsSlice';

const ProductTable = styled.article`
  grid-row: 1 / span 2;
  grid-column: 2;
  width: fit-content;
  height: fit-content;
  padding: 0 1rem 1rem 1rem;
  margin-top: 1rem;
  background-color: white;
  border-radius: 10px;
`;
const Product = styled.div`
  display: flex;
  width: 820px;
  height: fit-content;
  padding: 1rem;
  margin-top: 1rem;
  background-color: ${palette.blue[0]};
  border-radius: 10px;
  figure {
    flex-shrink: 0;
    width: fit-content;
    height: full;
  }
  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
`;
const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-weight: 600;
    color: black;
    padding-top: 0;
  }
  p {
    width: full;
    height: 3rem;
    padding: 0.5rem;
    overflow: hidden;
    margin-top: 0;
  }
`;
const filterProducts = (setFunc: Function, url: string | null) => {
  switch (url) {
    case 'action':
      setFunc('액션');
      break;
    case 'adventure':
      setFunc('어드벤처');
      break;
    case 'roleplay':
      setFunc('롤플레잉');
      break;
    case 'simulation':
      setFunc('시뮬레이션');
      break;
    case 'strategy':
      setFunc('전략');
      break;
    case 'sports':
      setFunc('스포츠');
      break;
    case 'racing':
      setFunc('자동차 경주');
      break;
    case 'casual':
      setFunc('캐주얼 게임');
      break;
    default:
      setFunc(null);
      break;
  }
};

const MainBoard = ({
  products,
  loading,
}: {
  products: product[];
  loading: boolean;
}) => {
  const location = useLocation();
  let url = new URLSearchParams(location.search).get('category');
  const [category, setCategory] = useState(null);
  useEffect(() => {
    filterProducts(setCategory, url);
  }, [location]);
  if (loading || !products) {
    return <h1>loading...</h1>;
  }
  return (
    <ProductTable>
      {category === null
        ? products.map((product: product) => (
            <Link to={`/category/${product.id}`} key={product.id}>
              <Product>
                <figure>
                  <img src={product.image} alt={product.title} />
                </figure>
                <ProductDesc>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </ProductDesc>
              </Product>
            </Link>
          ))
        : products
            .filter((product: product) => product.category === category)
            .map((product: product) => (
              <Link to={`/category/${product.id}`} key={product.id}>
                <Product>
                  <figure>
                    <img src={product.image} alt={product.title} />
                  </figure>
                  <ProductDesc>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                  </ProductDesc>
                </Product>
              </Link>
            ))}
    </ProductTable>
  );
};

export default MainBoard;
