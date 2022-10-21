import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import DisLikeButton from '../../components/LikeDisLike/DisLikeButton';
import LikeButton from '../../components/LikeDisLike/LikeButton';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import { ADD_CNT } from '../../modules/redux/postSlice';
const Wrapper = styled(Responsive)`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
const LikeDisLikeContainer = () => {
  const { postId } = useParams();
  const { post, loading } = useAppSelector(({ post, loading }: any) => ({
    post: post.post,
    loading: loading['post/ADD_CNT'],
  }));
  const dispatch = useAppDispatch();

  const handleLikeAdd = () => {
    if (loading) return;
    const cnt = post.like_cnt;
    dispatch(ADD_CNT({ postId, form: 'likeCnt', cnt }));
  };
  const handleDislikeAdd = () => {
    if (loading) return;
    const cnt = post.dislike_cnt;
    dispatch(ADD_CNT({ postId, form: 'dislikeCnt', cnt }));
  };

  return (
    <>
      {!loading && post && (
        <Wrapper>
          <LikeButton like_cnt={post.likeCnt} onAdd={handleLikeAdd} />
          <DisLikeButton
            dislike_cnt={post.dislikeCnt}
            onAdd={handleDislikeAdd}
          />
        </Wrapper>
      )}
    </>
  );
};

export default LikeDisLikeContainer;
