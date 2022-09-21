import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import 'quill/dist/quill.bubble.css';

const EditorBlock = styled(Responsive)`
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 4rem;
  height: 70vh;
  background-color: ${palette.blue[2]};
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding: 5px;
  padding-bottom: 0.5rem;
  border: none;
  margin-bottom: 2rem;
  background-color: ${palette.blue[1]};
  width: 100%;
`;

const QuillWrapper = styled.div`
  height: 90%;
  background-color: ${palette.blue[1]};
  padding: 10px;
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({
  title,
  body,
  onChangeField,
}: {
  title: string;
  body: string;
  onChangeField: Function;
}) => {
  const quillElement = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<Quill>(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요...',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current || !quillInstance.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <div ref={quillElement}></div>
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
