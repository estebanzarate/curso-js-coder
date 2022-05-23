# Booklet

## 1
### ACTIVIDAD 1: Homero
- Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o  let en la declaración.

### ACTIVIDAD 2: Ciudades
- Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.

### ACTIVIDAD 3: Carnet
- Declarar variables para representar la información de un carnet de conducir.
- Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

### ACTIVIDAD 4: Registro de personas
- Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.

### ACTIVIDAD 5: Descuentos
- Solicitar al usuario uno o más precios.
- Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

## 2
### ACTIVIDAD 1: Yo no fui
- Solicitar al usuario un (1) nombre.
- Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
- Caso contrario, la salida será “Yo no fui”.

### ACTIVIDAD 2: Presionar Y
- Solicitar al usuario una (1) tecla.
- Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.

### ACTIVIDAD 3: Escoger personaje
- Solicitar al usuario un (1) un número.
- Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
- “Elegiste a Homero” si es 1.
- “Elegiste a Marge” si es 2.
- “Elegiste a Bart” si es 3.
- “Elegiste a Lisa” si es 4.

### ACTIVIDAD 4: Presupuesto
- Solicitar al usuario un (1) número.
- Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
	- “Presupuesto bajo” si está entre 0 y 1000.
	- “Presupuesto medio” si está entre 1001 y 3000.
	- “Presupuesto alto” si es  mayor que 3000.

### ACTIVIDAD 5: Vacío
- Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

## 3
### ACTIVIDAD 1: El pizarrón
- Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

### ACTIVIDAD 2: El cuadrado ordinario
- Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

### ACTIVIDAD 3: Registro de alumnos
- Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
- Luego realizar un única salida por alerta, con el listado de alumnos registrados.

### ACTIVIDAD 4: El innombrable
- Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
- Luego realizar un única salida por alerta, con todos los nombres ingresados.

### ACTIVIDAD 5: Comprando productos
- Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
	- “Tomate” si es 1.
	- “Papa” si es 2.
	- “Carne” si es 3.
	- “Pollo” si es 4.

## 4
### ACTIVIDAD 1: Entradas y salidas
- Codificar tres funciones:
	- Una función entrada(), la cual solicite un valor al usuario y lo retorne.
	- Una función procesamiento(valor), donde se transforme la entrada.
	- Una función salida(valor), la cual mostrará el resultado por alerta.
- Luego, invocar las tres funciones.

### ACTIVIDAD 2: Redondeo
- Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
- Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

### ACTIVIDAD 3: Impuestos
- Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
- Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.

### ACTIVIDAD 4: Cotización
- Codificar dos funciones:
	- Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
	- Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
- Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.

### ACTIVIDAD 5: Validación
- Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.

## 5
### ACTIVIDAD 1: La tienda
- Declarar un clase Tienda que permita registrar:
	- Nombre de la tienda.
	- Dirección de la tienda.
	- Propietario de la tienda.
	- Rubro de la tienda.
- Luego invocar al menos tres (3) objetos usando esta clase.

### ACTIVIDAD 2: Registro de tiendas
- Solicitar al usuario el registro de cinco (5) tiendas.
- Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.

### ACTIVIDAD 3: Abierto y cerrado
- Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
- Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada.

#### Notas actividad 3
- Considerando que por prompt sólo podemos ingresar cadenas, se sugiere asumir que se trabaja sólo con horas en punto, de 0 a 22. El if debe verificar dos intervalos válidos.

### ACTIVIDAD 4: Validar propietario
- Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, se retorna false.
- Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres. Informar por alerta si los nombres pertenecen a algún dueño de tienda.

#### Notas actividad 4
- Es común emplear métodos de clase para validar si un valor recibido por parámetro es igual al valor de una propiedad del objeto. Se llama el método por cada objeto creado.

### ACTIVIDAD 5: El cliente

- Declarar una clase Cliente que permita:
- Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.
- Un método transferirDinero(valor), que permita  obtener y restar cierta cantidad del presupuesto, siempre que este parámetro sea menor al valor enviado, y mayor que cero.
- Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al usuario cinco (5) números. Informar por alerta si cada uno de los clientes cuenta con el presupuesto suficiente para realizar una transferencia de igual monto al ingresado.

#### Notas actividad 5
- Es posible verificar en un métòdo, usando un condicional, si la propiedad cumple con cierto valor antes de modificarla. Recordemos que una función retorna un  solo valor.


## 6
### ACTIVIDAD 1: El equipo
- Declarar un array de cadenas, compuesto por  los cuatro (4) nombres pertenecientes a los integrantes de un equipo. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

#### Notas actividad 1
- Cuando recorremos un array, empleamos un bucle (preferentemente un for o for...of) para acceder a los elementos de la colección uno a uno.

### ACTIVIDAD 2: Carga el equipo
- Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de forma consecutiva,  hasta que se ingrese “ESC”. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

#### Notas actividad 2
- Usando while  y prompt podemos cargar una colección de forma dinámica. Es decir, agregar al array en cada iteración la entrada capturada, usando el método push.

### ACTIVIDAD 3: Jugadores
- Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.

#### Notas actividad 3
- El método push puede recibir un objeto por parámetro, el cual se asociará al array empleado. Es posible agregar más propiedades a la clase jugador.

### ACTIVIDAD 4: Buscar jugador
- Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. La función retorna el jugador que coincide con el nombre.
- Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, e informar sobre el resultado de cada búsqueda.

#### Notas actividad 4
- El método find permite encontrar un elemento en el array. Como estamos trabajando con array de objetos, usamos la notación punto para verificar el valor de las propiedades.

### ACTIVIDAD 5: Filtrar jugadores
- Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con el segundo parámetro.
- Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los jugadores filtrados.

#### Notas actividad 5
- El método filter obtiene un array con los elementos que cumplen cierta comprobación. Como obtenemos un array al llamar la función creada, debemos recorrer el resultado.