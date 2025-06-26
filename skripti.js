document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const slider = document.querySelector(".hero-slider");
  let currentIndex = 0;
  let interval;


  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }


  function startCarousel() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);
  }


  function pauseCarousel() {
    clearInterval(interval);
  }


  function resumeCarousel() {
    startCarousel();
  }


  showSlide(currentIndex);
  startCarousel();


  slider.addEventListener("mouseenter", pauseCarousel);
  slider.addEventListener("mouseleave", resumeCarousel);
});
