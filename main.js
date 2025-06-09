// Música
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '⏸️ Pausar';
  } else {
    music.pause();
    musicBtn.textContent = '🎵 Música';
  }
});

// Corazones cayendo
const canvas = document.getElementById('fallingCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
const heartEmoji = '❤️';

for (let i = 0; i < 50; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 20 + Math.random() * 10,
    speed: 1 + Math.random() * 2,
    drift: Math.random() * 1.5
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    ctx.font = h.size + 'px Arial';
    ctx.fillStyle = 'rgba(255,0,0,0.8)';
    ctx.fillText(heartEmoji, h.x, h.y);
    h.y += h.speed;
    h.x += Math.sin(h.y / 30) * h.drift;

    if (h.y > canvas.height) {
      h.y = -20;
      h.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  drawHearts();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
