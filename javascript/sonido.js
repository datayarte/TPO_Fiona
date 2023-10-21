document.addEventListener("DOMContentLoaded", function () {
    var video = document.querySelector("video");
    var toggleSoundButton = document.getElementById("toggleSound");
    var musicaOnIcon = document.getElementById("musicaOn");
    var musicaOffIcon = document.getElementById("musicaOff");

    toggleSoundButton.addEventListener("click", function () {
        if (video.muted) {
            video.muted = false;
            musicaOnIcon.style.display = "inline";  // Muestra el icono de sonido activado
            musicaOffIcon.style.display = "none";   // Oculta el icono de sonido desactivado
        } else {
            video.muted = true;
            musicaOnIcon.style.display = "none";     // Oculta el icono de sonido activado
            musicaOffIcon.style.display = "inline";  // Muestra el icono de sonido desactivado
        }
    });

    let slideIndex = 0;

    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
    }

    showSlides();
});

// Agregar el nuevo código JavaScript para el desplazamiento suave
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
