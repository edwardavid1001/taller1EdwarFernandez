function comprobarInstructor() {
    var nombreSeleccionado = document.getElementById("nombre").value;
    var apellidoSeleccionado = document.getElementById("apellido").value;
    var actividadSeleccionada = document.getElementById("actividad").value;

    var datosInstructores = [
        { nombre: "erick", apellido: "granados", actividad: "materia1" },
        { nombre: "jennifer", apellido: "fajardo", actividad: "materia2" },
        { nombre: "cristian", apellido: "buitrago", actividad: "materia3" },
        { nombre: "sandra", apellido: "rueda", actividad: "materia4" }
    ];

    var respuestaCorrecta = false;

    for (var i = 0; i < datosInstructores.length; i++) {
        var instructor = datosInstructores[i];
        if (instructor.nombre === nombreSeleccionado && instructor.apellido === apellidoSeleccionado && instructor.actividad === actividadSeleccionada) {
            respuestaCorrecta = true;
            break;
        }
    }

    if (respuestaCorrecta) {
        document.getElementById("resultado").innerHTML = "La respuesta es correcta";
    } else {
        document.getElementById("resultado").innerHTML = "La respuesta es incorrecta";
    }
}
