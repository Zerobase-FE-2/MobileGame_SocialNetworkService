import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { product } from '../../modules/redux/productsSlice';

const Image = styled.div`
  width: 1024px;
  height: 18rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1024px) {
    width: 100vw;
  }
`;

const randomInt = (arr: product[]): number => {
  return Math.floor(Math.random() * arr.length);
};

const CarouselSlider = ({ products }: { products: product[] }) => {
  const [img, setImg] = useState(randomInt(products));

  useEffect(() => {
    const interval = setInterval(() => {
      setImg(randomInt(products));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Link to={`/category/${products[img].id}`}>
        <Image
          style={{ backgroundImage: `url(${products[img].screenshot[0]})` }}
        />
      </Link>
    </>
  );
};

export default CarouselSlider;
