/* Funcion factorial:
Podemos definir el factorial de un número entero positivo n, expresado n!, 
el producto de todos los números enteros positivos menores o iguales que n. 
El factorial de 0 es 1. 

Definicion matematica:

n! = (    1          , si n < 2)
n! = (  n * (n-1)!   , si n > 2)

*/

// Linea para poder poner inputs.
//const prompt = require('prompt-sync')();

/* Funcion para calcular el numero factorial de n, ingresado por el usuario.
Condicion 1: Que n sea menor que 2, en ese caso mostrar en pantalla 1.
Condicion 2: Que n sea mayor que 2, en ese caso calcular con la formula n * (n-1)! .

cuando n > 2 la formula llama al factorial por ende, es una funcion que se llama asi misma, osea una funcion recursiva.
Funcion Factorial. */

function factorial(n){
    if (n < 2){
        return 1
    }   
    else{
        return n * factorial(n-1)
    }
}

// DOM
// Evento al hacer clic en el botón para calcular el factorial.
document.getElementById('calcular').addEventListener('click', function() {
    // Obtener el valor del input.
    let n = document.getElementById('inputN').value;

    // Convertimos la entrada a un número flotante.
    n = Number(n);

    // Verificamos que el número sea entero positivo.
    if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
        // Calculamos el factorial y mostramos el resultado en el DOM.
        const resultado = `El factorial de ${n} es: ${factorial(n)}`;
        document.getElementById('resultado').textContent = resultado;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, ingresa un número entero positivo válido.';
    }
});


