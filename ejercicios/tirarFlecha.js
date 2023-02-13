// Función tirarFlecha
function tirarFlecha(enElBlanco) {
    // Si enElBlanco es true, devuelve "¡Felicidades! ¡Has ganado un premio!"
    // Si enElBlanco es false, devuelve "¡Lo siento! ¡Has perdido!"
    return enElBlanco ? "¡Felicidades! ¡Has ganado un premio!" : "¡Lo siento! ¡Has perdido!";
}
// Exportar la función
module.exports.tirarFlecha = tirarFlecha;