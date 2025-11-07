/*
 * Arrow Functions (=>)
 * Son una forma más concisa de escribir funciones en JavaScript introducida en ES6.
 * Características principales:
 * - Sintaxis más corta que las funciones tradicionales
 * - No tienen su propio this (heredan el this del contexto que las contiene)
 * - Ideal para funciones cortas y callbacks
 * - No pueden ser usadas como constructores
 */

console.log('***** function sin flechas *****');
// Ejemplo: función tradicional asignada a una const (función expresada)
const saludo1 = function () {
  console.log('hola mundo 1');
};

saludo1();

console.log('***** function con flechas *****');
// Ejemplo: arrow function con cuerpo en llaves (múltiples sentencias)
const saludo2 = () => {
  console.log('hola mundo 2');
};

saludo2();

console.log('***** function con flechas y sin llaves *****');
// Ejemplo: arrow function con expresión concisa (implicit return cuando aplica)
const saludo3 = () => console.log('hola mundo 3');
saludo3();

// Ejemplo: único parámetro -> paréntesis opcionales
const saludar = nombre => console.log(`Hola ${nombre}`);
saludar(
  'Jon'
); /** Con arrow functions, cuando la función tiene un único parámetro, se pueden omitir los paréntesis. También se puede omitir return si es una sola expresión (expresión concisa) */

function saludar(nombre) {
  return console.log(`Hola ${nombre}`);
}
saludar('Jon');

// Otra transformación de función con arrow
// Ejemplo: función tradicional que retorna un valor
const sumar1 = function (a, b) {
  return a + b;
};

console.log(sumar1(2, 2));

// Ejemplo equivalente con arrow y retorno implícito
const sumar2 = (a, b) => a + b;

console.log(sumar2(2, 2));

// Función con varias líneas (usa llaves y return explícito si hace falta)
const funcionDeVariasLineas = () => {
  console.log('uno');
  console.log('dos');
  console.log('tres');
};

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

// Uso común: callbacks en métodos de array
numeros.forEach(function (el, index) {
  console.log(`${el} esta en la posición ${index}`);
});
// Mismo ejemplo con arrow:
// numeros.forEach((el, index) => console.log(`${el} esta en la posición ${index}`));

function perro1() {
  console.log(this);
}

perro1();

// Diferencia importante: comportamiento de 'this'
// ladrarRegular usa function → 'this' apunta al objeto
// ladrarArrow usa arrow → hereda 'this' del contexto léxico (no del objeto)
const perro2 = {
  nombre: 'Goku',
  ladrarRegular: function () {
    console.log(this);
  },
  ladrarArrow: () => {
    console.log(this);
  },
};

perro2.ladrarRegular();
perro2.ladrarArrow();

// Otro ejemplo que muestra por qué no conviene usar arrow para métodos
const objeto = {
  nombre: 'Ejemplo',
  funcionRegular: function () {
    console.log(this.nombre);
  },
  funcionArrow: () => {
    console.log(this.nombre);
  },
};

objeto.funcionRegular(); // Imprime "Ejemplo"
objeto.funcionArrow(); // Imprime undefined (o el valor de nombre en el contexto global)
