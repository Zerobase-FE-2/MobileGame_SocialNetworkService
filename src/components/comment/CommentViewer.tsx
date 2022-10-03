import styled from 'styled-components';
import Responsive from '../common/Responsive';
import CommentForm from './CommentForm';

const CommentViewerBlock = styled(Responsive)``;

const CommentViewer = () => {
  return (
    <CommentViewerBlock>
      <h3>댓글</h3>
      <CommentForm />
    </CommentViewerBlock>
  );
};

export default CommentViewer;
