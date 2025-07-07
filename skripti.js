document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot-hero");
  const toggleBtn = document.getElementById("carouselToggle");

  let currentIndex = 0;
  let interval;
  let isPlaying = true;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startCarousel() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
    isPlaying = true;
toggleBtn.textContent = "⏸";  }

  function pauseCarousel() {
    clearInterval(interval);
    isPlaying = false;
    toggleBtn.textContent = "▶"; 
  }

  toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      pauseCarousel();
    } else {
      startCarousel();
    }
  });

  showSlide(currentIndex);
  startCarousel();

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

  
  const hamburger = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  const navLinks = mobileMenu.querySelectorAll(".nav-item");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });


  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const leftArrows = document.querySelectorAll(".arrow-left");
  const rightArrows = document.querySelectorAll(".arrow-right");

  let testimonialCurrent = 0;

  function showTestimonialSlide(index) {
    testimonialSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  leftArrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      testimonialCurrent = (testimonialCurrent - 1 + testimonialSlides.length) % testimonialSlides.length;
      showTestimonialSlide(testimonialCurrent);
    });
  });

  rightArrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      testimonialCurrent = (testimonialCurrent + 1) % testimonialSlides.length;
      showTestimonialSlide(testimonialCurrent);
    });
  });

  showTestimonialSlide(testimonialCurrent);

  
  const slider1 = document.getElementById("benefitsSlider");
  const prevBtn1 = document.getElementById("prevBtn");
  const nextBtn1 = document.getElementById("nextBtn");

  const slideWidth1 = slider1.querySelector(".slide").offsetWidth + 16;
  const totalSlides1 = slider1.querySelectorAll(".slide").length;
  const maxScroll1 = slideWidth1 * (totalSlides1 - 1);
  let currentScroll1 = 0;

  nextBtn1.addEventListener("click", () => {
    currentScroll1 = Math.min(currentScroll1 + slideWidth1, maxScroll1);
    slider1.scrollTo({ left: currentScroll1, behavior: "smooth" });
  });

  prevBtn1.addEventListener("click", () => {
    currentScroll1 = Math.max(currentScroll1 - slideWidth1, 0);
    slider1.scrollTo({ left: currentScroll1, behavior: "smooth" });
  });

  
  const slides2 = slider1.querySelectorAll(".slide");
  const dots2 = document.querySelectorAll("#progressIndicator .dot");
  let currentIndex2 = 0;

  function updateSliderPosition2() {
    slider1.scrollTo({
      left: currentIndex2 * slideWidth1,
      behavior: "smooth",
    });
    updateDots2();
  }

  function updateDots2() {
    dots2.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex2);
    });
  }

  nextBtn1.addEventListener("click", () => {
    if (currentIndex2 < slides2.length - 1) {
      currentIndex2++;
      updateSliderPosition2();
    }
  });

  prevBtn1.addEventListener("click", () => {
    if (currentIndex2 > 0) {
      currentIndex2--;
      updateSliderPosition2();
    }
  });

  slider1.addEventListener("scroll", () => {
    const index = Math.round(slider1.scrollLeft / slideWidth1);
    if (index !== currentIndex2) {
      currentIndex2 = index;
      updateDots2();
    }
  });

  
  const testimonial2Slides = document.querySelectorAll(".testimonial2-content");
  const leftArrows2 = document.querySelectorAll(".arrow-left-2");
  const rightArrows2 = document.querySelectorAll(".arrow-right-2");

  let testimonial2Current = 0;

  function showTestimonial2Slide(index) {
    testimonial2Slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  leftArrows2.forEach(arrow => {
    arrow.addEventListener("click", () => {
      testimonial2Current = (testimonial2Current - 1 + testimonial2Slides.length) % testimonial2Slides.length;
      showTestimonial2Slide(testimonial2Current);
    });
  });

  rightArrows2.forEach(arrow => {
    arrow.addEventListener("click", () => {
      testimonial2Current = (testimonial2Current + 1) % testimonial2Slides.length;
      showTestimonial2Slide(testimonial2Current);
    });
  });

  showTestimonial2Slide(testimonial2Current);
});