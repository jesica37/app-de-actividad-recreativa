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
            const claseId = e.currentTarget.id;
            Swal.fire({
                title: "¿Desea eliminar reserva?",
                text: "Esta acción eliminará tu reserva y no podrás recuperarla.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#1ebc45ff",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    const nuevasReservas = reservas.filter(reserva => reserva.idClase != claseId);

                    localStorage.setItem(`reservas${usuario.nombreUsuario}`, JSON.stringify(nuevasReservas));

                    renderReservas(nuevasReservas);

                    Swal.fire({
                        title: "Eliminada",
                        text: "Tu reserva ha sido eliminada correctamente.",
                        icon: "success"
                    });
                }
            });
        };
    });
}




