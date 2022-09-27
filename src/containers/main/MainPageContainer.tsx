import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import TopLists from '../../components/main/TopLists';
import CommunityTopList from '../../components/main/CommunityTopList';
import PopularList from '../../components/main/PopularList';
const MainSection = styled.section`
  height: full;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1rem 3rem 1rem;
  background-color: ${palette.black[0]};
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 0 12rem 3rem 12rem;
  }
`;
const MainPageContainer = () => {
  return (
    <MainSection>
      <TopLists />
      <CommunityTopList />
      <PopularList />
    </MainSection>
  );
};

export default MainPageContainer;
