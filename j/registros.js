let reservar = document.getElementById("enviar")
reservar.addEventListener("click", registrarUsuario)

function registrarUsuario() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    if (validar(nombre, apellido)) {
        const usuario = {
            nombre: nombre,
            apellido: apellido
        }
        const usuarioJSON = JSON.stringify(usuario)
        localStorage.setItem("usuario", usuarioJSON)

    }
}

function validar(nombre, apellido) {
    if (nombre === "" || apellido === "") {
        let mensajeError = document.getElementById("mensaje-error")
        mensajeError.innerText = "Los campos no pueden estar vacios"
        return false;
    }
    return true;
}
