import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
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

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = () => {
  return (
    <PostViewerBlock>
      <Helmet>
        <title>Post</title>
      </Helmet>
      <PostHead>
        <h1>제목</h1>
        <SubInfo
          username="username"
          publishedDate={new Date()}
          hasMarginTop={false}
        />
        <Tags tags={['태그1', '태그2', '태그3']} />
      </PostHead>
      <PostContent
        dangerouslySetInnerHTML={{ __html: `<p>HTML <b>내용입니다</b></p>` }}
      />
    </PostViewerBlock>
  );
};

export default PostViewer;
