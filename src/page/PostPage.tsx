import CommentContainer from '../containers/comment/CommentContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <CommentContainer />
    </>
  );
};

export default PostPage;
