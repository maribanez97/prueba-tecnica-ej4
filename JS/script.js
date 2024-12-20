// Declaramos constantes y variables
const contenedor = document.querySelector('#Contenedor');
const contenedorLista = document.querySelector('#Lista');


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
        empresa: "Reebok",
        src: "Font Vella.jpg",
        alt: "imagen 2"
    }, {
        id: 3,
        proyecto: "ZPump Urban Fit",
        empresa: "Reebok",
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
    },
]

console.log(listaProyectos);
console.log(listaProyectos.src);


// Funciones y métodos
function imprimirLista() {
    listaProyectos.forEach((item, i) => {
        let proyecto = item.proyecto;
        let empresa = item.empresa;
        let imagen = item.img;
        contenedorLista.innerHTML += `<li class="ListaItem">
                                        <h3 id="ListaItem-titulo" class="ListaItem-titulo">${proyecto}</h3>
                                        <p class="ListaItem-subtitulo">${empresa}</p>
                                    </li>`
    });
};

// function verImagen() {
    const titulo = document.querySelectorAll('#ListaItem-titulo');

    titulo.forEach((itemTitulo,i) => {
        itemTitulo.addEventListener('mouseenter', () => {
            let imagen = listaProyectos.img;
                console.log(`La imagen que corresponde es:${imagen}`);
            });

        });
// }

// Inicializar código
imprimirLista();



// titulo.forEach((itemtitulo, i) => {
//     i = listaImagenes[i].id;
//     itemtitulo.addEventListener('mouseenter',() => {
//         listaImagenes.forEach(item,i => {
//             if (item.id === i){
//                 lista
//             }
//         })
//         console.log(`La imagen que corresponde a ${i} es:${listaImagenes.img}`);
//         let imagen = listaImagenes.img;
//         console.log(imagen);
//         contenedor.style.background = 'background:url(${img[i]})'
//     });
// });
