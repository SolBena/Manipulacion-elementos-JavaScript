//Microdesafio - paso 2

//Capturo los elementos
let body = document.querySelector('body');
let h1 = document.querySelector('h1');

//Mediante confirm le pregunto al usuario si quiere usar el modo oscuro, si acepta se cambian las clases, si no, queda como estaba
let modoOscuro = window.confirm('Desea usar el modo oscuro?')

if (modoOscuro) {
    body.classList.add('fondoMoviesList');
    body.style.backgroundColor = '#7f7f7f';
}

//Se agrega el texto y clases al h1
h1.innerText += "Listado de Peliculas";
h1.style.color = 'white';
h1.style.backgroundColor = "teal";
h1.style.padding = "20px";