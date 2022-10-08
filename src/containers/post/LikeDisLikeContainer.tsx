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
    dispatch(ADD_CNT({ postId, form: 'like_cnt', cnt }));
  };
  const handleDislikeAdd = () => {
    if (loading) return;
    const cnt = post.dislike_cnt;
    dispatch(ADD_CNT({ postId, form: 'dislike_cnt', cnt }));
  };

  return (
    <>
      {!loading && post && (
        <Wrapper>
          <LikeButton like_cnt={post.like_cnt} onAdd={handleLikeAdd} />
          <DisLikeButton
            dislike_cnt={post.dislike_cnt}
            onAdd={handleDislikeAdd}
          />
        </Wrapper>
      )}
    </>
  );
};

export default LikeDisLikeContainer;
