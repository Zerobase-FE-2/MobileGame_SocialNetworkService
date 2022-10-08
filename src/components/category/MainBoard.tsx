import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  background-color: white;
  border-radius: 10px;
  figure {
    flex-shrink: 0;
    width: fit-content;
    height: full;
  }
  img {
    width: fit-content;
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
const MainBoard = ({ products, loading }: any) => {
  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <ProductTable>
      {!loading &&
        products &&
        products.map((product: any) => (
          <Product key={product.id}>
            <figure>
              <img src={product.image} alt={product.title} />
            </figure>
            <ProductDesc>
              <h2>
                <Link to={`/${product.id}`}>{product.title}</Link>
              </h2>
              <p>
                <Link to={`/${product.id}`}>{product.description}</Link>
              </p>
            </ProductDesc>
          </Product>
        ))}
    </ProductTable>
  );
};

export default MainBoard;
