let [saludo, pronombre] = ["Hola", "Yo", "soy", "Sarah", "Connor"]; // Desestructuración de arreglos

console.log(saludo); // "Hola"
console.log(pronombre); // "Yo"

let [Terminator] = ["Hasta la vista, baby", "I will back", "Dame esa chaqueta"]; 

console.log(Terminator); // "Hasta la vista, baby"

let [John, , Hijo] = ["Lidera la resistencia", "Es el futuro", "Es el hijo de Sarah Connor"]; 

console.log(John, Hijo); // "Lidera la resistencia" "Es el hijo de Sarah Connor"

let [T800, , Killer] = ["Es un cyborg", "Es un Terminator", "Es un asesino"];

console.log(T800, Killer); // "Es un cyborg" "Es un asesino"

let [Skynet, red, criminal] = ["Es una IA", "Es una red de computadoras", "Es una organización criminal"];

console.log(Skynet, criminal); // "Es una IA" "Es una organización criminal"