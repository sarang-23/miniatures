/*
Map takes a function as argument, returns an array of resultes computed
over each of the calling array's elements.
*/
Array.prototype.myMap = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = fn(this[i]);
  }
  return result;
};

Array.prototype.myFilter = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (fn, initialVal) {
  const self = this;
  let res;
  if (initialVal !== undefined) {
    res = initialVal;
    for (let i = 0; i < self.length; i++) {
      res = fn(res, self[i]);
    }
  } else {
    res = this[0];
    for (let i = 1; i < self.length; i++) {
      res = fn(res, self[i]);
    }
  }

  return res;
};
console.log([1, 2, 3, 4].myMap((ele) => ele + 1));
console.log([1, 2, 3, 4].myFilter((ele) => ele > 2));
console.log([1, 2, 3, 4].myReduce((accumulator, ele) => ele + accumulator));
