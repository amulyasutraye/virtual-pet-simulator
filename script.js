let hunger = 50;
let happiness = 50;
let energy = 50;

// New variable for day-night cycle
let isDay = true; // start with day mode

// Function to update pet status and image
function updateStatus() {
    document.getElementById("hunger").innerText = hunger;
    document.getElementById("happiness").innerText = happiness;
    document.getElementById("energy").innerText = energy;
    updatePetImage();
}

// Existing pet interaction functions
function feedPet() {
    hunger = Math.max(0, hunger - 10);
    energy = Math.min(100, energy + 5);
    updateStatus();
}

function playWithPet() {
    happiness = Math.min(100, happiness + 10);
    hunger = Math.min(100, hunger + 5);
    energy = Math.max(0, energy - 10);
    updateStatus();
}

function putToSleep() {
    energy = Math.min(100, energy + 15);
    happiness = Math.max(0, happiness - 5);
    updateStatus();
}

// Function to update the pet image based on its status
function updatePetImage() {
    let petImg = document.getElementById("pet");
    if (hunger > 80) {
        petImg.src = "hungry.jpeg";  // Hungry pet image
    } else if (happiness < 30) {
        petImg.src = "sad.jpeg";     // Sad pet image
    } else if (energy < 30) {
        petImg.src = "tired.jpeg";   // Tired pet image
    } else {
        petImg.src = "pet.jpeg";   // Default happy image
    }
}

// Function to simulate gradual stat changes over time
setInterval(() => {
    hunger = Math.min(100, hunger + 2);
    happiness = Math.max(0, happiness - 2);
    energy = Math.max(0, energy - 2);
    updateStatus();
}, 5000); // every 5 seconds

// **Day-Night Cycle Implementation**
function toggleDayNight() {
    // Toggle the value of isDay
    isDay = !isDay;
    // Update the body's class based on the time of day
    if (isDay) {
        document.body.classList.remove("night");
        document.body.classList.add("day");
    } else {
        document.body.classList.remove("day");
        document.body.classList.add("night");
    }
}

// Set an interval to switch between day and night every 10 seconds
setInterval(toggleDayNight, 10000);

// Initialize the display for stats and set default theme
updateStatus();
document.body.classList.add("day");
