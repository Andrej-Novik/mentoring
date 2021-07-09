const workTimeInput = document.querySelector(".work__input");
const relaxTimeInput = document.querySelector(".relax__input");
const tracker = document.querySelector(".timer");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const continueButton = document.querySelector("#continue-button");
const stopButton = document.querySelector("#stop-button");
let clockRun = false;
let type = "Work";
let relaxTime;
let workTime;
let time;

startButton.addEventListener("click", () => {
  workTime = workTimeInput.value;
  relaxTime = relaxTimeInput.value;
  time = workTime * 60;
  toggleClock();
});

pauseButton.addEventListener("click", () => {
  toggleClock();
});

continueButton.addEventListener("click", () => {
  toggleClock();
});

stopButton.addEventListener("click", () => {
  toggleClock(true);
});

const toggleClock = (reset) => {
  if (reset) {
    stopClock();
  } else if (clockRun === true) {
    clockRun = false;
    clearInterval(clockTimer);
  } else {
    clockRun = true;
    clockTimer = setInterval(() => {
      stepDown();
      setTimer();
    }, 1000);
  }
};

function setTimer() {
  let result = "";
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60) % 60;
  let seconds = Math.floor(time % 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (hours > 0) result += `${hours}:`;
  result += `${minutes}:${seconds}`;
  tracker.innerHTML = result;
};

function stopClock() {
  if (type === "Relax") {
    clearInterval(clockTimer);
    clockRun = false;
    time = relaxTime * 60;
    setTimer();
  } else {
    clearInterval(clockTimer);
    clockRun = false;
    time = workTime * 60;
    setTimer();
  }
};

function stepDown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    if (type === "Work") {
      type = "Relax";
      time = relaxTimeInput.value * 60;
    } else {
      time = workTimeInput.value * 60;
    }
  }
};