import tw from 'tailwind-styled-components';

const MainSection = tw.section`
h-screen flex flex-col bg-white
`;

export const MainPage = () => {
  return (
    <MainSection>
      {/* carousel slider */}
      <article>
        <h2>TOP 5</h2>
        <ul>
          <li>인기 순</li>
          <li>최신 순</li>
          <li>댓글 순</li>
        </ul>
      </article>
      <article></article>
      <article></article>
    </MainSection>
  );
};
