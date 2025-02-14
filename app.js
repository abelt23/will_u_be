const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const answer1 = document.getElementById('answer1');
const submit1 = document.getElementById('submit1');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Step 1: Riddle Answer (Your Name)
submit1.addEventListener('click', () => {
  const yourName = "Fiker"; // Replace with your name
  if (answer1.value.toLowerCase() === yourName.toLowerCase()) {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
  } else {
    alert("Try again! Hint: Look inside 😊");
  }
});

// Step 2: Valentine's Question
yesButton.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  alert("Yay! 💖💖💖💖💖💖💖💖💖💖💖");
});

noButton.addEventListener('click', () => {
  // Move the "No" button randomly
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});
