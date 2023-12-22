const display = document.getElementById("display");
const oprList = ["+", "-", "*", "/", "%", "."];
//Add Event Listeners
document.querySelectorAll(".btn-row>button").forEach((e) => {
  e.addEventListener("click", function (f) {
    const { classList, innerText } = f.target;
    if (classList.contains("num")) {
      addNum(innerText);
    } else if (classList.contains("opr")) {
      addOpr(innerText);
    } else if (classList.contains("calc")) {
      calc();
    } else if (classList.contains("del")) {
      del();
    } else if (classList.contains("clear")) {
      clear();
    }
  });
});

document.addEventListener("keydown", function (k) {
  switch (k.key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      addNum(k.key);
      break;
    case "+":
    case "-":
    case "/":
    case "*":
      addOpr(k.key);
      break;
    case "=":
      calc();
      break;
  }
});

function addNum(text) {
  const ruleA = display.innerHTML.length === 0 && text === ".";
  if (!ruleA) {
    display.innerHTML += text;
  }
}

function addOpr(text) {
  const value = display.innerHTML;
  const lastCharacter = value[value.length - 1];

  //Don't add repeated operators and initially without numbers
  if (lastCharacter !== text) {
    if (value.length > 0) {
      display.innerHTML += text;
    }
  }

  //If last character is operator then replace it with new operator
  if (oprList.includes(lastCharacter)) {
    display.innerHTML = value.substring(0, value.length - 1) + text;
  }
}

function clear() {
  display.innerHTML = "";
}
function calc() {
  const val = display.innerHTML;
  let res;
  try {
    res = eval(val);
  } catch (e) {
    console.log(e);
    res = "error";
  }

  display.innerHTML = res;
}

function del() {
  const value = display.innerHTML;
  if (value.length > 0) {
    display.innerHTML = value.substring(0, value.length - 1);
  }
}
