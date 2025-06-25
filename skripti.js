document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Optional: Close menu when clicking a link (for better UX)
  const navLinks = mobileMenu.querySelectorAll(".nav-item");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});
