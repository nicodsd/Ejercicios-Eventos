const array = [
    {
        id: 0,
        titulo: "sacar la basura",
        texto: "mi señora me va a retar si no lo hago",
        realizada: false
    },
    {
        id: 1,
        titulo: "ir al supermercado",
        texto: "comprar pan, leche y huevos",
        realizada: false
    },
    {
        id: 2,
        titulo: "llamar al doctor",
        texto: "pedir cita para la semana que viene",
        realizada: false
    }
]


let $idGlobal = [2]

const $contenedor = document.getElementById("notasCont");

function pintarNotas(array) {
    return `<div class="flex-grow">
                <div class="card m-2 d-flex">
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-danger bg-body-secondary" type="checkbox" id="inlineChe<input onClick="marcarRealizada(${array.id})" type="checkbox" ${array.realizada ?
                    "checked" : ""}>ckbox4" value="option3">
                  <label class=" col-6 form-check-label" for="inlineCheckbox4">Category</label>
                </div>
                    <div class="card-body">
                        <h5 class="card-title">${array.titulo}</h5>
                        <p class="card-text">${array.texto}</p>
                        <a href="#" class="btn btn-primary" onClick="borrarNota(${array.id})">Borrar nota</a>
                    </div>
                </div>
            </div>`;
   }


const $notas = array.map(pintarNotas).join('');
notasCont.innerHTML = $notas;


function agregarNota(titulo, texto) {
    const nuevaNota = {
        titulo: titulo,
        texto: texto,
    }
    array.push(nuevaNota);
}


let botonGuardar = document.getElementById('botonGuardarCambios');
botonGuardar.addEventListener('click', (e) => {
    let titulo = document.getElementById('titulo').value;
    let texto = document.getElementById('texto').value;
    agregarNota(titulo, texto);
    const notaGuardada = array.map(pintarNotas).join('');
    notasCont.innerHTML = notaGuardada;
});


function borrarNota(id){
    const resultado = array.filter(function(not){
        return not.id !== id;
    })
    array = resultado
}