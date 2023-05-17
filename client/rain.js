


// Create multiple raindrop elements and add them to the rain container
function createRaindrops() {
    const rainContainer = document.getElementById("rain-container");
    const numDrops = 200; // Adjust the number of raindrops as desired

    for (let i = 0; i < numDrops; i++) {
      const drop = document.createElement("div");
      drop.className = "raindrop";
      rainContainer.appendChild(drop);
    }
  }
  
  // Start the animation of raindrops falling
  function startRainAnimation() {
    const raindrops = document.getElementsByClassName("raindrop");
  
    for (let i = 0; i < raindrops.length; i++) {
      animateRaindrop(raindrops[i]);
    }
  }
  
  // Animate individual raindrops falling
  function animateRaindrop(raindrop) {
    const screenHeight = window.innerHeight;
    const screenWidth = 2560;
    const duration = Math.random(); // Adjust the duration as desired
  
    raindrop.style.left = Math.random() * screenWidth + "px";
    raindrop.style.animationDuration = duration + "s";
  
    raindrop.addEventListener("animationend", () => {
      // Reset the raindrop to the top once it reaches the bottom
      raindrop.style.top = "-20px";
      animateRaindrop(raindrop);
    });
  }
  
  // Call the necessary functions to start the rain effect
  createRaindrops();
  startRainAnimation();

  function stopRainAnimation () {
    
   const rainContainer = document.getElementById("rain-container")
   rainContainer.classList.add("hidden")
   setTimeout(() => {
       rainContainer.remove()
   }, 2100);
  }

  stopRainAnimation();
  