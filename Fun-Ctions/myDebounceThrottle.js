const inputEle = document.getElementById("search");

const setText = (text, element) => {
  element.innerHTML = text;
};
const debouncedFn = myDebounce(setText);
const throttledFn = myThrottle(setText);

const normalEle = document.getElementById("normal");
const debounceEle = document.getElementById("debounced");
const throttledEle = document.getElementById("throttled");

inputEle.addEventListener("input", (e) => {
  setText(e.target.value, normalEle);
  debouncedFn(e.target.value, debounceEle);
  throttledFn(e.target.value, throttledEle);
});

var count = 0;
var debouncedCount = 0;
var throttledCount = 0;

const incrementCount = (c) => {
  console.log(c);
  return c + 1;
};

const incrementCountDebounced = myDebounce(incrementCount);
const incrementCountThrottled = myThrottle(incrementCount);

const debouncedIncrement = window.addEventListener("mousemove", function () {
  count = incrementCount(count);
  console.log(debouncedCount);
  debouncedCount = incrementCountDebounced(debouncedCount);
  throttledCount = incrementCountThrottled(throttledCount);

  setText(count, normalEle);
  setText(debouncedCount, debounceEle);
  setText(throttledCount, throttledEle);
});

function myDebounce(cb, delay = 500) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), delay);
  };
}

function myThrottle(cb, delay = 1000) {
  let timeout;
  let waitingArgs;
  return (...args) => {
    if (timeout) {
      waitingArgs = args;
    } else {
      cb(...args);
      timeout = setTimeout(() => {
        timeout = undefined;
        if (waitingArgs) {
          cb(...waitingArgs);
        }
      }, delay);
    }
  };
}
//If throttle function is triggered first time a timer will start.
// Any input given when the current timer is running will be stored and needs to be executed once the timer finishes
//
