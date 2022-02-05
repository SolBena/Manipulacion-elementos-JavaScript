let main = document.querySelector('.container');
let h2 = document.querySelector('.subtitulo');
let a = document.querySelector('a');
let p = document.querySelectorAll('p');

main.style.display = 'block';

let nombreUsuario = window.prompt("Cual es tu nombre?");

if (nombreUsuario === null || nombreUsuario === "") {
    nombreUsuario += " Invitado"
};

h2.innerText += ' ' + nombreUsuario;
h2.style.textTransform = "uppercase";

a.style.color = "#e51b3e"

let fondo = window.confirm("Desea colocar un fondo de pantalla?")

if (fondo === true) {
    document.querySelector('body').classList.add("fondo")
} 

for ( let i = 0; i < p.length; i++ ) {
    if ( i % 2 === 0 ) {
        p[i].classList.add('destacadoPar')
    } else {
        p[i].classList.add('destacadoImpar')
    }
}

