import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import TopLists from '../../components/main/TopLists';
import CommunityTopList from '../../components/main/CommunityTopList';
import PopularList from '../../components/main/PopularList';
const MainSection = styled.section`
  width: 1024px;
  height: full;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${palette.black[0]};
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 0 auto;
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
