const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");
const song = document.getElementById("song");

// target: next january 1, 12:00 am
const now = new Date();
const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYear - currentTime;

  if (diff <= 0) {
    document.body.classList.add("brat");
    countdownEl.classList.add("hidden");
    messageEl.classList.remove("hidden");
    song.play().catch(() => {});
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

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
