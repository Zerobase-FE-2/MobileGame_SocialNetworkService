import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { product } from '../../modules/redux/productsSlice';

const Image = styled.img`
  width: 1024px;
  height: 18rem;

  @media (max-width: 1024px) {
    width: 100vw;
  }
`;

const randomInt = (arr: product[]): number => {
  return Math.floor(Math.random() * arr.length);
};

const CarouselSlider = ({ products, loading }: any) => {
  const [img, setImg] = useState(randomInt(products));

  useEffect(() => {
    const interval = setInterval(() => {
      setImg(randomInt(products));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {!loading && (
        <Link to={`/category/${products[img].id}`}>
          <Image src={products[img].screenshot[0]} alt={products[img].title} />
        </Link>
      )}
    </>
  );
};

export default CarouselSlider;
