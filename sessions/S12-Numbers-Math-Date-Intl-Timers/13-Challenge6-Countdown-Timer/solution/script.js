const btnStart = document.querySelector(".btn-start");
const btnResume = document.querySelector(".btn-resume");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
const timerDisplay = document.querySelector(".timer-display");
const startString = timerDisplay.innerText;
const startArray = startString.split(":");
let seconds = +startArray[0] * 60 + +startArray[1];
let timerInterval;

function intervalHandler() {
  seconds--;
  const timer_minute = Math.floor(seconds / 60);
  const timer_second = seconds % 60;
  const timer_minute_string = String(timer_minute).padStart(2, "0");
  const timer_second_string = String(timer_second).padStart(2, "0");
  timerDisplay.innerText = `${timer_minute_string}:${timer_second_string}`;
}

function startHandler() {
  timerInterval = setInterval(intervalHandler, 1000);
  btnStart.style.display = "none";
  btnResume.style.display = "none";
  btnPause.style.display = "block";
  btnReset.style.display = "block";
}

function pauseHandler() {
  clearInterval(timerInterval);
  btnStart.style.display = "none";
  btnResume.style.display = "block";
  btnPause.style.display = "none";
  btnReset.style.display = "block";
}

function resumeHandler() {
  timerInterval = setInterval(intervalHandler, 1000);
  btnStart.style.display = "none";
  btnResume.style.display = "none";
  btnPause.style.display = "block";
  btnReset.style.display = "block";
}

function resetHandler() {
  timerDisplay.innerHTML = `<img src="loading.svg" />`;
  seconds = +startArray[0] * 60 + +startArray[1];
  clearInterval(timerInterval);
  startHandler();
}

btnStart.addEventListener("click", startHandler);
btnResume.addEventListener("click", resumeHandler);
btnPause.addEventListener("click", pauseHandler);
btnReset.addEventListener("click", resetHandler);
