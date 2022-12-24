const PROGRESS_BAR = document.querySelector("#progressBar");
const RUN_BUTTON = document.querySelector("#runButton");
const RUN_COUNT_TEXT = document.querySelector("#runNumber");

let setIntervalContainer;

let queueList = [];

let start = false;

RUN_BUTTON.addEventListener("click", function () {
  queueList.push(0);
  updateRunCountText();

  !start && progressbarHandler();
  start = true;
});

function progressbarHandler() {
  setIntervalContainer = setInterval(fill, 3500);
}

function fill() {
  PROGRESS_BAR.style.transition = "width 3s";
  PROGRESS_BAR.classList.add("complete");

  setTimeout(empty, 3000);
}

function empty() {
  queueList.pop();
  updateRunCountText();

  PROGRESS_BAR.style.transition = "width 0s";
  PROGRESS_BAR.classList.remove("complete");

  if (queueList.length === 0) {
    stopInterval();
  }
}

function stopInterval() {
  clearInterval(setIntervalContainer);
  start = false;
}

function updateRunCountText() {
  RUN_COUNT_TEXT.textContent = queueList.length > 0 ? queueList.length : "";
}
