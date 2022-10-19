import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import TopLists from '../../components/main/TopLists';
import CommunityTopList from '../../components/main/CommunityTopList';
import PopularList from '../../components/main/PopularList';
import { useEffect } from 'react';
import { READ_COMMENT } from '../../modules/redux/commentSlice';
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
const MainPageContainer = ({ products }: any) => {
  const { comment, error, loading } = useAppSelector(
    ({ comment, loading }: { comment: any; loading: any }) => ({
      comment: comment.data,
      error: comment.error,
      loading: loading['products/READ_COMMENT'],
    })
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(READ_COMMENT());
  }, [dispatch]);
  return (
    <MainSection>
      <TopLists products={products} comment={comment} />
      <CommunityTopList />
      <PopularList />
    </MainSection>
  );
};

export default MainPageContainer;
