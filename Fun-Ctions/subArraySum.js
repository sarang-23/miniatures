const printSubArrays = (arr, sum) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let s = arr[i];
    let tempArr = [arr[i]];
    for (let j = i + 1; j < length; j++) {
      s += arr[j];
      tempArr.push(arr[j]);
      if (s == sum) {
        console.log(tempArr);
      }
    }
  }
};

printSubArrays([3, 4, -7, 1, 3, 3, 1, -4], 7);
