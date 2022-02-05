//Microdesafio - paso 3

//Capturo los elementos
let h1 = document.querySelector('h1');
let section = document.querySelector('section');
let article = document.querySelector('article');

//Agrego texto al h1
h1.innerText += "Agregar Peliculas";
//Agrego clase al h1
h1.classList.add("titulo");
//Agrego clase al articulo
article.classList.add('fondoTransparente');
//Agrego clase a la seccion
section.classList.add('fondoCRUD');