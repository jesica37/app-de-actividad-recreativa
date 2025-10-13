//DOM

//innerHTML
let saludo = document.getElementById("bienvenido")
const usuario = JSON.parse(localStorage.getItem("usuario"))
if (usuario !== null) {
    console.log(usuario)
    saludo.innerHTML = `Bienvenido de vuelta ${usuario.nombre}`
}
else {
    saludo.innerHTML = ("Bienvenido, si desea puede registrarse")
}
let contenedor = document.getElementById("container")
contenedor.innerHTML = "Este mes tenemos TALLER DE COSTURA: Lunes 13/10 a las 17:00hs."

//DEJO COMENTADO CODIGO DE LA ENTREGA ANTERIOR POR SI LO NECESITO PARA LA ENTREGA FINAL

/*const clasesDisponibles = [] */
/*
const cupos = 5
class Actividad {
     static id = 5
     constructor (nombre, tipo, clase, dia, hora) {
         this.id = --Actividad.id
         this.nombre = nombre,
         this.tipo = tipo,
         this.clase = clase
         this.dia = dia
         this.hora = hora
    }

     restarCupo(cantidad) {
         if (cupos - cantidad < 0) {
          console.log("No hay suficientes cupos disponibles");
         } else {
           cupos -= cantidad;
          console.log(`Cupos restantes: ${cupos}`);
        }
    }
}
/*

 const actividades = []
 const cargaActividades = () => {
     let cargaNombre = prompt("Ingrese su nombre y apellido")
     let cargaTipo = prompt("Ingrese como quiere anotarse: alumno o profesor")
     let cargaClase = parseInt(prompt("Ingrese la clase que desea"))
     let cargaDia = prompt("Ingrese el dia")
     let cargaHora = prompt("Ingrese el horario")
     const actividad = new Actividad (cargaNombre, cargaTipo, cargaClase, cargaDia, cargaHora)

     actividades.push(Actividad)
     console.log(actividades)
 }

 const verActividades = () => {
     if(actividades.length === 0) {
         alert("Todavia no hay actividades cargadas")
     } else {
         for (const actividad of actividades) {
             console.log(actividad)
         }
     }
 }

let opcion

do {
    opcion = parseInt(prompt("Ingrese una opción: \n 1-Inscribirse a una clase \n 2-Ver clases disponibles \n 3-Eliminar una clase \n 4-Salir "))

    console.log(opcion)


    switch (opcion) {
        case 1:
            cargaActividades()
            break
        case 2:
            clasesDisponibles.push(verActividades())
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


/*function reservarClase() {
    let nombre = prompt("ingrese su nombre completo")
    let mensaje = "Elija una clase:"
    for (const clase of clasesDisponibles) {
        mensaje = mensaje + "\n" + clase
    }
    let clase = prompt(mensaje)
    let dia = prompt("Ingrese el día de la clase")
    let horario = parseInt(prompt("Ingrese la hora de la clase"))
    mostrarReserva(nombre, clase, dia, horario)
}*/
/*
function mostrarReserva(nombre, clase, dia, horario) {
    let mensaje = nombre + " su turno para la clase " + clase + " queda reservado para el día " + dia + " a las " + horario + "."
    alert(mensaje)
}

/*function crearClase() {
    let nuevaClase = prompt("Escribe la clase que desea crear")
    //preguntar dia horario nombre. instanciar una nueva actividad y guardar en el array
    return nuevaClase
}*/
/*
function eliminarClase(clase) {
    let indice = clasesDisponibles.indexOf(clase)
    clasesDisponibles.splice(indice, 1)
}

function salir() {
    let mensaje = "¡Gracias!"
    alert(mensaje)
}*/





