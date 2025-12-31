const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");

// get next new year
function getNextNewYear() {
  const now = new Date();
  return new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
}

let newYear = getNextNewYear();
let timer;

function showCountdown() {
  const now = new Date();
  const diff = newYear - now;

  if (diff <= 0) {
    document.body.classList.add("newyear");
    countdownEl.classList.add("hidden");
    messageEl.classList.remove("hidden");

    // reset after 1 hour
    setTimeout(() => {
      document.body.classList.remove("newyear");
      countdownEl.classList.remove("hidden");
      messageEl.classList.add("hidden");
      newYear = getNextNewYear();
      timer = setInterval(showCountdown, 1000);
    }, 3600 * 1000);

    clearInterval(timer);
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `${hours.toString().padStart(2, "0")}:` +
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}`;
}

showCountdown();
timer = setInterval(showCountdown, 1000);
