let timer;
let timeLeft = 1500; // 25 minutes in seconds
let isRunning = false;

const timerDisplay = document.querySelector('.timer');

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 1500;
  updateDisplay();
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function setTime(mins) {
  clearInterval(timer);
  isRunning = false;
  timeLeft = mins * 60;
  updateDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);

updateDisplay();
