// inicio.js
import { inicio, juego, fin, btnSi, btnNo, nombreJugador } from './elementos.js';
import { mostrarJuego } from './juego.js';
import {jugador} from './juego.js'
import Swal from 'https://cdn.skypack.dev/sweetalert2';

export let nombreUsuario; // Declarar nombreUsuario y exportarlo
export function mostrarInicio() {
    // Asegurarse de que sólo la sección de inicio es visible al principio.
    inicio.style.display = 'block';
    juego.style.display = 'none';
    fin.style.display = 'none';

    // Agregar evento click al boton SI
    btnSi.addEventListener('click', function () {
        //ocultamos la sesion de inicio y mostramos la sesion juego
        inicio.style.display = 'none';
        juego.style.display = 'block';

        // Mostrar un cuadro de diálogo personalizado para solicitar el nombre del usuario.
        Swal.fire({
            title: 'Ingresa tu nombre',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            preConfirm: (nombre) => {
                // Actualizar el nombre del jugador en la pantalla, y en el objeto jugador.
                nombreJugador.textContent = `¡Acepta el desafío ${nombre}!`;
                jugador.nombre = nombre; // Actualizar jugador.nombre
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then(() => {
            // Llama a mostrarJuego después de que el cuadro de diálogo se cierre
            mostrarJuego();
        });

        // Agregar un console.log para verificar que el botón "Sí" funciona correctamente.
        console.log('El botón "Sí" ha sido presionado.');
    })

    // Agregar evento click al botón "No".
    btnNo.addEventListener('click', function () {
        // Cerrar la ventana del navegador.
        window.open('about:blank', '_self');
        window.close();

        // Agregar un console.log para verificar que el botón "No" funciona correctamente.
        console.log('El botón "No" ha sido presionado.');
    });
}
