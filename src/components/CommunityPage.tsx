import styled from 'styled-components';

const CommunitySection = styled.section`
  display: flex;
  color: black;
  background-color: #f1f1f1;
  nav {
    width: 12rem;
    height: 18rem;
    margin-top: 2rem;
    margin-left: 12rem;
    background-color: white;
  }
  li {
    margin: 1rem;
  }
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const PopularDiv = styled.div`
  width: 12rem;
  height: 24rem;
  margin: 2rem 0 2rem 12rem;
  background-color: white;
`;

const CommunityArticle = styled.article`
  width: full;
  margin: 2rem 12rem 2rem 2rem;
  background-color: white;
`;

const Title = styled.h2`
  margin: 1rem;
`;

export const CommunityPage = () => {
  return (
    <CommunitySection>
      <SideMenu>
        <div>
          <Title>카테고리</Title>
          <ul>
            <li>전체</li>
            <li>자유 게시판</li>
            <li>질문 게시판</li>
            <li>기타</li>
          </ul>
        </div>
        <PopularDiv>
          <Title>인기 게시글</Title>
        </PopularDiv>
      </SideMenu>
      <CommunityArticle></CommunityArticle>
    </CommunitySection>
  );
};
