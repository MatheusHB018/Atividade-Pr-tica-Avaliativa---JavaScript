let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
    // Verifica se o índice está dentro dos limites
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Oculta todos os slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    
    // Remove a classe active de todos os indicadores
    indicators.forEach(indicator => {
        indicator.classList.remove("active");
    });
    
    // Mostra o slide atual
    slides[currentSlide].classList.add("active");
    indicators[currentSlide].classList.add("active");
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

function goToSlide(index) {
    showSlide(index);
}

// Inicia o carrossel automático (opcional)
let slideInterval = setInterval(() => {
    moveSlide(1);
}, 3000);

// Pausa o carrossel quando o mouse está sobre ele
document.querySelector(".carousel").addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

// Retoma o carrossel quando o mouse sai dele
document.querySelector(".carousel").addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000);
});

// Inicializa o carrossel
showSlide(currentSlide);