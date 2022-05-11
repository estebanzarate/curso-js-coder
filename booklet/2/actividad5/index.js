let producto1 = prompt("Ingrese un producto"),
    producto2 = prompt("Ingrese un producto"),
    producto3 = prompt("Ingrese un producto"),
    producto4 = prompt("Ingrese un producto");

if(producto1 != "" && producto2 != "" && producto3 != "" && producto4 != "") {
    let list = `${producto1}\n${producto2}\n${producto3}\n${producto4}`;
    alert(list);
} else {
    alert('Error: Es necesario cargar todos los productos.');
}