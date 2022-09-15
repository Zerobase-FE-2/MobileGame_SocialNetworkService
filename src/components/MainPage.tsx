import tw from 'tailwind-styled-components';

const MainSection = tw.section`
h-full grid grid-cols-2 gap-4 bg-white px-48 pb-12
`;

const CarouselSlider = tw.article`
w-full h-72 col-span-2 text-center bg-black text-white
`;

const TopList = tw.article`
row-span-2 flex flex-col h-full bg-blue-500 rounded shadow
`;

const TopMenu = tw.div`
flex justify-between text-white
`;

const CategoryList = tw.ul`
flex
`;

const Category = tw.li`
p-2
`;

const Article = tw.article`
bg-blue-500 rounded shadow
`;

const Title = tw.h2`
p-2 text-white font-semibold
`;

export const MainPage = () => {
  return (
    <MainSection>
      <CarouselSlider>place for carousel slider</CarouselSlider>
      <TopList>
        <TopMenu>
          <Title>TOP 5</Title>
          <CategoryList>
            <Category>인기 순</Category>
            <Category>최신 순</Category>
            <Category>댓글 순</Category>
          </CategoryList>
        </TopMenu>
        <ul className="h-full bg-white rounded-b">내용</ul>
      </TopList>
      <Article>
        <Title>자유 게시판</Title>
        <ul className="h-48 bg-white rounded-b">내용</ul>
      </Article>
      <Article>
        <Title>인기 게시물</Title>
        <ul className="h-48 bg-white rounded-b">내용</ul>
      </Article>
    </MainSection>
  );
};
