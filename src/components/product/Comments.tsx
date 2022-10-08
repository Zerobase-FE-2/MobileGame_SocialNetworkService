import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const CommentList = styled.ul`
  width: 1024px;
  background-color: ${palette.black[0]};
`;

const Comments = () => {
  return <CommentList></CommentList>;
};

export default Comments;
