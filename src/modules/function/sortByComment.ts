import { comment } from '../redux/commentSlice';
import { product } from '../redux/productsSlice';

const sortByComment = (products: product[], comments: comment[]): product[] => {
  const result = comments.reduce(
    (acc: { [key: string]: number }, cur: comment) => {
      acc[cur.group] = (acc[cur.group] || 0) + 1;
      return acc;
    },
    {}
  );
  let arr: Array<[string, number]> = [];
  for (let group in result) {
    arr.push([group, result[group]]);
  }

  arr.sort((a: [string, number], b: [string, number]) => {
    return b[1] - a[1];
  });

  let resultArr: product[] = [];
  for (let i = 0; i < 5; i++) {
    resultArr.push(
      products.find((item: product) => item.id.toString() === arr[i][0])!
    );
  }
  return resultArr;
};

export default sortByComment;
