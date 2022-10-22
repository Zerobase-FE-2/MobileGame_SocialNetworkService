import { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {
  REMOVE_COMMENT,
  UPDATE_COMMENT,
} from '../../modules/redux/commentSlice';
import { useAppDispatch } from '../../modules/redux/hook';
import Button from '../common/Button';

const CommentList = styled.ul`
  width: 1024px;
  padding: 0;
  margin: 0 auto;
  background-color: ${palette.black[0]};
  li {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${palette.blue[0]};
    padding: 1rem;
  }
  input {
    width: 768px;
    height: 1.5rem;
    margin: 1rem 0;
    border: none;
  }
  div button {
    margin-left: 1rem;
  }
`;

const Comments = ({ params, comment }: any) => {
  const [commentInfo, setCommentInfo] = useState('');
  const [chosen, setChosen] = useState(null);
  const dispatch = useAppDispatch();
  const content = comment.filter((item: any) => item.group == params.id);
  if (content.length === 0) {
    return <></>;
  }
  return (
    <CommentList>
      {content.map((item: any) => (
        <li key={item.id}>
          {chosen !== item ? (
            <p>{item.contents.comment}</p>
          ) : (
            <input
              type="text"
              name="commentText"
              id="commentText"
              onChange={(event: any) => {
                setCommentInfo(event.target.value);
              }}
              defaultValue={commentInfo}
            />
          )}
          <div>
            <Button
              onClick={(event: any) => {
                setChosen(item);
                setCommentInfo(item.contents.comment);
                if (event.target.innerHTML === '등록') {
                  dispatch(
                    UPDATE_COMMENT({ comment: item, desc: commentInfo })
                  );
                  setChosen(null);
                }
              }}
            >
              {item !== chosen ? '수정' : '등록'}
            </Button>
            <Button
              onClick={() => {
                dispatch(REMOVE_COMMENT({ item: item.id }));
              }}
            >
              삭제
            </Button>
          </div>
        </li>
      ))}
    </CommentList>
  );
};

export default Comments;
