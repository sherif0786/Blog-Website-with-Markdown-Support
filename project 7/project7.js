// Typing Effect for Hero
const text = document.querySelector(".typing-text");
const original = text.innerText;
let i = 0;
text.innerText = "";
function typeWriter() {
  if (i < original.length) {
    text.innerHTML += original.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Scroll Animation
const fadeElements = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Active Nav Link Highlight
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// 3D Tilt Effect on Cards
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    card.style.transform = `rotateY(${x/20}deg) rotateX(${-y/20}deg) scale(1.05)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0) rotateX(0) scale(1)";
  });
});
