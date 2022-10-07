import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const CommentDiv = styled.div`
  width: 1024px;
  padding: 1rem;
  margin: 0 auto;
  background-color: ${palette.blue[0]};
  form {
    display: flex;
    margin: 0 auto;
  }
  textarea {
    resize: none;
    border: none;
  }
  button {
    width: 5.5rem;
    height: 5.5rem;
    margin-left: 1rem;
  }
`;

const WriteComment = () => {
  return (
    <CommentDiv>
      <h2>Comments</h2>
      <form action="">
        <textarea name="comment" id="comment" cols={110} rows={5} />
        <Button>등록</Button>
      </form>
    </CommentDiv>
  );
};

export default WriteComment;
