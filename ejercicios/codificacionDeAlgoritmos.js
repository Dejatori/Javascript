const calificacion = 4;

if (calificacion >= 3) {
  console.log("Aprobado");
} else {
    console.log("Reprobado");
}

primo1 = 1;
primo2 = 2;

Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// funcion para calcular numeros primos
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
        return false;
        }
    }
    return numero !== 1;
    }
    console.log(esPrimo(primo1)); // false
    console.log(esPrimo(primo2)); // true

// funcion para calcular el porcentaje de numeros primos en un array
function porcentajeRepArray(esPrimo, Array) {
    let porcentaje = 0;
    for (let i = 0; i < Array.length; i++) {
        if (esPrimo(Array[i])) {
            porcentaje++;
        }
    }
    return porcentaje; // 4
}
// convertir el resultado en porcentaje
console.log(porcentajeRepArray(esPrimo, Array) / Array.length * 100 + "%"); // 40%