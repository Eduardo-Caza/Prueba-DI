document.addEventListener("DOMContentLoaded", function() {
    // Función para enviar el formulario de contacto
    const formularioContacto = document.getElementById("formulario-contacto");
    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
        // Aquí puedes agregar la lógica para enviar el formulario por AJAX o realizar cualquier otra acción
        alert("¡Mensaje enviado!");
        formularioContacto.reset(); // Limpiar el formulario después de enviar
    });

    // Función para cargar dinámicamente los proyectos
    function cargarProyectos() {
        // Obtener la lista de proyectos almacenados localmente
        const proyectosGuardados = JSON.parse(localStorage.getItem("proyectos")) || [];
        // Obtener el contenedor de proyectos
        const listaProyectos = document.getElementById("lista-proyectos");
        // Limpiar el contenedor antes de agregar los proyectos
        listaProyectos.innerHTML = "";
        // Iterar sobre la lista de proyectos y agregarlos al contenedor
        proyectosGuardados.forEach(function(proyecto) {
            const proyectoHTML = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${proyecto.nombre}</h5>
                        <p class="card-text">${proyecto.descripcion}</p>
                        <a href="${proyecto.github}" class="btn btn-primary" target="_blank">Ver Repositorio</a>
                    </div>
                </div>
            `;
            listaProyectos.insertAdjacentHTML("beforeend", proyectoHTML);
        });
    }

    // Llamar a la función para cargar los proyectos cuando la página esté lista
    cargarProyectos();

    // Función para cargar dinámicamente las habilidades
    function cargarHabilidades() {
        // Aquí puedes realizar una petición AJAX para obtener las habilidades del estudiante desde el servidor
        // Por ahora, mostraremos un ejemplo estático
        const listaHabilidades = document.getElementById("lista-habilidades");
        const habilidadesHTML = `
            <div class="row">
                <div class="col-md-4">
                    <h5>Lenguajes de Programación</h5>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Frameworks</h5>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Spring Boot</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Herramientas</h5>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
        `;
        // Agregar las habilidades al contenedor
        listaHabilidades.innerHTML = habilidadesHTML;
    }

    // Llamar a la función para cargar las habilidades cuando la página esté lista
    cargarHabilidades();

    // Función para manejar el envío del formulario de añadir proyecto
    const formularioProyecto = document.getElementById("formulario-proyecto");
    formularioProyecto.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

        // Obtener los valores del formulario
        const nombreProyecto = document.getElementById("nombreProyecto").value;
        const descripcionProyecto = document.getElementById("descripcionProyecto").value;
        const linkGithub = document.getElementById("linkGithub").value;

        // Crear un objeto con la información del proyecto
        const nuevoProyecto = {
            nombre: nombreProyecto,
            descripcion: descripcionProyecto,
            github: linkGithub
        };

        // Obtener la lista de proyectos almacenados localmente
        const proyectosGuardados = JSON.parse(localStorage.getItem("proyectos")) || [];
        // Agregar el nuevo proyecto a la lista
        proyectosGuardados.push(nuevoProyecto);
        // Guardar la lista actualizada de proyectos en el almacenamiento local
        localStorage.setItem("proyectos", JSON.stringify(proyectosGuardados));

        // Recargar la lista de proyectos para reflejar el proyecto recién agregado
        cargarProyectos();

        // Limpiar el formulario después de enviar
        formularioProyecto.reset();
    });
});
