if (localStorage.getItem('nombre') == undefined) {
	let nombre = prompt('Ingresa un nombre');
	localStorage.setItem('nombre', nombre);
} else {
	alert(`Nombre: ${localStorage.getItem('nombre')}`);
}