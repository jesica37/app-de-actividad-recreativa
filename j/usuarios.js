let reservar = document.getElementById("enviar")
reservar.addEventListener("click", registrarUsuario)

function registrarUsuario() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let nombreUsuario = document.getElementById("usuario").value
    let edad = document.getElementById("edad").value
    let contraseña = document.getElementById("contraseña").value
    let confirmacionContraseña = document.getElementById("confirmacion-de-contraseña").value
    if (validarRegistro(nombre, nombreUsuario, contraseña, confirmacionContraseña)) {
        const usuario = {
            nombre: nombre,
            apellido: apellido,
            nombreUsuario: nombreUsuario,
            edad: edad,
            contraseña: contraseña
        }
        guardarLocal(usuario)
        Swal.fire({
            title: "Usuario creado correctamente",
            text: `Bienvenido ${nombre}`,
            icon: "success"
        });
    }
}

function guardarLocal(usuario) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    if (!usuarios) {
        usuarios = []
    }
    usuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function validarRegistro(nombre, nombreUsuario, contraseña, confirmacionContraseña) {
    if (nombre === "" || nombreUsuario === "" || contraseña === "" || confirmacionContraseña === "") {
        Swal.fire({
            title: "Error",
            text: "Los campos nombre, usuario y contraseñas no pueden estar vacios",
            icon: "error"
        });
        return false;
    }
    if (contraseña != confirmacionContraseña) {
        Swal.fire({
            title: "Error",
            text: "Las contraseñas no coinciden",
            icon: "error"
        });
        return false;
    }
    return true;
}





