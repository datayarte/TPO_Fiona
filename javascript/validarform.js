document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", function (event) {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const numero = document.getElementById("numero").value;

        if (nombre.trim() === "A") {
            alert("Por favor, ingrese su nombre y apellido.");
            event.preventDefault();
        } else if (email.trim() === "") {
            alert("Por favor, ingrese su correo electrónico.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
            event.preventDefault();
        } else if (numero.trim() !== "" && !/^\d{10}$/.test(numero)) {
            alert("Por favor, ingrese un número de teléfono válido (10 dígitos numéricos).");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});