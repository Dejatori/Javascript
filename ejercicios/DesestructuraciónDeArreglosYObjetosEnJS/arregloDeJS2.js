let [saludo, pronombre, id, nombre, apellido] = ["Hola", "Yo", "soy", "Sarah", "Connor"]; // Desestructuración de arreglos

console.log(saludo); // "Hola"
console.log(pronombre); // "Yo"
console.log(id); // "soy"
console.log(nombre); // "Sarah"
console.log(apellido); // "Connor"

console.log(saludo, pronombre, id, nombre, apellido); // "Hola" "Yo" "soy" "Sarah" "Connor"

let [saludo2, ...introduccion2] = ["Hola", "Yo", "Sarah", "Connor"];

console.log(saludo2); // "Hola"
console.log(introduccion2); // ["Yo", "soy", "Sarah", "Connor"]

let [Terminator] = ["Hasta la vista, baby", "I will back", "Dame esa chaqueta"]; 

console.log(Terminator); // "Hasta la vista, baby"

let [John, , Hijo] = ["Lidera la resistencia", "Es el futuro", "Es el hijo de Sarah Connor"]; 

console.log(John, Hijo); // "Lidera la resistencia" "Es el hijo de Sarah Connor"

let [T800, , Killer] = ["Es un cyborg", "Es un Terminator", "Es un asesino"];

console.log(T800, Killer); // "Es un cyborg" "Es un asesino"

let [Skynet, red, criminal] = ["Es una IA", "Es una red de computadoras", "Es una organización criminal"];

console.log(Skynet, criminal); // "Es una IA" "Es una organización criminal"

//----------------------------------------------------------------------------------------------------------------------------//
// Ejercicio en clase por Carlos Soto pregunton
// Extraer varias prociones de un arreglo en un solo llamado

let carlos = ["Hola", "Yo", "soy", "Carlos", "Soto"];

// slice es un método de los arreglos que permite extraer una porción de un arreglo
let [llamada] = [carlos.slice(2), carlos.slice(3), carlos.slice(4)]; 

console.log(llamada); // ["soy", "Carlos", "Soto"]

//----------------------------------------------------------------------------------------------------------------------------//
// Ejercicio en clase por Carlos Soto pregunton (otra solución)

let despedida = ["Adios", "Hasta luego", "Nos vemos"];
let perguntin = ["¿Como estas?", "¿Como te va?", "¿Como te sientes?"];

let [adios, pregunta] = despedida.concat(perguntin);

console.log(adios, pregunta); // "Adios" "¿Como estas?"