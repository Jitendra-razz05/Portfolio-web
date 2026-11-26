const progress = document.getElementById("progress");
const nav = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
const year = document.getElementById("year");


// SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {
  const max =
    document.documentElement.scrollHeight - window.innerHeight;

  if (progress && max > 0) {
    progress.style.width = `${(window.scrollY / max) * 100}%`;
  }
});


// MOBILE NAVBAR TOGGLE
menuBtn?.addEventListener("click", () => {
  if (!nav) return;

  nav.classList.toggle("active");

  const isOpen = nav.classList.contains("active");

  menuBtn.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
    : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';

  menuBtn.setAttribute("aria-expanded", isOpen);
});

// ========================================
// CLOSE NAVBAR WHEN LINK IS CLICKED
// ========================================

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    if (!nav || !menuBtn) return;

    nav.classList.remove("active");

    menuBtn.innerHTML =
      '<i class="fa-solid fa-bars" aria-hidden="true"></i>';

    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

// Reveal elements on scroll
document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// ========================================
// DYNAMIC COPYRIGHT YEAR
// ========================================

if (year) {
  year.textContent = new Date().getFullYear();
}

// ========================================
// TYPING EFFECT
// ========================================

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
  if (!typingText) return;

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
  } else if (deleting && charIndex === 0) {
    deleting = false;

    wordIndex = (wordIndex + 1) % words.length;

    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

// Start typing effect only if element exists
if (typingText) {
  typeEffect();
}
