import styled from 'styled-components';
import Responsive from '../common/Responsive';
import AskLoginModal from './AskLoginModal';
import Comment from './Comment';

const CommentsBlock = styled(Responsive)``;

const CommentUl = styled.ul`
  width: 100%;
`;

const Comments = ({
  loading,
  comments,
  user,
  actionButtons,
  visible,
  onCancel,
  onLogin,
}: any) => {
  if (comments) {
    comments = Object.values(comments);
  }

  return (
    <>
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
      <AskLoginModal visible={visible} onCancel={onCancel} onLogin={onLogin} />
    </>
  );
};
export default Comments;
