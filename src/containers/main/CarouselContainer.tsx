import CarouselSlider from '../../components/carousel/CarouselSlider';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const CarouselContainerDiv = styled.div`
  width: 1024px;
  height: 18rem;
  background-color: ${palette.black[0]};
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100vw;
  }
`;

const CarouselContainer = () => {
  return (
    <CarouselContainerDiv>
      <CarouselSlider />
    </CarouselContainerDiv>
  );
};

export default CarouselContainer;
