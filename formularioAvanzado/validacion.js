// JavaScript Document

window.addEventListener('load',iniciar,false);

function iniciar(){
	enviar.addEventListener('click',validacion);
}

function validacion(){
	
	//COMPROBAMOS QUE CHECKBOX DESEO ESTÁ MARCADO
	deseo = document.getElementById('deseo');
	if(!deseo.checked){
		general.deseo.focus();
		alert('[ERROR] Tiene que seleccionar que desea reservar algún libro');
		return false;
	}
	
	//Validamos el nombre
	nombre = document.getElementById('nombre');
	if(nombre.value.length == 0){
		general.nombre.focus();
		alert('[ERROR] Tiene que escribir su nombre.');
		return false;
	}
	
	//Validamos la direccion
	direccion = document.getElementById('direccion');
	if(direccion.value.length == 0){
		general.direccion.focus();
		alert('[ERROR] Tiene que escribir su dirección.');
		return false;
	}
	
	//Validamos la localidad
	localidad = document.getElementById('localidad');
	if(localidad.value.length == 0){
		general.localidad.focus();
		alert('[ERROR] Tiene que escribir su localidad.');
		return false;
	}
	
	//Validamos el código postal
	codigo_postal = document.getElementById('codigo_postal');
	if(codigo_postal.value.length == 0){
		general.codigo_postal.focus();
		alert('[ERROR] Tiene que escribir su Código Postal.');
		return false;
	}
	
	//Validamos el teléfono móvil
	movil = document.getElementById('movil');
	if(movil.value.length == 0){
		general.movil.focus();
		alert('[ERROR] Tiene que escribir su teléfono móvil.');
		return false;
	}
	
	//Validamos el correo electrónico
	email = document.getElementById('email');
	if(email.value.length == 0){
		general.email.focus();
		alert('[ERROR] Tiene que escribir su correo electrónico.');
		return false;
	}
	
	//Valido que el usuario eliga tapa_dura o tapa_blanda
	tapa_blanda = document.getElementById('tapa_blanda');
	tapa_dura = document.getElementById('tapa_dura');
	
	if(!tapa_blanda.checked && !tapa_dura.checked){
		general.tapa_blanda.focus();
		alert('[ERROR] Tiene que seleccionar alguna encuadernación');
		return false;
	}
	
	//Comprobamos que ha puesto un número de ejemplares de tapa blanda si ha seleccionado esta modalidad
	numero_tapa_blanda = document.getElementById('numero_tapa_blanda');
	if(tapa_blanda.checked && numero_tapa_blanda.value.length == 0){
		general.numero_tapa_blanda.focus();
		alert('[ERROR] Tiene que escribir la cantidad de ejemplares de tapa blanda que desea');
		return false;
	}
	
	
	//Comprobamos que ha puesto un número de ejemplares de tapa dura si ha seleccionado esta modalidad
	numero_tapa_dura = document.getElementById('numero_tapa_dura');
	if(tapa_dura.checked && numero_tapa_dura.value.length == 0){
		general.numero_tapa_dura.focus();
		alert('[ERROR] Tiene que escribir la cantidad de ejemplares de tapa dura que desea');
		return false;
	}
}