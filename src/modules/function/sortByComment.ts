const sortByComment = (products: any[], comments: any[]) => {
  const result = comments.reduce((acc: any, cur: any) => {
    acc[cur.group] = (acc[cur.group] || 0) + 1;
    return acc;
  }, {});
  let arr: any = [];
  for (let group in result) {
    arr.push([group, result[group]]);
  }
  arr.sort((a: any, b: any) => {
    return b[1] - a[1];
  });
  let resultArr: any[] = [];
  for (let i = 0; i < 5; i++) {
    resultArr.push(products.find((item: any) => item.id == arr[i][0]));
  }
  return resultArr;
};

export default sortByComment;
