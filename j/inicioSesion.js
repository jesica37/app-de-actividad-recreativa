let iniciarSesionBoton = document.getElementById("iniciar-sesion")
iniciarSesionBoton.addEventListener("click", iniciarSesion)

function iniciarSesion() {
    let nombreUsuario = document.getElementById("nombreUsuario").value
    let contraseña = document.getElementById("contraseña").value


    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    if (!usuarios) {
        usuarios = []
    }
    const usuarioEncontrado = usuarios.find(u => u.nombreUsuario === nombreUsuario)

    if (contraseña == usuarioEncontrado.contraseña) {
        const usuarioJSON = JSON.stringify(usuarioEncontrado)
        sessionStorage.setItem("usuario", usuarioJSON)
        Swal.fire({
            title: "Has iniciado sesion correctamente",
            text: "Bienvenido",
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Error",
            text: "Usuario o contraseña invalida",
            icon: "error"
        });
    }
}