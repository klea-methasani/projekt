
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

      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));


      button.classList.add("active");
      const targetId = button.getAttribute("data-tab");
      document.getElementById(targetId).classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  const navLinks = mobileMenu.querySelectorAll(".nav-item");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".testimonial-slide");
  const leftArrows = document.querySelectorAll(".arrow-left");
  const rightArrows = document.querySelectorAll(".arrow-right");

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  leftArrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
  });

  rightArrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  });

  showSlide(current);
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("benefitsSlider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const slideWidth = slider.querySelector(".slide").offsetWidth + 16; 
  const totalSlides = slider.querySelectorAll(".slide").length;
  const maxScroll = slideWidth * (totalSlides - 1);
  let currentScroll = 0;

  nextBtn.addEventListener("click", () => {
    currentScroll = Math.min(currentScroll + slideWidth, maxScroll);
    slider.scrollTo({ left: currentScroll, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    currentScroll = Math.max(currentScroll - slideWidth, 0);
    slider.scrollTo({ left: currentScroll, behavior: "smooth" });
  });
});


//skripti bareve i sakti
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("benefitsSlider");
  const slides = slider.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll("#progressIndicator .dot");

  const slideWidth = slides[0].offsetWidth + 16;
  let currentIndex = 0;

  function updateSliderPosition() {
    slider.scrollTo({
      left: currentIndex * slideWidth,
      behavior: "smooth",
    });
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });


  slider.addEventListener("scroll", () => {
    const index = Math.round(slider.scrollLeft / slideWidth);
    if (index !== currentIndex) {
      currentIndex = index;
      updateDots();
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".testimonial2-content");
  const leftArrows = document.querySelectorAll(".arrow-left-2");
  const rightArrows = document.querySelectorAll(".arrow-right-2");

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  leftArrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
  });

  rightArrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  });

  showSlide(current);
});
