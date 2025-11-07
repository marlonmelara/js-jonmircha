// Curso JavaScript: 11. Arreglos (Arrays)
// https://youtu.be/o3c8cW73weQ

const a = [];
const b = [1, true, 'hola', ['a', 'b', 'c', [1, 2, 3]]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][2]);

const c = Array.of('x', 'y', 'z', 3, 2, 1, 0);
console.log(c);

const d = Array(20).fill(false);
console.log(d);

// A partir de su constructor (usar con cuidado)
// new Array(n) crea un array con longitud n (sin valores definidos)
// new Array(a, b, c) crea un array con los valores indicados
const e = new Array(1, 2, 3, true, false, 'a');
console.log(e);

const colores = ['rojo', 'verde', 'azul'];
console.log(colores);

// mutaciones comunes
colores.push('negro');
console.log(colores);

colores.pop();
console.log(colores);

colores.pop();
console.log(colores);

colores.push('amarillo');
console.log(colores);

// forEach: callback con elemento y opcionalmente índice
colores.forEach(function (el) {
  console.log(`<li>${el}</li>`);
});

colores.forEach(function (el, index) {
  // corregido: uso correcto de template literal para insertar el índice
  console.log(`<li id="${index}">${el}</li>`);
});

// Array con días de la semana (ejemplo)
const semana = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo',
];

/* Evitar for...in para recorrer arrays: for...in itera propiedades enumerables (índices como strings),
   mejor usar for...of o un for clásico si necesita el índice. */

// for clásico: (ejemplo comentado)
// for (let i = 0; i < semana.length; i++) {
//   console.log(semana[i]);
// }

// for...of: iterar valores del array (recomendado)
for (const dia of semana) {
  console.log(dia);
}

// Ejemplos breves de métodos funcionales útiles
const numeros = [1, 2, 3, 4, 5];

// map -> transforma cada elemento
const dobles = numeros.map(n => n * 2);
console.log('dobles:', dobles);

// filter -> filtra según predicado
const pares = numeros.filter(n => n % 2 === 0);
console.log('pares:', pares);

// reduce -> acumula un valor
const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log('suma:', suma);

// notas rápidas:
// - Use Array.from, Array.of y spread (...) para crear/copiar arrays de forma segura.
// - Prefiera métodos inmutables (map/filter/reduce) cuando quiera evitar mutaciones directas.
