let reservasStorage = localStorage.getItem("reservas")
reservasStorage = JSON.parse(reservasStorage)

let reservasConteiner = document.getElementById("ver-reservas")

function renderReservas(reservas) {
    reservas.forEach(reserva => {
        const tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<h3>${reserva.nombre}</h3>
                            <h4>${reserva.dia}</h4>
                            <h4>${reserva.hora} hs</h4>`
        reservasConteiner.appendChild(tarjeta)
    })
}

renderReservas(reservasStorage)