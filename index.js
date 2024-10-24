window.addEventListener("scroll", function() {
    const burger360js = document.querySelector(".burger360");
    const maxScroll = 300; //hacer scroll para que el div desaparezca
    const scrollTop = document.documentElement.scrollTop;
    
    // Calcula la nueva opacidad basada en el scroll
    let newOpacity = 1 - (scrollTop / maxScroll);
    newOpacity = Math.max(newOpacity, 0);
    burger360js.style.opacity = newOpacity;
});
