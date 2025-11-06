

//DOM

//innerHTML
let saludo = document.getElementById("bienvenido")
const usuario = JSON.parse(sessionStorage.getItem("usuario"))
let contenedorBoton = document.getElementById("container-boton")

if (usuario !== null) {
    saludo.innerHTML = `Hola ${usuario.nombre}, ya podes reservar las clases para este mes.`
    renderBoton("Reservar", "./pages/clases.html")
    renderBoton("Ver reservas", "./pages/reservas.html")

}
else {
    renderBoton("iniciar Sesion", "./pages/iniciarSesion.html")
    renderBoton("Resgistrar usuario", "./pages/registros.html")
    saludo.innerHTML = ("Bienvenido, si desea puede registrarse o iniciar sesion")
}
let contenedor = document.getElementById("container")
contenedor.innerHTML = "Este mes tenemos TALLER DE COSTURA: Lunes 13/10 a las 17:00hs."

function renderBoton(text, ref) {
    console.log("render: ", text)
    const boton = document.createElement("a")
    boton.textContent = text
    boton.href = ref
    boton.classList.add("btn")
    contenedorBoton.appendChild(boton)
}
