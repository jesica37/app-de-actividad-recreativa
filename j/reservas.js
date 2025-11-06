const usuario = JSON.parse(sessionStorage.getItem("usuario"))

let reservasArray = JSON.parse(localStorage.getItem(`reservas${usuario.nombreUsuario}`))

let reservasConteiner = document.getElementById("ver-reservas")

function renderReservas(reservas) {
    reservasConteiner.innerHTML = ""
    reservas.forEach(reserva => {
        const tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<h3>${reserva.nombre}</h3>
                            <h4>${reserva.fecha}</h4>
                            <h4>${reserva.hora} hs</h4>
                            <button class="btn-borrar" id="${reserva.idClase}">Eliminar reserva</button>`

        tarjeta.classList.add("tarjeta")
        reservasConteiner.appendChild(tarjeta)
    })
    botonDeBorrar(reservas)
}

renderReservas(reservasArray)

function botonDeBorrar(reservas) {
    let botonBorrar = document.querySelectorAll(".btn-borrar")
    botonBorrar.forEach(boton => {
        boton.onclick = (e) => {
            const claseId = e.currentTarget.id
            const nuevasReservas = reservas.filter(reserva => reserva.idClase != claseId)
            localStorage.setItem(`reservas${usuario.nombreUsuario}`, JSON.stringify(nuevasReservas))
            renderReservas(nuevasReservas)
        }
    })
}