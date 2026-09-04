document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.innerHTML =
      '<p class="form-success">Thanks! We\'ll get back to you shortly.</p>';
  });
});
