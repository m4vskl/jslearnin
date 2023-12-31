document.addEventListener("DOMContentLoaded", function () {
    const water = document.getElementById("water");
    const drop = document.getElementById("drop");
    const timer = document.getElementById("timer");
  
    let timeLeft = 300; // Initial countdown time in seconds
    const totalTime = 300; // Total countdown time in seconds
  
    const updateWaterLevel = () => {
      const percentage = ((totalTime - timeLeft) / totalTime) * 100;
      water.style.height = percentage + "%";
    };
  
    const updateTimer = () => {
      timer.textContent = timeLeft;
    };
  
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
        setTimeout(countdown, 1000); // Update every 1 second
      }
    };
  
    countdown(); // Start the countdown
  });
  