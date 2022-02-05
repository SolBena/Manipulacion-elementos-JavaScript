//Microdesafio - Paso 1

//Capturo los elementos
let main = document.querySelector('.container');
let h2 = document.querySelector('.subtitulo');
let a = document.querySelector('a');
let p = document.querySelectorAll('p');

main.style.display = 'block';

//Uso del prompt para darle la bienvenida al usuario
let nombreUsuario = window.prompt("Cual es tu nombre?");

//Si el usuario no ingresa su nombre se coloca "Invitado"
if (nombreUsuario === null || nombreUsuario === "") {
    nombreUsuario += " Invitado"
};

//Se coloca el nombre del usuario
h2.innerText += ' ' + nombreUsuario;

//Se agrega el estilo al h2
h2.style.textTransform = "uppercase";

//Se agrega el color de tipografia a la etiqueta a
a.style.color = "#e51b3e"


//Se agrega imagen de fondo si el usuario acepta, si no, queda el fondo blanco
let fondo = window.confirm("Desea colocar un fondo de pantalla?")

if (fondo === true) {
    document.querySelector('body').classList.add("fondo")
} 

//Se agregan las clases a la etiqueta p, dependiendo de si es par o impar
for ( let i = 0; i < p.length; i++ ) {
    if ( i % 2 === 0 ) {
        p[i].classList.add('destacadoPar')
    } else {
        p[i].classList.add('destacadoImpar')
    }
}

