/**
 *
 */
// Inputs
// inputs: An array of inputs.
// limit: The maximum number of operations at any one time.
// iterateeFn: The async function that should be called with each input to generate the corresponding output. It will have two arguments:
//      input: The input being processed.
//      callback: A function that will be called when the input is finished processing. It will be provided one argument, the processed output.
// callback: A function that should be called with the array of outputs once all the inputs have been processed.

/**
 * 1. Looks like a promise based question.
 * 2. Map Limit function needs to wait for all inputs to be processed. But it is not itself an async function.
 * 3. Where is limit used?? : Max number of inputs getting processed at any given time.
 * 4. Iteratee function :
 *
 */

function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function chop(arr, limit) {
  let index = 0;
  const chopped = [];
  while (index < arr.length) {
    chopped.push(arr.slice(index, index + limit));
    index = index + limit;
  }
  return chopped;
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  // implement here
  const chopped = chop(inputs, limit);

  let result = chopped.reduce((prev, curr) => {
    return prev.then((val) => {
      return new Promise((resolve, reject) => {
        const temp = [];
        curr.forEach((input) => {
          iterateeFn(input, (res) => {
            temp.push(res);
            if (temp.length == curr.length) {
              resolve([...val, ...temp]);
            }
          });
        });
      });
    });
  }, Promise.resolve([]));

  result.then((v) => callback(v));
}

const mapLimitAlt = (inputArr, limit, iterateeFn, callback) => {
  const result = [];
  let index = 0;
  async function execute() {
    if (index < inputArr.length) {
      console.log(index);
      let inputsToProcess = inputArr.slice(index, index + limit);
      const promisArr = [];
      inputsToProcess.forEach((i) => {
        promisArr.push(
          new Promise((resolve) => {
            iterateeFn(i, (val) => {
              result.push(val);

              resolve();
            });
          })
        );
      });
      await Promise.all(promisArr);
      index = index + limit;
      execute();
    }
  }
  execute().then((res) => console.log(res));
};

const mapLimitAlt1 = (inputArr, limit, iterateeFn, callback) => {
  const chopped = chop(inputArr, limit);
  const result = [];
  let i = 0;
  async function execute() {
    if (i < chopped.length) {
      let curr = chopped[i];
      const promisArr = [];
      curr.forEach((input) => {
        let p = new Promise((resolve) => {
          iterateeFn(input, (val) => {
            resolve();
            console.log("resolved with value ", val);
            result.push(val);
          });
        });
        promisArr.push(p);
        console.log("processing input ", input);
      });
      i++;
      Promise.all(promisArr).then(execute);
    }
  }
  execute().then((res) => console.log(result));
};

mapLimitAlt1([1, 2, 3, 4, 5], 3, getNameById, (allResults) => {
  console.log("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
