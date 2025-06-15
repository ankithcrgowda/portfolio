document.addEventListener("DOMContentLoaded", function () {
    // Add loading class to body immediately
    document.body.classList.add('loading');
    startPreloader();
});

function startPreloader() {
    const preloader = document.querySelector(".preloader");
    const preloaderContainer = document.getElementById("preloader");
    const binaryMatrix = ["0 0 0 0", "1 0 0 0", "1 1 0 0", "1 1 1 0", "1 1 1 1"];
    
    let currentStep = 0;
    const duration = 3000; // Reduced to 3 seconds for better UX
    const steps = Math.floor(duration / 250); // Show 4 updates per second
    
    function updatePreloader() {
        preloader.textContent = binaryMatrix[currentStep];
        currentStep = (currentStep + 1) % binaryMatrix.length;
    }
    
    const intervalId = setInterval(updatePreloader, 500);
    
    // Handle preloader completion
    setTimeout(function () {
        clearInterval(intervalId);
        
        // Fade out preloader
        preloaderContainer.style.transition = 'opacity 0.5s ease-out';
        preloaderContainer.style.opacity = '0';
        
        // Remove loading class from body
        document.body.classList.remove('loading');
        
        // Remove preloader after fade
        setTimeout(() => {
            preloaderContainer.style.display = 'none';
        }, 2000);
    }, duration);
}
