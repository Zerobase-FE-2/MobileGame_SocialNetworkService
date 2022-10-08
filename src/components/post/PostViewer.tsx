import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
  border-bottom: 1px solid ${palette.gray[2]};
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;
const ViewSpan = styled.span`
  display: block;
  text-align: end;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  text-align: end;
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({
  post,
  error,
  loading,
  actionButtons,
}: {
  post: any;
  error: any;
  loading: boolean;
  actionButtons: any;
}) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock> 존재하지 않는 포스트 입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { category, title, user, body, publishedDate, tags, view_cnt } = post;

  return (
    <PostViewerBlock>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {actionButtons}
      <PostHead>
        <ViewSpan>조회수 {view_cnt}</ViewSpan>
        <h1>{title}</h1>
        <SubInfo
          category={category}
          username={user.username}
          publishedDate={new Date(publishedDate)}
          hasMarginTop
        ></SubInfo>
        <Tags tags={tags} />
      </PostHead>

      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
