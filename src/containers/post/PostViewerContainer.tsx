import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostViewer from '../../components/post/PostViewer';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import {
  READ_POST,
  UNLOAD_POST as unloadPost,
} from '../../modules/redux/postSlice';

interface post {
  title: string;
  body: string;
  tags: string[];
  user: user;
  publishedDate: string;
  __v: number;
  postError: boolean | null;
}
interface user {
  username: string;
  _id: string | null;
}
const PostViewerContainer = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { post, error, loading } = useAppSelector(
    ({ post, loading }: { post: any; loading: any }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
    })
  );

  useEffect(() => {
    dispatch(READ_POST(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return <PostViewer post={post} loading={loading} error={error} />;
};

export default PostViewerContainer;
