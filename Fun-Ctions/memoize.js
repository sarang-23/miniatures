function memoize(func) {
  // code goes here
  let memoArgs = undefined;
  let memoResult = undefined;

  const isEqual = (args1, args2) => {
    //If any arg is undefinded return false
    if (!args1 || !args2) return false;

    //Compare Primitive types
    if (typeof args1 === "number" || typeof args1 === "string") {
      return args1 === args2;
    }

    // For array of args, iterate over the array recursively compare each element.
    for (let i = 0; i < args1.length; i++) {
      if (typeof args1[i] === "object") {
        const m = Object.keys(args1[i]).map((k) => {
          if (!isEqual(args1[i][k], args2[i][k])) {
            return false;
          }
        });
        if (m.includes(false)) {
          return false;
        }
      } else if (!isEqual(args1[i], args2[i])) {
        return false;
      }
    }
    return true;
  };

  function myMemoFunc(...args) {
    if (memoArgs && isEqual(args, memoArgs)) {
      console.log("from cache : ", memoResult);
      return memoResult;
    } else {
      memoArgs = args;
      memoResult = func(...args);
      return memoResult;
    }
  }

  Function.prototype.clear = () => {
    memoArgs = undefined;
  };

  return myMemoFunc;
}

// ==============================
// Test suite #1 - Only most recent result is memoized

function square(x) {
  console.log(`computing ${x} * ${x}`);
  return x * x;
}

const memoizedSquare = memoize(square);

memoizedSquare(1); // from computation
memoizedSquare(1); // from cache
memoizedSquare(2); // from computation
memoizedSquare(2); // from cache
memoizedSquare(1); // from computation

// ==============================
// Test suite #2 - Can clear memoized result
// 2. Can clear memoized result

memoizedSquare(3); // from computation
memoizedSquare(3); // from cache
memoizedSquare.clear();
memoizedSquare(3); // from computation

// ==============================
// Test suite #3 - Works with arbitrary number of arguments (4 in this example)

function sum(a, b, c, d) {
  console.log(`computing ${a} + ${b} + ${c} + ${d}`);
  return a + b + c + d;
}

const memoizedSum = memoize(sum);

memoizedSum(1, 2, 3, 4); // from computation
memoizedSum(1, 2, 3, 4); // from cache
memoizedSum(2, 1, 3, 4); // from computation

// ==============================
// Test suite #4 - Non-primitive arguments are compared by deep equality

function compare(obj) {
  console.log(`comparing ${obj.a} and ${obj.b}`);
  return obj.a > obj.b;
}

const memoizedCompare = memoize(compare);

memoizedCompare({ a: 1, b: 2 }); // from computation
memoizedCompare({ a: 1, b: 2 }); // from cache
memoizedCompare({ b: 2, a: 1 }); // from cache
memoizedCompare({ b: 3, a: 1 }); // from computation
