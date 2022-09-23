import styled from 'styled-components';

const MainSection = styled.section`
  height: full;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1rem 3rem 1rem;
  background-color: #f1f1f1;
  article {
    display: flex;
    flex-direction: column;
    height: full;
    background-color: #3284ff;
    border-radius: 10px;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 0 12rem 3rem 12rem;
  }
`;
const TopList = styled.article`
  display: flex;
  flex-direction: column;
  height: full;
  background-color: #3284ff;
  border-radius: 10px;
  @media (min-width: 1024px) {
    grid-row: 1 / span 2;
  }
  @media (max-width: 1024px) {
    margin: 1rem 3rem 0 3rem;
  }
`;

const TopUl = styled.ul`
  height: 27.35rem;
  border-radius: 0 0 10px 10px;
  background-color: white;
  margin: 0;
  padding: 0;
`;

const OtherUl = styled.ul`
  height: 12rem;
  margin: 0;
  padding: 0;
  border-radius: 0 0 10px 10px;
  background-color: white;
`;

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;
const CategoryList = styled.ul`
  display: flex;
  margin: 0;
`;
const Category = styled.li`
  padding: 0.5rem;
`;
const Article = styled.article`
  background-color: #3284ff;
  border-radius: 10px;
  @media (max-width: 1024px) {
    margin: 1rem 3rem 0 3rem;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: large;
  font-weight: 600;
  padding: 0.5rem;
  margin: 0;
`;

export const MainPage = () => {
  return (
    <MainSection>
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
      <Article>
        <Title>자유 게시판</Title>
        <OtherUl>내용</OtherUl>
      </Article>
      <Article>
        <Title>인기 게시물</Title>
        <OtherUl>내용</OtherUl>
      </Article>
    </MainSection>
  );
};
