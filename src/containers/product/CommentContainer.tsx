import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WriteComment from '../../components/create/WriteComment';
import Spinner from '../../components/loading/Spinner';
import Comments from '../../components/product/Comments';
import {
  comment,
  commentInit,
  READ_COMMENT,
} from '../../modules/redux/commentSlice';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import { loadingInit } from '../../modules/redux/loadingSlice';

const CommentContainer = () => {
  let params = useParams();
  const { comment, error, loading } = useAppSelector(
    ({ comment, loading }: { comment: commentInit; loading: loadingInit }) => ({
      comment: comment.data,
      error: comment.error,
      loading: loading['comment/READ_COMMENT'],
    })
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(READ_COMMENT());
  }, [dispatch]);
  if (loading || !comment) {
    return <Spinner />;
  }
  if (error) {
    console.error(error);
  }
  return (
    <>
      <WriteComment comment={comment} />
      <Comments params={params} comment={comment} />
    </>
  );
};

export default CommentContainer;
