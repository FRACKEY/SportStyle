  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.navigation .prev');
    const nextButton = document.querySelector('.navigation .next');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    nextButton.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
    });

    prevButton.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
    });

    showSlide(currentSlide);
  });