var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer-count")




function startGame() {
    timerCount = 75;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Time: " + timerCount;

    }, 1000);
  }

  startButton.addEventListener("click", startGame);