const clases= [
    {
        id: 1, 
        nombre: "yoga", 
        dia: "lunes",
        hora: 10,
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
let cartClases = []

let clasesContainer = document.getElementById("clases-container")
function renderClasess(clasesArray) {
    clasesArray.forEach(clase => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${clase.nombre}</h3>
                          <h4>${clase.dia}</h4>
                          <h4>${clase.hora}</h4>
                          <button class="claseReservar" id="${clase.id}">Reservar</button>`
        clasesContainer.appendChild(card)
    })

}
renderClasess(clases)