import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostViewer from '../../components/post/PostViewer';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import {
  READ_POST,
  UNLOAD_POST as unloadPost,
} from '../../modules/redux/postSlice';
import PostActionButtons from '../../components/post/PostActionButtons';
import { SET_ORIGINAL_POST } from '../../modules/redux/writeSlice';
import { removePost } from '../../modules/firebase/write';

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
  const { post, error, loading, user } = useAppSelector(
    ({ post, loading, user }: any) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
      //TODO: user 관리 이후에 변경필요
    })
  );

  useEffect(() => {
    dispatch(READ_POST(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(SET_ORIGINAL_POST(post));
    navigate('/boardwrite');
  };

  const onRemove = async () => {
    console.log('삭제', postId);
    try {
      await removePost(postId as string);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  //TODO: user 관리 이후에 변경필요
  const ownPost = (user && user.uid) === (post && post.user._id);
  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default PostViewerContainer;
