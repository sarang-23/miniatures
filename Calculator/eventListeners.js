const display = document.getElementById("display");

//Add Event Listeners
document.querySelectorAll(".btn-row>button").forEach((e) => {
  e.addEventListener("click", function (f) {
    const { classList, innerText } = f.target;
    console.log(classList, innerText);
    if (classList.contains("num")) {
      //addNums(inner Text);
    } else if (classList.contains("opr")) {
      //addOpr(innerText);
    } else if (classList.contains("calc")) {
      //calculate()
    } else if (classList.contains("delete")) {
      //Delete clicked del()
    } else if (classList.contains("clear")) {
      //clear()
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
  console.log(text);
}

function addOpr(text) {
  console.log(text);
}

function clear() {
  display.innerHTML = "0";
}
function calc() {}
