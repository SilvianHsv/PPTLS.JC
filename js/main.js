alert("HOLA SILVIAN Y MINERVA OS INVITAMOS A ESTE JUEGO. DISFRUTAD MUCHO!!");

let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let eligeTuArma = document.querySelector("#elige-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random()* 5);
    let eleccionUsuario = e.currentTarget.id;

    // piedra => 0
    // papel => 1
    // tijera => 2
    // lagarto => 3
    // spock => 4

    if (eleccionPC === 0) {
        eleccionPC = "piedra🪨";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel📋";
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera✂️";
    } else if (eleccionPC ===3) {
        eleccionPC ="lagarto🦎";
    }else if (eleccionPC ===4) {
        eleccionPC ="spock🧌";{

    }

    // piedra vence a tijera
    // piedra vence a lagarto
    // tijera vence a papel
    // tijera vence a lagarto
    // papel vence a piedra
    // papel vence a spock
    // lagarto vence a spock
    // lagarto vence a papel
    // spock vence a tijera
    // spock vence a piedra

    // si son iguales es empate

    if (
        (eleccionUsuario === "piedra🪨" && eleccionPC === "tijera✂️") ||
        (eleccionUsuario === "piedra🪨" && eleccionPC ==="lagarto🦎") ||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📋") ||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "lagarto🦎") ||
        (eleccionUsuario === "papel📋" && eleccionPC === "spock🧌") ||
        (eleccionUsuario === "papel📋" && eleccionPC === "piedra🪨") ||
        (eleccionUsuario ==="lagarto🦎" && eleccionPC === "spock🧌") ||
        (eleccionUsuario === "lagarto🦎" && eleccionPC ==="papel📋")||
        (eleccionUsuario === "spock🧌" && eleccionPC ==="tijera✂️") ||
        (eleccionUsuario === "spock🧌" && eleccionPC === "piedra🪨") 
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
        (eleccionPC === "piedra🪨"&& eleccionUsuario === "lagarto🦎") ||
        (eleccionPC === "tijera✂️" && eleccionUsuario  === "papel📋") ||
        (eleccionPC === "tijera✂️" && eleccionUsuario  === "lagarto🦎") ||
        (eleccionPC === "papel📋" && eleccionUsuario === "spock🧌") ||
        (eleccionPC === "papel📋" && eleccionUsuario  === "piedra🪨") ||
        (eleccionPC ==="lagarto🦎"&& eleccionUsuario ==="spock🧌") ||
        (eleccionPC === "lagarto🦎"&& eleccionUsuario === "papel📋")||
        (eleccionPC === "spock🧌" && eleccionUsuario  ==="tijera✂️") ||
        (eleccionPC === "spock🧌" && eleccionUsuario === "piedra🪨") 
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = "🔥 ¡Ganaste el juego! 🔥"
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "😭 ¡La computadora ganó el juego! 😭"
        }

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }


}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    eligeTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana."
}}
