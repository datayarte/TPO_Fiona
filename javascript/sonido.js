document.addEventListener("DOMContentLoaded", function () {
    var video = document.querySelector("video");
    var toggleSoundButton = document.getElementById("toggleSound");
    var musicaOnIcon = document.getElementById("musicaOn");
    var musicaOffIcon = document.getElementById("musicaOff");

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
});
