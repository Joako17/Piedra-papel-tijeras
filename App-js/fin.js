// Importamos los elementos necesarios desde el módulo elementos.js
import { inicio, juego, fin, cuerpoTabla } from './elementos.js';

// Importamos el historial de partidas y la función reiniciarPartida desde el módulo juego.js
import { historialPartidas, reiniciarPartida } from './juego.js';

// Importamos el botón para jugar de nuevo desde el módulo elementos.js
import { btnJugarDeNuevo } from './elementos.js';

// Definimos la función mostrarFin que se encarga de mostrar la pantalla de fin y de mostrar el historial de partidas
export function mostrarFin() {
    // Imprimimos el historial de partidas en la consola
    console.log(historialPartidas);

    // Ocultamos las pantallas de inicio y de juego, y mostramos la pantalla de fin
    inicio.style.display = 'none';
    juego.style.display = 'none';
    fin.style.display = 'block';

    // Vaciamos el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';

    // Mostramos los detalles de cada ronda en el historial de partidas
    historialPartidas.forEach((partida, index) => {
        // Creamos una nueva fila en la tabla
        let fila = cuerpoTabla.insertRow();

        // Añadimos las celdas a la fila con los detalles de la ronda
        fila.insertCell().textContent = `Ronda ${index + 1}`;
        fila.insertCell().textContent = partida.ganador;
        fila.insertCell().textContent = partida.eleccionJugador;
        fila.insertCell().textContent = partida.eleccionComputadora;
        fila.insertCell().textContent = new Date().toLocaleString();
    });
}

// Añadimos un event listener al botón para jugar de nuevo que reinicia la partida y muestra la pantalla de juego
btnJugarDeNuevo.addEventListener('click', () => {
    fin.style.display = 'none';
    juego.style.display = 'block';
    reiniciarPartida();
});