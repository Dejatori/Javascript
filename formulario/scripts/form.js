// JavaScript Document
// Se agrega un listener al evento 'load' de la ventana que se encarga de 
// llamar a la función 'iniciar' cuando la página web ha terminado de cargar.
window.addEventListener('load',iniciar,false);

// Función que se ejecuta al cargar la página web
function iniciar(){
    // Se asignan a variables globales los elementos HTML que tienen 
    // los identificadores 'user', 'email' y 'password'.
	usuario = document.getElementById('user');
	email = document.getElementById('email');
	pass = document.getElementById('password');
    // Se asigna un evento de clic al botón con el identificador
    //  'enviar', que invoca a la función 'validacion'.
	enviar.addEventListener('click',validacion);
}

// Función que se ejecuta al hacer clic en el botón 'enviar'
function validacion(){
	
    // Validación del campo de usuario
	if(usuario.value == ''){
    // Si el campo está vacío, se establece un mensaje de error
    // personalizado y se cambia el color de fondo a rojo.
	usuario.setCustomValidity('El nombre del usuario es obligatorio');
	usuario.style.background = '#FFDDDD'; 
	return false; // Se devuelve 'false' para que no se envíe el formulario.
	}
	else
	{
        // Si el campo no está vacío, se establece el mensaje de error
        // en blanco y se restaura el color de fondo original.
		usuario.setCustomValidity('');
		usuario.style.background = '#fff';
	}
	
    // Validación del campo de correo electrónico
	if(email.value == ''){
    // Si el campo está vacío, se establece un mensaje de error 
    // personalizado y se cambia el color de fondo a rojo.
	email.setCustomValidity('El correo electrónico es obligatorio');
	email.style.background = '#FFDDDD'; // Se devuelve 'false' para que no se envíe el formulario.
	return false;
	}
	else
	{
        // Si el campo no está vacío, se establece el mensaje de error
        // en blanco y se restaura el color de fondo original.
		email.setCustomValidity('');
		email.style.background = '#fff';
	}
}