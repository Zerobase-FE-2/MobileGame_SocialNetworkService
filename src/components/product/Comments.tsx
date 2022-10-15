import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { REMOVE_COMMENT } from '../../modules/redux/commentSlice';
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
  div button {
    margin-left: 1rem;
  }
`;

const Comments = ({ params, comment }: any) => {
  const dispatch = useAppDispatch();
  const content = comment.filter((item: any) => item.group == params.id);
  if (content.length === 0) {
    return <></>;
  }
  return (
    <CommentList>
      {content.map((item: any) => (
        <li key={item.date}>
          <p>{item.contents.comment}</p>
          <div>
            <Button>수정</Button>
            <Button
              onClick={() => {
                dispatch(REMOVE_COMMENT({ item: item }));
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
