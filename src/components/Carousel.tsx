import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';

const CarouselSlider = tw.div`
w-full h-72 bg-gray-300
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
      <img
        className="w-full max-h-full"
        src={docs[num].image}
        alt={docs[num].title}
      />
    </CarouselSlider>
  );
};
