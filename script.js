// Your code goes here
let startTimer = document.getElementById("start-timeout");
let timeoutDisplay = document.getElementById("timeout-display");
let startInterval = document.getElementById("start-interval");
let intervalDisplay = document.getElementById("interval-display");
let repeatGo = document.getElementsByClassName("repeat-go");

startTimer.addEventListener("click", () => {
  timeoutDisplay.textContent = "Getting ready";
  setTimeout(() => {
    timeoutDisplay.textContent = "Ready";
  }, 5000);
});

let count = 5;

let intervalId = startInterval.addEventListener("click", () => {
  clearInterval(intervalId);
  count = 5;
  intervalDisplay.textContent = count;
  intervalId = setInterval(() => {
    if (count <= 0) {
      clearInterval(intervalId);
      intervalDisplay.textContent = "Go!";
      let repeatGoArray = Array.from(repeatGo);
      let index = 0;
      let newIntervalId = setInterval(() => {
        repeatGoArray[index].textContent = "Go!";
        index++;
        if (repeatGoArray[index] === undefined) {
          clearInterval(newIntervalId);
        }
      }, 1000);
    } else {
      intervalDisplay.textContent = count--;
    }
  }, 1000);
});
