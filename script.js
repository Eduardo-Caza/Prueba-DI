document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        var username = document.querySelector('input[type="text"]').value;
        var password = document.querySelector('input[type="password"]').value;
        if (username === "EduardoCaza" && password === "123456") {
            alert("Usuario y contraseña correctos");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
