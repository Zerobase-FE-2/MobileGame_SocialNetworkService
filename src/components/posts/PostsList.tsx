import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import Category from './Category';
import BestBoards from './BestBoards';

const Wrapper = styled(Responsive)`
  display: flex;
  min-height: 90vh;
`;

const SideBlock = styled.div`
  @media (max-width: 1024px) {
    flex: 1 1 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
  margin-top: 3rem;
  padding-right: 1rem;
`;

const PostListBlock = styled(Responsive)`
  @media (max-width: 1024px) {
    flex: 6 1 0;
  }
  @media (max-width: 768px) {
    flex: 1 1 0;
  }

  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PAGE_PER_POST = 5;
const PostItem = ({ post }: { post: any }) => {
  const { category, publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        category={category}
        username={user.username}
        publishedDate={new Date(publishedDate)}
        hasMarginTop={false}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({
  posts,
  loading,
  error,
  showWriteButton,
  categories,
  boards,
  page,
}: any) => {
  if (error) {
    return <PostListBlock>에러가 발생 하였습니다.</PostListBlock>;
  }
  if (posts) {
    posts = Object.values(posts).slice(
      (page - 1) * PAGE_PER_POST,
      page * PAGE_PER_POST
    );
  }

  return (
    <Wrapper>
      <SideBlock>
        <Category categories={categories} />
        <BestBoards boards={boards} />
      </SideBlock>
      <PostListBlock>
        <WritePostButtonWrapper>
          {showWriteButton && (
            <Button cyan to="/boardwrite">
              새 글 작성하기
            </Button>
          )}
        </WritePostButtonWrapper>
        {!loading && posts && (
          <div>
            {posts.map((post: any) => (
              <PostItem post={post} key={post._id} />
            ))}
          </div>
        )}
      </PostListBlock>
    </Wrapper>
  );
};

export default PostList;
