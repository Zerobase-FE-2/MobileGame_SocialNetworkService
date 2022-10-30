import { comment } from '../redux/commentSlice';

const setCommentID = (comment: comment[]): number | undefined => {
  let ID;
  const usedID = comment.map((item: comment) => item.id);
  const unknownID = [];
  for (let i = 0; i < comment.length; i++) {
    unknownID.push(i + 1);
  }
  ID = unknownID.find((int: number) => usedID.includes(int) === false);
  return ID;
};

export default setCommentID;
