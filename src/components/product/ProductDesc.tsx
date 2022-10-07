import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Section = styled.section`
display : flex;
flex-direction : column;
justify-content : center;
min-height : full
background-color : ${palette.black[0]};
article {
  display : flex;
  width: 1024px;
  padding : 1rem;
  background-color : ${palette.blue[0]};
  margin : 0 auto;
}
img {
  width: 1024px;
  height: 18rem;
  margin: 0 auto;
}
`;

const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: black;
  font-size: xx-large;
  font-weight: 600;
  margin-top: 0;
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

const ProductDesc = ({ params, products }: any) => {
  const product = products.find((item: any) => item.id == params.id);
  return (
    <Section id={params.id}>
      <img src={product.image} alt={product.title} />
      <article>
        <DescDiv>
          <Title>{product.title}</Title>
          <DescCategory>{product.category}</DescCategory>
          <DescP>{product.company}</DescP>
          <DescP>{product.description}</DescP>
        </DescDiv>
      </article>
    </Section>
  );
};

export default ProductDesc;
