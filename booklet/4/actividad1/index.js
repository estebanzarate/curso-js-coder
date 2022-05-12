const entrada = () => prompt('Ingresa un dato');
let valor = entrada();

const procesamiento = valor => `***${valor}***`;
valor = procesamiento(valor);

const salida = valor => alert(`${valor}`);
salida(valor);