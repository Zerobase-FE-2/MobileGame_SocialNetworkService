import Editor from '../../components/write/Editor';

import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../modules/writeSlice';
import type { WriteState } from '../../modules/writeSlice';
import { useEffect, useCallback } from 'react';

const EditorContainer = () => {
  const dispatch = useDispatch();

  const { title, body }: { title: string; body: string } = useSelector(
    ({ write }: { write: WriteState }) => ({
      title: write.title,
      body: write.body || '',
    })
  );

  const onChangeField = useCallback(
    (payload: any) => dispatch(changeField(payload)),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
