let counter = 0;
const counterDisplay = document.getElementById("counterDisplay");
document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});
document.getElementById("resetCounterBtn").addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

let countdown = 10;
let countdownInterval;
const countdownDisplay = document.getElementById("countdownDisplay");
const customCountdownInput = document.getElementById("customCountdownInput");

function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  countdownDisplay.textContent = formatTime(countdown);
  countdownInterval = setInterval(() => {
    countdown--;
    countdownDisplay.textContent = formatTime(countdown);
    changeBackgroundColor();
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = "00:00:00";
      showTimeoutModal();
      document.body.style.backgroundColor = "#f7f7f7";
    }
  }, 1000);
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function changeBackgroundColor() {
  const intensity = Math.floor((countdown / 10) * 255);
  document.body.style.backgroundColor = `rgb(255, ${intensity}, ${intensity})`;
}

document.getElementById("startCountdownBtn").addEventListener("click", () => {
  const customValue = parseInt(customCountdownInput.value);
  countdown = customValue > 0 ? customValue : countdown;
  startCountdown();
});

document.getElementById("stopCountdownBtn").addEventListener("click", () => {
  clearInterval(countdownInterval);
});

document.getElementById("resetCountdownBtn").addEventListener("click", () => {
  clearInterval(countdownInterval);
  countdown = 10;
  countdownDisplay.textContent = formatTime(countdown);
  document.body.style.backgroundColor = "#f7f7f7";
});

const modal = document.getElementById("timeoutModal");
const closeModalBtn = document.getElementById("closeModalBtn");

function showTimeoutModal() {
  modal.style.display = "flex";
}

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.backgroundColor = "#f7f7f7";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
