import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TopList = styled.article`
  display: flex;
  flex-direction: column;
  height: full;
  background-color: ${palette.blue[0]};
  border-radius: 10px;
  @media (min-width: 1024px) {
    grid-row: 1 / span 2;
  }
  @media (max-width: 1024px) {
    margin: 1rem 3rem 0 3rem;
  }
`;
const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;
const TopUl = styled.ul`
  height: 27.5rem;
  border-radius: 0 0 10px 10px;
  background-color: white;
  margin: 0;
  padding: 0;
`;
const CategoryList = styled.ul`
  color: black;
  display: flex;
  margin: 0;
`;
const Category = styled.li`
  padding: 0.5rem;
  list-style-type: none;
`;
const Title = styled.h2`
  color: black;
  font-size: large;
  font-weight: 600;
  padding: 0.5rem;
  margin: 0;
`;

const TopLists = () => {
  return (
    <TopList>
      <TopMenu>
        <Title>TOP 5</Title>
        <CategoryList>
          <Category>인기 순</Category>
          <Category>최신 순</Category>
          <Category>댓글 순</Category>
        </CategoryList>
      </TopMenu>
      <TopUl>내용</TopUl>
    </TopList>
  );
};

export default TopLists;
