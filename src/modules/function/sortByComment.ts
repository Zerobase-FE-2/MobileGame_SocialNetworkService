import { comment } from '../redux/commentSlice';
import { product } from '../redux/productsSlice';

const sortByComment = (products: product[], comments: comment[]): product[] => {
  const obj = comments.reduce(
    (acc: { [key: string]: number }, cur: comment) => {
      acc[cur.group] = (acc[cur.group] || 0) + 1;
      return acc;
    },
    {}
  );
  const arr = Object.keys(obj).map((key: string) => [Number(key), obj[key]]);
  arr.sort((a: number[], b: number[]) => {
    return b[1] - a[1];
  });
  const result: product[] = [];
  for (let i = 0; i < 5; i++) {
    result.push(products.find((item: product) => item.id === arr[i][0])!);
  }
  return result;
};

export default sortByComment;
