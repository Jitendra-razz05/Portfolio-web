const progress = document.getElementById("progress");
const nav = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const year = document.getElementById("year");

// Scroll progress
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;

  if (progress && max > 0) {
    progress.style.width = `${(window.scrollY / max) * 100}%`;
  }
});

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");

  menuBtn.innerHTML = nav.classList.contains("open")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Close nav when a link is clicked
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

// Reveal elements on scroll
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

if (year) {
  year.textContent = new Date().getFullYear();
}

// Typing effect
const typingText = document.querySelector(".typing-text");

const words = [
  "Full Stack Web Developer",
  "MERN Stack Developer",
  "Web Developer",
  "Frontend Developer",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = currentWord.substring(0, charIndex);

  let speed = deleting ? 50 : 100;

  if (!deleting && charIndex === currentWord.length) {
    deleting = true;
    speed = 1500;
  } 
  else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
