import tw from 'tailwind-styled-components';

const CategorySection = tw.section`
flex flex-wrap justify-between bg-white
`;

const SubNav = tw.nav`
w-full h-10 pl-40 flex items-center bg-blue-700
`;

const SubNavList = tw.h1`
px-4 font-semibold text-white
`;

const CategoryNav = tw.nav`
w-40 min-h-screen h-full border-r
`;

const CategoryList = tw.li`
p-2 text-black
`;

const Article = tw.article`

`;

const PopularList = tw.div`
w-60 border-l
`;

export const CategoryPage = () => {
  return (
    <CategorySection>
      <SubNav>
        <SubNavList>이름 순</SubNavList>
        <SubNavList>평점 순</SubNavList>
        <SubNavList>날짜 순</SubNavList>
      </SubNav>
      <CategoryNav>
        <h2 className="p-2 font-semibold text-black">카테고리</h2>
        <ul>
          <CategoryList>전체</CategoryList>
          <CategoryList>액션</CategoryList>
          <CategoryList>어드벤쳐</CategoryList>
          <CategoryList>롤플레잉</CategoryList>
          <CategoryList>스포츠</CategoryList>
          <CategoryList>레이싱</CategoryList>
          <CategoryList>전략</CategoryList>
          <CategoryList>인디</CategoryList>
          <CategoryList>음악</CategoryList>
          <CategoryList>보드</CategoryList>
          <CategoryList>캐주얼</CategoryList>
        </ul>
      </CategoryNav>
      <Article></Article>
      <PopularList>
        <h2 className="p-2 font-semibold text-black">인기 게임</h2>
      </PopularList>
    </CategorySection>
  );
};
