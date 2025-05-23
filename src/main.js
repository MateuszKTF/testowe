import './style.css';

let count = 0;
const btn = document.querySelector('#count');
btn.addEventListener('click', () => {
  count++;
  btn.textContent = `Kliknięto ${count} razy`;
});