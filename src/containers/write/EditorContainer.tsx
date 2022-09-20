import Editor from '../../components/write/Editor';

import { changeField, initialize } from '../../modules/redux/writeSlice';
import type { WriteState } from '../../modules/redux/writeSlice';
import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';

const EditorContainer = () => {
  const dispatch = useAppDispatch();

  const { title, body }: { title: string; body: string } = useAppSelector(
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
