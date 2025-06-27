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

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active state from all tabs and contents
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      // Add active class to clicked tab and its content
      button.classList.add("active");
      const targetId = button.getAttribute("data-tab");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
