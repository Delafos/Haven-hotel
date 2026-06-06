function toggleMobile() {
  document.getElementById('mobileNav').classList.toggle('open');
}

let current = 0;
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');
let timer;

function goToSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}
function changeSlide(dir) {
  clearInterval(timer);
  goToSlide(current + dir);
  startAuto();
}
function startAuto() {
  timer = setInterval(() => goToSlide(current + 1), 5500);
}
startAuto();

function handleBook(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-book');
  btn.textContent = 'Booking Confirmed ✓';
  btn.style.background = '#4af7c8';
  btn.style.color = '#111';
  setTimeout(() => {
    btn.textContent = 'Confirm Booking →';
    btn.style.background = '';
    btn.style.color = '';
  }, 3500);
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));