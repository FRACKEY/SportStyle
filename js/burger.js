document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.querySelector('.burger-menu-button');
  const burgerMenu = document.querySelector('.burger-menu');

  burgerButton.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
  });
});
