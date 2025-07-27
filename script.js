// Scroll animations
ScrollReveal().reveal('.section', {
  delay: 200,
  distance: '20px',
  origin: 'bottom',
  duration: 800,
  reset: false
});

// Dark mode toggle
document.getElementById('darkToggle').onclick = () => {
  document.body.classList.toggle('dark');
};
