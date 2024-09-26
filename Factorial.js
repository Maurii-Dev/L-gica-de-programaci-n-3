/* Funcion factorial:
Podemos definir el factorial de un número entero positivo n, expresado n!, 
el producto de todos los números enteros positivos menores o iguales que n. 
El factorial de 0 es 1. 

Definicion matematica:

    (    1          , si n < 2
n! = (  n * (n-1)!   , si n > 2
'''
*/

// Linea para poder poner inputs.
const prompt = require('prompt-sync')();

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

while (true) {
    // Pedimos al usuario que ingrese un número.
    let n = prompt('Ingrese un numero entero: ');
    
    // Convertimos la entrada a un número flotante.
    n = Number(n);

    // Verificamos que el número sea un número entero positivo.
    if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
        // Llamando a la función y mostrando en pantalla el resultado.
        console.log(`El factorial de ${n} es: ${factorial(n)}`);
    } else {
        console.log('Por favor, ingresa un número entero positivo válido.');
    }
}



