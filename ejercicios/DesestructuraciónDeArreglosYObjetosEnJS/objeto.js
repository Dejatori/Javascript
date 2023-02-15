let persona = {
    nombre: "Sarah",
    apellido: "Connor",
    edad: 30,
    nacionalidad: "Estadounidense",
    profesion: "Soldado"
};

console.log(persona.nombre); // "Sarah"
console.log(persona.apellido, persona.profesion); // "Connor" "Soldado"

// Desestructuración de objetos
let {nombre, apellido, profesion} = persona;

console.log(nombre); // "Sarah"
console.log(apellido, profesion); // "Connor" "Soldado"