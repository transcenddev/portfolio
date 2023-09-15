const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navToggle.classList.add('active'); // Add the "active" class
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navToggle.classList.remove('active'); // Remove the "active" class
  }
});