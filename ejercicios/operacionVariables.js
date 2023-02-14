var total = 0;

function suma (a, b) {
    var aux = a + b;
    total = aux;
    return total;
    console.log(total);
}

function resta (a, b) {
    var aux = a - b;
    total = aux;
    return total;
    console.log(total);
}

// Pide el valor de a y b por consola
var a = parseInt(prompt("Introduce el valor de a: "));
var b = parseInt(prompt("Introduce el valor de b: "));

// Llama a la función suma
var resultado = suma(a, b);
console.log("El resultado de la suma es: " + resultado);

// Llama a la función resta
resultado = resta(a, b);
console.log("El resultado de la resta es: " + resultado);

