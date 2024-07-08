document.addEventListener("DOMContentLoaded", function () {
  startPreloader();
});

function startPreloader() {
  const preloader = document.querySelector(".preloader");
  const binaryMatrix = ["0 0 0 0", "1 0 0 0", "1 1 0 0", "1 1 1 0", "1 1 1 1"];

  let currentStep = 0;
  const duration = 10000; // 10 seconds

  function updatePreloader() {
    preloader.textContent = binaryMatrix[currentStep];
    currentStep = (currentStep + 1) % binaryMatrix.length;
  }

  const intervalId = setInterval(updatePreloader, 500); // Change the interval as needed

  // Clear the interval after the specified duration
  setTimeout(function () {
    clearInterval(intervalId);
    preloader.style.display = "none"; // Hide the preloader
  }, duration);
}
