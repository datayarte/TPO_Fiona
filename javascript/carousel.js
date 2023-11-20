document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName("carousel-slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 7000); // Cambia la imagen cada 7 segundos
    }

    showSlides();
});
