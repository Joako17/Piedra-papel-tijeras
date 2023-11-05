// elementos.js
// Obteniendo y exportando los elementos principales del juego
export const inicio = document.getElementById('inicio');
export const juego = document.getElementById('juego');
export const fin = document.getElementById('fin');

// Obteniendo y exportando los botones de inicio
export const btnSi = document.getElementById('btnSi');
export const btnNo = document.getElementById('btnNo');

// Obteniendo y exportando el elemento del nombre del jugador
export const nombreJugador = document.getElementById('nombre-jugador');

// Obteniendo y exportando los elementos de los resultados

export const resultadoJugador = document.getElementById('marcador-jugador').querySelector('h4');
export const resultadoComputadora = document.getElementById('marcador-computadora').querySelector('h4');
export const resultado = document.getElementById('marcador-resultado').querySelector('h4');

// Obteniendo y exportando los botones de las opciones del juego
export const btnPiedra = document.getElementById('btn-piedra');
export const btnPapel = document.getElementById('btn-papel');
export const btnTijeras = document.getElementById('btn-tijeras');

// Obteniendo y exportando los botones de control del juego
export const btnReiniciar = document.getElementById('btn-reiniciar');
export const btnFinalizar = document.getElementById('btn-finalizar');

// Obteniendo y exportando el elemento del historial del juego
export const historial = document.getElementById('historial');
export const historialFin = document.getElementById('historial-fin');

// Obteniendo y exportando el elemento de la tabla del historial
export const tablaHistorial = document.getElementById('tabla-historial').querySelector('tbody');
export const resultadoActual = document.querySelector('#marcador-resultado h4');

// Boton de jugar de nuevo
export const btnJugarDeNuevo = document.getElementById('btn-jugar-de-nuevo')

export const cuerpoTabla = document.getElementById('cuerpo-tabla');