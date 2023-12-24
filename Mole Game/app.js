let GAME_STATE = {
  START: "START",
  STOP: "STOP",
};

let currState = GAME_STATE.STOP;

window.addEventListener("load", () => {
  const startBtn = document.getElementById("start");
  startBtn.addEventListener("click", () => {
    if (currState === GAME_STATE.STOP) {
      toggleState(GAME_STATE.START);
    } else {
      toggleState(GAME_STATE.STOP);
    }
  });
  const grounds = document.querySelectorAll(".ground");
  console.log(grounds);
  console.log(grounds);
  grounds.forEach((ground) => {
    ground.addEventListener("click", (e) => {
      e.stopPropagation();
      if (currState == GAME_STATE.START) {
        console.log(e.target);
      }
    });
  });
});

let interval;

const toggleState = (state) => {
  const grounds = document.querySelectorAll(".ground");
  if (state == GAME_STATE.STOP) {
    document.getElementById("start").innerHTML = "START";
    clearInterval(interval);
    currState = GAME_STATE.STOP;
    grounds.forEach((e) => {
      e.classList.remove("active");
    });
  } else {
    currState = GAME_STATE.START;
    document.getElementById("start").innerHTML = "STOP";
    const length = grounds.length;
    interval = setInterval(() => {
      const random = Math.floor(Math.random() * length);

      grounds.forEach((e) => {
        e.classList.remove("active");
      });
      grounds[random].classList.add("active");
    }, 700);
  }
};
