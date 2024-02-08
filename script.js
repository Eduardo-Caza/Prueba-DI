document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        var username = document.querySelector('input[type="text"]').value;
        var password = document.querySelector('input[type="password"]').value;
        if (username === "EduardoCaza" && password === "123456") {
            // Redirigir a la página add_project.html
            window.location.href = "add_project.html";
        } else {
            alert("Usuario o contraseña incorrectos");
            // Limpiar el campo de contraseña
            document.querySelector('input[type="password"]').value = "";
        }
    });
});
