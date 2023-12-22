let name = {
  firstname: "Sarang",
  lastname: "Gupta",
};

let printFullName = function (hometown, country) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + country
  );
};

Function.prototype.myBind = function (...args) {
  let callee = this;
  params = args.slice(1);
  return function (...funcArgs) {
    callee.apply(args[0], [...params, ...funcArgs]);
  };
};
let printMyName = printFullName.myBind(name);
// printMyName( "Del", "Ind");

let multiply = function (x, y) {
  return x * y;
};

let multiplyByTwo = multiply.bind(this, 3);
// console.log(multiplyByTwo(5))

const flatten = function (obj, root) {
  let finalObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      finalObj[`${root}_${key}`] = obj[key];
    } else {
      finalObj = {
        ...finalObj,
        ...flatten(obj[key], `${root}_${key}`),
      };
    }
  }
  return finalObj;
};

const testObj = {
  name: {
    first: "sarang",
    last: "gupta",
  },
  address: {
    line1: "D-101",
    landmark: {
      line1: "near mahadevpura",
      line2: "flyover",
    },
  },
  projects: ["food ordering app", "test app", "prep"],
};

console.log(flatten(testObj, "user"));
