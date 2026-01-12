const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  toggleBtn.innerHTML = body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

const text = "Architect Aluminium";
const typingElement = document.getElementById("typingText");

let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting && index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120);
  } 
  else if (isDeleting && index > 0) {
    typingElement.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(typeEffect, 80);
  } 
  else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, 1200);
  }
}

typeEffect();
