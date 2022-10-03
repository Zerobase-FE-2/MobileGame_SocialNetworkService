import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../main';

const Image = styled.img`
  width: 1024px;
  height: 18rem;

  @media (max-width: 1024px) {
    width: 100vw;
  }
`;

const randomInt = (arr: []): number => {
  return Math.floor(Math.random() * arr.length);
};

const CarouselSlider = () => {
  const data = useSelector((state: RootState) => state.products);
  const list = data.data.gameList;
  const [img, setImg] = useState(randomInt(list as []));
  useEffect(() => {
    const interval = setInterval(() => {
      setImg(randomInt(list as []));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Link to={`/${list[img].id}`}>
      <Image src={list[img].screenshot[0]} alt={list[img].title} />
    </Link>
  );
};

export default CarouselSlider;
