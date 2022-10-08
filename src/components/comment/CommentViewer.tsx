import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Comment from './Comment';

const CommentViewerBlock = styled(Responsive)``;

const CommentViewer = () => {
  return (
    <CommentViewerBlock>
      <h3>댓글</h3>
      <Comment />
    </CommentViewerBlock>
  );
};

export default CommentViewer;
