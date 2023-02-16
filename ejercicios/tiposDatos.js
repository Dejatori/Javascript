
console.log("Hola mundo".lastIndexOf("o")); // 9

console.log("Hola mundo".match(/ho/i)); // ["Ho", index: 0, input: "Hola mundo", groups: undefined]

console.log("Hola mundo".replace("mundo", "mundo cruel")); // Hola mundo cruel

console.log("Palabra".replace(/a/ig, "0")); // P0l0br0
// search
console.log("Hola mundo".search("mundo")); // 5
// slice
console.log("Hola mundo".slice(0, 7)); // Hola mu
// split
console.log("Hola mundo".split(" ")); // ["Hola", "mundo"]
// startsWith
console.log("Hola mundo".startsWith("mundo")); // false
console.log("Hola mundo".startsWith("Hola")); // true
console.log("Hola mundo".startsWith("mundo", 5)); // true
// substr
console.log("Hola mundo".substr(1, 6)); // ola mu
// substring
console.log("Hola mundo".substring(1, 6)); // ola m
// toLowerCase
console.log("HOLA MUNDO".toLowerCase("")); // hola mundo
// toUpperCase
console.log("Hola mundo".toUpperCase()); // HOLA MUNDO
// trim
console.log(" Hola mundo            ".trim()); // Hola mundo
console.log("               Hola mundo            ".trim()); // Hola mundo

/* Conversiones de String
    parseInt y parseFloat
    permite convertir un string a un número
    parseInt: convierte un string a un número entero
    parseFloat: convierte un string a un número decimal
*/

console.log(parseInt("123")); // 123
console.log(parseFloat("123.456")); // 123.456
console.log(parseInt("Hola")) // NaN
console.log(parseFloat("21 calles")) // 21
console.log(parseInt("1e3")); // 1
console.log(parseFloat("1e3")); // 1000
console.log(parseFloat("1,5")); // 1.5
console.log(parseFloat("1.5")); // 1.5
console.log(String(new Date())); // Wed Sep 01 2021 11:00:00 GMT-0500 (hora estándar de Colombia)

/* Formatos de Strings
    literales de cadena
    template strings
    template literals
*/

// literales de cadena
console.log("Hola mundo"); // Hola mundo
console.log('Hola mundo'); // Hola mundo

// template strings
console.log(`Hola mundo`); // Hola mundo

// template literals
console.log(`Hola mundo`); // Hola mundo

// secuencia de escape en hexadecimal
// que significa que se puede escribir un carácter en hexadecimal y se convertirá en un carácter ASCII
// Los números hexadecimales van de 0 a 9 y de A a F
// \x seguido de dos dígitos hexadecimales representa un carácter ASCII en hexadecimal (0-255)
// \x48\x6f\x6c\x61 = Hola

console.log("\x48\x6f\x6c\x61"); // Hola

// secuencia de escape Unicode
console.log("\u0048\u006f\u006c\u0061"); // Hola

/* La anotación de la izquierda es con codificación HTML Entity
    Hexacedimal.
    La anotación de la derecha está representada con codificación C/C++/Java.
*/
console.log('\u{1F440}', "\uD83D\uDC40"); // 👀 👀
// Literales de cadena multilínea (sólo con ES5.1 e inferiores)
console.log('Nombre:Pablo\n\
Apellidos:Fernández'); // Nombre:Pablo Apellidos:Fernández
// Literales de plantilla (sólo con ES6 y superiores)
console.log(`Nombre:Pablo
Apellidos:Fernández`); // Nombre:Pablo Apellidos:Fernández