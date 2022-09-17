import tw from 'tailwind-styled-components';

const CommunitySection = tw.section`
flex bg-gray-300 text-black
`;

const SideMenu = tw.div`
flex flex-col
`;

const CategoryDiv = tw.nav`
w-48 h-72 mt-8 ml-48 bg-white
`;

const CategoryList = tw.li`
m-4
`;

const PopularDiv = tw.div`
w-48 h-96 mt-8 mb-8 ml-48 bg-white
`;

const CommunityArticle = tw.article`
w-full mt-8 ml-8 mr-48 mb-8 bg-white
`;

export const CommunityPage = () => {
  return (
    <CommunitySection>
      <SideMenu>
        <CategoryDiv>
          <h2 className="m-4">카테고리</h2>
          <ul>
            <CategoryList>전체</CategoryList>
            <CategoryList>자유 게시판</CategoryList>
            <CategoryList>질문 게시판</CategoryList>
            <CategoryList>기타</CategoryList>
          </ul>
        </CategoryDiv>
        <PopularDiv>
          <h2 className="m-4">인기 게시글</h2>
        </PopularDiv>
      </SideMenu>
      <CommunityArticle></CommunityArticle>
    </CommunitySection>
  );
};
