const sortByScore = (arr: []) => {
  let temp: any = [];
  let result: any = [];
  arr.forEach((item: any) => temp.push(item));
  temp.sort((a: any, b: any) => {
    return b.rating.score - a.rating.score;
  });
  for (let i = 0; i < 5; i++) {
    result.push(temp[i]);
  }
  return result;
};

export default sortByScore;
