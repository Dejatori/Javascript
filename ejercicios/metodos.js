let texto = "Hola Mundo Mundo Mundo!"; // Definimos una variable de tipo string
console.log(texto.charAt(3)); // Devuelve el carácter de la posición 3
console.log(texto.charCodeAt(0)); // Devuelve el código ASCII de la posición 0
console.log(texto.concat(" ", "Adios Mundo!")); // Concatena dos cadenas
console.log(texto.endsWith("!")); // Devuelve true si la cadena termina con el carácter especificado
console.log(texto.indexOf("Mundo")); // Devuelve la posición de la primera aparición de la cadena especificada
console.log(texto.lastIndexOf("!")); // Devuelve la posición de la última aparición de la cadena especificada
console.log(texto.match(/Mundo/g)); // Devuelve un array con las coincidencias de la cadena especificada en una expresión regular
console.log("Hola Mundo".match(/Ho/i)); // Devuelve un array con las coincidencias de la cadena especificada en una expresión regular

