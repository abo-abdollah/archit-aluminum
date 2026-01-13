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

///////////////////////////////////////////////

// ---------- Intersection Observer for Team Cards ----------
const teamCards = document.querySelectorAll('.team-member-card');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

teamCards.forEach(card => observer.observe(card));

// ---------- Optional: Carousel Auto Scroll ----------
const carouselElement = document.querySelector('#teamCarousel');
if(carouselElement){
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 4000,
        ride: 'carousel'
    });
}

document.addEventListener("DOMContentLoaded", function () {

    // اختيار كل العناصر اللي هي صور أو نصوص أو كروت
    const elements = document.querySelectorAll(
        'img, h1, h2, h3, h4, h5, p, span, .card, .feature-icon-box, .team-member-card, .stat-item-box'
    );

    // أضف كلاس reveal لكل العناصر ما عدا الهيدر والفوتر والكونتاكت
    elements.forEach(el => {
        if (
            !el.closest('.main-header') &&   // تجاهل الهيدر
            !el.closest('footer') &&         // تجاهل الفوتر
            !el.closest('.footer-contact')   // تجاهل جزء الكونتاكت
        ) {
            el.classList.add('reveal');
        }
    });

    // IntersectionObserver لتطبيق الحركة
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // بحيث تتكرر الحركة عند العودة
            }
        });
    }, {
        threshold: 0.2
    });

    // راقب كل العناصر اللي عليها كلاس reveal
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
