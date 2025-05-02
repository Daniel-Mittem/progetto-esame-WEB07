let startTime = 0;
let elapsedTime = 0;
let interval = null;

function formatTime(ms) {
    const totalMs = ms % 1000;
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor(totalMs / 10);
  
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}
  
function updateDisplay() {
    const now = Date.now();
    const diff = now - startTime + elapsedTime;
    document.getElementById('display').textContent = formatTime(diff);
}

function start() {
  if (interval) return;

  startTime = Date.now();
  interval = setInterval(updateDisplay, 10);
}
  