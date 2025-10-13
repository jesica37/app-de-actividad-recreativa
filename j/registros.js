


let reservar = document.getElementById("enviar")
reservar.addEventListener("click", registrarUsuario)

function registrarUsuario() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById ("apellido").value

    const usuario = {
        nombre:nombre,
        apellido:apellido
}
console.log(usuario)
    const usuarioJSON = JSON.stringify(usuario)
    localStorage.setItem("usuario",usuarioJSON)
}