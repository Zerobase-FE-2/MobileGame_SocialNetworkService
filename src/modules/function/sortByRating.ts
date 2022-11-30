import { product } from '../redux/productsSlice';

const sortByScore = (arr: product[]): product[] => {
  let temp: product[] = [];
  let result: product[] = [];
  arr.forEach((item: product) => temp.push(item));
  temp.sort((a: product, b: product) => {
    return b.rating.score - a.rating.score;
  });
  for (let i = 0; i < 5; i++) {
    result.push(temp[i]);
  }
  return result;
};

export default sortByScore;
