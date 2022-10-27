import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../modules/redux/hook';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { comment, CREATE_COMMENT } from '../../modules/redux/commentSlice';
import Button from '../common/Button';
import React, { MouseEvent } from 'react';

const CommentDiv = styled.div`
  width: 1024px;
  padding: 1rem;
  margin: 0 auto;
  background-color: ${palette.blue[0]};
  @media (max-width: 1024px) {
    width: 100vw;
  }
  form {
    display: flex;
    margin: 0 auto;
  }
  textarea {
    resize: vertical;
    border: none;
  }
  button {
    width: 5.5rem;
    height: 5.5rem;
    margin-left: 1rem;
  }
`;

const WriteComment = ({ comment }: { comment: comment[] }) => {
  const param = useParams();
  const dispatch = useAppDispatch();
  let count = comment.length;
  return (
    <CommentDiv>
      <h2>Comments</h2>
      <form>
        <textarea cols={110} rows={5} />
        <Button
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            dispatch(
              CREATE_COMMENT({
                contents: {
                  comment: (event.target as HTMLFormElement).form[0].value,
                  commenter: null,
                },
                group: param.id,
                id: count,
              })
            );
          }}
        >
          등록
        </Button>
      </form>
    </CommentDiv>
  );
};

export default WriteComment;
