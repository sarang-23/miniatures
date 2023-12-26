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

const anySubarryAddsToZero = (arr) => {
  const sumSet = new Set();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0 || sumSet.has(sum)) {
      return true;
    }
    sumSet.add(sum);
  }
  return false;
};

console.log(anySubarryAddsToZero([3, 4, -7, 1, 3, 3, 1, -4]));
printSubArrays([3, 4, -7, 1, 3, 3, 1, -4], 7);
