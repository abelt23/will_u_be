// Confetti animation for "Yes" button
const yesButton = document.getElementById('yes-button');
yesButton.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  alert("Yay!💖");
});

// Playful behavior for "No" button
const noButton = document.getElementById('no-button');
noButton.addEventListener('click', () => {
  // Move the "No" button randomly
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});
