// Declaramos constantes y variables
const contenedor = document.querySelector('#ContenedorLista');
const contenedorLista = document.querySelector('#Lista');
const titulos = document.querySelectorAll('.ListaItem');
const contenedorImg = document.querySelector('#ContenedorImagen');

const listaProyectos = [
    {
        id: 1,
        proyecto: "ZPump Urban Fit",
        empresa: "Reebok",
        src: "rebook.jpg",
        alt: "imagen 1"
    }, {
        id: 2,
        proyecto: "Coach2o",
        empresa: "Font Vella",
        src: "fontvella.jpg",
        alt: "imagen 2"
    }, {
        id: 3,
        proyecto: "RCar",
        empresa: "Revista Car",
        src: "car.jpg",
        alt: "imagen 3"
    }, {
        id: 4,
        proyecto: "Emotional Pulse",
        empresa: "Seidor",
        src: "seidor.jpg",
        alt: "imagen 4"
    }, {
        id: 5,
        proyecto: "Alhambra",
        empresa: "Cervezas Alhambra",
        src: "alhambra.jpg",
        alt: "imagen 5"
    }, {
        id: 6,
        proyecto: "Actimel",
        empresa: "Danone",
        src: "actimel.jpg",
        alt: "imagen 6"
    }, {
        id: 7,
        proyecto: "ffuuss",
        empresa: "OTS Group",
        src: "ffuuss.jpg",
        alt: "imagen 7"
    }, {
        id: 8,
        proyecto: "Delicious",
        empresa: "Día",
        src: "dia.jpg",
        alt: 'imagen 8'
    }, {
        id: 9,
        proyecto: "Roca",
        empresa: "Sanitarios",
        src: "roca.jpg",
        alt: "imagen 9"
    }, {
        id: 10,
        proyecto: "Deep State",
        empresa: "Fox",
        src: "fox.webp",
        alt: "imagen 10"
    }
]


// Funciones y métodos

// function imprimirLista() {
//     listaProyectos.forEach((item, i) => {
//         let proyecto = item.proyecto;
//         let empresa = item.empresa;
//         // let imagen = item.src;
//         contenedorLista.innerHTML += `<li class="ListaItem">
//                                         <h3 id="ListaItem-titulo" class="ListaItem-titulo">${proyecto}</h3>
//                                         <p class="ListaItem-subtitulo">${empresa}</p>
//                                     </li>`
//     });
// };

function removeOpacity(){
    titulos.forEach(titulo => {
        titulo.classList.remove('u-opacity');
        contenedor.style.background = 'rgba(29, 29, 29, 0.2)';
    });
}

function addOpacity(){
    titulos.forEach(titulo => {
        titulo.classList.add('u-opacity');
        contenedor.style.background = 'rgba(29, 29, 29, 1)';
    });
}

function verImagen(index) {
    const proyecto = listaProyectos[index];
       let alt = listaProyectos[index].alt;
            contenedorImg.innerHTML = `<img src="./img/${proyecto.src}" alt="${proyecto.alt}" class="Imagen">`;
            contenedorImg.classList.add('isVisible');
}



//EventListeners
titulos.forEach((titulo, index) => {
    titulo.addEventListener('mouseover', () => {
        removeOpacity();
        verImagen(index);
    });
});

contenedorLista.addEventListener('mouseout', () => {
    addOpacity();
    contenedorImg.classList.remove('isVisible');
});


