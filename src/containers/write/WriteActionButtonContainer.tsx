import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WriteActionButton from '../../components/write/WriteActionButton';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import { UPDATE_POST, WRITE_POST } from '../../modules/redux/writeSlice';
import type { WriteState } from '../../modules/redux/writeSlice';

const WriteActionButtonContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    title,
    body,
    tags,
    category,
    viewCnt,
    likeCnt,
    dislikeCnt,
    post,
    postError,
    originalPostId,
    user,
  }: any = useAppSelector(
    ({ write, user }: { write: WriteState; user: any }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      category: write.category,
      viewCnt: write.viewCnt,
      likeCnt: write.likeCnt,
      dislikeCnt: write.dislikeCnt,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
      user: user.user,
    })
  );

  const onPublish = () => {
    if (originalPostId) {
      dispatch(
        UPDATE_POST({
          title,
          body,
          tags,
          category,
          likeCnt,
          dislikeCnt,
          viewCnt,
          id: originalPostId,
        })
      );
      return;
    }
    dispatch(
      WRITE_POST({
        title,
        body,
        tags,
        category,
        viewCnt: 0,
        likeCnt: 0,
        dislikeCnt: 0,
        user,
      })
    );
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      console.log(post);
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return (
    <WriteActionButton
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!originalPostId}
    />
  );
};
export default WriteActionButtonContainer;
