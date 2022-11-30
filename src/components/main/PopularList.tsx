import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Article = styled.article`
  background-color: ${palette.blue[0]};
  border-radius: 10px;
  @media (max-width: 1024px) {
    margin: 1rem 3rem 0 3rem;
  }
  @media (max-width: 1024px) {
    width: 100vw;
    margin: 0;
  }
`;

const Title = styled.h2`
  color: black;
  font-size: large;
  font-weight: 600;
  padding: 0.5rem;
  margin: 0;
`;
const OtherUl = styled.ul`
  height: 12rem;
  margin: 0;
  padding: 0;
  border-radius: 0 0 10px 10px;
  background-color: white;
`;

const PopularList = () => {
  return (
    <Article>
      <Title>인기 게시물</Title>
      <OtherUl>내용</OtherUl>
    </Article>
  );
};

export default PopularList;
