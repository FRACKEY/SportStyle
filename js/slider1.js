document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prev-slide");
    const nextBtn = document.querySelector(".next-slide");
    const slides = document.querySelectorAll(".carousel-item");
    let currentSlide = 0;
  
    // Показать активный слайд
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    };
  
    // Переключение на предыдущий слайд
    const prevSlide = (event) => {
      event.preventDefault(); // Предотвращаем переход по ссылке
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
    };
  
    // Переключение на следующий слайд
    const nextSlide = (event) => {
      event.preventDefault(); // Предотвращаем переход по ссылке
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
      showSlide(currentSlide);
    };
  
    // Обработчики событий для кнопок
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
  });