import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const CommentLi = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  border-radius: 10px;
  padding-bottom: 0.5rem;
  outline: none;
  width: 90%;
  margin-right: 5px;
  padding-left: 7px;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;
const CommentSpan = styled(Button)`
  margin-right: 5px;
`;

const Comment = ({ comment, user, actionButtons }: any) => {
  return (
    <>
      <CommentLi>
        <CommentSpan>{comment.user.username}</CommentSpan>
        {comment.text}
      </CommentLi>
      {actionButtons}
    </>
  );
};
export default Comment;
