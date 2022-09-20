import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WriteActionButton from '../../components/write/WriteActionButton';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import { WRITE_POST } from '../../modules/redux/writeSlice';
import type { WriteState } from '../../modules/redux/writeSlice';

const WriteActionButtonContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { title, body, tags, post, postError }: WriteState = useAppSelector(
    ({ write }: { write: WriteState }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
    })
  );
  const onPublish = () => {
    dispatch(WRITE_POST({ title, body, tags }));
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};
export default WriteActionButtonContainer;
