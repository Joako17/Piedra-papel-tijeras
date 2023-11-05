// Importamos la función mostrarInicio desde el módulo inicio.js
import { mostrarInicio } from "./inicio.js"; 

// Añadimos un event listener al objeto document que se dispara cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function (){
    // Llamamos a la función mostrarInicio para inicializar el juego y mostrar la pantalla de inicio
    mostrarInicio(); 
});