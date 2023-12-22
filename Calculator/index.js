let input = "";
let operators = ["+", "-", "*", "/", "%"];

const setDisplay = (val) => {
  const disp = document.getElementById("display");
  disp.innerHTML = val;
};

const handleInput = (event) => {
  console.log(event.target.value);
  input += event.target.value;
  setDisplay(input);
};

const handleOperation = (expression) => {
  if (operators.includes(input[input.length - 1])) {
    input = input.substring(0, input.length - 1) + expression;
  } else {
    input = input + expression;
  }
  setDisplay(input);
};

const evaluateExp = () => {
  let res = eval(input);
  if (isNaN(res)) {
    setDisplay("Please check your input");
  } else {
    input = res;
    setDisplay(res);
  }
};

const clearDisplay = () => {
  input = "0";
  setDisplay(input);
};

const clearLastInput = () => {
  if (input.length > 0) {
    input = input.substring(0, input.length - 1);
  }
  if (input.length === 0) {
    setDisplay("0");
  } else {
    setDisplay(input);
  }
};

/**
 * Areas of improvement
 * 1. Limit Input size.
 * 2. Real time calculation.
 * 3. flicker in display
 */
