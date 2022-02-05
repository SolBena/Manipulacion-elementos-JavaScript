let body = document.querySelector('body');
let h1 = document.querySelector('h1');

let modoOscuro = window.confirm('Desea usar el modo oscuro?')

if (modoOscuro) {
    body.classList.add('fondoMoviesList');
    body.style.backgroundColor = '#7f7f7f';
}

h1.innerText += "Listado de Peliculas";
h1.style.color = 'white';
h1.style.backgroundColor = "teal";
h1.style.padding = "20px";