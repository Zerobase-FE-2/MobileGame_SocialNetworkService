import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WriteComment from '../../components/create/WriteComment';
import Comments from '../../components/product/Comments';
import { READ_COMMENT } from '../../modules/redux/commentSlice';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';

const CommentContainer = () => {
  let params = useParams();
  const { comment, error, loading } = useAppSelector(
    ({ comment, error, loading }: any) => ({
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
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <WriteComment comment={comment} />
      <Comments params={params} comment={comment} />
    </>
  );
};

export default CommentContainer;
