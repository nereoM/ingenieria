document.addEventListener("DOMContentLoaded", () => {

    const formLogeo = document.getElementById("login-form");
    formLogeo.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const username = document.querySelector("#username").value;
        const pass = document.querySelector("#password").value;
        
        if (username === "admin" && pass === "1234") {
            window.location.href = "index.html";
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
})