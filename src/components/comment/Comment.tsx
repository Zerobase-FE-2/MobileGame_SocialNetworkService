import { comments } from '../../lib/fakeData/comments';

const Comment = () => {
  return (
    <>
      <input type="text" />
      <button>입력</button>
      <ul>
        {comments.map((comment) => (
          <li>
            <span>{comment.username}</span>
            {comment.text}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Comment;
