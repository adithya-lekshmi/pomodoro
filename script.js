 document.addEventListener("DOMContentLoaded", () => {

  // Initial timer in seconds (25 minutes)
  let timerSeconds = 25 * 60;
  let interval = null;
  let isRunning = false;

  // DOM elements
  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("start");
  const pauseBtn = document.getElementById("pause");
  const resetBtn = document.getElementById("reset");

  // Format seconds to MM:SS
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }

  // Update the timer display and color
  function updateDisplay() {
    timerDisplay.textContent = formatTime(timerSeconds);

    // Change color if less than 5 minutes
    if (timerSeconds <= 5 * 60) {
      timerDisplay.style.color = "#e74c3c"; // red
      timerDisplay.style.textShadow = "2px 2px 12px rgba(231,76,60,0.8)";
    } else {
      timerDisplay.style.color = "#fff"; // white
      timerDisplay.style.textShadow = "2px 2px 10px rgba(0,0,0,0.3)";
    }
  }

  // Start the timer
  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      interval = setInterval(() => {
        if (timerSeconds > 0) {
          timerSeconds--;
          updateDisplay();
        } else {
          clearInterval(interval);
          isRunning = false;
          alert("⏰ Time's up! Take a break.");
        }
      }, 1000);
    }
  }

  // Pause the timer
  function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
  }

  // Reset the timer
  function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    timerSeconds = 25 * 60;
    updateDisplay();
  }

  // Event listeners
  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);

  // Initialize display
  updateDisplay();

});