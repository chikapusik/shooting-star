

const btn = document.getElementById('startBtn');
const form = document.querySelector('.form-container');
const star = document.getElementById('star');
const back = document.getElementById('backBtn');
const message = document.getElementById('message');

let started = false;

function startHandler(e) {
  if (started) return;
  started = true;
 
  if (e && e.type === 'touchstart') e.preventDefault();

  form.style.display = 'none';
 
  star.classList.add('animate');
}


btn.addEventListener('click', startHandler, { passive: true });
btn.addEventListener('touchstart', startHandler, { passive: false });

star.addEventListener('animationend', () => {
  back.classList.add('visible');
  
  message.style.opacity = 1;
});

back.addEventListener('click', () => {
  window.location.href = 'index.html';
});