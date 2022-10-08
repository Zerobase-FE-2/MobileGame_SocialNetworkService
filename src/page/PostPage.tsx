import CommentContainer from '../containers/comment/CommentsContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import LikeDisLikeContainer from '../containers/post/LikeDisLikeContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <LikeDisLikeContainer />
      <CommentContainer />
    </>
  );
};

export default PostPage;
