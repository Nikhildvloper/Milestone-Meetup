// Target date: 31 Jan 2031, 10:00 AM
const targetDate = new Date('2031-01-31T10:00:00').getTime();

function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    document.querySelector('.timer').innerHTML = "<h2>The time has arrived!</h2>";
    clearInterval(timerInterval);
    return;
  }

  const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
