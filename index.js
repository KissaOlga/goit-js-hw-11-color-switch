const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', startOnClick)
function startOnClick() {
    timerId - setInterval(() => {
        document.body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    startBtn.disabled = '';
}

stopBtn.addEventListener('click', stopOnClick)
function stopOnClick() {
    clearTimeout(timerId);
}