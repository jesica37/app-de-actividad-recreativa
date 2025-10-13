const clases = [
    {
        id: 1,
        nombre: "yoga",
        dia: "lunes",
        hora: 10
    },
    {
        id: 2,
        nombre: "pilates",
        dia: "martes",
        hora: 11,
    },
    {
        id: 3,
        nombre: "acrobacia en tela",
        dia: "martes",
        hora: 18,
    },
    {
        id: 4,
        nombre: "zumba",
        dia: "miercoles",
        hora: 10,
    },
    {
        id: 5,
        nombre: "funcional",
        dia: "viernes",
        hora: 19,
    },
]
let reservas = []

let clasesContenedor = document.getElementById("clases-contenedor")
function renderClases(clasesArray) {
    clasesArray.forEach(clase => {
        const tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<h3>${clase.nombre}</h3>
                            <h4>${clase.dia}</h4>
                            <h4>${clase.hora} hs</h4>
                            <button class="reservar" id="${clase.id}">Reservar</button>`
        clasesContenedor.appendChild(tarjeta)
    })
    botonDeReserva()
}
renderClases(clases)

function botonDeReserva() {
    botonReservar = document.querySelectorAll(".reservar")
    botonReservar.forEach(boton => {
        boton.onclick = (e) => {
            const claseId = e.currentTarget.id
            const claseSeleccionada = clases.find(clase => clase.id == claseId)

            reservas.push(claseSeleccionada)

            localStorage.setItem("reservas", JSON.stringify(reservas))
        }
    })
}