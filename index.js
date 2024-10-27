//Funciíon de scroll para Kevin Bacon
window.addEventListener("scroll", function() {
    const burger360js = document.querySelector(".burger360");
    const maxScroll = 300; //hacer scroll para que el div desaparezca
    const scrollTop = document.documentElement.scrollTop;

    // Calcula la nueva opacidad basada en el scroll
    let newOpacity = 1 - (scrollTop / maxScroll);
    newOpacity = Math.max(newOpacity, 0);
    burger360js.style.opacity = newOpacity;
});

//Funcion de deslizar del slider
let currentIndex = 0;
const promociones_slides = document.querySelectorAll('.promo');

function showSlide(index) {
    // Si el índice es mayor que el total de slides, vuelve al primer slide
    if (index >= promociones_slides.length) {
        currentIndex = 0;
    }
    // Si el índice es menor que 0, va al último slide
    else if (index < 0) {
        currentIndex = promociones_slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Cambia la posición del contenedor de slides
    document.querySelector('.promociones_slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}