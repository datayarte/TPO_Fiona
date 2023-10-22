document.addEventListener("DOMContentLoaded", function () {
    var video = document.querySelector("video");
    var toggleSoundButton = document.getElementById("toggleSound");
    var musicaOnIcon = document.getElementById("musicaOn");
    var musicaOffIcon = document.getElementById("musicaOff");
    var slideIndex = 0;

    toggleSoundButton.addEventListener("click", function () {
        if (video.muted) {
            video.muted = false;
            musicaOnIcon.style.display = "inline";  // Muestra el icono de sonido activado
            musicaOffIcon.style.display = "none";    // Oculta el icono de sonido desactivado
        } else {
            video.muted = true;
            musicaOnIcon.style.display = "none";     // Oculta el icono de sonido activado
            musicaOffIcon.style.display = "inline";  // Muestra el icono de sonido desactivado
        }
    });

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
        setTimeout(showSlides, 12000); // Cambia la imagen cada 12 segundos
    }

    showSlides();
});
