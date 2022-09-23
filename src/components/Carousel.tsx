import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const CarouselSlider = styled.div`
  width: 100vw;
  height: 18rem;
  background-color: #f1f1f1;

  img {
    width: 100vw;
    max-height: 18rem;
  }
`;

const randomInt = (docs: []): number => {
  return Math.floor(Math.random() * docs.length);
};

export const Carousel = ({ docs }: any) => {
  const [num, setNum] = useState(randomInt(docs));

  useEffect(() => {
    const interval = setInterval(() => {
      setNum(randomInt(docs));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <CarouselSlider>
      <Link to={`/${docs[num].id}`}>
        <img src={docs[num].screenshot[0]} alt={docs[num].title} />
      </Link>
    </CarouselSlider>
  );
};
