import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentActionButtons from '../../components/comment/CommentActionButtons';
import CommentForm from '../../components/comment/CommentForm';
import Comments from '../../components/comment/Comments';
import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  WRITE_COMMENT,
} from '../../modules/redux/commentSlice';
import { LIST_COMMENTS } from '../../modules/redux/commentsSlice';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';

const CommentsContainer = () => {
  const [modal, setModal] = useState(false);
  const { postId } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { form, comments, error, loading, user } = useAppSelector(
    ({ comment, user, comments, loading }: any) => ({
      form: comment,
      comments: comments.comments,
      error: comments.error,
      loading: loading['comments/LIST_COMMENTS'],
      user: user.user,
    })
  );

  useEffect(() => {
    dispatch(LIST_COMMENTS({ postId }));
  }, [dispatch]);

  const onChange = (e: any) => {
    const { value, name } = e.target;
    console.log(value, name);
    dispatch(CHANGE_FIELD({ key: name, value }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');
    const { text } = form;
    if (!user) {
      setModal(true);
      return;
    }
    dispatch(WRITE_COMMENT({ text, user, postId }));
    dispatch(INITIALIZE_FORM({ text }));
  };

  const onEdit = () => {
    console.log('edit');
  };

  const onRemove = () => {
    console.log('remove');
  };

  const onCancel = () => {
    setModal(false);
  };

  const onLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <CommentForm form={form} onChange={onChange} onSubmit={onSubmit} />
      <Comments
        comments={comments}
        user={user}
        error={error}
        loading={loading}
        visible={modal}
        onCancel={onCancel}
        onLogin={onLogin}
        actionButtons={
          <CommentActionButtons onEdit={onEdit} onRemove={onRemove} />
        }
      />
    </>
  );
};
export default CommentsContainer;
