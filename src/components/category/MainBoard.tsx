import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ProductTable = styled.article`
  grid-row: 1 / span 2;
  grid-column: 2;
  width: fit-content;
  height: fit-content;
  padding: 1rem;
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
const filterProducts = (setFunc: any, url: any) => {
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

const MainBoard = ({ products, loading }: any) => {
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
        ? products.map((product: any) => (
            <Product key={product.id}>
              <figure>
                <img src={product.image} alt={product.title} />
              </figure>
              <ProductDesc>
                <h2>
                  <Link to={`/category/${product.id}`}>{product.title}</Link>
                </h2>
                <p>
                  <Link to={`/category/${product.id}`}>
                    {product.description}
                  </Link>
                </p>
              </ProductDesc>
            </Product>
          ))
        : products
            .filter((product: any) => product.category === category)
            .map((product: any) => (
              <Product key={product.id}>
                <figure>
                  <img src={product.image} alt={product.title} />
                </figure>
                <ProductDesc>
                  <h2>
                    <Link to={`/category/${product.id}`}>{product.title}</Link>
                  </h2>
                  <p>
                    <Link to={`/category/${product.id}`}>
                      {product.description}
                    </Link>
                  </p>
                </ProductDesc>
              </Product>
            ))}
    </ProductTable>
  );
};

export default MainBoard;
