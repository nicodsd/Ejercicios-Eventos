let array = [
    {
        id:0,
        titulo:"sacar la basura",
        texto:"mi señora me va a retar si no lo hago",
        realizada:false
    },
    {
        id:1,
        titulo:"sacar la basura",
        texto:"mi señora me va a retar si no lo hago",
        realizada:false
    },
    {
        id:2,
        titulo:"sacar la basura",
        texto:"mi señora me va a retar si no lo hago",
        realizada:false
    }
]

let idGlobal = [2]

const crearNotas = document.getElementById("notasCont");

let template = ''
for (let pintarCarta of array) {
   template += pintar(pintarCarta);
}
crearNotas.innerHTML = template;

function pintar (array){
    return `<div class="card" style="width: 18rem;">
    <div class="form-check form-check-inline">
        <input class="form-check-input border-danger bg-body-secondary" type="checkbox" id="inlineCheckbox4" value="option3">
        <label class=" col-12 form-check-label" for="inlineCheckbox4"></label>
    </div>
    <div class="card-body">
        <h5 class="card-title">${array.titulo}</h5>
        <p class="card-text">${array.texto}</p>
        <a href="#" class="btn btn-primary"></a>
    </div>
    </div>`
}

/* const titulo = document.getElementById('titulo');
const texto = document.getElementById('texto');
 */
/* function agregarNota(titulo, texto) {
    const nuevaNota = {
        titulo: titulo,
        texto: texto,
    }
    array.push(nuevaNota);
}

const $contenedor = document.getElementById('notas')

let botonGuardar = document.getElementById('botonGuardarCambios');
botonGuardar.addEventListener('click', (e) => {
    e.preventDefault()
    let titulo = document.getElementById('titulo').value;
    let texto = document.getElementById('texto').value;
    agregarNota(titulo, texto);
    const notaGuardada = array.map(agregarNota).join('');
    crearNotas.innerHTML = notaGuardada;
    console.log(array)
});
 */
function agregarNota(titulo, texto) {
    const nuevaNota = {
        titulo: titulo,
        texto: texto
    }
    array.push(nuevaNota);
}

const $contenedor = document.getElementById('notasCont')

let botonGuardar = document.getElementById('botonGuardarCambios');
botonGuardar.addEventListener('click', (e) => {
    e.preventDefault()
    let titulo = document.getElementById('titulo').value;
    let texto = document.getElementById('texto').value;
    agregarNota(titulo, texto);
    const notaGuardada = array.map(agregarNota).join('');
    $contenedor.innerHTML = notaGuardada;
});


/* const guardarCam = document.getElementById('botonGuardarCambios') */
/* 
guardarCam.addEventListener('click', (e)=>{
    e.preventDefault()
    const tit = document.getElementById('titulo')
    const tex = document.getElementById('texto')
    let titulo=tit.value;  
    let texto=tex.value;
    agregarNota(titulo, texto)
}) */


console.log(array)