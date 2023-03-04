const eyes = document.querySelectorAll('.eye');
const anchor = document.querySelector('.head');

document.addEventListener('mousemove', animation);

function animation(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.width / 2;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  eyes.forEach(eye => {
    eye.style.transform = `rotate(${270 + angleDeg}deg)`;
  });
}

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
