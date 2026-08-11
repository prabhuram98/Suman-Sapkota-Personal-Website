// ===============================
// PERSONAL DETAILS — EDIT THESE
// ===============================
const PERSON = {
  name: "SUMAN SAPKOTA",
  initials: "YN",
  email: "YOUR.EMAIL@example.com",
  linkedin: "https://www.linkedin.com/in/YOUR-USERNAME/",
  instagram: "https://www.instagram.com/YOUR-USERNAME/",
  github: "https://github.com/YOUR-USERNAME/"
};

// Fill personal details throughout the page.
document.querySelectorAll("[data-name]").forEach(el => el.textContent = PERSON.name);
document.querySelectorAll("[data-email]").forEach(el => el.textContent = PERSON.email);
document.querySelectorAll("[data-email-href]").forEach(el => el.href = `mailto:${PERSON.email}`);
document.querySelector(".brand-mark").textContent = PERSON.initials;
document.querySelector("[data-linkedin]").href = PERSON.linkedin;
document.querySelector("[data-instagram]").href = PERSON.instagram;
document.querySelector("[data-github]").href = PERSON.github;
document.title = `${PERSON.name} — Personal Website`;
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation.
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => document.body.classList.remove("menu-open"));
});

// Scroll reveal.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Gallery lightbox.
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeLightbox = () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
};

document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("click", () => {
    lightboxImg.src = card.dataset.full;
    lightboxImg.alt = card.querySelector("img").alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});

// Stop the form from accidentally submitting to a placeholder endpoint.
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  if (form.action.includes("YOUR_FORMSPREE_ENDPOINT")) {
    e.preventDefault();
    alert("Almost there! Add your Formspree endpoint to index.html first. See README.md for the two-minute setup.");
  }
});
