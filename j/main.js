const clasesDisponibles = []


let opcion

do {
    opcion = parseInt(prompt("Ingrese una opción: \n 1-Inscribirse a una clase como alumno \n 2-Crear una clase como profesor \n 3-Eliminar una clase \n 4-Salir "))

    console.log(opcion)


    switch (opcion) {
        case 1:
            reservarClase()
            break
        case 2:
            clasesDisponibles.push(crearClase())
            console.log(clasesDisponibles)
            break
        case 3:
            let clase = prompt("Ingrese la clase que desea eliminar")
            eliminarClase(clase)
            break
        case 4:
            salir()
            break
        default:
            alert("opcion incorrecta")
    }


} while (opcion !== 4)


function reservarClase() {
    let nombre = prompt("ingrese su nombre completo")
    let mensaje = "Elija una clase:"
    for (const clase of clasesDisponibles) {
        mensaje = mensaje + "\n" + clase
    }
    let clase = prompt(mensaje)
    let dia = prompt("Ingrese el día de la clase")
    let horario = parseInt(prompt("Ingrese la hora de la clase"))
    mostrarReserva(nombre, clase, dia, horario)
}

function mostrarReserva(nombre, clase, dia, horario) {
    let mensaje = nombre + " su turno para la clase " + clase + " queda reservado para el día " + dia + " a las " + horario + "."
    alert(mensaje)
}

function crearClase() {
    let nuevaClase = prompt("Escribe la clase que desea crear")
    return nuevaClase
}

function eliminarClase(clase) {
    let indice = clasesDisponibles.indexOf(clase)
    clasesDisponibles.splice(indice, 1)
}

function salir() {
    let mensaje = "¡Gracias!"
    alert(mensaje)
}
