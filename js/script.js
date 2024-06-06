


// navigation hamburger
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav-open");
    hamburgerEl.classList.toggle("hamburger-open");
})

navEl.addEventListener("click", () => {
    navEl.classList.remove("nav-open");
    hamburgerEl.classList.remove("hamburger-open");
})

// Add smooth scrolling behavior to section transitions
document.querySelectorAll('.fullpage-section').forEach(section => {
    section.addEventListener('click', () => {
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

