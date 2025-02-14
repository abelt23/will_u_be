const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const submit1 = document.getElementById('submit1');
const submit2 = document.getElementById('submit2');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Step 1: Riddle Answer (Echo)
submit1.addEventListener('click', () => {
  if (answer1.value.toLowerCase() === "echo") {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
  } else {
    alert("Try again! Hint: It's something you hear in the mountains.");
  }
});

// Step 2: Puzzle Answer (Piano)
submit2.addEventListener('click', () => {
  if (answer2.value.toLowerCase() === "piano") {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
  } else {
    alert("Try again! Hint: It's a musical instrument.");
  }
});

// Step 3: Valentine's Question
yesButton.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  alert("Yay! You made me the happiest person! 💖");
});

noButton.addEventListener('click', () => {
  // Move the "No" button randomly
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});
