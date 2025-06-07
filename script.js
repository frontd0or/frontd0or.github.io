// Typewriter Effect
const message = "It's too late... I know everything...\nFind out what you need to do, or everyone you know will find out EVERYTHING about you.. ;)";
let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Fake Webcam Access Overlay
setTimeout(() => {
  document.getElementById("overlay").style.display = "none";
  typeWriter();
}, 3000);

// Countdown Timer (3 minutes from page load)
const countdownEl = document.getElementById("countdown");
const endTime = new Date().getTime() + 3 * 60 * 1000;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance <= 0) {
    countdownEl.innerHTML = "Too late...";
    return;
  }

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdownEl.innerHTML = `Time remaining: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  requestAnimationFrame(updateCountdown);
}
updateCountdown();

// Eye Tracking Cursor
const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  pupils.forEach(pupil => {
    pupil.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  });
});
