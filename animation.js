const btn = document.getElementById('startBtn');
const form = document.querySelector('.form-container');
const star = document.getElementById('star');

btn.addEventListener('click', () => {
  
  form.style.display = 'none';

 
  star.classList.add('animate');
});
const button = document.querySelector('.back');


star.addEventListener('animationend', () => {
  button.classList.add('visible');
});

button.addEventListener('click', () => {
  window.location.href = 'index.html'; 
});

const message = document.getElementById('message');

star.addEventListener('animationend', () => {
  message.style.opacity = 1;
});