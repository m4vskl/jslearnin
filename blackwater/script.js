const timer = document.querySelector('.timer');
const water = document.querySelector('.water');
const time = document.querySelector('.time');

let timeLeft = 60;
let animationDuration = 60;

function updateTime() {
  time.textContent = formatTime(timeLeft);
  animationDuration = timeLeft;
  water.style.animationDuration = `${animationDuration}s`;
  timeLeft--;
  if (timeLeft < 0) {
    timeLeft = 60;
  }
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

updateTime();
setInterval(updateTime, 1000);