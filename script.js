const ham = document.querySelector('.ham');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const about = document.querySelector('#about-link');
const navBar = document.querySelector('.nav-bar');
const body = document.querySelector('.body');
const aboutDesk = document.querySelector('#nav-desk-about');

ham.addEventListener('click', () => { // open mobile menu and hide nav bar
  mobileMenu.classList.toggle('hide');
  navBar.classList.toggle('hide');
  body.classList.toggle('mobile-menu-open'); // avoid scrolling body when mobile menu is open
});

mobileMenuClose.addEventListener('click', () => { // close mobile menu and show nav bar
  mobileMenu.classList.toggle('hide');
  navBar.classList.toggle('hide');
  body.classList.toggle('mobile-menu-open');
});

about.addEventListener('click', () => { // close mobile menu and show nav bar and navigate to about section
  mobileMenu.classList.toggle('hide');
  navBar.classList.toggle('hide');
  body.classList.toggle('mobile-menu-open');
});

aboutDesk.addEventListener('click', () => {
  about.classList.toggle('about');
});