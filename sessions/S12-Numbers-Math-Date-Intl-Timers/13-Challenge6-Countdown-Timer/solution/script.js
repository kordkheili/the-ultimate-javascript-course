//! =========== global variables ===========
const timerDisplayEl = document.querySelector(".timer-display");
const timerBtnStartEl = document.querySelector(".btn-start");
const timerBtnPauseEl = document.querySelector(".btn-pause");
const timerBtnResumeEl = document.querySelector(".btn-resume");
const timerBtnResetEl = document.querySelector(".btn-reset");
const startString = timerDisplayEl.innerText;
const startArray = startString.split(":");
let startSeconds = +startArray[0] * 60 + +startArray[1];
let timer;

//! =========== functions ===========
function intervalHandler() {
  if (startSeconds === 1) timerEnd();
  startSeconds--;
  const currentMinute = Math.floor(startSeconds / 60);
  const currentSecond = startSeconds % 60;
  const currentMinuteString = String(currentMinute).padStart(2, "0");
  const currentSecondString = String(currentSecond).padStart(2, "0");
  const currentTime = `${currentMinuteString}:${currentSecondString}`;
  timerDisplayEl.innerText = currentTime;
}

function startHandler() {
  timer = setInterval(intervalHandler, 1000);
  timerBtnStartEl.style.display = "none";
  timerBtnPauseEl.style.display = "block";
  timerBtnResumeEl.style.display = "none";
  timerBtnResetEl.style.display = "block";
}

function pauseHandler() {
  clearInterval(timer);
  timerBtnStartEl.style.display = "none";
  timerBtnPauseEl.style.display = "none";
  timerBtnResumeEl.style.display = "block";
  timerBtnResetEl.style.display = "block";
}

function resumeHandler() {
  timer = setInterval(intervalHandler, 1000);
  timerBtnStartEl.style.display = "none";
  timerBtnPauseEl.style.display = "block";
  timerBtnResumeEl.style.display = "none";
  timerBtnResetEl.style.display = "block";
}

function resetHandler() {
  timerDisplayEl.innerHTML = `<img src="loading.svg" />`;
  startSeconds = +startArray[0] * 60 + +startArray[1];
  clearInterval(timer);
  startHandler();
}

function timerEnd() {
  clearInterval(timer);
  timerBtnPauseEl.style.display = "none";
}

//! =========== events ===========
timerBtnStartEl.addEventListener("click", startHandler);
timerBtnPauseEl.addEventListener("click", pauseHandler);
timerBtnResumeEl.addEventListener("click", resumeHandler);
timerBtnResetEl.addEventListener("click", resetHandler);
