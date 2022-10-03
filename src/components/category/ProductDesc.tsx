import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useAppSelector } from '../../modules/redux/hook';

const Section = styled.section`
min-height : full
background-color : ${palette.black[0]};
article {
  display : flex;
  padding : 3rem;
  background-color : white;
}
`;

const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

const Title = styled.h2`
  color: black;
  font-size: xx-large;
  font-weight: 600;
  margin-top: 0;
`;

const Image = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 10px;
`;

const DescCategory = styled.p`
  color: black;
  font-weight: 600;
  margin-top: 0;
`;

const DescP = styled.p`
  color: black;
  margin-top: 0;
`;

const ProductDesc = () => {
  return (
    <Section>
      <article>
        <Image src={current.image} alt={current.title} />
        <DescDiv>
          <Title>{current.title}</Title>
          <DescCategory>{current.category}</DescCategory>
          <DescP>{current.company}</DescP>
          <DescP>{current.description}</DescP>
        </DescDiv>
      </article>
    </Section>
  );
};

export default ProductDesc;
