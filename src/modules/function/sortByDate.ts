const sortByDate = (arr: []) => {
  let result: [] = [];
  for (let i = arr.length - 1; i > arr.length - 6; i--) {
    result.push(arr[i]);
  }
  return result;
};

export default sortByDate;