function Producto(name, price) {
    this.name = name;
    this.price = price;
    this.quantity = 0;
}

//Se crean los productos
const producto1 = new Producto("Producto1", 100);
const producto2 = new Producto("Producto2", 200);
const producto3 = new Producto("Producto3", 300);

let subTotal = 0;

//Muestra productos disponibles
function start() {
    let select = parseInt(prompt("Productos disponibles: \n\t ingresa el número del producto que quieres comprar \n\n 1 -Producto1 \n 2 -Producto2 \n 3 -Producto3 \n\n 9- Finalizar compra \n 0- Salir"));
    quantity(select);
}

//Pregunta la cantidad del producto que se va a comprar y hace el cálculo del subtotal hasta ese momento
function quantity(select) {
    if(select === 9) return total(subTotal);
    if(select === 0) return alert("Volvé pronto!!");
    let howMuch = parseInt(prompt("Cuántos vas a llevar?"));
    switch (select) {
        case 1:
            subTotal += producto1.price * howMuch;
            break;
        case 2:
            subTotal += producto2.price * howMuch;
            break;
        case 3:
            subTotal += producto3.price * howMuch;
            break;
    }
    start();
}

//Muestra el total a pagar
function total(subTotal) {
    if(subTotal === 0) {
        alert("Tu carrito está vacío. \n Selecciona un producto de la lista");
        return start();
    }
    alert("El total a pagar es: $" + subTotal);
    alert("Gracias por tu compra");
}

//Empieza la app
start();