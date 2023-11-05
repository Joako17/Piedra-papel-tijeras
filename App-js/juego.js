// Importamos los elementos necesarios desde el módulo elementos.js
import { inicio, juego, fin, nombreJugador, resultadoJugador, resultadoComputadora, btnPiedra, btnPapel, btnTijeras, historial } from './elementos.js';
import { resultadoActual } from './elementos.js';
import { mostrarFin } from './fin.js'; // Importamos la función mostrarFin desde el módulo fin.js
import Swal from 'https://cdn.skypack.dev/sweetalert2'; // Importamos la biblioteca SweetAlert2 para mostrar alertas bonitas
import { btnReiniciar, btnFinalizar } from './elementos.js'; // Importamos los botones de reiniciar y finalizar

// Definimos los objetos jugador y computadora con sus respectivas puntuaciones
export let jugador = {
    nombre: 'Nombre del Jugador',
    puntuacion: 0
};

export let computadora = {
    puntuacion: 0
};

// Definimos un array para almacenar el historial de partidas
export let historialPartidas = [];

// Definimos la función mostrarJuego que se encarga de mostrar la pantalla de juego y de inicializar los event listeners de los botones
export function mostrarJuego() {
    console.log('La función mostrarJuego se ha llamado');
    inicio.style.display = 'none'; // Ocultamos la pantalla de inicio
    juego.style.display = 'block'; // Mostramos la pantalla de juego
    fin.style.display = 'none'; // Ocultamos la pantalla de fin

    nombreJugador.textContent = `¡Acepta el desafío ${jugador.nombre}!`; // Mostramos el nombre del jugador

    // Añadimos los event listeners a los botones de piedra, papel y tijeras
    btnPiedra.addEventListener('click', () => jugar('piedra'));
    btnPapel.addEventListener('click', () => jugar('papel'));
    btnTijeras.addEventListener('click', () => jugar('tijeras'));

    // Mostramos las puntuaciones del jugador y de la computadora
    resultadoJugador.textContent = jugador.puntuacion;
    resultadoComputadora.textContent = computadora.puntuacion;
}

// Definimos la función jugar que se encarga de realizar una ronda del juego
function jugar(eleccionJugador) {
    // La computadora elige de forma aleatoria entre piedra, papel y tijeras
    let eleccionComputadora = ['piedra', 'papel', 'tijeras'][Math.floor(Math.random() * 3)];

    // Determinamos quién es el ganador de la ronda
    let ganador;
    if (eleccionJugador === eleccionComputadora) {
        ganador = 'empate';
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
    ) {
        ganador = 'jugador';
        jugador.puntuacion++;
    } else {
        ganador = 'computadora';
        computadora.puntuacion++;
    }

    // Mostramos el resultado de la ronda
    if (ganador === 'empate') {
        resultadoActual.textContent = 'Empate';
    } else if (ganador === 'jugador') {
        resultadoActual.textContent = 'Ganaste';
    } else {
        resultadoActual.textContent = 'Perdiste';
    }

    // Actualizamos las puntuaciones del jugador y de la computadora
    resultadoJugador.textContent = jugador.puntuacion;
    resultadoComputadora.textContent = computadora.puntuacion;

    // Añadimos la ronda al historial de partidas
    let entradaHistorial = document.createElement('p');
    entradaHistorial.textContent = `${jugador.nombre}: ${eleccionJugador}, Computadora: ${eleccionComputadora}, Ganador: ${ganador}`;
    historial.appendChild(entradaHistorial);

    // Verificamos si alguno de los jugadores ha alcanzado 3 puntos
    if (jugador.puntuacion === 3 || computadora.puntuacion === 3) {
        // Si es así, mostramos una alerta indicando quién ganó el juego y terminamos el juego
        if (jugador.puntuacion === 3) {
            Swal.fire('¡Felicidades!', `¡${jugador.nombre} ganó el juego!`, 'success');
        } else {
            Swal.fire('¡Oh no!', '¡La computadora ganó el juego!', 'error');
        }

        mostrarFin(jugador, computadora);
    }

    // Almacenamos los detalles de la ronda en el historial de partidas
    historialPartidas.push({
        eleccionJugador: eleccionJugador,
        eleccionComputadora: eleccionComputadora,
        ganador: ganador
    });
}

// Añadimos los event listeners a los botones de reiniciar y finalizar
btnReiniciar.addEventListener('click', reiniciarPartida);
btnFinalizar.addEventListener('click', finalizarPartida);

// Definimos la función reiniciarPartida que se encarga de reiniciar la partida
export function reiniciarPartida(){
    // Restablecemos las puntuaciones del jugador y de la computadora a 0
    jugador.puntuacion = 0;
    computadora.puntuacion = 0;

    // Actualizamos el marcador en la interfaz de usuario
    resultadoJugador.textContent = jugador.puntuacion;
    resultadoComputadora.textContent = computadora.puntuacion;

    // Limpiamos el historial de partidas
    historialPartidas.length = 0;

    // Limpiamos el historial de jugadas
    historial.innerHTML = '';
}

// Definimos la función finalizarPartida que se encarga de finalizar la partida
function finalizarPartida(){
    // Mostramos una alerta indicando que la partida ha finalizado y luego reiniciamos la partida
    Swal.fire('Partida finalizada', 'La partida ha finalizado. ¡Gracias por jugar!', 'info')
        .then(() => {
            reiniciarPartida();
        });
}