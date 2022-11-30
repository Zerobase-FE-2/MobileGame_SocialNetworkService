import { Params } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { product } from '../../modules/redux/productsSlice';

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
  @media (max-width: 1024px) {
    width: 100vw;
  }
}
img {
  width: 1024px;
  height: 18rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100vw;
  }
}
`;
const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
  height: 18rem;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1024px) {
    width: 100vw;
  }
  img {
    width: 180px;
    height: 180px;
    margin-left: 1rem;
    border-radius: 10px;
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

const ProductDesc = ({
  params,
  products,
}: {
  params: Readonly<Params<string>>;
  products: product[];
}) => {
  const product: product = products.find(
    (item: product) => item.id.toString() === params.id
  )!;
  return (
    <Section id={params.id}>
      <ImageDiv
        style={{
          backgroundImage: `url(${product.screenshot[0]})`,
        }}
      >
        <img src={product.image} alt={product.title} />
      </ImageDiv>
      <article>
        <DescDiv>
          <Title>{product.title}</Title>
          <DescCategory>장르 : {product.category}</DescCategory>
          <DescCategory>제작사 : {product.company}</DescCategory>
          <DescCategory>게임 소개</DescCategory>
          <DescP>{product.description}</DescP>
        </DescDiv>
      </article>
    </Section>
  );
};

export default ProductDesc;
