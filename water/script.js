document.addEventListener("DOMContentLoaded", function () {
  const water = document.getElementById("water");
  const drop = document.getElementById("drop");
  const timer = document.getElementById("timer");
  const perc = document.getElementById("perc");

  let timeLeft = prompt("Please enter the countdown time in seconds:") || 300; // Initial countdown time in seconds
  const totalTime = timeLeft; // Total countdown time in seconds

  const updateWaterLevel = () => {
    const percentage = ((totalTime - timeLeft) / totalTime) * 100;
    water.style.height = percentage + "%";
  };

  const updateTimer = () => {
    timer.textContent = timeLeft;

  };

  // const logRemainingTime = () => {
  //   const remainingPercentage = (timeLeft / totalTime) * 100;
  //   console.log(`Remaining time: ${remainingPercentage.toFixed(2)}%`);
  // };
  const dropAnimation = () => {
    drop.style.animation = "none";
    void drop.offsetWidth; // Trigger reflow
    drop.style.animation = "dropAnimation 1s infinite";
  };

  const countdown = () => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
      updateWaterLevel();
      dropAnimation();
      // logRemainingTime();
      setTimeout(countdown, 1000); // Update every 1 second
    }
  };

  countdown(); // Start the countdown
});