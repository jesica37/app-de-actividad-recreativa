
let reservas = []

let clasesContenedor = document.getElementById("clases-contenedor")

const URL = "../db/data.json"

function verClases() {
    fetch(URL)
        .then(response => response.json())
        .then(datos => {
            console.log(datos)
            const clasesArray = []
            for (const dato of datos) {
                const clase = new Clase(dato.id, dato.nombre, dato.dia, dato.hora, dato.cupos)
                clasesArray.push(clase)
            }
            renderClases(clasesArray)
        })
        .catch(error => console.log("Se produjo un error", error))
        .finally(() => console.log("finalizado"))
}
verClases()

function renderClases(clasesArray) {
    clasesArray.forEach(clase => {
        const tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<h3 class="actividad">${clase.nombre}</h3>
                            <h4>${clase.dia}</h4>
                            <h4>${clase.hora} hs</h4>
                            <input type="text" id="f${clase.id}" class="input-fecha" placeholder="Seleccionar fecha" />
                            <button class="btn-reservar" id="${clase.id}">Reservar</button>`
        tarjeta.classList.add("tarjeta")
        clasesContenedor.appendChild(tarjeta)
        setearFechas(clase)
    })
    botonDeReserva(clasesArray)
}

function botonDeReserva(clasesArray) {
    let botonReservar = document.querySelectorAll(".btn-reservar")
    botonReservar.forEach(boton => {
        boton.onclick = (e) => {
            const claseId = e.currentTarget.id
            const claseSeleccionada = clasesArray.find(clase => clase.id == claseId)
            const fechaElegida = document.querySelector(`#f${claseSeleccionada.id}`).value

            if (validarCupo(claseSeleccionada, fechaElegida)) {
                reservar(claseSeleccionada, fechaElegida)
            }

        }
    })
}

function setearFechas(clase) {
    const fechasDisponibles = [];
    for (const cupo of clase.cupos) {
        fechasDisponibles.push(cupo.fecha)
    }
    flatpickr(`#f${clase.id}`, {
        dateFormat: "Y-m-d",
        locale: "es",
        enable: fechasDisponibles
    })
}

function validarCupo(clase, fechaElegida) {

    if (!fechaElegida) {
        Swal.fire({
            title: "Debe seleccionar una fecha",
            icon: "error"
        });
        return false
    }
    const cupo = clase.cupos.find(f => f.fecha === fechaElegida)
    if (cupo.disponible <= 0) {
        Swal.fire({
            title: "No hay cupos disponibles para la fecha seleccionada",
            icon: "error"
        });
        return false
    }
    return true
}

function reservar(clase, fechaElegida) {
    const usuario = JSON.parse(sessionStorage.getItem("usuario"))
    reservas = JSON.parse(localStorage.getItem(`reservas${usuario.nombreUsuario}`))
    if (!reservas) {
        reservas = []
    }
    if (validarReservaUsuario(reservas, clase, fechaElegida)) {
        clase.restarCupo(fechaElegida)
        let reserva = new Reserva(clase.id, clase.nombre, fechaElegida, clase.hora)
        reservas.push(reserva)
        localStorage.setItem(`reservas${usuario.nombreUsuario}`, JSON.stringify(reservas))
        Swal.fire({
            title: "Tu reserva se ha realizado",
            text: `usuario: ${usuario.nombreUsuario}"
                    clase: ${clase.nombre}"
                    fecha: ${fechaElegida}
                    hora: ${clase.hora}`,
            icon: "success"
        });
    }
}

function validarReservaUsuario(reservas, clase, fechaElegida) {
    for (const reserva of reservas) {

        if (reserva.idClase == clase.id && reserva.fecha == fechaElegida) {
            Swal.fire({
                title: "Ya tienes una reserva para este turno",
                icon: "error"
            });
            return false
        }
    }
    return true
}

class Clase {
    constructor(id, nombre, dia, hora, cupos) {
        this.id = id
        this.nombre = nombre
        this.dia = dia
        this.hora = hora
        this.cupos = cupos
    }

    restarCupo(fecha) {
        const cupo = this.cupos.find(c => c.fecha === fecha)
        cupo.disponible = cupo.disponible - 1
    }
}

class Reserva {
    constructor(idClase, nombre, fecha, hora) {
        this.idClase = idClase
        this.nombre = nombre
        this.fecha = fecha
        this.hora = hora
    }
}