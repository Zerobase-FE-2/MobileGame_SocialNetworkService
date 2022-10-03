import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Comment from './Comment';

const CommentsBlock = styled(Responsive)``;

const CommentUl = styled.ul`
  width: 100%;
`;

const Comments = ({ loading, comments, user, actionButtons }: any) => {
  if (comments) {
    comments = Object.values(comments);
  }

  return (
    <CommentsBlock>
      {!loading && comments && (
        <CommentUl>
          {comments.map((comment: any) => (
            <Comment
              key={comment._id}
              comment={comment}
              user={user}
              actionButtons={
                (user && user.uid) === comment.user._id && actionButtons
              }
            />
          ))}
        </CommentUl>
      )}
    </CommentsBlock>
  );
};
export default Comments;
