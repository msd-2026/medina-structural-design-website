const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

if (year) {
  year.textContent = new Date().getFullYear();
}

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("open");
});

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");

  toggle?.addEventListener("click", (event) => {
    if (window.innerWidth <= 1020) {
      event.preventDefault();
      dropdown.classList.toggle("open");
    }
  });
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    dropdowns.forEach((dropdown) => dropdown.classList.remove("open"));
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown") && window.innerWidth > 1020) {
    dropdowns.forEach((dropdown) => dropdown.classList.remove("open"));
  }
});


const contactFormOnline = document.getElementById("contactForm");
if (contactFormOnline) {
  contactFormOnline.addEventListener("submit", () => {
    const button = contactFormOnline.querySelector('button[type="submit"]');
    if (button) button.textContent = "Sending...";
  });
}
